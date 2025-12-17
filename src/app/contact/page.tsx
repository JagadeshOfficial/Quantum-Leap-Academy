
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import type { ImagePlaceholder } from "@/lib/placeholder-images";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const getImage = (id: string): ImagePlaceholder | undefined => {
  return PlaceHolderImages.find((img) => img.id === id);
};

export default function ContactPage() {
    const mapImage = getImage("map-image");
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
          Contact Us
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          We'd love to hear from you. Reach out with any questions.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Send Us a Message</CardTitle>
            <CardDescription>
              Fill out the form below and we'll get back to you as soon as
              possible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your Name" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your@email.com" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Your message..." />
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="space-y-8">
          <Card>
            <CardHeader>
                <CardTitle>Our Location</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                 {mapImage && (
                    <div className="relative h-64 w-full overflow-hidden rounded-lg">
                        <Image
                        src={mapImage.imageUrl}
                        alt="Location Map"
                        data-ai-hint={mapImage.imageHint}
                        fill
                        className="object-cover"
                        />
                    </div>
                )}
                <div className="flex items-start gap-4">
                    <MapPin className="mt-1 h-6 w-6 shrink-0 text-primary" />
                    <div>
                        <h3 className="font-semibold">Quantum Leap Academy</h3>
                        <p className="text-muted-foreground">123 Tech Park Avenue, Innovation City, 560100</p>
                    </div>
                </div>
            </CardContent>
          </Card>
           <Card>
            <CardHeader>
                <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                 <div className="flex items-center gap-4">
                    <Mail className="h-6 w-6 shrink-0 text-primary" />
                    <div>
                        <h3 className="font-semibold">Email Us</h3>
                        <p className="text-muted-foreground">hello@quantumleap.com</p>
                    </div>
                </div>
                 <div className="flex items-center gap-4">
                    <Phone className="h-6 w-6 shrink-0 text-primary" />
                     <div>
                        <h3 className="font-semibold">Call Us</h3>
                        <p className="text-muted-foreground">+91 98765 43210</p>
                    </div>
                </div>
            </CardContent>
           </Card>
        </div>
      </div>
    </div>
  );
}
