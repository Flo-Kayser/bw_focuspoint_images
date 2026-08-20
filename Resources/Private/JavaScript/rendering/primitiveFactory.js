const DEFAULT_LINE_SIZE = 0.2
const CROSSHAIR_SIZE = 0.05

function number(value, fallback = 0) {
    const parsed = Number(value)

    return Number.isFinite(parsed) ? parsed : fallback
}

function point(x, y) {
    return {
        x: number(x),
        y: number(y),
    }
}

function rectangleToPolygon(focuspoint) {
    const x = number(focuspoint.x)
    const y = number(focuspoint.y)
    const width = number(focuspoint.width)
    const height = number(focuspoint.height)

    return {
        type: 'polygon',
        points: [
            point(x, y),
            point(x + width, y),
            point(x + width, y + height),
            point(x, y + height),
        ],
    }
}

function ellipseToPrimitive(focuspoint) {
    return {
        type: 'ellipse',
        x: number(focuspoint.x),
        y: number(focuspoint.y),
        width: number(focuspoint.width),
        height: number(focuspoint.height),
    }
}

function lineToPrimitive(focuspoint) {
    const x1 = number(focuspoint.x)
    const y1 = number(focuspoint.y)

    return {
        type: 'line',
        x1,
        y1,
        x2: number(focuspoint.x2, x1 + number(focuspoint.width, DEFAULT_LINE_SIZE)),
        y2: number(focuspoint.y2, y1 + number(focuspoint.height, DEFAULT_LINE_SIZE)),
    }
}

function polygonToPrimitive(focuspoint) {
    return {
        type: 'polygon',
        points: Array.isArray(focuspoint.vertices)
            ? focuspoint.vertices.map((vertex) => point(vertex?.x, vertex?.y))
            : [],
    }
}

function crosshairToPrimitives(focuspoint) {
    const x = number(focuspoint.x)
    const y = number(focuspoint.y)

    return [
        {
            type: 'line',
            x1: x - CROSSHAIR_SIZE,
            y1: y,
            x2: x + CROSSHAIR_SIZE,
            y2: y,
        },
        {
            type: 'line',
            x1: x,
            y1: y - CROSSHAIR_SIZE,
            x2: x,
            y2: y + CROSSHAIR_SIZE,
        },
    ]
}

function explicitPrimitives(focuspoint) {
    if (focuspoint.primitive && typeof focuspoint.primitive === 'object') {
        return [focuspoint.primitive]
    }

    if (Array.isArray(focuspoint.primitives)) {
        return focuspoint.primitives.filter((primitive) => primitive && typeof primitive === 'object')
    }

    return null
}

export function focuspointToPrimitives(focuspoint) {
    if (!focuspoint || typeof focuspoint !== 'object') {
        return []
    }

    const storedPrimitives = explicitPrimitives(focuspoint)
    if (storedPrimitives !== null) {
        return storedPrimitives
    }

    switch (focuspoint.shape ?? 'rectangle') {
        case 'ellipse':
        case 'circle':
            return [ellipseToPrimitive(focuspoint)]
        case 'line':
            return [lineToPrimitive(focuspoint)]
        case 'crosshair':
            return crosshairToPrimitives(focuspoint)
        case 'polygon':
            return [polygonToPrimitive(focuspoint)]
        default:
            return [rectangleToPolygon(focuspoint)]
    }
}

export function collectPrimitives(focuspoints) {
    if (!Array.isArray(focuspoints)) {
        return []
    }

    return focuspoints.flatMap(focuspointToPrimitives)
}
