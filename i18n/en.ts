import { Translations } from './types';

export const en: Translations = {
  ui: {
    header: {
      title: 'CEO Prompts',
      subtitle: 'Tenten.co Intelligence',
      about: 'About',
      contribute: 'Contribute',
      openApp: 'Open App',
    },
    hero: {
      badge: 'AI-First Management System',
      titlePart1: 'Strategic Intelligence',
      titleHighlight: 'Library',
      subtitle: 'Access world-class strategic thinking powered by the RACE framework.',
      description: 'A curated collection of {count}+ strategic prompts designed for the CEO of Tenten.co. Covering strategy, growth, operations, and product innovation.',
      promptsAvailable: 'PROMPTS AVAILABLE',
    },
    search: {
      placeholder: "Search prompts...",
      popular: 'Popular:',
      results: 'results found',
    },
    categories: {
      all: 'All Prompts',
      strategy: 'Strategic Vision',
      growth: 'Growth & Sales',
      operations: 'Operations & Team',
      product: 'Product & AI Tech',
      brand: 'Brand & Content',
    },
    pillarDescriptions: {
      strategy: "Blue ocean thinking, M&A frameworks, and high-level vision for the agency's future.",
      growth: "Tactics for enterprise sales, proposal writing, and establishing market authority.",
      operations: "Internal SOPs, culture building, and frameworks for efficient management.",
      product: "Technical stacks, AI R&D, and engineering workflows for the modern web.",
      brand: "Narrative building, content strategy, and public relations for the CEO.",
    },
    card: {
      copyPrompt: 'Copy Prompt',
      copied: 'Copied',
      customize: 'Customize',
    },
    modal: {
      context: 'Context',
      thePrompt: 'The Prompt',
      copyPrompt: 'Copy Prompt',
      copied: 'Copied',
      footer: 'Tenten.co CEO Library',
    },
    empty: {
      title: 'No prompts found',
      description: 'Try adjusting your search or category filters.',
      clearFilters: 'Clear all filters',
    },
    footer: {
      text: 'Designed for Tenten.co • Inspired by Google DeepMind & Material 3',
    },
    language: {
      toggle: 'Language',
      zh: '繁體中文',
      en: 'English',
    },
  },
  prompts: {
    'strat-01': {
      title: 'Blue Ocean Strategy for AI Agencies',
      description: 'Identify untapped market spaces for an AI-First consultancy in Taiwan.',
      tags: ['Strategy', 'Innovation', 'Market Analysis'],
      content: `**ROLE:**
You are W. Chan Kim, co-author of "Blue Ocean Strategy" and Professor of Strategy at INSEAD. You pioneered the concept of creating uncontested market spaces rather than competing in bloody red oceans.

**ACTION:**
Analyze the digital agency landscape and identify Blue Ocean opportunities for an AI-First consultancy.

**CONTEXT:**
- Company: Tenten.co, a digital agency in Taiwan positioning as "AI-First"
- Current services: HubSpot implementation, web development, digital transformation
- Market: Taiwan and APAC region with traditional agencies and emerging AI players
- Challenge: Differentiate from both traditional 4A agencies and new AI startups

**EXPECTATION:**
Deliver a strategic memo with:
1. Three "Blue Ocean" opportunities with untapped market spaces (e.g., Traditional Manufacturing AI adoption, MarTech service gaps, AI-Agent-as-a-Service models)
2. Value Innovation Canvas comparing current offerings vs. proposed blue ocean moves
3. Four Actions Framework (Eliminate, Reduce, Raise, Create) for each opportunity
4. Required capabilities and resource assessment
5. Risk matrix with mitigation strategies
6. 12-month execution roadmap prioritized by impact and feasibility`
    },
    'strat-02': {
      title: 'Scenario Planning: The Future of Web Dev',
      description: 'Prepare for the commoditization of web design by Generative AI.',
      tags: ['Future Proofing', 'Web Design', 'GenAI'],
      content: `**ROLE:**
You are Clayton Christensen, the late Harvard Business School professor who developed the theory of "Disruptive Innovation" and authored "The Innovator's Dilemma." Apply your framework for understanding how technologies disrupt industries.

**ACTION:**
Develop scenario plans for how a web design agency should pivot when AI commoditizes standard website creation.

**CONTEXT:**
- Scenario: By 2026, 80% of standard corporate websites can be generated instantly via AI prompts
- Company: Tenten.co, a web design and development agency in Taiwan
- Current revenue: 60% from traditional web design/development
- Team: 15 designers and developers with varying AI adoption levels
- Threat: Low-end disruption from AI tools like v0.dev, Framer AI, Wix AI

**EXPECTATION:**
Provide a comprehensive disruption response plan including:
1. Disruption trajectory analysis using your Innovator's Dilemma framework
2. Three strategic pivot options with pros/cons:
   - Pivot A: Move upstream to complex system architecture
   - Pivot B: Focus on hyper-personalized AI-generated experiences
   - Pivot C: Transform from "Web Builders" to "Digital Experience Architects"
3. Jobs-to-be-Done analysis for future client needs
4. Team skill transition roadmap (current state → required state)
5. Revenue model evolution timeline
6. Leading indicators to monitor for when to execute each pivot`
    },
    'strat-03': {
      title: 'Acquisition & Merger Evaluation',
      description: 'Framework for evaluating smaller agencies for M&A.',
      tags: ['M&A', 'Expansion', 'Business'],
      content: `**ROLE:**
You are David Harding, Senior Partner at Bain & Company and co-author of "Mastering the Merger." You've advised on hundreds of M&A transactions and developed frameworks for successful acquisitions.

**ACTION:**
Create a comprehensive M&A evaluation framework for acquiring boutique agencies.

**CONTEXT:**
- Acquirer: Tenten.co, an AI-native digital consultancy in Taiwan
- Strategy: Expand capabilities through strategic acquisitions
- Target profile: Boutique agencies with 5-20 employees in Taiwan
- Key interests: AI talent, enterprise clients, complementary tech stacks (HubSpot, Vercel, Python)
- Budget: $500K - $2M per acquisition
- Culture: Agile, fast-paced, AI-first mindset

**EXPECTATION:**
Deliver an M&A playbook containing:
1. Weighted Scorecard Framework with criteria:
   - Talent Density & AI Readiness (scoring rubric)
   - Client Portfolio Quality (Enterprise vs SMB analysis)
   - Tech Stack Alignment (compatibility matrix)
   - Cultural Fit Assessment (indicators and red flags)
   - Financial Health Metrics
2. Valuation methodology for service businesses
3. 10 specific due-diligence questions for first CEO meeting
4. Integration playbook (30-60-90 day plan)
5. Deal structure options (earn-out, equity swap, cash)
6. Post-merger culture integration checklist`
    },
    'strat-04': {
      title: 'Quarterly OKR Generation',
      description: 'Draft high-impact OKRs for an AI agency.',
      tags: ['Management', 'OKRs', 'Goal Setting'],
      content: `**ROLE:**
You are John Doerr, legendary venture capitalist at Kleiner Perkins and author of "Measure What Matters." You introduced OKRs to Google and have coached hundreds of companies on effective goal-setting.

**ACTION:**
Draft ambitious yet achievable OKRs for an AI-first digital agency's next quarter.

**CONTEXT:**
- Company: Tenten.co, digital agency transitioning to AI-first positioning
- Strategic priorities: AI Agent development, HubSpot Enterprise implementations
- Current state: Strong web dev base, early AI capabilities, growing enterprise pipeline
- Team size: 25 people across design, development, and consulting
- Revenue goal: 40% YoY growth with improved margins

**EXPECTATION:**
Deliver a complete OKR framework including:
1. Three Objectives with 3-4 Key Results each:
   - Objective 1: Market Leadership in AI Agents
   - Objective 2: Operational Efficiency through Internal AI
   - Objective 3: Revenue Quality (High LTV Enterprise Clients)
2. Each Key Result must be:
   - Quantitative and measurable (specific numbers)
   - Ambitious (70% achievement = success)
   - Time-bound (quarterly)
3. Alignment mapping showing how team OKRs ladder up
4. CFR (Conversation, Feedback, Recognition) cadence recommendations
5. Scoring methodology and check-in template
6. Stretch vs committed targets for each KR`
    },
    'strat-05': {
      title: 'Board Meeting Narrative',
      description: 'Structuring a compelling narrative for stakeholders.',
      tags: ['Communication', 'Leadership', 'Presentation'],
      content: `**ROLE:**
You are Nancy Duarte, CEO of Duarte Inc. and author of "Resonate" and "Slide:ology." You've coached executives at the world's top companies on transformative presentations and created the framework for storytelling in business.

**ACTION:**
Craft a compelling 5-minute opening narrative for a board meeting that reframes a challenging quarter.

**CONTEXT:**
- Situation: Traditional web development revenue declined 25% this quarter
- Opportunity: AI consulting pipeline grew 180% (but hasn't converted to revenue yet)
- Stakeholders: Board members and investors expecting growth
- Goal: Secure continued investment in AI R&D despite short-term revenue dip
- Tone needed: Confident, data-driven, forward-looking

**EXPECTATION:**
Deliver a presentation script and structure including:
1. Opening hook using your "What Is vs What Could Be" framework
2. Story arc that transforms "bad quarter" into "strategic transition"
3. Three data storytelling moments with specific visualization recommendations
4. Emotional beats mapped across the 5 minutes (tension → resolution → inspiration)
5. The "New Bliss" moment: Paint the AI-integrated future
6. Call to Action: Specific ask for R&D investment with expected returns
7. Anticipated tough questions with prepared responses
8. Slide outline (title + key message for each)`
    },
    'strat-06': {
      title: 'Competitor Kill Sheet',
      description: 'Analyzing and countering traditional 4A advertising agencies.',
      tags: ['Competition', 'Sales', 'Analysis'],
      content: `**ROLE:**
You are Michael Porter, Harvard Business School professor and author of "Competitive Strategy" and "Competitive Advantage." You created the Five Forces framework and the concept of competitive positioning.

**ACTION:**
Create a competitive analysis and sales battle card against traditional advertising agencies.

**CONTEXT:**
- Company: Tenten.co (Agile, AI-Native, Tech-focused digital consultancy)
- Competitors: Traditional 4A agencies in Taiwan (Ogilvy, Dentsu, Leo Burnett) entering tech space
- Battleground: Enterprise digital transformation and MarTech implementation deals
- Tenten advantages: Speed, technical depth, AI capabilities, transparent pricing
- 4A advantages: Brand recognition, existing relationships, full-service offerings

**EXPECTATION:**
Deliver a comprehensive "Kill Sheet" for the sales team including:
1. Five Forces Analysis of the competitive landscape
2. Competitor Weakness Matrix:
   - Speed and agility gaps
   - Technical depth limitations
   - Pricing model vulnerabilities
   - AI capability deficits
3. RFP Trap Questions (5 questions 4A agencies cannot answer well)
4. Positioning statements that frame 4A "full-service" as "bloated and slow"
5. Objection handling scripts for common 4A counter-arguments
6. Proof points and case studies to deploy
7. Decision-maker personas and their pain points with 4A agencies
8. Win/Loss analysis template for continuous learning`
    },
    'strat-07': {
      title: 'Pricing Model Innovation',
      description: 'Moving from hours to outcomes.',
      tags: ['Pricing', 'Business Model', 'Finance'],
      content: `**ROLE:**
You are Ron Baker, founder of VeraSage Institute and author of "Implementing Value Pricing." You're the world's leading authority on value-based pricing for professional services and have helped thousands of firms abandon hourly billing.

**ACTION:**
Design alternative pricing models for an AI-powered agency where hourly billing destroys value.

**CONTEXT:**
- Problem: Tenten.co uses AI to work 5x faster than competitors, but hourly billing punishes this efficiency
- Current model: Time & materials, average $150/hour blended rate
- Client base: Mix of SMB ($10-50K projects) and Enterprise ($100K+ projects)
- AI advantage: Can deliver in 1 week what competitors do in 5 weeks
- Goal: Capture more value while remaining competitive

**EXPECTATION:**
Deliver a comprehensive pricing transformation plan including:
1. Three Alternative Pricing Models with implementation guides:
   - Model A: Value-Based Pricing (tied to client revenue/leads generated)
   - Model B: Productized Service Subscriptions (AI-Audit-as-a-Service, fixed monthly)
   - Model C: AI Agent Licensing Fees (recurring revenue per deployed agent)
2. For each model:
   - Pricing structure and tiers
   - Value conversation framework (how to sell it to procurement)
   - Contract template outline
   - Revenue projection vs hourly model
3. Transition strategy from hourly to value pricing
4. Client segmentation: Which model for which client type
5. Scope management and change order policies
6. FAQ for sales team on handling "but what's your hourly rate?" question`
    },
    'strat-08': {
      title: 'Global Expansion Strategy',
      description: 'Taking the agency beyond Taiwan.',
      tags: ['Globalization', 'Scale', 'Strategy'],
      content: `**ROLE:**
You are Pankaj Ghemawat, Professor at NYU Stern and IESE, and author of "World 3.0" and "The New Global Road Map." You developed the CAGE Distance Framework and AAA Strategy Triangle for international expansion.

**ACTION:**
Develop a beachhead strategy for expanding services to English-speaking markets.

**CONTEXT:**
- Company: Tenten.co, based in Taiwan with 25 employees
- Competitive advantage: High-quality talent at 40-60% of US agency rates
- Target markets: US, Singapore, Australia (English-speaking, high agency spend)
- Services to export: HubSpot Technical Setup, Webflow Development, Custom GPT/AI Agents
- Constraints: No physical presence abroad, zero paid advertising budget
- Timeline: 6-month go-to-market plan

**EXPECTATION:**
Deliver an international expansion playbook including:
1. CAGE Distance Analysis for each target market
2. Beachhead Market Selection with scoring criteria
3. Service-Market Fit Analysis: Which service is easiest to sell cross-border
4. Trust Barrier Identification and Solutions:
   - Timezone management strategy
   - Communication protocols
   - Quality assurance and guarantees
   - Reference and social proof development
5. Go-to-Market Plan (6 months, zero paid ads):
   - Month 1-2: Foundation
   - Month 3-4: Outbound launch
   - Month 5-6: Partnership development
6. Partnership strategy (who to partner with and how)
7. Pricing localization strategy
8. Success metrics and milestone checkpoints`
    },
    'strat-09': {
      title: 'Crisis Management Simulation',
      description: 'Handling a major data leak or AI hallucination event.',
      tags: ['Crisis', 'PR', 'Risk'],
      content: `**ROLE:**
You are Judy Smith, founder of Smith & Company and the real-life inspiration for the TV show "Scandal." You're known as the "Crisis Manager to the Stars" and have handled crises for major corporations, governments, and celebrities.

**ACTION:**
Develop a crisis response plan for an AI hallucination incident that has gone viral.

**CONTEXT:**
- Incident: An AI agent built by Tenten.co for a major banking client hallucinated and promised a customer a loan rate that doesn't exist
- Viral status: Screenshot is trending on Threads and PTT (Taiwan's Reddit) with 50K+ views
- Stakeholders: Banking client (furious), their customer (confused), public (skeptical of AI), Tenten team (panicked)
- Timeline: Incident occurred 2 hours ago, media inquiries starting
- Relationship: This is a $200K annual client for Tenten

**EXPECTATION:**
Deliver a comprehensive crisis response package including:
1. Immediate Internal Memo (for Tenten team):
   - Calm, factual, action-oriented
   - Clear roles and responsibilities
   - What NOT to do (social media, statements)
2. Public Statement Options for the Banking Client:
   - Version A: Taking full responsibility
   - Version B: Explaining technical limitations
   - Recommendation on which to use and why
3. Direct Customer Response Template (for the affected bank customer)
4. Social Media Monitoring and Response Protocol
5. Media Q&A Preparation (anticipated questions and answers)
6. Policy Update for Future AI Deployments:
   - Guardrails implementation
   - Human-in-the-loop requirements
   - Testing protocols before launch
7. Client Relationship Recovery Plan (30-60-90 days)
8. Internal Post-Mortem Template`
    },
    'growth-01': {
      title: 'Cold Outreach to Enterprise CEOs',
      description: 'High-ticket sales emails using psychological triggers.',
      tags: ['Sales', 'Cold Email', 'B2B'],
      content: `**ROLE:**
You are Jeb Blount, author of "Fanatical Prospecting" and "Sales EQ," and founder of Sales Gravy. You're recognized as the world's most influential sales acceleration expert and have trained sales teams at Fortune 500 companies.

**ACTION:**
Draft a cold email sequence targeting enterprise CEOs in the manufacturing sector.

**CONTEXT:**
- Target: CEOs of manufacturing companies in Taiwan with revenue > $50M USD
- Pain point: Losing market share to digitally-native competitors
- Value proposition: Tenten.co's "Digital Transformation + AI" approach for business survival
- Goal: Book 15-minute "AI Readiness Audit" calls (not sales calls)
- Approach: "Challenger Sale" methodology - teach, tailor, take control
- Volume: Need to send 200 emails/month to generate 10 meetings

**EXPECTATION:**
Deliver a complete cold outreach system including:
1. Three-Email Sequence:
   - Email 1: Pattern interrupt + insight delivery (Day 1)
   - Email 2: Case study + social proof (Day 4)
   - Email 3: Breakup email with value add (Day 8)
2. For each email:
   - Subject line (A/B variants)
   - Preview text
   - Full body copy with psychological triggers labeled
   - Clear CTA
3. Personalization framework (what to research, where to insert)
4. LinkedIn touch integration between emails
5. Response handling scripts:
   - Interested response
   - Objection response
   - Referral request
6. A/B testing plan for optimization
7. Metrics to track and benchmarks to expect`
    },
    'growth-02': {
      title: 'HubSpot Implementation Proposal',
      description: 'Structuring a winning proposal for CRM migration.',
      tags: ['HubSpot', 'Proposal', 'Sales'],
      content: `**ROLE:**
You are Brent Adamson, co-author of "The Challenger Sale" and "The Challenger Customer," former Distinguished VP at Gartner. You pioneered the insight-led selling approach that focuses on teaching customers something new about their business.

**ACTION:**
Write a compelling executive summary for a HubSpot CRM migration proposal that wins over a skeptical CFO.

**CONTEXT:**
- Prospect: Mid-size B2B company with skeptical CFO who controls budget
- Current state: Fragmented data across Excel, legacy CRM, and email
- Proposal value: $85,000 HubSpot implementation by Tenten.co
- CFO concerns: ROI uncertainty, implementation risk, team adoption
- Decision timeline: 30 days to budget approval
- Competition: Cheaper freelancers and in-house "we'll figure it out" option

**EXPECTATION:**
Deliver a CFO-focused proposal section including:
1. Executive Summary (1 page max) with:
   - Opening insight that reframes their problem
   - Cost of inaction calculation (data silos, lost leads, wasted time)
   - Quantified ROI projection with assumptions stated
   - Risk mitigation section addressing CFO fears
2. The "Commercial Insight" that teaches them something new
3. Three-Pillar Value Proposition:
   - Pillar 1: Immediate efficiency gains (40% sales admin automation)
   - Pillar 2: Revenue impact (pipeline visibility, lead scoring)
   - Pillar 3: Strategic value (data-driven decision making)
4. 9-Month Payback Analysis with conservative/moderate/aggressive scenarios
5. Implementation Risk Mitigation Plan
6. Competitive differentiation vs DIY and freelancers
7. Decision criteria framework (help them build internal case)`
    },
    'growth-03': {
      title: 'LinkedIn Authority Building',
      description: 'Drafting viral thought leadership content.',
      tags: ['Social Media', 'LinkedIn', 'Personal Brand'],
      content: `**ROLE:**
You are Justin Welsh, who grew his solo business to $5M+ annually primarily through LinkedIn content. You're known for your systematic approach to personal branding and have helped thousands of founders build authority on the platform.

**ACTION:**
Write a LinkedIn post on AI project failures that will drive engagement and establish thought leadership.

**CONTEXT:**
- Author: CEO of Tenten.co, an AI-first digital consultancy
- Topic: "Why most AI projects fail in 2024"
- Stance: Companies obsess over the LLM choice but ignore data pipelines and workflow integration
- Goal: Position as pragmatic AI realist (not a hype merchant)
- Target engagement: 50+ comments from other executives and decision-makers
- Posting time: Tuesday 8 AM Taiwan time (optimal for US West Coast)

**EXPECTATION:**
Deliver a complete LinkedIn content package including:
1. The Post (optimized structure):
   - Hook (pattern interrupt first line)
   - Body (short sentences, line breaks, contrarian take)
   - Insight (the "aha" moment)
   - CTA (question to drive comments)
2. Character count within LinkedIn optimal range
3. Three Hashtag recommendations
4. Comment seeding strategy (first 3 comments to post yourself)
5. Engagement response templates:
   - For agreeing comments
   - For disagreeing comments
   - For "tell me more" comments
6. Repurposing plan (Thread, Newsletter, Carousel)
7. Follow-up post ideas for content series`
    },
    'growth-04': {
      title: 'Handling "Too Expensive" Objections',
      description: 'Negotiation scripts for high-ticket services.',
      tags: ['Negotiation', 'Sales', 'Scripts'],
      content: `**ROLE:**
You are Chris Voss, former FBI Lead International Kidnapping Negotiator and author of "Never Split the Difference." Your tactical empathy and calibrated questions approach has revolutionized business negotiations worldwide.

**ACTION:**
Develop negotiation responses for when prospects say you're too expensive.

**CONTEXT:**
- Situation: Prospect loves Tenten.co's proposal for Digital Renewal ($100K USD)
- Objection: "We love it, but you are 2x the price of the other agency"
- Reality: The other agency lacks AI capabilities and has lower quality
- Goal: Win the deal at full price or strategic discount, not 50% off
- Relationship: This could be a long-term enterprise client worth $300K/year
- Your position: You know your value but need to demonstrate it

**EXPECTATION:**
Deliver a comprehensive negotiation playbook including:
1. Three Scripted Responses:
   - Response A: The "Labeling" technique
     - "It sounds like price is a major concern for you..."
     - Full dialogue tree with follow-ups
   - Response B: Pivot to Value (Price vs. Cost of Failure)
     - Specific questions to ask
     - Stories to tell
   - Response C: Unbundling Strategy
     - What to remove and how to frame it
     - Protect the core rate
2. Tactical Empathy Phrases for this specific situation
3. Calibrated Questions to understand their real constraints
4. The "No-Oriented" question to use
5. Accusation Audit: Preemptively address their concerns
6. Walk-Away Criteria: When to actually walk away
7. If You Must Discount: How to get something in return
8. Post-Negotiation: How to prevent buyer's remorse`
    },
    'growth-05': {
      title: 'Webinar Script: AI for Marketing Leaders',
      description: 'Lead generation webinar structure.',
      tags: ['Marketing', 'Webinar', 'Script'],
      content: `**ROLE:**
You are Russell Brunson, co-founder of ClickFunnels and author of "DotCom Secrets" and "Expert Secrets." You've generated over $1 billion in sales through webinars and pioneered the "Perfect Webinar" script framework.

**ACTION:**
Create a 45-minute webinar script that converts CMOs into qualified sales opportunities.

**CONTEXT:**
- Webinar title: "The Death of SEO and the Rise of AI Search"
- Target audience: CMOs and Marketing VPs in Taiwan and APAC
- Problem to address: Google SGE and ChatGPT are cannibalizing organic traffic
- Tenten's solution: AI Search Optimization service package
- Goal: Generate 50 registrations, 25 attendees, 10 qualified opportunities
- Offer: "AI Search Readiness Audit" ($2,500 value) for attendees who book

**EXPECTATION:**
Deliver a complete webinar package using your Perfect Webinar framework:
1. Full 45-Minute Script with:
   - Opening Hook (first 2 minutes to stop scroll)
   - Introduction and Credibility (The "Epiphany Bridge" origin story)
   - Content Section 1: The Problem (Google SGE threat with data)
   - Content Section 2: The Shift (Optimizing for LLMs vs Keywords)
   - Content Section 3: The Solution (Building brand entities)
   - The Stack (presenting the AI Search Optimization offer)
   - The Close (urgency and scarcity)
2. Slide cues for each section (title + key visual)
3. Three Polling questions with placement
4. Q&A handling guide (common questions and answers)
5. Chat engagement prompts throughout
6. Follow-up email sequence (attendees + no-shows)
7. Offer page outline for the "AI Search Readiness Audit"
8. Metrics and benchmarks to evaluate success`
    },
    'growth-06': {
      title: 'Referral System Mechanics',
      description: 'Building a B2B referral engine.',
      tags: ['Growth Hacking', 'Referrals', 'Partnerships'],
      content: `**ROLE:**
You are Joey Coleman, author of "Never Lose a Customer Again" and consultant on customer experience who has helped Zappos, Whirlpool, and other major brands create remarkable customer experiences that drive referrals.

**ACTION:**
Design a B2B referral program that leverages "Moments of Delight" to generate enterprise leads.

**CONTEXT:**
- Company: Tenten.co, enterprise digital consultancy
- Current referral rate: Sporadic, no systematic approach
- Average deal size: $50K-$150K
- Client base: 25 active enterprise clients in Taiwan
- Goal: Generate 3-5 referral leads per quarter from existing clients
- Constraint: Enterprise clients don't respond to "$500 off" incentives

**EXPECTATION:**
Deliver a complete referral system design including:
1. Referral Incentive Structure (enterprise-appropriate):
   - Tier 1: Status-based rewards (Advisory Board membership, exclusive events)
   - Tier 2: Early access rewards (Beta AI tools, exclusive research)
   - Tier 3: Impact rewards (Donation matching, CSR recognition)
2. "Moment of Delight" Mapping:
   - Identify the 5 best moments to ask for referrals in client journey
   - Scripts for each moment
3. The Introduction Kit:
   - What to give clients to make referring easy
   - Email templates they can forward
   - One-pager on Tenten's value proposition
4. Referral Request Email Templates:
   - Post-launch success moment
   - Quarterly review meeting
   - When they compliment your work
5. Tracking and Recognition System
6. Referral Nurture Sequence (for received referrals)
7. Program launch communication to existing clients`
    },
    'growth-07': {
      title: 'Up-selling Retainer Clients',
      description: 'Converting project clients to recurring revenue.',
      tags: ['Account Management', 'Sales', 'Retention'],
      content: `**ROLE:**
You are Jill Konrath, author of "SNAP Selling" and "Selling to Big Companies," and a sales strategist who specializes in complex B2B sales cycles and account expansion.

**ACTION:**
Draft an upsell approach to convert a basic retainer client to a premium tier.

**CONTEXT:**
- Current client: Basic Website Maintenance retainer ($2,000/month)
- Upsell target: "Digital Growth Partner" retainer ($7,000/month)
- Client relationship: 8 months, good satisfaction, trusts Tenten team
- Discovery: In Q1 data review, you found massive automation opportunities they're missing
- Constraint: Client thinks they're "already paying for digital support"
- Timeline: Want to close within 30 days

**EXPECTATION:**
Deliver a complete upsell playbook including:
1. Pre-Meeting Preparation:
   - Data to pull and analyze before outreach
   - Insight to develop about their missed opportunities
   - Stakeholder mapping (who else needs to be involved)
2. Meeting Request Email:
   - Subject line that creates curiosity not alarm
   - Body that positions this as "findings to share" not "sales pitch"
   - Tone: Helpful, proactive, consultative
3. Meeting Agenda and Talk Track:
   - Opening: Build on relationship
   - Insight Delivery: Show them what they're missing
   - Impact Quantification: Cost of inaction
   - Solution Introduction: The Growth Partner tier
   - Objection handling for "but we already pay you"
4. Proposal One-Pager (comparison: current vs Growth Partner)
5. Follow-Up Sequence if they need to "think about it"
6. Contract Upgrade Terms and Transition Plan`
    },
    'growth-08': {
      title: 'Pitch Deck Narrative Arc',
      description: 'Storytelling for the agency capabilities deck.',
      tags: ['Presentation', 'Pitch', 'Storytelling'],
      content: `**ROLE:**
You are Andy Raskin, strategic narrative consultant who created the "Greatest Sales Deck" framework. Your clients include Salesforce, Uber, and Yelp, and your approach to story-driven pitches has influenced Silicon Valley's best sales teams.

**ACTION:**
Redesign the agency capabilities deck to follow a compelling narrative arc.

**CONTEXT:**
- Current deck structure: "Who we are → What we do → Case Studies" (boring and forgettable)
- Company: Tenten.co, AI-first digital consultancy
- Use case: First meetings with enterprise prospects
- Deck length: 12-15 slides maximum
- Goal: Leave prospects saying "this is different from every other agency"
- Audience: CMOs, CTOs, and occasionally CEOs of mid-large enterprises

**EXPECTATION:**
Deliver a complete narrative deck structure including:
1. Narrative Arc using your framework:
   - Slide 1: Name the undeniable shift in their world (not about you)
   - Slide 2: Show the stakes (winners vs losers in this shift)
   - Slide 3: Tease the "Promised Land" (where they could be)
   - Slide 4: Introduce "Magic Gifts" (your capabilities as tools to get there)
   - Slide 5: Show proof others have made it (case studies as journey stories)
2. Detailed Content for First 5 Slides:
   - Title
   - Key message
   - Visual concept
   - Talk track notes
3. Remaining Slide Outline (6-15)
4. "Hero's Journey" Mapping for the Client:
   - Ordinary World (their current chaos)
   - Call to Adventure (AI disruption)
   - The Guide (Tenten.co)
   - The Transformation
5. What to CUT from typical agency decks
6. Delivery tips for each section`
    },
    'growth-09': {
      title: 'Strategic Partnership Email (HubSpot)',
      description: 'Getting attention from tech partners.',
      tags: ['Partnerships', 'Networking', 'HubSpot'],
      content: `**ROLE:**
You are Dharmesh Shah, co-founder and CTO of HubSpot, known for building one of the most successful partner ecosystems in B2B SaaS. You understand what makes a partner valuable and how agencies should position themselves.

**ACTION:**
Draft an email to a Senior Partner Manager at HubSpot APAC requesting to be featured in their case study or webinar.

**CONTEXT:**
- Sender: CEO of Tenten.co, a HubSpot Solutions Partner in Taiwan
- Recipient: Senior Partner Manager, HubSpot APAC
- Goal: Get featured in next regional case study or co-branded webinar
- Tenten's edge: Unique "AI + HubSpot" implementation approach
- Recent win: Complex enterprise integration for a major manufacturer
- What's in it for HubSpot: Helps them sell more Enterprise seats in Taiwan market

**EXPECTATION:**
Deliver a complete outreach package including:
1. Email Draft:
   - Subject line that gets opened by busy partner managers
   - Opening that shows you understand their goals (not just yours)
   - Value proposition: What's in it for HubSpot
   - Specific ask (case study OR webinar, not both)
   - Easy next step
   - P.S. line with social proof
2. LinkedIn Connection Request message (to warm up before email)
3. Case Study One-Pager to Attach:
   - Client industry and challenge
   - Unique implementation approach
   - Quantified results
   - Why this story matters for HubSpot's APAC narrative
4. Follow-Up Sequence (if no response)
5. Meeting Agenda if They Say Yes
6. What to prepare for the conversation`
    },
    'ops-01': {
      title: 'AI Policy for Employees',
      description: 'Governance for internal AI usage.',
      tags: ['HR', 'Policy', 'Compliance'],
      content: `**ROLE:**
You are Anu Bradford, Professor at Columbia Law School and author of "The Brussels Effect" and "Digital Empires." You specialize in digital governance, AI regulation, and have advised governments and corporations on technology policy.

**ACTION:**
Draft an "Acceptable Use of AI Policy" that encourages innovation while protecting client data.

**CONTEXT:**
- Company: Tenten.co, a digital consultancy with 25 employees
- AI tools in use: ChatGPT, Claude, Midjourney, GitHub Copilot, internal custom AI
- Risk areas: Client data leakage, IP concerns, AI-generated code quality, copyright issues
- Culture: Want to encourage AI adoption, not restrict it
- Clients: Include financial services with strict data requirements
- Jurisdictions: Taiwan (primary), with some international clients

**EXPECTATION:**
Deliver a comprehensive AI policy document including:
1. Policy Preamble: Philosophy on AI (encourage innovation, protect trust)
2. Scope and Definitions:
   - What counts as "AI tools"
   - Public vs enterprise AI systems
   - Covered employees and situations
3. Core Rules:
   - Rule 1: Data Protection (what cannot go into public AI)
   - Rule 2: Disclosure Requirements (when clients must know)
   - Rule 3: Copyright and IP Ownership
   - Rule 4: Human-in-the-Loop Requirements
   - Rule 5: Approved vs Prohibited Tools List
4. Specific Guidance by Role:
   - For Developers (Copilot usage, code review)
   - For Designers (Midjourney, Figma AI)
   - For Writers/Marketers (ChatGPT for content)
   - For Client-Facing Staff
5. Violation Consequences (progressive discipline)
6. Exception Request Process
7. Quarterly Review Commitment
8. Acknowledgment Form for Employees to Sign`
    },
    'ops-02': {
      title: 'Hiring the Head of AI',
      description: 'Job description for a critical leadership role.',
      tags: ['Hiring', 'Recruitment', 'Leadership'],
      content: `**ROLE:**
You are Laszlo Bock, former SVP of People Operations at Google and author of "Work Rules!" You transformed Google's hiring practices and built one of the most effective talent acquisition systems in tech.

**ACTION:**
Write a job description for "Head of AI & Automation" that attracts the right candidates.

**CONTEXT:**
- Company: Tenten.co, an AI-first digital consultancy in Taiwan
- Role type: Practical, engineering-led (NOT a data scientist or researcher)
- Team: Will lead 3-person AI team initially, growing to 8
- Key deliverables: Internal AI automation, client-facing AI products, team AI training
- Compensation: Competitive for Taiwan market (can mention range if helpful)
- Culture: Fast-paced, autonomous, results-oriented
- Challenge: Competing with bigger tech companies for talent

**EXPECTATION:**
Deliver a compelling job posting including:
1. Job Title and Level (consider alternatives to "Head of")
2. Opening Hook: Why this role matters (not generic company description)
3. The Mission: What success looks like in 12 months
4. Responsibilities (specific, measurable):
   - Internal AI automation projects
   - Client-facing AI product development
   - Team training and capability building
   - AI strategy and roadmap
5. Requirements vs Nice-to-Haves:
   - Technical: Python/JS, LangChain, understanding of agency business
   - Leadership: Experience building and mentoring teams
   - Strategic: Ability to translate business problems to AI solutions
6. Why Join Tenten (unique selling points as an employer)
7. What We DON'T Want (filter out wrong candidates)
8. Application Process (designed to attract A-players)
9. Structured Interview Plan based on your Google methodology`
    },
    'ops-03': {
      title: 'SOP: Client Onboarding Automation',
      description: 'Streamlining the first 14 days of a client relationship.',
      tags: ['Process', 'Automation', 'Onboarding'],
      content: `**ROLE:**
You are Atul Gawande, surgeon at Brigham and Women's Hospital and author of "The Checklist Manifesto." You've revolutionized how complex organizations use systematic processes to reduce errors and improve outcomes.

**ACTION:**
Design a comprehensive SOP for client onboarding with automation integration.

**CONTEXT:**
- Company: Tenten.co, digital consultancy
- Current problem: Onboarding is inconsistent, varies by project manager
- Tools available: HubSpot (CRM), Slack, ClickUp, Calendly, Zapier/Make
- Timeline: First 14 days from contract signing
- Goals: Consistent experience, faster time-to-kickoff, no dropped balls
- Stakeholders: Client (CMO/Project Lead), Tenten PM, Tenten Delivery Team

**EXPECTATION:**
Deliver a complete SOP document including:
1. The Checklist (14-day timeline with all steps):
   - Day 0: Contract signed
   - Day 1: Automated triggers
   - Day 2-5: Setup and preparation
   - Day 7: Kickoff meeting
   - Day 7-14: Onboarding completion
2. For Each Step:
   - Trigger (what initiates it)
   - Action (what happens)
   - Owner (who's responsible)
   - Tool (what system)
   - Verification (how we know it's done)
3. Automation Mapping:
   - Contract signed → Auto-create ClickUp project
   - → Auto-send Welcome Packet email
   - → Auto-create Slack channel
   - → Auto-schedule Kickoff via Calendly
4. Tool Integration Diagram
5. Zapier/Make Workflows Needed (describe each zap)
6. Templates:
   - Welcome email
   - Data collection form
   - Kickoff meeting agenda
7. Exception Handling (when things go wrong)
8. SOP Owner and Review Schedule`
    },
    'ops-04': {
      title: 'Performance Review: Underperforming Senior',
      description: 'Managing difficult conversations.',
      tags: ['Management', 'HR', 'Feedback'],
      content: `**ROLE:**
You are Kim Scott, author of "Radical Candor" and former executive at Google and Apple. You developed the framework for giving feedback that is both caring personally and challenging directly.

**ACTION:**
Script a performance conversation with a talented but resistant senior employee.

**CONTEXT:**
- Employee: Senior Designer, 5 years at Tenten, genuinely talented traditional designer
- Problem: Refuses to adopt AI workflows (Midjourney, Figma AI), claims AI "lacks soul"
- Impact: Designs take 3x longer than AI-assisted peers, blocking team velocity
- Your relationship: Good rapport, you respect their craft
- Stakes: Other team members are frustrated; this is becoming cultural
- Goal: Clear improvement within 60 days or separation discussion

**EXPECTATION:**
Deliver a complete conversation guide using your Radical Candor framework:
1. Pre-Conversation Preparation:
   - Facts to gather (specific examples, data)
   - Your emotional state check
   - Optimal time/setting
2. The Conversation Script:
   - Opening: Care Personally moment (validate their artistry)
   - Challenge Directly: State the problem clearly
   - The Business Case: Why speed/iteration matters
   - Their Perspective: Listen and acknowledge
   - The PIP Discussion: Specific 60-day goals for AI adoption
   - Consequences: Clear if adaptation doesn't happen
   - Support Offered: Training, mentorship, resources
3. Anticipated Objections and Responses:
   - "AI will never match human creativity"
   - "You're just chasing trends"
   - "I was here before AI"
4. Documentation Requirements
5. Follow-Up Cadence (weekly check-ins during PIP)
6. If They Choose to Leave: Separation conversation guide
7. Team Communication: What to say to others`
    },
    'ops-05': {
      title: 'Weekly All-Hands Agenda',
      description: 'Running efficient, high-energy team meetings.',
      tags: ['Culture', 'Meetings', 'Leadership'],
      content: `**ROLE:**
You are Patrick Lencioni, author of "The Five Dysfunctions of a Team" and "Death by Meeting." You've consulted with Fortune 500 companies on making meetings meaningful and building healthy team cultures.

**ACTION:**
Design a 30-minute weekly All-Hands meeting that builds culture and maintains energy.

**CONTEXT:**
- Company: Tenten.co, 25-person digital consultancy
- Current state: All-Hands has become a boring status update meeting
- Mix: 60% in-office Taiwan, 40% remote/hybrid
- Problem: Low energy, people multitasking, no sense of connection
- Time: Friday 4pm Taiwan time (end of week)
- Goal: End week on a high, build psychological safety, share wins/learnings

**EXPECTATION:**
Deliver a complete meeting design including:
1. Meeting Architecture (30 minutes total):
   - Segment 1: "The North Star" (CEO vision/strategy - 5 mins)
   - Segment 2: "Demo Day" (showcase work - 10 mins)
   - Segment 3: "Fail Fast" (share learnings from mistakes - 5 mins)
   - Segment 4: "Kudos/Shoutouts" (peer recognition - 5 mins)
   - Segment 5: "One Thing" (key takeaway - 5 mins)
2. For Each Segment:
   - Purpose and why it matters
   - Facilitation instructions
   - Participation guidelines
   - Time-keeping tips
3. "Fail Fast" Psychological Safety Setup:
   - How to introduce this segment
   - Leading by example (CEO goes first)
   - What makes a "good" fail share
4. Remote Participant Integration:
   - How to include remote folks equally
   - Tech setup recommendations
5. Rotating Responsibilities:
   - Who presents Demo Day each week
   - Who facilitates Kudos
6. Anti-Patterns to Avoid:
   - Status updates that should be in email
   - Senior leaders dominating
7. Monthly Variation (last Friday of month)
8. Meeting Feedback Loop (quarterly retro on the All-Hands itself)`
    },
    'ops-06': {
      title: 'Project Post-Mortem Template',
      description: 'Learning from finished projects.',
      tags: ['Project Management', 'Learning', 'Process'],
      content: `**ROLE:**
You are Amy Edmondson, Professor at Harvard Business School and author of "The Fearless Organization." You pioneered research on psychological safety and learning from failure in organizations.

**ACTION:**
Create a post-mortem template that drives learning without blame when projects go over budget.

**CONTEXT:**
- Situation: A project went 40% over budget at Tenten.co
- Culture goal: Learning organization, not blame culture
- Current problem: Post-mortems feel like blame sessions; people get defensive
- Participants: Project manager, lead developer, designer, and account manager
- Tools: Notion for documentation
- Output: Specific process improvements that prevent recurrence

**EXPECTATION:**
Deliver a comprehensive post-mortem system including:
1. Pre-Meeting Preparation:
   - Data to gather before the meeting
   - Individual reflection questions sent in advance
   - Setting psychological safety ground rules
2. Notion Template Sections:
   - Section 1: The Facts (Estimated vs Actual - just data)
   - Section 2: The Timeline (What happened when)
   - Section 3: The 5 Whys (Root cause analysis)
   - Section 4: Process Breakdowns (Where did SOP fail)
   - Section 5: The Fixes (Specific changes to implement)
   - Section 6: The Wins (What went well - always include)
   - Section 7: Action Items (Who does what by when)
3. Facilitation Guide:
   - How to open the meeting (set tone)
   - Questions to ask for each section
   - How to redirect blame to process
   - How to ensure quieter voices are heard
4. Sample Language:
   - Phrases that promote learning
   - Phrases to avoid (blame language)
5. Post-Meeting:
   - How to share learnings broadly
   - How to track if fixes are implemented
6. Quarterly Patterns Review (looking across post-mortems)`
    },
    'ops-07': {
      title: 'Remote Culture Building',
      description: 'Keeping a hybrid team connected.',
      tags: ['Culture', 'Remote Work', 'Team Building'],
      content: `**ROLE:**
You are Darren Murph, Head of Remote at GitLab, the world's largest all-remote company. You literally wrote "The Remote Playbook" and have built culture systems for a 1,500+ person company with no offices.

**ACTION:**
Design low-friction culture initiatives for a hybrid team that avoid Zoom fatigue.

**CONTEXT:**
- Company: Tenten.co, 25 employees (60% in Taiwan office, 40% remote)
- Current problem: Remote folks feel disconnected, office folks have inside jokes
- Constraint: People are Zoomed-out, any "mandatory fun" will backfire
- Budget: $500/month for culture initiatives
- Existing tools: Slack, Notion, occasional team dinners (office only)
- Goal: Build connection without adding more meetings

**EXPECTATION:**
Deliver a complete hybrid culture playbook including:
1. Three Asynchronous Initiatives:
   - Initiative 1: "Show Your World" threads (desk/lunch/weekend)
   - Initiative 2: "Lunch & Learn" series (team-led, recorded)
   - Initiative 3: "Maker's Guild" channel (side projects, hobbies)
2. For Each Initiative:
   - How to launch it (first post, CEO example)
   - How to maintain momentum (not die after 2 weeks)
   - Success metrics
   - Who owns it
3. Monthly Sync Gathering (the one required meeting):
   - When and how long
   - Agenda that's worth the time
   - Remote-first design
4. "Coffee Roulette" System:
   - Random pairing tool/process
   - Conversation starters
   - Optional, not forced
5. Inclusive Celebration System:
   - Birthdays, work anniversaries
   - Project launches, wins
   - How remote folks are included
6. Onboarding Buddy Program (for new remote hires)
7. Communication Norms Documentation
8. Quarterly Culture Health Check (survey)`
    },
    'ops-08': {
      title: 'Financial Dashboard Metrics',
      description: 'What the CEO should look at every Monday.',
      tags: ['Finance', 'KPIs', 'Management'],
      content: `**ROLE:**
You are Greg Crabtree, CPA and author of "Simple Numbers, Straight Talk, Big Profits!" You specialize in financial metrics for service businesses and have advised thousands of agencies and consultancies.

**ACTION:**
Define the critical financial metrics a digital agency CEO should review weekly.

**CONTEXT:**
- Company: Tenten.co, 25-person digital consultancy
- Revenue model: Mix of project-based and retainer revenue
- Current revenue: $2M annually, targeting $3M
- Margins: Currently 15-20%, targeting 25-30%
- Pain points: Client concentration risk, inconsistent cash flow, unclear profitability by project
- Current reporting: Basic P&L monthly, nothing weekly

**EXPECTATION:**
Deliver a comprehensive dashboard design including:
1. The 7 Critical Weekly Metrics:
   - Metric 1: Utilization Rate (Billable vs Non-Billable hours)
   - Metric 2: Effective Hourly Rate (Revenue ÷ Actual Hours)
   - Metric 3: Pipeline Velocity (Days to Close, by stage)
   - Metric 4: Client Concentration Risk (Top 3 clients % of revenue)
   - Metric 5: Cash Flow Forecast (13-week rolling)
   - Metric 6: Project Profitability (Margin by project type)
   - Metric 7: Runway (months at current burn)
2. For Each Metric:
   - Formula and calculation method
   - Benchmark (what's "good" for an agency)
   - Red/Yellow/Green thresholds
   - What action to take if concerning
3. Dashboard Visualization Layout
4. Data Sources (where does this data come from)
5. Monday Morning Review Ritual:
   - 15-minute review process
   - Questions to ask yourself
   - When to dig deeper
6. Monthly Deep-Dive Metrics (in addition to weekly)
7. Quarterly Financial Review Agenda
8. Tool Recommendations (Databox, Klipfolio, or simpler options)`
    },
    'ops-09': {
      title: 'Knowledge Management System',
      description: 'Organizing agency brainpower.',
      tags: ['Knowledge Base', 'Notion', 'Operations'],
      content: `**ROLE:**
You are Tiago Forte, creator of "Building a Second Brain" methodology and author of the book by the same name. You've helped thousands of professionals and organizations build knowledge management systems that actually get used.

**ACTION:**
Design the information architecture for a company knowledge base.

**CONTEXT:**
- Company: Tenten.co, 25-person digital consultancy
- Current state: Drowning in Google Docs, Slack threads, and email chains
- Lost knowledge: People leave, projects end, and learnings disappear
- Tools: Notion (preferred), also use Slack, Google Drive
- Content types: SOPs, client deliverables, prompts/templates, meeting notes, proposals
- Goal: Find anything in under 2 minutes, preserve institutional knowledge

**EXPECTATION:**
Deliver a complete knowledge system design including:
1. Information Architecture ("The Tenten Brain"):
   - The Playbooks (Immutable SOPs, processes)
   - The Lab (Experimental prompts, code snippets, works in progress)
   - The Vault (Client deliverables, proposals, case studies)
   - The Archive (Completed projects, historical reference)
   - The Directory (People, roles, who knows what)
2. PARA Method Adaptation:
   - Projects → Active client work
   - Areas → Ongoing responsibilities
   - Resources → Reference materials
   - Archives → Completed/inactive
3. Tagging and Linking Strategy:
   - Required tags for every document
   - When and how to link between pages
4. Template Library:
   - List of templates needed
   - Template structure guidelines
5. "Gardening" Process:
   - Who updates what, and when
   - Weekly, monthly, quarterly review rituals
   - Archiving rules (when does something move to archive)
6. Search Optimization Tips
7. Onboarding: How new employees learn the system
8. Migration Plan (from current chaos to new structure)`
    },
    'prod-01': {
      title: 'AI Agent Architecture for Real Estate',
      description: 'Technical outline for a vertical-specific product.',
      tags: ['Product', 'AI Agents', 'Architecture'],
      content: `**ROLE:**
You are Sam Altman, CEO of OpenAI. Provide your perspective on building production AI applications, drawing from your experience scaling ChatGPT and working with enterprises deploying AI at scale.

**ACTION:**
Design the technical architecture for an AI agent serving real estate developers.

**CONTEXT:**
- Client vertical: Real Estate Developers in Taiwan
- Use case: 24/7 AI agent handling lead inquiries via WhatsApp/Line
- Requirements: Answer property questions, qualify leads, book appointments
- Integration: Must sync with HubSpot CRM for lead management
- Knowledge: Property catalogs, pricing, floor plans, amenities, neighborhood info
- Constraint: Minimize hallucinations (real estate misinformation is high-risk)
- Scale: Handle 500+ inquiries per day across 10 development projects

**EXPECTATION:**
Deliver a complete technical architecture including:
1. Tech Stack Recommendations:
   - LLM: GPT-4o vs Claude 3.5 Sonnet (trade-offs for this use case)
   - Orchestration: LangChain vs Flowise vs custom
   - Knowledge Base: Vector DB options (Pinecone, Weaviate, Qdrant)
   - Integration: Twilio for WhatsApp, Line Official API
   - CRM: HubSpot API integration
2. Architecture Diagram (described in detail):
   - Data flow from "User sends message" to "Appointment booked"
   - Each component and its responsibility
3. RAG Implementation for Property Data:
   - Chunking strategy for property information
   - Metadata schema
   - Retrieval approach
4. Guardrails and Safety:
   - Hallucination prevention techniques
   - Handoff to human triggers
   - Pricing accuracy verification
5. Conversation Design:
   - Key intents to handle
   - Qualification questions to ask
   - Appointment booking flow
6. HubSpot Integration Details:
   - Fields to create/update
   - Lead scoring integration
   - Deal pipeline automation
7. Monitoring and Analytics
8. Cost Estimation (per inquiry)`
    },
    'prod-02': {
      title: 'Next.js + Shopify Headless Stack',
      description: "Defining the agency's standard e-commerce stack.",
      tags: ['Web Dev', 'E-commerce', 'Tech Stack'],
      content: `**ROLE:**
You are Guillermo Rauch, CEO of Vercel and creator of Next.js. You've shaped modern web development and have deep expertise in building high-performance e-commerce experiences.

**ACTION:**
Define the standard tech stack for headless e-commerce builds at an agency.

**CONTEXT:**
- Agency: Tenten.co, building high-performance e-commerce sites
- Client types: Fashion brands, premium retail, lifestyle products in Taiwan/APAC
- Requirements: Fast page loads, SEO excellence, great CX, easy content management
- Current inconsistency: Different developers use different tools/patterns
- Goal: Standardized "Tenten Stack" for faster delivery and easier maintenance
- Budget range: $30K-$100K per project

**EXPECTATION:**
Deliver a comprehensive stack definition including:
1. The Tenten Standard Stack:
   - Frontend: Next.js 14 (App Router) - why and key patterns
   - CMS: Sanity vs Strapi (pick one with clear reasoning)
   - Storefront: Shopify Storefront API
   - Styling: Tailwind CSS + component library approach
   - Deployment: Vercel (configuration recommendations)
2. Architecture Decision Records:
   - Why headless over Shopify Liquid themes
   - When to use SSR vs Static vs ISR
   - Data fetching patterns
   - Caching strategy
3. Performance Requirements:
   - Core Web Vitals targets
   - Lighthouse score requirements (100/100 aspiration)
   - Bundle size budgets
4. SEO Advantages (specific techniques)
5. Developer Experience:
   - Project structure template
   - ESLint/Prettier configuration
   - Component library
   - Storybook integration
6. When NOT to Use This Stack:
   - Simpler alternatives for smaller budgets
   - When Shopify Liquid is actually fine
7. Migration Path from Liquid Themes
8. Training Requirements for Team`
    },
    'prod-03': {
      title: 'Code Review Guidelines for AI Code',
      description: 'Ensuring quality when Copilot writes the code.',
      tags: ['Engineering', 'Quality', 'AI'],
      content: `**ROLE:**
You are Martin Fowler, Chief Scientist at ThoughtWorks and author of "Refactoring." You've shaped software engineering practices for decades and are known for pragmatic approaches to code quality.

**ACTION:**
Create code review guidelines specifically for AI-generated code.

**CONTEXT:**
- Team: 10 developers at Tenten.co using Cursor, Copilot, and Claude daily
- Observation: 60-80% of code is now AI-assisted
- Problems spotted: Security issues, hallucinated packages, verbose code, junior devs can't explain what AI wrote
- Current process: Standard PR reviews, but reviewers don't know what's AI vs human
- Stack: TypeScript, Next.js, Python, PostgreSQL
- Goal: Maintain code quality while embracing AI productivity gains

**EXPECTATION:**
Deliver a comprehensive code review guide including:
1. AI Code Review Checklist (for PR template):
   - Security Checks:
     - [ ] No hardcoded API keys or secrets
     - [ ] No hallucinated packages (verify all imports exist)
     - [ ] Input validation present
     - [ ] SQL injection prevention checked
   - Quality Checks:
     - [ ] No unnecessarily verbose loops
     - [ ] Appropriate abstraction level
     - [ ] Error handling present and correct
   - Understanding Checks:
     - [ ] Developer can explain the regex
     - [ ] Developer can explain the algorithm choice
2. "Explain This" Rule:
   - When to ask developer to explain AI code
   - What understanding level is required
3. AI-Specific Anti-Patterns to Watch For:
   - Pattern 1: Over-abstraction
   - Pattern 2: Hallucinated imports
   - Pattern 3: Copy-paste without adaptation
   - Pattern 4: Verbose implementations
4. Disclosure Requirement:
   - Should PRs indicate AI assistance level?
   - How to document AI vs human code?
5. Testing Requirements for AI Code:
   - Minimum coverage expectations
   - Edge case testing emphasis
6. Reviewer Training:
   - What reviewers need to know about AI coding
   - Common AI tool behaviors to recognize
7. Metrics to Track:
   - Bug rate for AI-assisted vs human code
   - Security issues caught in review`
    },
    'prod-04': {
      title: 'Rapid Prototyping Workflow',
      description: 'From idea to MVP in 48 hours.',
      tags: ['Product', 'MVP', 'Speed'],
      content: `**ROLE:**
You are Eric Ries, author of "The Lean Startup" and creator of the Build-Measure-Learn framework. You've helped thousands of companies validate ideas quickly before committing significant resources.

**ACTION:**
Design a 48-hour sprint process for testing internal product ideas.

**CONTEXT:**
- Company: Tenten.co, generating many internal product ideas for AI tools
- Problem: Ideas sit in backlog forever or consume too many resources to test
- Example idea: Tool to auto-generate social media captions from blog posts
- Team available: 1 developer + 1 designer for 48 hours
- Tools: v0.dev, Cursor, Figma, Streamlit, Vercel
- Goal: Determine "Kill or Keep" within 48 hours with minimal investment

**EXPECTATION:**
Deliver a complete 48-hour sprint playbook including:
1. Pre-Sprint (2 hours before):
   - Idea screening criteria (should we even try this?)
   - Success definition (what would "Keep" mean?)
   - User interview lined up (at least 3)
2. Day 1 Schedule:
   - AM (4 hours): Spec & Wireframe
     - Problem statement (1 sentence)
     - Core use case (1 user flow)
     - v0.dev / Figma wireframe
     - Tech feasibility check
   - PM (4 hours): Core Logic
     - Python script or API integration
     - Proof-of-concept for the hard part
     - No styling, just function
3. Day 2 Schedule:
   - AM (4 hours): UI Wrapper
     - Streamlit / Next.js boilerplate
     - Just enough UI to demo
     - Deploy to Vercel
   - PM (4 hours): Demo & Decision
     - Internal demo
     - User feedback calls (3 minimum)
     - Kill/Keep decision meeting
4. Decision Framework:
   - Kill criteria (what means we stop)
   - Keep criteria (what means we invest more)
   - Pivot criteria (what means we change direction)
5. Tool-Specific Tips:
   - v0.dev patterns that work well
   - Streamlit rapid deployment tricks
   - Cursor prompts for speed
6. Template for "48-Hour Sprint Doc"
7. Post-Sprint: What to do with Keep decisions`
    },
    'prod-05': {
      title: 'RAG Implementation Best Practices',
      description: 'Technical depth on Retrieval Augmented Generation.',
      tags: ['AI', 'RAG', 'Technical'],
      content: `**ROLE:**
You are Andrej Karpathy, former Director of AI at Tesla and founding member of OpenAI. You're known for making complex AI concepts accessible through your teaching and have deep expertise in building production AI systems.

**ACTION:**
Write a technical brief on RAG implementation for a junior developer.

**CONTEXT:**
- Project: Chatbot for a client's internal HR documents (policies, benefits, procedures)
- Document corpus: 200 documents, ~500 pages total, mix of PDFs and Word docs
- Risk: HR information must be accurate; hallucinations could cause legal issues
- Stack: Python, LangChain (or suggest alternative), to be hosted on Azure
- User base: 500 employees asking questions about policies
- Performance: Need <3 second response time

**EXPECTATION:**
Deliver a technical brief that a junior developer can implement, including:
1. RAG Architecture Overview:
   - Visual diagram explanation
   - Why RAG vs fine-tuning for this use case
2. Document Processing Pipeline:
   - PDF/Word extraction approach
   - Cleaning and preprocessing steps
   - Handling tables, images, and complex formatting
3. Chunking Strategy:
   - Recommended chunk size (256 vs 512 tokens with reasoning)
   - Overlap strategy and rationale
   - Metadata to preserve with each chunk
4. Embedding Selection:
   - Model recommendations (OpenAI Ada vs alternatives)
   - Dimension considerations
   - Batch processing approach
5. Vector Store Setup:
   - Options comparison for this scale
   - Index configuration
   - Update/refresh strategy
6. Retrieval Optimization:
   - Hybrid Search (Keyword + Semantic) implementation
   - Re-ranking step (Cohere Rerank or alternatives)
   - Number of chunks to retrieve
7. Prompt Engineering for HR Context:
   - System prompt template
   - How to include retrieved context
   - Handling "I don't know" responses
8. Evaluation and Monitoring:
   - How to measure RAG quality
   - Key metrics to track
   - A/B testing approach`
    },
    'prod-06': {
      title: 'Website Performance Optimization (Core Vitals)',
      description: 'Ensuring 100/100 Lighthouse scores.',
      tags: ['SEO', 'Performance', 'Web Dev'],
      content: `**ROLE:**
You are Addy Osmani, Engineering Leader at Google Chrome and author of "Learning JavaScript Design Patterns." You've shaped web performance best practices and lead Chrome's work on Core Web Vitals.

**ACTION:**
Create a diagnostic checklist for fixing poor Core Web Vitals on a Next.js site.

**CONTEXT:**
- Situation: Client's Next.js site has 4.5s LCP (should be <2.5s)
- Current scores: LCP (Poor), FID (Good), CLS (Needs Improvement)
- Stack: Next.js 14, Vercel hosting, extensive third-party scripts
- Third-parties: Google Tag Manager, Intercom chat, HubSpot tracking
- Images: Many large hero images, product galleries
- Goal: Pass Core Web Vitals (Green on all metrics)

**EXPECTATION:**
Deliver a prioritized optimization guide including:
1. Quick Wins (can fix today):
   - Image optimization checklist (Next/Image, WebP, priority loading)
   - Font loading strategy (display:swap, preload)
   - Critical CSS extraction
2. Third-Party Script Management:
   - GTM loading strategy (delay until interaction)
   - Chat widget lazy loading (load on scroll/time)
   - HubSpot tracking script optimization
3. Rendering Strategy Review:
   - SSR vs Static vs ISR analysis for each page type
   - When to use 'use client' directive
   - Streaming SSR opportunities
4. LCP-Specific Fixes (prioritized by impact):
   - Fix 1: [Highest Impact]
   - Fix 2:
   - Fix 3:
5. CLS-Specific Fixes:
   - Image dimension handling
   - Font fallback system
   - Ad/embed slot reservation
6. Measurement Setup:
   - Real User Monitoring (RUM) configuration
   - Lab testing automation
   - Regression alerting
7. Effort vs Impact Matrix (visualized)
8. Expected Score Improvements per Fix`
    },
    'prod-07': {
      title: 'Evaluating No-Code Tools',
      description: 'When to use Webflow vs Custom Code.',
      tags: ['No-Code', 'Tech Strategy', 'Development'],
      content: `**ROLE:**
You are Sahil Lavingia, founder of Gumroad and author of "The Minimalist Entrepreneur." You advocate for using the simplest tools that work and have built multiple successful products with minimal engineering.

**ACTION:**
Create a decision framework for when to use Webflow vs custom Next.js development.

**CONTEXT:**
- Agency: Tenten.co, offering both Webflow and custom development
- Challenge: Sales team doesn't know which to recommend, over-engineers or under-specs
- Webflow pricing: Lower initial cost, higher ongoing (hosting fees)
- Custom pricing: Higher initial cost, lower ongoing
- Client capabilities: Vary widely in technical sophistication
- Common projects: Marketing sites, landing pages, small e-commerce, web apps

**EXPECTATION:**
Deliver a complete decision framework including:
1. Decision Matrix:
   - Budget: <$10K vs $10-30K vs >$30K
   - Complexity: Marketing site vs Interactive app vs Web application
   - Client tech capability: High vs Medium vs Low
   - Scalability needs: Static vs Moderate vs High-scale
2. Clear "If This, Then That" Rules:
   - IF budget <$15K AND marketing site AND client can manage → Webflow
   - IF web app OR complex integrations → Custom
   - (Complete set of rules)
3. Webflow Sweet Spot:
   - Ideal project profile
   - Client profile that thrives
   - Feature limits to be aware of
4. Custom Development Sweet Spot:
   - When it's worth the investment
   - Red flags that indicate custom need
5. Hybrid Approach:
   - When to use Webflow for marketing + custom for app
   - How to scope hybrid projects
6. Client Conversation Guide:
   - Questions to ask to determine fit
   - How to explain the tradeoffs
7. Cost Comparison Template:
   - Initial build cost
   - Ongoing maintenance cost
   - 3-year TCO comparison
8. Risk Factors for Each Approach`
    },
    'prod-08': {
      title: 'AI Video Gen Workflow (Sora/Runway)',
      description: 'Integrating video AI into creative production.',
      tags: ['Video', 'Creative', 'AI'],
      content: `**ROLE:**
You are Casey Neistat, filmmaker and YouTube pioneer who has embraced AI tools in creative production. You understand both the artistic and practical considerations of using AI in video creation for brands.

**ACTION:**
Design a workflow for using AI video generation tools for client social media content.

**CONTEXT:**
- Tools available: Runway Gen-3, Midjourney, potentially OpenAI Sora
- Use case: Creating video content for client social media (Instagram Reels, TikTok)
- Clients: Fashion brands, lifestyle products, tech companies
- Challenge: AI video is inconsistent; clients expect reliability
- Budget: Need to productize this as a service package
- Volume: 10-20 short videos per month per client

**EXPECTATION:**
Deliver a complete video AI workflow including:
1. Production Pipeline:
   - Step 1: Still Image Generation (Midjourney)
     - Prompting strategy for social video
     - Style consistency techniques
   - Step 2: Motion (Runway Gen-3)
     - Motion brush techniques
     - Camera movement prompts
   - Step 3: Upscaling (Topaz or alternative)
     - Settings recommendations
   - Step 4: Editing (Premiere/CapCut)
     - Text overlay
     - Audio integration
     - Format optimization
2. Quality Control Checkpoints:
   - Where AI breaks (common failure modes)
   - Human oversight requirements
   - Revision process
3. Client Expectation Management:
   - How to sell "Experimental Video" without overpromising
   - Setting appropriate consistency expectations
   - Approval process design
4. Service Package Design:
   - Pricing structure (per video vs monthly)
   - Deliverables specification
   - Revision policy
5. Prompt Library:
   - Movement prompts that work
   - Style prompts for different brand aesthetics
6. Efficiency Metrics:
   - Time per video
   - Cost per video
   - Success rate
7. Portfolio Development (for selling the service)`
    },
    'prod-09': {
      title: 'Internal API Gateway Strategy',
      description: 'Managing API costs and access.',
      tags: ['Architecture', 'API', 'Security'],
      content: `**ROLE:**
You are Mitchell Hashimoto, co-founder of HashiCorp and creator of Terraform and Vault. You've built infrastructure tools used by millions and understand how to design secure, scalable systems.

**ACTION:**
Design architecture for a centralized AI API gateway to manage costs and security.

**CONTEXT:**
- Problem: Every developer at Tenten.co uses their own OpenAI/Anthropic API key
- Risks: Security (keys in code), Cost (no visibility or limits), Compliance (no audit trail)
- Current spend: ~$2,000/month on AI APIs, growing 30% monthly
- Team: 10 developers building internal tools and client AI products
- Goal: Centralized control without slowing down developers
- Infrastructure: AWS primary, some Cloudflare usage

**EXPECTATION:**
Deliver a complete gateway architecture including:
1. Architecture Design:
   - Gateway location (Cloudflare Workers vs AWS API Gateway vs custom)
   - Authentication approach
   - Request routing logic
2. Key Features:
   - Feature 1: Rate Limiting
     - Per user/project limits
     - Burst handling
     - Limit management UI
   - Feature 2: Response Caching
     - Cache invalidation strategy
     - Cost savings projection
   - Feature 3: Model Routing
     - Fallback to cheaper models for simple queries
     - Smart routing based on request complexity
   - Feature 4: Audit Logging
     - What to log
     - Retention policy
     - Access controls
3. Security Considerations:
   - API key rotation
   - Secret storage (Vault integration)
   - Request/response sanitization
4. Developer Experience:
   - SDK or simple API to use
   - Self-service key provisioning
   - Usage dashboard
5. Cost Management:
   - Budget alerts
   - Cost allocation by project/client
   - Optimization recommendations
6. Implementation Plan:
   - Phase 1: Basic routing and logging
   - Phase 2: Rate limiting and caching
   - Phase 3: Smart routing and optimization
7. Tool Recommendations (build vs buy)
8. ROI Calculation (expected cost savings)`
    },
    'brand-01': {
      title: 'CEO Personal Brand Manifesto',
      description: 'Defining the voice of the leader.',
      tags: ['Personal Brand', 'Marketing', 'Identity'],
      content: `**ROLE:**
You are Carl Jung, the renowned psychiatrist who developed the concept of psychological archetypes. Apply your understanding of archetypes and the collective unconscious to brand strategy.

**ACTION:**
Define the brand archetype and voice for a tech CEO's personal brand.

**CONTEXT:**
- Person: CEO of Tenten.co, a digital/AI consultancy in Taiwan
- Background: Technical founder with 15 years in digital, now leading 25-person agency
- Current positioning: Not well-defined, posts sporadically with mixed messages
- Goal: Establish thought leadership in "practical AI adoption for enterprises"
- Avoid: Being seen as another "AI hype merchant" or purely academic
- Channels: LinkedIn (primary), occasional podcasts and speaking

**EXPECTATION:**
Deliver a complete personal brand framework including:
1. Archetype Analysis:
   - Primary Archetype: The Sage (wisdom, truth-seeking)
   - Secondary Archetype: The Ruler (order, leadership)
   - How these combine into a unique positioning
2. Brand Voice Guidelines:
   - Keywords to use: Future-focused, Pragmatic, Elegant, Direct
   - Keywords to avoid: Hype language, buzzwords, over-promising
   - Sentence structure patterns
   - "I've built this, here is the data" vs "I think this"
3. Core Narrative Elements:
   - Origin story framework
   - Signature phrases
   - Recurring themes
4. 150-Word Bio for "About Us" Page (draft)
5. LinkedIn Profile Optimization:
   - Headline formula
   - About section structure
   - Featured content recommendations
6. Content Pillars (3-4 themes to own):
   - Pillar 1: [topic and angle]
   - Pillar 2: [topic and angle]
   - Pillar 3: [topic and angle]
7. Voice Consistency Guide:
   - How to respond to comments
   - How to share others' content
   - Tone in different situations
8. What NOT to Do (anti-patterns)`
    },
    'brand-02': {
      title: 'Case Study: From Chaos to Order',
      description: 'Writing a case study that sells transformation.',
      tags: ['Content', 'Case Study', 'Copywriting'],
      content: `**ROLE:**
You are Donald Miller, author of "Building a StoryBrand" and creator of the StoryBrand framework. You've helped thousands of companies clarify their message by positioning the customer as the hero.

**ACTION:**
Write a case study using the StoryBrand framework that sells transformation.

**CONTEXT:**
- Project: Digital transformation for a 30-year-old manufacturing company
- Challenge: Fragmented data across 12 legacy systems, losing to agile competitors
- Solution: Unified HubSpot ecosystem + custom integration portal built by Tenten.co
- Results: 200% increase in digital leads in 90 days
- Audience: CMOs and CEOs of similar traditional companies
- Goal: Make them see themselves in this story and reach out

**EXPECTATION:**
Deliver a complete case study using the StoryBrand 7-part framework:
1. Headline Options (3 versions):
   - Not "We built a website" but "Rescued from irrelevance" angle
2. The Hero (Customer as protagonist):
   - Who they are (relatable character)
   - What they wanted (external goal)
3. The Problem:
   - External problem (what happened)
   - Internal problem (how they felt)
   - Philosophical problem (why it was wrong)
4. The Guide (Tenten as mentor):
   - Empathy statement
   - Authority demonstration
5. The Plan:
   - 3-step process that made it simple
   - How we reduced their risk
6. Call to Action:
   - Direct CTA for the reader
7. Success (Results):
   - Quantified outcomes
   - Emotional transformation
8. Failure Avoided:
   - What would have happened without action
9. Full Case Study Draft (800-1000 words)
10. Pull Quotes for Social Media (3)`
    },
    'brand-03': {
      title: 'Newsletter Content Strategy',
      description: 'Weekly insights for the mailing list.',
      tags: ['Email Marketing', 'Content', 'Strategy'],
      content: `**ROLE:**
You are Ann Handley, author of "Everybody Writes" and Chief Content Officer at MarketingProfs. You're known for creating content that builds loyal audiences and drives business results.

**ACTION:**
Plan a 4-week newsletter content strategy for executive subscribers.

**CONTEXT:**
- Newsletter name: "Tenten Insights"
- Audience: C-Suite executives in Taiwan, primarily CMOs and CEOs
- Current list: 2,000 subscribers, 25% open rate
- Frequency: Weekly (every Tuesday)
- Goal: Establish thought leadership, generate inbound leads
- Constraint: CEO writes/reviews all content (1-2 hours/week max)
- Format preference: Short, valuable, not salesy

**EXPECTATION:**
Deliver a complete 4-week content plan including:
1. Newsletter Format Template:
   - Recommended sections and length
   - Header design recommendations
   - CTA placement
2. 4-Week Theme Plan:
   - Week 1: The ROI of Design Systems
   - Week 2: Why Your CRM is an Empty Shell
   - Week 3: AI Agents as the New Receptionists
   - Week 4: Client Spotlight (Interview Format)
3. For Each Week:
   - Subject line (with A/B variant)
   - Preview text
   - Opening hook (first 2 lines)
   - Main content outline (bullet points)
   - One clear CTA
   - Content source (what to reference/research)
4. Evergreen Sections (repeatable components):
   - Quick tip of the week
   - Tool/resource recommendation
   - Upcoming events
5. Writing Guidelines for the CEO:
   - Time-saving templates
   - Voice consistency tips
   - AI assistance for drafting
6. Metrics to Track:
   - Open rate benchmarks
   - Click rate benchmarks
   - Lead generation attribution
7. List Growth Strategy (bonus)
8. Re-Engagement Campaign for Cold Subscribers`
    },
    'brand-04': {
      title: 'Video Script: "Day in the Life"',
      description: 'Recruitment marketing content.',
      tags: ['Video', 'Recruiting', 'Culture'],
      content: `**ROLE:**
You are Simon Sinek, author of "Start with Why" and expert on inspiring leadership and organizational culture. You understand how to communicate purpose and attract people who believe what you believe.

**ACTION:**
Script a recruitment video that attracts top talent through purpose-driven messaging.

**CONTEXT:**
- Format: 60-second Instagram Reel / TikTok
- Purpose: Attract senior developers and designers to apply at Tenten.co
- Target: Ambitious tech talent in Taiwan tired of boring corporate jobs
- Avoid: Cliché agency culture shots (ping pong, beer fridges)
- Emphasize: Serious work, AI innovation, impact, growth opportunities
- Current brand: "AI-First Digital Consultancy" in Taiwan

**EXPECTATION:**
Deliver a complete video production package including:
1. The "Why" Statement (underlying message):
   - What does Tenten believe about work?
   - What does Tenten believe about AI and the future?
2. 60-Second Script:
   - Second-by-second breakdown
   - Voiceover text
   - Visual descriptions for each segment
3. Shot List:
   - 0-10 sec: [description]
   - 10-20 sec: [description]
   - 20-40 sec: [description]
   - 40-60 sec: [description with CTA]
4. Visual Style Guide:
   - Color grading recommendations
   - Pacing and transitions
   - Text overlay style
5. Music/Audio Direction:
   - Mood and genre
   - Specific song recommendations (royalty-free)
6. The Hook (first 2 seconds):
   - Pattern interrupt approach
   - Why they'll stop scrolling
7. CTA and Landing Page:
   - What action to take
   - Where to direct them
8. Repurposing Plan:
   - YouTube Shorts cut
   - LinkedIn version
   - Carousel adaptation
9. Production Notes:
   - Equipment needs
   - One-day shoot schedule
   - Talent requirements`
    },
    'brand-05': {
      title: 'Whitepaper Outline: The AI-First Enterprise',
      description: 'Lead magnet for enterprise clients.',
      tags: ['Content', 'Lead Magnet', 'B2B'],
      content: `**ROLE:**
You are Jim Collins, author of "Good to Great" and "Built to Last." You've spent decades researching what makes companies achieve sustained excellence through disciplined transformation.

**ACTION:**
Outline a whitepaper that will serve as a lead magnet for enterprise executives.

**CONTEXT:**
- Title: "The AI-First Enterprise: A Playbook for Taiwanese Executives"
- Length: 10 pages, professionally designed PDF
- Audience: CEOs and C-Suite executives at Taiwan enterprises ($50M+ revenue)
- Goal: Generate 100 downloads, 25 qualified leads over 3 months
- Distribution: Gated download on website, LinkedIn promotion
- Positioning: Practical guide, not fluffy thought piece

**EXPECTATION:**
Deliver a complete whitepaper outline including:
1. Executive Summary (1 page):
   - Key findings preview
   - Why this matters now
   - What they'll learn
2. Chapter 1: The Global Context (2 pages):
   - Taiwan's position: Hardware strength vs software weakness
   - What "AI-First" companies in other markets are achieving
   - The urgency: Why the next 18 months are critical
3. Chapter 2: The Data Foundation (2 pages):
   - "You can't have AI without clean data"
   - Common data maturity gaps in Taiwan enterprises
   - Data readiness assessment framework
4. Chapter 3: The Talent Gap (2 pages):
   - Reskilling existing workforce vs hiring new talent
   - What roles are actually needed (practical, not hype)
   - Partnership model (internal + external expertise)
5. Chapter 4: The Roadmap (3 pages):
   - 90-Day Quick Wins
   - 6-Month Foundation Building
   - 12-Month Transformation Milestones
   - Investment requirements at each stage
6. For Each Chapter:
   - Key takeaways
   - Self-assessment questions
   - Real examples (anonymized)
7. Conclusion:
   - Call to action (Tenten.co AI Readiness Audit)
8. Lead Capture Strategy:
   - Landing page structure
   - Form fields to collect
   - Email nurture sequence for downloaders`
    },
    'brand-06': {
      title: 'Instagram Carousel Text',
      description: 'Educational content for social.',
      tags: ['Social Media', 'Design', 'Education'],
      content: `**ROLE:**
You are Chris Do, founder of The Futur and Emmy award-winning designer. You've mastered the art of educational content on social media that provides genuine value while building business.

**ACTION:**
Create text overlay content for an educational Instagram carousel.

**CONTEXT:**
- Topic: "5 Signs Your Website is Bleeding Money"
- Format: 5-slide Instagram carousel
- Audience: Business owners and marketing managers in Taiwan
- Goal: Save, share, and DM engagement leading to audit requests
- Design style: Clean, minimalist, easy to read on mobile
- CTA: DM "AUDIT" for free website check

**EXPECTATION:**
Deliver complete carousel content including:
1. Slide 1 (The Hook):
   - Headline text
   - Subheadline
   - Visual concept note
   - Why this stops the scroll
2. Slide 2 (Sign #1 - Bounce Rate):
   - Main text (15 words max)
   - Supporting stat or fact
   - Icon/visual concept
3. Slide 3 (Sign #2 - Mobile Experience):
   - Main text
   - The "Google hates you" angle
   - Supporting evidence
4. Slide 4 (Sign #3 - Speed):
   - Main text
   - "Every second = 7% conversion drop" stat
   - Visual concept
5. Slide 5 (Sign #4 - Confusing CTA):
   - Main text
   - "Don't make them think" principle
   - Example of bad vs good
6. Slide 6 (The CTA):
   - Clear instruction
   - What they get (free check)
   - DM "AUDIT" instruction
7. Caption:
   - Full caption text
   - Hashtag strategy
   - CTA reinforcement
8. Design Notes:
   - Color palette
   - Font recommendations
   - Layout tips per slide
9. Save/Share Optimization:
   - What makes this carousel saveable
   - What makes it shareable`
    },
    'brand-07': {
      title: 'Event Keynote Structure',
      description: 'Speaking at a tech conference.',
      tags: ['Public Speaking', 'Events', 'Leadership'],
      content: `**ROLE:**
You are TED curator Chris Anderson, author of "TED Talks: The Official TED Guide to Public Speaking." You've coached thousands of speakers and understand what makes ideas spread through powerful presentations.

**ACTION:**
Structure a keynote speech on design engineering and AI for a tech conference.

**CONTEXT:**
- Talk title: "Design Engineering in the Age of AI"
- Audience: Designers and Developers at a tech conference in Taiwan
- Length: 20 minutes + 5 minutes Q&A
- Goal: Position the CEO as a thought leader, attract talent and clients
- Setting: 500-person auditorium, slides expected
- The CEO's edge: Has actually built this at Tenten.co, not just theory

**EXPECTATION:**
Deliver a complete keynote package including:
1. The Core Idea (one sentence):
   - What is the ONE idea worth spreading?
2. Talk Structure (20 minutes):
   - Opening (2 min): Pattern interrupt + establish credibility
   - The Old Way (4 min): Designers hand off Figma, devs complain, inefficiency
   - The Shift (4 min): What's changing with AI tools
   - The New Way (5 min): Designers who code, AI bridges gaps
   - The Vision (3 min): The "Unicorn" becomes the standard
   - Call to Action (2 min): Stop fighting tools, start orchestrating
3. For Each Section:
   - Key message
   - Story or example to use
   - Slide concept
   - Emotional beat
4. Stories to Include:
   - Personal story (your journey)
   - Client/team story (proof it works)
   - Industry story (bigger context)
5. Slide Recommendations:
   - Number of slides
   - Visual style
   - Text-to-visual ratio
6. Delivery Notes:
   - Where to pause
   - Where to move on stage
   - Eye contact patterns
7. Q&A Preparation:
   - 5 likely questions and answers
   - How to handle tough questions
8. Post-Talk Follow-Up:
   - Slide sharing strategy
   - Contact information collection
   - Social media amplification`
    },
    'brand-08': {
      title: 'Podcast Interview Prep',
      description: 'Talking points for a guest appearance.',
      tags: ['PR', 'Media', 'Interview'],
      content: `**ROLE:**
You are Tim Ferriss, host of "The Tim Ferriss Show" (700M+ downloads) and author of "Tribe of Mentors." You've interviewed hundreds of world-class performers and know exactly what makes a guest memorable.

**ACTION:**
Prepare talking points and soundbites for a podcast interview appearance.

**CONTEXT:**
- Podcast: Popular Tech/Startup podcast (English language, global audience)
- Host style: Conversational, likes tactical advice and personal stories
- Interview length: 60 minutes
- Audience: Entrepreneurs, startup founders, tech professionals
- Goal: Be a memorable guest, drive traffic to Tenten.co
- Topics likely discussed: Taiwan tech, agency business, AI adoption

**EXPECTATION:**
Deliver a complete podcast prep package including:
1. Pre-Interview Prep:
   - 3 key messages to convey
   - Personal story to share (vulnerability moment)
   - One contrarian take to share
2. Three Tweetable Soundbites:
   - On Taiwan Tech Scene:
     "Taiwan has the world's best hardware engineers but is 10 years behind on software. That's not a problem—that's a $100 billion opportunity."
   - On Agency Business:
     "[Create a memorable quote about value over hours]"
   - On AI Fear:
     "AI won't replace you. A person using AI will. The question is: will that person be you or your competitor?"
3. Story Arsenal:
   - Origin story (how Tenten started)
   - Failure story (vulnerability builds connection)
   - Client transformation story (proof)
   - Prediction story (where things are going)
4. Tactical Takeaways to Offer:
   - One tool recommendation
   - One book recommendation
   - One framework to share
5. Bridge Phrases:
   - How to pivot back to key messages
   - How to handle topics outside your expertise
6. Questions to Ask the Host:
   - Build rapport, not just receive questions
7. CTA Planning:
   - What to offer listeners
   - Where to send them
8. Post-Interview:
   - Follow-up email template to host
   - Social media promotion plan`
    },
    'brand-09': {
      title: 'Client "Thank You" Experience',
      description: 'High-touch gifting strategy.',
      tags: ['CX', 'Gifting', 'Brand'],
      content: `**ROLE:**
You are Danny Meyer, restaurateur and author of "Setting the Table." You pioneered "Enlightened Hospitality" and are known for creating memorable experiences that turn customers into advocates.

**ACTION:**
Design a high-touch gifting experience for clients after major project launches.

**CONTEXT:**
- Occasion: Just launched a major project for an enterprise client
- Recipients: Core client team (CMO + 3 Project Leads)
- Budget: $200 per person, total $800 for the team
- Goal: Create a memorable "wow" moment that strengthens relationship
- Avoid: Generic swag (T-shirts, mugs) that ends up in a drawer
- Brand: Tenten.co positions as premium, thoughtful, creative

**EXPECTATION:**
Deliver a complete gifting experience design including:
1. Three Gift Concept Options:
   - Concept A: The "Deep Work" Kit
     - High-end notebook (Leuchtturm1917)
     - Focus timer (Pomodoro-style)
     - Premium coffee or tea set
     - Custom packaging
     - Why this works for the recipient persona
   - Concept B: The CSR Gesture
     - Donation in their name to "Girls in Tech" or similar
     - Beautiful certificate/card
     - Impact story to share
     - Why this works for certain client types
   - Concept C: The Artistic Memento
     - Custom framed print of their new homepage (artistic style)
     - Behind-the-scenes making-of booklet
     - Why this becomes a talking piece
2. Recommendation: Which concept for which client type
3. Handwritten Note (for Concept A):
   - Full text
   - Tone and style notes
   - What to personalize
4. Packaging and Presentation:
   - Unboxing experience design
   - Delivery timing (when for maximum impact)
5. Internal Process:
   - Who prepares this
   - When to trigger (milestone definition)
   - Budget approval process
6. Follow-Up:
   - When to mention in conversation
   - How to make it not feel transactional
7. Measurement:
   - How to know if this works
   - What to look for (referrals, retention, NPS)`
    },
  },
};
