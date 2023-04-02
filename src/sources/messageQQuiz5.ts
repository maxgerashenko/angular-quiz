export const messageQQuiz5 = {
  id: '1680378121534',
  summary: `Back-end service or queue is a system that manages the storage, delivery, and processing of messages between different applications or services. Below are the key concepts related to back-end service or queue:

Internal Cluster Manager: It manages the assignment of queues within a cluster and has information about each node within a cluster. It listens to the heartbeat from each node and manages host failure, instance addition, and removals from the cluster. It partitions a queue into several parts and each part gets a primary server.
External Cluster Manager: It manages the assignment of queues across clusters and knows about each cluster. However, it doesn’t have information on every host that’s present inside a cluster. It monitors the health of each independent cluster and may split a queue across several clusters.
Message Replication on the Host: It is used to replicate data in a primary-secondary model where the primary host is responsible for data replication. The internal cluster manager maintains the mapping between the primary host, secondary hosts, and queues and selects the primary host. In a cluster of independent hosts, the external cluster manager determines the corresponding cluster, and the message is then forwarded to a random host in the cluster.
Dead-Letter Queue: It is used to handle messages that can’t be processed, such as messages intended for a queue that doesn’t exist anymore, or messages whose queue length limit is exceeded, or messages that expire due to per-message time to live (TTL).
Message Deletion: A message is only deleted by the consumer, and it can be deleted after it’s consumed or made invisible for some time as visibility_timeout. This follows at-least-once delivery semantic, and when a worker fails to process the message.
Scalability: When there is an increase in the number of messages, the queue needs to be expanded, and when there is an increase in the number of queues, the server’s cluster manager adds extra servers.
Strict Ordering: It enforces the system to do extra work to enforce wall-clock or causality-based ordering.
In summary, a back-end service or queue is an essential component for the efficient and reliable exchange of messages between different applications or services. Its proper implementation ensures scalability, fault tolerance, and message delivery reliability.
  `,
  title: 'Distributed Messaging Queue #5: Back-End',
  questions: [
    {
      title: 'Internal Cluster Manager',
      options: [
        'It manages the assignment of queues across clusters.',
        'It knows about each cluster and monitors its health.',
        'It manages the assignment of queues within a cluster.',
        'It manages the replication of messages on the host.',
      ],
      answer: 'C',
      description:
        'The internal cluster manager is responsible for managing the assignment of queues within a cluster, maintaining information about each node, and monitoring the heartbeat of each node.',
    },
    {
      title: 'External Cluster Manager',
      options: [
        'Internal Cluster Manager',
        'External Cluster Manager',
        'Message Replication',
        'Dead-Letter Queue',
      ],
      answer: 'B',
      description:
        'The external cluster manager is responsible for determining the corresponding cluster in a cluster of independent hosts, managing the assignment of queues across clusters, and monitoring the health of each independent cluster.',
    },
    {
      title:
        'In the cluster of independent hosts model, which component is responsible for replicating messages in the other nodes?',
      options: [
        'The front-end server',
        'The cluster manager',
        'Any random host within the cluster',
        'None of the above',
      ],
      answer: 'c',
      description:
        'In the cluster of independent hosts model, a random host can receive the message responsible for replicating messages in other hosts in the respective queues.',
    },
    {
      title: 'What kind of messages do dead-letter queues contain?',
      options: [
        'The messages that have been consumed successfully.',
        'The messages that failed to be consumed and have reached the maximum attempts limit',
        'The messages that have been produced by a process that’s dead now',
        'None of the above',
      ],
      answer: 'b',
      description:
        'A dead letter cannot be delivered or returned because it lacks appropriate directions. Similarly, a queue named after the dead-letter contains those messages that have failed to be consumed after the maximum attempts limit.',
    },
    {
      title: 'Message Deletion',
      options: [
        'The message is deleted automatically after it’s consumed.',
        'The message is deleted by the producer after it’s produced.',
        'The message is only deleted by the consumer after it’s consumed.',
        'The message is deleted after it expires due to per-message time to live (TTL).',
      ],
      answer: 'C',
      description:
        'In a back-end service or queue, a message is only deleted by the consumer after it’s consumed.',
    },
    {
      title: 'Worker Failure',
      options: [
        'The message is deleted automatically.',
        'The message is put into a dead-letter queue.',
        'The message is sent back to the producer for re-processing.',
        'The message is made invisible for some time.',
      ],
      answer: 'D',
      description:
        'When a worker fails to process a message, the message is made invisible for some time to ensure at-least-once delivery semantic.',
    },
    {
      title: 'Benefits of Back-end Service or Queue',
      options: [
        'It ensures strict ordering of messages.',
        'It provides a reliable exchange of messages between different applications or services.',
        'It eliminates the need for a message replication mechanism.',
        'It ensures automatic deletion of messages after they’re consumed.',
      ],
      answer: 'B',
      description:
        'The primary benefit of using a back-end service or queue is to provide a reliable exchange of messages between different applications or services.',
    },
    {
      title: 'Handling an Increase in Messages',
      options: [
        'It expands the queue.',
        'It adds extra servers to the cluster.',
        'It splits the queue across several clusters.',
        'It deletes the oldest messages.',
      ],
      answer: 'A',
      description:
        'When there is an increase in the number of messages, a back-end service or queue expands the queue to accommodate more messages.',
    },
    {
      title: 'Internal and External Cluster Managers',
      options: [
        'The internal cluster manager knows about each cluster, while the external cluster manager knows about each node within a cluster.',
        'The external cluster manager knows about each cluster, while the internal cluster manager knows about each node within a cluster.',
        'Both internal and external cluster managers have the same responsibilities.',
        'The internal cluster manager manages the health of each independent cluster, while the external cluster manager manages the assignment of queues within a cluster.',
      ],
      answer: 'A',
      description:
        'The primary difference between the internal and external cluster managers is that the internal cluster manager knows about each cluster, while the external cluster manager knows about each node within a cluster.',
    },
    {
      title: 'Message Partitioning',
      options: [
        'To eliminate the need for message replication.',
        'To ensure strict ordering of messages.',
        'To distribute messages evenly between different servers.',
        'To delete messages automatically after they’re consumed.',
      ],
      answer: 'C',
      description:
        'The purpose of partitioning a queue in a back-end service or queue is to distribute messages evenly between different servers so that the workload is balanced.',
    },
    {
      title:
        'The purpose of replicating queues on multiple servers is to enhance the _________ of the system',
      options: ['security', 'consistency', 'availability', 'None of the above'],
      answer: 'c',
      description:
        'The purpose of replicating the queues and corresponding messages on multiple nodes is to increase the system’s availability. When one node is down, another stand-by server can serve the request.',
    },
    {
      title:
        'Which of the following is responsible for partitioning the queue and assigning a primary node to each partition?',
      options: [
        'The internal cluster manager',
        'The external cluster manager',
        'The primary node',
        'One of the secondary nodes',
      ],
      answer: 'a',
      description:
        'The internal cluster manager partitions a queue into multiple parts and assigns a primary node to each partition. In contrast, the external cluster manager assigns clusters to each queue partition',
    },
  ],
};
