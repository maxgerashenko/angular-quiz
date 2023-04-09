import { Quiz } from '../src/app/services/interfaces';

export const faultTolerance: Quiz = {
  courseId: '1',
  courseTitle: 'System Design',
  summary:
    'Fault tolerance is important for ensuring that a system continues to operate and provide services in the event of component failures. Replication and checkpointing are two common techniques used to achieve fault tolerance.',
  id: '9',
  title: 'Fault Tolerance Quiz',
  questionsList: [
    {
      title: 'What is the goal of fault tolerance?',
      optionsList: [
        'To reduce system availability',
        'To ensure that the system is accessible and operational 24/7',
        'To make the system more complex',
        'To make the system less reliable',
      ],
      answer: 'b',
      description:
        'The goal of fault tolerance is to ensure that the system is accessible and operational 24/7.',
    },
    {
      title: 'What is replication?',
      optionsList: [
        'The process of creating multiple copies of a component or system to increase its fault tolerance',
        'The process of removing faulty components from the system',
        'The process of reducing system complexity',
        'The process of optimizing system performance',
      ],
      answer: 'a',
      description:
        'Replication is the process of creating multiple copies of a component or system to increase its fault tolerance.',
    },
    {
      title: 'What are the two main goals of fault tolerance?',
      optionsList: [
        'Performance and scalability',
        'Reliability and security',
        'Availability and scalability',
        'Availability and reliability',
      ],
      answer: 'd',
      description:
        'The two main goals of fault tolerance are availability and reliability.',
    },
    {
      title: 'What is active replication?',
      optionsList: [
        'All replicas are active and handle requests concurrently',
        'Only one replica is active, and the other replicas act as backups',
        'The system receives messages while checkpointing is being performed',
        'The system stops all processing until the state is written to a persistent storage',
      ],
      answer: 'a',
      description:
        'In active replication, all replicas are active and handle requests concurrently.',
    },
    {
      title: 'What is passive replication?',
      optionsList: [
        'All replicas are active and handle requests concurrently',
        'Only one replica is active, and the other replicas act as backups',
        'The system receives messages while checkpointing is being performed',
        'The system stops all processing until the state is written to a persistent storage',
      ],
      answer: 'b',
      description:
        'In passive replication, only one replica is active, and the other replicas act as backups.',
    },
    {
      title: 'What is synchronous checkpointing?',
      optionsList: [
        'A type of checkpointing that allows the system to receive messages while the checkpoint is being performed',
        "A type of checkpointing that ensures the system's state is consistent across all replicas by stopping all processing until the state is written to a persistent storage",
        'A type of replication that creates multiple copies of a component or system to increase its fault tolerance',
        "A type of checkpointing that reduces the system's availability",
      ],
      answer: 'b',
      description:
        "Synchronous checkpointing is a type of checkpointing that ensures the system's state is consistent across all replicas by stopping all processing until the state is written to a persistent storage.",
    },
    {
      title: 'What is inconsistent state checkpointing?',
      optionsList: [
        'A type of checkpointing that allows the system to receive messages while the checkpoint is being performed',
        "A type of checkpointing that ensures the system's state is consistent across all replicas by stopping all processing until the state is written to a persistent storage",
        'A type of replication that creates multiple copies of a component or system to increase its fault tolerance',
        "A type of checkpointing that reduces the system's availability",
      ],
      answer: 'a',
      description:
        'Inconsistent state checkpointing allows the system to receive messages while the checkpoint is being performed, resulting in some messages not being recorded.',
    },
    {
      title:
        'What needs to be recorded to maintain a consistent state during checkpointing?',
      optionsList: [
        'Only messages received before the checkpoint',
        'Only messages received after the checkpoint',
        'All messages received before and after the checkpoint',
        'None of the messages',
      ],
      answer: 'c',
      description:
        'To maintain a consistent state during checkpointing, all messages received before and after the checkpoint must be recorded.',
    },
    {
      title:
        'What is the impact of maintaining consistency on system availability?',
      optionsList: [
        'It increases system availability',
        'It reduces system availability',
        'It has no impact on system availability',
        'It makes the system more complex',
      ],
      answer: 'b',
      description:
        "Maintaining consistency can reduce the system's availability as it may take time to synchronize all the replicas.",
    },
    {
      title: 'What is the main advantage of fault tolerance?',
      optionsList: [
        'It makes the system faster',
        'It reduces system complexity',
        'It increases system availability',
        'It makes the system less reliable',
      ],
      answer: 'c',
      description:
        'The main advantage of fault tolerance is that it increases system availability by ensuring that the system continues to operate and provide services in the event of component failures.',
    },
  ],
};
