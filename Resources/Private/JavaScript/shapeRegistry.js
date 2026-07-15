const shapes = new Map()

export function registerShape(name, component) {
  shapes.set(name, component)
}
export function resolveShapeComponent(shape) {
  return shapes.get(shape) ?? shapes.get('rectangle')
}
