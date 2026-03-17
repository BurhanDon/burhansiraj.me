import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "1",
    title: "🔍 Research Assistant",
    description: "Multi-agent research pipeline powered by LangGraph + DuckDuckGo",
    fullDescription: `Multi-Agent Research Assistant built with LangGraph as part of my Agentic AI learning journey.

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
    githubUrl: "https://github.com/BurhanDon/research-assistant",
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
      "AI career assistant for role guidance, decision support, and opportunity-focused recommendations",
    fullDescription: `Career Bot designed to help users evaluate opportunities and navigate career decisions.

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
  },
];
