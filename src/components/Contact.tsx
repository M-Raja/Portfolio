import React from 'react';
import { Mail, MapPin } from 'lucide-react';

const Contact = () => {

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'raja.madhavann@gmail.com',
      href: 'mailto:raja.madhavann@gmail.com',
    },
    
    {
      icon: MapPin,
      label: 'Location',
      value: 'Chennai , IND',
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div id="get-in-touch" className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Get In <span className="text-gradient-cyber">Touch</span>
          </h2>
          <div className="w-24 h-0.5 bg-primary mx-auto"></div>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <div className="flex justify-center mb-10">
                <img 
                  src="/undraw_social-thinking_x42y.svg" 
                  alt="Social Thinking" 
                  className="w-full max-w-sm h-auto"
                />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Let's Connect</h3>
              <p className="text-muted-foreground mb-8">
                Whether you want to discuss a project, explore collaboration opportunities, or simply connect with a fellow security professional, I'd love to hear from you.<br/><br/>
                Let's build something secure together!
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <info.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-black">{info.label}</p>
                    {info.href ? (
                      <a 
                        href={info.href}
                        className="text-muted-foreground font-medium"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-muted-foreground font-medium">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;