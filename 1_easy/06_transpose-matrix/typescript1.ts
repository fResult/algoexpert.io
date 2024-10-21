export function transposeMatrix(matrix: number[][]) {
    const transposedMatrix: number[][] = []

    for (let colIdx = 0; colIdx < matrix[0].length; colIdx++) {
        const newRow: number[] = []
        for (let rowIdx = 0; rowIdx < matrix.length; rowIdx++) {
            newRow.push(matrix[rowIdx][colIdx])
        }
        transposedMatrix.push(newRow)
    }

    return transposedMatrix
}
