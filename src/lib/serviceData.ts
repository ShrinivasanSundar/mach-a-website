import type { ServiceCategory, SubService, JobPosition, NavItemWithChildren } from '@/types';

// ═══════════════════════════════════════════════════════
// Service Categories
// 4 categories, 11 sub-services total
// ═══════════════════════════════════════════════════════

export const serviceCategories: ServiceCategory[] = [
  {
    slug: 'software-engineering',
    title: 'Software Engineering',
    desc: 'Custom-built software solutions engineered for performance, scalability, and exceptional user experience.',
    icon: '💻',
    subServices: [
      {
        slug: 'custom-software-development',
        title: 'Custom Software Development',
        shortDesc: 'Bespoke software solutions tailored to your unique business requirements and workflows.',
        heroTagline: 'Software Built for Your Business',
        heroDescription: 'We design and develop custom software solutions that align perfectly with your business processes, delivering competitive advantage through technology that works exactly the way you need it to.',
        features: [
          { title: 'Full-Stack Development', desc: 'End-to-end development from system architecture to deployment using modern tech stacks.' },
          { title: 'API Design & Development', desc: 'RESTful and GraphQL APIs that connect your systems and enable seamless data flow.' },
          { title: 'Legacy Modernization', desc: 'Transform outdated systems into modern, cloud-native applications without business disruption.' },
          { title: 'DevOps & CI/CD', desc: 'Automated pipelines for continuous integration, testing, and deployment for rapid releases.' },
        ],
        benefits: [
          'Software that fits your exact business needs',
          'Scalable architecture for future growth',
          'Reduced dependency on off-the-shelf limitations',
          'Full ownership of your intellectual property',
          'Ongoing maintenance and enhancement support',
        ],
        process: [
          { step: '01', title: 'Requirements Engineering', desc: 'Deep-dive into your business domain, user needs, and technical requirements.' },
          { step: '02', title: 'Architecture & Design', desc: 'System architecture design, tech stack selection, and UX/UI wireframing.' },
          { step: '03', title: 'Agile Development', desc: 'Iterative development with bi-weekly demos, code reviews, and quality gates.' },
          { step: '04', title: 'Delivery & Evolution', desc: 'Production deployment with monitoring, documentation, and a roadmap for future enhancements.' },
        ],
        techStack: ['React', 'Node.js', 'TypeScript', 'Python', 'PostgreSQL', 'AWS', 'Docker'],
      },
      {
        slug: 'web-application-development',
        title: 'Web Application Development',
        shortDesc: 'High-performance web applications with modern frameworks and responsive design.',
        heroTagline: 'Modern Web Experiences',
        heroDescription: 'Build powerful, responsive web applications that deliver exceptional user experiences across all devices. From progressive web apps to complex SaaS platforms, we bring your vision to the web.',
        features: [
          { title: 'Progressive Web Apps', desc: 'PWAs that combine the best of web and native apps with offline capability and push notifications.' },
          { title: 'SaaS Platform Development', desc: 'Multi-tenant SaaS architectures with subscription management, analytics, and admin dashboards.' },
          { title: 'E-Commerce Solutions', desc: 'Custom e-commerce platforms with payment processing, inventory management, and CMS integration.' },
          { title: 'Real-Time Applications', desc: 'WebSocket-powered real-time features for chat, notifications, live dashboards, and collaboration.' },
        ],
        benefits: [
          'Responsive design that works on every device',
          'Sub-second page load times for better conversion',
          'SEO-optimized architecture for organic growth',
          'Accessible (WCAG 2.2 AA) for all users',
          'Scalable cloud deployment with auto-scaling',
        ],
        process: [
          { step: '01', title: 'Product Discovery', desc: 'Define user personas, journey maps, and feature priorities through collaborative workshops.' },
          { step: '02', title: 'UI/UX Design', desc: 'Create pixel-perfect designs and interactive prototypes validated through user testing.' },
          { step: '03', title: 'Frontend & Backend Development', desc: 'Build responsive frontends and robust APIs with automated testing at every layer.' },
          { step: '04', title: 'Launch & Growth', desc: 'Deploy to production with analytics, performance monitoring, and growth optimization.' },
        ],
        techStack: ['React', 'Next.js', 'Vue.js', 'Node.js', 'Tailwind CSS', 'Vercel', 'AWS'],
      },
      {
        slug: 'mobile-app-development',
        title: 'Mobile App Development',
        shortDesc: 'Native and cross-platform mobile applications for iOS and Android.',
        heroTagline: 'Apps That Users Love',
        heroDescription: 'Create compelling mobile experiences with our expert development team. Whether native iOS, Android, or cross-platform, we build apps that engage users and drive business results.',
        features: [
          { title: 'Cross-Platform Development', desc: 'Build once, deploy everywhere with React Native and Flutter for iOS and Android.' },
          { title: 'Native iOS & Android', desc: 'High-performance native apps using Swift/SwiftUI and Kotlin/Jetpack Compose.' },
          { title: 'Backend & API Integration', desc: 'Robust backends with real-time sync, push notifications, and third-party API integrations.' },
          { title: 'App Store Optimization', desc: 'ASO strategies, store listing optimization, and launch support for maximum visibility.' },
        ],
        benefits: [
          'Single codebase for both iOS and Android',
          'Native performance and platform-specific UX',
          'Offline-first architecture for reliable access',
          'Push notifications for user re-engagement',
          'Analytics-driven iteration for continuous improvement',
        ],
        process: [
          { step: '01', title: 'App Strategy', desc: 'Define your app\'s value proposition, target audience, and monetization strategy.' },
          { step: '02', title: 'UX/UI for Mobile', desc: 'Design mobile-first interfaces following platform-specific human interface guidelines.' },
          { step: '03', title: 'Development & Testing', desc: 'Build and test on real devices with automated and manual QA across OS versions.' },
          { step: '04', title: 'Store Launch & Updates', desc: 'App store submission, launch marketing, and planned update cadence for new features.' },
        ],
        techStack: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'AWS Amplify'],
      },
    ],
  },
  {
    slug: 'digital-marketing',
    title: 'Digital Marketing & SEO',
    desc: 'Elevate your brand\'s online presence with data-driven marketing strategies, SEO, and compelling content.',
    icon: '📈',
    subServices: [
      {
        slug: 'seo-search-optimization',
        title: 'SEO & Search Optimization',
        shortDesc: 'Dominate search rankings with technical SEO, on-page optimization, and link-building strategies.',
        heroTagline: 'Be Found. Be Chosen.',
        heroDescription: 'Get your business in front of the right audience at the right time. Our SEO experts combine technical excellence with strategic content to drive sustainable organic traffic and qualified leads.',
        features: [
          { title: 'Technical SEO Audit', desc: 'Comprehensive crawl analysis, site speed optimization, Core Web Vitals, schema markup, and indexation fixes.' },
          { title: 'On-Page Optimization', desc: 'Keyword research, meta tag optimization, content structuring, and internal linking strategies.' },
          { title: 'Off-Page & Link Building', desc: 'White-hat backlink acquisition, digital PR, guest posting, and authority-building campaigns.' },
          { title: 'Local SEO', desc: 'Google Business Profile optimization, local citations, and geo-targeted strategies for regional visibility.' },
        ],
        benefits: [
          'Increase organic traffic by up to 300%',
          'Higher search rankings for revenue-driving keywords',
          'Sustainable long-term lead generation',
          'Lower customer acquisition cost vs paid ads',
          'Detailed monthly reporting with actionable insights',
        ],
        process: [
          { step: '01', title: 'SEO Audit & Research', desc: 'Analyze your current search performance, competitor landscape, and keyword opportunities.' },
          { step: '02', title: 'Strategy & Roadmap', desc: 'Build a prioritized SEO roadmap targeting quick wins and long-term growth opportunities.' },
          { step: '03', title: 'Implementation', desc: 'Execute technical fixes, optimize content, and launch link-building campaigns.' },
          { step: '04', title: 'Monitor & Optimize', desc: 'Track rankings, traffic, and conversions with continuous optimization based on data.' },
        ],
        techStack: ['Google Search Console', 'Ahrefs', 'SEMrush', 'Screaming Frog', 'Google Analytics'],
      },
      {
        slug: 'content-creation-strategy',
        title: 'Content Creation & Strategy',
        shortDesc: 'Engage your audience with strategic content that drives traffic, trust, and conversions.',
        heroTagline: 'Content That Converts',
        heroDescription: 'From blog posts and whitepapers to video scripts and social media content, we create compelling narratives that position your brand as an industry authority and drive measurable business results.',
        features: [
          { title: 'Content Strategy', desc: 'Data-driven content calendars, topic clustering, and editorial planning aligned with your business goals.' },
          { title: 'Blog & Article Writing', desc: 'SEO-optimized long-form content, thought leadership pieces, and industry insights that rank and engage.' },
          { title: 'Social Media Content', desc: 'Platform-specific content creation for LinkedIn, Instagram, Twitter/X, and emerging platforms.' },
          { title: 'Video & Visual Content', desc: 'Script writing, motion graphics briefs, infographics, and visual storytelling for higher engagement.' },
        ],
        benefits: [
          '3x more leads than traditional marketing',
          'Build brand authority and trust over time',
          'Evergreen content that compounds in value',
          'Consistent brand voice across all channels',
          'Content that ranks, engages, and converts',
        ],
        process: [
          { step: '01', title: 'Brand & Audience Discovery', desc: 'Understand your brand voice, target audience personas, and content goals.' },
          { step: '02', title: 'Content Planning', desc: 'Develop a strategic content calendar with topic clusters, keywords, and distribution plan.' },
          { step: '03', title: 'Creation & Review', desc: 'Produce high-quality content with multiple review rounds to ensure brand alignment.' },
          { step: '04', title: 'Publish & Measure', desc: 'Distribute content across channels and measure performance to refine the strategy.' },
        ],
        techStack: ['WordPress', 'HubSpot', 'Canva', 'Buffer', 'Google Analytics', 'Surfer SEO'],
      },
      {
        slug: 'brand-digital-presence',
        title: 'Brand & Digital Presence',
        shortDesc: 'Build a powerful, cohesive digital brand that stands out and connects with your audience.',
        heroTagline: 'Your Brand, Amplified',
        heroDescription: 'We help businesses build and manage a strong digital presence that reflects their values, engages their audience, and drives growth — from brand identity to social media management and paid campaigns.',
        features: [
          { title: 'Brand Identity & Guidelines', desc: 'Logo refinement, visual identity systems, brand voice guidelines, and design language documentation.' },
          { title: 'Social Media Management', desc: 'End-to-end social media management including content scheduling, community engagement, and growth strategies.' },
          { title: 'Paid Advertising (PPC)', desc: 'Google Ads, Meta Ads, LinkedIn Ads — targeted campaigns with performance tracking and optimization.' },
          { title: 'Online Reputation Management', desc: 'Review monitoring, response management, and proactive reputation-building strategies.' },
        ],
        benefits: [
          'Consistent brand experience across all touchpoints',
          'Higher engagement rates on social platforms',
          'Measurable ROI from paid advertising campaigns',
          'Stronger brand recall and customer loyalty',
          'Professional online presence that builds trust',
        ],
        process: [
          { step: '01', title: 'Brand Audit', desc: 'Evaluate your current digital presence, brand perception, and competitive positioning.' },
          { step: '02', title: 'Strategy Development', desc: 'Create a comprehensive digital branding and marketing strategy with clear KPIs.' },
          { step: '03', title: 'Execution & Management', desc: 'Launch campaigns, manage social channels, and run paid advertising with ongoing optimization.' },
          { step: '04', title: 'Reporting & Growth', desc: 'Monthly performance reports with insights and recommendations for continued growth.' },
        ],
        techStack: ['Google Ads', 'Meta Business Suite', 'LinkedIn Ads', 'Hootsuite', 'Google Analytics', 'Figma'],
      },
    ],
  },
  {
    slug: 'data-analytics',
    title: 'Data Analytics',
    desc: 'Turn raw data into strategic insights with advanced analytics, engineering, and AI solutions.',
    icon: '📊',
    subServices: [
      {
        slug: 'business-intelligence',
        title: 'Business Intelligence',
        shortDesc: 'Transform data into actionable insights with interactive dashboards and reporting.',
        heroTagline: 'Data-Driven Decision Making',
        heroDescription: 'Empower your leadership team with real-time, interactive dashboards and reports that surface the insights that matter. We turn your data into a strategic asset.',
        features: [
          { title: 'Dashboard Development', desc: 'Interactive, real-time dashboards with drill-down capabilities and custom visualizations.' },
          { title: 'KPI Framework Design', desc: 'Define and implement meaningful KPIs aligned with your strategic business objectives.' },
          { title: 'Self-Service Analytics', desc: 'Empower business users to explore data and create reports without IT dependency.' },
          { title: 'Embedded Analytics', desc: 'Integrate analytics directly into your applications and workflows for contextual insights.' },
        ],
        benefits: [
          'Faster decision-making with real-time data',
          'Reduced reporting time by up to 70%',
          'Unified view across all business units',
          'Predictive insights for proactive strategy',
          'Data literacy improvement across the organization',
        ],
        process: [
          { step: '01', title: 'Data Audit', desc: 'Assess your current data sources, quality, and reporting needs to define the BI roadmap.' },
          { step: '02', title: 'Data Modeling', desc: 'Design dimensional models and data marts optimized for analytical queries.' },
          { step: '03', title: 'Dashboard Development', desc: 'Build and iterate on dashboards with stakeholder feedback loops.' },
          { step: '04', title: 'Rollout & Adoption', desc: 'Training programs and governance frameworks to ensure successful adoption.' },
        ],
        techStack: ['Power BI', 'Tableau', 'Looker', 'dbt', 'SQL', 'Snowflake'],
      },
      {
        slug: 'data-engineering',
        title: 'Data Engineering',
        shortDesc: 'Build robust data pipelines and modern data platforms for reliable analytics.',
        heroTagline: 'The Foundation of Your Data Strategy',
        heroDescription: 'Build the data infrastructure that powers your analytics and AI initiatives. Our data engineering services deliver reliable, scalable pipelines that turn raw data into trusted, analytics-ready datasets.',
        features: [
          { title: 'ETL/ELT Pipeline Development', desc: 'Automated data pipelines that extract, transform, and load data from any source.' },
          { title: 'Data Warehouse Design', desc: 'Modern cloud data warehouses optimized for performance and cost efficiency.' },
          { title: 'Data Lake Architecture', desc: 'Scalable data lakes for storing structured and unstructured data at any scale.' },
          { title: 'Data Quality & Governance', desc: 'Frameworks for data validation, lineage tracking, and governance compliance.' },
        ],
        benefits: [
          'Reliable data available when you need it',
          'Reduced data processing costs with cloud optimization',
          'Single source of truth across the organization',
          'Scalable infrastructure for growing data volumes',
          'Compliance with data privacy regulations',
        ],
        process: [
          { step: '01', title: 'Data Landscape Assessment', desc: 'Map your data sources, flows, and consumers to identify gaps and opportunities.' },
          { step: '02', title: 'Architecture Design', desc: 'Design a modern data platform architecture aligned with your scale and budget.' },
          { step: '03', title: 'Pipeline Development', desc: 'Build automated, monitored data pipelines with testing and error handling.' },
          { step: '04', title: 'Monitoring & Optimization', desc: 'Continuous monitoring, alerting, and performance optimization of your data platform.' },
        ],
        techStack: ['Apache Spark', 'Airflow', 'Snowflake', 'BigQuery', 'Kafka', 'dbt', 'Python'],
      },
      {
        slug: 'ai-machine-learning',
        title: 'AI & Machine Learning',
        shortDesc: 'Harness artificial intelligence to automate processes and unlock predictive insights.',
        heroTagline: 'Intelligent Automation & Prediction',
        heroDescription: 'Leverage the power of AI and machine learning to automate complex processes, predict outcomes, and discover patterns hidden in your data. We deliver AI solutions that create measurable business impact.',
        features: [
          { title: 'Predictive Analytics', desc: 'ML models that forecast demand, churn, revenue, and other critical business metrics.' },
          { title: 'Natural Language Processing', desc: 'Text analytics, sentiment analysis, chatbots, and document processing powered by NLP.' },
          { title: 'Computer Vision', desc: 'Image recognition, quality inspection, and visual data analysis solutions.' },
          { title: 'GenAI & LLM Integration', desc: 'Integrate generative AI and large language models into your products and workflows.' },
        ],
        benefits: [
          'Automate complex decision-making processes',
          'Predict customer behavior with 85%+ accuracy',
          'Reduce manual processing time by up to 60%',
          'Unlock insights from unstructured data',
          'Competitive advantage through AI-first operations',
        ],
        process: [
          { step: '01', title: 'AI Opportunity Assessment', desc: 'Identify high-impact AI use cases aligned with your business goals and data maturity.' },
          { step: '02', title: 'Data Preparation', desc: 'Collect, clean, and prepare training data with feature engineering for optimal model performance.' },
          { step: '03', title: 'Model Development', desc: 'Develop, train, and validate ML models with rigorous evaluation against business KPIs.' },
          { step: '04', title: 'Deployment & Monitoring', desc: 'Deploy models to production with monitoring, retraining pipelines, and drift detection.' },
        ],
        techStack: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI', 'LangChain', 'MLflow', 'AWS SageMaker'],
      },
    ],
  },
  {
    slug: 'recruitment-services',
    title: 'Recruitment Services',
    desc: 'Connect with top-tier technology talent through our specialized recruitment and staffing solutions.',
    icon: '👥',
    subServices: [
      {
        slug: 'it-staffing',
        title: 'IT Staffing',
        shortDesc: 'Flexible technology staffing solutions for project-based and long-term needs.',
        heroTagline: 'The Right Talent, Right Now',
        heroDescription: 'Access a curated network of pre-vetted technology professionals for your project needs. From contract developers to dedicated teams, we provide flexible staffing solutions that scale with your business.',
        features: [
          { title: 'Contract Staffing', desc: 'Skilled professionals for project-based work with flexible engagement models.' },
          { title: 'Dedicated Teams', desc: 'Build your extended team with dedicated developers, designers, and project managers.' },
          { title: 'Staff Augmentation', desc: 'Seamlessly augment your existing team with specialized skills when you need them.' },
          { title: 'Managed Services', desc: 'Outsource entire functions or projects with our managed delivery model.' },
        ],
        benefits: [
          'Access to pre-vetted IT professionals',
          'Reduce time-to-hire from months to days',
          'Flexible scaling up or down based on project needs',
          'No long-term commitment required for contract roles',
          'Replacement guarantee for all placements',
        ],
        process: [
          { step: '01', title: 'Requirements Gathering', desc: 'Understand your technical requirements, team culture, and project timeline.' },
          { step: '02', title: 'Talent Sourcing', desc: 'Source and screen candidates from our network using technical assessments and cultural fit evaluation.' },
          { step: '03', title: 'Interview & Selection', desc: 'Present shortlisted candidates with detailed profiles for your interview and selection process.' },
          { step: '04', title: 'Onboarding & Support', desc: 'Facilitate smooth onboarding and provide ongoing support throughout the engagement.' },
        ],
        techStack: ['Full-Stack Developers', 'Cloud Engineers', 'Data Scientists', 'DevOps Engineers', 'UX Designers'],
      },
      {
        slug: 'executive-search',
        title: 'Executive Search',
        shortDesc: 'Strategic executive recruitment for technology leadership positions.',
        heroTagline: 'Leaders Who Transform',
        heroDescription: 'Find the technology leaders who will drive your digital transformation. Our executive search practice specializes in placing CTOs, VPs of Engineering, and other senior technology executives.',
        features: [
          { title: 'C-Suite Placement', desc: 'CTO, CIO, CDO, and VP-level placements for technology and digital leadership roles.' },
          { title: 'Leadership Assessment', desc: 'Comprehensive evaluation of leadership competencies, technical acumen, and cultural alignment.' },
          { title: 'Market Intelligence', desc: 'Salary benchmarking, competitor analysis, and talent market insights for informed hiring.' },
          { title: 'Succession Planning', desc: 'Strategic succession planning to ensure leadership continuity and pipeline development.' },
        ],
        benefits: [
          'Access to passive candidates not on job boards',
          'Deep technology sector expertise and network',
          'Confidential search process for sensitive roles',
          'Average placement time of 6-8 weeks',
          '12-month placement guarantee',
        ],
        process: [
          { step: '01', title: 'Role Definition', desc: 'Collaborate on the role specification, leadership competencies, and success criteria.' },
          { step: '02', title: 'Market Mapping', desc: 'Comprehensive mapping of potential candidates across your industry and adjacent sectors.' },
          { step: '03', title: 'Candidate Engagement', desc: 'Discreet outreach, initial assessment, and detailed candidate presentation to your team.' },
          { step: '04', title: 'Offer & Integration', desc: 'Support through offer negotiation and ensure a successful integration into your organization.' },
        ],
      },
    ],
  },
];

// Helper to find a sub-service by its slug
export function findSubService(slug: string): { category: ServiceCategory; subService: SubService } | null {
  for (const category of serviceCategories) {
    for (const sub of category.subServices) {
      if (sub.slug === slug) {
        return { category, subService: sub };
      }
    }
  }
  return null;
}

// Helper to get all sub-services as a flat list
export function getAllSubServices(): (SubService & { categoryTitle: string; categorySlug: string })[] {
  return serviceCategories.flatMap(cat =>
    cat.subServices.map(sub => ({ ...sub, categoryTitle: cat.title, categorySlug: cat.slug }))
  );
}

// ═══════════════════════════════════════════════════════
// Job Positions
// ═══════════════════════════════════════════════════════

export const jobPositions: JobPosition[] = [
  { title: 'Senior React Developer', department: 'Engineering', location: 'Remote', type: 'Full-time', desc: 'Build modern web applications using React, TypeScript, and Next.js for our enterprise clients.' },
  { title: 'Digital Marketing Specialist', department: 'Marketing', location: 'Remote', type: 'Full-time', desc: 'Plan and execute digital marketing campaigns across SEO, PPC, and social media channels.' },
  { title: 'Data Engineer', department: 'Data & Analytics', location: 'Remote', type: 'Full-time', desc: 'Design and build scalable data pipelines using Spark, Airflow, and cloud data platforms.' },
  { title: 'UX/UI Designer', department: 'Design', location: 'Remote', type: 'Full-time', desc: 'Create user-centered designs for web and mobile applications across various industries.' },
  { title: 'DevOps Engineer', department: 'Engineering', location: 'Remote', type: 'Full-time', desc: 'Manage CI/CD pipelines, cloud infrastructure, and containerized deployments for client projects.' },
  { title: 'Content Strategist', department: 'Marketing', location: 'Remote', type: 'Full-time', desc: 'Develop content strategies and create compelling content that drives engagement and conversions.' },
  { title: 'ML Engineer', department: 'Data & Analytics', location: 'Remote', type: 'Full-time', desc: 'Develop and deploy machine learning models for production use cases in enterprise environments.' },
  { title: 'Project Manager', department: 'Delivery', location: 'Remote', type: 'Full-time', desc: 'Lead cross-functional project teams to deliver complex technology solutions on time and on budget.' },
];

// ═══════════════════════════════════════════════════════
// Navigation items with service dropdowns
// ═══════════════════════════════════════════════════════

export const mainNavItems: NavItemWithChildren[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  {
    label: 'Services',
    href: '#',
    children: serviceCategories.flatMap(cat =>
      cat.subServices.map(sub => ({
        label: sub.title,
        href: `/services/${sub.slug}`,
        desc: sub.shortDesc,
      }))
    ),
  },
  { label: 'Careers', href: '/careers' },
  { label: 'TN Election 2026', href: '/tnresult2026' },
  { label: 'Contact', href: '/contact' },
];
