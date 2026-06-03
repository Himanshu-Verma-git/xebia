# Wireframes — AI-Powered Placement Management Platform

## 1. User Registration & Login

### Purpose
Secure entry point for all user types (Student, Recruiter, Placement Coordinator).

### Screen: Login Page

```
+----------------------------------------------------------+
|         AI Placement Platform           [Logo]           |
+----------------------------------------------------------+
|                                                          |
|              +-------------------------------+           |
|              |        Welcome Back!          |           |
|              |                               |           |
|              |  Email:                       |           |
|              |  [_____________________________]          |
|              |                               |           |
|              |  Password:                    |           |
|              |  [_____________________________]          |
|              |                               |           |
|              |  Role: [ Student ▼ ]          |           |
|              |                               |           |
|              |  [x] Remember Me              |           |
|              |                               |           |
|              |  [        LOGIN        ]      |           |
|              |                               |           |
|              |  Forgot Password? | Sign Up   |           |
|              +-------------------------------+           |
|                                                          |
|              OR  [ Login with Google ]                   |
|                                                          |
+----------------------------------------------------------+
```

### Screen: Registration Page

```
+----------------------------------------------------------+
|         AI Placement Platform           [Logo]           |
+----------------------------------------------------------+
|                                                          |
|           +----------------------------------+           |
|           |         Create Account           |           |
|           |                                  |           |
|           |  Full Name: [__________________] |           |
|           |  Email:     [__________________] |           |
|           |  Password:  [__________________] |           |
|           |  Confirm:   [__________________] |           |
|           |                                  |           |
|           |  I am a:  ( ) Student            |           |
|           |            ( ) Recruiter         |           |
|           |            ( ) Coordinator       |           |
|           |                                  |           |
|           |  College/Company: [____________] |           |
|           |                                  |           |
|           |  [x] I agree to Terms & Policy   |           |
|           |                                  |           |
|           |  [      CREATE ACCOUNT     ]     |           |
|           |                                  |           |
|           |  Already have an account? Login  |           |
|           +----------------------------------+           |
|                                                          |
+----------------------------------------------------------+
```

### Interactions
- Role dropdown dynamically changes additional fields (College vs. Company)
- Inline validation on all fields
- On success → redirects to respective dashboard based on role

---

## 2. Student Profile Management

### Purpose
Students create and maintain their academic, skill, and career profiles used by the AI recommendation engine.

### Screen: Student Profile Page

```
+----------------------------------------------------------+
| [≡ Menu]   AI Placement Platform         [Bell] [Avatar] |
+----------------------------------------------------------+
| Sidebar:         |    STUDENT PROFILE                    |
| [🏠 Dashboard]   |                                       |
| [👤 Profile]  ◄  |  +--------+  Garv Sharma             |
| [🔍 Jobs]        |  | Photo  |  B.Tech CSE | 3rd Year    |
| [📄 Resume]      |  | Upload |  CGPA: 8.7                |
| [📋 Applications]|  +--------+  [Edit Profile]           |
| [🔔 Alerts]      |  ----------------------------------------|
|                  |  PERSONAL INFO        [✏ Edit]        |
|                  |  Email:  garv@example.com              |
|                  |  Phone:  +91-XXXXXXXXXX                |
|                  |  City:   Delhi                         |
|                  |  ----------------------------------------|
|                  |  ACADEMICS            [✏ Edit]        |
|                  |  Degree:    B.Tech CSE                 |
|                  |  College:   XYZ Institute              |
|                  |  Year:      3rd Year                   |
|                  |  CGPA:      8.7 / 10                   |
|                  |  ----------------------------------------|
|                  |  SKILLS               [✏ Edit]        |
|                  |  [Python] [ML] [React] [SQL] [+ Add]  |
|                  |  ----------------------------------------|
|                  |  EXPERIENCE           [✏ Edit]        |
|                  |  • ML Intern – XYZ Corp (Jun–Aug 2024) |
|                  |  [+ Add Experience]                    |
|                  |  ----------------------------------------|
|                  |  PROJECTS             [✏ Edit]        |
|                  |  • AI Resume Analyser (GitHub Link)    |
|                  |  [+ Add Project]                       |
|                  |  ----------------------------------------|
|                  |  Profile Strength:  [====== 80%  ]    |
|                  |  Tip: Add certifications to reach 100%|
+----------------------------------------------------------+
```

### Interactions
- Inline edit on each section
- Skill tags are searchable and auto-suggested
- Profile strength meter updates dynamically
- Profile data feeds directly into AI job recommendations

---

## 3. Recruiter Dashboard

### Purpose
Recruiters post job opportunities, manage applications, and track hiring progress.

### Screen: Recruiter Dashboard

```
+----------------------------------------------------------+
| [≡ Menu]   AI Placement Platform         [Bell] [Avatar] |
+----------------------------------------------------------+
| Sidebar:            |  RECRUITER DASHBOARD               |
| [🏠 Dashboard]  ◄   |                                    |
| [📢 Post Job]       |  +----------+ +----------+         |
| [📋 Applications]   |  | Active   | | Total     |        |
| [👥 Candidates]     |  | Jobs: 4  | | Applicants|        |
| [📅 Interviews]     |  +----------+ | : 87      |        |
| [⚙ Settings]        |              +----------+          |
|                     |  +----------+ +----------+          |
|                     |  | Interviews| | Shortlisted|       |
|                     |  | Today: 3  | | : 12      |        |
|                     |  +----------+ +----------+          |
|                     |  ----------------------------------- |
|                     |  ACTIVE JOB POSTINGS               |
|                     |                                    |
|                     |  +--------------------------------+ |
|                     |  | SDE Intern    | 34 Applicants | |
|                     |  | Posted: 2d ago| [View] [Close]| |
|                     |  +--------------------------------+ |
|                     |  | ML Engineer   | 18 Applicants | |
|                     |  | Posted: 5d ago| [View] [Close]| |
|                     |  +--------------------------------+ |
|                     |  | Data Analyst  | 35 Applicants | |
|                     |  | Posted: 1w ago| [View] [Close]| |
|                     |  +--------------------------------+ |
|                     |  [+ Post New Job]                  |
|                     |  ---------------------------------- |
|                     |  RECENT APPLICATIONS               |
|                     |  • Rahul S. → SDE Intern [Review]  |
|                     |  • Priya M. → ML Engineer [Review] |
+----------------------------------------------------------+
```

### Screen: Post New Job

```
+----------------------------------------------------------+
|  POST A NEW JOB                              [X Close]   |
+----------------------------------------------------------+
|  Job Title:      [______________________________]        |
|  Department:     [______________________________]        |
|  Location:       [______________________________]        |
|  Job Type:       ( ) Full-Time  ( ) Internship           |
|  CTC / Stipend:  [____________]                          |
|  Deadline:       [📅 Date Picker]                        |
|  Eligibility:    CGPA ≥ [___] | Branches: [__________]  |
|  Description:                                            |
|  +----------------------------------------------------+  |
|  |  (Text Area — JD, responsibilities, requirements)  |  |
|  +----------------------------------------------------+  |
|  Required Skills: [Python ×] [SQL ×] [+ Add Skill]      |
|                                                          |
|  [   SAVE DRAFT   ]        [   PUBLISH JOB   ]          |
+----------------------------------------------------------+
```

### Interactions
- Stats cards are clickable → drill-down view
- Job cards link to applicant list with filter/sort
- New job form has field validations and skill autocomplete

---

## 4. AI-Based Job Recommendations

### Purpose
Display personalized job matches to students using AI analysis of their profile, skills, and preferences.

### Screen: Recommendations Feed

```
+----------------------------------------------------------+
| [≡ Menu]   AI Placement Platform         [Bell] [Avatar] |
+----------------------------------------------------------+
| Sidebar:            |  AI JOB RECOMMENDATIONS            |
| [🏠 Dashboard]      |                                    |
| [✨ Recommendations]◄|  Based on your profile & skills   |
| [🔍 Browse Jobs]    |                                    |
| [📄 Resume]         |  FILTERS:  [Role ▼] [Location ▼]  |
| [📋 Applications]   |            [Salary ▼] [Type ▼]    |
|                     |  ---------------------------------- |
|                     |                                    |
|                     |  +--------------------------------+ |
|                     |  | ★ 96% Match                   | |
|                     |  | ML Engineer Intern             | |
|                     |  | Google India  |  Bangalore     | |
|                     |  | Stipend: ₹60,000/month         | |
|                     |  | Deadline: 15 Jul 2025          | |
|                     |  | Skills: Python ✓ ML ✓ SQL ✓    | |
|                     |  |  [Save]     [Apply Now →]      | |
|                     |  +--------------------------------+ |
|                     |                                    |
|                     |  +--------------------------------+ |
|                     |  | ★ 88% Match                   | |
|                     |  | Data Analyst                   | |
|                     |  | Flipkart  |  Remote            | |
|                     |  | CTC: ₹8 LPA                   | |
|                     |  | Deadline: 20 Jul 2025          | |
|                     |  | Skills: SQL ✓ Python ✓         | |
|                     |  |  [Save]     [Apply Now →]      | |
|                     |  +--------------------------------+ |
|                     |                                    |
|                     |  +--------------------------------+ |
|                     |  | ★ 81% Match                   | |
|                     |  | SDE – Backend                  | |
|                     |  | Swiggy  |  Hyderabad           | |
|                     |  | CTC: ₹12 LPA                  | |
|                     |  | Skills: React ✗  SQL ✓         | |
|                     |  |  [Save]     [Apply Now →]      | |
|                     |  +--------------------------------+ |
|                     |                                    |
|                     |  [Load More Recommendations]       |
+----------------------------------------------------------+
```

### Interactions
- Match % calculated from AI model comparing profile vs. job requirements
- Skills shown with ✓ (matched) or ✗ (gap) per listing
- "Save" bookmarks the job; "Apply Now" initiates the application flow
- Filters dynamically re-rank the recommendations

---

## 5. Resume Upload & Analysis

### Purpose
Students upload their resume; the AI engine parses and provides actionable feedback.

### Screen: Resume Upload Page

```
+----------------------------------------------------------+
| [≡ Menu]   AI Placement Platform         [Bell] [Avatar] |
+----------------------------------------------------------+
| Sidebar:            |  RESUME UPLOAD & ANALYSIS          |
| [🏠 Dashboard]      |                                    |
| [📄 Resume]  ◄      |  Step 1 of 2: Upload Resume        |
| [✨ Recommendations]|                                    |
| [📋 Applications]   |  +------------------------------+  |
|                     |  |                              |  |
|                     |  |   ☁  Drag & Drop Here        |  |
|                     |  |                              |  |
|                     |  |   or  [Browse File]          |  |
|                     |  |                              |  |
|                     |  |   Supported: PDF, DOCX       |  |
|                     |  |   Max size: 5MB              |  |
|                     |  +------------------------------+  |
|                     |                                    |
|                     |  [ UPLOAD & ANALYSE ]              |
|                     |  ---------------------------------- |
|                     |  Step 2 of 2: AI Feedback          |
|                     |                                    |
|                     |  Resume Score:  [ ===== 73/100 ]  |
|                     |                                    |
|                     |  ✅ STRENGTHS                      |
|                     |  • Strong ML skill keywords found  |
|                     |  • Work experience clearly listed  |
|                     |                                    |
|                     |  ⚠️  IMPROVEMENTS                  |
|                     |  • Add a professional summary      |
|                     |  • Quantify achievements           |
|                     |  • Include certifications section  |
|                     |                                    |
|                     |  EXTRACTED SKILLS:                 |
|                     |  [Python] [SQL] [React] [TensorFlow]|
|                     |                                    |
|                     |  [Re-Upload]   [Save to Profile]  |
+----------------------------------------------------------+
```

### Interactions
- Drag-and-drop zone with upload progress bar
- AI analysis result loads inline (no page reload)
- Extracted skills can be auto-synced to student profile
- Score breakdown available on hover/click per section

---

## 6. Job Search & Filtering

### Purpose
Students browse the full job/internship listing with robust search and filter controls.

### Screen: Job Search Page

```
+----------------------------------------------------------+
| [≡ Menu]   AI Placement Platform         [Bell] [Avatar] |
+----------------------------------------------------------+
| Sidebar:       |  JOB SEARCH & LISTINGS                  |
| [🏠 Dashboard] |                                         |
| [🔍 Jobs]  ◄   |  🔍 [Search by title, company, skill…] |
| [✨ AI Recs]   |                                         |
| [📄 Resume]    |  +----------------+  +---------------+  |
| [📋 Apps]      |  | FILTERS        |  | RESULTS (47)  |  |
|                |  |                |  |               |  |
|                |  | Job Type       |  | Sort by: [Relevance ▼]|
|                |  | [x] Full-Time  |  |               |  |
|                |  | [x] Internship |  | +------------+|  |
|                |  | [ ] Part-Time  |  | |SDE Intern  ||  |
|                |  |                |  | |Google      ||  |
|                |  | Location       |  | |Bangalore   ||  |
|                |  | [____________] |  | |₹60K/month  ||  |
|                |  |                |  | |⏰ 12 days  ||  |
|                |  | Salary Range   |  | |[Apply →]   ||  |
|                |  | ₹[__] to ₹[__] |  | +------------+|  |
|                |  |                |  |               |  |
|                |  | Min CGPA: [__] |  | +------------+|  |
|                |  |                |  | |ML Engineer ||  |
|                |  | Branch         |  | |Amazon      ||  |
|                |  | [x] CSE        |  | |Remote      ||  |
|                |  | [x] IT         |  | |₹8 LPA      ||  |
|                |  | [ ] ECE        |  | |⏰ 5 days   ||  |
|                |  |                |  | |[Apply →]   ||  |
|                |  | [Apply Filters]|  | +------------+|  |
|                |  | [Clear All]    |  |               |  |
|                |  +----------------+  | [Load More]   |  |
|                |                      +---------------+  |
+----------------------------------------------------------+
```

### Interactions
- Search bar auto-suggests job titles and companies
- Filter panel updates results in real time
- Each job card links to a full Job Detail page
- Saved/applied jobs are visually marked on the card

---

## 7. Application Tracking

### Purpose
Students monitor the end-to-end status of every job application in one place.

### Screen: Application Tracker

```
+----------------------------------------------------------+
| [≡ Menu]   AI Placement Platform         [Bell] [Avatar] |
+----------------------------------------------------------+
| Sidebar:            |  MY APPLICATIONS                   |
| [🏠 Dashboard]      |                                    |
| [📋 Applications] ◄ |  Summary:  Applied: 6 | Shortlisted: 2 | Rejected: 1 |
| [🔍 Jobs]           |                                    |
| [✨ AI Recs]        |  Filter: [All Status ▼]  [All Companies ▼]          |
|                     |                                    |
|                     | Company      | Role        | Status     | Date     |
|                     | ------------ | ----------- | ---------- | -------- |
|                     | Google       | SDE Intern  | ✅ Shortlist| 01 Jul  |
|                     |              |             | [Track →]  |          |
|                     | ------------ | ----------- | ---------- | -------- |
|                     | Amazon       | ML Engineer | 🔵 Applied | 28 Jun  |
|                     |              |             | [Track →]  |          |
|                     | ------------ | ----------- | ---------- | -------- |
|                     | Swiggy       | Data Analyst| ❌ Rejected| 25 Jun  |
|                     |              |             | [Track →]  |          |
|                     | ------------ | ----------- | ---------- | -------- |
|                     | Flipkart     | Backend SDE | 🟡 In Review| 20 Jun |
|                     |              |             | [Track →]  |          |
|                     |                                    |
|                     |  APPLICATION TIMELINE (Google)     |
|                     |                                    |
|                     |  Applied → Screening → Shortlisted → Interview → Offer |
|                     |    ●   →      ●      →      ●      →    ○      →   ○  |
|                     |  (completed stages filled, upcoming hollow)            |
|                     |                                    |
|                     |  Next Step: Technical Interview on 10 Jul 2025        |
|                     |  [Add to Calendar]  [View Offer Letter]               |
+----------------------------------------------------------+
```

### Interactions
- Status badges color-coded: ✅ Green (Shortlisted), 🔵 Blue (Applied), 🟡 Yellow (In Review), ❌ Red (Rejected)
- Timeline tracker visible per application on expand/click
- "Add to Calendar" links to interview scheduling module
- Notification badge on sidebar updates when status changes

---


## Design Principles Applied

| Principle | Application |
|---|---|
| Role-Based Access | Different dashboards and sidebar menus per user type |
| Progressive Disclosure | Details revealed on expand/click, not upfront |
| AI Transparency | Match % and skill gap clearly shown to students |
| Status Visibility | Color-coded badges and timeline trackers throughout |
| Mobile Readiness | Sidebar collapses to hamburger menu on smaller screens |
| Feedback Loops | Profile strength meter and resume score guide improvement |

---

