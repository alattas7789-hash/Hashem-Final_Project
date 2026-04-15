const educationData = [
  {
    degree: "Bachelor of Science in Information Technology",
    school: "University of the Cordilleras - Baguio City",
    description: "Focused on Networking, Security, and web development.",
  },
  {
    degree: "High School Diploma",
    school: "Central High School - Jeddah City",
    year: "2019 – 2022",
    description: "Graduated with honors. Active in math and science clubs.",
  },
];

const Education = () => {
  return (
    <section className="section-container">
      <h2 className="section-heading">Education</h2>
      <div className="relative border-l-2 border-primary/30 pl-6 space-y-8 ml-2">
        {educationData.map((item, index) => (
          <div key={index} className="relative">
            <div className="timeline-dot" />
            <h3 className="text-xl font-semibold text-foreground">{item.degree}</h3>
            <p className="text-primary font-medium">{item.school}</p>
            <p className="text-sm text-muted-foreground">{item.year}</p>
            <p className="text-muted-foreground mt-2">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
