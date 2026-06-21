---
name: resume-advisor
description: Analyze resumes against job descriptions and provide tailored improvement suggestions
---

# Resume Adviser Skill

Use this skill after the resume has been read and compared against the job description.

## Goal

Provide clear, technical, JD-specific resume improvement advice. The advice should help the user improve existing resume content, close skill gaps, and decide whether new projects are needed.

## Inputs

The agent should use:

- resume summary
- job description summary
- matched skills
- missing skills
- resume projects
- project strengths
- project weaknesses

## Rules

1. Do not invent experience, tools, metrics, links, or achievements.
2. Prefer improving existing projects before suggesting new projects.
3. Recommend new projects only when the resume has an important JD gap that existing projects cannot honestly cover.
4. Connect every recommendation to the JD.
5. Give technical advice, not generic resume advice.
6. For missing skills, suggest one of:
   - adding the skill to an existing project if it truthfully fits
   - extending an existing project with a feature that uses the skill
   - building a focused new project
7. Suggestions must be specific enough that the user can edit the resume directly.

## Output Format

### Technical Fit Summary

Briefly explain how well the resume fits the JD.

### Strengths To Preserve

List strong skills, projects, or experiences already aligned with the JD.

### Gaps To Close

List the most important missing or weak skills based on the JD.

### Project Improvement Suggestions

For each relevant project, provide:

- project name or description
- JD skill it should demonstrate
- what to add or rewrite
- improved resume bullet

Use this bullet pattern:

`Built/Implemented/Optimized <technical work> using <tools/skills>, resulting in <measurable or observable impact>.`

If no metric is available, use a truthful observable result such as:

- improved reliability
- reduced manual work
- faster response time
- better deployment workflow
- clearer architecture
- easier maintenance

### Suggested Gap-Filling Projects

Include only if necessary.

For each project, provide:

- project title
- missing skills covered
- core features
- technical depth expected
- resume bullets the user can add after actually building it

### Priority Action Plan

Give 3 ordered actions:

1. Best resume rewrite
2. Best existing project improvement
3. Best optional new project, if needed