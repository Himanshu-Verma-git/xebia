def subs(s):
    left = 0
    l = 0
    l_seen = {}

    for r, ch in enumerate(s):
        if ch in l_seen and l_seen[ch] >= left:
            left = l_seen[ch] + 1

        l_seen[ch] = r
        l = max(l, r - left + 1)

    return l