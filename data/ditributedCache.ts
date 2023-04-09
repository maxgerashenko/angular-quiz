import { Quiz } from '../src/app/services/interfaces';

export const distributedQueue: Quiz = {
  courseId: '1',
  courseTitle: 'System Design',
  id: '2',
  title: 'Distributed Cache',
  questionsList: [
    {
      title: 'What is pipelining?',
      optionsList: [
        'A way to store multiple values under a single key in a cache',
        'A way to store data in secondary storage',
        'A technique to reduce round-trip time in a distributed system',
        'A way to replicate data across multiple nodes in a distributed system',
      ],
      answer: 'c',
      description:
        'Pipelining is a technique to reduce round-trip time in a distributed system.',
    },
    {
      title: 'What are the benefits of using a distributed cache?',
      optionsList: [
        'Minimizes network costs',
        'Reduces user-perceived latency',
        'Pre-generates expensive queries',
        'All of the above',
      ],
      answer: 'd',
      description:
        'A distributed cache helps minimize user-perceived latency, pre-generate expensive queries, serve data when the store is down, and reduce network costs.',
    },
    {
      title: 'What are the design considerations for a distributed cache?',
      optionsList: [
        'Writing policies',
        'Eviction policies',
        'Storage mechanisms',
        'All of the above',
      ],
      answer: 'd',
      description:
        "The cache's design includes writing policies, eviction policies, and storage mechanisms.",
    },
    {
      title: 'What is the recommended policy for cache invalidation?',
      optionsList: [
        'Delete API',
        'Time-to-live (TTL)',
        'Both a and b',
        'None of the above',
      ],
      answer: 'b',
      description:
        'Cache invalidation can be done using a time-to-live (TTL) policy.',
    },
    {
      title: 'What are the factors to consider in the design of a cache?',
      optionsList: [
        'Scalability',
        'High availability',
        'Consistency',
        'Affordability',
        'All of the above',
      ],
      answer: 'e',
      description:
        'The design of the cache should consider scalability, high availability, consistency, and affordability.',
    },
    {
      title: 'What are the differences between Facebook/Memcached and Redis?',
      optionsList: [
        'Redis supports pipelining and Lua scripting',
        'Redis has built-in automated replication',
        'Facebook/Memcached are simple and fast key-value stores',
        'All of the above',
      ],
      answer: 'd',
      description:
        'Facebook and Memcached are simple and fast key-value stores used between the web layer and the database, while Redis is a data structure store that understands different data structures and can persist all in-memory blobs on secondary storage.',
    },
    {
      title: 'What are the different features supported by Redis?',
      optionsList: [
        'Multithreading',
        'Replication',
        'Sharding',
        'Transaction support',
        'Eviction policy',
        'All of the above',
      ],
      answer: 'f',
      description:
        'Redis provides built-in automated replication and different levels of persistence, and supports pipelining, Lua scripting, geospatial support, and multiple data structures.',
    },
    {
      title: 'What is the recommended policy for eviction in a cache?',
      optionsList: [
        'Least recently used (LRU)',
        'Most recently used (MRU)',
        'Least frequently used (LFU)',
        'Most frequently used (MFU)',
        'All of the above',
      ],
      answer: 'a',
      description:
        'The recommended policy for eviction in a cache is least recently used (LRU).',
    },
    {
      title: 'What is sharding?',
      optionsList: [
        'A way to encrypt data in a cache',
        'A technique to store data in secondary storage',
        'A technique to replicate data across multiple nodes in a distributed system',
      ],
      answer: 'c',
      description:
        'Sharding is a technique to partition data across multiple nodes in a distributed system.',
    },

    {
      title: 'What is consistency in a cache?',
      optionsList: [
        'Ensuring that data is available at all times',
        'Ensuring that data is not stale or outdated',
        'Ensuring that data is distributed evenly across nodes',
        'Ensuring that data is encrypted at rest',
      ],
      answer: 'b',
      description:
        'Consistency in a cache refers to ensuring that data is not stale or outdated.',
    },
    {
      title:
        'What is the difference between a write-through and write-back cache?',
      optionsList: [
        'Write-through cache and storage sync, while write-back cache to the cache first and async to storage',
        'Write-through cache writes data to the primary storage and the cache simultaneously, while write-back cache writes data to the cache first and later updates the primary storage',
        'Write-through cache writes data to the cache only, while write-back cache writes data to both the primary storage and the cache',
        'Write-through cache writes data to the primary storage only, while write-back cache writes data to both the primary storage and the cache',
      ],
      answer: 'a',
      description:
        'In a write-through cache, data is written to both the cache and primary storage simultaneously, while in a write-back cache, data is written to the cache first and later updated in primary storage.',
    },
    {
      title: 'What is the difference between a cache and a database?',
      optionsList: [
        'A cache stores frequently used data, while a database stores all data',
        'A cache stores data temporarily, while a database stores data permanently',
        'A cache is usually faster than a database, while a database is more reliable than a cache',
        'All of the above',
      ],
      answer: 'd',
      description: 'A cache stores frequently used data temporarily',
    },
    {
      title:
        'Which caching approach is typically recommended for non-critical data where performance is a priority?',
      optionsList: [
        'Write-through caching',
        'Write-behind caching',
        'Batch updates',
        'Event-based invalidation',
      ],
      answer: 'b',
      description:
        'Write-behind caching is typically recommended for non-critical data where performance is a priority.',
    },
    {
      title: 'What is cache invalidation?',
      optionsList: [
        'The process of writing data to both the cache and the backend data store',
        'The process of asynchronously writing data to the backend data store',
        'The process of removing data from the cache after a set period of time',
        'The process of removing data from the cache in response to specific events or changes in the data store',
      ],
      answer: 'c',
      description:
        'Cache invalidation is the process of removing data from the cache in response to specific events or changes in the data store.',
    },
    {
      title: 'Which factor determines the granularity of the cache?',
      optionsList: [
        'The size of the data being cached',
        'The performance requirements of the application',
        'The consistency requirements of the data',
        'The cache implementation being used',
      ],
      answer: 'a',
      description:
        'The size of the data being cached determines the granularity of the cache.',
    },
    {
      title:
        'What is the recommended approach for cache writing if data consistency is critical?',
      optionsList: [
        'Write-through caching',
        'Write-behind caching',
        'Batch updates',
        'Event-based invalidation',
      ],
      answer: 'a',
      description:
        'Write-through caching is recommended for critical data that requires high consistency and availability.',
    },
    {
      title:
        'Which caching approach provides faster performance for writes to the cache?',
      optionsList: [
        'Write-through caching',
        'Write-behind caching',
        'Batch updates',
        'Time-based invalidation',
      ],
      answer: 'b',
      description:
        'Write-behind caching provides faster performance for writes to the cache.',
    },
    {
      title:
        'Which caching approach may result in lower performance due to a higher number of cache entries?',
      optionsList: [
        'Fine-grained caching',
        'Coarse-grained caching',
        'Write-behind caching',
        'Time-based invalidation',
      ],
      answer: 'a',
      description:
        'Fine-grained caching may result in lower performance due to a higher number of cache entries.',
    },
    {
      title:
        'What is the recommended approach for cache writing if performance is a priority?',
      optionsList: [
        'Write-through caching',
        'Write-behind caching',
        'Batch updates',
        'Time-based invalidation',
      ],
      answer: 'b',
      description:
        'Write-behind caching is typically recommended for non-critical data where performance is a priority.',
    },
    {
      title:
        'Which caching approach can provide redundancy and high availability in case of node failures?',
      optionsList: [
        'Write-through caching',
        'Write-behind caching',
        'Batch updates',
        'Replication',
      ],
      answer: 'd',
      description:
        'Replication can provide redundancy and high availability in case of node failures.',
    },
  ],
};
