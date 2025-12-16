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
      // Consulting Pillars
      seoGeo: 'SEO & GEO',
      socialMedia: 'Social Media Growth',
      aiConsulting: 'AI Transformation',
      promptEngineering: 'Prompt Engineering',
      vcIncubator: 'VC & Incubator',
      // Design Pillars
      webUiUx: 'Web & UI/UX Design',
      productDesign: 'Product Design',
      contentCreation: 'Content Creation',
      brandArtDirection: 'Brand & Art Direction',
      videoFilmography: 'Video & Filmography',
      // Software Development Pillars
      webDevelopment: 'Web Development',
      shopifyDevelopment: 'Shopify Development',
      devops: 'DevOps',
      cloudManagement: 'Cloud Management',
      aiResearch: 'AI Research',
    },
    pillarDescriptions: {
      strategy: "Blue ocean thinking, M&A frameworks, and high-level vision for the agency's future.",
      growth: "Tactics for enterprise sales, proposal writing, and establishing market authority.",
      operations: "Internal SOPs, culture building, and frameworks for efficient management.",
      product: "Technical stacks, AI R&D, and engineering workflows for the modern web.",
      brand: "Narrative building, content strategy, and public relations for the CEO.",
      // Consulting Pillars
      seoGeo: "Search optimization strategies including GEO for AI search and local SEO tactics.",
      socialMedia: "Platform-specific growth strategies, community building, and engagement tactics.",
      aiConsulting: "Enterprise AI adoption, readiness assessment, and transformation frameworks.",
      promptEngineering: "Prompt design, testing, security, and enterprise prompt library architecture.",
      vcIncubator: "Startup evaluation, due diligence, incubation programs, and investment frameworks.",
      // Design Pillars
      webUiUx: "Design systems, UX research, accessibility, and responsive design patterns.",
      productDesign: "Product discovery, JTBD research, metrics, and requirements documentation.",
      contentCreation: "Visual content guidelines, AI workflows, repurposing, and localization.",
      brandArtDirection: "Brand strategy, mood boards, photography direction, and rebranding management.",
      videoFilmography: "Video production workflows, interview techniques, and motion graphics.",
      // Software Development Pillars
      webDevelopment: "Frontend architecture, API design, security, PWAs, and code quality.",
      shopifyDevelopment: "Theme architecture, app development, Hydrogen, and performance optimization.",
      devops: "CI/CD pipelines, Infrastructure as Code, monitoring, and disaster recovery.",
      cloudManagement: "Cloud architecture, multi-cloud strategy, cost optimization, and security.",
      aiResearch: "LLM evaluation, fine-tuning, AI agents, embeddings, and ethics assessment.",
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
    sidebar: {
      tagline: 'Master the Art of Prompting',
      strategicPillars: 'Strategic Pillars',
      operationPillars: 'Operation Pillars',
      darkMode: 'Dark Mode',
      internal: 'Internal Use Only',
      highImpactPrompts: 'high-impact prompts curated for Tenten.co growth.',
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

    // --- CONSULTING: SEO & GEO ---
    'seo-01': {
      title: 'GEO Strategy for AI Search Dominance',
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
    'seo-02': {
      title: 'Local SEO for Multi-Location Agency',
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
    'seo-03': {
      title: 'Technical SEO Audit Framework',
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
    'seo-04': {
      title: 'Content Gap Analysis Process',
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
    'seo-05': {
      title: 'Link Building Strategy for B2B Tech',
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
    'social-01': {
      title: 'LinkedIn B2B Growth Playbook',
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
    'social-02': {
      title: 'Video-First Social Strategy',
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
    'social-03': {
      title: 'Community Building Framework',
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
    'social-04': {
      title: 'Influencer Collaboration Strategy',
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
    'social-05': {
      title: 'Social Listening for Business Intelligence',
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
    'ai-consult-01': {
      title: 'Enterprise AI Readiness Assessment',
      description: "Evaluate an organization's preparedness for AI adoption.",
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
    'ai-consult-02': {
      title: 'AI Use Case Prioritization Matrix',
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
    'ai-consult-03': {
      title: 'Change Management for AI Adoption',
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
    'ai-consult-04': {
      title: 'AI Governance Framework',
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
    'ai-consult-05': {
      title: 'AI ROI Calculation Methodology',
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
    'prompt-01': {
      title: 'Prompt Engineering Workshop Curriculum',
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
    'prompt-02': {
      title: 'Enterprise Prompt Library Architecture',
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
    'prompt-03': {
      title: 'Prompt Testing and Evaluation Framework',
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
    'prompt-04': {
      title: 'Industry-Specific Prompt Templates',
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
    'prompt-05': {
      title: 'Prompt Security and Safety Guidelines',
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
    'vc-01': {
      title: 'Startup Due Diligence Framework',
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
    'vc-02': {
      title: 'Pitch Deck Review Checklist',
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
    'vc-03': {
      title: 'Incubator Program Design',
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
    'vc-04': {
      title: 'Startup Valuation Methods',
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
    'vc-05': {
      title: 'Portfolio Company Support System',
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
    'uiux-01': {
      title: 'Design System Creation Framework',
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
    'uiux-02': {
      title: 'UX Research Plan Template',
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
    'uiux-03': {
      title: 'Accessibility Audit Checklist',
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
    'uiux-04': {
      title: 'Mobile-First Design Guidelines',
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
    'uiux-05': {
      title: 'Design Handoff Best Practices',
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
    'proddes-01': {
      title: 'Product Discovery Workshop Facilitation',
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
    'proddes-02': {
      title: 'Jobs-to-be-Done Interview Guide',
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
    'proddes-03': {
      title: 'Product Metrics Definition',
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
    'proddes-04': {
      title: 'Prototype Fidelity Selection Guide',
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
    'proddes-05': {
      title: 'Product Requirements Document Template',
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
    'content-01': {
      title: 'Visual Content Style Guide',
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
    'content-02': {
      title: 'AI-Assisted Content Workflow',
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
    'content-03': {
      title: 'Content Repurposing Matrix',
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
    'content-04': {
      title: 'UGC Campaign Framework',
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
    'content-05': {
      title: 'Multilingual Content Localization',
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
    'brand-art-01': {
      title: 'Brand Strategy Development Process',
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
    'brand-art-02': {
      title: 'Mood Board Creation Methodology',
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
    'brand-art-03': {
      title: 'Photography Art Direction Guide',
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
    'brand-art-04': {
      title: 'Brand Audit Framework',
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
    'brand-art-05': {
      title: 'Rebranding Project Management',
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
    'video-01': {
      title: 'Corporate Video Production Workflow',
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
    'video-02': {
      title: 'Interview Video Best Practices',
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
    'video-03': {
      title: 'Social Video Content Strategy',
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
    'video-04': {
      title: 'Motion Graphics Style Development',
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
    'video-05': {
      title: 'Video Post-Production Quality Control',
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
    'webdev-01': {
      title: 'Frontend Architecture Decision Guide',
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
    'webdev-02': {
      title: 'API Design Standards',
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
    'webdev-03': {
      title: 'Web Security Checklist',
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
    'webdev-04': {
      title: 'Progressive Web App Implementation',
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
    'webdev-05': {
      title: 'Code Quality Automation Setup',
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
    'shopify-01': {
      title: 'Shopify Theme Architecture Patterns',
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
    'shopify-02': {
      title: 'Shopify App Development Guide',
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
    'shopify-03': {
      title: 'Headless Shopify with Hydrogen',
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
    'shopify-04': {
      title: 'Shopify Performance Optimization',
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
    'shopify-05': {
      title: 'Shopify Migration Planning',
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
    'devops-01': {
      title: 'CI/CD Pipeline Design',
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
    'devops-02': {
      title: 'Infrastructure as Code Standards',
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
    'devops-03': {
      title: 'Monitoring and Observability Setup',
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
    'devops-04': {
      title: 'Container Orchestration Guide',
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
    'devops-05': {
      title: 'Disaster Recovery Planning',
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
    'cloud-01': {
      title: 'Cloud Architecture Review Checklist',
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
    'cloud-02': {
      title: 'Multi-Cloud Strategy Framework',
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
    'cloud-03': {
      title: 'Cloud Cost Optimization Playbook',
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
    'cloud-04': {
      title: 'Serverless Architecture Patterns',
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
    'cloud-05': {
      title: 'Cloud Security Hardening Guide',
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
    'ai-research-01': {
      title: 'LLM Evaluation Framework',
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
    'ai-research-02': {
      title: 'Fine-Tuning Strategy Guide',
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
    'ai-research-03': {
      title: 'AI Agent Architecture Patterns',
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
    'ai-research-04': {
      title: 'Embedding Model Selection Guide',
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
    'ai-research-05': {
      title: 'AI Ethics and Bias Assessment',
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
    },
  },
};
