const shapes = new Map()

export function registerShape(name, component, options = {}) {
  shapes.set(name, {
    ...shapes.get(name),
    component,
    ...options,
  })
}

export function registerShapeDefinition(name, definition) {
  shapes.set(name, {
    ...shapes.get(name),
    ...definition,
  })
}

export function resolveShapeComponent(shape) {
  return (shapes.get(shape) ?? shapes.get('rectangle'))?.component
}

export function resolveShapePrimitiveFactory(shape) {
  return (shapes.get(shape) ?? shapes.get('rectangle'))?.toPrimitives ?? null
}

export function createShapeDefaults(shape, context = {}) {
  const definition = shapes.get(shape) ?? shapes.get('rectangle')
  const defaults = definition?.defaults

  return typeof defaults === 'function'
    ? defaults(context)
    : {...defaults}
}

export function convertFocuspointToShape(focuspoint, shape) {
  const definition = shapes.get(shape) ?? shapes.get('rectangle')
  const {vertices, x2, y2, primitive, primitives, ...sharedData} = focuspoint
  const geometry = typeof definition?.convertFrom === 'function'
    ? definition.convertFrom(focuspoint)
    : createShapeDefaults(shape, focuspoint)

  return {
    ...sharedData,
    ...geometry,
    shape,
  }
}
