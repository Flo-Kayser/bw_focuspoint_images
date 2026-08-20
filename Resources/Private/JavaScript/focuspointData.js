import {createShapeDefaults} from './shapeRegistry.js'

function clamp(value, fallback = 0) {
  const number = Number(value)

  return Math.max(0, Math.min(1, Number.isFinite(number) ? number : fallback))
}

function normalizeVertices(vertices) {
  if (!Array.isArray(vertices)) {
    return []
  }

  return vertices
    .filter((vertex) => vertex && typeof vertex === 'object')
    .map((vertex) => ({
      ...vertex,
      x: clamp(vertex.x),
      y: clamp(vertex.y),
    }))
}

export function parseFocuspoints(value) {
  if (Array.isArray(value)) {
    return value
  }

  if (typeof value !== 'string' || value.trim() === '') {
    return []
  }

  try {
    const parsed = JSON.parse(value)

    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

export function normalizeFocuspoints(points, config = {}) {
  const allowedShapes = Array.isArray(config.allowedShapes) && config.allowedShapes.length > 0
    ? config.allowedShapes
    : ['rectangle']

  const fallbackShape = allowedShapes[0]
  const geometryDefaults = {
    width: Number.parseFloat(config.defaultWidth) || 0.2,
    height: Number.parseFloat(config.defaultHeight) || 0.2,
  }

  return parseFocuspoints(points)
    .filter((focuspoint) => focuspoint && typeof focuspoint === 'object')
    .map((focuspoint) => {
      const requestedShape = typeof focuspoint.shape === 'string'
        ? focuspoint.shape
        : fallbackShape

      const shape = allowedShapes.includes(requestedShape)
        ? requestedShape
        : fallbackShape

      const normalized = {
        ...createShapeDefaults(shape, geometryDefaults),
        ...focuspoint,
        shape,
      }

      for (const property of ['x', 'y', 'width', 'height', 'x2', 'y2']) {
        if (property in normalized) {
          normalized[property] = clamp(normalized[property])
        }
      }

      if (shape === 'polygon') {
        normalized.vertices = normalizeVertices(normalized.vertices)
      }

      return normalized
    })
}

export function toPersistedFocuspoints(points) {
  return parseFocuspoints(points).map(({active, ...focuspoint}) => focuspoint)
}

export function serializeFocuspoints(points) {
  return JSON.stringify(toPersistedFocuspoints(points))
}
