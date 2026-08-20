import assert from 'node:assert/strict'
import test from 'node:test'

import {
    collectPrimitives,
    focuspointToPrimitives,
} from '../../Resources/Private/JavaScript/rendering/primitiveFactory.js'

test('converts rectangles to polygon primitives', () => {
    assert.deepEqual(focuspointToPrimitives({
        x: 0.1,
        y: 0.2,
        width: 0.3,
        height: 0.4,
    }), [{
        type: 'polygon',
        points: [
            {x: 0.1, y: 0.2},
            {x: 0.4, y: 0.2},
            {x: 0.4, y: 0.6000000000000001},
            {x: 0.1, y: 0.6000000000000001},
        ],
    }])
})

test('converts polygons without falling back to rectangles', () => {
    const vertices = [
        {x: 0.1, y: 0.2},
        {x: 0.8, y: 0.2},
        {x: 0.4, y: 0.9},
    ]

    assert.deepEqual(focuspointToPrimitives({shape: 'polygon', vertices}), [{
        type: 'polygon',
        points: vertices,
    }])
})

test('converts crosshairs to two line primitives', () => {
    const primitives = focuspointToPrimitives({shape: 'crosshair', x: 0.5, y: 0.5})

    assert.equal(primitives.length, 2)
    assert.deepEqual(primitives[0], {
        type: 'line',
        x1: 0.45,
        y1: 0.5,
        x2: 0.55,
        y2: 0.5,
    })
})

test('preserves explicitly stored primitives', () => {
    const primitive = {type: 'line', x1: 0, y1: 0, x2: 1, y2: 1}

    assert.deepEqual(focuspointToPrimitives({primitive}), [primitive])
    assert.deepEqual(collectPrimitives([null, {primitives: [primitive, null]}]), [primitive])
})

test('returns no primitives for invalid input', () => {
    assert.deepEqual(collectPrimitives(null), [])
    assert.deepEqual(focuspointToPrimitives(null), [])
})
