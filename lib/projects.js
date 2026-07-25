export const projects = [
  {
    slug: "hireloop",
    title: "HireLoop — Job Portal",
    type: "Full Stack",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop",
    tags: ["Next.js", "Express.js", "MongoDB", "BetterAuth", "Stripe", "Vercel"],
    desc: "Full stack job portal with 3 roles: Job Seeker, Recruiter, and Admin. Features job listings, applications, saved jobs, and Stripe subscription.",
    live: "https://hireloop-ruby.vercel.app",
    github: "https://github.com/tanzid-48/hireloop",
    details: {
      description: "HireLoop is a complete job portal platform built with the MERN stack. It features three distinct user roles — Job Seeker, Recruiter, and Admin — each with their own dashboard and permissions. Job seekers can browse listings, apply, and track applications. Recruiters can post jobs, review applicants, and manage their company profile. Admins have full control over the platform.",
      challenges: [
        "Implementing role-based authentication with BetterAuth and managing different session types for three user roles was complex.",
        "Integrating Stripe subscription plans and handling webhook events reliably required careful testing.",
        "Building a real-time application tracking system with proper state management across user and recruiter dashboards.",
      ],
      improvements: [
        "Add real-time notifications using WebSockets for application status updates.",
        "Implement an AI-powered job matching system based on applicant skills.",
        "Add video interview scheduling integration directly within the platform.",
        "Build a mobile app version using Flutter for on-the-go job seekers.",
      ],
    },
  },
  {
    slug: "lifevault",
    title: "LifeVault — Life Lessons Platform",
    type: "Full Stack",
    img: "https://images.unsplash.com/photo-1523292217652-bf4fb04a6fb7?w=800&auto=format&fit=crop",
    tags: ["Next.js", "Express.js", "MongoDB", "BetterAuth", "Stripe"],
    desc: "Full stack platform for sharing life lessons with User and Admin roles, premium subscriptions, and Stripe payments.",
    live: "https://life-vault-smoky.vercel.app",
    github: "https://github.com/tanzid-48/life_vault",
    details: {
      description: "LifeVault is a platform where users can share and discover meaningful life lessons. It features a premium subscription model powered by Stripe, and a powerful admin dashboard for content moderation. The platform encourages knowledge sharing and personal growth through community-driven content.",
      challenges: [
        "Handling Stripe webhook events reliably — Express needed express.raw() middleware before express.json() for signature verification.",
        "Managing session authentication between the Next.js frontend and Express backend required careful cookie configuration.",
        "Designing a scalable content moderation system that allows admins to approve, reject, or feature posts.",
      ],
      improvements: [
        "Add rich media support — allow users to embed images and videos in their life lessons.",
        "Implement a recommendation engine to suggest relevant lessons based on reading history.",
        "Add social features like comments, likes, and following other users.",
        "Build a mobile app with Flutter for better accessibility.",
      ],
    },
  },
  {
    slug: "campuscart",
    title: "CampusCart — Student Marketplace",
    type: "Full Stack",
    img: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&auto=format&fit=crop",
    tags: ["Next.js 15", "TypeScript", "MongoDB", "BetterAuth", "Tailwind CSS"],
    desc: "Secondhand student marketplace with Next.js 15 App Router, TypeScript strict mode, MongoDB native driver, BetterAuth, Recharts, and Framer Motion.",
    live: "https://campus-cart-seven-zeta.vercel.app",
    github: "https://github.com/tanzid-48/campus_cart",
    details: {
      description: "CampusCart is a secondhand marketplace designed specifically for university students. Students can list items they no longer need and buy from fellow students at affordable prices. Built with TypeScript strict mode and Next.js 15 App Router, the platform features a clean dashboard with Recharts analytics and smooth Framer Motion animations.",
      challenges: [
        "This was my first TypeScript project — learning strict mode, interfaces, generics, and utility types while building a production app was challenging.",
        "Working with MongoDB native driver without Mongoose required writing raw aggregation pipelines and understanding BSON types directly.",
        "Implementing BetterAuth with inferAdditionalFields for custom user fields in TypeScript required careful type definitions.",
      ],
      improvements: [
        "Add a real-time chat system so buyers and sellers can negotiate directly.",
        "Implement an escrow payment system for secure transactions between students.",
        "Add location-based filtering to show items available on the same campus.",
        "Build a rating and review system to build trust between users.",
      ],
    },
  },
  {
    slug: "tanseek-ai",
    title: "TanSeek AI — AI Chat App",
    type: "AI App",
    img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&auto=format&fit=crop",
    tags: ["Next.js", "Groq AI", "MongoDB", "BetterAuth", "Vercel AI SDK"],
    desc: "Full AI chat app inspired by ChatGPT with streaming responses, chat history, auto-titles, rename/pin/delete, and Groq/Llama integration.",
    live: null,
    github: "https://github.com/tanzid-48",
    details: {
      description: "TanSeek AI is a full-featured AI chat application built with Next.js and Groq AI (Llama 3). It features streaming responses via Vercel AI SDK, persistent chat history stored in MongoDB, automatic title generation, and a clean sidebar with rename/pin/delete capabilities. The entire backend runs through Next.js Route Handlers.",
      challenges: [
        "BetterAuth session was returning null due to cookie caching — fixed with cookieCache: { enabled: false } configuration.",
        "Groq required aiProvider.chat(model) syntax instead of aiProvider(model) — different from standard Vercel AI SDK usage.",
        "MongoDB URI must include the database name segment, otherwise connections silently default to the wrong database.",
      ],
      improvements: [
        "Add support for multiple AI models — GPT-4, Claude, Gemini — with a model switcher.",
        "Implement image generation capabilities using DALL-E or Stable Diffusion.",
        "Add document upload and analysis — chat with your PDFs and files.",
        "Build a mobile app version with Flutter for on-the-go AI assistance.",
      ],
    },
  },
  {
    slug: "assignment-manager",
    title: "Assignment Manager — Flutter App",
    type: "Mobile App",
    img: "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=800&auto=format&fit=crop",
    tags: ["Flutter", "Dart", "Firebase", "Firestore", "Local Notifications"],
    desc: "Cross-platform mobile app for managing academic assignments with Firebase Auth, Firestore, local notifications, and fl_chart statistics.",
    live: null,
    github: "https://github.com/tanzid-48/assignment_manager",
    details: {
      description: "Assignment Manager is a cross-platform mobile application built with Flutter and Dart. It helps university students organize their assignments, set deadlines, and track completion status. The app integrates Firebase Authentication for secure login, Firestore for real-time data sync, local push notifications for deadline reminders, and fl_chart for progress visualization.",
      challenges: [
        "Setting up local push notifications with proper scheduling on both Android and iOS required platform-specific configuration.",
        "Implementing real-time Firestore listeners efficiently without causing unnecessary rebuilds in Flutter widgets.",
        "Designing an intuitive UI that works well on both small and large screen sizes.",
      ],
      improvements: [
        "Add a collaborative feature where students can share assignment details with classmates.",
        "Integrate with university portals to automatically import assignment deadlines.",
        "Add AI-powered study planning — suggest optimal study schedules based on deadlines.",
        "Implement offline mode using Hive for local data storage.",
      ],
    },
  },
  {
    slug: "bangla-lang",
    title: "Bangla Lang — Programming Language",
    type: "Web App",
    img: "https://i.ibb.co.com/zTPpGqz7/3856-1.webp",
    tags: ["JavaScript", "HTML", "CSS"],
    desc: "A programming language where you can write code in Bangla. Inspired by Bhai Lang, built with vanilla JavaScript.",
    live: "https://tanzid-48.github.io/bangla-lang",
    github: "https://github.com/tanzid-48/bangla-lang",
    details: {
      description: "Bangla Lang is a fun and educational programming language that allows developers to write code using Bangla keywords and syntax. Inspired by Bhai Lang, it was built entirely with vanilla JavaScript and runs directly in the browser. Users can write Bangla code in the online editor and see results in real-time.",
      challenges: [
        "Building a lexer and parser from scratch with vanilla JavaScript to tokenize and interpret Bangla syntax was technically challenging.",
        "Handling Unicode Bangla characters correctly in the tokenizer required careful regex patterns.",
        "Designing a syntax that feels natural in Bangla while still being logically structured like a real programming language.",
      ],
      improvements: [
        "Add more built-in functions and standard library support for Bangla Lang.",
        "Build a proper VS Code extension with syntax highlighting for Bangla Lang.",
        "Add error messages in Bangla so beginners can understand issues more easily.",
        "Create video tutorials in Bangla to help students learn programming through Bangla Lang.",
      ],
    },
  },
];

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug) || null;
}



