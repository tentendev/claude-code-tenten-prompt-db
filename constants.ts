import { Prompt, PromptCategory } from './types';

export const PROMPTS: Prompt[] = [
  // --- STRATEGY ---
  {
    id: 'strat-01',
    title: 'Blue Ocean Strategy for AI Agencies',
    category: PromptCategory.STRATEGY,
    description: 'Identify untapped market spaces for an AI-First consultancy in Taiwan.',
    tags: ['Strategy', 'Innovation', 'Market Analysis'],
    content: `Act as a senior strategy consultant similar to McKinsey or BCG, specializing in Digital Transformation and AI. 

Analyze the current digital agency landscape in Taiwan and APAC. Identify 3 "Blue Ocean" opportunities where Tenten.co can dominate by leveraging its "AI-First" positioning. 

Focus on:
1. Underserved industries ready for AI adoption (e.g., Traditional Manufacturing, Retail).
2. Service gaps in current HubSpot/MarTech implementations.
3. New revenue models beyond retainer-based services (e.g., AI-Agent-as-a-Service).

Output a strategic memo outlining these opportunities, required capabilities, and a risk assessment.`
  },
  {
    id: 'strat-02',
    title: 'Scenario Planning: The Future of Web Dev',
    category: PromptCategory.STRATEGY,
    description: 'Prepare for the commoditization of web design by Generative AI.',
    tags: ['Future Proofing', 'Web Design', 'GenAI'],
    content: `Assume the role of a Futurist in the Tech Industry. 

Scenario: By 2026, 80% of standard corporate websites can be built instantly by AI prompts. 
Question: How does Tenten.co pivot its core web design business to remain premium and essential?

Propose 3 strategic pivots:
1. Moving upstream into complex system architecture.
2. Focusing on hyper-personalized, dynamic AI-generated experiences.
3. Transitioning from "Web Builders" to "Digital Experience Architects".

Provide a roadmap for transitioning the current design/dev team skills to meet these new demands.`
  },
  {
    id: 'strat-03',
    title: 'Acquisition & Merger Evaluation',
    category: PromptCategory.STRATEGY,
    description: 'Framework for evaluating smaller agencies for M&A.',
    tags: ['M&A', 'Expansion', 'Business'],
    content: `Act as a Corporate Development Executive. 

I am looking to acquire boutique agencies in Taiwan to expand Tenten's capabilities. Create a weighted scorecard framework to evaluate potential targets. 

Criteria should include:
- Talent Density (AI readiness).
- Client Portfolio Quality (Enterprise vs. SMB).
- Tech Stack Alignment (HubSpot, Vercel, Python).
- Cultural fit for an agile, fast-paced AI consultancy.

Generate a list of 10 specific due-diligence questions to ask the target CEO during the first meeting.`
  },
  {
    id: 'strat-04',
    title: 'Quarterly OKR Generation',
    category: PromptCategory.STRATEGY,
    description: 'Draft high-impact OKRs for an AI agency.',
    tags: ['Management', 'OKRs', 'Goal Setting'],
    content: `Act as a Chief of Staff. 

Draft 3 ambitious Objectives and Key Results (OKRs) for the next quarter for Tenten.co.
Context: We want to double down on "AI Agent" development and increase HubSpot enterprise implementations.

Structure:
Objective 1: Market Leadership in AI Agents.
Objective 2: Operational Efficiency through internal AI usage.
Objective 3: Revenue Quality (High LTV Clients).

Ensure Key Results are quantitative (e.g., "Deploy 5 custom AI agents," "Reduce dev cycle time by 30%").`
  },
  {
    id: 'strat-05',
    title: 'Board Meeting Narrative',
    category: PromptCategory.STRATEGY,
    description: 'Structuring a compelling narrative for stakeholders.',
    tags: ['Communication', 'Leadership', 'Presentation'],
    content: `Act as a Communications Coach for Executives.

I have a board/stakeholder meeting coming up. I need to present a narrative that acknowledges a slow quarter in traditional web dev but highlights explosive growth in our AI consulting pipeline.

Write a 5-minute opening script that:
1. Owns the reality without being defensive.
2. Pivots immediately to the "New North Star" (AI integration).
3. Uses data storytelling to prove the shift is structural, not temporary.
4. Ends with a confident call to action for investment in R&D.`
  },
  {
    id: 'strat-06',
    title: 'Competitor Kill Sheet',
    category: PromptCategory.STRATEGY,
    description: 'Analyzing and countering traditional 4A advertising agencies.',
    tags: ['Competition', 'Sales', 'Analysis'],
    content: `Act as a Competitive Intelligence Analyst.

Compare Tenten.co (Agile, AI-Native, Tech-focused) against traditional "4A" advertising agencies in Taiwan (Ogilvy, Dentsu, etc.) who are trying to enter the tech space.

Create a "Kill Sheet" for my sales team:
1. Where are the traditional agencies weak? (Speed, technical depth, pricing models).
2. What specific "traps" can we set in RFP processes that they cannot answer?
3. How do we frame their "full-service" model as "bloated and slow" compared to our "specialized and autonomous" model?`
  },
  {
    id: 'strat-07',
    title: 'Pricing Model Innovation',
    category: PromptCategory.STRATEGY,
    description: 'Moving from hours to outcomes.',
    tags: ['Pricing', 'Business Model', 'Finance'],
    content: `Act as a Pricing Strategist.

Traditional agency billing (hourly) punishes efficiency. Since we use AI to work 5x faster, hourly billing destroys our revenue. 

Propose 3 alternative pricing models for Tenten.co:
1. Value-Based Pricing (tied to client revenue/leads).
2. Productized Service Subscriptions (AI-Audit-as-a-Service).
3. Licensing Fees for Custom AI Agents.

For each, explain how to sell it to a procurement department used to "buying hours".`
  },
  {
    id: 'strat-08',
    title: 'Global Expansion Strategy',
    category: PromptCategory.STRATEGY,
    description: 'Taking the agency beyond Taiwan.',
    tags: ['Globalization', 'Scale', 'Strategy'],
    content: `Act as an International Business Consultant.

Tenten.co wants to expand services to English-speaking markets (US/SG/AU) leveraging our cost-efficient but high-quality talent in Taiwan.

Develop a "Beachhead Strategy":
1. Which specific niche service is easiest to sell cross-border? (e.g., HubSpot Technical Setup, Webflow Dev, Custom GPTs).
2. What are the trust barriers and how do we solve them?
3. Outline a 6-month go-to-market plan with zero paid ads, focusing on outbound and partnerships.`
  },
  {
    id: 'strat-09',
    title: 'Crisis Management Simulation',
    category: PromptCategory.STRATEGY,
    description: 'Handling a major data leak or AI hallucination event.',
    tags: ['Crisis', 'PR', 'Risk'],
    content: `Act as a Crisis PR Expert.

Scenario: An AI agent we built for a major banking client hallucinated and promised a customer a loan rate that doesn't exist. The screenshot is viral on Threads/PTT.

Draft:
1. An immediate internal memo to the team (calm, factual, action-oriented).
2. A public statement for the Client to use (taking responsibility vs. explaining technical limitations).
3. A policy update for future AI deployments to prevent recurrence (Guardrails & Human-in-the-loop).`
  },

  // --- GROWTH & SALES ---
  {
    id: 'growth-01',
    title: 'Cold Outreach to Enterprise CEOs',
    category: PromptCategory.GROWTH,
    description: 'High-ticket sales emails using psychological triggers.',
    tags: ['Sales', 'Cold Email', 'B2B'],
    content: `Act as a Copywriter specializing in Enterprise Sales.

Draft a cold email sequence (3 emails) targeting CEOs of Manufacturing companies in Taiwan (Revenue > $50M). 

The Hook: They are losing market share to digital-first competitors.
The Value Prop: Tenten's "Digital Transformation + AI" approach isn't just marketing; it's business survival.
The CTA: A 15-minute "AI Readiness Audit" (not a sales call).

Tone: Respectful but provocative. "Challenger Sale" methodology.`
  },
  {
    id: 'growth-02',
    title: 'HubSpot Implementation Proposal',
    category: PromptCategory.GROWTH,
    description: 'Structuring a winning proposal for CRM migration.',
    tags: ['HubSpot', 'Proposal', 'Sales'],
    content: `Act as a Solution Architect and Sales Engineer.

I need to write the Executive Summary for a HubSpot CRM Migration proposal for a skeptical CFO. 

Key points to hit:
1. The cost of *inaction* (data silos, lost leads).
2. How Tenten's implementation automates 40% of their sales admin work using workflows.
3. ROI calculation: Show how the system pays for itself in 9 months.

Keep it concise, punchy, and financially driven.`
  },
  {
    id: 'growth-03',
    title: 'LinkedIn Authority Building',
    category: PromptCategory.GROWTH,
    description: 'Drafting viral thought leadership content.',
    tags: ['Social Media', 'LinkedIn', 'Personal Brand'],
    content: `Act as a Ghostwriter for a Tech CEO.

Topic: "Why most AI projects fail in 2024."
Stance: Companies focus on the model (LLM) instead of the data pipeline and workflow integration.

Write a LinkedIn post (Hook, Body, Insight, CTA).
- Use short sentences.
- Include a contrarian take.
- End with a question to drive engagement from other executives.
- Tone: Authoritative, slightly weary of "AI Hype", focused on "Real Results".`
  },
  {
    id: 'growth-04',
    title: 'Handling "Too Expensive" Objections',
    category: PromptCategory.GROWTH,
    description: 'Negotiation scripts for high-ticket services.',
    tags: ['Negotiation', 'Sales', 'Scripts'],
    content: `Act as a Negotiation Coach like Chris Voss.

A prospect loves our proposal for a comprehensive Digital Renewal ($100k USD) but says: "We love it, but you are 2x the price of the other agency."

Give me 3 specific verbal responses (scripts) to handle this:
1. The "Labeling" technique (It sounds like...).
2. Pivot to Value (Price vs. Cost of Failure).
3. Unbundling strategy (removing features without devaluing the core rate).`
  },
  {
    id: 'growth-05',
    title: 'Webinar Script: AI for Marketing Leaders',
    category: PromptCategory.GROWTH,
    description: 'Lead generation webinar structure.',
    tags: ['Marketing', 'Webinar', 'Script'],
    content: `Act as a Webinar Producer.

Outline a 45-minute webinar script targeting CMOs titled: "The Death of SEO and the Rise of AI Search."

Structure:
- The Problem: Google SGE and ChatGPT are stealing traffic.
- The Shift: Optimizing for LLMs instead of Keywords.
- The Tenten Solution: Building brand entities and authoritative data sources.
- The Offer: A specialized "AI Search Optimization" package.

Include cue points for slides and polls.`
  },
  {
    id: 'growth-06',
    title: 'Referral System Mechanics',
    category: PromptCategory.GROWTH,
    description: 'Building a B2B referral engine.',
    tags: ['Growth Hacking', 'Referrals', 'Partnerships'],
    content: `Act as a Growth Hacker.

Design a B2B referral program for Tenten.co. We want our existing happy clients to refer us to their network. 

Avoid: "Get $500 off." (Too cheap for enterprise).
Propose:
1. Incentives that offer *status* or *exclusive access* (e.g., Early access to our internal AI tools).
2. A streamlined "introduction kit" we can give clients to make referring easy.
3. Email templates for asking for the referral at the "Moment of Delight" (post-launch).`
  },
  {
    id: 'growth-07',
    title: 'Up-selling Retainer Clients',
    category: PromptCategory.GROWTH,
    description: 'Converting project clients to recurring revenue.',
    tags: ['Account Management', 'Sales', 'Retention'],
    content: `Act as a Key Account Manager.

We have a client on a basic Website Maintenance retainer. We want to upgrade them to a "Digital Growth Partner" retainer ($5k/mo increase).

Draft an email to set up the meeting.
Key angle: Reviewing their Q1 data, we found a massive missed opportunity in Automation that the current retainer doesn't cover. We want to show them the data.
Tone: Helpful, proactive, not salesy.`
  },
  {
    id: 'growth-08',
    title: 'Pitch Deck Narrative Arc',
    category: PromptCategory.GROWTH,
    description: 'Storytelling for the agency capabilities deck.',
    tags: ['Presentation', 'Pitch', 'Storytelling'],
    content: `Act as a Presentation Designer.

Review the standard agency credentials deck structure: "Who we are -> What we do -> Case Studies". It's boring.

Rewrite the narrative arc for Tenten.co to follow the "Hero's Journey":
1. The Ordinary World (Client's current chaotic digital state).
2. The Call to Adventure (The AI Disruption).
3. The Guide (Tenten.co with the map/tech).
4. The Transformation (The Case Study).

Detail what goes on the first 5 slides.`
  },
  {
    id: 'growth-09',
    title: 'Strategic Partnership Email (HubSpot)',
    category: PromptCategory.GROWTH,
    description: 'Getting attention from tech partners.',
    tags: ['Partnerships', 'Networking', 'HubSpot'],
    content: `Act as a Partnership Manager.

Draft an email to a Senior Partner Manager at HubSpot APAC.
Goal: We want Tenten.co to be featured in their next regional case study or webinar.

Highlight:
- Our recent complex integration for [Client Industry].
- Our unique "AI + CRM" angle.
- How featuring us helps *them* sell more Enterprise seats.
Keep it short, reciprocal, and high-value.`
  },

  // --- OPERATIONS & TEAM ---
  {
    id: 'ops-01',
    title: 'AI Policy for Employees',
    category: PromptCategory.OPERATIONS,
    description: 'Governance for internal AI usage.',
    tags: ['HR', 'Policy', 'Compliance'],
    content: `Act as a COO/Legal Counsel.

Draft an "Acceptable Use of AI Policy" for Tenten.co employees. 
We want to encourage AI use (ChatGPT, Midjourney, Github Copilot) but prevent IP leakage.

Cover:
1. No pasting confidential client data (PII/Financials) into public models.
2. Disclosure requirements (Must clients know if AI generated the code/copy?).
3. Copyright ownership of AI assets.
4. Mandatory review process (Human-in-the-loop) before shipping.`
  },
  {
    id: 'ops-02',
    title: 'Hiring the Head of AI',
    category: PromptCategory.OPERATIONS,
    description: 'Job description for a critical leadership role.',
    tags: ['Hiring', 'Recruitment', 'Leadership'],
    content: `Act as a Technical Recruiter.

Write a Job Description for a "Head of AI & Automation" at Tenten.co.
This is NOT a data scientist role. It is a practical, engineering-led role.

Key Responsibilities:
- Building internal AI agents to automate agency workflows.
- Leading the R&D on client-facing AI products.
- Training the design/dev teams on AI tools.

Requirements: Strong Python/JS, LangChain experience, understanding of Agency business models.`
  },
  {
    id: 'ops-03',
    title: 'SOP: Client Onboarding Automation',
    category: PromptCategory.OPERATIONS,
    description: 'Streamlining the first 14 days of a client relationship.',
    tags: ['Process', 'Automation', 'Onboarding'],
    content: `Act as an Operations Manager.

Outline a step-by-step Standard Operating Procedure (SOP) to automate Client Onboarding using HubSpot and Slack.

Steps to define:
1. Contract signed -> Auto-create Project in ClickUp/Asana.
2. Auto-send "Welcome Packet" email with data collection forms.
3. Auto-create shared Slack channel and invite team.
4. Schedule Kick-off call via Calendly link.

Identify which tools (Zapier/Make) are needed for each step.`
  },
  {
    id: 'ops-04',
    title: 'Performance Review: Underperforming Senior',
    category: PromptCategory.OPERATIONS,
    description: 'Managing difficult conversations.',
    tags: ['Management', 'HR', 'Feedback'],
    content: `Act as an HR Director.

I need to have a performance review with a Senior Designer who is talented but refuses to adopt new AI workflows (Midjourney/Figma AI), claiming it "lacks soul." They are slowing down the team.

Script the conversation:
1. Validate their artistry.
2. Explain the business necessity of speed/iteration.
3. Set a clear PIP (Performance Improvement Plan) goal related to AI adoption.
4. Make it clear that refusal to adapt is a career blocker at Tenten.`
  },
  {
    id: 'ops-05',
    title: 'Weekly All-Hands Agenda',
    category: PromptCategory.OPERATIONS,
    description: 'Running efficient, high-energy team meetings.',
    tags: ['Culture', 'Meetings', 'Leadership'],
    content: `Act as a Chief of Staff.

Design a 30-minute "All-Hands" meeting agenda that keeps energy high.
Avoid status updates (send those via email).

Include segments for:
- "The North Star" (CEO vision snippet - 5 mins).
- "Demo Day" (Showcase 1 cool thing built/designed this week - 10 mins).
- "Fail Fast" (Share a mistake and what we learned - creates psychological safety - 5 mins).
- "Kudos/Shoutouts" (5 mins).`
  },
  {
    id: 'ops-06',
    title: 'Project Post-Mortem Template',
    category: PromptCategory.OPERATIONS,
    description: 'Learning from finished projects.',
    tags: ['Project Management', 'Learning', 'Process'],
    content: `Act as a Project Management Lead.

Create a structured Post-Mortem (Retrospective) Notion template for when a project goes over budget.

Sections:
1. The Data (Estimated vs Actual hours).
2. The "Why" (5 Whys root cause analysis).
3. The Process Failure (Where did the SOP break?).
4. The Fix (What specific checklist item changes today?).
5. The Win (What actually went well?).`
  },
  {
    id: 'ops-07',
    title: 'Remote Culture Building',
    category: PromptCategory.OPERATIONS,
    description: 'Keeping a hybrid team connected.',
    tags: ['Culture', 'Remote Work', 'Team Building'],
    content: `Act as a Head of People.

Tenten.co operates hybrid/remote. Propose 3 low-friction initiatives to build culture without "Zoom fatigue."

Ideas to flesh out:
1. Asynchronous "Show your desk/lunch" threads.
2. "Lunch & Learn" sessions led by team members (not management).
3. A "Maker's Guild" channel for side projects.

Explain how to operationalize these so they don't die out after 2 weeks.`
  },
  {
    id: 'ops-08',
    title: 'Financial Dashboard Metrics',
    category: PromptCategory.OPERATIONS,
    description: 'What the CEO should look at every Monday.',
    tags: ['Finance', 'KPIs', 'Management'],
    content: `Act as a CFO for a Service Business.

List the 7 critical numbers I need on my Monday Morning Dashboard.
Don't just say "Revenue." Be specific to an agency model.

Include:
- Utilization Rate (Billable vs Non-Billable).
- Effective Hourly Rate (Revenue / Actual Hours).
- Pipeline Velocity (Days to Close).
- Client Concentration Risk (% of revenue from top client).
- Runway (in months).`
  },
  {
    id: 'ops-09',
    title: 'Knowledge Management System',
    category: PromptCategory.OPERATIONS,
    description: 'Organizing agency brainpower.',
    tags: ['Knowledge Base', 'Notion', 'Operations'],
    content: `Act as a Knowledge Operations Specialist.

We are drowning in Google Docs and Slack threads. Design the high-level architecture for a "Tenten Brain" in Notion or Obsidian.

Structure:
- The Playbooks (Immutable SOPs).
- The Lab (Experimental prompts/code snippets).
- The Client Vault (External deliverables).
- The Archive (Old stuff).

Explain the "Gardening" process: Who updates it and when?`
  },

  // --- PRODUCT & TECH ---
  {
    id: 'prod-01',
    title: 'AI Agent Architecture for Real Estate',
    category: PromptCategory.PRODUCT,
    description: 'Technical outline for a vertical-specific product.',
    tags: ['Product', 'AI Agents', 'Architecture'],
    content: `Act as a CTO / Systems Architect.

We want to build a specialized AI Agent for Real Estate Developers (a target client vertical). The agent needs to handle incoming lead inquiries 24/7 via WhatsApp/Line.

Outline the Tech Stack:
- LLM: (e.g., GPT-4o or Claude 3.5 Sonnet via API).
- Orchestration: (e.g., LangChain or Flowise).
- Knowledge Base: (RAG setup with vector DB for property details).
- Integration: (Twilio/Line API + HubSpot CRM).

Describe the data flow from "User sends message" to "Appointment booked in HubSpot".`
  },
  {
    id: 'prod-02',
    title: 'Next.js + Shopify Headless Stack',
    category: PromptCategory.PRODUCT,
    description: 'Defining the agency\'s standard e-commerce stack.',
    tags: ['Web Dev', 'E-commerce', 'Tech Stack'],
    content: `Act as a Principal Engineer.

Define the "Tenten Standard Stack" for high-performance headless e-commerce builds in 2024. 

Justify choices for:
- Frontend: Next.js 14 (App Router).
- CMS: Sanity or Strapi? (Pick one and argue why).
- Storefront: Shopify Storefront API.
- Styling: Tailwind CSS.
- Deployment: Vercel.

Explain why this stack is better for SEO and Speed than a standard Shopify Liquid theme.`
  },
  {
    id: 'prod-03',
    title: 'Code Review Guidelines for AI Code',
    category: PromptCategory.PRODUCT,
    description: 'Ensuring quality when Copilot writes the code.',
    tags: ['Engineering', 'Quality', 'AI'],
    content: `Act as a VP of Engineering.

Developers are using Cursor/Copilot heavily. We need updated Code Review Guidelines.

Add specific checks for AI-generated code:
1. Security (Hardcoded API keys, hallucinated packages).
2. Optimization (Did it write verbose, unoptimized loops?).
3. Understanding (Ask the dev to explain *how* the complex regex works).

Create a checklist for the Pull Request template.`
  },
  {
    id: 'prod-04',
    title: 'Rapid Prototyping Workflow',
    category: PromptCategory.PRODUCT,
    description: 'From idea to MVP in 48 hours.',
    tags: ['Product', 'MVP', 'Speed'],
    content: `Act as a Product Manager.

Design a "48-Hour Sprint" process for testing internal product ideas (e.g., a tool to auto-generate social captions).

Day 1:
- AM: Spec & Wireframe (v0.dev / Figma).
- PM: Core Logic (Python script / API test).

Day 2:
- AM: UI Wrapper (Streamlit / Next.js boilerplate).
- PM: Internal Demo & Kill/Keep decision.

Detail the specific tools that enable this speed.`
  },
  {
    id: 'prod-05',
    title: 'RAG Implementation Best Practices',
    category: PromptCategory.PRODUCT,
    description: 'Technical depth on Retrieval Augmented Generation.',
    tags: ['AI', 'RAG', 'Technical'],
    content: `Act as an AI Engineer.

We are building a Chatbot for a client's internal HR documents.
Explain the specific strategy for "Chunking" and "Retrieval" to avoid hallucinations.

- Chunk size recommendations (256 vs 512 tokens?).
- Overlap strategy.
- Hybrid Search (Keyword + Semantic).
- Re-ranking step (Cohere Rerank?).

Write this as a technical brief for a junior developer.`
  },
  {
    id: 'prod-06',
    title: 'Website Performance Optimization (Core Vitals)',
    category: PromptCategory.PRODUCT,
    description: 'Ensuring 100/100 Lighthouse scores.',
    tags: ['SEO', 'Performance', 'Web Dev'],
    content: `Act as a Performance Engineer.

A client's Next.js site has an LCP (Largest Contentful Paint) of 4.5s. That's failing Core Web Vitals.

Provide a diagnostic checklist to fix it:
1. Image optimization (Next/Image, WebP, priority loading).
2. Font loading strategies.
3. Third-party script delaying (GTM, Chat widgets).
4. Server-side rendering vs Static generation.

Prioritize the list by "Effort vs Impact".`
  },
  {
    id: 'prod-07',
    title: 'Evaluating No-Code Tools',
    category: PromptCategory.PRODUCT,
    description: 'When to use Webflow vs Custom Code.',
    tags: ['No-Code', 'Tech Strategy', 'Development'],
    content: `Act as a CTO.

Create a decision matrix for Sales to decide whether to pitch Webflow or Next.js to a client.

Factors:
- Budget (<$10k vs >$30k).
- Complexity (Marketing site vs Web App).
- Client Technical Capability (Can they maintain it?).
- Scalability needs.

Output a simple "If This, Then That" guide.`
  },
  {
    id: 'prod-08',
    title: 'AI Video Gen Workflow (Sora/Runway)',
    category: PromptCategory.PRODUCT,
    description: 'Integrating video AI into creative production.',
    tags: ['Video', 'Creative', 'AI'],
    content: `Act as a Creative Technologist.

Design a workflow for using Runway Gen-3 or OpenAI Sora (preview) for client social media assets.

Process:
1. Still Image Generation (Midjourney).
2. Motion Brush / Animation (Runway).
3. Upscaling (Topaz).
4. Editing & Text Overlay (Premiere/CapCut).

Explain how to sell this "Experimental Video" package to clients without overpromising consistency.`
  },
  {
    id: 'prod-09',
    title: 'Internal API Gateway Strategy',
    category: PromptCategory.PRODUCT,
    description: 'Managing API costs and access.',
    tags: ['Architecture', 'API', 'Security'],
    content: `Act as a DevOps Engineer.

As we scale, every dev using their own OpenAI key is a security risk and cost nightmare. 
Outline the architecture for a centralized "Tenten AI Gateway" (using Cloudflare Workers or similar).

Features needed:
- Rate limiting per user/project.
- Caching common responses (to save money).
- Model routing (fallback to cheaper models for simple queries).
- Logging for audit trails.`
  },

  // --- BRAND & CONTENT ---
  {
    id: 'brand-01',
    title: 'CEO Personal Brand Manifesto',
    category: PromptCategory.BRAND,
    description: 'Defining the voice of the leader.',
    tags: ['Personal Brand', 'Marketing', 'Identity'],
    content: `Act as a Brand Strategist.

Define the "Brand Archetype" for the CEO of Tenten.co.
Mix: The Visionary (Magician) + The Realist (Ruler).

Keywords: Future-focused, Pragmatic, Elegant, Direct.
Avoid: Tech jargon salad, over-hyped "AI will save us" rhetoric.
Voice: "I've built this, here is the data," not "I think this."

Write a 150-word bio for the "About Us" page reflecting this persona.`
  },
  {
    id: 'brand-02',
    title: 'Case Study: From Chaos to Order',
    category: PromptCategory.BRAND,
    description: 'Writing a case study that sells transformation.',
    tags: ['Content', 'Case Study', 'Copywriting'],
    content: `Act as a Copywriter.

Write a Case Study headline and intro for a manufacturing client digital transformation project.

Instead of "We built a website," frame it as "We saved a legacy giant from irrelevance."
- Challenge: 30 years of fragmented data, losing sales to agile startups.
- Solution: A unified HubSpot + Custom Portal ecosystem.
- Result: 200% increase in digital leads in 90 days.

Make the copy emotional yet data-backed.`
  },
  {
    id: 'brand-03',
    title: 'Newsletter Content Strategy',
    category: PromptCategory.BRAND,
    description: 'Weekly insights for the mailing list.',
    tags: ['Email Marketing', 'Content', 'Strategy'],
    content: `Act as an Editor-in-Chief.

Plan the next 4 weeks of the "Tenten Insights" newsletter.
Target Audience: C-Suite Execs in Taiwan.

Themes:
Week 1: The ROI of Design Systems.
Week 2: Why your CRM is an empty shell (and how to fix it).
Week 3: AI Agents: The new receptionists.
Week 4: Client Spotlight (Interview style).

Write the catchy subject lines for each.`
  },
  {
    id: 'brand-04',
    title: 'Video Script: "Day in the Life"',
    category: PromptCategory.BRAND,
    description: 'Recruitment marketing content.',
    tags: ['Video', 'Recruiting', 'Culture'],
    content: `Act as a Video Director.

Script a 60-second Instagram Reel / TikTok for recruitment.
Concept: "Not your average agency."

Visuals:
- Fast cuts of code on screen (Dark mode).
- Whiteboard sessions (Strategy).
- Coffee/Team lunch (Culture).
- No ping pong tables, just serious work.

Voiceover: "You don't come here to play. You come here to build the future of digital in Taiwan. If you're ready to ship, join Tenten."`
  },
  {
    id: 'brand-05',
    title: 'Whitepaper Outline: The AI-First Enterprise',
    category: PromptCategory.BRAND,
    description: 'Lead magnet for enterprise clients.',
    tags: ['Content', 'Lead Magnet', 'B2B'],
    content: `Act as a Research Analyst.

Outline a 10-page Whitepaper titled: "The AI-First Enterprise: A Playbook for Taiwanese Executives."

Chapters:
1. The Global Context (Why Taiwan is falling behind in software).
2. The Data Foundation (You can't have AI without clean data).
3. The Talent Gap (Reskilling vs Hiring).
4. The Roadmap (3-month, 6-month, 1-year plan).

This will be a gated download to capture CEO emails.`
  },
  {
    id: 'brand-06',
    title: 'Instagram Carousel Text',
    category: PromptCategory.BRAND,
    description: 'Educational content for social.',
    tags: ['Social Media', 'Design', 'Education'],
    content: `Act as a Social Media Manager.

Create the text overlay for a 5-slide Instagram Carousel: "5 Signs Your Website is Bleeding Money."

Slide 1: Hook (Is your bounce rate over 60%?).
Slide 2: Mobile Responsiveness (Google hates you if you aren't mobile-first).
Slide 3: Speed (Every second delay = 7% conversion drop).
Slide 4: The confusing CTA (Don't make them think).
Slide 5: The Fix (DM us "AUDIT" for a free check).`
  },
  {
    id: 'brand-07',
    title: 'Event Keynote Structure',
    category: PromptCategory.BRAND,
    description: 'Speaking at a tech conference.',
    tags: ['Public Speaking', 'Events', 'Leadership'],
    content: `Act as a Speechwriter.

Topic: "Design Engineering in the Age of AI."
Audience: Designers and Developers.

Structure the talk:
- The "Old Way": Designers hand off static Figma files. Devs complain.
- The "New Way": Designers code (a bit), AI bridges the gap.
- Prediction: The "Unicorn" (Designer+Dev) is no longer a myth, AI makes it the standard.
- Call to Action: Stop fighting the tools, start orchestrating them.`
  },
  {
    id: 'brand-08',
    title: 'Podcast Interview Prep',
    category: PromptCategory.BRAND,
    description: 'Talking points for a guest appearance.',
    tags: ['PR', 'Media', 'Interview'],
    content: `Act as a Media Trainer.

I'm going on a popular Tech Startups podcast.
Prepare 3 "Soundbites" (short, memorable quotes) on these topics:

1. On the Taiwan Tech Scene: (Focus on hardware strength vs software weakness).
2. On Agency Life: (It's not about billing hours, it's about solving problems).
3. On AI Fear: (AI won't replace you, a person using AI will).

Make them tweetable.`
  },
  {
    id: 'brand-09',
    title: 'Client "Thank You" Experience',
    category: PromptCategory.BRAND,
    description: 'High-touch gifting strategy.',
    tags: ['CX', 'Gifting', 'Brand'],
    content: `Act as a Customer Experience Designer.

We just launched a massive project. We want to send a "Launch Gift" to the core client team (CMO + Project Leads).

Ideas (Budget $200/person):
- Avoid generic swag (T-shirts/Mugs).
- Idea 1: Curated "Deep Work" kit (High-end notebook, focus timer, premium coffee).
- Idea 2: Donation in their name to a "Girls in Tech" charity (CSR angle).
- Idea 3: Custom framed print of their new homepage (Artistic style).

Write the handwritten note to accompany Idea 1.`
  }
];

export const PILLAR_DESCRIPTIONS = {
  [PromptCategory.STRATEGY]: "Blue ocean thinking, M&A frameworks, and high-level vision for the agency's future.",
  [PromptCategory.GROWTH]: "Tactics for enterprise sales, proposal writing, and establishing market authority.",
  [PromptCategory.OPERATIONS]: "Internal SOPs, culture building, and frameworks for efficient management.",
  [PromptCategory.PRODUCT]: "Technical stacks, AI R&D, and engineering workflows for the modern web.",
  [PromptCategory.BRAND]: "Narrative building, content strategy, and public relations for the CEO."
};

export const FEATURED_TAGS = [
  'Strategy', 'HubSpot', 'AI Agents', 'Sales', 'Management', 'Web Dev', 'Personal Brand'
];