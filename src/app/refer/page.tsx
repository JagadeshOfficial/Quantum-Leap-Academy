
'use client';

import * as React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import type { ImagePlaceholder } from '@/lib/placeholder-images';
import { Gift, Users, Send, Loader2, Share2 } from 'lucide-react';

const getImage = (id: string): ImagePlaceholder | undefined => {
  return PlaceHolderImages.find((img) => img.id === id);
};

const formSchema = z.object({
  referrerName: z.string().min(2, 'Your name is too short'),
  referrerEmail: z.string().email('Your email is invalid'),
  friendName: z.string().min(2, "Friend's name is too short"),
  friendEmail: z.string().email("Friend's email is invalid"),
});

export default function ReferPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const heroImage = getImage('instructor-bg-2');

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      referrerName: '',
      referrerEmail: '',
      friendName: '',
      friendEmail: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log(values);
    setIsSubmitting(false);
    form.reset();
    toast({
      title: 'Referral Sent!',
      description: `Your referral has been sent to ${values.friendName}.`,
    });
  };

  const steps = [
    { icon: <Share2 className="h-8 w-8 text-primary" />, title: '1. Share Your Link', description: 'Submit your friend’s details using the form below.' },
    { icon: <Users className="h-8 w-8 text-primary" />, title: '2. Friend Enrolls', description: 'Your friend enrolls in any of our certification programs.' },
    { icon: <Gift className="h-8 w-8 text-primary" />, title: '3. You Both Get Rewarded', description: 'You both receive exclusive rewards and discounts.' },
  ];

  return (
    <div>
      <section className="relative h-72 w-full bg-card">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt="Refer and Earn"
            data-ai-hint={heroImage.imageHint}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-black/60" />
        <div className="container relative z-10 mx-auto flex h-full items-center justify-center px-4">
          <div className="text-center text-white">
            <h1 className="text-4xl font-extrabold tracking-tight drop-shadow-md md:text-6xl">
              Refer &amp; Earn
            </h1>
            <p className="mt-4 text-lg drop-shadow md:text-xl">
              Share the future of learning and get rewarded.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold">How It Works</h2>
            <p className="mt-2 text-lg text-muted-foreground">
              It's as easy as 1-2-3.
            </p>
          </div>
          <div className="grid max-w-4xl mx-auto gap-8 md:grid-cols-3">
            {steps.map((step) => (
              <Card key={step.title} className="p-6 text-center">
                <div className="mb-4 flex justify-center">{step.icon}</div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="mt-2 text-muted-foreground">{step.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary py-20">
        <div className="container mx-auto grid max-w-6xl grid-cols-1 gap-12 px-4 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold">Your Rewards</h2>
            <p className="mt-4 text-muted-foreground">
              For every successful referral, you receive a **$100 Amazon Voucher**, and your friend gets a **15% discount** on their course fees. There's no limit to how many friends you can refer or how many rewards you can earn!
            </p>
            <div className="mt-8 space-y-6">
                <Card>
                    <CardHeader className="flex flex-row items-center gap-4">
                        <Gift className="h-8 w-8 text-primary"/>
                        <div>
                            <CardTitle>Your Reward</CardTitle>
                            <CardDescription>$100 Amazon Voucher</CardDescription>
                        </div>
                    </CardHeader>
                </Card>
                 <Card>
                    <CardHeader className="flex flex-row items-center gap-4">
                        <Send className="h-8 w-8 text-primary"/>
                        <div>
                            <CardTitle>Friend's Reward</CardTitle>
                            <CardDescription>15% Off Course Fees</CardDescription>
                        </div>
                    </CardHeader>
                </Card>
            </div>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Refer a Friend</CardTitle>
              <CardDescription>
                Enter your details and your friend's email to send them an invite.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField control={form.control} name="referrerName" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Name</FormLabel>
                      <FormControl><Input placeholder="Your Name" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="referrerEmail" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Email</FormLabel>
                      <FormControl><Input type="email" placeholder="your.email@example.com" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                   <div className='my-6 border-t'/>
                   <FormField control={form.control} name="friendName" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Friend's Name</FormLabel>
                      <FormControl><Input placeholder="Friend's Name" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="friendEmail" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Friend's Email</FormLabel>
                      <FormControl><Input type="email" placeholder="friend.email@example.com" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <Button type="submit" disabled={isSubmitting} className="w-full">
                    {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    Send Referral
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
