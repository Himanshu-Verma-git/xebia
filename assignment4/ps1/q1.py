def get_sec_largest_unique(arr: list):
    d = {x: arr.count(x) for x in set(arr)}
    l = sl = None

    for k, v in d.items():
        if v != 1:
            continue

        if (l is None) or (k>l):
            sl = l
            l = k
        elif sl is None or k > sl:
            sl = k
    
    return sl if sl is not None else -1

