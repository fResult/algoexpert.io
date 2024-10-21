// O(n^2) time | O(n^2) space
export function transposeMatrix(matrix: number[][]): number[][] {
    const outerSize = matrix.length
    const innerSize = matrix.map((xs) => xs.length)[0]
    const transposedMatrix: number[][] = Array.from({ length: Math.max(outerSize, innerSize) }, (_) =>
        Array.from<number>({ length: Math.max(outerSize, innerSize) }).fill(NaN),
    )

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            transposedMatrix[j][i] = matrix[i][j]
        }
    }
    return transposedMatrix
        .map((arr) => arr.filter((elem) => !Object.is(elem, NaN)))
        .filter((arr) => arr.length > 0)
}
