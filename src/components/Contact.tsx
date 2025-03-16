
import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, Loader2 } from 'lucide-react';
import ResumeSection from './ResumeSection';
import { toast } from "@/components/ui/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
    }, 1500);
  };

  return (
    <ResumeSection 
      title="CONTACT.ME" 
      icon={<Mail className="w-5 h-5 text-retro-neon-green" />} 
      color="green"
      delay={1200}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="bg-retro-dark-purple/70 rounded p-6 border border-gray-700 mb-6">
            <h3 className="font-press-start text-retro-neon-green text-sm mb-4">GET IN TOUCH</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-retro-neon-pink mr-3" />
                <a href="mailto:john.doe@example.com" className="text-white hover:text-retro-neon-pink transition-colors">
                  john.doe@example.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-retro-neon-blue mr-3" />
                <a href="tel:+1234567890" className="text-white hover:text-retro-neon-blue transition-colors">
                  +1 (234) 567-890
                </a>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-retro-neon-cyan mr-3" />
                <span className="text-white">San Francisco, CA</span>
              </div>
            </div>
          </div>
          
          <div className="bg-retro-dark-purple/70 rounded p-6 border border-gray-700">
            <h3 className="font-press-start text-retro-neon-green text-sm mb-4">AVAILABILITY</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-white">Status:</span>
                <span className="text-retro-neon-green flex items-center">
                  <span className="inline-block w-2 h-2 bg-retro-neon-green rounded-full mr-2 animate-pulse"></span>
                  Available for work
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-white">Preferred:</span>
                <span className="text-retro-neon-cyan">Remote</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white">Timezone:</span>
                <span className="text-retro-neon-blue">PST (UTC-8)</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-retro-dark-purple/70 rounded p-6 border border-gray-700">
          <h3 className="font-press-start text-retro-neon-green text-sm mb-4">SEND MESSAGE</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-white mb-1">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-retro-black border border-retro-neon-blue/50 focus:border-retro-neon-blue p-2 text-white rounded"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-white mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-retro-black border border-retro-neon-blue/50 focus:border-retro-neon-blue p-2 text-white rounded"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-white mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full bg-retro-black border border-retro-neon-blue/50 focus:border-retro-neon-blue p-2 text-white rounded resize-none"
              ></textarea>
            </div>
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="retro-btn w-full flex items-center justify-center"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </ResumeSection>
  );
};

export default Contact;
