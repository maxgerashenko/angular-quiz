import { Quiz } from '../src/app/services/interfaces';

export const scalability: Quiz = {
  id: '8',
  courseId: '1',
  courseTitle: 'System Design',
  summary: `Scalability:

Scalability is the ability of a system to handle an increasing amount of workload without compromising performance. In today's fast-paced world, where businesses are growing and evolving rapidly, scalability has become a crucial factor in determining the success of a system.

There are three dimensions of scalability: size, administrative, and geographical.

Size scalability involves adding more users or resources to the system to handle increased workload. For example, if a website is experiencing a surge in traffic, the size of the system can be increased by adding more servers or increasing the capacity of the existing ones.

Administrative scalability involves handling the same workload with multiple users. This means that the system should be able to handle an increasing number of users without compromising performance. This can be achieved by using load balancing techniques or by partitioning the workload among different servers.

Geographical scalability involves ensuring that the system can readily service a broad geographic area. This can be achieved by using content delivery networks (CDNs) or by replicating the system in different locations.

There are two main options for achieving scalability: vertical scalability and horizontal scalability.

Vertical scalability, also known as scaling up, involves adding more resources to a single server or node. For example, adding more CPU, memory, or storage to a server can increase its capacity to handle more workload. This option is typically more expensive and has a limit to how much it can scale.

Horizontal scalability, also known as scaling out, involves adding more servers or nodes to the system. This option is typically more cost-effective and can scale to handle large amounts of workload. However, it requires more complex coordination between the servers and may require additional infrastructure to manage.

In conclusion, scalability is a critical factor in designing and maintaining high-performance systems. It requires careful consideration of the size, administrative, and geographical dimensions of the system, as well as the choice between vertical and horizontal scalability options.`,
  title: 'Scalability',
  questionsList: [
    {
      title: 'What is scalability?',
      optionsList: [
        'A. The ability of a system to handle an increasing amount of workload without compromising performance.',
        'B. The ability of a system to handle a decreasing amount of workload without compromising performance.',
        'C. The ability of a system to handle any amount of workload without compromising performance.',
        'D. The ability of a system to handle an increasing amount of workload while compromising performance.',
      ],
      answer: 'A',
      description:
        'Scalability is the ability of a system to handle an increasing amount of workload without compromising performance.',
    },
    {
      title: 'What are the three dimensions of scalability?',
      optionsList: [
        'A. Size, complexity, and security',
        'B. Size, administrative, and performance',
        'C. Size, geographical, and compatibility',
        'D. Size, administrative, and geographical',
      ],
      answer: 'D',
      description:
        'The three dimensions of scalability are size, administrative, and geographical.',
    },
    {
      title: 'What is size scalability?',
      optionsList: [
        'A. The ability of a system to handle an increasing number of users without compromising performance.',
        'B. The ability of a system to handle an increasing amount of workload by adding more servers or resources.',
        'C. The ability of a system to handle the same workload with multiple users.',
        'D. The ability of a system to readily service a broad geographic area.',
      ],
      answer: 'B',
      description:
        'Size scalability involves adding more users or resources to the system to handle increased workload.',
    },
    {
      title: 'What is administrative scalability?',
      optionsList: [
        'A. The ability of a system to handle an increasing number of users without compromising performance.',
        'B. The ability of a system to handle an increasing amount of workload by adding more servers or resources.',
        'C. The ability of a system to handle the same workload with multiple users.',
        'D. The ability of a system to readily service a broad geographic area.',
      ],
      answer: 'C',
      description:
        'Administrative scalability involves handling the same workload with multiple users.',
    },
    {
      title: 'What is geographical scalability?',
      optionsList: [
        'A. The ability of a system to handle an increasing number of users without compromising performance.',
        'B. The ability of a system to handle an increasing amount of workload by adding more servers or resources.',
        'C. The ability of a system to handle the same workload with multiple users.',
        'D. The ability of a system to readily service a broad geographic area.',
      ],
      answer: 'D',
      description:
        'Geographical scalability involves ensuring that the system can readily service a broad geographic area.',
    },
    {
      title: 'What is vertical scalability?',
      optionsList: [
        'A. Adding more servers or nodes to the system',
        'B. Adding more resources to a single server or node',
        'C. Using load balancing techniques to handle an increasing number of users',
        'D. Increasing the capacity of the existing servers or nodes',
      ],
      answer: 'B',
      description:
        'Vertical scalability involves adding more resources to a single server or node to increase its capacity to handle more workload.',
    },
    {
      title: 'What is horizontal scalability?',
      optionsList: [
        'A. Adding more servers or nodes to the system',
        'B. Adding more resources to a single server or node',
        'C. Using load balancing techniques to handle an increasing number of users',
        'D. Increasing the capacity of the existing servers or nodes',
      ],
      answer: 'A',
      description:
        'Horizontal scalability involves adding more servers or nodes to the system to handle large amounts of workload.',
    },
    {
      title: 'Which scalability option is typically more expensive?',
      optionsList: [
        'A. Vertical scalability',
        'B. Horizontal scalability',
        'C. Both options cost the same',
        'D. It depends on the system',
      ],
      answer: 'A',
      description:
        'Vertical scalability is typically more expensive than horizontal scalability.',
    },
    {
      title:
        'Which scalability option can scale to handle large amounts of workload?',
      optionsList: [
        'A. Vertical scalability',
        'B. Horizontal scalability',
        'C. Both options can handle large amounts of workload',
        'D. It depends on the system',
      ],
      answer: 'B',
      description:
        'Horizontal scalability can scale to handle large amounts of workload.',
    },
    {
      title:
        'What is the key factor in designing and maintaining high-performance systems?',
      optionsList: [
        'A. Scalability',
        'B. Security',
        'C. Usability',
        'D. Cost-effectiveness',
      ],
      answer: 'A',
      description:
        'Scalability is a critical factor in designing and maintaining high-performance systems.',
    },
  ],
};
