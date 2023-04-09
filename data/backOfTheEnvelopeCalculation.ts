import { Quiz } from '../src/app/services/interfaces';

export const backOfTheEnvelopeCalculation: Quiz = {
  courseId: '1',
  courseTitle: 'System Design',
  summary: `Back-of-the-envelope calculations are quick and rough estimations that are based on assumptions and simplifications. These calculations are useful for getting a rough idea of the feasibility of a project, determining the scale of the required infrastructure, and making initial design decisions.

When estimating the number of concurrent TCP connections, we need to consider the types of servers we are using, the realistic access latencies of different components, and the estimation of RPS that a server can handle.

Web servers are the first point of contact after load balancers and handle static content and extensive computational tasks. Application servers run core application software and provide dynamic content. Storage servers handle blob storage for videos, temporary processing queue storage, thumbnails of videos, and videos metadata. Configuration servers, monitoring servers, load balancing, analytics, accounting, and caching are other important components that need to be considered.

To estimate the RPS that a server can handle, we need to consider CPU-bound requests and memory-bound requests. For CPU-bound requests, the limiting factor is the CPU, and the RPS can be calculated as CPU N * 1/task time. For memory-bound requests, the RPS can be calculated as RAM / Task size * 1/Task time.

It is important to note that the reality includes several inevitable factors, such as latency disk seek, requests to the database server, database latency, network latency, faults, bugs in code, node failures, power outages, network disruptions, and more. These factors need to be taken into account while making the estimations.

Finally, examples of bandwidth, servers, and storage estimation need to be considered while making the estimations. For example, the RAM might handle as many as 500k RPS, while image processing may only allow a maximum of 50 RPS`,
  id: '10',
  title: 'Back-of-the-envelope Calculations',
  questionsList: [
    {
      title: 'What is the purpose of back-of-the-envelope calculations?',
      optionsList: [
        'To get exact calculations',
        'To get a rough idea of feasibility',
        'To make final design decisions',
        'To replace detailed analysis',
      ],
      answer: 'b',
      description:
        'Back-of-the-envelope calculations are useful for getting a rough idea of the feasibility of a project.',
    },
    {
      title:
        'What are the types of servers that need to be considered when estimating the number of concurrent TCP connections?',
      optionsList: [
        'Web servers, application servers, and storage servers',
        'Configuration servers and monitoring servers',
        'Load balancing, analytics, accounting, and caching servers',
        'All of the above',
      ],
      answer: 'a',
      description:
        'Web servers, application servers, and storage servers are the types of servers that need to be considered when estimating the number of concurrent TCP connections.',
    },
    {
      title: 'What is the first point of contact after load balancers?',
      optionsList: [
        'Application servers',
        'Storage servers',
        'Web servers',
        'Configuration servers',
      ],
      answer: 'c',
      description:
        'Web servers are the first point of contact after load balancers.',
    },
    {
      title: 'What do web servers handle?',
      optionsList: [
        'Static content',
        'Dynamic content',
        'Blob storage for videos',
        'Temporary processing queue storage',
      ],
      answer: 'a',
      description:
        'Web servers handle static content and extensive computational tasks.',
    },
    {
      title: 'What do application servers run?',
      optionsList: [
        'Core application software and business logic',
        'Blob storage for videos',
        'Temporary processing queue storage',
        'Thumbnails of videos',
      ],
      answer: 'a',
      description:
        'Application servers run core application software and business logic.',
    },
    {
      title: 'What do storage servers handle?',
      optionsList: [
        'Blob storage for videos, temporary processing queue storage, thumbnails of videos, and videos metadata',
        'Configuration servers and monitoring servers',
        'Load balancing, analytics, accounting, and caching servers',
        'None of the above',
      ],
      answer: 'a',
      description:
        'Storage servers handle blob storage for videos, temporary processing queue storage, thumbnails of videos, and videos metadata.',
    },
    {
      title: 'What are the types of RAM?',
      optionsList: [
        'SRAM and DRAM',
        'SSD and HDD',
        'NAND flash memory and NOR flash memory',
        'Structured and non-structured (NoSQL)',
      ],
      answer: 'a',
      description: 'The types of RAM are SRAM and DRAM.',
    },
    {
      title: 'How can we estimate the RPS for CPU-bound requests?',
      optionsList: [
        'RAM / Task size * 1/Task time',
        'CPU N * 1/Task time',
        'RAM / Task size * Task time',
        'CPU N * Task time',
      ],
      answer: 'b',
      description:
        'For CPU-bound requests, the limiting factor is the CPU, and the RPS can be calculated as CPU N * 1/task time.',
    },
    {
      title: 'How can we estimate the RPS for memory-bound requests?',
      optionsList: [
        'CPU N * 1/task time',
        'RAM / Task size * 1/Task time',
        'CPU N * Task time',
        'RAM / Task size * Task time',
      ],
      answer: 'b',
      description:
        'For memory-bound requests, the RPS can be calculated as RAM / Task size * 1/Task time.',
    },
    {
      title:
        'What are some factors that need to be considered while making estimations?',
      optionsList: [
        'Latency disk seek, requests to the database server, network latency, faults, bugs in code, node failures, power outages, and network disruptions',
        'The type of query, the size of the database, and the speed of the internet connection',
        'The operating system, the programming language, and the type of server',
        'All of the above',
      ],
      answer: 'a',
      description:
        'While making estimations, factors such as latency disk seek, requests to the database server, network latency, faults, bugs in code, node failures, power outages, and network disruptions need to be considered.',
    },
  ],
};
