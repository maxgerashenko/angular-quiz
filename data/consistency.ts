import { Quiz } from '../src/app/services/interfaces';

export const consistency: Quiz = {
  id: '5',
  courseId: '1',
  courseTitle: 'System Design',
  summary: `Consistency is a key property of distributed systems, which ensures that all nodes in the system see the same data at the same time.
The CAP theorem states that a distributed system can have at most two of the following three properties: consistency, availability, and partition tolerance.
Eventual consistency is the weakest consistency model, which allows for temporary inconsistencies between nodes in the system. In this model, updates are propagated asynchronously and may take some time to reach all nodes.
Causal consistency is a stronger model, which enforces a causal relationship between events in the system. It ensures that if event A caused event B, then all nodes in the system must see event A before they see event B.
Sequential consistency is a stronger model than causal consistency, which enforces a total order on all events in the system. It ensures that all nodes see the same order of events, regardless of the order in which they were processed by individual nodes.
Strict consistency (also known as linearizability) is the strongest model, which ensures that all nodes in the system see the latest version of the data at all times. It requires that all updates to the system are processed in a total order, which can have an impact on performance and availability.
Choosing a consistency model depends on the requirements of the system. Weaker consistency models like eventual consistency are suitable for systems where availability is more important than consistency, while stronger models like strict consistency are necessary for systems where data integrity is critical.
Implementing strong consistency models can require additional complexity and overhead, which can impact performance and scalability. Therefore, it's important to strike a balance between consistency and performance, and choose the appropriate consistency model based on the needs of the system.
Some distributed databases like Cassandra and Riak allow for tunable consistency, which allows the user to choose the level of consistency that best suits their needs. This allows for a flexible approach to balancing consistency and performance in distributed systems.`,
  title: 'Consistency',
  questionsList: [
    {
      title: 'What is consistency in distributed systems?',
      optionsList: [
        'Ensuring that all nodes in the system see the same data at the same time',
        'Ensuring that the system is always available',
        'Ensuring that the system can handle network partitions',
      ],
      answer: 'a',
      description:
        'Consistency is a key property of distributed systems, which ensures that all nodes in the system see the same data at the same time.',
    },
    {
      title: 'What does the CAP theorem state about distributed systems?',
      optionsList: [
        'A distributed system can have at most two of the following three properties: consistency, availability, and partition tolerance',
        'A distributed system can have all three properties: consistency, availability, and partition tolerance',
        'A distributed system can have only one of the following three properties: consistency, availability, or partition tolerance',
      ],
      answer: 'a',
      description:
        'The CAP theorem states that a distributed system can have at most two of the following three properties: consistency, availability, and partition tolerance.',
    },
    {
      title: 'What is eventual consistency?',
      optionsList: [
        'A consistency model that allows for temporary inconsistencies between nodes in the system',
        'A consistency model that enforces a causal relationship between events in the system',
        'A consistency model that enforces a total order on all events in the system',
      ],
      answer: 'a',
      description:
        'Eventual consistency is the weakest consistency model, which allows for temporary inconsistencies between nodes in the system. In this model, updates are propagated asynchronously and may take some time to reach all nodes.',
    },

    {
      title: 'What is sequential consistency?',
      optionsList: [
        'A consistency model that allows for temporary inconsistencies between nodes in the system',
        'A consistency model that enforces a causal relationship between events in the system',
        'A consistency model that enforces a total order on all events in the system',
      ],
      answer: 'a',
      description:
        'Sequential consistency is a stronger model than causal consistency, which enforces a total order on all events in the system. It ensures that all nodes see the same order of events, regardless of the order in which they were processed by individual nodes.',
    },
    {
      title: 'What is strict consistency (also known as linearizability)?',
      optionsList: [
        'A consistency model that allows for temporary inconsistencies between nodes in the system',
        'A consistency model that enforces a causal relationship between events in the system',
        'The strongest model, which ensures that all nodes in the system see the latest version of the data at all times',
      ],
      answer: 'c',
      description:
        'Strict consistency (also known as linearizability) is the strongest model, which ensures that all nodes in the system see the latest version of the data at all times. It requires that all updates to the system are processed in a total order, which can have an impact on performance and availability.',
    },
    {
      title:
        'Why is it important to choose the appropriate consistency model for a system?',
      optionsList: [
        'Because weaker consistency models like eventual consistency are suitable for systems where availability is more important than consistency',
        'Because stronger models like strict consistency are necessary for systems where data integrity is critical',
        'Both of the above',
      ],
      answer: 'c',
      description:
        'Choosing a consistency model depends on the requirements of the system. Weaker consistency models like eventual consistency are suitable for systems where availability is more important than consistency, while stronger models like strict consistency are necessary for systems where data integrity is critical.',
    },
    {
      title: 'What is tunable consistency?',
      optionsList: [
        'A feature in distributed databases that allows the user to choose the level of consistency that best suits their needs',
        'A consistency model that enforces a total order on all events in the system',
        'A consistency model that allows for temporary inconsistencies between nodes in the system',
      ],
      answer: 'a',
      description:
        'Some distributed databases like Cassandra and Riak allow for tunable consistency, which allows the user to choose the level of consistency that best suits their needs. This allows for a flexible approach to balancing consistency and performance in distributed systems.',
    },
  ],
};
