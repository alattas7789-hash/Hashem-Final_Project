const skills = [
  "Network Configuration",
  "IP Addressing",
  "Subnetting",
  "Routing Protocols (RIP, OSPF, EIGRP)",
  "Switching (VLANs, STP)",
  "Cisco Packet Tracer",
  "Network Security",
  "Firewall Configuration",
  "VPN Setup",
  "Troubleshooting Networks",
  "TCP/IP",
  "DNS and DHCP",,
  "Linux Networking",
];

const Skills = () => {
  return (
    <section className="section-container">
      <h2 className="section-heading">Skills</h2>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span key={skill} className="skill-badge">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
