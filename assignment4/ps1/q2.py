def rot_kt(arr, k):
    n = len(arr)
    if n == 0:
        return

    k %= n

    def rev(l, r):
        while l < r:
            arr[l], arr[r] = arr[r], arr[l]
            l += 1
            r -= 1

    rev(0, n - 1)
    rev(0, k - 1)
    rev(k, n - 1)