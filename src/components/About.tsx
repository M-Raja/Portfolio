import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            About <span className="text-gradient-cyber">Me</span>
          </h2>
          <div className="w-24 h-0.5 bg-primary mx-auto"></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-8 items-start">
          {/* Profile Image Section */}
          <div className="flex justify-center lg:justify-end items-start order-1 lg:order-2 pt-8 lg:pt-12 -translate-x-4 lg:-translate-x-6">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 group cursor-default">
              {/* Decorative background */}
              <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full transform rotate-3 blur-sm group-hover:rotate-6 group-hover:scale-105 transition-all duration-300"></div>
              <div className="absolute inset-0 bg-primary/10 rounded-full transform rotate-3 group-hover:bg-primary/15 transition-colors duration-300"></div>
              {/* Image container with ring and enhancement */}
              <div className="relative w-full h-full rounded-full p-1.5 bg-gradient-to-br from-white/90 to-primary/20 shadow-[0_8px_32px_rgba(0,0,0,0.12),0_0_0_1px_rgba(0,0,0,0.05)] overflow-hidden ring-2 ring-white/80 transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_12px_40px_rgba(0,0,0,0.18),0_0_0_1px_rgba(0,0,0,0.08)] group-hover:ring-primary/30">
                <img
                  src="/87035496.png"
                  alt="M Raja"
                  className="w-full h-full rounded-full object-cover object-[42%_50%] brightness-105 contrast-105 saturate-110 shadow-inner"
                />
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="order-2 lg:order-1 space-y-8">
            {/* Introduction */}
            <div className="space-y-6">
              <div>
                <p className="text-sm text-foreground leading-relaxed mb-4">
                  I'm <span className="text-primary font-medium">Raja</span>, a cybersecurity professional specializing in <span className="text-primary font-medium">Security Analysis</span> and <span className="text-primary font-medium">Security Operations (SecOps)</span>, with hands-on experience in monitoring, incident handling, and strengthening security posture across enterprise environments.
                </p>
              </div>

              {/* Current Role & Experience */}
              <div>
                <p className="text-sm text-foreground leading-relaxed mb-4">
                  Currently working as an Associate Technical Engineer at <span className="font-medium text-primary">Kyndryl</span>, I support production systems through automation, system reliability, and incident management. This experience has strengthened my expertise in alert triage, root cause analysis, and responding effectively to security-related events across infrastructure and cloud environments.
                </p>
              </div>

              {/* Key Focus Areas */}
              <div>
                <p className="text-sm text-foreground leading-relaxed mb-3">
                  <span className="text-primary font-medium">My focus areas include:</span>
                </p>
                <ul className="space-y-2.5">
                  <li className="text-sm text-foreground flex items-start gap-2.5">
                    <span className="text-primary font-bold leading-relaxed">•</span>
                    <span className="leading-relaxed">Security monitoring and alert triage</span>
                  </li>
                  <li className="text-sm text-foreground flex items-start gap-2.5">
                    <span className="text-primary font-bold leading-relaxed">•</span>
                    <span className="leading-relaxed">Threat detection and incident investigation</span>
                  </li>
                  <li className="text-sm text-foreground flex items-start gap-2.5">
                    <span className="text-primary font-bold leading-relaxed">•</span>
                    <span className="leading-relaxed">Log analysis and event correlation</span>
                  </li>
                  <li className="text-sm text-foreground flex items-start gap-2.5">
                    <span className="text-primary font-bold leading-relaxed">•</span>
                    <span className="leading-relaxed">Vulnerability identification and system hardening</span>
                  </li>
                  <li className="text-sm text-foreground flex items-start gap-2.5">
                    <span className="text-primary font-bold leading-relaxed">•</span>
                    <span className="leading-relaxed">Implementing and improving security controls</span>
                  </li>
                </ul>
              </div>

              {/* Career Goals */}
              <div>
                <p className="text-sm text-foreground leading-relaxed">
                  I'm actively seeking opportunities as a <span className="text-primary font-medium">Junior Security Analyst</span> or <span className="text-primary font-medium">SecOps Analyst</span>, where I can contribute to proactive threat detection, incident response, security monitoring, and continuous security improvement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;