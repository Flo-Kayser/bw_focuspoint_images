import {definitions} from 'focuspoint-shapes:./components/Shapes'
import {registerShape} from './shapeRegistry.js'
import './registerBuiltinShapeDefinitions.js'

definitions.forEach((definition) => {
  registerShape(definition.identifier, definition.component)
})
