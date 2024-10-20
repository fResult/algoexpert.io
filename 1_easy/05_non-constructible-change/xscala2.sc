import scala.annotation.tailrec

@tailrec
def nonConstructibleChange(coins: List[Int], currentChangeCreated: Int = 0): Int = {
  if (coins.isEmpty) return currentChangeCreated + 1
  val sortedCoins = coins.sorted
  val coin = sortedCoins.head
  val addedToCurrentChange = if (coin > currentChangeCreated + 1)
    return currentChangeCreated + 1 else coin


  nonConstructibleChange(coins.drop(1), currentChangeCreated + addedToCurrentChange)
}

nonConstructibleChange(List(5, 7, 1, 1, 2, 3, 22))