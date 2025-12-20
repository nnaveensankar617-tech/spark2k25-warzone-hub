export type EventCategory =
  | "All Events"
  | "Cultural Contests"
  | "Technical Events"
  | "Sports"
  | "Arts"
  | "Dance"
  | "Hackathons"
  | "International Education Expo"
  | "Music"
  | "Poster Presentation"
  | "PPT Presentation"
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
  "Cultural Contests",
  "Technical Events",
  "Sports",
  "Arts",
  "Dance",
  "Hackathons",
  "International Education Expo",
  "Music",
  "PPT Presentation",
  "Poster Presentation",
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
    title: "PPT Presentation (CSE)",
    description: "hello",
    date: "",
    dateTag: "6 Mar",
    time: "",
    venue: "",
    categories: ["Technical Events", "PPT Presentation"],
    department: "CSE",
    image: "",
    registrationOpen: true,
    teamSize: "2–4 members",
    rules: [
      "Choose 1 topic.",
      "Presentation duration: 8–10 minutes.",
      "Slides must be original (no plagiarism).",
      "Q&A session mandatory.",
      "Stick strictly to your selected topic."
    ],
    coordinators: []
  },
  {
    id: "2",
    title: "Poster Presentation (CSE)",
    description: "",
    date: "",
    dateTag: "6 Mar",
    time: "",
    venue: "",
    categories: ["Technical Events","Poster Presentation"],
    department: "CSE",
    image: "",
    registrationOpen: true,
    teamSize: "2 members",
    rules: [
      "Poster size must be A2 or A3.",
      "Poster should be clear, neat, and well-presented.",
      "Hand-made or digital posters are allowed.",
      "Poster must be based on a relevant CSE domain.",
      "Explanation time: 4–5 minutes per team."
    ],
    coordinators: []
  },
  {
    id: "3",
    title: "Coding Contest (CSE)",
    description: "",
    date: "",
    dateTag: "6 Mar",
    time: "",
    venue: "",
    categories: ["Technical Events"],
    department: "CSE",
    image: "",
    registrationOpen: true,
    teamSize: "2 members",
    rules: [
      "Solve programming problems within the given time.",
      "Ranking is based on the number of problems solved.",
      "In case of ties, the least time taken will decide the winner.",
      "Competition consists of multiple rounds."
    ],
    coordinators: []
  },
  {
    id: "4",
    title: "PPT Presentation (CSC)",
    description: "",
    date: "",
    dateTag: "6 Mar",
    time: "",
    venue: "",
    categories: ["Technical Events", "PPT Presentation"],
    department: "CSD",
    image: "",
    registrationOpen: true,
    teamSize: "2–4 members",
    rules: [
      "Choose any one topic.",
      "Presentation time: 8–10 minutes.",
      "Slides must be original and plagiarism-free.",
      "Q&A session will follow the presentation."
    ],
    coordinators: []
  },
  {
    id: "5",
    title: "Poster Presentation (CSC)",
    description: "",
    date: "",
    dateTag: "6 Mar",
    time: "",
    venue: "",
    categories: ["Technical Events","Poster Presentation"],
    department: "CSD",
    image: "",
    registrationOpen: true,
    teamSize: "2 members",
    rules: [
      "Poster must be A2 or A3 size.",
      "Content should be clear and neatly presented.",
      "Explanation time: 2–3 minutes per team."
    ],
    coordinators: []
  },
  {
    id: "6",
    title: "Poster Presentation (CSC)",
    description: "",
    date: "",
    dateTag: "6 Mar",
    time: "",
    venue: "",
    categories: ["Technical Events","Poster Presentation"],
    department: "CSD",
    image: "",
    registrationOpen: true,
    teamSize: "2 members",
    rules: [
      "Poster must be A2 or A3 size.",
      "Content should be clear and neatly presented.",
      "Explanation time: 2–3 minutes per team."
    ],
    coordinators: []
  },
  {
    id: "7",
    title: "PPT Presentation (EEE)",
    description: "",
    date: "",
    dateTag: "6 Mar",
    time: "",
    venue: "",
    categories: ["Technical Events", "PPT Presentation"],
    department: "EEE",
    image: "",
    registrationOpen: true,
    teamSize: "2–4 members",
    rules: [
      "Choose any relevant EEE topic.",
      "Presentation time: 8–10 minutes.",
      "Slides must be original and free of plagiarism.",
      "Q&A session will follow the presentation."
    ],
    coordinators: []
  },
  {
    id: "8",
    title: "Poster Presentation (EEE)",
    description: "",
    date: "",
    dateTag: "6 Mar",
    time: "",
    venue: "",
    categories: ["Technical Events","Poster Presentation"],
    department: "EEE",
    image: "",
    registrationOpen: true,
    teamSize: "2 members",
    rules: [
      "Poster must be A2 or A3 size.",
      "Poster content should be neat, clear, and well-presented.",
      "Explanation time: 2–3 minutes per team."
    ],
    coordinators: []
  },
  {
    id: "9",
    title: "Project Expo (EEE)",
    description: "",
    date: "",
    dateTag: "6 Mar",
    time: "",
    venue: "",
    categories: ["Technical Events", "Project Expo"],
    department: "EEE",
    image: "",
    registrationOpen: true,
    teamSize: "2–4 members",
    rules: [
      "Projects must include a working model or demonstration.",
      "Explanation time: 5–7 minutes per team.",
      "Ensure the project setup is safe for display.",
      "Judging will be based on innovation, clarity, and execution."
    ],
    coordinators: []
  },
  {
    id: "10",
    title: "PPT Presentation (IT)",
    description: "",
    date: "",
    dateTag: "6 Mar",
    time: "",
    venue: "",
    categories: ["Technical Events", "PPT Presentation"],
    department: "CS-IT",
    image: "",
    registrationOpen: true,
    teamSize: "2–4 members",
    rules: [
      "Presentation duration: 8–10 minutes.",
      "Slides must be original and free from plagiarism.",
      "Q&A session may follow the presentation."
    ],
    coordinators: []
  },
  {
    id: "11",
    title: "Poster Presentation (IT)",
    description: "",
    date: "",
    dateTag: "6 Mar",
    time: "",
    venue: "",
    categories: ["Technical Events","Poster Presentation"],
    department: "CS-IT",
    image: "",
    registrationOpen: true,
    teamSize: "2 members",
    rules: [
      "Poster must be A2 or A3 size.",
      "Content must be clear, neat, and well-structured.",
      "Handmade or digital posters are allowed."
    ],
    coordinators: []
  },
  {
    id: "12",
    title: "Reverse Coding (IT)",
    description: "",
    date: "",
    dateTag: "6 Mar",
    time: "",
    venue: "",
    categories: ["Technical Events"],
    department: "CS-IT",
    image: "",
    registrationOpen: true,
    teamSize: "2 members",
    rules: [
      "Decode the given output or logic.",
      "Write the correct program based on the behavior.",
      "Strictly no plagiarism or code copying."
    ],
    coordinators: []
  },


  {
    id: "13",
    title: "PPT Presentation (CSM)",
    description: "",
    date: "",
    dateTag: "6 Mar",
    time: "",
    venue: "",
    categories: ["Technical Events", "PPT Presentation"],
    department: "CSM",
    image: "",
    registrationOpen: true,
    teamSize: "2–4 members",
    rules: [
      "Choose any one topic related to CSM.",
      "Presentation duration: 8–10 minutes.",
      "Slides must be original and well-structured.",
      "Q&A session will follow the presentation."
    ],
    coordinators: []
  },
  {
    id: "14",
    title: "Poster Presentation (CSM)",
    description: "",
    date: "",
    dateTag: "6 Mar",
    time: "",
    venue: "",
    categories: ["Technical Events","Poster Presentation"],
    department: "CSM",
    image: "",
    registrationOpen: true,
    teamSize: "2 members",
    rules: [
      "Poster must be A2 or A3 size.",
      "Content should be clear and neatly presented.",
      "Explanation time: 2–3 minutes per team."
    ],
    coordinators: []
  },
  {
    id: "15",
    title: "Coding Quiz – CSM",
    description: "",
    date: "",
    dateTag: "6 Mar",
    time: "",
    venue: "",
    categories: ["Technical Events", "Hackathons"],
    department: "CSM",
    image: "",
    registrationOpen: true,
    teamSize: "2 members",
    rules: [
      "Quiz format will be MCQs based on AI & ML.",
      "Fastest and most accurate team wins.",
      "No external help or devices allowed."
    ],
    coordinators: []
  },
  {
    id: "16",
    title: "PPT Presentation (CSD)",
    description: "",
    date: "",
    dateTag: "6 Mar",
    time: "",
    venue: "",
    categories: ["Technical Events", "PPT Presentation"],
    department: "CSD",
    image: "",
    registrationOpen: true,
    teamSize: "2–4 members",
    rules: [
      "Presentation duration: 8–10 minutes.",
      "Slides must be original and clearly presented.",
      "Q&A session will follow the presentation."
    ],
    coordinators: []
  },
 
  {
    id: "17",
    title: "Poster Presentation (CSD)",
    description: "",
    date: "",
    dateTag: "6 Mar",
    time: "",
    venue: "",
    categories: ["Technical Events","Poster Presentation"],
    department: "CSD",
    image: "",
    registrationOpen: true,
    teamSize: "2 members",
    rules: [
      "Poster must be A2 or A3 size.",
      "Content should be neat and well-structured.",
      "Explanation time: 2–3 minutes."
    ],
    coordinators: []
  },
  {
    id: "18",
    title: "Coding Autometa (CSD)",
    description: "",
    date: "",
    dateTag: "6 Mar",
    time: "",
    venue: "",
    categories: ["Technical Events"],
    department: "CSD",
    image: "",
    registrationOpen: true,
    teamSize: "2 members",
    rules: [
      "MCQ-based coding logic quiz.",
      "Highest score in the least time wins.",
      "No external help or plagiarism allowed."
    ],
    coordinators: []
  },
  {
    id: "19",
    title: "PPT Presentation (ECE)",
    description: "",
    date: "",
    dateTag: "6 Mar",
    time: "",
    venue: "",
    categories: ["Technical Events", "PPT Presentation"],
    department: "ECE",
    image: "",
    registrationOpen: true,
    teamSize: "2 members",
    rules: [
      "Presentation time: 8 minutes followed by Q&A.",
      "Participants must submit an abstract before the event.",
      "Bring the PPT on a pen drive for presentation.",
      "Slides must be original and well-structured."
    ],
    coordinators: []
  },
  {
    id: "20",
    title: "Poster Presentation (ECE)",
    description: "",
    date: "",
    dateTag: "6 Mar",
    time: "",
    venue: "",
    categories: ["Technical Events","Poster Presentation"],
    department: "ECE",
    image: "",
    registrationOpen: true,
    teamSize: "2 members",
    rules: [
      "Poster must follow IEEE format.",
      "Size allowed: A2 or A3.",
      "Explanation time: 5 minutes per team.",
      "Content should be clear, technical, and neatly presented."
    ],
    coordinators: []
  },
  {
    id: "21",
    title: "Project Expo (ECE)",
    description: "",
    date: "",
    dateTag: "6 Mar",
    time: "",
    venue: "",
    categories: ["Technical Events", "Project Expo"],
    department: "ECE",
    image: "",
    registrationOpen: true,
    teamSize: "4 members",
    rules: [
      "Project must include a working model or live demonstration.",
      "A PPT explaining the project is mandatory.",
      "Components used must be safe and well-insulated.",
      "Evaluation is based on innovation, clarity, and execution."
    ],
    coordinators: []
  },
  {
    id: "22",
    title: "PPT Presentation (Civil)",
    description: "",
    date: "",
    dateTag: "6 Mar",
    time: "",
    venue: "",
    categories: ["Technical Events", "PPT Presentation"],
    department: "CIVIL",
    image: "",
    registrationOpen: true,
    teamSize: "2 members",
    rules: [
      "Presentation time: 8 minutes followed by Q&A.",
      "Submit abstract prior to the event.",
      "Slides must be original and well-organized."
    ],
    coordinators: []
  },
  {
    id: "23",
    title: "Poster Presentation (Civil)",
    description: "",
    date: "",
    dateTag: "6 Mar",
    time: "",
    venue: "",
    categories: ["Technical Events","Poster Presentation"],
    department: "CIVIL",
    image: "",
    registrationOpen: true,
    teamSize: "2 members",
    rules: [
      "Poster must follow IEEE format.",
      "Size allowed: A2 or A3.",
      "Explanation time: 5 minutes per team.",
      "Content must be neat and clear."
    ],
    coordinators: []
  },
  {
    id: "24",
    title: "Project Expo (Civil)",
    description: "",
    date: "",
    dateTag: "6 Mar",
    time: "",
    venue: "",
    categories: ["Technical Events", "Project Expo"],
    department: "CIVIL",
    image: "",
    registrationOpen: true,
    teamSize: "4 members",
    rules: [
      "Project must include a working model.",
      "PPT describing the project is mandatory.",
      "Judging based on innovation and clarity."
    ],
    coordinators: []
  },
  {
    id: "25",
    title: "PPT Presentation (Mech)",
    description: "",
    date: "",
    dateTag: "6 Mar",
    time: "",
    venue: "",
    categories: ["Technical Events", "PPT Presentation"],
    department: "MECH",
    image: "",
    registrationOpen: true,
    teamSize: "2 members",
    rules: [
      "Presentation time: 8 minutes + Q&A.",
      "Abstract submission is mandatory.",
      "Slides must be original and technical."
    ],
    coordinators: []
  },
  {
    id: "26",
    title: "Poster Presentation (Mech)",
    description: "",
    date: "",
    dateTag: "6 Mar",
    time: "",
    venue: "",
    categories: ["Technical Events","Poster Presentation"],
    department: "MECH",
    image: "",
    registrationOpen: true,
    teamSize: "2 members",
    rules: [
      "Poster must follow IEEE guidelines.",
      "Content must be clear and neatly presented.",
      "Technical accuracy is required."
    ],
    coordinators: []
  },
  {
    id: "27",
    title: "Project Expo (Mech)",
    description: "",
    date: "",
    dateTag: "6 Mar",
    time: "",
    venue: "",
    categories: ["Technical Events", "Project Expo"],
    department: "MECH",
    image: "",
    registrationOpen: true,
    teamSize: "4 members",
    rules: [
      "Project must include a working physical model.",
      "PPT describing the project is required.",
      "Safety measures must be ensured."
    ],
    coordinators: []
  },
  {
    id: "28",
    title: "Designathon (Mech)",
    description: "",
    date: "",
    dateTag: "6 Mar",
    time: "",
    venue: "",
    categories: ["Technical Events"],
    department: "MECH",
    image: "",
    registrationOpen: true,
    teamSize: "1–3 members",
    rules: [
      "On-spot design challenge will be given.",
      "Work must be original and self-created.",
      "Judges' decision will be final."
    ],
    coordinators: []
  },
  {
    id: "29",
    title: "Battle of Beats",
    description: "",
    date: "",
    dateTag: "7 Mar",
    time: "",
    venue: "",
    categories: ["Cultural Contests", "Dance"],
    department: "",
    image: "",
    registrationOpen: true,
    teamSize: "5–12 members",
    rules: [
      "Performance time: 4–5 minutes.",
      "Music must be submitted in advance.",
      "Props allowed only with prior approval and must be safe."
    ],
    coordinators: []
  },
  {
    id: "30",
    title: "Rhythm of One",
    description: "",
    date: "",
    dateTag: "7 Mar",
    time: "",
    venue: "",
    categories: ["Cultural Contests", "Dance"],
    department: "",
    image: "",
    registrationOpen: true,
    teamSize: "",
    rules: [
      "Solo dance; one entry per participant.",
      "Valid college ID required during registration.",
      "Performance time: 2–3 minutes.",
      "Music must be submitted in advance.",
      "Props allowed only with prior approval."
    ],
    coordinators: []
  },
  {
    id: "31",
    title: "Art Gallery",
    description: "",
    date: "",
    dateTag: "7 Mar",
    time: "",
    venue: "",
    categories: ["Cultural Contests", "Arts"],
    department: "",
    image: "",
    registrationOpen: true,
    teamSize: "",
    rules: [
      "One artwork per student.",
      "Theme: Colours of Imagination.",
      "Student must bring their own materials.",
      "Artwork must be original and appropriate."
    ],
    coordinators: []
  },
  {
    id: "32",
    title: "Echoes of Soul",
    description: "",
    date: "",
    dateTag: "7 Mar",
    time: "",
    venue: "",
    categories: ["Cultural Contests", "Music"],
    department: "",
    image: "",
    registrationOpen: true,
    teamSize: "",
    rules: [
      "Solo, duet, or group singing allowed.",
      "No lip-sync or recorded vocals.",
      "Time limit: 3–5 minutes.",
      "Song must be appropriate.",
      "Valid college ID required."
    ],
    coordinators: []
  },
  {
    id: "33",
    title: "Echoes of Sound",
    description: "",
    date: "",
    dateTag: "7 Mar",
    time: "",
    venue: "",
    categories: ["Cultural Contests", "Music"],
    department: "",
    image: "",
    registrationOpen: true,
    teamSize: "",
    rules: [
      "Only live instruments; no backing tracks.",
      "One entry per participant or band.",
      "Time limit: 3–6 minutes.",
      "Valid college ID required."
    ],
    coordinators: []
  },
  {
    id: "34",
    title: "Laugh Tales",
    description: "",
    date: "",
    dateTag: "7 Mar",
    time: "",
    venue: "",
    categories: ["Cultural Contests"],
    department: "",
    image: "",
    registrationOpen: true,
    teamSize: "",
    rules: [
      "Solo comedy performance only.",
      "Time limit: 3–5 minutes.",
      "Languages: English, Hindi, or Telugu.",
      "Content must be clean and original."
    ],
    coordinators: []
  },
  {
    id: "35",
    title: "Cricket Men",
    description: "",
    date: "",
    dateTag: "7 Mar",
    time: "",
    venue: "",
    categories: ["Sports"],
    department: "",
    image: "",
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
    id: "36",
    title: "Kabaddi Men",
    description: "",
    date: "",
    dateTag: "7 Mar",
    time: "",
    venue: "",
    categories: ["Sports"],
    department: "",
    image: "",
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
    id: "37",
    title: "Volleyball Men",
    description: "",
    date: "",
    dateTag: "7 Mar",
    time: "",
    venue: "",
    categories: ["Sports"],
    department: "",
    image: "",
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
    id: "38",
    title: "Chess Men",
    description: "",
    date: "",
    dateTag: "7 Mar",
    time: "",
    venue: "",
    categories: ["Sports"],
    department: "",
    image: "",
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
    id: "39",
    title: "Carroms Men",
    description: "",
    date: "",
    dateTag: "7 Mar",
    time: "",
    venue: "",
    categories: ["Sports"],
    department: "",
    image: "",
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
    id: "40",
    title: "Table Tennis Men",
    description: "",
    date: "",
    dateTag: "7 Mar",
    time: "",
    venue: "",
    categories: ["Sports"],
    department: "",
    image: "",
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
    id: "41",
    title: "Handball Men",
    description: "",
    date: "",
    dateTag: "7 Mar",
    time: "",
    venue: "",
    categories: ["Sports"],
    department: "",
    image: "",
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
    id: "42",
    title: "Throwball Women",
    description: "",
    date: "",
    dateTag: "7 Mar",
    time: "",
    venue: "",
    categories: ["Sports"],
    department: "",
    image: "",
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
    id: "43",
    title: "Kabaddi Women",
    description: "",
    date: "",
    dateTag: "7 Mar",
    time: "",
    venue: "",
    categories: ["Sports"],
    department: "",
    image: "",
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
    id: "44",
    title: "Volleyball Women",
    description: "",
    date: "",
    dateTag: "7 Mar",
    time: "",
    venue: "",
    categories: ["Sports"],
    department: "",
    image: "",
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
    id: "45",
    title: "Chess Women",
    description: "",
    date: "",
    dateTag: "7 Mar",
    time: "",
    venue: "",
    categories: ["Sports"],
    department: "",
    image: "",
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
    id: "46",
    title: "Carroms Women",
    description: "",
    date: "",
    dateTag: "7 Mar",
    time: "",
    venue: "",
    categories: ["Sports"],
    department: "",
    image: "",
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
    id: "47",
    title: "Tennikoit Women",
    description: "",
    date: "",
    dateTag: "7 Mar",
    time: "",
    venue: "",
    categories: ["Sports"],
    department: "",
    image: "",
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





