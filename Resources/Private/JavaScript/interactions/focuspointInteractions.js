import interact from 'interactjs'

const clamp = (value) => Math.max(0, Math.min(1, value))

const getIndex = (event) => {
  const index = parseInt(event.target.getAttribute('data-index'), 10)

  return Number.isNaN(index) ? null : index
}

const getCanvasSize = (getCanvasDimensions) => {
  const { canvasWidth, canvasHeight } = getCanvasDimensions()

  return {
    canvasWidth,
    canvasHeight,
    isValid: canvasWidth > 0 && canvasHeight > 0,
  }
}

const getVertexIndex = (event) => {
  const vertexIndex = parseInt(
    event.target.getAttribute('data-vertex-index'),
    10
  )

  return Number.isNaN(vertexIndex) ? null : vertexIndex
}


const initPolygonInteraction = ({
                                  focuspoints,
                                  activateFocuspoint,
                                  getCanvasDimensions,
                                }) => {
  interact('.polygon-handle')
    .draggable({
      listeners: {
        start(event) {
          const index = getIndex(event)

          if (index !== null) {
            activateFocuspoint(index)
          }
        },

        move(event) {
          const index = getIndex(event)
          const vertexIndex = getVertexIndex(event)
          const {
            canvasWidth,
            canvasHeight,
            isValid,
          } = getCanvasSize(getCanvasDimensions)

          if (index === null || vertexIndex === null || !isValid) {
            return
          }

          focuspoints.update((items) =>
            items.map((point, currentIndex) => {
              if (currentIndex !== index || !Array.isArray(point.vertices)) {
                return point
              }

              return {
                ...point,
                vertices: point.vertices.map((vertex, currentVertexIndex) => {
                  if (currentVertexIndex !== vertexIndex) {
                    return vertex
                  }

                  return {
                    ...vertex,
                    x: clamp(vertex.x + (event.dx / canvasWidth)),
                    y: clamp(vertex.y + (event.dy / canvasHeight)),
                  }
                }),
              }
            })
          )
        },
      },
    })
  interact('.polygon-shape')
    .draggable({
      listeners: {
        start(event) {
          const index = getIndex(event)

          if (index !== null) {
            activateFocuspoint(index)
          }
        },

        move(event) {
          const index = getIndex(event)
          const {
            canvasWidth,
            canvasHeight,
            isValid,
          } = getCanvasSize(getCanvasDimensions)

          if (index === null || !isValid) {
            return
          }

          focuspoints.update((items) =>
            items.map((point, currentIndex) => {
              if (
                currentIndex !== index ||
                !Array.isArray(point.vertices) ||
                point.vertices.length === 0
              ) {
                return point
              }

              const minX = Math.min(...point.vertices.map((vertex) => vertex.x))
              const maxX = Math.max(...point.vertices.map((vertex) => vertex.x))
              const minY = Math.min(...point.vertices.map((vertex) => vertex.y))
              const maxY = Math.max(...point.vertices.map((vertex) => vertex.y))

              const requestedDeltaX = event.dx / canvasWidth
              const requestedDeltaY = event.dy / canvasHeight

              const deltaX = Math.max(
                -minX,
                Math.min(1 - maxX, requestedDeltaX)
              )

              const deltaY = Math.max(
                -minY,
                Math.min(1 - maxY, requestedDeltaY)
              )

              return {
                ...point,
                vertices: point.vertices.map((vertex) => ({
                  ...vertex,
                  x: vertex.x + deltaX,
                  y: vertex.y + deltaY,
                })),
              }
            })
          )
        },
      },
    })
}
export const initFocuspointInteractions = ({
                                            focuspoints,
                                            activateFocuspoint,
                                            getCanvasDimensions,
                                          }) => {
  const config = {
    focuspoints,
    activateFocuspoint,
    getCanvasDimensions,
  }

  initPolygonInteraction(config)

  return () => {
    interact('.polygon-handle').unset()
    interact('.polygon-shape').unset()
  }
}
