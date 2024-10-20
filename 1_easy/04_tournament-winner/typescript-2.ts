export function tournamentWinner(competitions: string[][], results: (0 | 1)[]) {
    const winnerIdxes = results.map(toWinnerIdx)
    const { bestTeam } = competitions.reduce(({ scoreboard, bestTeam }, competition, competitionIdx) => {
        const winner = competition[winnerIdxes[competitionIdx]]
        const updatedWinnerScore = scoreboard.has(winner) ? scoreboard.get(winner)! + 3 : 3

        return {
            scoreboard: new Map([...scoreboard, [winner, updatedWinnerScore]]),
            bestTeam: updatedWinnerScore > (scoreboard.get(bestTeam) || 0) ? winner : bestTeam,
        }
    }, { scoreboard: new Map<string, number>(), bestTeam: '' })

    return bestTeam
}

function toWinnerIdx(result: 0 | 1): number {
    return 1 - result
}
