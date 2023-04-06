import { Quiz } from '../src/app/services/interfaces';

export const distributedMonitoring: Quiz = {
  courseId: '1',
  courseTitle: 'System Design',
  id: '3',
  title: 'Distributed Monitoring',
  questionsList: [
    {
      title:
        'What is the purpose of the rules database in the monitoring system?',
      optionsList: [
        'To store configuration data for the monitoring system',
        'To store metrics for analysis',
        'To store rules for alerting',
        'To store log data for debugging purposes',
      ],
      answer: 'c',
      description:
        'The rules database is used to store rules that are used to generate alerts based on the collected metrics.',
    },
    {
      title:
        'What is the purpose of the querying service in the monitoring system?',
      optionsList: [
        'To retrieve data from the monitored systems',
        'To store metrics for analysis',
        'To query the time-series databases for information',
        'To generate alerts based on collected metrics',
      ],
      answer: 'c',
      description:
        'The querying service is used to query the time-series databases for information and return relevant data to the user.',
    },
    {
      title:
        'What is the role of the service discoverer in the monitoring system?',
      optionsList: [
        'To retrieve data from the monitored systems',
        'To store metrics for analysis',
        'To generate alerts based on collected metrics',
        'To identify what systems to monitor',
      ],
      answer: 'd',
      description:
        'The service discoverer identifies what systems to monitor in the distributed system, such as Kubernetes clusters or other infrastructure.',
    },
    {
      title: 'What is the purpose of the dashboard in the monitoring system?',
      optionsList: [
        'To store metrics for analysis',
        'To generate alerts based on collected metrics',
        'To query the time-series databases for information',
        'To view collected metrics in a user-friendly format',
      ],
      answer: 'd',
      description:
        'The dashboard is used to view collected metrics in a user-friendly format, allowing users to easily monitor the performance of the distributed system.',
    },
    {
      title:
        'What are the benefits of a push strategy in the monitoring system?',
      optionsList: [
        'Reduced latency',
        'Reduced network traffic',
        'Scalability',
        'Control over data',
      ],
      answer: 'a',
      description:
        'A push strategy can reduce latency in the monitoring system, allowing for real-time updates and notifications.',
    },
    {
      title: 'What are the cons of a pull strategy in the monitoring system?',
      optionsList: [
        'High volume of notifications',
        'Increased network traffic',
        'Incomplete data',
        'Resource usage on the monitored systems',
      ],
      answer: 'c',
      description:
        'With a pull strategy, there can be a delay between when data is requested and when it is received, resulting in potentially incomplete data for time-sensitive applications.',
    },
    {
      title:
        'What is the purpose of the time-series databases in the monitoring system?',
      optionsList: [
        'To store configuration data for the monitoring system',
        'To store metrics for analysis',
        'To store rules for alerting',
        'To store log data for debugging purposes',
      ],
      answer: 'b',
      description:
        'The time-series databases are used to store metrics that are collected from the monitored systems for further analysis.',
    },
    {
      title:
        'What is the purpose of the Blob storage in the monitoring system?',
      optionsList: [
        'To store rules for alerting',
        'To store metrics for analysis',
        'To store configuration data for the monitoring system',
        'To store log data for debugging purposes',
      ],
      answer: 'b',
      description:
        'The Blob storage is used to store metrics that are collected from the monitored systems.',
    },
    {
      title: 'What is the role of the data collector in the monitoring system?',
      optionsList: [
        'It stores metrics in a time-series database',
        'It sends alerts to the Alert Manager',
        'It retrieves data from the monitored systems',
        'It queries the time-series database for information',
      ],
      answer: 'c',
      description:
        'The data collector retrieves data from the monitored systems and sends it to the monitoring system for analysis and storage.',
    },
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
