def ana(s: str, s2: str):
    s=s.lower()
    s2=s2.lower()

    f = {c: s.count(c) for c in set(s)}
    f2 = {c: s2.count(c) for c in set(s2)}

    return f == f2