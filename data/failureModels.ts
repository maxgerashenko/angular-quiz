import { Quiz } from '../src/app/services/interfaces';

export const failureModels: Quiz = {
  courseId: '1',
  courseTitle: 'System Design',
  summary: `The Failure Models are a classification of different types of failures that can occur in distributed systems. The models range from easy to deal with to hard, and each model describes a unique type of failure:

Fail-stop is a failure model where a node stops working altogether when it fails, and other nodes in the system can detect this failure.

Crash is a failure model where a node stops working abruptly without notifying other nodes in the system, making it harder to detect.

Omission failures occur when a node fails to send or receive a message or update, leading to inconsistencies in the data and system behavior.

Temporal failures occur when a node returns correct but outdated data due to network delays or caching, causing inconsistencies in the system's behavior.

Byzantine failures are the most complex and challenging failure model to handle, where a node behaves arbitrarily or maliciously, leading to unpredictable system behavior.

Understanding these failure models is essential for designing robust and fault-tolerant distributed systems. Each model requires a different approach to handle it, and the system should have a combination of techniques to handle multiple failure models simultaneously.`,
  id: '6',
  title: 'Failure Models',
  questionsList: [
    {
      title: 'What is the Fail-stop failure model?',
      optionsList: [
        'A failure where a node stops working altogether when it fails',
        'A failure where a node stops abruptly without notifying other nodes',
        'A failure where a node fails to send or receive a message',
        'A failure where a node returns correct but outdated data',
      ],
      answer: 'a',
      description:
        'Fail-stop is a failure model in which a node or component stops working altogether when it fails.',
    },
    {
      title: 'What is the Crash failure model?',
      optionsList: [
        'A failure where a node stops working altogether when it fails',
        'A failure where a node stops abruptly without notifying other nodes',
        'A failure where a node fails to send or receive a message',
        'A failure where a node returns correct but outdated data',
      ],
      answer: 'b',
      description:
        'Crash is a failure model in which a node stops working abruptly without notifying other nodes in the system.',
    },
    {
      title: 'What is the Omission failure model?',
      optionsList: [
        'A failure where a node stops working altogether when it fails',
        'A failure where a node stops abruptly without notifying other nodes',
        'A failure where a node fails to send or receive a message',
        'A failure where a node returns correct but outdated data',
      ],
      answer: 'c',
      description:
        'Omission failures occur when a node fails to send or receive a message or update.',
    },
    {
      title: 'What is the Temporal failure model?',
      optionsList: [
        'A failure where a node stops working altogether when it fails',
        'A failure where a node stops abruptly without notifying other nodes',
        'A failure where a node fails to send or receive a message',
        'A failure where a node returns correct but outdated data',
      ],
      answer: 'd',
      description:
        'Temporal failures occur when a node returns correct but outdated data due to network delays or caching.',
    },
    {
      title: 'What is the Byzantine failure model?',
      optionsList: [
        'A failure where a node stops working altogether when it fails',
        'A failure where a node stops abruptly without notifying other nodes',
        'A failure where a node fails to send or receive a message',
        'A failure where a node behaves arbitrarily or maliciously',
      ],
      answer: 'd',
      description:
        'Byzantine failures occur when a node behaves arbitrarily or maliciously, leading to unpredictable system behavior.',
    },
  ],
};
