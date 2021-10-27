// Calculates distance to origin, given an x,y coordinate
function distance(x, y) {
    if (x !== undefined && y !== undefined) {
        return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
    }
    return -1;
} 

// Returns the k points from the input which are closest to the origin {x: 0, y: 0}.
// "points" is a list of points in the form {x: <number>, y: <number>}.
// "k" is a positive integer.
function closestPoints(points, k) {
    if (points === undefined || k === undefined) {
        return [];
    }
    sortedPoints = points.sort((a, b) => {
        return distance(a.x, a.y) - distance(b.x, b.y);
    });
    return sortedPoints.slice(0, k);
};

module.exports = {
    distance,
    closestPoints,
};
