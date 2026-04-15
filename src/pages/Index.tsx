import AboutMe from "@/components/AboutMe";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <header className="text-center py-10 bg-primary text-primary-foreground">
        <h1 className="text-4xl font-bold">Hashem Portfolio</h1>
        <p className="mt-2 text-primary-foreground/80">Network Specialist • Security-Focused • Lifelong Learner</p>
      </header>
      <main className="max-w-3xl mx-auto px-6">
        <AboutMe />
        <Education />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <footer className="text-center py-6 text-muted-foreground text-sm">
        &copy; {new Date().getFullYear()} Hashem Portfolio. All rights reserved.
      </footer>
    </div>
  );
};

export default Index;
