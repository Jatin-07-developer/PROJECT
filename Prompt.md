//Prompt generation for AI

You are a Senior AI Solutions Architect, Senior Full Stack Engineer, and Product Designer.

Your task is to design and build a production-ready AI Interview Agent for the ABTalks AI Cohort.

The application should look and behave like a modern SaaS AI platform with a professional UI, intelligent conversation flow, and scalable architecture.

====================================================
PROJECT OVERVIEW
====================================================

Build an AI-powered Interview Platform that conducts personalized technical interviews for candidates who completed the ABTalks AI Engineering Cohort.

The AI interviewer should simulate a real technical interviewer.

The interview must adapt based on:

* Candidate progress
* Completed curriculum
* Previous answers
* Confidence level
* Mistakes
* Strengths
* Weak areas

The goal is to evaluate understanding rather than memorization.

The AI should ask follow-up questions naturally just like a human interviewer.

====================================================
AVAILABLE INPUTS
====================================================

The system receives:

1. Curriculum JSON

Contains:

- 31 learning days
- Topics
- Modules
- Learning objectives
- Technologies
- Skills

2. Candidate Profile JSON

Contains:

- Candidate name
- Completed days
- Skipped days
- Attempts
- Learning signals
- Progress
- Weak topics
- Strong topics

3. Technical Specification

Contains

- API format
- Required endpoint
- Response structure

====================================================
OBJECTIVES
====================================================

The AI Interviewer must

✓ Conduct realistic interviews

✓ Ask intelligent questions

✓ Adapt difficulty dynamically

✓ Ask follow-up questions

✓ Remember previous answers

✓ Avoid asking already failed questions repeatedly

✓ Cover multiple curriculum topics

✓ Evaluate conceptual understanding

✓ Evaluate practical engineering thinking

✓ Give actionable feedback

====================================================
INTERVIEW FLOW
====================================================

Interview contains:

STEP 1

Greeting

Introduce yourself professionally.

Explain interview structure.

Mention estimated duration.

STEP 2

Warm-up

Ask about the candidate's learning journey.

Example:

"What project are you most proud of during the cohort?"

STEP 3

Technical Interview

Generate at least 8 technical questions.

Requirements:

Minimum 4 curriculum days

Mix difficulty

Cover:

* RAG

* Prompt Engineering

* Vector Databases

* MCP

* Agentic AI

* AI Deployment

* Production Systems

Question types:

Conceptual

Scenario-based

Debugging

Architecture

System Design

Trade-offs

Best Practices

====================================================
FOLLOW-UP QUESTIONS
====================================================

After every answer:

Analyze:

Confidence

Correctness

Completeness

Depth

If answer is vague:

Ask follow-up.

If partially correct:

Probe deeper.

If incorrect:

Guide candidate.

Then ask another question.

Never move mechanically.

Interview should feel human.

====================================================
AI MEMORY
====================================================

Maintain conversation state.

Track:

Current question

Asked topics

Answered topics

Weak areas

Strong areas

Previous mistakes

Difficulty level

Do not ask duplicate questions.

Avoid repetitive follow-ups.

====================================================
SCORING SYSTEM
====================================================

Evaluate each answer on

Concept Understanding

Accuracy

Reasoning

Communication

Practical Thinking

Engineering Decisions

Score each:

0-10

Maintain cumulative score.

====================================================
FINAL REPORT
====================================================

Generate structured feedback.

Include:

Overall Score

Topic-wise Score

Strong Areas

Weak Areas

Confidence Level

Recommended Revision Topics

Suggested Next Projects

Hiring Recommendation

Example:

{
  "overallScore": 83,
  "communication": 9,
  "reasoning": 8,
  "technicalAccuracy": 8,
  "strengths": [
      "Prompt Engineering",
      "Vector Databases"
  ],
  "weaknesses":[
      "MCP",
      "Production Deployment"
  ],
  "recommendations":[
      "...",
      "...",
      "..."
  ]
}

====================================================
SYSTEM PROMPT FOR AI
====================================================

Behave like an experienced Staff AI Engineer interviewing an engineer.

Never reveal answers immediately.

Encourage thinking.

Ask one question at a time.

Use conversational language.

Challenge assumptions.

Ask "why?"

Ask "how?"

Ask "what if?"

Prefer depth over breadth.

Never sound robotic.

====================================================
APPLICATION REQUIREMENTS
====================================================

Build a complete production-ready web application.

Tech Stack

Frontend

Next.js 15

React 19

TypeScript

TailwindCSS

shadcn/ui

Framer Motion

Lucide Icons

Backend

Node.js

Next.js API Routes

or FastAPI

AI

OpenAI GPT-5.5 (configurable)

Support Gemini

Support Claude

Environment variables

Database

PostgreSQL

Prisma ORM

Optional Redis

====================================================
PAGES
====================================================

Landing Page

Professional hero section

Features

How it works

CTA

Candidate Dashboard

Profile

Interview History

Progress

Resume Interview

Interview Page

Chat interface

Question card

Timer

Progress indicator

Current topic

Previous messages

Typing animation

Feedback Page

Score cards

Radar chart

Strengths

Weaknesses

Recommendations

Export PDF

Admin Page

Upload Curriculum JSON

Upload Candidate Profiles

Configure Model

Prompt Templates

====================================================
UI DESIGN
====================================================

Theme

Minimal

Professional

Modern AI SaaS

Inspired by

OpenAI

Linear

Vercel

Perplexity

Use

Rounded cards

Soft shadows

Glassmorphism

Dark mode

Responsive

Excellent spacing

====================================================
AGENT ARCHITECTURE
====================================================

Use Agentic workflow.

Components

Curriculum Retriever

Candidate Analyzer

Question Generator

Conversation Memory

Difficulty Controller

Feedback Generator

Evaluation Engine

Architecture

User

↓

Interview API

↓

AI Orchestrator

↓

Curriculum Retriever

↓

Conversation Memory

↓

LLM

↓

Scoring Engine

↓

Feedback Generator

====================================================
PROMPT ENGINEERING
====================================================

Use:

System Prompt

Developer Prompt

Conversation Memory

Curriculum Context

Candidate Context

Current Evaluation

Previous Answers

Question History

====================================================
API
====================================================

Create endpoint exactly matching technical specification.

Example

POST

/api/interview

Request

{
    "candidateId":"",
    "message":"",
    "conversation":[]
}

Response

{
    "reply":"",
    "score":{},
    "nextQuestion":"",
    "completed":false
}

====================================================
CODE QUALITY
====================================================

Use clean architecture.

Reusable components.

Custom hooks.

Server actions.

Error boundaries.

Loading states.

Type safety.

Proper folder structure.

Unit-test friendly.

Environment configuration.

====================================================
BONUS FEATURES
====================================================

Include:

Speech-to-text

Text-to-speech

Interview timer

Difficulty selector

Live scoring

Markdown rendering

Syntax highlighting

Code questions

Diagram support

Analytics dashboard

PDF feedback

Export JSON

Multiple interview modes

Mock Interview

Practice Mode

Assessment Mode

Company-specific Mode

====================================================
DELIVERABLE
====================================================

Produce the complete production-ready codebase.

Include:

Folder structure

All frontend pages

Backend APIs

Prompt templates

Database schema

Prisma models

Reusable components

Hooks

Interview agent

Memory management

Scoring engine

Feedback generator

README

Installation guide

Deployment guide

Docker support

Environment variables

The final application should be polished enough to demonstrate at a professional hackathon and should feel like an enterprise AI interviewing platform.


// Instructions for the Final Website ....

Now, develop the final website according to the following requirements:
1. No Backend Integration: Build the website without integrating a backend or requiring server-side infrastructure.
2. Completely Free to Use: Ensure that the website does not require any paid services, subscriptions, or API-based services that could incur additional costs.
3. Predefined Interview Questions: Store and implement all interview questions directly within the application using a predefined, scripted question bank. This eliminates the need for external API calls and helps avoid costs associated with AI API usage.
4. Local Development: Structure the project so that it can be easily set up, executed, and tested locally using VS Code.
5. Deployment Ready: Ensure the website is properly structured and optimized so that it can be deployed online easily whenever required.
6. Maintainable Structure: Keep the codebase clean, modular, and well-organized so that future features or modifications can be implemented without difficulty.






// Step-by-Step Process for Building the Website ....
1. Initial Prompt Development
    I first created a rough prompt that provided the AI with clear instructions for generating a well-structured and detailed prompt. This refined prompt could then be provided to other AI development tools to generate a functional website.
2. Testing Across Multiple AI Tools
    Once the final prompt was prepared, I provided it to several different AI development tools to evaluate the quality, functionality, and overall output produced by each platform.
3. Comparing and Selecting the Best Version
    After the websites were generated, I thoroughly compared the results from each AI tool and selected the version that best matched the desired visual style, functionality, user experience, and overall project vision.
4. Analyzing and Identifying Improvements
    I then reviewed the selected website in detail and documented all its existing features and functionalities. I also identified areas that required modification, enhancement, or additional functionality to make the website more complete and effective.
5. Implementing the Required Changes
    After preparing a detailed list of improvements, I returned to the selected AI development tool and provided the necessary instructions to implement all the major changes and enhancements.
6. Finalization and Deployment
    After completing the final modifications and verifying that the website was functioning as intended, the project was considered ready for deployment and hosting online.


// Some extra steps that i have taken while building this site ....
While developing the website, I experimented with and evaluated several AI-powered development tools, including Claude, Gemini, Cursor, Emergent, Durable, and GPT, to explore different approaches and improve the overall development process.

During this process, I encountered several technical challenges, including token limitations, code-generation issues, compatibility problems, and instances where AI-generated code did not function correctly in VS Code or the selected code execution environment.

To troubleshoot and resolve these issues, I used AI tools such as GPT and Claude to analyze errors, debug the generated code, identify compatibility issues, and implement the necessary corrections.

This iterative process helped me refine the code, resolve technical issues, and ensure that the final website functioned reliably in the intended development environment.