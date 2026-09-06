"use client"
import { ChevronDown, Gavel, Mail, Network, FileText } from "lucide-react";
import { useState } from "react";
import dynamic from "next/dynamic";
import { SiLeetcode, SiGeeksforgeeks, SiGmail } from "react-icons/si";
import { FaXTwitter, FaGithub, FaLinkedin } from "react-icons/fa6";
import Link from "next/link";
const GitHubCalendar = dynamic(() => import("react-github-calendar").then((mod) => mod.GitHubCalendar), { ssr: false });
export default function Home() {
  const skills: string[] = ["C++", "Python", "JavaScript", "HTML", "React.js", "Next.js", "Express.js", "Tailwind CSS", "Bootstrap", "GitHub", "Node.js", "MongoDB", "Judge0", "MySQL", "Git", "Netlify", "CSS", "Typescript", "JWT", "FastAPI", "Vercel", "Firebase", "Redux", "Ubuntu", "Sass", "Postman", "Bootstrap", "NPM", "PHP"];
  const iconSlugMap: Record<string, string> = {
    "C++": "cplusplus",
    "Python": "python",
    "JavaScript": "javascript",
    "HTML": "html5",
    "React Native": "react",
    "CSS": "css",
    "Tailwind CSS": "tailwindcss",
    "Bootstrap": "bootstrap",
    "Node.js": "nodedotjs",
    "Express.js": "express",
    "MongoDB": "mongodb",
    "MySQL": "mysql",
    "Git": "git",
    "GitHub": "github",
    "Vercel": "vercel",
    "Netlify": "netlify",
    "JWT": "jsonwebtokens",
    "React.js": "react",
    "Next.js": "nextdotjs",
    "MaterialUI": "mui",
    "TailwindCSS": "tailwindcss",
    "LinkedIn": "linkedin",
    "Typescript": "typescript",
    "Gemini API": "googlegemini",
    "Nativewind": "tailwindcss",
    "WebSockets": "socketdotio",
    "FastAPI": "fastapi",
    "Redux": "redux",
    "Sass": "sass",
    "Firebase": "firebase",
    "Ubuntu": "ubuntu",
    "Postman": "postman",
    "Bootstarp": "bootstrap",
    "NPM": "npm",
    "PHP": "php"
  };
  const fallBackIcons: Record<string, React.ElementType> = {
    "Judge0": Gavel,
    "NodeMailer": Mail,
    "REST APIs": Network,
  }
  const about = ["Full-Stack Dev, currently working as intern at AI.Prof.", "Spend way too much time solving problems on LeetCode and GeeksforGeeks — mostly for the addiction, sometimes for the sanity.", "I like building things that actually work, not just things that look good in a demo."]
  const workExp = [
    {
      name: "AI.Prof",
      role: "Full Stack AI Intern",
      contributions: ["Built and shipped 10+ production features, including a code submission pipeline that cut execution time by up to 83%.", "Implemented MySQL-backed execution for the SQL Playground and optimized MongoDB storage, reducing document size by 10x.", "Automated driver-code and starter-code generation across all languages."],
      logo: "./AIPROF.png",
      techStack: ["React.js", "Next.js", "Typescript", "FastAPI", "MySQL"],
      duration: "May 2026 - Present",
      workmode: "Hyderabad",
      url: "ai.prof"
    }
  ]
  const education = [
    {
      name: "Rajiv Gandhi University of Knowledge and Technologies - RK Valley",
      degree: "Bachelor of Technologies",
      field: "Computer Science and Engineering",
      duration: "2023 - 2027",
      logo: "./rgukt.webp",
      cgpa: "8.45",
      url: "https://www.rguktrkv.ac.in/"
    },
  ]
  const projects = [
    {
      name: "CodeBite",
      about: "An AI-integrated online IDE to write, run, and manage code directly in your browser, with built-in AI coding assistance and no setup required.",
      url: "https://codebite-onlineide-puneeth.vercel.app/",
      github: "https://github.com/nameispuneeth/CodeBite",
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Judge0", "TailwindCSS", "Gemini API", "NodeMailer"],
      hero: "./codebite.png",
    },
    {
      name: "CiviQ",
      about: "A web app to report and track civic issues like potholes and garbage, from submission to resolution.",
      url: "https://civiqconnectbypj.vercel.app/",
      github: "https://github.com/nameispuneeth/civiq",
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "TailwindCSS", "MaterialUI"],
      hero: "./civiq.png",
    },
    {
      name: "AnonMes",
      about: "A secret messaging platform where anyone can send you anonymous messages via your unique link.",
      url: "https://anon-mes.vercel.app/",
      github: "https://github.com/nameispuneeth/AnonMes",
      techStack: ["React.js", "Node.js", "Express.js", "WebSockets", "MongoDB", "TailwindCSS"],
      hero: "./anonmes.png",
    },
    {
      name: "PeerConnect",
      about: "a campus marketplace for peer tutoring and secondhand items, with OTP-verified coin transactions",
      github: "https://github.com/nameispuneeth/PeerConnect",
      techStack: ["React Native", "Typescript", "Nativewind", "Node.js", "Express.js", "MongoDB"],
      hero: "./peerconnect.png",
    }
  ]
  const profiles = [
    { name: "Leetcode", url: "https://leetcode.com/u/nameispuneeth" },
    { name: "GitHub", url: "https://github.com/nameispuneeth" },
    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/user/pun3eth_" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/puneeth0121/" },
    { name: "X", url: "https://x.com/nameizpuneeth" },
    { name: "Gmail", url: "mailto:puneethkumarkaramala@gmail.com" }
  ]
  const [showWorkExp, setShowWorkExp] = useState<boolean[]>([true, ...Array(workExp.length - 1).fill(false)]);
  const TechStackImg = (text: string, index: number, isBig: boolean) => {
    let content;
    let icon = iconSlugMap[text]
    if (icon) {
      content = <img src={`https://cdn.simpleicons.org/${icon}`} className={`${isBig ? "w-10 h-10" : "w-5 h-5"} object-contain hover:cursor-pointer`} alt={text} />
    } else {
      let FallbackIcon = fallBackIcons[text]
      if (FallbackIcon) content = <FallbackIcon className={`${isBig ? "w-10 h-10" : "w-5 h-5"} object-contain hover:cursor-pointer`} strokeWidth={1} />;
      else content = <div className={`${isBig ? 'w-10 h-10' : 'w-5 h-5'}`} />;
    }

    return (
      <div key={index} className="group relative flex items-center justify-center hover:cursor-pointer grayscale brightness-50 hover:grayscale-0 hover:brightness-100">
        {content}
        <div className="absolute bottom-full mb-1.5 hidden group-hover:block bg-white text-black text-[11px] px-2 py-1 rounded-md shadow-sm whitespace-nowrap z-10 font-medium transition-all duration-200">
          {text}
          <div className="absolute top-full left-1/2 -translate-x-1/2 border-[5px] border-transparent border-t-gray-200"></div>
        </div>
      </div>
    )
  }

  const codingLogo = (name: string) => {
    if (name == "Leetcode") return <SiLeetcode size={20} />
    else if (name == "GeeksforGeeks") return <SiGeeksforgeeks size={22} />
    else if (name == "GitHub") return <FaGithub size={20} />
    else if (name == "Gmail") return <SiGmail size={20} />
    else if (name == "X") return <FaXTwitter size={20} />
    else return <FaLinkedin size={20} />
  }
  return (
    <div className="flex-1 flex justify-center py-8 min-h-screen mb-8 bg-slate-100">
      <div
        className="pointer-events-none fixed inset-0 z-0 animate-grid"
        style={{
          backgroundColor: "#fafafa",
          backgroundImage: `
            linear-gradient(to right, rgba(0,0,0,0.06) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.06) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
        }}
      />
      <div className="relative z-10 bg-white px-8 py-4 rounded-xl max-w-3xl space-y-10 mt-10 mb-10">
        <div className="flex justify-between gap-4 sm:gap-12 mt-4">
          <div className="space-y-3">
            <h1 className="text-2xl sm:text-4xl font-semibold">Hi, I'm Puneeth</h1>
            <p className="text-[13px] sm:text-[14px] font-light">I'm 20, a full-stack developer, and I love building things that actually get used.</p>
          </div>
          <img className="w-20 h-20 object-contain rounded-full" src="/favicon.ico" alt="Puneeth" />
        </div>
        <div>
          <p className="text-xl sm:text-2xl font-semibold">About me</p>
          <ul className="space-y-2 mt-2 list-disc list-inside text-gray-700" typeof="bullets">
            {about.map((item, index) => (
              <li key={index} className="text-[13px] sm:text-[14px] font-light">{item}</li>
            ))}
          </ul>
        </div>
        <div className="space-y-2">
          <p className="text-xl sm:text-2xl font-semibold">Work Experience</p>
          {workExp.map((item, index) => (
            <div key={index} className="mt-2">
              <div className="flex justify-between gap-2">
                <div className="flex gap-2">
                  <div className="w-12 h-12 rounded-full border border-gray-300 shrink-0 overflow-hidden flex items-center justify-center">
                    <img src={item.logo} alt={item.name} className="w-full h-full object-contain px-0.5 grayscale brightness-50 hover:grayscale-0 hover:brightness-100 transition-all duration-300" />
                  </div>
                  <div>
                    <div className="flex gap-2 items-center">
                      <p className="font-semibold text-md text-gray-900">{item.name}</p>
                      <ChevronDown className="w-4 h-4 cursor-pointer opacity-20 hover:opacity-100" onClick={() => setShowWorkExp(showWorkExp.map((val, ind) => (ind === index) ? !val : val))} />
                    </div>
                    <p className="text-gray-600 text-[12px] sm:text-[13px]">{item.role}</p>
                  </div>
                </div>
                <div className="flex flex-col items-end shrink-0">
                  <p className="text-[13px] sm:text-[14px] font-light whitespace-nowrap">{item.duration}</p>
                  <p className="text-[13px] sm:text-[14px] font-light whitespace-nowrap">{item.workmode}</p>
                </div>

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

        <div className="space-y-3">
          <p className="text-xl sm:text-2xl font-semibold">Education</p>
          {education.map((item, index) => (
            <div key={index} className="mt-2">
              <div className="flex justify-between gap-2">
                <div className="flex gap-2">
                  <div className="w-11 h-11 rounded-full border border-gray-300 px-1 py-1 shrink-0 overflow-hidden flex items-center justify-center">
                    <img src={item.logo} alt={item.name} className="w-full h-full object-contain grayscale brightness-50 hover:grayscale-0 hover:brightness-100 transition-all duration-300" />
                  </div>
                  <div>
                    <div className="flex gap-2 items-center">
                      <p className="font-semibold text-sm text-gray-900">{item.name}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <p className="text-gray-600 text-[12px] sm:text-[13px]">{item.degree}</p>
                      <p className="text-gray-500 text-md">·</p>
                      <p className="text-gray-600 text-[12px] sm:text-[13px]">{item.field}</p>
                    </div>

                  </div>
                </div>
                <div className="flex flex-col items-end shrink-0">
                  <p className="text-[13px] sm:text-[14px] font-light whitespace-nowrap">{item.duration}</p>
                  <p className="text-[13px] sm:text-[14px] font-light whitespace-nowrap">{item.cgpa}</p>
                </div>
              </div>

            </div>
          ))}
        </div>
        <div className="space-y-2">
          <p className="text-xl sm:text-2xl font-semibold">Projects</p>
          <div className="grid grid-cols-1 md:grid-cols-2">
            {projects.map((item, ind) => (
              <div className="border border-gray-300 mr-1 ml-1 mb-2 mt-2 rounded-md hover:shadow-xl cursor-pointer" key={ind}>
                <img className="w-full object-contain rounded-t-md grayscale-95 hover:grayscale-90 hover:brightness-100 " src={item.hero} alt={item.name} />
                <div className="p-2 space-y-3">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold">{item.name}</p>
                    <a href={item.github} target="_blank">
                      <img src={`https://cdn.simpleicons.org/github`} className="w-4 h-4 cursor-pointer" />
                    </a>
                  </div>
                  <p className="font-extralight text-[13px] sm:text-[14px]">{item.about}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {item.techStack.map((val, index) => (
                      TechStackImg(val, index, false)
                    ))}
                  </div>
                  <div className="border-t border-gray-200 text-gray-600 flex justify-between items-center text-[12px] sm:text-[13px] font-light">
                    {item.url ? <a className="mt-1 cursor-pointer" href={item.url} target="_blank">
                      View Live
                    </a> : <div></div>}
                    <Link className="mt-1 cursor-pointer" href={`/${item.name.toLowerCase()}`}>
                      More Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <p className="text-xl sm:text-2xl font-semibold">Contributions</p>
          <div>
            <GitHubCalendar
              username="nameispuneeth"
              colorScheme="light"
              fontSize={14}
              blockSize={12}
              blockMargin={4}
              theme={{
                light: ["#ebedf0", "#000000"]
              }}
            />
          </div>
        </div>

        <div className="space-y-4 mb-5">
          <p className="text-xl sm:text-2xl font-semibold">Skills</p>
          <div className="w-full overflow-hidden flex flex-col gap-4">
            <div className="marquee-track gap-4">
              {[0, 1, 2, 3, 4, 5].map((i) =>
                skills.slice(0, Math.ceil(skills.length / 2)).map((val, index) => (
                  TechStackImg(val, i * 100 + index, true)
                ))
              )}
            </div>
            <div className="marquee-track reverse gap-4">
              {[0, 1, 2, 3, 4, 5].map((i) =>
                skills.slice(Math.ceil(skills.length / 2)).map((val, index) => (
                  TechStackImg(val, i * 100 + index, true)
                ))
              )}
            </div>
          </div>
        </div>



      </div>
      <div className="fixed z-10 items-center bottom-6 bg-white/80 backdrop-blur-md border border-gray-200 shadow-xl px-4 py-2 rounded-full flex gap-2 transition-all duration-300">
        <div className="group relative">
          <a href="https://drive.google.com/file/d/16JtrpDo-y9_V2cuWCaSrP_JO1RgVccYU/view?usp=drive_link" target="_blank" className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-125 hover:mx-2 hover:-translate-y-1">
            <FileText strokeWidth={2} className="text-gray-700 cursor-pointer" />
          </a>
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white text-black text-xs px-3 py-1.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
            Resume
          </div>
        </div>

        <div className="w-[1px] h-8 bg-gray-200 mx-1" />

        <div className="flex gap-1 items-center">
          {profiles.map((item, index) => (
            <div key={index} className="group relative flex items-center justify-center">
              <a href={item.url} target="_blank" className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-125 hover:mx-2 hover:-translate-y-1">
                {codingLogo(item.name)}
              </a>
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white text-black text-xs px-3 py-1.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                {item.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}