import {registerShapeDefinition} from './shapeRegistry.js'
import {builtinPrimitiveFactories} from './rendering/primitiveFactory.js'

const clamp = (value) => Math.max(0, Math.min(1, value))

const boxDefaults = ({x = 0.333, y = 0.333, width = 0.2, height = 0.2} = {}) => ({
  x: clamp(x),
  y: clamp(y),
  width: clamp(width),
  height: clamp(height),
})

const boxFromFocuspoint = (focuspoint) => {
  const defaults = boxDefaults(focuspoint)

  if (focuspoint.shape !== 'crosshair') {
    return defaults
  }

  return {
    ...defaults,
    x: clamp(defaults.x - defaults.width / 2),
    y: clamp(defaults.y - defaults.height / 2),
  }
}

const builtinShapeDefinitions = {
  rectangle: {
    defaults: boxDefaults,
    convertFrom: boxFromFocuspoint,
    toPrimitives: builtinPrimitiveFactories.rectangle,
  },
  ellipse: {
    defaults: boxDefaults,
    convertFrom: boxFromFocuspoint,
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
    convertFrom: (focuspoint) => {
      const defaults = boxDefaults(focuspoint)

      return {
        ...defaults,
        x2: clamp(focuspoint.x2 ?? defaults.x + defaults.width),
        y2: clamp(focuspoint.y2 ?? defaults.y + defaults.height),
      }
    },
    toPrimitives: builtinPrimitiveFactories.line,
  },
  crosshair: {
    defaults: ({x = 0.5, y = 0.5} = {}) => ({x, y}),
    convertFrom: (focuspoint) => {
      if (focuspoint.shape === 'line') {
        return {
          x: clamp(((focuspoint.x ?? 0) + (focuspoint.x2 ?? focuspoint.x ?? 0)) / 2),
          y: clamp(((focuspoint.y ?? 0) + (focuspoint.y2 ?? focuspoint.y ?? 0)) / 2),
        }
      }

      return {
        x: clamp((focuspoint.x ?? 0) + ((focuspoint.width ?? 0) / 2)),
        y: clamp((focuspoint.y ?? 0) + ((focuspoint.height ?? 0) / 2)),
      }
    },
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
    convertFrom: (focuspoint) => {
      if (Array.isArray(focuspoint.vertices) && focuspoint.vertices.length >= 3) {
        return {
          ...boxDefaults(focuspoint),
          vertices: focuspoint.vertices,
        }
      }

      const {x, y, width, height} = boxFromFocuspoint(focuspoint)

      return {
        x,
        y,
        width,
        height,
        vertices: [
          {x, y},
          {x: clamp(x + width), y},
          {x: clamp(x + width), y: clamp(y + height)},
          {x, y: clamp(y + height)},
        ],
      }
    },
    toPrimitives: builtinPrimitiveFactories.polygon,
  },
}

for (const [identifier, definition] of Object.entries(builtinShapeDefinitions)) {
  registerShapeDefinition(identifier, definition)
}
