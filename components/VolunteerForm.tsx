import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

const servingAreas = [
  "Operations / Admin",
  "Church Community & Engagement",
  "Content / Writing / Editing",
  "Design (Graphics, Brand, UI)",
  "Tech",
  "Financial Donations",
  "Service Experience Team",
  "Research / Insights",
  "Prayer Team",
  "Worship/Music",
  "Media Production",
  "Junior Church",
  "Others",
] as const;

const schema = z.object({
  fullName: z.string().trim().min(1, "Full name is required").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  whatsapp: z.string().trim().min(1, "WhatsApp number is required").max(20),
  location: z.string().trim().min(1, "Location is required").max(100),
  areas: z.array(z.string()).min(1, "Please select at least one area"),
  linkedin: z.string().trim().max(500).optional(),
  reason: z.string().trim().min(1, "Please share your reason").max(1000),
});

type FormData = z.infer<typeof schema>;

const VolunteerForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      fullName: "",
      email: "",
      whatsapp: "",
      location: "",
      areas: [],
      linkedin: "",
      reason: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      // Show loading toast
      toast.loading("Submitting application...", {
        description: "Please wait while we process your application.",
        id: "volunteer-submit", // Prevent duplicate toasts
      });
  
      // Send data to API
      const response = await fetch('/api/volunteer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      const result = await response.json();
  
      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit application');
      }
  
      // Dismiss loading toast
      toast.dismiss("volunteer-submit");
      
      // Success toast
      toast.success("Application Received ✅", {
        description: "Thank you for volunteering! We'll review your application and reach out to shortlisted candidates soon.",
        duration: 5000,
      });
  
      // Reset form
      form.reset();
      
    } catch (error) {
      console.error('Submission error:', error);
      
      // Dismiss loading toast
      toast.dismiss("volunteer-submit");
      
      // Error toast
      toast.error("Something went wrong", {
        description: error instanceof Error ? error.message : "Please try again later or contact support.",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="volunteer-form" className="px-6 py-24">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-10 space-y-3">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
            Volunteer to Help Build the church
          </h2>
          <p className="text-muted-foreground">
            The church will be built with a volunteer core: high-heart, high-integrity people 
            who want to serve meaningfully and build excellently. If you'd like to be 
            considered, apply here.
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Your full name" 
                      {...field} 
                      disabled={isSubmitting}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input 
                      type="email" 
                      placeholder="you@example.com" 
                      {...field} 
                      disabled={isSubmitting}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="whatsapp"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>WhatsApp Number</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="+234..." 
                      {...field} 
                      disabled={isSubmitting}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Location (City/Country)</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Lagos, Nigeria" 
                      {...field} 
                      disabled={isSubmitting}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="areas"
              render={() => (
                <FormItem>
                  <FormLabel>Areas you can serve</FormLabel>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    {servingAreas.map((area) => (
                      <FormField
                        key={area}
                        control={form.control}
                        name="areas"
                        render={({ field }) => (
                          <FormItem className="flex items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(area)}
                                onCheckedChange={(checked) => {
                                  const current = field.value || [];
                                  field.onChange(
                                    checked
                                      ? [...current, area]
                                      : current.filter((v) => v !== area)
                                  );
                                }}
                                disabled={isSubmitting}
                              />
                            </FormControl>
                            <FormLabel className="text-sm font-normal cursor-pointer">
                              {area}
                            </FormLabel>
                          </FormItem>
                        )}
                      />
                    ))}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="linkedin"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>LinkedIn / Portfolio <span className="text-muted-foreground font-normal">(optional)</span></FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="https://linkedin.com/in/..." 
                      {...field} 
                      disabled={isSubmitting}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="reason"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Why do you want to volunteer with the church?</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Share what draws you to this mission..."
                      className="min-h-25"
                      {...field}
                      disabled={isSubmitting}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              size="lg"
              className="w-full rounded-full bg-[#1D212B] text-white hover:bg-[#1D212B]/90 py-6"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                "Apply to Volunteer"
              )}
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default VolunteerForm;