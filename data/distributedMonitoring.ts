import { Quiz } from '../src/app/services/interfaces';

export const distributedMonitoring: Quiz = {
  courseId: '1',
  courseTitle: 'System Design',
  id: '3',
  title: 'Distributed Monitoring',
  questionsList: [
    {
      title: 'What are the two types of errors that can occur in a system?',
      optionsList: [
        '1xx errors and 2xx errors',
        '3xx errors and 4xx errors',
        '4xx errors and 5xx errors',
        '5xx errors and 6xx errors',
      ],
      answer: 'c',
      description:
        'Client-side errors are 4xx errors, while service-side errors are 5xx errors.',
    },
    {
      title: 'What are some metrics that can be used to monitor a system?',
      optionsList: [
        'Page views and click-through rates',
        'Bandwidth and latency',
        'Revenue and profit margins',
        'Customer satisfaction and feedback',
      ],
      answer: 'b',
      description:
        'Metrics such as bandwidth, latency, and system logs can be used to monitor the health of the system.',
    },
    {
      title: 'What are the two strategies for collecting data in a system?',
      optionsList: [
        'Push and pull',
        'Send and receive',
        'Fetch and retrieve',
        'Download and upload',
      ],
      answer: 'a',
      description:
        'Push takes data on its schedule, while pull can avoid overwhelming the system and prevent unnecessary direct access.',
    },
    {
      title:
        'What is the difference between a reactive and proactive approach to monitoring?',
      optionsList: [
        'Reactive is better than proactive',
        'Reactive involves preventing downtime, while proactive involves fixing errors after they occur',
        'Proactive involves preventing downtime, while reactive involves fixing errors after they occur',
        'Reactive and proactive are the same thing',
      ],
      answer: 'c',
      description:
        'A proactive approach aims to prevent downtime altogether, while a reactive approach involves fixing errors after they occur.',
    },
    {
      title: 'What is important when persisting data in a system?',
      optionsList: [
        'Using the same database as everyone else',
        'Storing data in spreadsheets',
        'Using centralized in-memory metrics or a time-series database',
        'Not persisting any data at all',
      ],
      answer: 'c',
      description:
        'Persisting data in centralized in-memory metrics or a time-series database is important for big data.',
    },
    {
      title: 'What is code instrumentation in a system?',
      optionsList: [
        'Using code to create music',
        'Integrating metrics into the code',
        'Analyzing the code for errors',
        'Encrypting the code',
      ],
      answer: 'b',
      description:
        'Code instrumentation can be used to integrate metrics into the code.',
    },
    {
      title: 'What is alerting in a system?',
      optionsList: [
        'Sending messages to friends',
        'Taking action when values fall outside of the permitted range',
        'Ignoring all errors',
        'Alerting the media',
      ],
      answer: 'b',
      description:
        'Alerting can be based on metrics and takes action when values fall outside of the permitted range.',
    },
    {
      title: 'What are some components of a system design for monitoring?',
      optionsList: [
        'Data collector service and querying service',
        'Database and messaging app',
        'Calculator and calendar app',
        'Video player and word processor',
      ],
      answer: 'a',
      description:
        'A system design for monitoring can include a storage database, data collector service, querying service, rules and actions databases, and a service discoverer.',
    },
    {
      title: "What are some ways to improve a system's monitoring",
      optionsList: [
        'Using a push-based strategy for local data',
        'Using a pull-based strategy to overwhelm the system',
        'Using a hierarchy of systems for scaling',
        'Not using any monitoring at all',
      ],
      answer: 'c',
      description:
        "A system's monitoring can be improved by using a pull-based strategy to avoid network overloading, using pull for local and push-based strategy for global, and using a hierarchy of systems for scaling.",
    },
    {
      title: 'What is the importance of protecting user privacy in a system?',
      optionsList: [
        "It's not important",
        "It can be important, but it doesn't affect the system's performance",
        "It can affect the system's performance, but it's not important",
        "It can affect the system's performance and be important",
      ],
      answer: 'd',
      description:
        "Protecting user privacy in a system can affect the system's performance and be important. Round-trip-time, packet loss, and geographic location should not be shared to protect user privacy.",
    },
    {
      title:
        'What is the purpose of the Persistence component in a server-side monitoring system?',
      optionsList: [
        'To identify services to monitor',
        "To provide a visual representation of the system's health",
        'To store data collected by the system',
        'To define rules for triggering alerts',
      ],
      answer: 'c',
      description:
        'The Persistence component stores the data collected by the system in a centralized location, such as a time-series database, for easy access and analysis.',
    },
    {
      title:
        'What type of data is collected by the Metrics and Alerting component in a server-side monitoring system?',
      optionsList: [
        'System logs and performance metrics',
        'Geographic location data',
        'Billing and invoicing data',
        'Network configuration data',
      ],
      answer: 'a',
      description:
        'The Metrics and Alerting component collects system logs and performance metrics, such as system load, CPU and memory usage, disk space, network bandwidth, and latency.',
    },
    {
      title:
        'What is the purpose of using a Service Mesh tool such as Consul in a server-side monitoring system?',
      optionsList: [
        'To store data collected by the system',
        'To identify services to monitor',
        "To provide a visual representation of the system's health",
        'To help with service discovery, configuration, and segmentation',
      ],
      answer: 'd',
      description:
        'A Service Mesh tool such as Consul is used for service discovery, configuration, and segmentation, which helps with identifying the services that need to be monitored and their location and status.',
    },
    {
      title: 'What are the key benefits of a server-side monitoring system?',
      optionsList: [
        'Identifying system vulnerabilities',
        'Preventing downtime and other issues',
        'Improving system performance and reliability',
        'All of the above',
      ],
      answer: 'd',
      description:
        'A server-side monitoring system helps identify system vulnerabilities, prevent downtime and other issues, and improve system performance and reliability.',
    },
    {
      title:
        'What is the purpose of the Metrics and Alerting component in a server-side monitoring system?',
      optionsList: [
        'To store data collected by the system',
        'To identify services to monitor',
        'To collect relevant metrics and set up alerts based on certain thresholds',
        "To provide a visual representation of the system's health",
      ],
      answer: 'c',
      description:
        'The Metrics and Alerting component collects relevant metrics from the system and sets up alerts based on certain thresholds.',
    },
    {
      title:
        'What does the Data Collection Service component in a server-side monitoring system do?',
      optionsList: [
        "Provides a visual representation of the system's health",
        'Collects and aggregates data from the system, including system logs and performance metrics',
        'Sends out alerts to the appropriate parties when issues are detected',
        'Defines rules for triggering alerts',
      ],
      answer: 'b',
      description:
        'The Data Collection Service component collects and aggregates data from the system, including system logs and performance metrics.',
    },
    {
      title:
        'What is the purpose of the Querying Service component in a server-side monitoring system?',
      optionsList: [
        'To identify services to monitor',
        'To store data collected by the system',
        'To define rules for triggering alerts',
        'To provide a way to retrieve information from the logs and metrics collected by the data collection service',
      ],
      answer: 'd',
      description:
        'The Querying Service component provides a way to retrieve information from the logs and metrics collected by the data collection service.',
    },
    {
      title:
        'What is the purpose of the Rules and Actions Database component in a server-side monitoring system?',
      optionsList: [
        'To identify services to monitor',
        "To provide a visual representation of the system's health",
        'To store data collected by the system',
        'To define rules for triggering alerts and actions to be taken in response',
      ],
      answer: 'd',
      description:
        'The Rules and Actions Database component is responsible for defining rules for triggering alerts and actions to be taken in response.',
    },
    {
      title:
        'What is the purpose of the Service Discoverer component in a server-side monitoring system?',
      optionsList: [
        'To collect relevant metrics and set up alerts based on certain thresholds',
        'To identify services to monitor',
        "To provide a visual representation of the system's health",
        'To provide a way to retrieve information from the logs and metrics collected by the data collection service',
      ],
      answer: 'b',
      description:
        'The Service Discoverer component identifies the services that need to be monitored and provides information about their location and status.',
    },
    {
      title:
        'What is the purpose of the Alert Manager component in a server-side monitoring system?',
      optionsList: [
        'To collect relevant metrics and set up alerts based on certain thresholds',
        'To identify services to monitor',
        "To provide a visual representation of the system's health",
        'To send out alerts to the appropriate parties when issues are detected',
      ],
      answer: 'd',
      description:
        'The Alert Manager component sends out alerts to the appropriate parties (e.g., system administrators or DevOps teams) when issues are detected.',
    },
  ],
};
