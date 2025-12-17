'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { Loader2 } from 'lucide-react';
import { aiEnhancedResumeBuilder, AiEnhancedResumeBuilderOutput } from '@/ai/flows/ai-enhanced-resume-builder';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  skills: z.string().min(10, { message: 'Please list your skills.' }),
  experience: z.string().min(20, { message: 'Please describe your work experience.' }),
  targetJobDescription: z.string().min(20, { message: 'Please provide the target job description.' }),
});

export default function ResumeBuilderPage() {
  const [result, setResult] = useState<AiEnhancedResumeBuilderOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      skills: '',
      experience: '',
      targetJobDescription: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setResult(null);
    try {
      const response = await aiEnhancedResumeBuilder(values);
      setResult(response);
    } catch (error) {
      console.error('Error generating resume:', error);
      toast({
        variant: 'destructive',
        title: 'An error occurred',
        description: 'Failed to generate resume. Please try again.',
      });
    }
    setIsLoading(false);
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">AI-Enhanced Resume Builder</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Create a professional resume tailored to your dream job in minutes.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Build Your Resume</CardTitle>
              <CardDescription>Provide your details and let our AI do the heavy lifting.</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="skills"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Skills</FormLabel>
                        <FormControl>
                          <Textarea rows={4} placeholder="e.g., Python, SQL, Power BI, Project Management..." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="experience"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Experience</FormLabel>
                        <FormControl>
                          <Textarea rows={6} placeholder="Describe your past roles, responsibilities, and achievements." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="targetJobDescription"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Target Job Description</FormLabel>
                        <FormControl>
                          <Textarea rows={6} placeholder="Paste the job description you are applying for." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" disabled={isLoading} className="w-full">
                    {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    Generate Resume
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle>Your Generated Resume</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              {isLoading ? (
                 <div className="h-full space-y-4">
                    <div className="h-8 w-3/4 animate-pulse rounded bg-muted"></div>
                    <div className="h-4 w-full animate-pulse rounded bg-muted"></div>
                    <div className="h-4 w-5/6 animate-pulse rounded bg-muted"></div>
                    <div className="mt-8 h-8 w-1/2 animate-pulse rounded bg-muted"></div>
                    <div className="h-4 w-full animate-pulse rounded bg-muted"></div>
                    <div className="h-4 w-full animate-pulse rounded bg-muted"></div>
                 </div>
              ) : result ? (
                <div className="prose-sm h-full max-w-none overflow-y-auto rounded-md border p-4 dark:prose-invert">
                  <pre className="whitespace-pre-wrap font-sans">{result.resume}</pre>
                </div>
              ) : (
                <div className="flex h-full items-center justify-center rounded-md border-dashed p-8">
                  <p className="text-center text-muted-foreground">Your AI-generated resume will appear here.</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
