# O(w x h) time | O(w x h) space
def transpose_matrix(matrix: list[list[int]]) -> list[list[int]]:
    transposed_matrix: list[list[int]] = []
    for col in range(len(matrix[0])):
        new_row: list[int] = []
        for row in range(len(matrix)):
            new_row.append(matrix[row][col])
        transposed_matrix.append(new_row)

    return transposed_matrix
