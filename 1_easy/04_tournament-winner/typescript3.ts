function isHomeTeamWin(result: 0 | 1): boolean {
    const HOME_TEAM_WON = 1 as const
    return HOME_TEAM_WON === result
}
export function tournamentWinner(competitions: string[][], results: number[]) {
    const { bestTeam } = competitions.reduce(({ scoreboard, bestTeam }, competition, competitionIdx) => {
        const result = results[competitionIdx] as 0 | 1
        const [homeTeam, awayTeam] = competition
        const winner = isHomeTeamWin(result) ? homeTeam : awayTeam
        const updatedWinnerScore = scoreboard.has(winner) ? scoreboard.get(winner)! + 3 : 3

        return {
            scoreboard: new Map([...scoreboard, [winner, updatedWinnerScore]]),
            bestTeam: updatedWinnerScore > (scoreboard.get(bestTeam) || 0) ? winner : bestTeam,
        }
    }, { scoreboard: new Map<string, number>(), bestTeam: '' })

    return bestTeam
}