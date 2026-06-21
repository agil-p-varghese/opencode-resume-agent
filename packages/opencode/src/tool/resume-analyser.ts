import { Effect, Schema } from "effect"

import DESCRIPTION from "./resume-analyser.txt"

import * as Tool from "./tool"

export const Parameters = Schema.Struct({
  resumeSummary: Schema.String.annotate({
    description:
      "LLM-generated summary of resume including extracted skills, projects, strengths and weaknesses",
  }),

  jdSummary: Schema.String.annotate({
    description:
      "LLM-generated summary of the job description and required skills",
  }),

  matchedSkills: Schema.Array(Schema.String).annotate({
    description:
      "Skills that match between resume and JD extracted by the LLM",
  }),

  missingSkills: Schema.Array(Schema.String).annotate({
    description:
      "Skills missing in resume compared to JD extracted by the LLM",
  }),

  projectStrengths: Schema.optional(
    Schema.Array(Schema.String).annotate({
      description:
        "Project-level strengths found by comparing resume projects against the JD",
    }),
  ),

  projectWeaknesses: Schema.optional(
    Schema.Array(Schema.String).annotate({
      description:
        "Project-level weaknesses or gaps found by comparing resume projects against the JD",
    }),
  ),

  advisorRecommendations: Schema.optional(
    Schema.Array(Schema.String).annotate({
      description:
        "Technical resume improvement recommendations generated using resume-advisor.md",
    }),
  ),
})

export const ResumeAnalyserTool = Tool.define(
  "resume_analyser",

  Effect.gen(function* () {
    return {
      description: `${DESCRIPTION}\n\nRESUME ADVISOR SKILL:\n${RESUME_ADVISOR}`,

      parameters: Parameters,

      execute: (params: {
        resumeSummary: string
        jdSummary: string
        matchedSkills: string[]
        missingSkills: string[]
        projectStrengths?: string[]
        projectWeaknesses?: string[]
        advisorRecommendations?: string[]
      }) =>
        Effect.gen(function* () {
          const strengths: string[] = []
          const drawbacks: string[] = []
          const suggestions: string[] = []

          if (params.matchedSkills.length > 0) {
            strengths.push(
              `Good alignment with JD skills: ${params.matchedSkills.join(", ")}`,
            )
          }

          if (params.projectStrengths?.length) {
            strengths.push(...params.projectStrengths)
          }

          if (params.missingSkills.length > 0) {
            drawbacks.push(
              `Missing important skills: ${params.missingSkills.join(", ")}`,
            )

            suggestions.push(
              "Map missing JD skills to honest project improvements or focused gap-filling projects.",
            )
          }

          if (params.projectWeaknesses?.length) {
            drawbacks.push(...params.projectWeaknesses)
          }

          suggestions.push(
            "Improve project impact descriptions using measurable or observable outcomes.",
          )

          suggestions.push(
            "Add GitHub, demo, deployment, architecture, testing, or performance details where they truthfully exist.",
          )

          if (params.advisorRecommendations?.length) {
            suggestions.push(...params.advisorRecommendations)
          }

          const score = Math.max(0, 100 - params.missingSkills.length * 10)

          return {
            title: "Resume vs JD Analysis",

            metadata: {
              score,
              matchedSkills: params.matchedSkills.length,
              missingSkills: params.missingSkills.length,
              projectStrengths: params.projectStrengths?.length ?? 0,
              projectWeaknesses: params.projectWeaknesses?.length ?? 0,
              advisorRecommendations:
                params.advisorRecommendations?.length ?? 0,
            },

            output: `
            Resume Score: ${score}/100

            Strengths:
            ${strengths.join("\n") || "None"}

            Drawbacks:
            ${drawbacks.join("\n") || "None"}

            Resume Adviser Recommendations:
            ${suggestions.join("\n")}
            `,
          }
        }).pipe(Effect.orDie),
    }
  }),
)