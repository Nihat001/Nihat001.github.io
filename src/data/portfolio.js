export const profile = {
  name: 'Nihat Masimli',
  role: 'Full Stack Web Developer',
  location: 'Budapest, Hungary',
  email: 'masimlinihat@gmail.com',
  github: 'https://github.com/Nihat001',
  linkedin: 'https://www.linkedin.com/in/nihat-masimli',
  intro:
    'I build and improve web applications using React, FastAPI, PostgreSQL, REST APIs, and Python. I help clients fix bugs, integrate APIs, and create reliable frontend/backend features.',
};

export const services = [
  {
    title: 'Web App Bug Fixing',
    description:
      'Diagnose frontend and backend issues, clean up broken flows, and improve reliability without disrupting existing features.',
  },
  {
    title: 'API Integration',
    description:
      'Connect web apps to external APIs, handle JSON data, improve error states, and make integrations easier to maintain.',
  },
  {
    title: 'FastAPI Backend Development',
    description:
      'Build practical Python backend features with clean endpoints, validation, database access, and REST API structure.',
  },
  {
    title: 'React Frontend Improvements',
    description:
      'Refine components, responsive layouts, state handling, and user interfaces so applications feel faster and easier to use.',
  },
  {
    title: 'PostgreSQL / SQL Help',
    description:
      'Design queries, debug database issues, organize schema changes, and support data-driven application features.',
  },
  {
    title: 'Docker & Deployment Support',
    description:
      'Containerize apps, troubleshoot environment issues, and prepare projects for smoother deployment workflows.',
  },
];

export const projects = [
  {
    title: 'Travel Recommendation Web Application',
    type: 'Personal Thesis Project',
    status: 'Private thesis project',
    stack: ['React', 'FastAPI', 'PostgreSQL', 'REST APIs', 'Google Maps API', 'OpenWeather API', 'Docker'],
    description:
      'Full-stack travel planning and recommendation web application built as a personal thesis project. It supports itinerary planning, place/weather data integration, and recommendation-oriented functionality.',
    note: 'Source code is private because this is a personal thesis project.',
    actions: [
      {
        label: 'View Case Study',
        href: '#travel-case-study',
        variant: 'primary',
      },
    ],
  },
  {
    title: 'Java 2.5D Simulation Game - Team Project',
    type: 'Team Project',
    status: 'Private team/university project',
    stack: ['Java', 'JavaFX', 'Maven', 'JUnit', 'GitLab', 'UML', 'Object-Oriented Design'],
    description:
      'University team project developed with Java and JavaFX. I contributed to object-oriented design, UML planning, feature integration, GitLab merge requests, issue tracking, and milestone-based delivery.',
    note: 'Repository will be shared later after team/project cleanup.',
  },
  {
    title: 'Aether Project',
    type: 'Public Software Project',
    status: 'Public GitHub',
    stack: ['Application Development', 'Structured Code', 'GitHub'],
    description:
      'Public software project demonstrating practical application development and structured code organization.',
    actions: [
      {
        label: 'View GitHub',
        href: 'https://github.com/Nihat001/aether-project',
        external: true,
        variant: 'secondary',
      },
    ],
  },
  {
    title: 'CPU Scheduling Simulator',
    type: 'Operating Systems Tool',
    status: 'Public GitHub',
    stack: ['Operating Systems', 'Scheduling Algorithms', 'Visualization'],
    description:
      'Educational tool that simulates core operating system scheduling concepts and helps visualize process scheduling behavior.',
    actions: [
      {
        label: 'View GitHub',
        href: 'https://github.com/Nihat001/CPU-scheduling-simulator',
        external: true,
        variant: 'secondary',
      },
    ],
  },
  {
    title: 'Orion Expedition',
    type: 'Java Coursework Project',
    status: 'Public GitHub',
    stack: ['Java', 'Object-Oriented Programming', 'University Coursework'],
    description:
      'Object-oriented programming project developed in Java, focused on structured application logic and university coursework.',
    actions: [
      {
        label: 'View GitHub',
        href: 'https://github.com/Nihat001/orion-expedition',
        external: true,
        variant: 'secondary',
      },
    ],
  },
];

export const travelCaseStudy = {
  title: 'Travel Recommendation Web Application',
  subtitle: 'Personal thesis project - private source code',
  intro:
    'This is a full-stack travel planning and recommendation web application built as a personal thesis project. It combines itinerary planning, preference-based recommendations, place search, weather/route context, map previews, and admin management features.',
  privateNotice:
    'Source code is private because this is a personal thesis project. The screenshots below are shared only to demonstrate the user interface, feature flow, and full-stack product scope.',
  metadata: [
    { label: 'Role', value: 'Full-stack developer' },
    { label: 'Frontend', value: 'React' },
    { label: 'Backend', value: 'FastAPI' },
    { label: 'Database', value: 'PostgreSQL' },
    { label: 'Integrations', value: 'Google Maps API, OpenWeather API, REST APIs' },
    { label: 'Tools', value: 'Docker, Git' },
  ],
  screenshots: [
    {
      file: '01_home_landing.png',
      label: '01',
      caption: 'Landing page introducing the travel planning platform.',
      alt: 'Landing page introducing the travel planning platform.',
    },
    {
      file: '02_dashboard_trip_list.png',
      label: '02',
      caption: 'Dashboard showing saved trips and user trip management.',
      alt: 'Dashboard showing saved trips and user trip management.',
    },
    {
      file: '03_preferences_profile.png',
      label: '03',
      caption: 'Preference profile used to personalize trip recommendations.',
      alt: 'Preference profile used to personalize trip recommendations.',
    },
    {
      file: '04_create_trip_form.png',
      label: '04',
      caption: 'Trip creation form for destination, dates, and travel preferences.',
      alt: 'Trip creation form for destination, dates, and travel preferences.',
    },
    {
      file: '05_trip_planner_overview.png',
      label: '05',
      caption: 'Trip planner overview combining itinerary structure and trip context.',
      alt: 'Trip planner overview combining itinerary structure and trip context.',
    },
    {
      file: '06_place_search_results.png',
      label: '06',
      caption: 'Place search results for discovering relevant attractions and locations.',
      alt: 'Place search results for discovering relevant attractions and locations.',
    },
    {
      file: '07_accomodation_selection.png',
      label: '07',
      caption: 'Accommodation selection flow for comparing stay options.',
      alt: 'Accommodation selection flow for comparing stay options.',
    },
    {
      file: '08_recommendation_engine.png',
      label: '08',
      caption: 'Recommendation engine interface for generating personalized suggestions.',
      alt: 'Recommendation engine interface for generating personalized suggestions.',
    },
    {
      file: '09_adaptive_replanning.png',
      label: '09',
      caption: 'Adaptive replanning flow for updating a trip when preferences or conditions change.',
      alt: 'Adaptive replanning flow for updating a trip when preferences or conditions change.',
    },
    {
      file: '10_day_plan_weather_route_context.png',
      label: '10',
      caption: 'Day plan view with weather and route context.',
      alt: 'Day plan view with weather and route context.',
    },
    {
      file: '11_daily_route_map_preview.png',
      label: '11',
      caption: 'Daily route map preview for visualizing planned movement.',
      alt: 'Daily route map preview for visualizing planned movement.',
    },
    {
      file: '12_ai_assistant_bulk_fill.png',
      label: '12',
      caption: 'AI assistant flow for bulk-filling itinerary days.',
      alt: 'AI assistant flow for bulk-filling itinerary days.',
    },
    {
      file: '13_ai_filled_empty_days_result.png',
      label: '13',
      caption: 'Generated itinerary result after filling empty days.',
      alt: 'Generated itinerary result after filling empty days.',
    },
    {
      file: '14_admin_dashboard_overview.png',
      label: '14',
      caption: 'Admin dashboard overview for platform management.',
      alt: 'Admin dashboard overview for platform management.',
    },
    {
      file: '15_admin_management_table.png',
      label: '15',
      caption: 'Admin management table for reviewing and managing application data.',
      alt: 'Admin management table for reviewing and managing application data.',
    },
  ],
};

export const skillGroups = [
  {
    title: 'Frontend',
    skills: ['React', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    title: 'Backend',
    skills: ['Python', 'FastAPI', 'REST APIs', 'JSON'],
  },
  {
    title: 'Database',
    skills: ['PostgreSQL', 'SQL'],
  },
  {
    title: 'Tools',
    skills: ['Docker', 'Git', 'GitHub', 'Linux'],
  },
  {
    title: 'Software Engineering',
    skills: ['Object-Oriented Design', 'UML', 'Testing', 'API Integration'],
  },
];
