import { useState } from "react";

const AboutMe = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="section-container">
      <h2 className="section-heading">About Me</h2>
      <p className="text-lg text-muted-foreground leading-relaxed">
        I am a network-focused IT student with hands-on experience in configuring, managing, and troubleshooting computer networks. I work with routing, switching, and IP addressing to build stable and efficient network systems.
      </p>
      <p className="text-lg text-muted-foreground leading-relaxed mt-4">
        I solve network issues using structured troubleshooting methods and tools like Cisco Packet Tracer and Wireshark. I focus on accuracy, performance, and security in every setup.
      </p>
      {showMore && (
        <p className="text-lg text-muted-foreground leading-relaxed mt-4 animate-in fade-in duration-500">
          I continue to improve my skills in network design, cybersecurity basics, and system administration. I aim to build networks that are reliable, secure, and scalable.
        </p>
      )}
      <button
        onClick={() => setShowMore(!showMore)}
        className="mt-4 text-primary font-medium hover:underline transition-colors"
      >
        {showMore ? "Show Less" : "Read More"}
      </button>
    </section>
  );
};

export default AboutMe;
