export type EventCategory =
  | "All Events"
  | "Cultural Events"
  | "Technical Events"
  | "Sports"
  | "Arts"
  | "Dance"
  | "Pitch and Talk"
  | "Hackathons"
  | "Music"
  | "Paper Presentation"
  | "Project Expo"
  | "Spotlight Events";

export type DateTag = "6 Mar" | "7 Mar";

export type Department =
  | "CSE"
  | "CSD"
  | "CSM"
  | "CSC"
  | "CS-IT"
  | "ECE"
  | "EEE"
  | "MECH"
  | "CIVIL"
  | "MBA"
  | "MCA";

export const categories: EventCategory[] = [
  "All Events",
  "Cultural Events",
  "Technical Events",
  "Sports",
  "Arts",
  "Dance",
  "Pitch and Talk",
  "Hackathons",
  "Music",
  "Paper Presentation",
  "Project Expo",
  "Spotlight Events",
];

export const dateTags: DateTag[] = ["6 Mar", "7 Mar"];

export const departments: Department[] = [
  "CSE",
  "CSD",
  "CSM",
  "CSC",
  "CS-IT",
  "ECE",
  "EEE",
  "MECH",
  "CIVIL",
  "MBA",
  "MCA",
];

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  dateTag: DateTag;
  time: string;
  venue: string;
  categories: Exclude<EventCategory, "All Events">[]; // ✅ MULTIPLE
  department: Department | "";
  image: string;
  registrationOpen: boolean;
  teamSize?: string;
  prizes?: string[];
  rules?: string[];
  coordinators?: { name: string; phone: string }[];
}

export const events: Event[] = [
{
    id: "1",
    title: "Pitch and Talk",
    description:
      "A technical speaking challenge that tests spontaneity, clarity of thought, and technical awareness.",
    date: "6th March 2026",
    dateTag: "6 Mar",
    time: "10:30 - 04:30",
    venue: "Seminar Hall / Dept. Venues",
    categories: ["Technical Events", "Pitch and Talk"],
    department: "",
    image: "/event-images/sample.png",
    registrationOpen: true,
    teamSize: "Individual",
    rules: [
      "Topics will be picked randomly",
      "Individual participation only",
      "Slides must be original",
      "No preparation time",
      "Use of mobile phones or notes is prohibited",
      "Exceeding time limit leads to disqualification"
    ],
    coordinators: []
  },
  {
    id: "2",
    title: "3D CAD Model Design",
    description:
      "A hands-on technical event focused on 3D design creativity and CAD tool expertise.",
    date: "6th March 2027",
    dateTag: "6 Mar",
    time: "10:30 - 04:30",
    venue: "Seminar Hall / Dept. Venues",
    categories: ["Technical Events"],
    department: "MECH",
    image: "/event-images/sample.png",
    registrationOpen: true,
    teamSize: "2 members",
    rules: [
      "Only permitted CAD tools may be used",
      "Internet access may be restricted",
      "Designs must be original",
      "Time limit must be followed",
      "Judges’ decision is final"
    ],
    coordinators: []
  },
  {
    id: "3",
    title: "Algorithm Treasure Hunt",
    description:
      "A fun technical event combining algorithms, coding, and logical reasoning.",
    date: "6th March 2028",
    dateTag: "6 Mar",
    time: "10:30 - 04:30",
    venue: "Seminar Hall / Dept. Venues",
    categories: ["Technical Events"],
    department: "",
    image: "/event-images/sample.png",
    registrationOpen: true,
    teamSize: "2–3 members",
    rules: [
      "Teams must solve clues in sequence",
      "Time limit applies for each round",
      "No external help allowed",
      "Cheating leads to disqualification",
      "Organizers’ decision is final"
    ],
    coordinators: []
  },
  {
    id: "4",
    title: "Agent Building",
    description:
      "Design intelligent agents using AI or rule-based approaches.",
    date: "6th March 2026",
    dateTag: "6 Mar",
    time: "10:30 - 04:30",
    venue: "Seminar Hall / Dept. Venues",
    categories: ["Technical Events"],
    department: "CSM",
    image: "/event-images/sample.png",
    registrationOpen: true,
    teamSize: "Individual or up to 3 members",
    rules: [
      "Participants must explain agent logic clearly",
      "Internet usage depends on organizers",
      "Pre-built solutions may be restricted",
      "Original ideas are encouraged",
      "Judges’ decision is final"
    ],
    coordinators: []
  },
  {
    id: "5",
    title: "AdZap",
    description:
      "A creative event blending marketing strategy and technical presentation.",
    date: "6th March 2026",
    dateTag: "6 Mar",
    time: "10:30 - 04:30",
    venue: "Seminar Hall / Dept. Venues",
    categories: ["Technical Events"],
    department: "CSD",
    image: "/event-images/sample.png",
    registrationOpen: true,
    teamSize: "2–4 members",
    rules: [
      "Content must be original",
      "Time limit must be followed",
      "Offensive content is prohibited",
      "Use of multimedia is allowed"
    ],
    coordinators: []
  },
  {
    id: "6",
    title: "Mobile App + IoT Integration",
    description:
      "Build smart systems by integrating mobile apps with IoT devices.",
    date: "6th March 2026",
    dateTag: "6 Mar",
    time: "10:30 - 04:30",
    venue: "Seminar Hall / Dept. Venues",
    categories: ["Technical Events"],
    department: "",
    image: "/event-images/sample.png",
    registrationOpen: true,
    teamSize: "2–3 members",
    rules: [
      "Prototype or simulation is acceptable",
      "Architecture explanation is mandatory",
      "Internet usage depends on organizers",
      "Plagiarism leads to disqualification"
    ],
    coordinators: []
  },
  {
    id: "7",
    title: "Bridge Building",
    description:
      "Design and construct a model bridge tested for strength and stability.",
    date: "6th March 2026",
    dateTag: "6 Mar",
    time: "10:30 - 04:30",
    venue: "Seminar Hall / Dept. Venues",
    categories: ["Technical Events"],
    department: "CIVIL",
    image: "/event-images/sample.png",
    registrationOpen: true,
    teamSize: "2–4 members",
    rules: [
      "Only provided materials may be used",
      "Design must meet size constraints",
      "Structural testing will be conducted",
      "Judges’ decision is final"
    ],
    coordinators: []
  },
  {
    id: "8",
    title: "Logic Gate Master",
    description:
      "Test your understanding of logic gates and digital electronics.",
    date: "6th March 2026",
    dateTag: "6 Mar",
    time: "10:30 - 04:30",
    venue: "Electronics Lab",
    categories: ["Technical Events"],
    department: "",
    image: "/event-images/sample.png",
    registrationOpen: true,
    teamSize: "Individual",
    rules: [
      "Mobile phones are not allowed",
      "Calculators may be restricted",
      "Multiple rounds may be conducted",
      "Time limit must be followed"
    ],
    coordinators: []
  },
  {
    id: "9",
    title: "Innovation Driven by AI",
    description:
      "Paper presentation on AI-driven innovations and future applications.",
    date: "6th March 2026",
    dateTag: "6 Mar",
    time: "10:30 - 04:30",
    venue: "Seminar Hall / Dept. Venues",
    categories: ["Technical Events", "Paper Presentation"],
    department: "",
    image: "/event-images/sample.png",
    registrationOpen: true,
    teamSize: "2–3 members",
    rules: [
      "Original paper submission is mandatory",
      "Plagiarism leads to disqualification",
      "12–15 slides allowed",
      "PPT/PPTX format only",
      "Report 15 minutes early"
    ],
    coordinators: []
  },
  {
    id: "10",
    title: "Innovations in Mechanical Systems and Designs",
    description:
      "Paper presentation on modern advancements in mechanical engineering.",
    date: "6th March 2026",
    dateTag: "6 Mar",
    time: "10:30 - 04:30",
    venue: "Seminar Hall / Dept. Venues",
    categories: ["Technical Events", "Paper Presentation"],
    department: "MECH",
    image: "/event-images/sample.png",
    registrationOpen: true,
    teamSize: "2–3 members",
    rules: [
      "Original paper submission required",
      "12–15 slides allowed",
      "Time limit strictly followed",
      "PPT/PPTX format only"
    ],
    coordinators: []
  },
  {
    id: "11",
    title: "Vision Nexus",
    description:
      "Paper presentation on smart, sustainable infrastructure systems.",
    date: "6th March 2027",
    dateTag: "6 Mar",
    time: "10:30 - 04:30",
    venue: "Seminar Hall / Dept. Venues",
    categories: ["Technical Events", "Paper Presentation"],
    department: "",
    image: "/event-images/sample.png",
    registrationOpen: true,
    teamSize: "2–3 members",
    rules: [
      "Original paper submission mandatory",
      "12–15 slides allowed",
      "PPT/PPTX format only",
      "Report 15 minutes early"
    ],
    coordinators: []
  },
  {
    id: "12",
    title: "IdeaTronix",
    description:
      "Paper presentation on AI-driven management and business systems.",
    date: "6th March 2026",
    dateTag: "6 Mar",
    time: "10:30 - 04:30",
    venue: "Seminar Hall / Dept. Venues",
    categories: ["Technical Events", "Paper Presentation"],
    department: "ECE",
    image: "/event-images/sample.png",
    registrationOpen: true,
    teamSize: "2–3 members",
    rules: [
      "Original paper submission mandatory",
      "12–15 slides allowed",
      "PPT/PPTX format only",
      "Judges’ decision is final"
    ],
    coordinators: []
  },

  {
    id: "13",
    title: "ElectroNova",
    description:
      "A paper presentation event focusing on modern approaches to cyber security and digital protection.",
    date: "6th March 2026",
    dateTag: "6 Mar",
    time: "10:30 - 04:30",
    venue: "Seminar Hall / Dept. Venues",
    categories: ["Technical Events", "Paper Presentation"],
    department: "EEE",
    image: "/event-images/sample.png",
    registrationOpen: true,
    teamSize: "2–3 members",
    rules: [
      "Original paper submission is mandatory",
      "Plagiarism leads to disqualification",
      "12–15 slides allowed",
      "PPT/PPTX format only",
      "Report 15 minutes early",
      "Judges’ decision is final"
    ],
    coordinators: []
  },
  {
    id: "14",
    title: "Smart, Sustainable and Energy Efficient Systems",
    description:
      "A paper presentation event focused on sustainability, smart systems, and efficient resource utilization.",
    date: "6th March 2026",
    dateTag: "6 Mar",
    time: "10:30 - 04:30",
    venue: "Seminar Hall / Dept. Venues",
    categories: ["Technical Events", "Paper Presentation"],
    department: "CIVIL",
    image: "/event-images/sample.png",
    registrationOpen: true,
    teamSize: "2–3 members",
    rules: [
      "Original paper submission is mandatory",
      "Plagiarism leads to disqualification",
      "12–15 slides allowed",
      "PPT/PPTX format only",
      "Report 15 minutes early"
    ],
    coordinators: []
  },
  {
    id: "15",
    title: "AI and Future of Management",
    description:
      "Explores how artificial intelligence is reshaping modern management and business practices.",
    date: "6th March 2026",
    dateTag: "6 Mar",
    time: "10:30 - 04:30",
    venue: "Seminar Hall / Dept. Venues",
    categories: ["Technical Events", "Paper Presentation"],
    department: "MBA",
    image: "/event-images/sample.png",
    registrationOpen: true,
    teamSize: "2–3 members",
    rules: [
      "Original paper submission is mandatory",
      "Plagiarism leads to disqualification",
      "12–15 slides allowed",
      "PPT/PPTX format only",
      "Report 15 minutes early"
    ],
    coordinators: []
  },
  {
    id: "16",
    title: "Modern Approaches to Cyber Security",
    description:
      "A paper presentation event centered on emerging cyber threats and advanced protection techniques.",
    date: "6th March 2026",
    dateTag: "6 Mar",
    time: "10:30 - 04:30",
    venue: "Seminar Hall / Dept. Venues",
    categories: ["Technical Events", "Paper Presentation"],
    department: "CSC",
    image: "/event-images/sample.png",
    registrationOpen: true,
    teamSize: "2–3 members",
    rules: [
      "Original paper submission is mandatory",
      "Plagiarism leads to disqualification",
      "12–15 slides allowed",
      "PPT/PPTX format only",
      "Report 15 minutes early",
      "Judges’ decision is final"
    ],
    coordinators: []
  },
  {
    id: "17",
    title: "Industry Hackathon",
    description:
      "A 24-hour continuous innovation challenge simulating real-world industry problem solving.",
    date: "6th March 2026",
    dateTag: "6 Mar",
    time: "10:00 - 10:00 (24 Hours)",
    venue: "Department Venues",
    categories: ["Technical Events", "Hackathons"],
    department: "",
    image: "/event-images/sample.png",
    registrationOpen: true,
    teamSize: "4 members",
    rules: [
      "24-hour continuous hackathon",
      "Teams must work only during allotted time",
      "Solutions must align with given problem statements",
      "Plagiarism or pre-built solutions are not allowed"
    ],
    coordinators: []
  },
  {
    id: "18",
    title: "Startup Stories",
    description:
      "An inspiring session showcasing real-life entrepreneurial journeys and startup experiences.",
    date: "6th March 2026",
    dateTag: "6 Mar",
    time: "10:00 - 04:30",
    venue: "Department Venues",
    categories: ["Spotlight Events"],
    department: "MECH",
    image: "/event-images/sample.png",
    registrationOpen: true,
    teamSize: "4 members",
    rules: [],
    coordinators: []
  },
  {
    id: "19",
    title: "Leadership Talks",
    description:
      "An engaging session focused on leadership qualities, personal growth, and professional development.",
    date: "6th March 2026",
    dateTag: "6 Mar",
    time: "10:00 - 04:30",
    venue: "Department Venues",
    categories: ["Spotlight Events"],
    department: "EEE",
    image: "/event-images/sample.png",
    registrationOpen: true,
    teamSize: "2–4 members",
    rules: [],
    coordinators: []
  },
  {
    id: "20",
    title: "Art Gallery",
    description:
      "A creative showcase celebrating artistic expression through paintings, sketches, and photography.",
    date: "6th March 2026",
    dateTag: "6 Mar",
    time: "10:00 - 12:30",
    venue: "Department Venues",
    categories: ["Cultural Events", "Arts"],
    department: "",
    image: "/event-images/sample.png",
    registrationOpen: true,
    teamSize: "",
    rules: [
      "One artwork per student",
      "Theme: Colours of Imagination",
      "Participants must bring their own materials",
      "Artwork must be original and appropriate"
    ],
    coordinators: []
  },
  {
    id: "21",
    title: "Rhythm of One",
    description:
      "A high-energy musical event celebrating rhythm, coordination, and creativity.",
    date: "6th March 2026",
    dateTag: "6 Mar",
    time: "10:00 - 12:30",
    venue: "Department Venues",
    categories: ["Cultural Events", "Music"],
    department: "",
    image: "/event-images/sample.png",
    registrationOpen: true,
    teamSize: "",
    rules: [
      "Only live instruments allowed",
      "No backing tracks",
      "Time limit: 3–6 minutes",
      "Valid college ID required"
    ],
    coordinators: []
  },
  {
    id: "22",
    title: "Echoes of Soul",
    description:
      "A soulful music event highlighting emotional expression through voice and melody.",
    date: "6th March 2026",
    dateTag: "6 Mar",
    time: "10:00 - 04:00",
    venue: "Auditorium Lobby",
    categories: ["Cultural Events", "Music"],
    department: "",
    image: "/event-images/sample.png",
    registrationOpen: true,
    teamSize: "",
    rules: [
      "Solo, duet, or group singing allowed",
      "No lip-sync or recorded vocals",
      "Time limit: 3–5 minutes",
      "Song must be appropriate",
      "Valid college ID required"
    ],
    coordinators: []
  },

  {
    id: "23",
    title: "Laugh Tales",
    description:
      "An entertaining event designed to spread joy, humor, and positivity through comedy and storytelling.",
    date: "7th March 2026",
    dateTag: "7 Mar",
    time: "10:00 - 04:30",
    venue: "Department Venues",
    categories: ["Spotlight Events"],
    department: "",
    image: "/event-images/sample.png",
    registrationOpen: true,
    teamSize: "",
    rules: [
      "Content must be clean and respectful",
      "Vulgar or offensive jokes are prohibited",
      "Performances must stay within the allotted time",
      "Use of props must be pre-approved",
      "Judges’ decision will be final"
    ],
    coordinators: []
  },
  {
    id: "24",
    title: "Idea Pitching",
    description:
      "An innovation-focused event where participants present unique ideas to solve real-world problems.",
    date: "7th March 2026",
    dateTag: "7 Mar",
    time: "10:00 - 04:30",
    venue: "Department Venues",
    categories: ["Spotlight Events"],
    department: "",
    image: "/event-images/sample.png",
    registrationOpen: true,
    teamSize: "",
    rules: [],
    coordinators: []
  },
  {
    id: "25",
    title: "Youth Summit",
    description:
      "A thought-provoking event that brings young minds together to discuss social, technological, and national issues.",
    date: "7th March 2026",
    dateTag: "7 Mar",
    time: "10:00 - 04:30",
    venue: "Department Venues",
    categories: ["Spotlight Events"],
    department: "",
    image: "/event-images/sample.png",
    registrationOpen: true,
    teamSize: "",
    rules: [
      "Participants must respect differing opinions",
      "Topics must align with the summit theme",
      "Time limits must be strictly followed",
      "Inappropriate language or behavior is not allowed",
      "Moderators’ and judges’ decisions are final"
    ],
    coordinators: []
  },
  {
    id: "26",
    title: "Echoes of Sound",
    description:
      "A music-focused event celebrating melody, rhythm, and creative sound performances.",
    date: "7th March 2026",
    dateTag: "7 Mar",
    time: "10:00 - 04:30",
    venue: "Department Venues",
    categories: ["Cultural Events", "Music"],
    department: "",
    image: "/event-images/sample.png",
    registrationOpen: true,
    teamSize: "",
    rules: [],
    coordinators: []
  },
  {
    id: "27",
    title: "Battle of Beats",
    description:
      "An energetic dance and rhythm competition highlighting coordination, performance, and stage presence.",
    date: "7th March 2026",
    dateTag: "7 Mar",
    time: "10:00 - 04:30",
    venue: "Department Venues",
    categories: ["Cultural Events", "Dance"],
    department: "",
    image: "/event-images/sample.png",
    registrationOpen: true,
    teamSize: "",
    rules: [],
    coordinators: []
  },
  {
    id: "28",
    title: "Tech Short",
    description:
      "A fast-paced technical speaking event where participants explain a technical concept within a short duration.",
    date: "7th March 2026",
    dateTag: "7 Mar",
    time: "10:00 - 04:30",
    venue: "Department Venues",
    categories: ["Technical Events"],
    department: "",
    image: "/event-images/sample.png",
    registrationOpen: true,
    teamSize: "Individual",
    rules: [
      "Individual participation only",
      "Topic must be technical in nature",
      "Time limit must be strictly followed",
      "Use of notes or mobiles is not allowed",
      "Judges’ decision will be final"
    ],
    coordinators: []
  },
  {
    id: "29",
    title: "Logic Lock",
    description:
      "A brain-teasing technical event that challenges logical and analytical thinking through puzzles.",
    date: "7th March 2026",
    dateTag: "7 Mar",
    time: "10:00 - 04:30",
    venue: "Department Venues",
    categories: ["Technical Events"],
    department: "",
    image: "/event-images/sample.png",
    registrationOpen: true,
    teamSize: "Individual",
    rules: [
      "Individual participation only",
      "Puzzles must be solved sequentially",
      "No external help is allowed",
      "Time limit applies for each round",
      "Judges’ decision will be final"
    ],
    coordinators: []
  },
  {
    id: "30",
    title: "Code Crime Scene",
    description:
      "An investigative coding event where participants debug and analyze faulty code.",
    date: "7th March 2026",
    dateTag: "7 Mar",
    time: "10:00 - 05:30",
    venue: "Department Venues",
    categories: ["Technical Events"],
    department: "",
    image: "/event-images/sample.png",
    registrationOpen: true,
    teamSize: "Individual or 2 per team",
    rules: [
      "Individual or team participation (max 2)",
      "Code must be debugged within the given time",
      "Internet usage may be restricted",
      "Only allowed languages may be used",
      "Judges’ decision will be final"
    ],
    coordinators: []
  },
  {
    id: "31",
    title: "SQL Query Challenge",
    description:
      "A database-focused technical event testing SQL query logic, optimization, and accuracy.",
    date: "7th March 2026",
    dateTag: "7 Mar",
    time: "10:00 - 05:30",
    venue: "Department Venues",
    categories: ["Technical Events"],
    department: "",
    image: "/event-images/sample.png",
    registrationOpen: true,
    teamSize: "Individual",
    rules: [
      "Individual participation only",
      "Queries must produce correct output",
      "Use of external resources is prohibited",
      "Time limit must be followed",
      "Judges’ decision will be final"
    ],
    coordinators: []
  },
  {
    id: "32",
    title: "Pic Prompt",
    description:
      "A creative technical event where participants build a technical idea inspired by an image prompt.",
    date: "7th March 2026",
    dateTag: "7 Mar",
    time: "10:00 - 04:30",
    venue: "Department Venues",
    categories: ["Technical Events"],
    department: "",
    image: "/event-images/sample.png",
    registrationOpen: true,
    teamSize: "Individual",
    rules: [
      "Individual participation only",
      "Prompt will be given on the spot",
      "Time limit must be followed",
      "Explanation must be technical",
      "Judges’ decision will be final"
    ],
    coordinators: []
  },
  {
    id: "33",
    title: "Memory Meltdown",
    description:
      "A fun technical event designed to test memory power, concentration, and observation skills.",
    date: "7th March 2026",
    dateTag: "7 Mar",
    time: "10:00 - 04:30",
    venue: "Department Venues",
    categories: ["Technical Events"],
    department: "",
    image: "/event-images/sample.png",
    registrationOpen: true,
    teamSize: "Individual",
    rules: [
      "Individual participation only",
      "No writing during observation time",
      "Recall must be done within time limit",
      "No external help allowed",
      "Judges’ decision is final"
    ],
    coordinators: []
  },

  {
    id: "34",
    title: "Tech Dumb Charades",
    description:
      "A technical twist to the classic dumb charades where participants act out technical terms without speaking.",
    date: "7th March 2026",
    dateTag: "7 Mar",
    time: "10:00 - 04:30",
    venue: "Department Venues",
    categories: ["Technical Events"],
    department: "",
    image: "/event-images/sample.png",
    registrationOpen: true,
    teamSize: "2–4 members",
    rules: [
      "Team participation (2–4 members)",
      "No speaking or writing allowed",
      "Technical terms only",
      "Time limit per round applies",
      "Judges’ decision is final"
    ],
    coordinators: []
  },
  {
    id: "35",
    title: "UI / UX Design Sprint",
    description:
      "A creative technical event focused on user interface and user experience design.",
    date: "7th March 2026",
    dateTag: "7 Mar",
    time: "10:00 - 04:30",
    venue: "Department Venues",
    categories: ["Technical Events"],
    department: "",
    image: "/event-images/sample.png",
    registrationOpen: true,
    teamSize: "Individual or 2 members",
    rules: [
      "Individual or team participation (max 2)",
      "Tools must be approved by organizers",
      "Internet usage may be restricted",
      "Design explanation is mandatory",
      "Judges’ decision is final"
    ],
    coordinators: []
  },
  {
    id: "36",
    title: "Cube Solving",
    description:
      "A skill-based event challenging speed, logic, and problem-solving using Rubik’s cubes.",
    date: "7th March 2026",
    dateTag: "7 Mar",
    time: "10:00 - 04:30",
    venue: "Department Venues",
    categories: ["Technical Events"],
    department: "",
    image: "/event-images/sample.png",
    registrationOpen: true,
    teamSize: "Individual",
    rules: [
      "Individual participation only",
      "Cube must be solved completely",
      "Time will be recorded accurately",
      "Tampering with cube is not allowed",
      "Judges’ decision is final"
    ],
    coordinators: []
  },
  {
    id: "37",
    title: "Agentix",
    description:
      "A hackathon focused on building intelligent agents and automated systems.",
    date: "7th March 2026",
    dateTag: "7 Mar",
    time: "10:00 - 04:30",
    venue: "Department Venues",
    categories: ["Technical Events", "Hackathons"],
    department: "",
    image: "/event-images/sample.png",
    registrationOpen: true,
    teamSize: "2–4 members",
    rules: [
      "Teams must work only during the official hackathon duration",
      "Project must be developed during the event",
      "Internet usage is allowed",
      "Each team must present the solution",
      "Judges’ decision will be final"
    ],
    coordinators: []
  },
  {
    id: "38",
    title: "Webverse",
    description:
      "A hackathon centered on building innovative web-based solutions using modern technologies.",
    date: "7th March 2026",
    dateTag: "7 Mar",
    time: "10:00 - 04:30",
    venue: "Department Venues",
    categories: ["Technical Events", "Hackathons"],
    department: "",
    image: "/event-images/sample.png",
    registrationOpen: true,
    teamSize: "2–4 members",
    rules: [
      "Teams must work only during the official hackathon duration",
      "Project must be developed during the event",
      "Internet usage is allowed",
      "Each team must present the solution",
      "Judges’ decision will be final"
    ],
    coordinators: []
  },
  {
    id: "39",
    title: "Sensecraft",
    description:
      "A hackathon emphasizing smart systems using sensors, data, and intelligent processing.",
    date: "7th March 2026",
    dateTag: "7 Mar",
    time: "10:00 - 04:30",
    venue: "Department Venues",
    categories: ["Technical Events", "Hackathons"],
    department: "",
    image: "/event-images/sample.png",
    registrationOpen: true,
    teamSize: "2–4 members",
    rules: [
      "Solution must involve sensors, data, or smart systems",
      "Simulation or prototype models are acceptable",
      "Idea should solve a real-world problem",
      "Teams must explain the working clearly"
    ],
    coordinators: []
  },
  {
    id: "40",
    title: "Designathon",
    description:
      "A creativity-driven event focused on mechanical engineering design and innovation.",
    date: "7th March 2026",
    dateTag: "7 Mar",
    time: "10:00 - 04:30",
    venue: "Department Venues",
    categories: ["Technical Events", "Hackathons"],
    department: "MECH",
    image: "/event-images/sample.png",
    registrationOpen: true,
    teamSize: "2–4 members",
    rules: [
      "Designs must be original and created during the event",
      "Solution should address the given problem statement",
      "Teams must submit and explain the design clearly",
      "Time limits must be strictly followed"
    ],
    coordinators: []
  },
  {
    id: "41",
    title: "Techorbit",
    description:
      "A project expo showcasing innovative technology-based projects and prototypes.",
    date: "7th March 2026",
    dateTag: "7 Mar",
    time: "10:00 - 04:30",
    venue: "Department Venues",
    categories: ["Technical Events", "Project Expo"],
    department: "",
    image: "/event-images/sample.png",
    registrationOpen: true,
    teamSize: "2–4 members",
    rules: [
      "Projects must be original and student-developed",
      "Teams must explain the project clearly",
      "Working models or demos are preferred",
      "Judges’ decision will be final"
    ],
    coordinators: []
  },
  {
    id: "42",
    title: "SignalSphere",
    description:
      "A project expo focusing on electronics, communication, and signal processing systems.",
    date: "7th March 2026",
    dateTag: "7 Mar",
    time: "10:00 - 04:30",
    venue: "Department Venues",
    categories: ["Technical Events", "Project Expo"],
    department: "",
    image: "/event-images/sample.png",
    registrationOpen: true,
    teamSize: "2–4 members",
    rules: [
      "Projects must relate to electronics or communication",
      "Teams must explain the project clearly",
      "Working models or demos are preferred",
      "Judges’ decision will be final"
    ],
    coordinators: []
  },
  {
    id: "43",
    title: "Energex",
    description:
      "A project expo centered on electrical systems and energy-based solutions.",
    date: "7th March 2026",
    dateTag: "7 Mar",
    time: "10:00 - 04:30",
    venue: "Department Venues",
    categories: ["Technical Events", "Project Expo"],
    department: "EEE",
    image: "/event-images/sample.png",
    registrationOpen: true,
    teamSize: "2–4 members",
    rules: [
      "Projects must focus on electrical or energy systems",
      "Teams must explain the project clearly",
      "Working models or demos are preferred",
      "Judges’ decision will be final"
    ],
    coordinators: []
  },
  {
    id: "44",
    title: "Infrasys",
    description:
      "A project expo focused on civil engineering and infrastructure systems.",
    date: "7th March 2026",
    dateTag: "7 Mar",
    time: "10:00 - 04:30",
    venue: "Department Venues",
    categories: ["Technical Events", "Project Expo"],
    department: "CIVIL",
    image: "/event-images/sample.png",
    registrationOpen: true,
    teamSize: "2–4 members",
    rules: [
      "Projects must relate to civil or infrastructure systems",
      "Teams must explain the project clearly",
      "Working models or demos are preferred",
      "Judges’ decision will be final"
    ],
    coordinators: []
  },





  
  {
    id: "45",
    title: "Cricket Men",
    description: "",
    date: "",
    dateTag: "7 Mar",
    time: "",
    venue: "",
    categories: ["Sports"],
    department: "",
    image: "/event-images/sample.png",
    registrationOpen: true,
    teamSize: "11 members",
    rules: [
      "11 players + 4 substitutes.",
      "10 overs per side; max 2 overs per bowler.",
      "Free hit for no-ball; tie → Super Over.",
      "White leather ball.",
      "Umpire decision final.",
      "Overs may change for semis and finals."
    ],
    coordinators: []
  },
  {
    id: "46",
    title: "Kabaddi Men",
    description: "",
    date: "",
    dateTag: "7 Mar",
    time: "",
    venue: "",
    categories: ["Sports"],
    department: "",
    image: "/event-images/sample.png",
    registrationOpen: true,
    teamSize: "7 members",
    rules: [
      "7 on court + 5 substitutes.",
      "2 halves of 20 minutes with 5-minute break.",
      "Continuous chant; 30 seconds per raid.",
      "All-out gives bonus points.",
      "Revive 1 player per point.",
      "Referee decision final."
    ],
    coordinators: []
  },
  {
    id: "47",
    title: "Volleyball Men",
    description: "",
    date: "",
    dateTag: "7 Mar",
    time: "",
    venue: "",
    categories: ["Sports"],
    department: "",
    image: "/event-images/sample.png",
    registrationOpen: true,
    teamSize: "6 members",
    rules: [
      "6 on court + 6 substitutes.",
      "Best of 3 sets to 25 points.",
      "Maximum 3 touches per side.",
      "No net touch.",
      "Referee decision final."
    ],
    coordinators: []
  },
  {
    id: "48",
    title: "Chess Men",
    description: "",
    date: "",
    dateTag: "7 Mar",
    time: "",
    venue: "",
    categories: ["Sports"],
    department: "",
    image: "/event-images/sample.png",
    registrationOpen: true,
    teamSize: "",
    rules: [
      "Swiss or Knockout format.",
      "15 minutes per player.",
      "FIDE rules apply.",
      "Silence required.",
      "Mobile use leads to disqualification."
    ],
    coordinators: []
  },
  {
    id: "49",
    title: "Carroms Men",
    description: "",
    date: "",
    dateTag: "7 Mar",
    time: "",
    venue: "",
    categories: ["Sports"],
    department: "",
    image: "/event-images/sample.png",
    registrationOpen: true,
    teamSize: "",
    rules: [
      "Singles format; best of 3 boards.",
      "Queen must be covered.",
      "First to 25 points or 2 boards wins.",
      "Standard fouls apply."
    ],
    coordinators: []
  },
  {
    id: "50",
    title: "Table Tennis Men",
    description: "",
    date: "",
    dateTag: "7 Mar",
    time: "",
    venue: "",
    categories: ["Sports"],
    department: "",
    image: "/event-images/sample.png",
    registrationOpen: true,
    teamSize: "",
    rules: [
      "Singles format.",
      "Best of 3 or 5 games.",
      "11 points per game; win by 2.",
      "Rally scoring.",
      "ITTF rules apply."
    ],
    coordinators: []
  },
  {
    id: "51",
    title: "Handball Men",
    description: "",
    date: "",
    dateTag: "7 Mar",
    time: "",
    venue: "",
    categories: ["Sports"],
    department: "",
    image: "/event-images/sample.png",
    registrationOpen: true,
    teamSize: "",
    rules: [
      "6 players + goalkeeper + 5 substitutes.",
      "2 halves of 20 minutes with 5-minute break.",
      "3 steps or 3 seconds rule.",
      "Major fouls lead to 7m throw.",
      "Card penalties for rough play."
    ],
    coordinators: []
  },
  {
    id: "52",
    title: "Throwball Women",
    description: "",
    date: "",
    dateTag: "7 Mar",
    time: "",
    venue: "",
    categories: ["Sports"],
    department: "",
    image: "/event-images/sample.png",
    registrationOpen: true,
    teamSize: "",
    rules: [
      "9 players on court + 3 substitutes.",
      "Best of 3 sets to 25 points.",
      "Clean catch and throw within 3 seconds.",
      "No holding or double touch."
    ],
    coordinators: []
  },
  {
    id: "53",
    title: "Kabaddi Women",
    description: "",
    date: "",
    dateTag: "7 Mar",
    time: "",
    venue: "",
    categories: ["Sports"],
    department: "",
    image: "/event-images/sample.png",
    registrationOpen: true,
    teamSize: "7 members",
    rules: [
      "7 on court + 5 substitutes.",
      "2 halves of 20 minutes.",
      "Continuous chant; 30 seconds per raid.",
      "All-out bonus applies.",
      "Referee decision final."
    ],
    coordinators: []
  },
  {
    id: "54",
    title: "Volleyball Women",
    description: "",
    date: "",
    dateTag: "7 Mar",
    time: "",
    venue: "",
    categories: ["Sports"],
    department: "",
    image: "/event-images/sample.png",
    registrationOpen: true,
    teamSize: "6 members",
    rules: [
      "6 on court + 6 substitutes.",
      "Best of 3 sets.",
      "No net touch or crossing the line."
    ],
    coordinators: []
  },
  {
    id: "55",
    title: "Chess Women",
    description: "",
    date: "",
    dateTag: "7 Mar",
    time: "",
    venue: "",
    categories: ["Sports"],
    department: "",
    image: "/event-images/sample.png",
    registrationOpen: true,
    teamSize: "",
    rules: [
      "15 minutes per player.",
      "FIDE rules apply.",
      "No mobile use allowed."
    ],
    coordinators: []
  },
  {
    id: "56",
    title: "Carroms Women",
    description: "",
    date: "",
    dateTag: "7 Mar",
    time: "",
    venue: "",
    categories: ["Sports"],
    department: "",
    image: "/event-images/sample.png",
    registrationOpen: true,
    teamSize: "",
    rules: [
      "Singles format; best of 3 boards.",
      "Queen must be covered.",
      "Standard fouls apply."
    ],
    coordinators: []
  },
  {
    id: "57",
    title: "Tennikoit Women",
    description: "",
    date: "",
    dateTag: "7 Mar",
    time: "",
    venue: "",
    categories: ["Sports"],
    department: "",
    image: "/event-images/sample.png",
    registrationOpen: true,
    teamSize: "",
    rules: [
      "Singles only.",
      "Best of 3 sets to 21 points.",
      "Underhand serve only.",
      "Fault if ring goes outside or touches the net."
    ],
    coordinators: []
  }
];





