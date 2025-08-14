import React from 'react';
import { motion } from 'framer-motion';
import { useForm as useReactHookForm } from 'react-hook-form';
import { useForm, ValidationError } from '@formspree/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactForm = z.infer<typeof contactSchema>;

export function Contact() {
  const { toast } = useToast();
  const [formspreeState, handleFormspreeSubmit] = useForm("mqaljely");
  const { register, handleSubmit, formState: { errors }, reset } = useReactHookForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactForm) => {
    try {
      // Create a form data object that matches Formspree expectations
      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('email', data.email);
      formData.append('subject', data.subject);
      formData.append('message', data.message);

      // Submit to Formspree
      await handleFormspreeSubmit(formData);
      
      // If successful, show toast and reset form
      if (formspreeState.succeeded) {
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon!",
        });
        reset();
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
  };

  // Show success message if form was submitted successfully
  if (formspreeState.succeeded) {
    return (
      <section id="contact" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="max-w-md mx-auto bg-background border border-border rounded-xl p-8 shadow-sm">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Message Sent!</h2>
              <p className="text-muted-foreground mb-6">
                Thank you for reaching out! I'll get back to you as soon as possible.
              </p>
              <Button 
                onClick={() => window.location.reload()} 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                Send Another Message
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'charannaikcharan734@gmail.com',
      href: 'mailto:charannaikcharan734@gmail.com',
      clickable: true
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9704835234',
      href: 'tel:+919704835234',
      clickable: true
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Tenali, Andhra Pradesh, India',
      href: 'https://maps.google.com/?q=Tenali,AndhraPradesh,India',
      clickable: true
    }
  ];

  const handleContactClick = (info) => {
    if (info.clickable) {
      if (info.label === 'Location') {
        window.open(info.href, '_blank');
      } else {
        window.location.href = info.href;
      }
    }
  };

  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or just want to chat? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-6">Let's start a conversation</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm always open to discussing new opportunities, creative ideas, or potential 
                collaborations. Whether you have a project in mind or just want to connect, 
                feel free to reach out!
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onClick={() => handleContactClick(info)}
                  className={`flex items-center gap-4 p-4 bg-background border border-border rounded-lg hover:border-blue-200 dark:hover:border-blue-800 transition-colors group ${
                    info.clickable ? 'cursor-pointer' : ''
                  }`}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium">{info.label}</p>
                    <p className="text-muted-foreground">{info.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl border border-border">
              <h4 className="font-semibold mb-2">Quick Response</h4>
              <p className="text-sm text-muted-foreground">
                I typically respond to emails within 24 hours. For urgent matters, 
                feel free to give me a call!
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-background border border-border rounded-xl p-8 shadow-sm"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Input
                    placeholder="Your Name"
                    {...register('name')}
                    className={errors.name ? 'border-red-500' : ''}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                  )}
                  <ValidationError 
                    prefix="Name" 
                    field="name"
                    errors={formspreeState.errors}
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    {...register('email')}
                    className={errors.email ? 'border-red-500' : ''}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                  <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={formspreeState.errors}
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
              </div>

              <div>
                <Input
                  placeholder="Subject"
                  {...register('subject')}
                  className={errors.subject ? 'border-red-500' : ''}
                />
                {errors.subject && (
                  <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
                )}
                <ValidationError 
                  prefix="Subject" 
                  field="subject"
                  errors={formspreeState.errors}
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div>
                <Textarea
                  placeholder="Your Message"
                  rows={6}
                  {...register('message')}
                  className={errors.message ? 'border-red-500' : ''}
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                )}
                <ValidationError 
                  prefix="Message" 
                  field="message"
                  errors={formspreeState.errors}
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={formspreeState.submitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4 mr-2" />
                {formspreeState.submitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}