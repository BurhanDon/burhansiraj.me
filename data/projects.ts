import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "4",
    title: "🚀 SpaceX Falcon 9 Landing Prediction",
    description:
      "End-to-end data science pipeline to predict Falcon 9 first-stage landing success for launch cost and risk estimation",
    fullDescription: `This capstone project predicts whether Falcon 9 first-stage boosters will land successfully (1) or fail (0), helping estimate launch economics and risk.

Pipeline:
• Collected launch data from SpaceX REST APIs and historical records from Wikipedia
• Cleaned and transformed datasets with missing-value handling and one-hot encoding
• Performed EDA with SQL, visual analytics, and geospatial exploration
• Trained and compared Logistic Regression, SVM, Decision Tree, and KNN models
• Delivered an interactive dashboard for decision support and stakeholder analysis`,
    techStack: [
      "Python",
      "Pandas & NumPy",
      "Scikit-learn",
      "SQL",
      "REST APIs",
      "Feature Engineering",
      "Classification Modeling",
      "Streamlit",
    ],
    conceptsDemonstrated: [
      "Data Collection & Wrangling",
      "Exploratory Data Analysis",
      "Model Selection & Evaluation",
      "Geospatial Analytics",
      "Interactive Dashboarding",
      "Risk-aware Decision Support",
    ],
    liveUrl: "https://spacex-ds.streamlit.app/",
    githubUrl: "https://github.com/BurhanDon/SpaceX_DS_Capstone",
  },
  {
    id: "5",
    title: "🛍️ Baby Shop Hub",
    description:
      "Flutter mobile app with Firebase backend featuring authentication, product display, admin dashboard, and multi-page navigation",
    fullDescription: `A self-built mobile development project focused on delivering a practical e-commerce style app experience.

Highlights:
• Implemented login authentication flow with Firebase integration
• Built product listing and browsing experience
• Added admin dashboard capabilities for basic management workflows
• Structured the app across multiple pages with clean navigation

This project demonstrates my early mobile engineering foundation and ability to deliver complete feature flows independently.`,
    techStack: [
      "Flutter",
      "Firebase Authentication",
      "Cloud Firestore",
      "Mobile UI Architecture",
      "State Management",
    ],
    conceptsDemonstrated: [
      "Authentication Flow",
      "Multi-page Navigation",
      "Admin Workflow Design",
      "Mobile Data Integration",
      "End-to-End Feature Development",
    ],
    liveUrl: "https://burhans-portfolio.netlify.app/assets/Baby-proj.mp4",
    githubUrl: "https://github.com/BurhanDon/Flutter-App-Baby",
  },
  {
    id: "6",
    title: "📞 Iris AI",
    description:
      "AI-powered front desk / caller agent SaaS built with a friend using the MERN stack, handling AI call answering, booking, and confirmations",
    fullDescription: `Iris AI is an AI-powered front desk product for service businesses — an AI receptionist that answers calls, books appointments, sends confirmations, and logs call data automatically.

Built with a friend as a SaaS startup idea. Not taken to full completion / not actively maintained further.

Highlights:
• Built the AI caller agent using Vapi and Telnyx for voice, telephony routing, and call handling
• Implemented appointment booking synced to Google Calendar
• Automated email confirmations via Gmail integration
• Logged call records to Google Sheets
• Built an admin dashboard for call logs, transcripts, call summaries, and usage tracking
• Built supporting SaaS infrastructure: multi-workspace support, SMS (two-way + bulk), email campaigns, leads/CRM handling, billing via Stripe, and real-time updates via WebSockets`,
    techStack: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "Vapi",
      "Telnyx",
      "WebSockets",
      "Stripe",
      "Google Calendar API",
      "Gmail API",
    ],
    conceptsDemonstrated: [
      "AI voice agent orchestration",
      "Telephony integration",
      "Real-time systems",
      "SaaS multi-tenancy",
      "Third-party API integration",
      "Billing/subscription workflows",
    ],
    liveUrl: "https://app.iriscalls.com/",
  },
  {
    id: "7",
    title: "🧂 Pak Pink",
    description:
      "Business website built end-to-end for a Pakistani startup exporting Himalayan pink salt to B2B/wholesale buyers",
    fullDescription: `Pak Pink is a business website for a Pakistani local startup exporting Himalayan pink salt (edible salt, industrial salt, home decor, and private label products) to global B2B and wholesale clients.

Built completely by me, including live cloud configuration and deployment.

Highlights:
• Web-scraped product, pricing, and category data as the core method for populating the site's content
• Built full site structure: home, about, products (by category), private label, FAQ, contact
• Implemented product catalog pages across multiple categories (edible, industrial, decor, kitchen, wellness)
• Set up contact/quote request flow for B2B leads
• Handled live cloud setup and deployment on Vercel`,
    techStack: ["React", "Next.js", "Web Scraping", "Vercel"],
    conceptsDemonstrated: [
      "Web Scraping & Data Collection",
      "End-to-end site delivery",
      "Client project ownership",
      "Cloud deployment & configuration",
      "Product catalog architecture",
    ],
    liveUrl: "https://pakpink.com/",
  },
  {
    id: "9",
    title: "🪲 Isopod Keepers",
    description:
      "WordPress marketplace site built with a friend for an American startup serving the isopod-keeping hobbyist community",
    fullDescription: `Isopod Keepers is a community-driven marketplace platform for the isopod hobby, featuring auctions, seller and buyer profiles, and community-focused discovery.

Built as a WordPress site using Claude AI, together with a friend, for an American business startup.

Highlights:
• Built out auctions, seller directory, and buyer-facing marketplace pages
• Structured site around community trust: seller reputation, transparency, and accountability`,
    techStack: ["WordPress", "Claude AI"],
    conceptsDemonstrated: [],
    liveUrl: "https://isopodkeepers.com/",
  },
  {
    id: "10",
    title: "🧼 Moral Clean",
    description:
      "Business website built end-to-end for a Pakistani startup supplying commercial/industrial cleaning equipment to B2B clients",
    fullDescription: `Moral Clean is a business website for a Pakistani startup supplying commercial cleaning equipment, replacement parts, and technical service to industrial and facility operations.

Built completely by me, including live cloud configuration and deployment.

Highlights:
• Built full site structure: home, products (by category), services, blog, about, contact
• Implemented product catalog across equipment categories (scrubber dryers, vacuums, pressure cleaners, steam cleaners, etc.)
• Built services section covering motor repair, parts replacement, and maintenance offerings
• Handled live cloud setup and deployment on Vercel`,
    techStack: ["Next.js", "React", "Supabase", "Vercel"],
    conceptsDemonstrated: [],
    liveUrl: "https://moralclean.com/",
  },
];
