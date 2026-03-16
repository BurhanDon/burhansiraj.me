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
      "LangChain",
      "SambaNova (Llama 3.3 70B)",
      "Groq",
      "DuckDuckGo",
      "LangSmith",
      "Gradio",
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
      "HF Spaces deployment",
    ],
    liveUrl: "https://huggingface.co/spaces/BurhanDon/research-assistant",
    githubUrl: "https://github.com/BurhanDon/research-assistant",
  },
];
