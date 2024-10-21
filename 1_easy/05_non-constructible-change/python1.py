# O(n log n) time | O(1) space
def non_constructible_change(coins: list[int]) -> int:
    coins.sort()

    current_change_created = 0
    for coin in coins:
        if coin > current_change_created + 1:
            return current_change_created + 1

        current_change_created += coin

    return current_change_created + 1
