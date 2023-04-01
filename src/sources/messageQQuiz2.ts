export const messageQQuiz2 = {
  title: 'Distributed Messaging Queue Quiz #2',
  questions: [
    {
      question:
        'What is a significant drawback of using a single-server messaging queue?',
      options: [
        'High availability',
        'Scalability',
        'Lack of durability',
        'Parallel queue',
      ],
      answer: 'c',
      description:
        'The single-server messaging queue lacks durability as it is not replicated.',
    },
    {
      question:
        'Which approach to ordering of messages follows the FIFO order as received?',
      options: [
        'Best-effort ordering',
        'Strict ordering',
        'Timestamps',
        'Sequence numbers',
      ],
      answer: 'a',
      description:
        'Best-effort ordering follows the first-in, first-out (FIFO) order as received.',
    },
    {
      question:
        'Which approach to ordering of messages follows the FIFO order that messages are produced?',
      options: [
        'Best-effort ordering',
        'Strict ordering',
        'Timestamps',
        'Sequence numbers',
      ],
      answer: 'b',
      description:
        'Strict ordering follows the FIFO order that messages are produced.',
    },
    {
      question:
        'What is the best approach for determining the correct order of messages?',
      options: [
        'Causality-based sorting at the client-side',
        'Time-stamping on the client-side',
        'Time-stamping based on synchronized clocks and a sequencer',
        'Monotonically increasing numbers',
      ],
      answer: 'c',
      description:
        'Using time-stamping based on synchronized clocks and a sequencer is the best approach for determining the correct order of messages.',
    },
    {
      question:
        'Which approach to sorting keeps some data sorted as new data comes in?',
      options: [
        'Online sorting',
        'Time-window approach',
        'Strict ordering',
        'Best-effort ordering',
      ],
      answer: 'a',
      description:
        'Online sorting keeps some data sorted as new data comes in.',
    },
    {
      question:
        'Which approach to sorting sorts messages received within a specific time frame?',
      options: [
        'Online sorting',
        'Time-window approach',
        'Strict ordering',
        'Best-effort ordering',
      ],
      answer: 'b',
      description:
        'The time-window approach sorts messages received within a specific time frame.',
    },
    {
      question:
        'What is the problem with using monotonically increasing numbers for ordering incoming messages?',
      options: [
        'It creates a bottleneck of creating ids',
        'It guarantees the correct order of messages on the client-side',
        'It can lead to contention and bottlenecks when multiple nodes are trying to order messages',
        'It creates a problem with incorrect time-stamps',
      ],
      answer: 'c',
      description:
        'Using monotonically increasing numbers creates a problem where the correct order of messages in terms of wall-clock time cannot be guaranteed.',
    },
    {
      question:
        'What is a solution for managing concurrency when multiple messages arrive at the same time or when multiple consumers request a message concurrently?',
      options: [
        'Use the locking mechanism',
        'Serialize the requests',
        'Add timestamps',
        'Add sequence numbers',
      ],
      answer: 'b',
      description:
        'One solution for managing concurrency is to serialize the requests by buffering requests before and after the queue.',
    },
    {
      question:
        'Why is the locking mechanism not a scalable or performant solution for managing concurrency?',
      options: [
        'It is too expensive',
        'It creates a bottleneck',
        'It is too complicated',
        'It is too slow',
      ],
      answer: 'b',
      description:
        'It creates a bottleneck Explanation: The locking mechanism is not scalable or performant as it creates a bottleneck',
    },
    {
      question:
        'What is the purpose of adding timestamps or sequence numbers for concurrent consumers?',
      options: [
        'To guarantee the correct order of messages in terms of wall-clock time',
        'To add durability to the queue',
        'To reduce the latency of the queue',
        'To increase the number of messages that can be added to the queue',
      ],
      answer: 'a',
      description:
        'Adding timestamps or sequence numbers for concurrent consumers helps to guarantee the correct order of messages in terms of wall-clock time',
    },
  ],
};
