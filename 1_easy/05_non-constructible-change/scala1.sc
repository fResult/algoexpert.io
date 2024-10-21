import scala.util.control.Breaks.{break, breakable}

// O(n log n) time | O(1) space
def nonConstructibleChange(coins: List[Int]): Int = {
  val sortedCoins = coins.sorted
  var currentChange = 0
  breakable:
    for (coin <- sortedCoins) {
      if (coin > currentChange + 1) break
      currentChange += coin
    }

  currentChange + 1
}

nonConstructibleChange(List(5, 7, 1, 1, 2, 3, 22)) // 20
