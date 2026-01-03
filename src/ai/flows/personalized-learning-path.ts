'use server';

/**
 * @fileOverview This file defines a Genkit flow for generating personalized learning paths based on user profile and career goals.
 *
 * - personalizedLearningPath - A function that generates a personalized learning path.
 * - PersonalizedLearningPathInput - The input type for the personalizedLearningPath function.
 * - PersonalizedLearningPathOutput - The return type for the personalizedLearningPath function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const PersonalizedLearningPathInputSchema = z.object({
  currentJobProfile: z
    .string()
    .describe('The current job profile of the student.'),
  desiredCareerTrajectory: z
    .string()
    .describe('The desired career trajectory of the student.'),
  studentProgress: z
    .string()
    .optional()
    .describe('The current progress of the student in their learning journey.'),
});
export type PersonalizedLearningPathInput = z.infer<
  typeof PersonalizedLearningPathInputSchema
>;

const PersonalizedLearningPathOutputSchema = z.object({
  learningPath: z
    .string()
    .describe('A personalized learning path tailored to the student.'),
  suggestedResources: z
    .string()
    .describe(
      'A list of relevant resources (internal courses and external links).' /* Added description for resources */
    ),
  roadmap: z.string().describe('A high-level roadmap for the student career vision.'),
});

export type PersonalizedLearningPathOutput = z.infer<
  typeof PersonalizedLearningPathOutputSchema
>;

export async function personalizedLearningPath(
  input: PersonalizedLearningPathInput
): Promise<PersonalizedLearningPathOutput> {
  return personalizedLearningPathFlow(input);
}

const personalizedLearningPathPrompt = ai.definePrompt({
  name: 'personalizedLearningPathPrompt',
  input: { schema: PersonalizedLearningPathInputSchema },
  output: { schema: PersonalizedLearningPathOutputSchema },
  prompt: `You are an expert career coach specializing in technology careers.

Based on the student's current job profile, desired career trajectory, and current progress, create a personalized learning path, suggest relevant resources, and generate a high-level roadmap to show the student a career vision.

Current Job Profile: {{{currentJobProfile}}}
Desired Career Trajectory: {{{desiredCareerTrajectory}}}
Current Progress: {{{studentProgress}}}

Consider resources available on Mathisi School when listing resources.
`,
});

const personalizedLearningPathFlow = ai.defineFlow(
  {
    name: 'personalizedLearningPathFlow',
    inputSchema: PersonalizedLearningPathInputSchema,
    outputSchema: PersonalizedLearningPathOutputSchema,
  },
  async input => {
    const { output } = await personalizedLearningPathPrompt(input);
    return output!;
  }
);
