// package com.algoexpert.program

val HOME_TEAM_WON = 1
fun isHomeTeamWin(result: Int) = HOME_TEAM_WON == result

data class IntermediateState(
  val scoreboard: Map<String, Int> = mapOf(),
  val bestTeam: String = "",
)

fun tournamentWinner(competitions: List<List<String>>, results: List<Int>): String {
  val (_, winner) = competitions.zip(results).fold(IntermediateState()) { (scoreboard, bestTeam), (competition, result) ->
    val (homeTeam, awayTeam) = competition
    val winner = if (isHomeTeamWin(result)) homeTeam else awayTeam
    val scoreToAdd = scoreboard.getOrDefault(winner, 0) + 3

    IntermediateState(
      scoreboard = scoreboard + mapOf(winner to scoreToAdd),
      bestTeam = if (scoreToAdd > scoreboard.getOrDefault(bestTeam, 0)) winner else bestTeam,
    )
  }
  return winner
}
