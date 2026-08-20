import {registerShapeDefinition} from './shapeRegistry.js'
import {builtinPrimitiveFactories} from './rendering/primitiveFactory.js'

const boxDefaults = ({x = 0.333, y = 0.333, width = 0.2, height = 0.2} = {}) => ({
  x,
  y,
  width,
  height,
})

const builtinShapeDefinitions = {
  rectangle: {
    defaults: boxDefaults,
    toPrimitives: builtinPrimitiveFactories.rectangle,
  },
  ellipse: {
    defaults: boxDefaults,
    toPrimitives: builtinPrimitiveFactories.ellipse,
  },
  line: {
    defaults: (context) => {
      const defaults = boxDefaults(context)

      return {
        ...defaults,
        x2: Math.min(1, defaults.x + defaults.width),
        y2: Math.min(1, defaults.y + defaults.height),
      }
    },
    toPrimitives: builtinPrimitiveFactories.line,
  },
  crosshair: {
    defaults: ({x = 0.5, y = 0.5} = {}) => ({x, y}),
    toPrimitives: builtinPrimitiveFactories.crosshair,
  },
  polygon: {
    defaults: (context) => {
      const {x, y, width, height} = boxDefaults(context)

      return {
        x,
        y,
        width,
        height,
        vertices: [
          {x, y},
          {x: Math.min(1, x + width), y},
          {x: Math.min(1, x + width), y: Math.min(1, y + height)},
          {x, y: Math.min(1, y + height)},
        ],
      }
    },
    toPrimitives: builtinPrimitiveFactories.polygon,
  },
}

for (const [identifier, definition] of Object.entries(builtinShapeDefinitions)) {
  registerShapeDefinition(identifier, definition)
}
