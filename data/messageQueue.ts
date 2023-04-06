import { Quiz } from '../src/app/services/interfaces';

export const messageQueue: Quiz = {
  courseId: '1',
  courseTitle: 'System Design',
  id: '1',
  title: 'Distributed Messaging Queues Quiz',
  questionsList: [
    {
      title:
        'What is the role of cluster managers in distributed messaging queues?',
      optionsList: [
        'Manage queues within a cluster',
        'Manage queues across clusters',
        'Monitor node health',
        'All of the above',
      ],
      answer: 'd',
      description:
        'Cluster managers manage queues within a cluster and across clusters, and monitor node health.',
    },
    {
      title:
        'What is the primary-secondary model in distributed messaging queues?',
      optionsList: [
        'The primary host is responsible for data replication',
        'Secondary hosts replicate the data',
        'The internal cluster manager maps hosts and queues',
        'All of the above',
      ],
      answer: 'd',
      description:
        'The primary-secondary model in distributed messaging queues involves the primary host being responsible for data replication, secondary hosts replicating the data, and the internal cluster manager mapping hosts and queues.',
    },
    {
      title:
        "What happens to messages that can't be processed in distributed messaging queues?",
      optionsList: [
        'They are discarded',
        'They are sent to the dead-letter queue',
        'They are sent to the primary host',
        'None of the above',
      ],
      answer: 'b',
      description:
        "Messages that can't be processed in distributed messaging queues are sent to the dead-letter queue.",
    },
    {
      title:
        'Who is responsible for deleting a message in distributed messaging queues?',
      optionsList: [
        'The producer',
        'The consumer',
        'The cluster manager',
        'None of the above',
      ],
      answer: 'b',
      description:
        "In distributed messaging queues, a message is only deleted by the consumer, either after it's consumed or after a certain period of time called visibility_timeout.",
    },
    {
      title:
        'What is at-least-once delivery semantic in distributed messaging queues?',
      optionsList: [
        'The message is delivered at least once to the consumer',
        'The message is delivered exactly once to the consumer',
        'The message is delivered at most once to the consumer',
        'None of the above',
      ],
      answer: 'a',
      description:
        'At-least-once delivery semantic in distributed messaging queues means that in the event of a worker failure, the message is processed again to ensure the message is delivered at least once to the consumer.',
    },
    {
      title:
        'What is the purpose of scalability in distributed messaging queues?',
      optionsList: [
        'To handle large volumes of messages',
        'To ensure message delivery',
        'To enforce strict ordering',
        'None of the above',
      ],
      answer: 'a',
      description:
        'Scalability in distributed messaging queues is important to handle large volumes of messages efficiently and effectively.',
    },
    {
      title:
        'What is the impact of enforcing strict ordering in distributed messaging queues?',
      optionsList: [
        'Improved performance',
        'Increased complexity',
        'Better reliability',
        'None of the above',
      ],
      answer: 'a',
      description:
        'Enforcing strict ordering in distributed messaging queues can increase the complexity of the system, which may impact performance.',
    },
    {
      title: 'What is a dead-letter queue in distributed messaging queues?',
      optionsList: [
        "A queue that doesn't exist anymore",
        'A queue for expired messages',
        "A queue for messages that can't be processed",
        'None of the above',
      ],
      answer: 'c',
      description:
        "A dead-letter queue in distributed messaging queues is a queue for messages that can't be processed, either due to a queue that doesn't exist anymore, a queue length limit exceeding, or expired messages.",
    },
    {
      title:
        'What is the difference between an internal and external cluster manager in distributed messaging queues?',
      optionsList: [
        'Internal cluster managers manage queues within a cluster, while external cluster managers manage queues across clusters',
        'Internal cluster managers manage queues across clusters, while external cluster managers manage queues within a cluster',
        'Internal and external cluster managers are the same thing',
        'None of the above',
      ],
      answer: 'a',
      description:
        'Internal cluster managers manage queues within a cluster, while external cluster managers manage queues across clusters.',
    },
    {
      title:
        'What is the impact of message deletion on message processing in distributed messaging queues?',
      optionsList: [
        "Deleting a message immediately after it's consumed ensures better performance",
        'Deleting a message after a certain period of time called visibility_timeout ensures message reliability',
        'Deleting a message can have no impact on message processing if the consumer fails to delete it',
        'None of the above',
      ],
      answer: 'c',
      description:
        'In distributed messaging queues, deleting a message can have no impact on message processing if the consumer fails to delete it.',
    },
    {
      title:
        'What is the purpose of a primary-secondary model in distributed messaging queues?',
      optionsList: [
        'To ensure strict ordering of messages',
        'To handle large volumes of messages',
        'To distribute message processing across hosts',
        'None of the above',
      ],
      answer: 'c',
      description:
        'A primary-secondary model in distributed messaging queues is used to distribute message processing across hosts and ensure fault tolerance.',
    },
  ],
};
