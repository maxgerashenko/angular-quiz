import { Quiz } from '../src/app/services/interfaces';

export const maintainability: Quiz = {
  courseId: '1',
  courseTitle: 'System Design',
  summary:
    'Maintainability, on the other hand, refers to the ability of a system to be maintained or repaired easily and quickly after a failure. It measures the ease with which a system can be restored to its original state after a failure has occurred. Maintainability is essential for systems that require regular maintenance or updates, such as software applications or industrial equipment',
  id: '8',
  title: 'Maintainability',
  questionsList: [
    {
      title: 'What is maintainability?',
      optionsList: [
        'The ability of a system to perform its intended function without failure over a specific period of time',
        'The ability of a system to be maintained or repaired easily and quickly after a failure',
        'The ability of a system to function as intended with minimal human intervention',
        'The clarity and simplicity of a system’s code and architecture',
      ],
      answer: 'b',
      description:
        'Maintainability refers to the ability of a system to be maintained or repaired easily and quickly after a failure. It is essential for systems that require regular maintenance or updates, such as software applications or industrial equipment.',
    },
    {
      title: 'What is reliability?',
      optionsList: [
        'The ability of a system to perform its intended function without failure over a specific period of time',
        'The ability of a system to be maintained or repaired easily and quickly after a failure',
        'The ability of a system to function as intended with minimal human intervention',
        'The clarity and simplicity of a system’s code and architecture',
      ],
      answer: 'a',
      description:
        'Reliability refers to the ability of a system to perform its intended function without failure over a specific period of time. It is crucial for systems that perform critical functions, such as medical devices or transportation systems.',
    },
    {
      title: 'What is operability?',
      optionsList: [
        'The ability of a system to perform its intended function without failure over a specific period of time',
        'The ability of a system to be maintained or repaired easily and quickly after a failure',
        'The ability of a system to function as intended with minimal human intervention',
        'The clarity and simplicity of a system’s code and architecture',
      ],
      answer: 'c',
      description:
        'Operability refers to the ability of a system to function as intended with minimal human intervention. An operable system is easy to operate, monitor, and control, and it can recover from faults quickly.',
    },
    {
      title: 'What is lucidity?',
      optionsList: [
        'The ability of a system to perform its intended function without failure over a specific period of time',
        'The ability of a system to be maintained or repaired easily and quickly after a failure',
        'The ability of a system to function as intended with minimal human intervention',
        'The clarity and simplicity of a system’s code and architecture',
      ],
      answer: 'd',
      description:
        'Lucidity refers to the clarity and simplicity of a system’s code and architecture. A system with high lucidity is easy to understand and modify, and it is less prone to errors or bugs.',
    },
    {
      title: 'What is modifiability?',
      optionsList: [
        'The ability of a system to perform its intended function without failure over a specific period of time',
        'The ability of a system to be maintained or repaired easily and quickly after a failure',
        'The ability of a system to function as intended with minimal human intervention',
        'The ease with which a system can be modified or adapted to meet changing requirements or business needs',
      ],
      answer: 'd',
      description:
        'Modifiability refers to the ease with which a system can be modified or adapted to meet changing requirements or business needs. A modifiable system is flexible and scalable, and it can accommodate unforeseen features or functionality without requiring significant changes to the underlying code or architecture.',
    },
    {
      title: 'What is MTTR?',
      optionsList: [
        'The average time required to restore a system’s function after a failure has occurred',
        'The probability that a service will restore its functions within a specified time',
        'The number of repairs required to maintain a system over a specific period of time',
        'The time required to develop and deploy a new system or application',
      ],
      answer: 'a',
      description:
        'MTTR stands for Mean Time To Repair, and it measures the average time required to restore a system’s function after a failure has occurred. A lower MTTR indicates that the system is easier to repair and maintain, which can improve overall system reliability and availability.',
    },
    {
      title:
        'What is the relationship between maintainability and reliability?',
      optionsList: [
        'There is no relationship between maintainability and reliability',
        'Maintainability is more important than reliability',
        'Reliability is more important than maintainability',
        'Maintainability and reliability are both important, but they measure different aspects of a system’s performance',
      ],
      answer: 'd',
      description:
        'Maintainability and reliability are both important, but they measure different aspects of a system’s performance. While reliability measures a system’s ability to work consistently and predictably without errors or breakdowns, maintainability measures the ease with which a system can be maintained or repaired after a failure.',
    },
    {
      title: 'What are some factors that contribute to operability?',
      optionsList: [
        'Intuitive user interfaces',
        'Effective monitoring and alerting systems',
        'Automated recovery mechanisms',
        'All of the above',
      ],
      answer: 'd',
      description:
        'Some factors that contribute to operability include intuitive user interfaces, effective monitoring and alerting systems, and automated recovery mechanisms.',
    },
    {
      title: 'What are some ways to improve lucidity?',
      optionsList: [
        'Writing clear and concise code',
        'Following established coding standards and best practices',
        'Using consistent naming conventions',
        'All of the above',
      ],
      answer: 'd',
      description:
        'Some ways to improve lucidity include writing clear and concise code, following established coding standards and best practices, and using consistent naming conventions.',
    },
    {
      title: 'What are some ways to improve modifiability?',
      optionsList: [
        'Using modular design and architecture',
        'Loosely coupling system components',
        'Using standardized interfaces and protocols',
        'All of the above',
      ],
      answer: 'd',
      description:
        'Some ways to improve modifiability include using modular design and architecture, loosely coupling system components, and using standardized interfaces and protocols.',
    },
    {
      title: 'What are some ways to improve MTTR?',
      optionsList: [
        'Implementing effective monitoring and alerting systems',
        'Developing clear and concise troubleshooting procedures',
        'Regularly testing and maintaining system components',
        'All of the above',
      ],
      answer: 'd',
      description:
        'Some ways to improve MTTR include implementing effective monitoring and alerting systems, developing clear and concise troubleshooting procedures, and regularly testing and maintaining system components.',
    },
  ],
};
