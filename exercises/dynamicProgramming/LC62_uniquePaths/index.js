function uniquePaths(m, n) {
    const dpMatrix = [];

    for (let row = 1; row <= n; row++) {
        dpMatrix.push([]);
    }
    //fill out first row of dpMatrix
    for (let row = 0; row < n; row++) {
        dpMatrix[row][0] = 1;
    }
    //fill out first col of dpMatrix
    for (let col = 0; col < m; col++) {
        dpMatrix[0][col] = 1;
    }

    for (let row = 1; row < n; row++) {
        for (let col = 1; col < m; col++) {
            dpMatrix[row][col] =
                dpMatrix[row - 1][col] + dpMatrix[row][col - 1];
        }
    }

    return dpMatrix[dpMatrix.length - 1][m - 1];
}

module.exports = uniquePaths;
