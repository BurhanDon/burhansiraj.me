import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "1",
    title: "🔍 Research Assistant",
    description: "Multi-agent research pipeline powered by LangGraph + DuckDuckGo",
    fullDescription: `Multi-Agent Research Assistant built with LangGraph for structured, high-quality research output.

Pipeline:
• Planner — breaks your query into 3 focused sub-questions using structured LLM output
• Researcher — searches the web via DuckDuckGo for each sub-question using tool calling
• Supervisor — evaluates research quality and decides to retry or proceed
• Analyst — synthesizes all findings into coherent insights
• Writer — produces a clean, structured markdown report`,
    techStack: [
      "LangGraph",
      "StateGraphs & Conditional Edges",
      "Tool Integration",
      "LLM Orchestration",
      "Web Search Integration",
      "Structured Output Parsing",
    ],
    conceptsDemonstrated: [
      "StateGraph",
      "Conditional edges",
      "Reducers",
      "Tool calling",
      "Subgraphs",
      "Supervisor pattern",
      "Checkpointing",
      "Async streaming",
      "Multi-LLM Evaluation",
    ],
    liveUrl: "https://huggingface.co/spaces/BurhanDon/research-assistant",
  },
  {
    id: "2",
    title: "🧠 Deep Research Agent",
    description:
      "Agentic deep research workflow for collecting, validating, and synthesizing multi-source insights",
    fullDescription: `Deep Research Agent focused on long-form, evidence-driven output generation.

Highlights:
• Runs multi-step research loops to refine query understanding
• Gathers supporting evidence from multiple sources
• Synthesizes findings into structured, decision-ready output
• Optimized for practical AI-assisted research use-cases`,
    techStack: ["LangGraph", "LLM Orchestration", "State Machines", "Tool Integration", "Iterative Reasoning"],
    conceptsDemonstrated: [
      "Research orchestration",
      "Iterative reasoning",
      "Evidence synthesis",
      "Structured output generation",
    ],
    liveUrl: "https://huggingface.co/spaces/Eng-Burhan/deep-research",
  },
  {
    id: "3",
    title: "🎯 Career Bot",
    description:
      "Personal career chatbot that answers questions about my work history using LinkedIn-based context and fallback lead-capture tools",
    fullDescription: `A lightweight chatbot that answers current and slightly older information about my career and work history from my LinkedIn profile context.

Highlights:
• Handles profile-based Q&A, including full-career summary style questions
• Uses fallback tools to collect contact details (name, email, notes) when answers are unavailable
• Logs unanswered questions for later review and improvement
• Runs on a free API tier with daily quota limits (can show quota errors after limit is reached)

Note:
• The bot is trained on an older snapshot of my profile and may not reflect the most recent updates`,
    techStack: ["LLM Tool Calling", "Multi-turn Conversation", "Context Management", "Prompt Engineering", "UI Integration"],
    conceptsDemonstrated: [
      "Conversational AI",
      "Context-aware response generation",
      "User intent handling",
      "Actionable recommendation flow",
    ],
    liveUrl: "https://huggingface.co/spaces/Eng-Burhan/career_bot",
    githubUrl: "https://huggingface.co/spaces/Eng-Burhan/career_bot/tree/main",
  },
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
];
