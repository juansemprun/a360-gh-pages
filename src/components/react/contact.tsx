import { Check } from 'lucide-react';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/react/shadcn/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/react/shadcn/form';
import { Input } from '@/components/ui/react/shadcn/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/react/shadcn/select';
import { Textarea } from '@/components/ui/react/shadcn/textarea';

const Contact = () => {
  const form = useForm({
    defaultValues: {
      name: '',
      companyName: '',
      email: '',
      companySize: '',
      message: '',
      referrer: '',
    },
  });

  const onSubmit = (data: {
    name: string;
    companyName: string;
    email: string;
    companySize: string;
    message: string;
    referrer: string;
  }) => {
    console.log(data);
    // Add your form submission logic here
  };

  return (
    <div className="order-2 md:order-none md:row-span-2">
      <div className="bg-background border-border rounded-lg border p-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-6 sm:grid-cols-2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Alex" />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="companyName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company Name</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Acme" />
                  </FormControl>
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
                    <Input {...field} placeholder="alex.smith@example.com" />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="companySize"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Select an expert</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select expert" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="yuri-and-neil">Yuri and Neil</SelectItem>
                        <SelectItem value="arquen">Arquen</SelectItem>
                        <SelectItem value="henkan-and-partners">Henkan & Partners</SelectItem>
                        <SelectItem value="welyft">Welyft</SelectItem>
                        <SelectItem value="nri-netcom">NRI Netcom</SelectItem>
                        <SelectItem value="dng">DNG</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className="sm:col-span-2">
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea {...field} placeholder="Tell us about your project..." />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button
              type="submit"
              disabled
              className="bg-primary-500 hover:bg-primary-600 font-bold hover:cursor-pointer sm:col-span-2"
            >
              Submit
            </Button>
            <p className="text-muted-foreground text-xs sm:col-span-2">
              You acknowledge that you've reviewed and agreed to our{' '}
              <a href="/website/en/privacy-policy" className="text-primary hover:underline">
                Privacy Policy
              </a>{' '}
            </p>
          </form>
        </Form>
      </div>
    </div>
  );
};

export { Contact };
