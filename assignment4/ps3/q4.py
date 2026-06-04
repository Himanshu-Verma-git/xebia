# def generate_summary(records):
#     total_hours = 0
#     late_days = 0

#     for i in range(len(records) + 1):       ← Bug A
#         record = records[i]
#         total_hours += record["hours"]
#         if record["is_late"]:
#             late_days += 1

#     avg_hours = total_hours / len(records)   ← Bug B

#     return {
#         "total_hours": round(total_hours, 2),
#         "avg_hours": round(avg_hours, 2),
#         "late_days": late_days,
#         "days_present": len(records)
#     }


def generate_summary(records):
    total_hours = 0
    late_days = 0

    for i in range(len(records)):
        record = records[i]
        total_hours += record["hours"]

        if record["is_late"]:
            late_days += 1

    avg_hours = total_hours / len(records) if records else 0

    return {
        "total_hours": round(total_hours, 2),
        "avg_hours": round(avg_hours, 2),
        "late_days": late_days,
        "days_present": len(records)
    }