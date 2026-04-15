const experienceData = [
  {
    role: "Network Intern",
    company: "IT Department",
    tasks: [
      "Configured basic network setups using routers and switches",
      "Assisted in troubleshooting connectivity and network performance issues",
      "Performed IP addressing and subnetting for small network environments",
      "Monitored network traffic using tools like Wireshark",
      "Supported setup of VLANs and basic network security configurations",
    ],
  },
];

const Experience = () => {
  return (
    <section className="section-container">
      <h2 className="section-heading">Experience</h2>
      <div className="relative border-l-2 border-primary/30 pl-6 space-y-8 ml-2">
        {experienceData.map((item, index) => (
          <div key={index} className="relative">
            <div className="timeline-dot" />
            <h3 className="text-xl font-semibold text-foreground">{item.role}</h3>
            <p className="text-primary font-medium">{item.company}</p>
            <p className="text-sm text-muted-foreground">{item.period}</p>
            <ul className="mt-2 space-y-1 list-disc list-inside text-muted-foreground">
              {item.tasks.map((task, i) => (
                <li key={i}>{task}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
