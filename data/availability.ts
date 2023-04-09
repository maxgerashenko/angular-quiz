import { Quiz } from '../src/app/services/interfaces';

export const availability: Quiz = {
  id: '6',
  courseId: '1',
  courseTitle: 'System Design',
  summary: `Single point of failure
Problem: A single component that can bring down the entire system if it fails.
Solution: Redundancy and fault tolerance.

Network congestion
Problem: When the network becomes congested, requests may not be able to get through to their destination, leading to service disruption.
Solution: Load balancing and traffic shaping.

Inadequate capacity planning
Problem: If the system's capacity is not designed to handle the expected load, it may become overwhelmed and fail.
Solution: Scalability.

Software bugs
Problem: Errors and bugs in the software can lead to system crashes and service disruption.
Solution: Fault detection and recovery.

Human error
Problem: Mistakes made by humans can lead to system downtime.
Solution: Automation and monitoring.

By addressing these common availability problems through redundancy, fault tolerance, load balancing, scalability, fault detection and recovery, automation, and monitoring, designers can ensure that the distributed system remains operational and responsive even during failures.`,
  title: 'Availability',
  questionsList: [
    {
      title: 'What is availability in a distributed system?',
      optionsList: [
        'a) The ability of a system to provide its services without any interruption or downtime',
        'b) The ability of a system to handle an increasing number of requests',
        'c) The ability of a system to detect and recover from faults quickly',
        'd) The ability of a system to distribute incoming requests across multiple servers',
      ],
      answer: 'a',
      description:
        'Availability refers to the ability of a system to provide its services to users without any interruption or downtime.',
    },
    {
      title: 'What is redundancy in a distributed system?',
      optionsList: [
        'a) A technique that involves replicating system components, data, and services to ensure that they are available even if some of the nodes or components fail',
        'b) The ability of a system to handle an increasing number of requests',
        'c) The ability of a system to detect and recover from faults quickly',
        'd) The ability of a system to distribute incoming requests across multiple servers',
      ],
      answer: 'a',
      description:
        'Redundancy is a technique that involves replicating system components, data, and services to ensure that they are available even if some of the nodes or components fail.',
    },
    {
      title: 'What is load balancing in a distributed system?',
      optionsList: [
        'a) A technique that distributes incoming requests across multiple servers to prevent overload and improve performance',
        'b) The ability of a system to handle an increasing number of requests',
        'c) The ability of a system to detect and recover from faults quickly',
        'd) The ability of a system to provide its services without any interruption or downtime',
      ],
      answer: 'a',
      description:
        'Load balancing is a technique that distributes incoming requests across multiple servers to prevent overload and improve performance.',
    },
    {
      title: 'What is scalability in a distributed system?',
      optionsList: [
        'a) The ability of a system to handle an increasing number of requests without affecting its performance or availability',
        'b) The ability of a system to detect and recover from faults quickly',
        'c) The ability of a system to distribute incoming requests across multiple servers',
        'd) The ability of a system to provide its services without any interruption or downtime',
      ],
      answer: 'a',
      description:
        'Scalability is the ability of a system to handle an increasing number of requests without affecting its performance or availability.',
    },
    {
      title: 'What is monitoring and alerting in a distributed system?',
      optionsList: [
        'a) Techniques used to detect and respond to faults, errors, and performance issues in a system',
        'b) The ability of a system to handle an increasing number of requests',
        'c) The ability of a system to distribute incoming requests across multiple servers',
        'd) The ability of a system to provide its services without any interruption or downtime',
      ],
      answer: 'a',
      description:
        'Monitoring and alerting techniques are used to detect and respond to faults, errors, and performance issues in a distributed system.',
    },
    {
      title:
        'What is the primary factor that affects availability in a distributed system?',
      optionsList: [
        'a) Redundancy',
        'b) Scalability',
        'c) Fault Detection and Recovery',
        'd) Load Balancing',
      ],
      answer: 'c',
      description:
        'Fault Detection and Recovery is the primary factor that affects availability in a distributed system because it allows the system to detect and recover from faults quickly, ensuring that the system remains operational and responsive even during failures.',
    },
    {
      title: 'What is horizontal scaling in a distributed system?',
      optionsList: [
        'a) A technique that involves replicating system components, data, and services to ensure that they are available even if some of the nodes or components fail.',
        'b) The ability of a system to handle an increasing number of requests without affecting its performance or availability.',
        'c) A technique that involves adding more servers to the system to handle an increasing number of requests.',
        'd) A technique that distributes incoming requests across multiple servers to prevent overload and improve performance.',
      ],
      answer: 'c',
      description:
        'Horizontal scaling is a technique that involves adding more servers to the system to handle an increasing number of requests, allowing the system to handle higher traffic loads without affecting its performance or availability.',
    },
    {
      title: 'What is sharding in a distributed system?',
      optionsList: [
        'a) A technique that involves replicating system components, data, and services to ensure that they are available even if some of the nodes or components fail.',
        'b) The ability of a system to handle an increasing number of requests without affecting its performance or availability.',
        'c) A technique that involves partitioning the data or workload across multiple servers to improve performance and scalability.',
        'd) A technique that distributes incoming requests across multiple servers to prevent overload and improve performance.',
      ],
      answer: 'c',
      description:
        'Sharding is a technique that involves partitioning the data or workload across multiple servers to improve performance and scalability, allowing the system to handle more requests and data without affecting its performance or availability.',
    },
    {
      title:
        'What is the purpose of monitoring and alerting in a distributed system?',
      optionsList: [
        'a) To detect and respond to faults, errors, and performance issues in the system.',
        'b) To distribute incoming requests across multiple servers to prevent overload and improve performance.',
        'c) To replicate system components, data, and services to ensure that they are available even if some of the nodes or components fail.',
        "d) To handle an increasing number of requests without affecting the system's performance or availability.",
      ],
      answer: 'a',
      description:
        'The purpose of monitoring and alerting in a distributed system is to detect and respond to faults, errors, and performance issues in the system, allowing designers to take corrective actions and prevent downtime or service interruption.',
    },
    {
      title:
        'What is the problem with a single point of failure in a distributed system?',
      optionsList: [
        'a) It can bring down the entire system if it fails.',
        'b) It can cause network congestion.',
        'c) It can lead to inadequate capacity planning.',
        'd) It can introduce software bugs.',
      ],
      answer: 'a',
      description:
        'A single point of failure in a distributed system is a problem because if that component fails, it can bring down the entire system and lead to service disruption and downtime.',
    },
    {
      title:
        'What is the solution to the single point of failure problem in a distributed system?',
      optionsList: [
        'a) Automation and monitoring',
        'b) Fault detection and recovery',
        'c) Scalability',
        'd) Redundancy and fault tolerance',
      ],
      answer: 'd',
      description:
        'The solution to the single point of failure problem in a distributed system is redundancy and fault tolerance, where multiple copies of critical components are deployed in the system, so if one fails, the others can continue to function and maintain system availability.',
    },
    {
      title:
        'What is the problem with network congestion in a distributed system?',
      optionsList: [
        'a) It can bring down the entire system if it fails.',
        'b) It can cause network congestion.',
        'c) It can lead to inadequate capacity planning.',
        'd) It can introduce software bugs.',
      ],
      answer: 'b',
      description:
        'Network congestion in a distributed system is a problem because when the network becomes congested, requests may not be able to get through to their destination, leading to service disruption.',
    },
    {
      title:
        'What is the solution to network congestion in a distributed system?',
      optionsList: [
        'a) Automation and monitoring',
        'b) Fault detection and recovery',
        'c) Load balancing and traffic shaping',
        'd) Redundancy and fault tolerance',
      ],
      answer: 'c',
      description:
        'The solution to network congestion in a distributed system is load balancing and traffic shaping, where incoming requests are distributed across multiple servers and network traffic is managed to prevent overload and ensure timely delivery of requests.',
    },
    {
      title:
        'What is the problem with inadequate capacity planning in a distributed system?',
      optionsList: [
        'a) It can bring down the entire system if it fails.',
        'b) It can cause network congestion.',
        'c) It can lead to inadequate capacity planning.',
        'd) It can introduce software bugs.',
      ],
      answer: 'c',
      description:
        "Inadequate capacity planning in a distributed system is a problem because if the system's capacity is not designed to handle the expected load, it may become overwhelmed and fail.",
    },
    {
      title:
        'What is the solution to inadequate capacity planning in a distributed system?',
      optionsList: [
        'a) Automation and monitoring',
        'b) Fault detection and recovery',
        'c) Scalability',
        'd) Redundancy and fault tolerance',
      ],
      answer: 'c',
      description:
        'The solution to inadequate capacity planning in a distributed system is scalability, where the system can be scaled up or down to handle changes in load. This can be achieved through techniques such as horizontal scaling, partitioning, and sharding.',
    },
    {
      title: 'What is the problem with software bugs in a distributed system?',
      optionsList: [
        'a) It can bring down the entire system if it fails.',
        'b) It can cause network congestion.',
        'c) It can lead to inadequate capacity planning.',
        'd) It canintroduce security vulnerabilities.',
      ],
      answer: 'a',
      description:
        'Software bugs in a distributed system are a problem because errors and bugs in the software can lead to system crashes and service disruption.',
    },
    {
      title: 'What is the solution to software bugs in a distributed system?',
      optionsList: [
        'a) Automation and monitoring',
        'b) Fault detection and recovery',
        'c) Load balancing and traffic shaping',
        'd) Redundancy and fault tolerance',
      ],
      answer: 'b',
      description:
        'The solution to software bugs in a distributed system is fault detection and recovery, where the system is designed to detect and recover from faults quickly. Techniques such as health checks, timeouts, and rollbacks can be used to detect and recover from faults.',
    },
    {
      title: 'What is the problem with human error in a distributed system?',
      optionsList: [
        'a) It can bring down the entire system if it fails.',
        'b) It can cause network congestion.',
        'c) It can lead to inadequate capacity planning.',
        'd) It can introduce security vulnerabilities.',
      ],
      answer: 'a',
      description:
        'Human error in a distributed system is a problem because mistakes made by humans, such as misconfiguration or human error, can lead to system downtime.',
    },
    {
      title: 'What is the solution to human error in a distributed system?',
      optionsList: [
        'a) Automation and monitoring',
        'b) Fault detection and recovery',
        'c) Load balancing and traffic shaping',
        'd) Redundancy and fault tolerance',
      ],
      answer: 'a',
      description:
        'The solution to human error in a distributed system is automation and monitoring, where the system is automated to minimize the risk of human error, and monitoring and alerting techniques are used to detect and respond to issues quickly.',
    },
  ],
};
