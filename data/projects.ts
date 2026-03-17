import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "1",
    title: "🔍 Research Assistant",
    description: "Multi-agent research pipeline powered by LangGraph + DuckDuckGo",
    fullDescription: `Multi-Agent Research Assistant built with LangGraph as part of my Agentic AI learning journey.

  Learning Context:
  • Built while progressing through Ed Donner's Agentic AI Engineering course (completed through Week 4: LangGraph)

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

  Learning Context:
  • Built as part of Ed Donner's Agentic AI Engineering course journey (up to Week 4: LangGraph)

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
      "AI career assistant for role guidance, decision support, and opportunity-focused recommendations",
    fullDescription: `Career Bot designed to help users evaluate opportunities and navigate career decisions.

  Learning Context:
  • Built during Ed Donner's Agentic AI Engineering course practice track (through Week 4: LangGraph)

Highlights:
• Understands user profile and intent
• Provides context-aware career guidance
• Suggests role-aligned improvements and next actions
• Delivers fast conversational support through a simple UI`,
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
];
