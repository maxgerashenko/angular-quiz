import { Quiz } from '../src/app/services/interfaces';

export const loadBalancer: Quiz = {
  courseId: '1',
  courseTitle: 'System Design',
  summary:
    'Load balancers are critical components of distributed systems to handle high traffic, reduce downtime, and provide better performance. This quiz covers various aspects of load balancers, including algorithms, layers, types, and deployment tiers.',
  id: '12',
  title: 'Load Balancer Quiz',
  questionsList: [
    {
      title: 'What is the role of a load balancer in a distributed system?',
      optionsList: [
        'Reduce downtime and provide better performance',
        'Handle security and privacy',
        'Ensure data consistency',
        'None of the above',
      ],
      answer: 'A',
      description:
        'Load balancers help distribute network traffic, ensure high availability, and improve performance. They are critical components of distributed systems to handle high traffic and reduce downtime.',
    },
    {
      title: 'What are some services offered by load balancers?',
      optionsList: [
        'Health checking of servers',
        'TLS termination',
        'Predictive analytics',
        'All of the above',
      ],
      answer: 'D',
      description:
        'Load balancers offer services such as health checking of servers, TLS termination, predictive analytics, reduced human intervention, service discovery, and security.',
    },
    {
      title: 'What is the limitation of DNS-based load balancing?',
      optionsList: [
        'Small size of DNS packets',
        'Slow recovery due to caching and long TTL',
        'Clients arbitrarily selecting busy data centers',
        'All of the above',
      ],
      answer: 'D',
      description:
        'DNS-based load balancing suffers from limitations such as the small size of DNS packets, clients arbitrarily selecting busy data centers, and slow recovery due to caching and long TTL.',
    },
    {
      title:
        'What are the two types of load balancers based on session management?',
      optionsList: [
        'Static and dynamic',
        'Layer 4 and Layer 7',
        'Stateful and stateless',
        'DR and DSR',
      ],
      answer: 'C',
      description:
        'Load balancers can be classified as stateful or stateless based on session management. Stateful load balancing holds the state of the sessions, while stateless load balancing is faster and lightweight, using consistent hashing.',
    },
    {
      title:
        'What is the difference between Layer 4 and Layer 7 load balancers?',
      optionsList: [
        'Layer 4 works at the transport protocol level, while Layer 7 operates at the application layer',
        'Layer 4 can perform HTTP routing, while Layer 7 can handle TCP and UDP connections',
        'Layer 4 can perform rate limiting, while Layer 7 can handle HTTP headers',
        'Layer 4 is faster than Layer 7',
      ],
      answer: 'A',
      description:
        'Layer 4 load balancers work at the transport protocol level, handling TCP and UDP connections, while Layer 7 load balancers operate at the application layer, making decisions based on HTTP headers, URLs, cookies, and other application-specific data. Layer 7 load balancers can perform tasks such as rate limiting users, HTTP routing, and header rewriting.',
    },
    {
      title: 'What are the different deployment tiers of load balancers?',
      optionsList: [
        'Tier-0, Tier-1, Tier-2, and Tier-3',
        'Tier-1, Tier-2, Tier-3, and Tier-4',
        'Tier-2, Tier-3, Tier-4, and Tier-5',
        'Tier-3, Tier-4, Tier-5, and Tier-6',
      ],
      answer: 'A',
      description:
        'Load balancers can be deployed at different tiers, such as Tier-0 (DNS as a load balancer), Tier-1 (load balancers for load balancers), Tier-2 (load balancers for smooth connection handling and failure management), and Tier-3 (load balancers for actual load balancing between back-end servers).',
    },
    {
      title:
        'What is the difference between direct routing (DR) and direct server return (DSR) load balancers?',
      optionsList: [
        'DR sends return traffic back through the load balancer, while DSR sends return traffic directly to the client',
        'DR and DSR are the same thing',
        'DR is faster than DSR',
        'DSR is more secure than DR',
      ],
      answer: 'A',
      description:
        'Direct routing (DR) and direct server return (DSR) are two types of load balancers that differ in where the return traffic is directed. DR sends return traffic back through the load balancer, while DSR sends return traffic directly to the client.',
    },
    {
      title:
        'What are the benefits of using software load balancers over hardware load balancers?',
      optionsList: [
        'Flexibility and programmability',
        'Cost-effectiveness and scalability',
        'Both A and B',
        'None of the above',
      ],
      answer: 'C',
      description:
        'Software load balancers offer flexibility, programmability, cost-effectiveness, and scalability over hardware load balancers, which are expensive to maintain.',
    },
    {
      title: 'What is the purpose of weighted round-robin algorithm?',
      optionsList: [
        'Distribute traffic equally across all servers',
        'Distribute traffic based on server response time',
        'Distribute traffic based on server load',
        'Distribute traffic based on server capacity',
      ],
      answer: 'D',
      description:
        'Weighted round-robin algorithm distributes traffic based on server capacity, where servers with higher capacity receive more traffic. This ensures that the system can handle more traffic without overwhelming any individual server.',
    },
    {
      title:
        'What is the advantage of using cloud load balancers (LBaaS) over on-premise load balancers?',
      optionsList: [
        'Global GSLB and pay-in-SLA',
        'Metered cost and better security',
        'Better performance and availability',
        'All of the above',
      ],
      answer: 'A',
      description:
        'Cloud load balancers (LBaaS) are a good option for global GSLB and offer pay-in-SLA and metered cost, which are advantages over on-premise load balancers.',
    },
  ],
};
