import scala.annotation.tailrec

val INITIAL_AMOUNT = -1

// O(n log n) time | O(1) space
@tailrec
def nonConstructibleChange(coins: List[Int],
                           currentChangeCreated: Int = 0,
                           initialAmount: Int = INITIAL_AMOUNT
                          ): Int = {
  val actualInitialAmount = if (initialAmount == INITIAL_AMOUNT) coins.size else initialAmount

  if (coins.isEmpty) return currentChangeCreated + 1
  val sortedCoins = if (coins.size == actualInitialAmount) coins.sorted else coins

  val coin = sortedCoins.head
  if (coin > currentChangeCreated + 1) return currentChangeCreated + 1

  nonConstructibleChange(sortedCoins.tail, currentChangeCreated + coin)
}

//nonConstructibleChange(List(5, 7, 1, 1, 2, 3, 22))
