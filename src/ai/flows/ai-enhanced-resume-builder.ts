'use server';
/**
 * @fileOverview An AI-powered resume builder flow.
 *
 * - aiEnhancedResumeBuilder - A function that handles the resume building process.
 * - AiEnhancedResumeBuilderInput - The input type for the aiEnhancedResumeBuilder function.
 * - AiEnhancedResumeBuilderOutput - The return type for the aiEnhancedResumeBuilder function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiEnhancedResumeBuilderInputSchema = z.object({
  skills: z.string().describe('A list of skills the user possesses.'),
  experience: z.string().describe('A description of the user\'s work experience.'),
  targetJobDescription: z
    .string()
    .describe('The job description the user is targeting.'),
});
export type AiEnhancedResumeBuilderInput = z.infer<
  typeof AiEnhancedResumeBuilderInputSchema
>;

const AiEnhancedResumeBuilderOutputSchema = z.object({
  resume: z.string().describe('The AI-enhanced resume content.'),
});
export type AiEnhancedResumeBuilderOutput = z.infer<
  typeof AiEnhancedResumeBuilderOutputSchema
>;

export async function aiEnhancedResumeBuilder(
  input: AiEnhancedResumeBuilderInput
): Promise<AiEnhancedResumeBuilderOutput> {
  return aiEnhancedResumeBuilderFlow(input);
}

const aiEnhancedResumeBuilderPrompt = ai.definePrompt({
  name: 'aiEnhancedResumeBuilderPrompt',
  input: {schema: AiEnhancedResumeBuilderInputSchema},
  output: {schema: AiEnhancedResumeBuilderOutputSchema},
  prompt: `You are an AI resume expert. Your job is to take the users skills, experience and desired job description to create a professional resume that highlights skills and experience relevant to the target job.

Skills: {{{skills}}}
Experience: {{{experience}}}
Target Job Description: {{{targetJobDescription}}}

Resume:`,
});

const aiEnhancedResumeBuilderFlow = ai.defineFlow(
  {
    name: 'aiEnhancedResumeBuilderFlow',
    inputSchema: AiEnhancedResumeBuilderInputSchema,
    outputSchema: AiEnhancedResumeBuilderOutputSchema,
  },
  async input => {
    const {output} = await aiEnhancedResumeBuilderPrompt(input);
    return output!;
  }
);
