import { Quiz } from '../src/app/services/interfaces';

export const messageQueue: Quiz = {
  courseId: '1',
  courseTitle: 'System Design',
  id: '1',
  title: 'Messaging Queues',
  questionsList: [
    {
      title: 'What is the role of the client in a messaging queue system?',
      optionsList: [
        'To receive messages from the queue',
        'To store messages in the queue',
        'To create and send messages to the queue',
        'To delete messages from the queue',
      ],
      answer: 'c',
      description:
        'The client is the component that creates and sends messages to the messaging queue.',
    },
    {
      title:
        'What is the responsibility of the front-end server in a messaging queue system?',
      optionsList: [
        'To store and retrieve metadata related to queues',
        'To distribute client traffic among multiple front-end servers',
        'To validate and authorize client requests',
        'To store and deliver messages to clients',
      ],
      answer: 'C',
      description:
        'The front-end server is responsible for validating the request, authenticating and authorizing the client, and deduplicating messages.',
    },
    {
      title:
        'What is the purpose of the metadata service in a messaging queue system?',
      optionsList: [
        'To distribute client traffic among multiple front-end servers',
        'To store and retrieve metadata related to queues',
        'To validate and authorize client requests',
        'To store and deliver messages to clients',
      ],
      answer: 'B',
      description:
        'The metadata service is a middleware component that stores and retrieves metadata related to queues, such as the number of messages in the queue, and the last time a message was dequeued.',
    },
    {
      title:
        'What is the role of the metadata database in a messaging queue system?',
      optionsList: [
        'To store messages and users for auditing and tracking purposes',
        'To distribute client traffic among multiple front-end servers',
        'To validate and authorize client requests',
        'To store and deliver messages to clients',
      ],
      answer: 'a',
      description:
        'The metadata database stores messages and users, which can be used for auditing and tracking purposes.',
    },
    {
      title:
        'What is the purpose of the metadata cache server in a messaging queue system?',
      optionsList: [
        'To distribute client traffic among multiple front-end servers',
        'To store and retrieve metadata related to queues',
        'To cache metadata related to queues',
        'To store and deliver messages to clients',
      ],
      answer: 'C',
      description:
        'The metadata cache server caches metadata related to queues, such as the number of messages in the queue, to improve performance and reduce latency.',
    },
    {
      title:
        'What is the role of the back-end server in a messaging queue system?',
      optionsList: [
        'To distribute client traffic among multiple front-end servers',
        'To store and retrieve metadata related to queues',
        'To validate and authorize client requests',
        'To store and deliver messages to clients',
      ],
      answer: 'D',
      description:
        'The back-end server hosts the message queue and is responsible for storing and delivering messages to the appropriate client.',
    },
    {
      title: 'What are the two types of message ordering?',
      optionsList: [
        'FIFO and LIFO',
        'Best-effort and strict',
        'Fast and slow',
        'Durable and volatile',
      ],
      answer: 'b',
      description:
        'The two types of message ordering are best-effort and strict ordering. Best-effort ordering follows FIFO for the system received order, not necessarily the order produced by the client. Strict ordering follows FIFO for the client produced order.',
    },
    {
      title: 'What are the four types of indexes to maintain message ordering?',
      optionsList: [
        'Sequence numbers, event-driven, synchronized clocks, and timestamp + sequence numbers',
        'Sequence numbers, wall-clock timestamps, synchronized clocks timestamps, and timestamp + sequence numbers',
        'FIFO, wall-clock timestamps, synchronized clocks, and timestamp + sequence numbers',
        'Sequence numbers, LIFO, synchronized clocks, and timestamp + sequence numbers',
      ],
      answer: 'b',
      description:
        'The four types of indexes to maintain message ordering are sequence numbers, wall-clock timestamps, synchronized clocks timestamps, and timestamp + sequence numbers.',
    },
    {
      title:
        'What can be added to manage concurrency among multiple consumers?',
      optionsList: [
        'Timestamps or sequence numbers',
        'Queues or channels',
        'Message brokers or middleware',
        'Event-driven architectures',
      ],
      answer: 'a',
      description:
        'Timestamps or sequence numbers can be added to manage concurrency among multiple consumers.',
    },
    {
      title: 'What is recommended to manage concurrency?',
      optionsList: [
        'Thread locking all message queues',
        'Serializing requests',
        'Both a and b',
        'None of the above',
      ],
      answer: 'c',
      description:
        'Thread locking all message queues and serializing requests are recommended to manage concurrency.',
    },
    {
      title:
        'What are the three cases when a message can be sent to a dead-letter queue?',
      optionsList: [
        'When the message is corrupted, when the message is not delivered, and when the message is too large',
        'When the message intended for a queue that doesn’t exist anymore, when the queue length limit is exceeded, and when the message expires due to per-message time to live (TTL)',
        'When the message is out of order, when the message is too small, and when the message is lost',
        'When the message is too slow, when the message is too fast, and when the message is too complex',
      ],
      answer: 'b',
      description:
        'A message can be sent to a dead-letter queue when the message intended for a queue that doesn’t exist anymore, when the queue length limit is exceeded, and when the message expires due to per-message time to live (TTL).',
    },
    {
      title: 'When is a message deleted?',
      optionsList: [
        'The producer deletes the message',
        'The message is automatically deleted after a certain time period',
        'The consumer deletes the message',
        'None of the above',
      ],
      answer: 'c',
      description:
        'A message is deleted by the consumer after it has been processed.',
    },
    {
      title: 'What is the recommended way to delete a message?',
      optionsList: [
        'Delete the message after it’s consumed',
        'Don’t delete the message after it’s consumed',
        'Make the message invisible for some time as visibility_timeout',
        'None of the above',
      ],
      answer: 'a',
      description:
        'The recommended way to delete a message is to delete it after it has been consumed.',
    },
    {
      title: 'What is the purpose of a cluster manager?',
      optionsList: [
        'To manage message queues',
        'To manage metadata cache clusters',
        'To manage concurrent consumers',
        'To manage hosts',
      ],
      answer: 'd',
      description: 'The purpose of a cluster manager is to manage hosts.',
    },
    {
      title: 'What are the two types of cluster managers?',
      optionsList: [
        'Internal and external',
        'Primary and secondary',
        'Sequential and concurrent',
        'Producer and consumer',
      ],
      answer: 'a',
      description:
        'The two types of cluster managers are internal and external.',
    },
    {
      title: 'What does an internal cluster manager do?',
      optionsList: [
        'Manages clusters across clusters',
        'Distributes message queues to clusters',
        'Does sharding within a cluster',
        'All of the above',
      ],
      answer: 'c',
      description:
        'An internal cluster manager manages hosts, distributes message queues to hosts, and does sharding within a cluster.',
    },
    {
      title: 'What does an external cluster manager do?',
      optionsList: [
        'Manages hosts',
        'Distributes message queues to hosts',
        'Does sharding within a cluster',
        'Manages clusters across clusters',
      ],
      answer: 'd',
      description:
        'An external cluster manager manages clusters across clusters and can distribute message queues to clusters.',
    },
    {
      title: 'What model can be used for a backend server?',
      optionsList: [
        'Producer-consumer model',
        'Primary-secondary model',
        'Peer-to-peer model',
        'Client-server model',
      ],
      answer: 'b',
      description:
        'The primary-secondary model can be used for a backend server where a cluster manager sets primary and secondary for the same queue.',
    },
    {
      title: 'What can be used for a cluster of independent hosts?',
      optionsList: [
        'Internal cluster manager',
        'External cluster manager',
        'Producer-consumer model',
        'None of the above',
      ],
      answer: 'b',
      description:
        'A cluster of independent hosts can be used with an external cluster manager where the external cluster sends a queue to a local cluster that sets multiple hosts for one queue.',
    },
    {
      title: 'What is the purpose of sharding?',
      optionsList: [
        'To manage hosts',
        'To manage message queues',
        'To distribute metadata cache',
        'To distribute data across servers',
      ],
      answer: 'd',
      description:
        'The purpose of sharding is to distribute data across servers.',
    },
    {
      title: 'What is the purpose of a metadata cache cluster?',
      optionsList: [
        'To manage hosts',
        'To manage message queues',
        'To distribute metadata cache',
        'To distribute data across servers',
      ],
      answer: 'c',
      description:
        'The purpose of a metadata cache cluster is to distribute metadata cache.',
    },

    {
      title:
        'What is the responsibility of the front-end server in message deduplication?',
      optionsList: [
        'To ensure that each message is delivered to the appropriate client',
        'To cache authentication and authorization data',
        'To validate and authorize client requests',
        'To deduplicate messages',
      ],
      answer: 'D',
      description:
        'The front-end server is responsible for deduplicating messages.',
    },
    {
      title:
        'What does the metadata service interact with in a messaging queue system?',
      optionsList: [
        'The client',
        'The front-end server',
        'The back-end server',
        'Both B and C',
      ],
      answer: 'a',
      description:
        'The metadata service interacts with both the front-end and data layer components to manage the queues.',
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
