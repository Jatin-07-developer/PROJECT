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




// Instructions for the final website 

Now make a website without integrating backend to this and also make this a free (without any payment) website 
make all the interview questions scripted so that there is no need to call the api this can save me from paying money to different ai for making api calls to them also make this website in such a way so that it can be run on vs code and if i want to deploy this site then this can be deployed easily



// Some extra steps that i have taken while building this site ...
