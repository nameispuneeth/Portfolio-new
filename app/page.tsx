"use client"
import { ChevronDown } from "lucide-react";
import { useState } from "react";
export default function Home() {
  const about = ["Full-Stack Dev, currently building AI products as an intern at AI.Prof.", "Spend way too much time solving problems on LeetCode and GeeksforGeeks — mostly for the addiction, sometimes for the sanity.", "I like building things that actually work, not just things that look good in a demo."]
  const workExp = [
    {
      name: "AI.Prof",
      role: "Full Stack AI Intern",
      contributions: ["Built and shipped 10+ production features, including a code submission pipeline that cut execution time by up to 83%.", "Implemented MySQL-backed execution for the SQL Playground and optimized MongoDB storage, reducing document size by 10x.", "Automated driver-code and starter-code generation across all languages."],
      logo: "./AIPROF.png",
      techStack: ["React.js", "Next.js", "Typescript", "FastAPI", "MySQL"],
      duration: "May 2026 - Present"
    }
  ]
  const [showWorkExp, setShowWorkExp] = useState<boolean[]>([true, ...Array(workExp.length - 1).fill(false)]);
  return (
    <div className="flex-1 flex justify-center py-8 min-h-screen bg-slate-100">
      <div className="bg-white px-8 py-4 rounded-xl max-w-xl w-1/2 space-y-7 mt-10">
        <div className="flex justify-between gap-4 sm:gap-12 mt-4">
          <div className="space-y-3">
            <h1 className="text-2xl sm:text-4xl font-semibold">Hi, I'm Puneeth</h1>
            <p className="text-[13px] sm:text-[14px] font-light">I'm 20, a full-stack developer, and I love building things that actually get used.</p>
          </div>
          <img className="w-24 h-24 rounded-full" src="/favicon.ico" alt="Puneeth" />
        </div>
        <div>
          <p className="text-xl sm:text-2xl font-semibold">About me</p>
          <ul className="space-y-2 mt-2 list-disc list-inside text-gray-700" typeof="bullets">
            {about.map((item, index) => (
              <li key={index} className="text-[13px] sm:text-[14px] font-light">{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xl sm:text-2xl font-semibold">Work Experience</p>
          {workExp.map((item, index) => (
            <div key={index} className="mt-2">
              <div className="flex justify-between gap-2">
                <div className="flex gap-2">
                  <img src={item.logo} alt={item.name} className="w-8 h-8 rounded-full" />
                  <div>
                    <div className="flex gap-2 items-center">
                      <p className="font-semibold text-md text-gray-900">{item.name}</p>
                      <ChevronDown className="w-4 h-4 cursor-pointer opacity-20 hover:opacity-100" onClick={() => setShowWorkExp(showWorkExp.map((val, ind) => (ind === index) ? !val : val))} />
                    </div>
                    <p className="text-gray-600 text-[12px] sm:text-[13px]">{item.role}</p>
                  </div>
                </div>
                <p className="text-[13px] sm:text-[14px] font-light">{item.duration}</p>

              </div>
              {showWorkExp[index] && (
                <ul className="mt-4 space-y-2 list-disc list-outside ml-4 text-gray-700">
                  {item.contributions.map((contribution, i) => (
                    <li key={i} className="text-[13px] sm:text-[14px] font-light leading-relaxed">
                      {contribution}
                    </li>
                  ))}
                </ul>
              )}

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}