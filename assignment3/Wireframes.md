# Wireframes — AI-Powered Placement Management Platform

> **Deliverable:** Wireframe Documentation
> **Screens covered:** Dashboard (Home) · Student Profile & AI Match · Company & Drive Management · Reports & Analytics

---

## Screen 1 — Dashboard (Home)

```
┌─────────────────────────────────────────────────────────────────────┐
│  NAVBAR                                                             │
│  [ Logo ]      Dashboard · Students · Companies · Reports           │
│                                              [ 🔔 ] [ Admin ▼ ]     │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│  Welcome back, Admin 👋  —  Batch 2025          [ + Post Drive ]    │
└─────────────────────────────────────────────────────────────────────┘

┌──────────────┬──────────────┬──────────────┬────────────────────────┐
│  Total       │  Placed      │  Companies   │  Drives This Month     │
│  Students    │  Students    │  Registered  │                        │
│    1,240     │    874       │     63       │        12              │
│  ↑ 4% batch  │  70.5% rate  │  ↑ 8 new     │  3 upcoming            │
└──────────────┴──────────────┴──────────────┴────────────────────────┘

┌────────────────────────────────────┬────────────────────────────────┐
│  PLACEMENT TREND  (Line Chart)     │  TOP RECRUITING COMPANIES      │
│                                    │  (Horizontal Bar Chart)        │
│   ▲                                │                                │
│   │       ╭──╮                     │  Company A    ██████████  48   │
│   │  ╭────╯  ╰──╮                  │  Company B    ████████    39   │
│   │──╯          ╰──                │  Company C    ███████     31   │
│   └─────────────────────►          │  Company D    ██████      27   │
│    Jan  Feb  Mar  Apr  May  Jun     │  Company E    █████       24   │
└────────────────────────────────────┴────────────────────────────────┘

┌────────────────────────────────────┬────────────────────────────────┐
│  UPCOMING PLACEMENT DRIVES         │  AI INSIGHTS PANEL             │
│                                    │                                │
│  ┌──────────────────────────────┐  │  ┌────────────────────────┐   │
│  │ 🏢 Company A   │  Jun 10     │  │  │ 🤖 AI Recommendation   │   │
│  │ Role: SDE      │  42 eligible│  │  │                        │   │
│  │                [View Details]│  │  │ "87 students match     │   │
│  ├──────────────────────────────┤  │  │  SDE profile. 12 are   │   │
│  │ 🏢 Company B   │  Jun 14     │  │  │  high-priority."       │   │
│  │ Role: Analyst  │  30 eligible│  │  │                        │   │
│  │                [View Details]│  │  │      [View Matches]    │   │
│  ├──────────────────────────────┤  │  └────────────────────────┘   │
│  │ 🏢 Company C   │  Jun 19     │  │                               │
│  │ Role: SDE-I    │  55 eligible│  │  ┌────────────────────────┐   │
│  │                [View Details]│  │  │ ⚠️  Alert              │   │
│  └──────────────────────────────┘  │  │ "23 students have not  │   │
│                                    │  │  updated resumes."     │   │
│           [ View All Drives ]      │  │      [Notify Them]     │   │
│                                    │  └────────────────────────┘   │
└────────────────────────────────────┴────────────────────────────────┘
```

---

## Screen 2 — Student Profile & AI Match Score

```
┌─────────────────────────────────────────────────────────────────────┐
│  NAVBAR                                                             │
│  [ Logo ]      Dashboard · Students · Companies · Reports           │
│                                              [ 🔔 ] [ Admin ▼ ]     │
└─────────────────────────────────────────────────────────────────────┘

  ← Back to Students List

┌─────────────────────────────────────────────────────────────────────┐
│  ┌─────────┐   Student Name                        AI Match Score  │
│  │  Photo  │   B.Tech Computer Science | 2025 Batch  ┌──────────┐  │
│  │         │   CGPA: 8.7  |  City                    │    87    │  │
│  └─────────┘   📧 student@college.edu                │  / 100 🤖│  │
│                📞 +91 XXXXX XXXXX                    └──────────┘  │
│                                      [Edit Profile]  [Download CV] │
└─────────────────────────────────────────────────────────────────────┘

┌──────────────────────┬────────────────────────┬─────────────────────┐
│  SKILLS              │  ACADEMIC DETAILS       │  PLACEMENT STATUS   │
│                      │                         │                     │
│  Python      ████▓░  │  10th  :  91.0 %        │  Status: Eligible   │
│  Java        ████░░  │  12th  :  88.5 %        │  Applied   :  4     │
│  React       ███░░░  │  CGPA  :  8.7           │  Shortlisted:  2    │
│  SQL         ████▓░  │  Backlogs: None          │  Interviews :  1    │
│  ML / AI     ███░░░  │  Branch: CSE             │  Offers     :  1    │
│  [+ Add Skill]       │  Semester: 8             │                     │
│                      │                         │  [Mark as Placed]   │
└──────────────────────┴────────────────────────┴─────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│  AI-RECOMMENDED DRIVES                                              │
│                                                                     │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │  🏢 Company A  — SDE              Match: 94 %  [Apply Now]  │   │
│  │  🏢 Company B  — Software Analyst Match: 88 %  [Apply Now]  │   │
│  │  🏢 Company C  — SDE-I            Match: 82 %  [Apply Now]  │   │
│  │  🏢 Company D  — Tech Consultant  Match: 75 %  [Apply Now]  │   │
│  └─────────────────────────────────────────────────────────────┘   │
│                                     [ View All Eligible Drives ]    │
└─────────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────┬──────────────────────────────┐
│  APPLICATION HISTORY                 │  RESUME & DOCUMENTS          │
│                                      │                              │
│  Company A  │ SDE       │ Shortlisted│  📄 Resume_2025.pdf          │
│  Company B  │ Analyst   │ Under Review│  📄 Offer_Letter.pdf        │
│  Company C  │ Developer │ Rejected   │  📄 10th_Certificate.pdf     │
│  Company D  │ Engineer  │ Offer Rcvd │                              │
│                                      │          [ + Upload File ]   │
└──────────────────────────────────────┴──────────────────────────────┘
```

---

## Screen 3 — Company & Drive Management

```
┌─────────────────────────────────────────────────────────────────────┐
│  NAVBAR                                                             │
│  [ Logo ]      Dashboard · Students · Companies · Reports           │
│                                              [ 🔔 ] [ Admin ▼ ]     │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│  Companies & Drives                          [ + Add Company ]      │
│  [ 🔍 Search company name... ]   Filter: [ Sector ▼ ] [ Status ▼ ] │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│  ┌──────┬──────────────┬────────────┬────────┬────────┬──────────┐  │
│  │ Logo │ Company Name │ Sector     │ Drives │ Offers │ Actions  │  │
│  ├──────┼──────────────┼────────────┼────────┼────────┼──────────┤  │
│  │  A   │ Company A    │ Technology │   3    │   48   │ [View]   │  │
│  │  B   │ Company B    │ Technology │   2    │   39   │ [View]   │  │
│  │  C   │ Company C    │ Consulting │   2    │   22   │ [View]   │  │
│  │  D   │ Company D    │ IT Services│   4    │   27   │ [View]   │  │
│  │  E   │ Company E    │ IT Services│   5    │   24   │ [View]   │  │
│  └──────┴──────────────┴────────────┴────────┴────────┴──────────┘  │
│  Showing 1–5 of 63 companies        [ < 1  2  3  ...  13 > ]        │
└─────────────────────────────────────────────────────────────────────┘

 ── When [View] is clicked, a side panel slides in from the right ──

┌────────────────────────────────────────────────────────────────────┐
│  DRIVE DETAIL SIDE PANEL                        [Edit]  [Close ×] │
│  ────────────────────────────────────────────────────────────────  │
│  🏢 Company A — SDE Drive                                          │
│                                                                    │
│  Date        :  June 10, 2025                                      │
│  Package     :  ₹ 18 LPA                                           │
│  Location    :  City (Hybrid)                                      │
│  Eligibility :  CGPA ≥ 7.5 | No active backlogs | CSE / IT / ECE  │
│  Process     :  Online Test → Technical Interview → HR Round       │
│  Deadline    :  June 5, 2025                                       │
│                                                                    │
│  ┌───────────────────────────┬──────────────────────────────────┐ │
│  │  ELIGIBLE STUDENTS (42)   │  AI SHORTLIST — Top 15           │ │
│  │                           │                                  │ │
│  │  [ 🔍 Search student... ] │  Student A         Score: 94     │ │
│  │                           │  Student B         Score: 91     │ │
│  │  ☑ Student A    CGPA 8.7  │  Student C         Score: 89     │ │
│  │  ☑ Student B    CGPA 8.5  │  Student D         Score: 86     │ │
│  │  ☐ Student C    CGPA 7.8  │  Student E         Score: 84     │ │
│  │  ☐ Student D    CGPA 7.6  │                                  │ │
│  │  ☐ Student E    CGPA 7.5  │       [ View All AI Picks ]      │ │
│  └───────────────────────────┴──────────────────────────────────┘ │
│                                                                    │
│              [ Send Invites to Selected ]   [ Export List ]        │
└────────────────────────────────────────────────────────────────────┘
```

---

## Screen 4 — Reports & Analytics

```
┌─────────────────────────────────────────────────────────────────────┐
│  NAVBAR                                                             │
│  [ Logo ]      Dashboard · Students · Companies · Reports           │
│                                              [ 🔔 ] [ Admin ▼ ]     │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│  Placement Reports                                                  │
│  Batch: [ 2025 ▼ ]   Branch: [ All ▼ ]        [ 📥 Export as PDF ] │
└─────────────────────────────────────────────────────────────────────┘

┌──────────────┬──────────────┬──────────────┬────────────────────────┐
│  Placement % │  Avg. Package│  Highest Pkg │  Total Offers          │
│    70.5 %    │  ₹ 12.4 LPA  │  ₹ 42 LPA    │    874                │
│  ↑ vs 2024   │  ↑ ₹1.2 LPA  │  Company A   │  Across 63 companies  │
└──────────────┴──────────────┴──────────────┴────────────────────────┘

┌────────────────────────────────────┬────────────────────────────────┐
│  BRANCH-WISE PLACEMENT (Bar Chart) │  PACKAGE DISTRIBUTION (Pie)    │
│                                    │                                │
│  CSE  ████████████████████  89 %   │          ╭──────╮             │
│  IT   ████████████████░░░░  76 %   │        ╱  ░░░░░░  ╲           │
│  ECE  ████████████░░░░░░░░  68 %   │       │  ▓▓▓ ░░░░  │          │
│  EEE  ██████████░░░░░░░░░░  55 %   │        ╲   ▓▓▓░░  ╱           │
│  MECH ████████░░░░░░░░░░░░  42 %   │          ╰──────╯             │
│                                    │   ░ < ₹5L   ▓ ₹5–15L          │
│       Hover bar for exact count    │   █ > ₹15L                    │
└────────────────────────────────────┴────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│  YEAR-OVER-YEAR COMPARISON (Multi-line Chart)                       │
│                                                                     │
│  100 % ─                                                            │
│   80 % ─            ╭────────╮         ╭───                        │
│   60 % ─    ╭───────╯        ╰─────────╯                           │
│   40 % ─────╯                                                       │
│         2022       2023       2024       2025                       │
│                                                                     │
│   ━━  Placement Rate (Institution)    ╌╌  Industry Average          │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│  STUDENT PLACEMENT TABLE                                            │
│  [ 🔍 Search student name... ]   Filter: [ Branch ▼ ] [ Status ▼ ] │
│                                                                     │
│  ┌──────────────────┬───────┬──────┬────────────┬──────────────┐   │
│  │ Student Name     │ Branch│ CGPA │ Company    │ Package      │   │
│  ├──────────────────┼───────┼──────┼────────────┼──────────────┤   │
│  │ Student A        │ CSE   │ 8.7  │ Company A  │ ₹ 42.0 LPA   │   │
│  │ Student B        │ CSE   │ 8.5  │ Company B  │ ₹ 28.0 LPA   │   │
│  │ Student C        │ IT    │ 8.2  │ Company C  │ ₹ 22.0 LPA   │   │
│  │ Student D        │ ECE   │ 8.0  │ Company D  │ ₹ 14.5 LPA   │   │
│  │ Student E        │ CSE   │ 7.9  │ Company E  │ ₹  8.0 LPA   │   │
│  └──────────────────┴───────┴──────┴────────────┴──────────────┘   │
│  Showing 1–5 of 874   [ < 1  2  3  ...  175 > ]                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Screen Flow

```
┌─────────────┐       ┌──────────────────────┐
│  Dashboard  │──────▶│  Student Profile      │
│  (Screen 1) │       │  + AI Match Score     │
└─────────────┘       │  (Screen 2)           │
       │              └──────────────────────┘
       │
       ▼
┌──────────────────────────┐       ┌────────────────────┐
│  Company & Drive Mgmt    │──────▶│  Reports &         │
│  (Screen 3)              │       │  Analytics         │
└──────────────────────────┘       │  (Screen 4)        │
                                   └────────────────────┘
```

---

