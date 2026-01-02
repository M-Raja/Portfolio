import { Shield, Cloud, Code } from 'lucide-react';

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Profile Image Section */}
          <div className="flex justify-center items-center order-1 lg:order-2 mt-8 lg:mt-12">
            <div className="relative w-auto mx-auto">
              <div className="p-3 bg-white rounded-2xl border border-gray-200/50 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-primary/30 hover:scale-105 cursor-pointer">
                <img
                  src="/main.png"
                  alt="M Raja"
                  className="w-[240px] h-auto max-h-[280px] rounded-xl object-contain transition-transform duration-300"
                  onError={(e) => {
                    e.currentTarget.src = '/placeholder.svg';
                  }}
                />
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="order-2 lg:order-1 space-y-8">
            {/* Introduction */}
            <div className="space-y-6">
              <div>
                <p className="text-lg text-black leading-relaxed mb-4">
                  I'm <span className="text-primary font-medium">Raja</span>, a cybersecurity professional specializing in SecOps and <span className="text-primary font-medium">security operations engineering</span>, with expertise in <span className="text-primary font-medium">cloud security</span> and automation-driven security practices.
                </p>
              </div>

              {/* Current Role & Experience */}
              <div>
                <p className="text-lg text-black leading-relaxed mb-4">
                  Currently an Associate Technical Engineer at <span className="font-medium text-primary">Kyndryl</span>, I work on automation, system reliability, and incident handling. This foundation in production systems naturally led me to <span className="text-primary font-medium">security operations engineering</span>, where I focus on improving security posture, hardening systems, and implementing security controls across infrastructure and cloud environments.
                </p>
              </div>

              {/* Career Goals */}
              <div>
                <p className="text-lg text-black leading-relaxed">
                  I'm actively seeking opportunities in <span className="text-primary font-medium">junior SecOps</span>, <span className="text-primary font-medium">security operations engineering</span>, or <span className="text-primary font-medium">cloud security</span> analysis. Let's connect!
                </p>
              </div>
            </div>

            {/* Key Focus Areas */}
            <div className="bg-white/50 rounded-lg p-6 border border-gray-100">
              <h3 className="text-sm font-semibold text-black mb-2 uppercase tracking-wide text-center">Focus Areas</h3>
              <div className="w-16 h-0.5 bg-primary mb-4 mx-auto"></div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex flex-col items-center gap-2 p-3 rounded-md hover:bg-white/50 transition-colors">
                  <Shield className="h-7 w-7 text-primary" />
                  <span className="text-sm font-medium text-black text-center">SecOps</span>
                </div>
                <div className="flex flex-col items-center gap-2 p-3 rounded-md hover:bg-white/50 transition-colors">
                  <Cloud className="h-7 w-7 text-primary" />
                  <span className="text-sm font-medium text-black text-center">Cloud Security</span>
                </div>
                <div className="flex flex-col items-center gap-2 p-3 rounded-md hover:bg-white/50 transition-colors">
                  <Code className="h-7 w-7 text-primary" />
                  <span className="text-sm font-medium text-black text-center">Automation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;