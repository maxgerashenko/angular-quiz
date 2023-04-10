import { Quiz } from '../src/app/services/interfaces';

export const modalVerbs2: Quiz = {
  id: '1',
  courseId: '2',
  courseTitle: 'System Design',
  title:
    'Have to, Must, Should - Obligation, Prohibition, Necessity, Advice Quiz',
  questionsList: [
    {
      title: 'You _____ brush your teeth twice a day to keep them healthy.',
      optionsList: ['have to', 'must', 'should'],
      answer: 'C',
      description:
        'This sentence is giving advice to brush teeth twice a day for better oral health.',
    },
    {
      title: "I'm sorry, you _____ smoke in here. It's against the law.",
      optionsList: ['have to', 'must', 'should'],
      answer: 'B',
      description:
        'This sentence is indicating a prohibition against smoking in the given place.',
    },
    {
      title: 'We _____ be at the airport by 7:00 am tomorrow for our flight.',
      optionsList: ['have to', 'must', 'should'],
      answer: 'A',
      description:
        'This sentence expresses an obligation to be at the airport at a specific time for a scheduled flight.',
    },
    {
      title:
        'You _____ take a break every hour when working on the computer to prevent eye strain.',
      optionsList: ['have to', 'must', 'should'],
      answer: 'B',
      description:
        'This sentence is indicating a necessity to take a break when working on a computer to prevent eye strain.',
    },
    {
      title:
        "I'm really busy at work, but I _____ make time to exercise regularly for my health.",
      optionsList: ['have to', 'must', 'should'],
      answer: 'A',
      description:
        'This sentence expresses an obligation to make time for regular exercise for better health.',
    },
    {
      title: 'You _____ forget to bring your passport when you travel abroad.',
      optionsList: ["mustn't", 'must', 'should'],
      answer: 'A',
      description:
        'This sentence is indicating a prohibition against forgetting to bring a passport while traveling abroad.',
    },
    {
      title: 'I _____ call my mom tonight to wish her a happy birthday.',
      optionsList: ['have to', 'must', 'should'],
      answer: 'C',
      description:
        "This sentence is giving advice to call one's mother to wish her a happy birthday.",
    },
    {
      title: 'We _____ use our phones while driving.',
      optionsList: ['have to', "mustn't", 'should'],
      answer: 'B',
      description:
        'This sentence is indicating a prohibition against using phones while driving.',
    },
    {
      title: "I'm feeling sick, so I _____ go to the doctor.",
      optionsList: ['have to', 'must', 'should'],
      answer: 'A',
      description:
        'This sentence expresses a necessity to go to the doctor due to feeling sick.',
    },
    {
      title: "You _____ try this new restaurant, it's supposed to be amazing.",
      optionsList: ['have to', 'must', 'should'],
      answer: 'C',
      description:
        'This sentence is giving advice to try a new restaurant that is said to be amazing',
    },
  ],
};
