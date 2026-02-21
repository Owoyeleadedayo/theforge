import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { useState } from "react";

// More explicit schema
const schema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  whatsapp: z.string().trim().max(20).optional(),
  interest: z.string().min(1, "Please select your interest"),
  location: z.string().trim().max(100).optional(),
});

type FormData = z.infer<typeof schema>;

const GetUpdatesSection = () => {
  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      firstName: "",
      email: "",
      whatsapp: "",
      interest: "",
      location: "",
    } as FormData, // Type assertion here
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
  
    const toastId = toast.loading("Submitting...", {
      description: "Please wait while we process your request.",
    });
  
    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      const result = await response.json();
  
      if (!response.ok) {
        throw new Error(result.error || "Failed to submit");
      }
  
      toast.dismiss(toastId);
      toast.success("You're in! 🎉", {
        description:
          "Thanks for joining me on this next chapter. You'll hear from me soon.",
      });
  
      form.reset();
    } catch (error) {
      toast.dismiss(toastId);
      toast.error("Something went wrong", {
        description:
          error instanceof Error ? error.message : "Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const [isSubmitting, setIsSubmitting] = useState(false);


  return (
    <section id="updates-form" className="px-6 py-24 bg-[#F6F2EE]">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-10 space-y-3">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
            Get Updates
          </h2>
          <p className="text-muted-foreground">
            Receive periodic updates on ONEFORGE, the School of Strategy,
            upcoming launches, and ways to participate.
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your first name" {...field} />
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
                  <FormLabel>
                    WhatsApp Number{" "}
                    <span className="text-muted-foreground font-normal">
                      (optional)
                    </span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="+234..."
                      {...field}
                      value={field.value || ""}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="interest"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>I'm most interested in</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl className="w-full ">
                      <SelectTrigger>
                        <SelectValue placeholder="Select your interest" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-white ">
                      <SelectItem
                        value="oneforge"
                        className="transition-all ease-in-out hover:bg-[#CC7133] hover:text-white"
                      >
                        ONEFORGE
                      </SelectItem>
                      <SelectItem
                        value="strategy"
                        className="transition-all ease-in-out hover:bg-[#CC7133] hover:text-white"
                      >
                        School of Strategy
                      </SelectItem>
                      <SelectItem
                        value="both"
                        className="transition-all ease-in-out hover:bg-[#CC7133] hover:text-white"
                      >
                        Both
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Location{" "}
                    <span className="text-muted-foreground font-normal">
                      (optional)
                    </span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="City, Country"
                      {...field}
                      value={field.value || ""}
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
              {isSubmitting ? "Submitting..." : "Sign Up for Updates"}
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default GetUpdatesSection;
