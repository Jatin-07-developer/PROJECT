export const candidates = [
  { id: "CAND-001", name: "Sarah Johnson", role: "Senior Data Engineer", experience: 9, education: "MS Computer Science", completed: 30, firstTry: 20, commitDays: 28, strengths: ["RAG", "Vector Databases"], weak: ["Deployment"], completion: 97 },
  { id: "CAND-003", name: "Emily Chen", role: "AI Engineer", experience: 6, education: "MS Artificial Intelligence", completed: 31, firstTry: 30, commitDays: 31, strengths: ["Prompt Engineering", "Agentic AI"], weak: ["Production Systems"], completion: 100 },
  { id: "CAND-004", name: "David Miller", role: "Business Analyst", experience: 8, education: "MBA", completed: 28, firstTry: 6, commitDays: 18, strengths: ["Product Thinking", "Prompt Engineering"], weak: ["Deployment", "MCP"], completion: 90 },
  { id: "CAND-009", name: "Zara Ahmadi", role: "AI Engineer", experience: 1, education: "BS Computer Science", completed: 31, firstTry: 29, commitDays: 31, strengths: ["Vector Databases", "RAG"], weak: ["Multi-Agent Systems"], completion: 100 },
  { id: "CAND-010", name: "Gerald Combs", role: "IT Support Specialist", experience: 20, education: "AAS Information Tech", completed: 23, firstTry: 1, commitDays: 22, strengths: ["Security", "Support Systems"], weak: ["RAG", "Deployment"], completion: 74 },
  { id: "CAND-011", name: "Mia Alvarez", role: "Frontend Developer", experience: 3, education: "BS Information Systems", completed: 26, firstTry: 17, commitDays: 24, strengths: ["React", "API Integration"], weak: ["Production Systems", "MCP"], completion: 84 },
  { id: "CAND-016", name: "Isabella Rossi", role: "Junior ML Engineer", experience: 2, education: "BS Data Science", completed: 25, firstTry: 10, commitDays: 20, strengths: ["Embeddings", "Python"], weak: ["Agentic AI", "Deployment"], completion: 81 },
  { id: "CAND-018", name: "Diane Foster", role: "Principal Architect", experience: 14, education: "MS Software Engineering", completed: 31, firstTry: 28, commitDays: 31, strengths: ["Production Systems", "Architecture"], weak: ["Fine-tuning"], completion: 100 },
];

export const topics = ["RAG", "Prompt Engineering", "Vector Databases", "MCP", "Agentic AI", "AI Deployment", "Production Systems"];

export const questions = [
  { id: "Q01", day: 11, topic: "RAG", difficulty: "Foundations", question: "Walk me through a production RAG request from user question to final answer. Where can quality degrade?", ideal: ["retrieve", "chunk", "embedding", "ground", "rerank", "evaluate"], follow: "You mentioned retrieval. How would you diagnose a system that returns plausible but irrelevant chunks?" },
  { id: "Q02", day: 12, topic: "Prompt Engineering", difficulty: "Applied", question: "You inherit a prompt that works in demos but fails on edge cases. How would you make its behavior more reliable?", ideal: ["schema", "example", "test", "constraint", "eval", "version"], follow: "What would you put in an evaluation set before changing the prompt?" },
  { id: "Q03", day: 8, topic: "Vector Databases", difficulty: "Applied", question: "A vector search returns semantically similar documents but misses the most useful one. What trade-offs would you investigate?", ideal: ["hybrid", "metadata", "distance", "chunk", "filter", "recall"], follow: "When would hybrid keyword plus vector search be preferable to increasing embedding dimensions?" },
  { id: "Q04", day: 20, topic: "Conversation Memory", difficulty: "Scenario", question: "Design memory for a healthcare chatbot that must stay useful across a long conversation without leaking sensitive context.", ideal: ["summary", "window", "privacy", "context", "ttl", "consent"], follow: "How would you prevent a stale or incorrect memory from influencing a later answer?" },
  { id: "Q05", day: 23, topic: "MCP", difficulty: "Architecture", question: "Explain what MCP changes about connecting an AI agent to tools, and how you would secure an MCP server.", ideal: ["protocol", "tool", "permission", "schema", "auth", "audit"], follow: "If a tool can read patient records, which controls belong at the tool boundary rather than in the prompt?" },
  { id: "Q06", day: 21, topic: "Agentic AI", difficulty: "Architecture", question: "When is an agentic workflow justified over a deterministic chain? Describe the failure modes you would design for.", ideal: ["tool", "loop", "plan", "guardrail", "timeout", "fallback"], follow: "How would you stop an agent from repeatedly calling an expensive tool when it is not making progress?" },
  { id: "Q07", day: 28, topic: "AI Deployment", difficulty: "Scenario", question: "Your AI service is ready for Docker and Kubernetes. What would you check before exposing it to real traffic?", ideal: ["health", "secret", "scale", "limit", "rollback", "monitor"], follow: "What signal would trigger an automatic rollback after a new model version ships?" },
  { id: "Q08", day: 29, topic: "Production Systems", difficulty: "System design", question: "Design an evaluation and observability loop for an AI product used by thousands of people. What do you measure?", ideal: ["trace", "latency", "cost", "quality", "feedback", "drift"], follow: "How would you separate a model-quality regression from a retrieval or data-quality regression?" },
];

export const defaultCurriculum = { title: "AI Cohort", days: 31, modules: 8, topics };

export function scoreAnswer(answer, question) {
  const normalized = answer.toLowerCase();
  const hits = question.ideal.filter((word) => normalized.includes(word)).length;
  const depth = answer.length > 280 ? 2 : answer.length > 120 ? 1 : 0;
  return Math.min(10, Math.max(2, Math.round(3 + hits * 0.7 + depth)));
}