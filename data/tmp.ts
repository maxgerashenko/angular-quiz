import { Course } from '../src/app/services/interfaces';
import { availability } from './availability';
import { consistency } from './consistency';
import { distributedMonitoring } from './distributedMonitoring';
import { distributedQueue } from './ditributedCache';
import { failureModels } from './failureModels';
import { messageQueue } from './messageQueue';
import { modalVerbs } from './modalVerbs';
import { modalVerbs2 } from './modalVerbs2';
import { rpc } from './rpc';

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
              'The two languages have different syntax, features, and libraries.',
          },
          {
            title: 'does angular use?',
            optionsList: ['Java', 'JavaScript', 'Python', 'C#'],
            answer: 'b',
            description:
              'Java is not the correct answer because Angular is a JavaScript framework and uses JavaScript as its language, not Java.',
          },
        ],
      },
    ],
  },
  {
    id: '2',
    title: 'English',
    quizzesList: [modalVerbs, modalVerbs2],
  },
  {
    id: '1',
    title: 'System Deisgn',
    quizzesList: [
      rpc,
      consistency,
      failureModels,
      availability,
      distributedMonitoring,
      distributedQueue,
      messageQueue,
    ],
  },
];
