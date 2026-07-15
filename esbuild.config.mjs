import esbuild from "esbuild";
import sveltePlugin from "esbuild-svelte";
import * as path from 'node:path'
import {readdir} from 'node:fs'
import {promisify} from 'node:util'

let devMode = true;

const ignoreWarnings = new Set([
    "'TYPO3' is not defined"
])

// ── Shape Registry ─────────────────────────────────────

const SHAPE_EXTENSION = '.svelte'

function parseShapeIdentifier(filename) {
    if (!filename.endsWith(SHAPE_EXTENSION)) {
        return null
    }

    return filename
        .slice(0, -SHAPE_EXTENSION.length)
        .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
        .replace(/_/g, '-')
        .toLowerCase()
}

const focuspointShapesPlugin = () => ({
    name: 'focuspoint-shapes',
    setup(build) {
        const namespace = 'focuspoint_shapes_ns'
        const prefix = 'focuspoint-shapes:'

        build.onResolve({filter: /^focuspoint-shapes:/}, args => ({
            path: path.join(args.resolveDir, args.path.slice(prefix.length)),
            namespace
        }))

        build.onLoad({filter: /.*/, namespace}, async (args) => {
            let files
            try {
                files = await promisify(readdir)(args.path, {
                    withFileTypes: true,
                })
            } catch {
                return {
                    contents: 'export const definitions = [];',
                    loader: 'js',
                    resolveDir: args.path,
                    watchDirs: [args.path]
                }
            }

            const shapes = files
                .filter(file => file.isFile())
                .map(file => {
                    const identifier = parseShapeIdentifier(file.name)
                    if (!identifier) {
                        return null
                    }
                    return {
                        identifier,
                        modulePath: path.join(args.path, file.name)
                    }
                })
                .filter(Boolean)
                .sort((a, b) => a.identifier.localeCompare(b.identifier))

            let contents = shapes.map((shape,index)=>`import s${index} from '${shape.modulePath}';`).join('\n')

            contents += '\nexport const definitions = [\n'
            contents += shapes.map((shape,index)=>`\t{identifier: '${shape.identifier}', component: s${index}},`).join('\n')
            contents += '\n];\n'

            return {
                contents,
                loader: 'js',
                resolveDir: args.path,
                watchDirs: [args.path]

            }

        })
    }
})

const buildConfig = {
    entryPoints: [
        "Resources/Private/JavaScript/FocuspointElement.svelte",
        "Resources/Private/JavaScript/FocuspointWizard.svelte"
    ],
    mainFields: ["svelte", "browser", "module", "main"],
    conditions: ["svelte", "browser"],
    bundle: true,
    outdir: "Resources/Public/JavaScript/",
    format: "esm",
    plugins: [
        focuspointShapesPlugin(),
        sveltePlugin({
            compilerOptions: {
                dev: devMode,
                customElement: true
            },
            filterWarnings(warning) {
                if (ignoreWarnings.has(warning.code)) {
                    return false
                }
            }
        })],
    logLevel: "info",
    sourcemap: true,
    external: ["@typo3/*", "interactjs"],
};

if (process.argv.includes('--build')) {
    await build()
} else {
    await watch()
}

async function build() {
    devMode = false;
    buildConfig.sourcemap = false
    buildConfig.minify = true
    await esbuild.build(buildConfig)
}

async function watch() {
    let ctx = await esbuild.context(buildConfig)
    await ctx.watch()
}
