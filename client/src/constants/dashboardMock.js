export const DASHBOARD_MOCK = {
  readinessScore: 87,
  communicationScore: 72,
  codingProgress: {
    solved: 156,
    target: 250,
  },
  weakSkills: ['System Design', 'Cloud Fundamentals', 'Interview Storytelling'],
  recommendations: [
    {
      id: 'rec-1',
      title: 'Improve system design basics',
      route: '/dashboard/coding',
      eta: '2 weeks',
    },
    {
      id: 'rec-2',
      title: 'Practice resume defense drills',
      route: '/dashboard/resume-defense',
      eta: '5 days',
    },
    {
      id: 'rec-3',
      title: 'Daily communication mock rounds',
      route: '/dashboard/communication',
      eta: '10 days',
    },
  ],
};
