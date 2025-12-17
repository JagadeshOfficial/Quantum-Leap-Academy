'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Loader2 } from 'lucide-react';
import { personalizedLearningPath, PersonalizedLearningPathOutput } from '@/ai/flows/personalized-learning-path';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  currentJobProfile: z.string().min(2, { message: 'Please enter your current job profile.' }),
  desiredCareerTrajectory: z.string().min(2, { message: 'Please describe your desired career.' }),
  studentProgress: z.string().optional(),
});

export default function PersonalizedPathPage() {
  const [result, setResult] = useState<PersonalizedLearningPathOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      currentJobProfile: '',
      desiredCareerTrajectory: '',
      studentProgress: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setResult(null);
    try {
      const response = await personalizedLearningPath(values);
      setResult(response);
    } catch (error) {
      console.error('Error generating learning path:', error);
      toast({
        variant: 'destructive',
        title: 'An error occurred',
        description: 'Failed to generate learning path. Please try again.',
      });
    }
    setIsLoading(false);
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">Personalized Learning Path</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Let our AI craft a unique learning journey just for you.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Tell us about yourself</CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="currentJobProfile"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Current Job Profile</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., Software Engineer, Student" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="desiredCareerTrajectory"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Desired Career Goal</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., Become a Data Scientist at a FAANG company" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="studentProgress"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Current Progress (Optional)</FormLabel>
                        <FormControl>
                          <Textarea placeholder="e.g., Completed a Python basics course, familiar with SQL" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" disabled={isLoading} className="w-full">
                    {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    Generate My Path
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Your Custom Roadmap</h2>
            {isLoading && (
              <div className="space-y-4 rounded-lg border p-4">
                <div className="h-8 w-3/4 animate-pulse rounded bg-muted"></div>
                <div className="h-20 w-full animate-pulse rounded bg-muted"></div>
                <div className="h-4 w-full animate-pulse rounded bg-muted"></div>
                <div className="h-20 w-full animate-pulse rounded bg-muted"></div>
              </div>
            )}
            {result ? (
              <div className="space-y-6">
                <Card>
                  <CardHeader><CardTitle>Learning Path</CardTitle></CardHeader>
                  <CardContent><p className="whitespace-pre-wrap text-sm">{result.learningPath}</p></CardContent>
                </Card>
                <Card>
                  <CardHeader><CardTitle>Suggested Resources</CardTitle></CardHeader>
                  <CardContent><p className="whitespace-pre-wrap text-sm">{result.suggestedResources}</p></CardContent>
                </Card>
                <Card>
                  <CardHeader><CardTitle>Career Roadmap</CardTitle></CardHeader>
                  <CardContent><p className="whitespace-pre-wrap text-sm">{result.roadmap}</p></CardContent>
                </Card>
              </div>
            ) : (
              !isLoading && (
                <Card className="flex h-full items-center justify-center border-dashed p-8">
                  <p className="text-center text-muted-foreground">Your personalized learning path will appear here once generated.</p>
                </Card>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
