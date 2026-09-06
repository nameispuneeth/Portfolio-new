"use client"
import { useParams } from "next/navigation"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { useEffect } from "react";
export default function ProjectDetails() {
    const params = useParams();


    const slug = (Array.isArray(params.slug) ? params.slug[0] : params.slug) as string;

    type ProjectData = {
        about: string[];
        techstack: Record<string, string[]>;
        hero: string;
        github: string;
        demo?: string;
    };

    const projects: Record<string, ProjectData> = {
        "codebite": {
            "about": [
                "CodeBite is an online IDE with integrated AI, letting users write and run code directly in the browser without installing any packages. It's built for speed and simplicity  no downloads, no setup, just code and run  while still packing in real-time code execution with full I/O support across up to 7 languages, powered by the Judge0 API.",
                "Beyond execution, CodeBite includes AI-powered coding assistance and lets users save, update, download, and delete their files, so it works as a lightweight personal coding workspace rather than just a scratchpad. Authentication is handled with JWT and bcrypt, with NodeMailer wired in for email flows, keeping user accounts and saved code secure.",
                "The stack is React with Tailwind CSS on the frontend, and Node.js with Express on the backend, backed by MongoDB for persistence. The interface is kept clean and minimal by design, so the tool stays out of the way and the focus stays on writing and running code."
            ],
            "techstack": {
                "Frontend": ["React", "Tailwind CSS"],
                "Backend": ["Node.js", "Express.js"],
                "Authentication": ["JWT", "Bcrypt"],
                "Email": ["Nodemailer"],
                "Code execution": ["Judge0 API"]
            },
            "hero": "./codebite.png",

            "github": "https://github.com/nameispuneeth/CodeBite",
            "demo": "https://codebite-onlineide-puneeth.vercel.app/"
        },
        "civiq": {
            "about": [
                "Civiq is a web app that lets citizens report civic issues like potholes, garbage, and other public concerns by submitting them with images and auto-captured location data (longitude and latitude). From there, admins assign each issue to the relevant department employee, and it moves through a clear lifecycle  Pending → InProgress → Finished  with role-based access control governing who can do what at each stage.",
                "Employees see only the issues assigned to them and mark them finished once resolved; the admin then confirms completion, and users can rate the resolution afterward. Admins also get analytics and status-based filtering across all reported issues, plus tools to manage employees and departments  turning a simple reporting form into a structured accountability pipeline for civic maintenance.",
                "Civiq was built as a team project, with backend and part of the frontend handled by me, and most of the frontend led by Jaweed. Login and access are secured with JWT-based role permissions, so citizens, employees, and admins each operate within clearly scoped boundaries."
            ],
            "techstack": {
                "Frontend": ["React", "Tailwind CSS", "React Router"],
                "Backend": ["Node.js", "Express.js"],
                "Database": ["MongoDB", "Mongoose"],
                "Other Libraries": ["JWT", "Bcrypt", "Cloudinary", "Geo-API"]
            },
            "hero": "./civiq.png",

            "github": "https://github.com/nameispuneeth/civiq",
            "demo": "https://civiqconnectbypj.vercel.app/"
        },
        "anonmes": {
            "about": [
                "AnonMes is a secret messaging platform that generates a unique URL for each user, allowing anyone with the link to send them anonymous messages without revealing their identity. Message delivery happens in real time using WebSockets, so messages show up instantly rather than requiring a refresh.",
                "Users can easily copy, share, and manage their anonymous link  including setting expiry dates, creating custom URLs, and regenerating links whenever they want  giving them full control over who can reach them and for how long. Authentication supports both traditional email/password sign-up and Google OAuth, keeping onboarding flexible.",
                "The core design challenge was balancing anonymity for the sender with control and safety for the recipient  link expiry and regeneration exist specifically so users aren't stuck with a link they no longer want active."
            ],
            "techstack": {
                "Frontend": ["React", "Tailwind CSS", "Socket.IO Client"],
                "Backend": ["Node.js", "Express.js"],
                "Database": ["MongoDB", "Mongoose"],
                "Realtime": ["Socket.IO"],
                "Authentication": ["JWT", "Google OAuth"]
            },
            "hero": "./anonmes.png",
            "github": "https://github.com/nameispuneeth/anonmes",
            "demo": "https://anon-mes.vercel.app/"
        },
        "peerconnect": {
            "about": [
                "PeerConnect is a cross-platform mobile marketplace built for residential university campuses, where students can book peer tutoring sessions or buy and sell secondhand items using an in-app coin economy. Every student starts with 200 coins on registration, removing the barrier of needing to sell before being able to buy.",
                "The core problem it solves is trust: coins are only transferred once both parties have physically met, verified through a 6-digit OTP exchanged at the session or item handover. Course bookings that expire without verification trigger an auto-refund, and the store module runs on real-time bidding, where sellers review escalating bids and assign the winner themselves.",
                "Built with React Native (Expo) and TypeScript on the frontend and Node.js/Express with MongoDB on the backend, PeerConnect turns informal, WhatsApp-group-based campus exchange into a structured, OTP-verified marketplace with real accountability on both sides."
            ],
            "techstack": {
                "Frontend": ["React Native (Expo)", "TypeScript", "NativeWind"],
                "Backend": ["Node.js", "Express.js"],
                "Database": ["MongoDB", "Mongoose"],
                "Authentication": ["JWT", "Bcrypt"],
                "Other": ["AsyncStorage", "Expo Image Picker"]
            },
            "hero": "./peerconnect.png",
            "github": "https://github.com/nameispuneeth/peerconnect",
        }
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
            <div className="relative z-10 bg-white px-8 py-4 rounded-xl max-w-3xl space-y-5 mt-10 mb-10">
                {
                    Object.hasOwn(projects, slug) ?
                        <>
                            <Link
                                href={"/"}
                                className="group flex items-center gap-2 w-fit transition-colors"
                            >
                                <ChevronLeft
                                    size={12}
                                    className="transition-transform duration-200 ease-out group-hover:-translate-x-1"
                                />
                                <p className="text-md text-gray-600 font-light transition-colors duration-200 group-hover:text-gray-900">
                                    Back
                                </p>
                            </Link>
                            <div className="flex w-full justify-between mb-7 mt-3">
                                <p className="text-3xl text-left font-semibold cursor-pointer capitalize">{slug}</p>

                            </div>
                            <img src={projects?.[slug || "codebite"]?.hero} alt="" className="w-full h-auto object-cover rounded-lg" />
                            <div className="space-y-3">
                                {projects?.[slug || "codebite"]?.about?.map((sentence: string, index: number) => (
                                    <p key={index} className="text-md text-gray-600 font-light" >{sentence}</p>
                                ))}
                            </div>

                            <div className="w-full border-b border-gray-200" />

                            <div className="flex flex-col gap-2">
                                {
                                    Object.keys(projects?.[slug || "codebite"]?.techstack).map((key: string, index: number) => (
                                        <div key={index} className="flex items-center gap-2">
                                            <p className="text-md text-gray-600 font-semibold" >{key}:</p>
                                            {projects?.[slug || "codebite"]?.techstack[key].map((stack: string, index: number) => (
                                                <p key={index} className="text-md text-gray-600 font-light" >{stack}</p>
                                            ))}
                                        </div>
                                    ))
                                }
                            </div>
                            <div className="fixed z-10 items-center bottom-6 bg-white/80 backdrop-blur-md border border-gray-200 shadow-xl px-4 py-2 rounded-full flex gap-4 transition-all duration-300">
                                {projects[slug].github && <a href={projects[slug].github} target="_blank" className="text-md font-semibold cursor-pointer">Github</a>}
                                {projects[slug].demo && projects[slug].github && <div className="border-l border-gray-300 h-6" />}
                                {projects[slug].demo && <a href={projects[slug].demo} target="_blank" className="text-md font-semibold cursor-pointer">Demo</a>}
                            </div>
                        </>
                        :
                        <div className="flex justify-center items-center h-full min-w-2xl">
                            <p className="text-5xl">404 Not Found</p>
                        </div>
                }

            </div>



        </div>
    )
}