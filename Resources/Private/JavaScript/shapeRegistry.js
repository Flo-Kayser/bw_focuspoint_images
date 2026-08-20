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
  const defaults = (shapes.get(shape) ?? shapes.get('rectangle'))?.defaults

  return typeof defaults === 'function'
    ? defaults(context)
    : {...defaults}
}
