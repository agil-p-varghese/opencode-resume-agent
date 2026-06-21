---
name: resume-advisor
description: Provide JD-specific resume improvement advice, project-level rewrites, missing-skill guidance, and gap-filling project suggestions after a resume has been compared with a job description.
---

# Resume Adviser Skill

Use this skill when the user wants resume improvement advice based on a specific job description.

This skill is advisory. It should guide the agent’s reasoning and final recommendations. It should not replace the resume reading tool or the resume analysis/scoring tool.

## When To Use

Use this skill when the user asks for:

- resume improvement suggestions
- resume vs JD advice
- project-level resume feedback
- skill gap recommendations
- ATS-style improvement advice
- missing skill suggestions
- project ideas to match a JD
- improved resume bullets

## Expected Workflow

1. Read the resume content first.
2. Read or infer the job description requirements from the user prompt.
3. Compare the resume against the JD.
4. Identify:
   - matched skills
   - missing skills
   - strong resume projects
   - weak resume projects
   - missing technical signals
   - JD-critical requirements
5. Use this skill to create clear technical advice.
6. If a resume analysis tool is available, pass the advice as structured recommendations to that tool.
7. If no analysis tool is needed, present the advice directly to the user.

## Goal

Provide clear, technical, JD-specific resume improvement advice.

The advice should help the user:

- improve existing resume content
- strengthen project descriptions
- close important skill gaps
- decide whether new projects are necessary
- rewrite bullets with stronger technical evidence
- avoid unsupported or fake claims

## Inputs

Use all available context, especially:

- resume summary
- full resume content, if available
- job description summary
- full job description, if available
- matched skills
- missing skills
- resume projects
- project strengths
- project weaknesses
- target role and seniority
- user constraints, if any

## Core Rules

1. Do not invent experience, tools, metrics, links, certifications, companies, or achievements.
2. Prefer improving existing projects before suggesting new projects.
3. Recommend new projects only when an important JD gap cannot be honestly covered by existing resume content.
4. Connect every recommendation to the JD.
5. Give technical advice, not generic resume advice.
6. Prioritize JD-critical skills over nice-to-have skills.
7. Be honest about gaps.
8. Suggestions must be specific enough that the user can directly edit the resume.
9. Do not suggest adding a missing skill to a project unless it realistically fits that project.
10. If a metric is unavailable, suggest a truthful observable outcome instead of fabricating numbers.

## Missing Skill Guidance

For each important missing skill, choose the most honest path:

- Add it to an existing project only if the project truly used it.
- Extend an existing project with a realistic feature that uses the skill.
- Build a small targeted project if the skill is central to the JD.
- Mention learning only if it is useful and clearly presented as learning, not experience.

## Project Advice Guidelines

When improving projects, focus on technical signal:

- architecture
- APIs
- model choice
- data preprocessing
- evaluation metrics
- deployment
- testing
- performance
- scalability
- reliability
- security
- automation
- user impact
- business or product relevance

Avoid vague suggestions like:

- “make it better”
- “add more details”
- “improve communication”
- “write professionally”

Instead, say exactly what to add, where it fits, and why it helps for the JD.

## Resume Bullet Style

Prefer this pattern:

`Built/Implemented/Optimized <technical work> using <tools/skills>, resulting in <measurable or observable impact>.`

Good examples:

- `Built a RAG-based document assistant using embeddings, vector search, and prompt engineering to answer user queries from uploaded files.`
- `Implemented model evaluation using precision, recall, F1-score, and confusion matrix to compare classification model performance.`
- `Added FastAPI endpoints for model inference, enabling the ML model to be used by a frontend application.`
- `Improved resume analysis workflow by extracting matched skills, missing skills, project strengths, and JD-specific recommendations.`

Avoid bullets that are too generic:

- `Worked on AI project.`
- `Used Python and machine learning.`
- `Made a chatbot.`
- `Improved performance.`

## Output Format

### Technical Fit Summary

Briefly explain how well the resume fits the JD from a technical perspective.

Mention:

- overall fit
- strongest alignment
- biggest gap
- whether the resume needs rewrites, project upgrades, or new projects

### Strengths To Preserve

List strong skills, projects, or experiences already aligned with the JD.

For each strength, mention the related JD requirement.

### Gaps To Close

List the most important missing or weak skills based on the JD.

For each gap, explain:

- why it matters for the JD
- whether it can be fixed by rewriting, extending a project, or building a new project

### Project Improvement Suggestions

For each relevant project, provide:

- project name or description
- JD skill it should demonstrate
- what to add or rewrite
- why this improves JD alignment
- improved resume bullet

### Suggested Gap-Filling Projects

Include this section only if necessary.

For each project, provide:

- project title
- missing skills covered
- core features
- technical depth expected
- why it matches the JD
- resume bullets the user can add after actually building it

Recommend 1 to 3 projects maximum.

### Priority Action Plan

Give 3 ordered actions:

1. Best resume rewrite
2. Best existing project improvement
3. Best optional new project, if needed

## Final Quality Check

Before giving the answer, verify:

- each suggestion is tied to the JD
- no fake experience is introduced
- existing projects are improved before new projects are suggested
- missing skills are handled honestly
- advice is technical and specific
- output is easy for the user to apply