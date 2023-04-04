import { Course } from "./interfaces"



export const TMP_COURSES_LIST: Course[] = [
  {
    id: '1',
    title: 'First',
    quizzesList: [
      {
        id: '1',
        title: 'Introduction to Angular',
        courseId: '1',
        courseTitle: 'Angular',
        questionsList: [
          {
            title: '',
            optionsList: ['Java', 'JavaScript', 'Python', 'C#'],
            answer: 'b',
            description: 'Java is not JavaScript',
          },
        ]
      }]
  },
  {
    id: '1',
    title: 'Angular',
    quizzesList: [
      {
        id: '1',
        title: 'Introduction to Angular',
        courseId: '1',
        courseTitle: 'Angular',
        questionsList: [
          {
            title: '',
            optionsList: ['Java', 'JavaScript', 'Python', 'C#'],
            answer: 'b',
            description: 'Java is not JavaScript',
          },
          {
            title: '',
            optionsList: ['Java', 'JavaScript', 'Python', 'C#'],
            answer: 'b',
            description: 'Java is not JavaScript',
          },
        ],
      },
      {
        id: '2',
        title: 'Introduction to Angular',
        courseId: '1',
        courseTitle: 'Angular',
        questionsList: [
          {
            title: '',
            optionsList: ['Java', 'JavaScript', 'Python', 'C#'],
            answer: 'b',
            description: 'Java is not JavaScript',
          },
          {
            title: '',
            optionsList: ['Java', 'JavaScript', 'Python', 'C#'],
            answer: 'b',
            description: 'Java is not JavaScript',
          },
        ],
      },
    ],
  }
];