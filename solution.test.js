const assert = require('assert');
const {
    distance,
    closestPoints
} = require('./solution');

function test(description, func) {
    try {
        func();
        console.log('PASSED - ' + description);
    } catch (err) {
        console.log('FAILED - ' + description);
        console.error(err);
    }
}

console.log('--- Running tests for solution.js ---');

test('distance() - Returns distance to origin for 0 values', () => {
    const inputPoint = {x: 0, y: 0};
    const output = 0;
    assert.deepEqual(distance(inputPoint.x, inputPoint.y), output);
});

test('distance() - Returns distance to origin for positive values', () => {
    const inputPoint = {x: 0, y: 4};
    const output = 4;
    assert.deepEqual(distance(inputPoint.x, inputPoint.y), output);
});

test('distance() - Returns -1 for undefined values', () => {
    const inputPoint = {};
    assert.deepEqual(distance(inputPoint.x, inputPoint.y), -1);
});

test('closestPoints() - Successfully returns k closest points (1)', () => {
    const inputPoints = [{x: 3, y: 5}, {x: 1, y: 1}, {x: 0, y: 1}];
    const output = [{x: 0, y: 1}, {x: 1, y: 1}];
    const k = 2;
    assert.deepEqual(closestPoints(inputPoints, k), output);
});

test('closestPoints() - Successfully returns k closest points (2)', () => {
    const inputPoints = [{x: 3, y: 5}, {x: 3, y: -4}, {x: 1, y: 1}, {x: 0, y: 1}, {x: -1, y: -1}];
    const output = [{x: 0, y: 1}, {x: 1, y: 1}, {x: -1, y: -1}];
    const k = 3;
    assert.deepEqual(closestPoints(inputPoints, k), output);
});

test('closestPoints() - Returns empty list if input is undefined', () => {
    const inputPoints = undefined;
    assert.deepEqual(closestPoints(inputPoints, 1), []);
});

test('closestPoints() - Returns empty list if k is undefined', () => {
    const inputPoints = [];
    assert.deepEqual(closestPoints(inputPoints, undefined), []);
});