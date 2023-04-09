import { Quiz } from '../src/app/services/interfaces';

export const reliability: Quiz = {
  id: '7',
  courseId: '1',
  courseTitle: 'System Design',
  summary: `Reliability is a measure of how well a service or system performs its intended function without failures or errors. There are two key metrics used to measure reliability:

Mean Time Between Failures (MTBF): This is the average time between system failures. It is calculated by dividing the total uptime of the system by the number of failures. A higher MTBF indicates that the system is less likely to fail and is therefore more reliable.

Mean Time to Repair (MTTR): This is the average time it takes to repair a system after a failure. A lower MTTR indicates that the system can be repaired quickly, reducing downtime and increasing reliability.

Reliability can be measured in different ways, depending on the context. For example, a reliable car may be one that rarely breaks down, while a reliable software service may be one that is always available and responsive.

The relationship between MTBF and MTTR is important in understanding overall system reliability. A system with a high MTBF and a low MTTR is more reliable than a system with a low MTBF and a high MTTR. However, in some cases, it may be more important to focus on reducing MTTR, as this can minimize downtime and improve the user experience.

In summary, reliability is essential for any system or service that needs to perform consistently and without failures. MTBF and MTTR are key metrics used to measure reliability, and understanding the relationship between them is important in ensuring overall system reliability.`,
  title: 'Reliability',
  questionsList: [
    {
      title: 'What does MTBF stand for?',
      optionsList: [
        'Mean Time Between Fixes',
        'Mean Time Before Failure',
        'Maximum Time Between Failures',
        'Minimum Time Before Fixes',
      ],
      answer: 'b',
      description:
        'MTBF stands for Mean Time Before Failure and is a measure of the average time between system failures.',
    },
    {
      title: 'What does MTTR stand for?',
      optionsList: [
        'Mean Time To Repair',
        'Maximum Time To Respond',
        'Minimum Time To Restore',
        'Most Time To Resolve',
      ],
      answer: 'a',
      description:
        'MTTR stands for Mean Time To Repair and is a measure of the average time it takes to repair a system after a failure.',
    },
    {
      title:
        'Which system is more reliable: one with a high MTBF and low MTTR, or one with a low MTBF and high MTTR?',
      optionsList: ['High MTBF and Low MTTR', 'Low MTBF and High MTTR'],
      answer: 'a',
      description:
        'A system with a high MTBF and low MTTR is more reliable than a system with a low MTBF and high MTTR.',
    },
    {
      title: 'What is the relationship between MTBF and system reliability?',
      optionsList: [
        'They are not related',
        'Higher MTBF indicates higher reliability',
        'Lower MTBF indicates higher reliability',
      ],
      answer: 'b',
      description:
        'A higher MTBF indicates that the system is less likely to fail and is therefore more reliable.',
    },
    {
      title: 'What is the relationship between MTTR and system reliability?',
      optionsList: [
        'They are not related',
        'Higher MTTR indicates higher reliability',
        'Lower MTTR indicates higher reliability',
      ],
      answer: 'c',
      description:
        'A lower MTTR indicates that the system can be repaired quickly, reducing downtime and increasing reliability.',
    },
    {
      title: 'What is an example of a reliable car?',
      optionsList: [
        'One that breaks down often',
        'One that rarely breaks down',
      ],
      answer: 'b',
      description:
        'A reliable car is one that rarely breaks down and can be counted on to perform consistently.',
    },
    {
      title: 'What is an example of a reliable software service?',
      optionsList: [
        'One that is often unavailable and slow',
        'One that is always available and responsive',
      ],
      answer: 'b',
      description:
        'A reliable software service is one that is always available and responsive to user requests.',
    },
    {
      title: 'Why is it important to focus on reducing MTTR?',
      optionsList: [
        'It increases MTBF',
        'It reduces downtime and improves user experience',
        'It improves system performance',
      ],
      answer: 'b',
      description:
        'Reducing MTTR can minimize downtime and improve the user experience by ensuring that the system is quickly restored after a failure.',
    },
    {
      title: 'What is the main benefit of a system with a high MTBF?',
      optionsList: [
        'It is easier to repair',
        'It is less likely to fail',
        'It is faster',
      ],
      answer: 'b',
      description:
        'A system with a high MTBF is less likely to fail and is therefore more reliable.',
    },
    {
      title: 'What is the main benefit of a system with a low MTTR?',
      optionsList: [
        'It reduces downtime and improves user experience',
        'It is less likely to fail',
        'It is faster',
      ],
      answer: 'a',
      description:
        'A system with a low MTTR can be repaired quickly, reducing downtime and improving the user experience.',
    },
  ],
};
