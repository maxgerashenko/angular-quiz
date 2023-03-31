export const messageQQuiz4 = {
  summary: `Metadata service:

It stores metadata of queues and acts as a middleware between the front-end servers and the data layer.
Metadata of the queues is kept in cache, and if there's a cache miss, it will be retrieved from the metadata store.
Different approaches can be used, depending on the size and complexity of metadata.
When dealing with small data and a single machine, metadata cache clusters can be replicated on each cluster server, and a load balancer can be introduced to handle requests from many servers.
When dealing with large data, the sharding approach can be used to divide data into different shards based on partition key or hashing techniques. Each shard is also replicated on different hosts to enhance availability.
When dealing with large and read-intensive data, the same approach can be used but with a mapping table on each shard to redirect messages to the proper shard.`,
  title: 'Distributed Messaging Queue Quiz #4: Metadata service',
  questions: [
    {
      question: 'What is the purpose of the Metadata service?',
      options: [
        'To store user data',
        'To store metadata of queues',
        'To act as a backend server',
        'To provide authentication services',
      ],
      answer: 'b',
      description:
        'The primary purpose of the Metadata service is to store and manage the metadata of queues, which helps in organizing and retrieving information about the queues.',
    },
    {
      question:
        'What is the function of metadata cache in the Metadata service?',
      options: [
        'To store user data',
        'To store metadata of queues',
        'To act as a middleware',
        'To provide authentication services',
      ],
      answer: 'b',
      description:
        'The function of the metadata cache in the Metadata service is to store metadata of queues, which improves performance by reducing the need to fetch data from the metadata store.',
    },
    {
      question: "What happens if there's a cache miss in the Metadata service?",
      options: [
        'The metadata is discarded',
        'The metadata is retrieved from the metadata store',
        'The metadata is recreated',
        'The metadata is stored in a different cache',
      ],
      answer: 'b',
      description:
        "In case of a cache miss in the Metadata service, the metadata is retrieved from the metadata store, ensuring that the requested information is still available even if it's not present in the cache.",
    },
    {
      question:
        'What approach is used when dealing with small data and a single machine in the Metadata service?',
      options: [
        'Sharding approach',
        'Caching approach',
        'Replication approach',
        'Load balancing approach',
      ],
      answer: 'c',
      description:
        'When dealing with small data and a single machine in the Metadata service, a replication approach is used. This involves creating multiple copies of the data to ensure high availability and fault tolerance.',
    },
    {
      question:
        'What approach is used when dealing with large data in the Metadata service?',
      options: [
        'Sharding approach',
        'Caching approach',
        'Replication approach',
        'Load balancing approach',
      ],
      answer: 'a',
      description:
        'When dealing with large data in the Metadata service, a sharding approach is used. This involves dividing data into smaller, more manageable pieces called shards, which can be stored and processed separately.',
    },
    {
      question:
        'What is the purpose of partition key in the sharding approach of Metadata service?',
      options: [
        'To divide data into different shards',
        'To store metadata of queues',
        'To act as a middleware',
        'To handle requests from many servers',
      ],
      answer: 'a',
      description:
        'The purpose of the partition key in the sharding approach of the Metadata service is to divide data into different shards. The partition key determines how data is distributed across the shards, which helps to maintain an even distribution of data.',
    },
    {
      question:
        'What approach is used when dealing with large and read-intensive data in the Metadata service?',
      options: [
        'Sharding approach',
        'Caching approach',
        'Replication approach',
        'Load balancing approach',
      ],
      answer: 'a',
      description:
        'When dealing with large and read-intensive data in the Metadata service, a sharding approach is used. This approach allows for efficient storage and retrieval of large amounts of data by distributing it across multiple shards, which can be queried in parallel.',
    },
    {
      question:
        'What is the purpose of mapping table in the sharding approach of Metadata service?',
      options: [
        'To divide data into different shards',
        'To store metadata of queues',
        'To redirect messages to the proper shard',
        'To handle requests from many servers',
      ],
      answer: 'c',
      description:
        'The purpose of the mapping table in the sharding approach of the Metadata service is to redirect messages to the proper shard. The mapping table stores information about the relationship between partition keys and the shards that contain the corresponding data, enabling efficient routing of requests.',
    },
  ],
};
