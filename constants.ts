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
  },

  // --- CONSULTING: SEO & GEO ---
  {
    id: 'seo-01',
    title: 'GEO Strategy for AI Search Dominance',
    category: PromptCategory.SEO_GEO,
    description: 'Optimize content for Generative Engine Optimization in the AI era.',
    tags: ['GEO', 'AI Search', 'Strategy'],
    content: `Act as a Search Optimization Strategist specializing in Generative Engine Optimization (GEO).

Analyze how to position Tenten.co's content strategy for AI-powered search engines (ChatGPT, Perplexity, Google SGE).

Develop a comprehensive GEO strategy:
1. Entity Building - How to make Tenten a recognizable entity for LLMs.
2. Citation Optimization - How to become a cited source in AI responses.
3. Content Architecture - Structure that LLMs can easily parse and reference.
4. Authority Signals - Building topical authority that AI recognizes.
5. Measurement Framework - How to track GEO success when traditional rankings matter less.

Provide specific implementation tactics for each pillar.`
  },
  {
    id: 'seo-02',
    title: 'Local SEO for Multi-Location Agency',
    category: PromptCategory.SEO_GEO,
    description: 'Dominate local search across Taiwan and APAC markets.',
    tags: ['Local SEO', 'Google Business', 'APAC'],
    content: `Act as a Local SEO Expert.

Design a local SEO strategy for Tenten.co to dominate searches in Taipei and expand to other APAC markets.

Cover:
1. Google Business Profile optimization for service-based businesses.
2. Local citation building strategy for Taiwan market.
3. Review acquisition system for B2B services.
4. Location page strategy (if expanding to Singapore, Hong Kong).
5. Local link building tactics in Taiwan's digital ecosystem.

Include a 90-day implementation roadmap prioritized by impact.`
  },
  {
    id: 'seo-03',
    title: 'Technical SEO Audit Framework',
    category: PromptCategory.SEO_GEO,
    description: 'Comprehensive technical SEO checklist for client websites.',
    tags: ['Technical SEO', 'Audit', 'Performance'],
    content: `Act as a Technical SEO Consultant.

Create a comprehensive Technical SEO Audit framework that Tenten.co can use for client websites.

Structure the audit:
1. Crawlability & Indexation (robots.txt, sitemaps, crawl budget).
2. Site Architecture (URL structure, internal linking, breadcrumbs).
3. Core Web Vitals (LCP, FID, CLS with specific thresholds).
4. Mobile Experience (mobile-first indexing requirements).
5. Schema Markup (relevant structured data for different site types).
6. International SEO (hreflang for multi-language Taiwan sites).

Provide severity scoring (Critical/High/Medium/Low) for each issue type.`
  },
  {
    id: 'seo-04',
    title: 'Content Gap Analysis Process',
    category: PromptCategory.SEO_GEO,
    description: 'Identify and fill content gaps to outrank competitors.',
    tags: ['Content Strategy', 'Competitor Analysis', 'Keywords'],
    content: `Act as an SEO Content Strategist.

Develop a systematic Content Gap Analysis process for Tenten.co to use with clients.

Include methodology for:
1. Competitor content inventory mapping.
2. Keyword opportunity identification (volume vs difficulty matrix).
3. Search intent classification and content format matching.
4. Topic cluster development for topical authority.
5. Content brief templates that drive rankings.
6. Content calendar prioritization framework.

Show how to present findings to clients with business impact projections.`
  },
  {
    id: 'seo-05',
    title: 'Link Building Strategy for B2B Tech',
    category: PromptCategory.SEO_GEO,
    description: 'Ethical link acquisition for technology consultancies.',
    tags: ['Link Building', 'B2B', 'Digital PR'],
    content: `Act as a Link Building Strategist.

Create a sustainable link building strategy for Tenten.co and its B2B tech clients.

Tactics to detail:
1. Digital PR campaigns for Taiwan tech media.
2. Data-driven content that earns natural links.
3. Guest contribution strategy (where to pitch, how to pitch).
4. Partnership and co-marketing link opportunities.
5. Resource link building (tools, templates, guides).
6. Broken link building in the tech/marketing space.

Include outreach templates and success metrics.`
  },

  // --- CONSULTING: SOCIAL MEDIA GROWTH ---
  {
    id: 'social-01',
    title: 'LinkedIn B2B Growth Playbook',
    category: PromptCategory.SOCIAL_MEDIA,
    description: 'Systematic approach to LinkedIn for enterprise lead generation.',
    tags: ['LinkedIn', 'B2B', 'Lead Generation'],
    content: `Act as a LinkedIn Growth Strategist.

Design a comprehensive LinkedIn growth playbook for Tenten.co targeting enterprise clients in Taiwan and APAC.

Cover:
1. Profile optimization for company page and key employees.
2. Content pillars and posting cadence strategy.
3. Employee advocacy program structure.
4. LinkedIn engagement strategy (commenting, sharing, connecting).
5. LinkedIn Ads strategy for ABM campaigns.
6. Lead generation through organic and paid channels.

Include KPIs and realistic growth benchmarks for a B2B agency.`
  },
  {
    id: 'social-02',
    title: 'Video-First Social Strategy',
    category: PromptCategory.SOCIAL_MEDIA,
    description: 'Leverage short-form video for agency brand building.',
    tags: ['Video', 'TikTok', 'Reels'],
    content: `Act as a Social Video Strategist.

Create a video-first content strategy for Tenten.co across TikTok, Instagram Reels, and YouTube Shorts.

Define:
1. Content formats that work for B2B agencies (behind-the-scenes, tutorials, thought leadership).
2. Production workflow that doesn't require a dedicated video team.
3. Repurposing strategy (one shoot → multiple platforms).
4. Trend-jacking playbook for professional services.
5. Community building through video content.
6. Conversion paths from video viewers to leads.

Include a content calendar template and production checklist.`
  },
  {
    id: 'social-03',
    title: 'Community Building Framework',
    category: PromptCategory.SOCIAL_MEDIA,
    description: 'Build an engaged community around AI and digital transformation.',
    tags: ['Community', 'Engagement', 'Brand Building'],
    content: `Act as a Community Manager.

Design a community building strategy for Tenten.co to create a thriving ecosystem around AI adoption in Taiwan.

Include:
1. Platform selection (Discord, Slack, Facebook Groups, LINE).
2. Community value proposition and positioning.
3. Content and programming calendar.
4. Member journey from lurker to advocate.
5. Moderation guidelines and community culture.
6. Monetization paths (events, consulting, courses).

Show how community becomes a lead generation channel.`
  },
  {
    id: 'social-04',
    title: 'Influencer Collaboration Strategy',
    category: PromptCategory.SOCIAL_MEDIA,
    description: 'Partner with tech influencers for brand amplification.',
    tags: ['Influencers', 'Partnerships', 'Marketing'],
    content: `Act as an Influencer Marketing Strategist.

Develop an influencer collaboration strategy for Tenten.co in the Taiwan tech ecosystem.

Cover:
1. Influencer identification criteria for B2B tech.
2. Outreach approach and pitch templates.
3. Collaboration formats (guest posts, webinars, co-created content).
4. Compensation models for different influencer tiers.
5. Campaign measurement framework.
6. Long-term relationship building vs one-off campaigns.

Include a target influencer list framework and ROI calculation method.`
  },
  {
    id: 'social-05',
    title: 'Social Listening for Business Intelligence',
    category: PromptCategory.SOCIAL_MEDIA,
    description: 'Turn social data into competitive insights.',
    tags: ['Social Listening', 'Analytics', 'Insights'],
    content: `Act as a Social Intelligence Analyst.

Create a social listening program for Tenten.co to gather competitive and market intelligence.

Define:
1. Keywords and topics to monitor (brand, competitors, industry).
2. Tool recommendations for Taiwan market (including Chinese language).
3. Alert systems for opportunities and crises.
4. Monthly reporting framework for insights.
5. How to turn insights into actionable strategies.
6. Sentiment analysis for brand health tracking.

Include a dashboard template and example insights report.`
  },

  // --- CONSULTING: AI TRANSFORMATION ---
  {
    id: 'ai-consult-01',
    title: 'Enterprise AI Readiness Assessment',
    category: PromptCategory.AI_CONSULTING,
    description: 'Evaluate an organization\'s preparedness for AI adoption.',
    tags: ['Assessment', 'Enterprise', 'Digital Transformation'],
    content: `Act as an AI Transformation Consultant.

Design a comprehensive AI Readiness Assessment framework that Tenten.co can use with enterprise clients.

Assessment areas:
1. Data Maturity (quality, accessibility, governance).
2. Technical Infrastructure (cloud, APIs, integration capabilities).
3. Talent & Skills (current AI capabilities, training needs).
4. Process Readiness (workflows suitable for AI augmentation).
5. Cultural Readiness (change management, leadership buy-in).
6. Use Case Prioritization (impact vs feasibility matrix).

Create a scoring rubric with specific indicators and a final readiness score calculation.`
  },
  {
    id: 'ai-consult-02',
    title: 'AI Use Case Prioritization Matrix',
    category: PromptCategory.AI_CONSULTING,
    description: 'Help clients identify and prioritize AI opportunities.',
    tags: ['Use Cases', 'Prioritization', 'ROI'],
    content: `Act as an AI Strategy Consultant.

Develop a Use Case Prioritization framework for enterprise AI adoption projects.

Include:
1. Discovery workshop agenda to identify potential use cases.
2. Evaluation criteria (business value, technical feasibility, risk, time to value).
3. Scoring methodology with weighted factors.
4. Dependency mapping between use cases.
5. Resource requirement estimation per use case.
6. ROI projection templates.

Provide example use cases for common Taiwan industries (Manufacturing, Finance, Retail).`
  },
  {
    id: 'ai-consult-03',
    title: 'Change Management for AI Adoption',
    category: PromptCategory.AI_CONSULTING,
    description: 'Guide organizations through the human side of AI transformation.',
    tags: ['Change Management', 'Culture', 'Adoption'],
    content: `Act as an Organizational Change Expert.

Create a change management playbook for AI adoption projects.

Cover:
1. Stakeholder analysis and engagement strategy.
2. Communication plan template (addressing fears, building excitement).
3. Training program design for different user groups.
4. Resistance management strategies.
5. Quick win identification to build momentum.
6. Success metrics for adoption (beyond technical metrics).

Include sample communications for common AI transformation scenarios.`
  },
  {
    id: 'ai-consult-04',
    title: 'AI Governance Framework',
    category: PromptCategory.AI_CONSULTING,
    description: 'Establish responsible AI policies for enterprises.',
    tags: ['Governance', 'Ethics', 'Policy'],
    content: `Act as an AI Governance Specialist.

Develop an AI Governance Framework template for enterprise clients.

Include:
1. AI Ethics Principles (fairness, transparency, accountability).
2. Data governance requirements for AI projects.
3. Model documentation and auditing standards.
4. Human oversight requirements by risk level.
5. Vendor assessment criteria for AI tools.
6. Incident response procedures for AI failures.

Make it adaptable for Taiwan's regulatory environment.`
  },
  {
    id: 'ai-consult-05',
    title: 'AI ROI Calculation Methodology',
    category: PromptCategory.AI_CONSULTING,
    description: 'Quantify the business value of AI investments.',
    tags: ['ROI', 'Business Case', 'Finance'],
    content: `Act as a Business Value Analyst.

Create an AI ROI Calculation methodology for consulting engagements.

Include:
1. Cost categories to track (development, data, infrastructure, maintenance).
2. Value categories (cost savings, revenue increase, risk reduction, efficiency).
3. Intangible benefits quantification approach.
4. Time-to-value considerations.
5. Baseline measurement framework.
6. ROI presentation template for executive audiences.

Provide calculation examples for common AI use cases.`
  },

  // --- CONSULTING: PROMPT ENGINEERING ---
  {
    id: 'prompt-01',
    title: 'Prompt Engineering Workshop Curriculum',
    category: PromptCategory.PROMPT_ENGINEERING,
    description: 'Teach enterprise teams effective AI prompting skills.',
    tags: ['Training', 'Workshop', 'Education'],
    content: `Act as an AI Training Specialist.

Design a 1-day Prompt Engineering Workshop curriculum for enterprise clients.

Structure:
1. Morning Session: Foundations
   - How LLMs work (non-technical explanation)
   - Prompt anatomy and components
   - The RACE framework introduction
2. Afternoon Session: Advanced Techniques
   - Role-based prompting
   - Chain-of-thought prompting
   - Few-shot learning
3. Hands-on Labs
   - Industry-specific use cases
   - Building prompt libraries
   - Evaluation and iteration

Include facilitator notes, slide deck outline, and participant workbook structure.`
  },
  {
    id: 'prompt-02',
    title: 'Enterprise Prompt Library Architecture',
    category: PromptCategory.PROMPT_ENGINEERING,
    description: 'Structure and govern prompt assets across an organization.',
    tags: ['Library', 'Governance', 'Knowledge Management'],
    content: `Act as a Knowledge Management Architect.

Design an Enterprise Prompt Library system for organizations scaling AI usage.

Include:
1. Taxonomy and categorization system.
2. Metadata schema for prompt discoverability.
3. Version control and change management.
4. Access control and sharing permissions.
5. Quality scoring and review workflow.
6. Integration with common enterprise tools.

Provide Notion/Confluence template structure.`
  },
  {
    id: 'prompt-03',
    title: 'Prompt Testing and Evaluation Framework',
    category: PromptCategory.PROMPT_ENGINEERING,
    description: 'Systematically evaluate and improve prompt quality.',
    tags: ['Testing', 'Quality', 'Evaluation'],
    content: `Act as an AI Quality Engineer.

Create a Prompt Testing and Evaluation framework for production prompts.

Cover:
1. Test case design methodology.
2. Evaluation criteria (accuracy, consistency, safety, efficiency).
3. A/B testing approach for prompt variants.
4. Edge case identification and handling.
5. Regression testing for prompt updates.
6. Performance benchmarking standards.

Include evaluation scorecards and testing templates.`
  },
  {
    id: 'prompt-04',
    title: 'Industry-Specific Prompt Templates',
    category: PromptCategory.PROMPT_ENGINEERING,
    description: 'Ready-to-use prompt templates for common business functions.',
    tags: ['Templates', 'Business', 'Productivity'],
    content: `Act as a Business AI Consultant.

Create a collection of industry-specific prompt templates for common business functions.

Categories:
1. Sales & Business Development (email writing, proposal drafts, objection handling).
2. Marketing (content creation, campaign planning, analytics interpretation).
3. Operations (process documentation, meeting summaries, report generation).
4. HR (job descriptions, interview questions, feedback writing).
5. Finance (report analysis, forecast narratives, compliance checks).

For each template, include the prompt, expected output, and customization guidelines.`
  },
  {
    id: 'prompt-05',
    title: 'Prompt Security and Safety Guidelines',
    category: PromptCategory.PROMPT_ENGINEERING,
    description: 'Protect against prompt injection and ensure safe AI outputs.',
    tags: ['Security', 'Safety', 'Best Practices'],
    content: `Act as an AI Security Specialist.

Develop Prompt Security and Safety Guidelines for enterprise AI deployments.

Cover:
1. Prompt injection attack patterns and defenses.
2. Data leakage prevention in prompts.
3. Output filtering and validation.
4. Jailbreak attempt detection.
5. Sensitive information handling.
6. Audit logging for compliance.

Include a security checklist for production prompts.`
  },

  // --- CONSULTING: VC & INCUBATOR ---
  {
    id: 'vc-01',
    title: 'Startup Due Diligence Framework',
    category: PromptCategory.VC_INCUBATOR,
    description: 'Evaluate early-stage startups for investment or incubation.',
    tags: ['Due Diligence', 'Investment', 'Startups'],
    content: `Act as a Venture Capital Analyst.

Create a comprehensive Due Diligence framework for evaluating early-stage tech startups in Taiwan.

Assessment areas:
1. Team (founder background, complementary skills, commitment).
2. Market (TAM/SAM/SOM, timing, competitive landscape).
3. Product (PMF indicators, technical moat, roadmap).
4. Traction (growth metrics, unit economics, retention).
5. Financials (burn rate, runway, use of funds).
6. Legal & IP (cap table, IP ownership, regulatory risks).

Include scoring rubric and red flag indicators.`
  },
  {
    id: 'vc-02',
    title: 'Pitch Deck Review Checklist',
    category: PromptCategory.VC_INCUBATOR,
    description: 'Evaluate and provide feedback on startup pitch decks.',
    tags: ['Pitch Deck', 'Feedback', 'Startups'],
    content: `Act as a Pitch Deck Coach.

Create a detailed Pitch Deck Review framework for mentoring startups.

Evaluate each slide type:
1. Problem (clarity, relatability, market validation).
2. Solution (differentiation, feasibility, defensibility).
3. Market Size (methodology, realistic assumptions).
4. Business Model (unit economics, scalability).
5. Traction (meaningful metrics, growth trajectory).
6. Team (relevant experience, gaps acknowledged).
7. Ask (clear use of funds, milestones).

Provide common mistakes and improvement suggestions for each.`
  },
  {
    id: 'vc-03',
    title: 'Incubator Program Design',
    category: PromptCategory.VC_INCUBATOR,
    description: 'Structure a startup incubation program.',
    tags: ['Incubator', 'Program Design', 'Mentorship'],
    content: `Act as an Incubator Program Director.

Design a 12-week startup incubation program structure.

Include:
1. Cohort selection criteria and process.
2. Week-by-week curriculum outline.
3. Mentor matching methodology.
4. Workshop topics and facilitators.
5. Demo day planning and investor relations.
6. Post-program support structure.

Detail the resource requirements and success metrics.`
  },
  {
    id: 'vc-04',
    title: 'Startup Valuation Methods',
    category: PromptCategory.VC_INCUBATOR,
    description: 'Guide for valuing early-stage companies.',
    tags: ['Valuation', 'Finance', 'Investment'],
    content: `Act as a Startup Valuation Expert.

Explain various early-stage startup valuation methods and when to apply each.

Cover:
1. Scorecard Method (for pre-revenue startups).
2. Berkus Method (milestone-based valuation).
3. Risk Factor Summation (systematic risk assessment).
4. Comparable Company Analysis (for later stages).
5. DCF considerations for startups.
6. Cap table implications and dilution modeling.

Include calculation examples and negotiation considerations.`
  },
  {
    id: 'vc-05',
    title: 'Portfolio Company Support System',
    category: PromptCategory.VC_INCUBATOR,
    description: 'Structure ongoing support for invested companies.',
    tags: ['Portfolio Management', 'Support', 'Growth'],
    content: `Act as a Portfolio Manager.

Design a portfolio company support system for an early-stage fund or incubator.

Include:
1. Regular check-in cadence and format.
2. KPI dashboard template for portfolio tracking.
3. Value-add services catalog (introductions, recruiting, PR).
4. Emergency support protocols (crisis, pivot, fundraising).
5. Peer networking among portfolio companies.
6. Follow-on investment decision framework.

Define roles and responsibilities for the support team.`
  },

  // --- DESIGN: WEB & UI/UX DESIGN ---
  {
    id: 'uiux-01',
    title: 'Design System Creation Framework',
    category: PromptCategory.WEB_UI_UX,
    description: 'Build scalable design systems for enterprise clients.',
    tags: ['Design System', 'Components', 'Scalability'],
    content: `Act as a Design Systems Architect.

Create a framework for building enterprise-grade design systems.

Include:
1. Foundation elements (colors, typography, spacing, grid).
2. Component inventory and prioritization.
3. Documentation standards (Storybook integration).
4. Governance model (contribution, review, deprecation).
5. Versioning and change management.
6. Design token architecture for multi-platform.

Provide Figma organization structure and naming conventions.`
  },
  {
    id: 'uiux-02',
    title: 'UX Research Plan Template',
    category: PromptCategory.WEB_UI_UX,
    description: 'Structure user research for design projects.',
    tags: ['UX Research', 'User Testing', 'Methodology'],
    content: `Act as a UX Research Lead.

Design a comprehensive UX Research Plan template for client projects.

Include:
1. Research objectives and questions framework.
2. Methodology selection guide (interviews, usability tests, surveys).
3. Participant recruitment criteria and screeners.
4. Interview script templates.
5. Usability testing protocols.
6. Analysis and synthesis frameworks.
7. Stakeholder presentation templates.

Cover both qualitative and quantitative methods.`
  },
  {
    id: 'uiux-03',
    title: 'Accessibility Audit Checklist',
    category: PromptCategory.WEB_UI_UX,
    description: 'Ensure WCAG compliance in web designs.',
    tags: ['Accessibility', 'WCAG', 'Compliance'],
    content: `Act as an Accessibility Specialist.

Create a comprehensive WCAG 2.1 AA Accessibility Audit checklist for web projects.

Cover:
1. Perceivable (text alternatives, captions, contrast, resize).
2. Operable (keyboard access, timing, navigation, focus).
3. Understandable (readable, predictable, input assistance).
4. Robust (parsing, compatibility).

For each criterion:
- Testing method
- Common failures
- Remediation guidance
- Priority level

Include automated testing tools and manual testing protocols.`
  },
  {
    id: 'uiux-04',
    title: 'Mobile-First Design Guidelines',
    category: PromptCategory.WEB_UI_UX,
    description: 'Design principles for mobile-first responsive experiences.',
    tags: ['Mobile', 'Responsive', 'Design'],
    content: `Act as a Mobile UX Expert.

Develop comprehensive Mobile-First Design Guidelines for the agency.

Cover:
1. Touch target sizing and spacing standards.
2. Navigation patterns for mobile (hamburger alternatives).
3. Content prioritization for small screens.
4. Performance considerations in design decisions.
5. Gesture-based interactions guidelines.
6. Form design for mobile input.

Include design review checklist and common pitfalls.`
  },
  {
    id: 'uiux-05',
    title: 'Design Handoff Best Practices',
    category: PromptCategory.WEB_UI_UX,
    description: 'Streamline designer-to-developer handoff.',
    tags: ['Handoff', 'Collaboration', 'Process'],
    content: `Act as a Design Operations Lead.

Create a Design Handoff process that eliminates developer confusion.

Include:
1. Figma organization and naming standards.
2. Required design specifications to include.
3. Interaction documentation methods.
4. Responsive behavior documentation.
5. Developer Q&A session structure.
6. Post-handoff support protocols.

Address common handoff failures and prevention strategies.`
  },

  // --- DESIGN: PRODUCT DESIGN ---
  {
    id: 'proddes-01',
    title: 'Product Discovery Workshop Facilitation',
    category: PromptCategory.PRODUCT_DESIGN,
    description: 'Guide teams through product discovery and ideation.',
    tags: ['Discovery', 'Workshop', 'Facilitation'],
    content: `Act as a Product Discovery Facilitator.

Design a 2-day Product Discovery Workshop format for new product initiatives.

Include:
1. Pre-workshop preparation (stakeholder interviews, data review).
2. Day 1: Problem Space
   - User journey mapping
   - Pain point prioritization
   - Opportunity identification
3. Day 2: Solution Space
   - Ideation techniques (Crazy 8s, How Might We)
   - Concept development
   - Prototype planning
4. Post-workshop deliverables.

Provide facilitator scripts and Miro board templates.`
  },
  {
    id: 'proddes-02',
    title: 'Jobs-to-be-Done Interview Guide',
    category: PromptCategory.PRODUCT_DESIGN,
    description: 'Uncover user motivations through JTBD methodology.',
    tags: ['JTBD', 'Research', 'User Insights'],
    content: `Act as a JTBD Researcher.

Create a Jobs-to-be-Done Interview framework for product discovery.

Include:
1. JTBD theory overview for team education.
2. Interview guide with probing questions.
3. Timeline exploration techniques.
4. Forces of progress identification.
5. Analysis framework for interview data.
6. Job statement writing guidelines.

Provide example job statements for common B2B scenarios.`
  },
  {
    id: 'proddes-03',
    title: 'Product Metrics Definition',
    category: PromptCategory.PRODUCT_DESIGN,
    description: 'Define meaningful product success metrics.',
    tags: ['Metrics', 'Analytics', 'KPIs'],
    content: `Act as a Product Analytics Strategist.

Develop a Product Metrics Definition framework.

Cover:
1. North Star Metric identification process.
2. Input metrics and leading indicators.
3. HEART framework application (Happiness, Engagement, Adoption, Retention, Task success).
4. Metric anti-patterns to avoid.
5. Dashboard design recommendations.
6. Experimentation and A/B testing metrics.

Include metric selection worksheets and benchmark resources.`
  },
  {
    id: 'proddes-04',
    title: 'Prototype Fidelity Selection Guide',
    category: PromptCategory.PRODUCT_DESIGN,
    description: 'Choose the right prototype fidelity for each situation.',
    tags: ['Prototyping', 'Testing', 'Fidelity'],
    content: `Act as a Prototyping Strategist.

Create a Prototype Fidelity Selection guide for different project needs.

Cover:
1. Paper prototypes (when and how).
2. Low-fidelity wireframes.
3. Mid-fidelity interactive prototypes.
4. High-fidelity prototypes.
5. Coded prototypes.
6. Tool recommendations for each (Figma, Framer, code).

Include decision tree and effort vs value matrix.`
  },
  {
    id: 'proddes-05',
    title: 'Product Requirements Document Template',
    category: PromptCategory.PRODUCT_DESIGN,
    description: 'Structure comprehensive product specifications.',
    tags: ['PRD', 'Documentation', 'Requirements'],
    content: `Act as a Product Manager.

Create a Product Requirements Document (PRD) template for design projects.

Include sections:
1. Problem Statement and Objectives.
2. User Personas and Scenarios.
3. Feature Requirements (functional, non-functional).
4. Success Metrics and Acceptance Criteria.
5. Constraints and Dependencies.
6. Timeline and Milestones.
7. Risk Assessment.

Provide examples and writing guidelines for each section.`
  },

  // --- DESIGN: CONTENT CREATION ---
  {
    id: 'content-01',
    title: 'Visual Content Style Guide',
    category: PromptCategory.CONTENT_CREATION,
    description: 'Define visual content standards for brands.',
    tags: ['Visual Style', 'Brand', 'Guidelines'],
    content: `Act as a Visual Content Director.

Create a comprehensive Visual Content Style Guide template.

Include:
1. Photography style (composition, lighting, subject matter).
2. Illustration guidelines (style, color usage, when to use).
3. Icon design standards.
4. Data visualization principles.
5. Video thumbnail standards.
6. Social media image specifications per platform.

Provide do's and don'ts with visual examples structure.`
  },
  {
    id: 'content-02',
    title: 'AI-Assisted Content Workflow',
    category: PromptCategory.CONTENT_CREATION,
    description: 'Integrate AI tools into content production.',
    tags: ['AI', 'Workflow', 'Production'],
    content: `Act as a Content Operations Manager.

Design an AI-Assisted Content Creation workflow.

Cover:
1. Ideation phase (AI for topic research, outline generation).
2. Creation phase (AI drafting, human editing).
3. Visual content (Midjourney/DALL-E integration).
4. Review and quality control checkpoints.
5. Version control and approval flows.
6. Performance tracking and iteration.

Include tool recommendations and prompt libraries.`
  },
  {
    id: 'content-03',
    title: 'Content Repurposing Matrix',
    category: PromptCategory.CONTENT_CREATION,
    description: 'Maximize content ROI through systematic repurposing.',
    tags: ['Repurposing', 'Efficiency', 'ROI'],
    content: `Act as a Content Strategist.

Create a Content Repurposing Matrix for maximizing content investment.

Define transformation paths:
1. Long-form → Short-form (blog → social posts).
2. Written → Visual (article → infographic).
3. Static → Video (post → Reel).
4. Single → Series (pillar → topic cluster).
5. Internal → External (documentation → thought leadership).
6. Format changes (webinar → blog → podcast).

Include production templates and quality standards.`
  },
  {
    id: 'content-04',
    title: 'UGC Campaign Framework',
    category: PromptCategory.CONTENT_CREATION,
    description: 'Generate and leverage user-generated content.',
    tags: ['UGC', 'Community', 'Campaigns'],
    content: `Act as a Community Content Manager.

Design a User-Generated Content campaign framework.

Include:
1. UGC campaign types (contests, challenges, testimonials).
2. Brief creation for participants.
3. Legal considerations (rights, releases, usage).
4. Curation and moderation workflow.
5. Incentive structures that work.
6. Integration with brand content mix.

Provide campaign templates and success metrics.`
  },
  {
    id: 'content-05',
    title: 'Multilingual Content Localization',
    category: PromptCategory.CONTENT_CREATION,
    description: 'Adapt content for Taiwan and international markets.',
    tags: ['Localization', 'Translation', 'Cultural'],
    content: `Act as a Localization Specialist.

Create a Content Localization framework for Taiwan-based companies.

Cover:
1. Translation vs. transcreation decision framework.
2. Cultural adaptation considerations for Taiwan/China/Global.
3. Quality assurance process for translated content.
4. Tool stack for localization management.
5. SEO considerations for multilingual content.
6. Brand voice consistency across languages.

Include localization brief templates.`
  },

  // --- DESIGN: BRAND & ART DIRECTION ---
  {
    id: 'brand-art-01',
    title: 'Brand Strategy Development Process',
    category: PromptCategory.BRAND_ART_DIRECTION,
    description: 'Guide clients through comprehensive brand development.',
    tags: ['Brand Strategy', 'Identity', 'Positioning'],
    content: `Act as a Brand Strategist.

Outline a comprehensive Brand Strategy Development process.

Phases:
1. Discovery (stakeholder interviews, competitive analysis, audience research).
2. Strategy (positioning, value proposition, brand architecture).
3. Identity System (verbal identity, visual identity).
4. Guidelines (brand book structure and content).
5. Activation (launch planning, asset creation).
6. Governance (ongoing brand management).

Include workshop formats and deliverable templates.`
  },
  {
    id: 'brand-art-02',
    title: 'Mood Board Creation Methodology',
    category: PromptCategory.BRAND_ART_DIRECTION,
    description: 'Develop visual direction through strategic mood boarding.',
    tags: ['Mood Board', 'Visual Direction', 'Creative'],
    content: `Act as a Creative Director.

Create a Mood Board methodology for brand and project design.

Include:
1. Research and inspiration gathering process.
2. Categorization of visual elements (typography, color, imagery, texture).
3. Client presentation format.
4. Feedback and iteration process.
5. Translation from mood board to design system.
6. Tools and templates (Figma, Pinterest, physical boards).

Provide framework for presenting and selling creative direction.`
  },
  {
    id: 'brand-art-03',
    title: 'Photography Art Direction Guide',
    category: PromptCategory.BRAND_ART_DIRECTION,
    description: 'Direct photo shoots for brand consistency.',
    tags: ['Photography', 'Art Direction', 'Shoots'],
    content: `Act as a Photography Art Director.

Create a Photo Shoot Art Direction guide.

Cover:
1. Creative brief development.
2. Shot list creation methodology.
3. Location scouting criteria.
4. Model/talent direction tips.
5. Lighting style specifications.
6. Post-production direction guidelines.

Include shot list templates and reference board structures.`
  },
  {
    id: 'brand-art-04',
    title: 'Brand Audit Framework',
    category: PromptCategory.BRAND_ART_DIRECTION,
    description: 'Evaluate existing brand health and consistency.',
    tags: ['Brand Audit', 'Analysis', 'Consistency'],
    content: `Act as a Brand Consultant.

Design a comprehensive Brand Audit framework.

Audit areas:
1. Visual Identity Assessment (logo usage, color consistency, typography).
2. Verbal Identity Assessment (voice, messaging, tagline).
3. Touchpoint Inventory (all brand expressions).
4. Competitive Positioning Analysis.
5. Internal Perception Survey.
6. External Perception Research.

Include scoring rubrics and presentation templates.`
  },
  {
    id: 'brand-art-05',
    title: 'Rebranding Project Management',
    category: PromptCategory.BRAND_ART_DIRECTION,
    description: 'Manage complex rebranding initiatives.',
    tags: ['Rebranding', 'Project Management', 'Change'],
    content: `Act as a Rebrand Project Manager.

Create a Rebranding Project Management playbook.

Phases:
1. Assessment and Planning (scope, timeline, budget).
2. Strategy Development (positioning shifts, architecture changes).
3. Creative Development (design process, review cycles).
4. Asset Production (rollout priority, production schedules).
5. Internal Launch (employee engagement, training).
6. External Launch (communications, media, events).

Include stakeholder management and risk mitigation strategies.`
  },

  // --- DESIGN: VIDEO & FILMOGRAPHY ---
  {
    id: 'video-01',
    title: 'Corporate Video Production Workflow',
    category: PromptCategory.VIDEO_FILMOGRAPHY,
    description: 'End-to-end process for brand video production.',
    tags: ['Video Production', 'Corporate', 'Workflow'],
    content: `Act as a Video Production Director.

Design an end-to-end Corporate Video Production workflow.

Phases:
1. Pre-Production
   - Creative brief and concept development
   - Scriptwriting process
   - Storyboarding
   - Location scouting and casting
   - Production planning and scheduling
2. Production
   - Shoot day management
   - Director-client communication
3. Post-Production
   - Editing workflow
   - Review and revision cycles
   - Delivery specifications

Include timeline templates and budget estimation frameworks.`
  },
  {
    id: 'video-02',
    title: 'Interview Video Best Practices',
    category: PromptCategory.VIDEO_FILMOGRAPHY,
    description: 'Capture compelling interview content.',
    tags: ['Interview', 'Testimonials', 'Technique'],
    content: `Act as a Documentary Filmmaker.

Create best practices for Interview Video production.

Cover:
1. Pre-interview preparation (research, question development).
2. Technical setup (lighting for talking heads, audio considerations).
3. Interviewer techniques for natural responses.
4. B-roll planning to complement interviews.
5. Editing approaches for different interview formats.
6. Legal considerations (releases, rights).

Include question frameworks and setup checklists.`
  },
  {
    id: 'video-03',
    title: 'Social Video Content Strategy',
    category: PromptCategory.VIDEO_FILMOGRAPHY,
    description: 'Create video optimized for social platforms.',
    tags: ['Social Video', 'Platform', 'Format'],
    content: `Act as a Social Video Strategist.

Develop a Social Video Content production strategy.

Cover by platform:
1. Instagram Reels/Stories specifications and trends.
2. TikTok content approaches and best practices.
3. LinkedIn Video considerations for B2B.
4. YouTube Shorts optimization.
5. Cross-platform repurposing workflow.
6. Performance metrics by platform.

Include content calendar templates and shooting efficiency tips.`
  },
  {
    id: 'video-04',
    title: 'Motion Graphics Style Development',
    category: PromptCategory.VIDEO_FILMOGRAPHY,
    description: 'Create consistent motion design language.',
    tags: ['Motion Graphics', 'Animation', 'Style'],
    content: `Act as a Motion Design Director.

Create a Motion Graphics Style Development framework.

Include:
1. Animation principles and timing standards.
2. Kinetic typography guidelines.
3. Transition library development.
4. Icon and element animation rules.
5. Template creation for scalable production.
6. Brand integration (colors, fonts, spacing in motion).

Provide After Effects/Lottie best practices and file organization.`
  },
  {
    id: 'video-05',
    title: 'Video Post-Production Quality Control',
    category: PromptCategory.VIDEO_FILMOGRAPHY,
    description: 'Ensure consistent quality in video deliverables.',
    tags: ['Post-Production', 'QC', 'Quality'],
    content: `Act as a Post-Production Supervisor.

Create a Video Post-Production QC checklist.

Quality checks:
1. Technical (resolution, frame rate, codec, audio levels).
2. Color (consistency, correction, grading accuracy).
3. Audio (mix balance, noise, sync).
4. Graphics (lower thirds, titles, animations).
5. Content (messaging accuracy, brand compliance).
6. Delivery (format specifications, naming conventions).

Include review workflow and approval documentation.`
  },

  // --- SOFTWARE DEV: WEB DEVELOPMENT ---
  {
    id: 'webdev-01',
    title: 'Frontend Architecture Decision Guide',
    category: PromptCategory.WEB_DEVELOPMENT,
    description: 'Choose the right frontend framework and patterns.',
    tags: ['Frontend', 'Architecture', 'Framework'],
    content: `Act as a Frontend Architect.

Create a Frontend Architecture Decision Guide for web projects.

Evaluate:
1. Framework selection (React, Vue, Next.js, Nuxt, Astro).
2. State management approaches.
3. Styling solutions (CSS Modules, Tailwind, CSS-in-JS).
4. Component library decisions (build vs buy).
5. Build tool configuration (Vite, Turbopack).
6. Testing strategy (unit, integration, E2E).

Include decision matrices and project type recommendations.`
  },
  {
    id: 'webdev-02',
    title: 'API Design Standards',
    category: PromptCategory.WEB_DEVELOPMENT,
    description: 'Establish consistent RESTful API conventions.',
    tags: ['API', 'REST', 'Standards'],
    content: `Act as an API Architect.

Define comprehensive API Design Standards for the agency.

Cover:
1. RESTful resource naming conventions.
2. HTTP method usage guidelines.
3. Response format standards (JSON structure, pagination).
4. Error handling and status codes.
5. Authentication and authorization patterns.
6. Versioning strategy.
7. Documentation requirements (OpenAPI/Swagger).

Include example endpoints and anti-patterns to avoid.`
  },
  {
    id: 'webdev-03',
    title: 'Web Security Checklist',
    category: PromptCategory.WEB_DEVELOPMENT,
    description: 'Ensure security best practices in web applications.',
    tags: ['Security', 'OWASP', 'Best Practices'],
    content: `Act as a Web Security Engineer.

Create a Web Application Security Checklist based on OWASP guidelines.

Categories:
1. Authentication & Session Management.
2. Access Control.
3. Input Validation.
4. Output Encoding (XSS prevention).
5. SQL Injection Prevention.
6. CSRF Protection.
7. Security Headers Configuration.
8. Dependency Vulnerability Scanning.

Include testing procedures and remediation guidance.`
  },
  {
    id: 'webdev-04',
    title: 'Progressive Web App Implementation',
    category: PromptCategory.WEB_DEVELOPMENT,
    description: 'Build installable, offline-capable web applications.',
    tags: ['PWA', 'Offline', 'Performance'],
    content: `Act as a PWA Specialist.

Create a Progressive Web App Implementation guide.

Cover:
1. Service Worker strategies (cache-first, network-first, stale-while-revalidate).
2. Manifest file configuration.
3. Offline functionality planning.
4. Push notification implementation.
5. App shell architecture.
6. Installation prompts and A2HS.
7. Performance optimization for PWAs.

Include implementation checklists and testing procedures.`
  },
  {
    id: 'webdev-05',
    title: 'Code Quality Automation Setup',
    category: PromptCategory.WEB_DEVELOPMENT,
    description: 'Configure automated code quality tools.',
    tags: ['Linting', 'Quality', 'Automation'],
    content: `Act as a DevOps Engineer.

Design a Code Quality Automation setup for web projects.

Configure:
1. ESLint rules (customized for React/Vue/TypeScript).
2. Prettier formatting standards.
3. Husky pre-commit hooks.
4. Commitlint for conventional commits.
5. CI integration for quality gates.
6. SonarQube or similar code analysis.

Provide configuration files and team onboarding documentation.`
  },

  // --- SOFTWARE DEV: SHOPIFY DEVELOPMENT ---
  {
    id: 'shopify-01',
    title: 'Shopify Theme Architecture Patterns',
    category: PromptCategory.SHOPIFY_DEVELOPMENT,
    description: 'Structure custom Shopify themes for maintainability.',
    tags: ['Shopify', 'Theme', 'Architecture'],
    content: `Act as a Shopify Theme Developer.

Define Shopify Theme Architecture best practices.

Cover:
1. File organization and naming conventions.
2. Section and block architecture for flexibility.
3. Liquid templating patterns (DRY principles).
4. Asset management (CSS, JS, images).
5. Settings schema design for merchant usability.
6. Theme editor experience optimization.

Include starter theme structure and documentation templates.`
  },
  {
    id: 'shopify-02',
    title: 'Shopify App Development Guide',
    category: PromptCategory.SHOPIFY_DEVELOPMENT,
    description: 'Build custom Shopify apps for clients.',
    tags: ['Shopify Apps', 'Development', 'Integration'],
    content: `Act as a Shopify App Developer.

Create a Shopify App Development guide for custom solutions.

Cover:
1. App architecture options (embedded, standalone, admin extensions).
2. Authentication flow (OAuth, session tokens).
3. Shopify API best practices (GraphQL vs REST).
4. Webhook handling and reliability.
5. Billing API integration for paid apps.
6. App store listing optimization.

Include boilerplate setup and common integration patterns.`
  },
  {
    id: 'shopify-03',
    title: 'Headless Shopify with Hydrogen',
    category: PromptCategory.SHOPIFY_DEVELOPMENT,
    description: 'Build custom storefronts with Shopify Hydrogen.',
    tags: ['Hydrogen', 'Headless', 'React'],
    content: `Act as a Headless Commerce Architect.

Design a Headless Shopify implementation guide using Hydrogen.

Cover:
1. When to choose Hydrogen vs Next.js.
2. Storefront API data fetching patterns.
3. Cart and checkout implementation.
4. Customer account integration.
5. Performance optimization strategies.
6. Deployment and hosting options.

Include project structure and migration considerations.`
  },
  {
    id: 'shopify-04',
    title: 'Shopify Performance Optimization',
    category: PromptCategory.SHOPIFY_DEVELOPMENT,
    description: 'Maximize speed and conversion on Shopify stores.',
    tags: ['Performance', 'Speed', 'Optimization'],
    content: `Act as a Shopify Performance Expert.

Create a Shopify Store Performance Optimization checklist.

Optimize:
1. Theme code (Liquid optimization, CSS/JS minimization).
2. Image handling (lazy loading, responsive images, CDN).
3. App impact assessment and management.
4. Third-party script management.
5. Collection and product page optimization.
6. Checkout speed improvements.

Include measurement tools and benchmark targets.`
  },
  {
    id: 'shopify-05',
    title: 'Shopify Migration Planning',
    category: PromptCategory.SHOPIFY_DEVELOPMENT,
    description: 'Migrate e-commerce stores to Shopify.',
    tags: ['Migration', 'E-commerce', 'Planning'],
    content: `Act as an E-commerce Migration Specialist.

Create a Shopify Migration planning framework.

Phases:
1. Discovery (current platform audit, data mapping).
2. Planning (feature parity analysis, timeline, risks).
3. Data Migration (products, customers, orders, content).
4. Design/Development (theme, customizations, integrations).
5. Testing (functionality, data integrity, performance).
6. Launch (cutover plan, redirects, monitoring).

Include migration checklist and risk mitigation strategies.`
  },

  // --- SOFTWARE DEV: DEVOPS ---
  {
    id: 'devops-01',
    title: 'CI/CD Pipeline Design',
    category: PromptCategory.DEVOPS,
    description: 'Design robust continuous integration and deployment pipelines.',
    tags: ['CI/CD', 'Automation', 'Pipeline'],
    content: `Act as a DevOps Engineer.

Design a CI/CD Pipeline architecture for web applications.

Include:
1. Source control workflow (GitFlow vs trunk-based).
2. Build stage (compilation, asset optimization).
3. Test stage (unit, integration, E2E automation).
4. Security scanning stage (SAST, dependency scanning).
5. Deployment strategies (blue-green, canary, rolling).
6. Environment management (dev, staging, production).

Provide GitHub Actions/GitLab CI configuration examples.`
  },
  {
    id: 'devops-02',
    title: 'Infrastructure as Code Standards',
    category: PromptCategory.DEVOPS,
    description: 'Establish IaC practices with Terraform or Pulumi.',
    tags: ['IaC', 'Terraform', 'Infrastructure'],
    content: `Act as an Infrastructure Engineer.

Create Infrastructure as Code standards for the agency.

Cover:
1. Tool selection (Terraform vs Pulumi vs CloudFormation).
2. Project structure and module organization.
3. State management best practices.
4. Variable and secret management.
5. Testing infrastructure code.
6. Documentation requirements.

Include module templates and review checklists.`
  },
  {
    id: 'devops-03',
    title: 'Monitoring and Observability Setup',
    category: PromptCategory.DEVOPS,
    description: 'Implement comprehensive application monitoring.',
    tags: ['Monitoring', 'Observability', 'Alerting'],
    content: `Act as a Site Reliability Engineer.

Design a Monitoring and Observability strategy.

Include:
1. Metrics collection (application, infrastructure, business).
2. Log aggregation and analysis.
3. Distributed tracing setup.
4. Dashboard design principles.
5. Alerting strategy (thresholds, escalation, on-call).
6. Incident response integration.

Provide tool recommendations and configuration examples.`
  },
  {
    id: 'devops-04',
    title: 'Container Orchestration Guide',
    category: PromptCategory.DEVOPS,
    description: 'Manage containerized applications with Kubernetes.',
    tags: ['Kubernetes', 'Docker', 'Containers'],
    content: `Act as a Platform Engineer.

Create a Container Orchestration guide for web applications.

Cover:
1. Containerization best practices (Dockerfile optimization).
2. Kubernetes resource definitions (deployments, services, ingress).
3. Scaling strategies (HPA, VPA).
4. Secret and configuration management.
5. Networking and service mesh considerations.
6. Local development with containers.

Include manifest templates and common pitfalls.`
  },
  {
    id: 'devops-05',
    title: 'Disaster Recovery Planning',
    category: PromptCategory.DEVOPS,
    description: 'Ensure business continuity through DR planning.',
    tags: ['Disaster Recovery', 'Backup', 'Business Continuity'],
    content: `Act as a Disaster Recovery Specialist.

Design a Disaster Recovery Planning framework.

Include:
1. Risk assessment and business impact analysis.
2. Recovery objectives (RPO, RTO definitions).
3. Backup strategies (frequency, retention, testing).
4. Failover procedures and automation.
5. Communication and escalation plans.
6. DR testing and drill schedules.

Provide runbook templates and recovery checklists.`
  },

  // --- SOFTWARE DEV: CLOUD MANAGEMENT ---
  {
    id: 'cloud-01',
    title: 'Cloud Architecture Review Checklist',
    category: PromptCategory.CLOUD_MANAGEMENT,
    description: 'Evaluate cloud infrastructure design.',
    tags: ['Cloud', 'Architecture', 'Review'],
    content: `Act as a Cloud Solutions Architect.

Create a Cloud Architecture Review checklist following Well-Architected Framework.

Pillars:
1. Operational Excellence (automation, monitoring, incident management).
2. Security (IAM, encryption, network security, compliance).
3. Reliability (fault tolerance, disaster recovery, scaling).
4. Performance Efficiency (right-sizing, caching, CDN).
5. Cost Optimization (resource management, pricing models).
6. Sustainability (efficiency, regional selection).

Include scoring rubrics and improvement recommendations.`
  },
  {
    id: 'cloud-02',
    title: 'Multi-Cloud Strategy Framework',
    category: PromptCategory.CLOUD_MANAGEMENT,
    description: 'Manage workloads across cloud providers.',
    tags: ['Multi-Cloud', 'Strategy', 'Hybrid'],
    content: `Act as a Cloud Strategy Consultant.

Develop a Multi-Cloud Strategy framework.

Cover:
1. Use case analysis for multi-cloud adoption.
2. Workload placement criteria.
3. Data management across clouds.
4. Identity and access federation.
5. Cost management across providers.
6. Operational tooling consolidation.

Include decision frameworks and governance recommendations.`
  },
  {
    id: 'cloud-03',
    title: 'Cloud Cost Optimization Playbook',
    category: PromptCategory.CLOUD_MANAGEMENT,
    description: 'Reduce cloud spending without impacting performance.',
    tags: ['Cost Optimization', 'FinOps', 'Cloud'],
    content: `Act as a FinOps Practitioner.

Create a Cloud Cost Optimization playbook.

Strategies:
1. Right-sizing analysis methodology.
2. Reserved instance and savings plan optimization.
3. Spot/preemptible instance strategies.
4. Storage tier optimization.
5. Network cost reduction.
6. Tagging and cost allocation.
7. Continuous optimization processes.

Include quick wins and long-term optimization roadmap.`
  },
  {
    id: 'cloud-04',
    title: 'Serverless Architecture Patterns',
    category: PromptCategory.CLOUD_MANAGEMENT,
    description: 'Design scalable serverless solutions.',
    tags: ['Serverless', 'Lambda', 'Architecture'],
    content: `Act as a Serverless Architect.

Document Serverless Architecture patterns for common use cases.

Patterns:
1. API backends (API Gateway + Lambda).
2. Event-driven processing (queues, streams).
3. Scheduled tasks and batch processing.
4. Real-time data processing.
5. Static site hosting with dynamic functions.
6. Microservices with serverless.

Include anti-patterns, cold start mitigation, and cost considerations.`
  },
  {
    id: 'cloud-05',
    title: 'Cloud Security Hardening Guide',
    category: PromptCategory.CLOUD_MANAGEMENT,
    description: 'Secure cloud infrastructure against threats.',
    tags: ['Cloud Security', 'Hardening', 'Compliance'],
    content: `Act as a Cloud Security Engineer.

Create a Cloud Security Hardening guide.

Cover:
1. Identity and Access Management (least privilege, MFA, service accounts).
2. Network security (VPCs, security groups, WAF).
3. Data protection (encryption at rest and in transit).
4. Logging and monitoring for security.
5. Compliance automation (CIS benchmarks, SOC2).
6. Incident detection and response.

Include security baselines and audit procedures.`
  },

  // --- SOFTWARE DEV: AI RESEARCH ---
  {
    id: 'ai-research-01',
    title: 'LLM Evaluation Framework',
    category: PromptCategory.AI_RESEARCH,
    description: 'Systematically evaluate large language models.',
    tags: ['LLM', 'Evaluation', 'Benchmarks'],
    content: `Act as an AI Research Scientist.

Design an LLM Evaluation Framework for production use cases.

Evaluation dimensions:
1. Task-specific accuracy (domain benchmarks).
2. Reasoning capability (CoT evaluation).
3. Instruction following (compliance rates).
4. Hallucination detection (factuality checks).
5. Latency and throughput.
6. Cost efficiency (cost per quality unit).

Include evaluation datasets, metrics, and comparison methodologies.`
  },
  {
    id: 'ai-research-02',
    title: 'Fine-Tuning Strategy Guide',
    category: PromptCategory.AI_RESEARCH,
    description: 'When and how to fine-tune language models.',
    tags: ['Fine-Tuning', 'Training', 'LLM'],
    content: `Act as an ML Engineer.

Create a Fine-Tuning Strategy guide for LLMs.

Cover:
1. When to fine-tune vs prompt engineering vs RAG.
2. Data preparation and quality requirements.
3. Fine-tuning techniques (full, LoRA, QLoRA).
4. Hyperparameter selection guidelines.
5. Evaluation during training.
6. Deployment and serving considerations.

Include cost-benefit analysis and failure mode documentation.`
  },
  {
    id: 'ai-research-03',
    title: 'AI Agent Architecture Patterns',
    category: PromptCategory.AI_RESEARCH,
    description: 'Design autonomous AI agent systems.',
    tags: ['AI Agents', 'Architecture', 'Autonomy'],
    content: `Act as an AI Systems Architect.

Document AI Agent Architecture patterns for production systems.

Patterns:
1. ReAct (Reasoning and Acting) agents.
2. Tool-using agents (function calling, plugins).
3. Multi-agent collaboration architectures.
4. Memory systems (short-term, long-term, episodic).
5. Planning and goal decomposition.
6. Safety and guardrails implementation.

Include implementation frameworks and monitoring approaches.`
  },
  {
    id: 'ai-research-04',
    title: 'Embedding Model Selection Guide',
    category: PromptCategory.AI_RESEARCH,
    description: 'Choose the right embedding models for your use case.',
    tags: ['Embeddings', 'Vector Search', 'Selection'],
    content: `Act as an ML Research Engineer.

Create an Embedding Model Selection guide.

Evaluate:
1. Model options (OpenAI, Cohere, open-source).
2. Dimension and performance trade-offs.
3. Domain-specific embedding needs.
4. Multilingual requirements.
5. Fine-tuning embeddings for specific tasks.
6. Benchmarking methodology.

Include comparison tables and selection decision trees.`
  },
  {
    id: 'ai-research-05',
    title: 'AI Ethics and Bias Assessment',
    category: PromptCategory.AI_RESEARCH,
    description: 'Evaluate AI systems for fairness and ethical concerns.',
    tags: ['AI Ethics', 'Bias', 'Fairness'],
    content: `Act as an AI Ethics Researcher.

Design an AI Ethics and Bias Assessment framework.

Assessment areas:
1. Bias detection in training data.
2. Output fairness across demographic groups.
3. Transparency and explainability requirements.
4. Privacy impact assessment.
5. Environmental impact considerations.
6. Societal impact evaluation.

Include assessment checklists and mitigation strategies.`
  }
];

export const PILLAR_DESCRIPTIONS = {
  [PromptCategory.STRATEGY]: "Blue ocean thinking, M&A frameworks, and high-level vision for the agency's future.",
  [PromptCategory.GROWTH]: "Tactics for enterprise sales, proposal writing, and establishing market authority.",
  [PromptCategory.OPERATIONS]: "Internal SOPs, culture building, and frameworks for efficient management.",
  [PromptCategory.PRODUCT]: "Technical stacks, AI R&D, and engineering workflows for the modern web.",
  [PromptCategory.BRAND]: "Narrative building, content strategy, and public relations for the CEO.",
  // Consulting Pillars
  [PromptCategory.SEO_GEO]: "Search optimization strategies including GEO for AI search and local SEO tactics.",
  [PromptCategory.SOCIAL_MEDIA]: "Platform-specific growth strategies, community building, and engagement tactics.",
  [PromptCategory.AI_CONSULTING]: "Enterprise AI adoption, readiness assessment, and transformation frameworks.",
  [PromptCategory.PROMPT_ENGINEERING]: "Prompt design, testing, security, and enterprise prompt library architecture.",
  [PromptCategory.VC_INCUBATOR]: "Startup evaluation, due diligence, incubation programs, and investment frameworks.",
  // Design Pillars
  [PromptCategory.WEB_UI_UX]: "Design systems, UX research, accessibility, and responsive design patterns.",
  [PromptCategory.PRODUCT_DESIGN]: "Product discovery, JTBD research, metrics, and requirements documentation.",
  [PromptCategory.CONTENT_CREATION]: "Visual content guidelines, AI workflows, repurposing, and localization.",
  [PromptCategory.BRAND_ART_DIRECTION]: "Brand strategy, mood boards, photography direction, and rebranding management.",
  [PromptCategory.VIDEO_FILMOGRAPHY]: "Video production workflows, interview techniques, and motion graphics.",
  // Software Development Pillars
  [PromptCategory.WEB_DEVELOPMENT]: "Frontend architecture, API design, security, PWAs, and code quality.",
  [PromptCategory.SHOPIFY_DEVELOPMENT]: "Theme architecture, app development, Hydrogen, and performance optimization.",
  [PromptCategory.DEVOPS]: "CI/CD pipelines, Infrastructure as Code, monitoring, and disaster recovery.",
  [PromptCategory.CLOUD_MANAGEMENT]: "Cloud architecture, multi-cloud strategy, cost optimization, and security.",
  [PromptCategory.AI_RESEARCH]: "LLM evaluation, fine-tuning, AI agents, embeddings, and ethics assessment."
};

export const FEATURED_TAGS = [
  'Strategy', 'HubSpot', 'AI Agents', 'Sales', 'Management', 'Web Dev', 'Personal Brand'
];