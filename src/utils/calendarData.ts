
export interface ClassSchedule {
  id: string;
  title: string;
  date: string; // ISO date string
  time: string;
  instructor: string;
  level: string;
  description?: string;
}

// Sample class schedule data
export const getClassSchedules = (): ClassSchedule[] => {
  const today = new Date();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();
  
  // Function to create date string in ISO format
  const createDateString = (day: number) => {
    return new Date(currentYear, currentMonth, day).toISOString();
  };
  
  return [
    {
      id: '1',
      title: 'Beginner Kathak',
      date: createDateString(3),
      time: '10:00 AM - 11:30 AM',
      instructor: 'Guru Rajendra Prasad',
      level: 'Beginner',
      description: 'Introduction to basic Kathak movements and footwork patterns.'
    },
    {
      id: '2',
      title: 'Intermediate Tatkar',
      date: createDateString(3),
      time: '1:00 PM - 2:30 PM',
      instructor: 'Neha Sharma',
      level: 'Intermediate',
      description: 'Focus on advanced footwork and rhythmic patterns.'
    },
    {
      id: '3',
      title: 'Advanced Abhinaya',
      date: createDateString(4),
      time: '4:00 PM - 6:00 PM',
      instructor: 'Sunita Kalra',
      level: 'Advanced',
      description: 'Mastering the art of expression and storytelling through Kathak.'
    },
    {
      id: '4',
      title: 'Kathak for Kids',
      date: createDateString(5),
      time: '3:30 PM - 4:30 PM',
      instructor: 'Priya Mehta',
      level: 'Children (7-12)',
      description: 'Introduction to Kathak dance designed specifically for children.'
    },
    {
      id: '5',
      title: 'Beginner Kathak',
      date: createDateString(6),
      time: '10:00 AM - 11:30 AM',
      instructor: 'Guru Rajendra Prasad',
      level: 'Beginner',
      description: 'Introduction to basic Kathak movements and footwork patterns.'
    },
    {
      id: '6',
      title: 'Chakkar Workshop',
      date: createDateString(8),
      time: '2:00 PM - 4:00 PM',
      instructor: 'Sunita Kalra',
      level: 'All Levels',
      description: 'Special workshop focusing on mastering spins and turns in Kathak.'
    },
    {
      id: '7',
      title: 'Teen Kathak',
      date: createDateString(10),
      time: '4:30 PM - 6:00 PM',
      instructor: 'Neha Sharma',
      level: 'Teens (13-18)',
      description: 'Kathak classes specifically designed for teenagers.'
    },
    {
      id: '8',
      title: 'Advanced Composition',
      date: createDateString(11),
      time: '5:00 PM - 7:00 PM',
      instructor: 'Guru Rajendra Prasad',
      level: 'Advanced',
      description: 'Creating and choreographing original Kathak compositions.'
    },
    {
      id: '9',
      title: 'Beginner Kathak',
      date: createDateString(12),
      time: '10:00 AM - 11:30 AM',
      instructor: 'Priya Mehta',
      level: 'Beginner',
      description: 'Introduction to basic Kathak movements and footwork patterns.'
    },
    {
      id: '10',
      title: 'Intermediate Performance',
      date: createDateString(15),
      time: '1:00 PM - 3:00 PM',
      instructor: 'Neha Sharma',
      level: 'Intermediate',
      description: 'Preparing for stage performances with focus on presentation skills.'
    },
    {
      id: '11',
      title: 'Taal Workshop',
      date: createDateString(17),
      time: '3:00 PM - 5:00 PM',
      instructor: 'Sunita Kalra',
      level: 'All Levels',
      description: 'Understanding and practicing various rhythmic cycles in Kathak.'
    },
    {
      id: '12',
      title: 'Kathak for Kids',
      date: createDateString(19),
      time: '3:30 PM - 4:30 PM',
      instructor: 'Priya Mehta',
      level: 'Children (7-12)',
      description: 'Introduction to Kathak dance designed specifically for children.'
    },
    {
      id: '13',
      title: 'Beginner Kathak',
      date: createDateString(20),
      time: '10:00 AM - 11:30 AM',
      instructor: 'Guru Rajendra Prasad',
      level: 'Beginner',
      description: 'Introduction to basic Kathak movements and footwork patterns.'
    },
    {
      id: '14',
      title: 'Advanced Technique',
      date: createDateString(22),
      time: '4:00 PM - 6:00 PM',
      instructor: 'Sunita Kalra',
      level: 'Advanced',
      description: 'Refining advanced techniques and movements in Kathak.'
    },
    {
      id: '15',
      title: 'Intermediate Tatkar',
      date: createDateString(24),
      time: '1:00 PM - 2:30 PM',
      instructor: 'Neha Sharma',
      level: 'Intermediate',
      description: 'Focus on advanced footwork and rhythmic patterns.'
    },
    {
      id: '16',
      title: 'Teen Kathak',
      date: createDateString(26),
      time: '4:30 PM - 6:00 PM',
      instructor: 'Priya Mehta',
      level: 'Teens (13-18)',
      description: 'Kathak classes specifically designed for teenagers.'
    },
    {
      id: '17',
      title: 'Beginner Kathak',
      date: createDateString(27),
      time: '10:00 AM - 11:30 AM',
      instructor: 'Guru Rajendra Prasad',
      level: 'Beginner',
      description: 'Introduction to basic Kathak movements and footwork patterns.'
    },
    {
      id: '18',
      title: 'Performance Preparation',
      date: createDateString(29),
      time: '2:00 PM - 4:00 PM',
      instructor: 'Sunita Kalra',
      level: 'All Levels',
      description: 'Final rehearsals for the upcoming quarterly showcase.'
    }
  ];
};
