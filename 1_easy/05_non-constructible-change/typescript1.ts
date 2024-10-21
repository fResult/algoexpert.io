// O(n log n) time | O(1) space
function nonConstructibleChange(coins: number[]) {
    coins.sort((a, b) => a - b)
    let currentChangeCreated = 0
    for (const coin of coins) {
        if (coin > currentChangeCreated + 1) return currentChangeCreated + 1
        currentChangeCreated += coin
    }

    return currentChangeCreated + 1
}

export { nonConstructibleChange }
