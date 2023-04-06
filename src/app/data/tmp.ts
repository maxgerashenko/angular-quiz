import { Course } from '../services/interfaces';

export const TMP_COURSES_LIST: Course[] = [
  {
    id: '0',
    title: 'Angular',
    quizzesList: [
      {
        id: '0',
        title: 'Introduction',
        courseId: '0',
        courseTitle: 'Angular',
        questionsList: [
          {
            title: 'What language does angular use?',
            optionsList: ['Java', 'JavaScript', 'Python', 'C#'],
            answer: 'b',
            description:
              'Java is not the correct answer because Angular is a JavaScript framework and uses JavaScript as its language, not Java. The two languages have different syntax, features, and libraries.',
          },
          {
            title: 'What language does angular use 2?',
            optionsList: ['Java', 'JavaScript', 'Python', 'C#'],
            answer: 'b',
            description:
              'Java is not the correct answer because Angular is a JavaScript framework and uses JavaScript as its language, not Java. The two languages have different syntax, features, and libraries.',
          },
        ],
      },
    ],
  },
  {
    id: '1',
    title: 'System Deisgn',
    quizzesList: [],
  },
];
