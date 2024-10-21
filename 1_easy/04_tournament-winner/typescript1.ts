export function tournamentWinner(competitions: string[][], results: number[]): string {
    const winnerIdxes = results.map(toWinnerIdx)
    const dict = competitions.reduce((acc, competition, competitionIdx) => {
        const winner = competition[winnerIdxes[competitionIdx]]
        const scoreToAdd = acc.has(winner) ? acc.get(winner) + 3 : 3
        return new Map([...acc, [winner, scoreToAdd]])
    }, new Map())

    const highestScore = maximum(Array.from(dict.values()))
    const players = Array.from(dict.entries())

    for (let idx = 0; idx < dict.size; idx++) {
        const [player, score] = players[idx]
        if (highestScore === score) return player
    }
    return ''
}

function toWinnerIdx(result: number): number {
    return 1 - result
}

function maximum([x, ...xs]: number[], max = x): number {
    if (xs.length === 0 && typeof x === 'undefined') return max
    return maximum(xs, Math.max(max, x))
}

console.log(
    tournamentWinner(
        [
            ['HTML', 'C#'],
            ['C#', 'Python'],
            ['Python', 'HTML'],
        ],
        [0, 0, 1],
    ),
)
