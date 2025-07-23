import AnimatedHeading from "../components/AnimatedHeading";

const jobs = [
  {
    title: "AI Solutions Engineer",
    location: "Remote",
    desc: "Work with clients to design, build, and deploy AI chatbots and automation workflows. Experience with Node.js or Python preferred."
  }
];

export default function CareersPage() {
  return (
    <section className="max-w-3xl mx-auto p-8 text-center">
      <AnimatedHeading className="text-4xl font-bold mb-4 text-green-400">
        Careers
      </AnimatedHeading>
      <div className="flex flex-col gap-8 mt-8">
        {jobs.map((job, i) => (
          <div key={i} className="bg-gray-900 rounded-xl p-6 shadow-lg border border-green-900 text-left">
            <h2 className="text-xl font-bold text-green-300 mb-2">{job.title}</h2>
            <div className="text-sm text-gray-400 mb-2">{job.location}</div>
            <p className="text-gray-200 mb-4">{job.desc}</p>
            <a href="mailto:careers@goconnect.com" className="text-green-400 underline font-semibold">Apply Now</a>
          </div>
        ))}
      </div>
    </section>
  );
} 