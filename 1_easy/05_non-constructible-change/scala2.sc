import scala.annotation.tailrec

val INITIAL_AMOUNT = -1

@tailrec
def nonConstructibleChange(coins: List[Int], currentChangeCreated: Int = 0): Int = {
  if (coins.isEmpty) return currentChangeCreated + 1
  val sortedCoins = coins.sorted
  println(sortedCoins)
  val coin = sortedCoins.head
  if (coin > currentChangeCreated + 1) return currentChangeCreated + 1

  nonConstructibleChange(sortedCoins.tail, currentChangeCreated + coin)
}

nonConstructibleChange(List(5, 7, 1, 1, 2, 3, 22))
