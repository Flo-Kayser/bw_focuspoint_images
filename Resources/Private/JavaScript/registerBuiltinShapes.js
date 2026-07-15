import {definitions} from 'focuspoint-shapes:./components/Shapes'
import {registerShape} from './shapeRegistry.js'

definitions.forEach((definition) => {
  registerShape(definition.identifier, definition.component)
})
