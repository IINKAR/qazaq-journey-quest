
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

const formSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(5, "Please enter a valid phone number"),
  destination: z.string().min(1, "Please select a destination"),
  arrivalDate: z.date({
    required_error: "Please select an arrival date",
  }),
  departureDate: z.date({
    required_error: "Please select a departure date",
  }),
  adults: z.coerce.number().int().min(1).max(20),
  children: z.coerce.number().int().min(0).max(10),
  accommodationType: z.string().optional(),
  specialRequests: z.string().optional(),
}).refine(data => data.departureDate > data.arrivalDate, {
  message: "Departure date must be after arrival date",
  path: ["departureDate"],
});

type FormValues = z.infer<typeof formSchema>;

const destinations = [
  "Almaty",
  "Astana (Nur-Sultan)",
  "Shymkent",
  "Turkistan",
  "Kolsai Lakes",
  "Burabay (Borovoe)",
  "Charyn Canyon",
  "Altai Mountains",
  "Mangystau",
  "Baikonur"
];

const accommodationTypes = [
  "Hotel",
  "Guest House",
  "Yurt Camp",
  "Apartment",
  "Homestay",
  "Eco Resort"
];

export function TripBookingForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      adults: 2,
      children: 0,
    },
  });

  function onSubmit(data: FormValues) {
    console.log("Form submitted:", data);
    toast.success("Booking request submitted!", {
      description: "We'll contact you soon to confirm your trip details.",
    });
    form.reset();
  }

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6 md:p-8">
      <h2 className="text-3xl font-bold text-kazakh-night mb-6">Plan Your Kazakhstan Adventure</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Personal Information */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-kazakh-blue mb-2">Personal Information</h3>
              
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your full name" {...field} />
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
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="your.email@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input placeholder="+1 (123) 456-7890" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Trip Details */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-kazakh-blue mb-2">Trip Details</h3>
              
              <FormField
                control={form.control}
                name="destination"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Destination</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a destination" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {destinations.map((destination) => (
                          <SelectItem key={destination} value={destination}>
                            {destination}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="adults"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Adults</FormLabel>
                      <FormControl>
                        <Input type="number" min={1} max={20} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="children"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Children</FormLabel>
                      <FormControl>
                        <Input type="number" min={0} max={10} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </div>

          {/* Date Selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="arrivalDate"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Arrival Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Select date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) => date < new Date()}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="departureDate"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Departure Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Select date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) => 
                          date < (form.getValues().arrivalDate || new Date())
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Additional Details */}
          <div className="grid grid-cols-1 gap-6">
            <FormField
              control={form.control}
              name="accommodationType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Accommodation Preference</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select accommodation type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {accommodationTypes.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormDescription>
                    Select your preferred accommodation type
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="specialRequests"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Special Requests</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Any special requirements or requests for your trip?"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Let us know about dietary restrictions, accessibility needs, or any special arrangements
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button 
            type="submit" 
            className="w-full md:w-auto md:min-w-[200px] bg-kazakh-blue hover:bg-kazakh-night"
          >
            Submit Booking Request
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default TripBookingForm;
