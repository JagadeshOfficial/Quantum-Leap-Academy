export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
          About Us
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Our mission is to empower individuals to achieve their full potential in the tech industry.
        </p>
      </div>
      <div className="mx-auto max-w-3xl space-y-6 text-center text-muted-foreground">
        <p>
          Quantum Leap Academy was founded with the vision of bridging the gap between academic learning and industry requirements. We believe in learning by doing, which is why our courses are designed with a strong emphasis on hands-on projects, real-world case studies, and mentorship from industry experts.
        </p>
        <p>
          Our AI-powered platform provides personalized learning paths, ensuring that every student gets the support they need to succeed. Whether you're a recent graduate, a career switcher, or a professional looking to upskill, Quantum Leap Academy provides the tools and community to help you reach your goals.
        </p>
        <p>
          Join us and become part of a new generation of future-ready professionals.
        </p>
      </div>
    </div>
  );
}
