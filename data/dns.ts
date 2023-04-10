import { Quiz } from '../src/app/services/interfaces';

export const dns: Quiz = {
  courseId: '1',
  courseTitle: 'System Design',
  summary:
    "The Domain Name System (DNS) is a hierarchical naming system used to translate domain names into IP addresses and vice versa. DNS caching is used at different layers to reduce latency and minimize the burden on the DNS infrastructure. DNS name servers are organized in a hierarchical form, with the root-level name servers at the top and the authoritative name servers at the bottom. DNS is reliable due to caching working even when the system is down and server replication, which improves the system's reliability. Tools like nslookup and dig can be used to troubleshoot DNS issues.",
  id: '11',
  title: 'Domain Name System',
  questionsList: [
    {
      title: 'What is the Domain Name System (DNS)?',
      optionsList: [
        'A hierarchical naming system used to translate domain names into IP addresses and vice versa.',
        'A messaging protocol used for transferring data over the internet.',
        'A programming language used for web development.',
        'A file system used for storing and retrieving data.',
      ],
      answer: 'A',
      description:
        'The DNS is a hierarchical naming system used to translate domain names into IP addresses and vice versa.',
    },
    {
      title: 'What is the purpose of DNS name servers?',
      optionsList: [
        'To manage and maintain the DNS records for a given domain.',
        'To provide security for internet communications.',
        'To host websites and web applications.',
        'To monitor network traffic.',
      ],
      answer: 'A',
      description:
        'DNS name servers are responsible for managing and maintaining the DNS records for a given domain.',
    },
    {
      title: 'What are resource records (RR)?',
      optionsList: [
        'Fundamental building blocks of the DNS containing information about a domain name.',
        'Protocol used for secure communication over the internet.',
        'Programming language used for developing web applications.',
        'Software used for managing DNS servers.',
      ],
      answer: 'A',
      description:
        'Resource records (RR) are the fundamental building blocks of the DNS and contain information about a domain name.',
    },
    {
      title: 'What is DNS caching?',
      optionsList: [
        'A feature used to reduce response time, decrease traffic, and reduce the query burden on the DNS infrastructure.',
        'A security protocol used to protect against network attacks.',
        'A software tool used for monitoring network traffic.',
        'A programming language used for web development.',
      ],
      answer: 'A',
      description:
        'DNS caching is a feature used to reduce response time, decrease traffic, and reduce the query burden on the DNS infrastructure.',
    },
    {
      title: 'What is the hierarchical structure of DNS name servers?',
      optionsList: [
        'Root-level name servers at the top and authoritative name servers at the bottom.',
        'Recursive name servers at the top and iterative name servers at the bottom.',
        'Local name servers at the top and ISP resolvers at the bottom.',
        'Top-level domain (TLD) name servers at the top and root-level name servers at the bottom.',
      ],
      answer: 'A',
      description:
        'DNS name servers are organized in a hierarchical form, with the root-level name servers at the top and the authoritative name servers at the bottom.',
    },
    {
      title: 'What is the purpose of DNS?',
      optionsList: [
        'To translate IP addresses into domain names',
        'To translate domain names into IP addresses',
        'To provide secure communication between servers',
        'To prevent network congestion',
      ],
      answer: 'b',
      description:
        'DNS is a hierarchical naming system used to translate domain names into IP addresses and vice versa, enabling users to access websites and services by using domain names instead of IP addresses.',
    },
    {
      title: 'What are the different types of DNS name servers?',
      optionsList: [
        'Primary and secondary name servers',
        'Authoritative and recursive name servers',
        'Internal and external name servers',
        'Master and slave name servers',
      ],
      answer: 'b',
      description:
        'DNS name servers are responsible for managing and maintaining the DNS records for a given domain. There are different types of name servers, including authoritative name servers and recursive name servers, that work together to provide efficient and reliable DNS resolution.',
    },
    {
      title: 'What is a resource record (RR)?',
      optionsList: [
        'A record that maps a domain name to an IP address',
        'A record that maps an IP address to a domain name',
        'A record that provides information about a domain name, such as its canonical name, mail server, and more',
        'A record that provides information about the DNS infrastructure',
      ],
      answer: 'c',
      description:
        'Resource records (RR) are the fundamental building blocks of the DNS and contain information about a domain name, including its IP address, canonical name, mail server, and more.',
    },
    {
      title: 'What is the purpose of DNS caching?',
      optionsList: [
        'To increase response time and decrease traffic',
        'To decrease response time and increase traffic',
        'To increase response time and increase traffic',
        'To decrease response time and decrease traffic',
      ],
      answer: 'a',
      description:
        'DNS caching is used at different layers to reduce latency and minimize the burden on the DNS infrastructure. Caching can occur at the browser, operating system, local name server, and ISP resolver level, among others.',
    },
    {
      title: 'How are DNS name servers organized?',
      optionsList: [
        'With authoritative name servers at the top and root-level name servers at the bottom',
        'With recursive name servers at the top and root-level name servers at the bottom',
        'With root-level name servers at the top and TLD name servers at the bottom',
        'With TLD name servers at the top and root-level name servers at the bottom',
      ],
      answer: 'c',
      description:
        'DNS name servers are organized in a hierarchical form, with the root-level name servers at the top and the TLD name servers at the bottom.',
    },
    {
      title: 'What protocol is used in DNS?',
      optionsList: [
        'Transmission Control Protocol (TCP)',
        'User Datagram Protocol (UDP)',
        'Hypertext Transfer Protocol (HTTP)',
        'Simple Mail Transfer Protocol (SMTP)',
      ],
      answer: 'b',
      description:
        'The protocol used in DNS is the unreliable User Datagram Protocol (UDP), which is much faster than the Transmission Control Protocol (TCP).',
    },
    {
      title: 'What is the purpose of server replication in DNS?',
      optionsList: [
        'To improve the performance and speed of DNS resolution',
        'To improve the reliability and availability of the DNS infrastructure',
        'To prevent DNS cache poisoning and DNS spoofing attacks',
        'To provide digital signatures and ensure data authenticity and integrity',
      ],
      answer: 'b',
      description:
        'Server replication in DNS is used to improve the reliability and availability of the DNS infrastructure. By replicating DNS servers, the system can continue to function even if one server is down or overburdened.',
    },
    {
      title:
        'What is the maximum amount of time it can take for updates to propagate in DNS?',
      optionsList: ['120 seconds', '300 seconds', '3 days', '1 week'],
      answer: 'c',
      description:
        'Updates in DNS can take seconds up to three days to propagate, which can result in inconsistencies in cached data. To mitigate this, DNS uses an expiration time called time-to-live (TTL), which specifies how long a DNS record can be cached.',
    },
    {
      title: 'Which of the following protocols is used by DNS?',
      optionsList: ['TCP', 'UDP', 'HTTP', 'SMTP'],
      answer: 'b',
      description:
        'DNS uses the unreliable user datagram protocol (UDP) for faster performance. Unlike TCP, which requires a three-way handshake for every packet, UDP does not establish a reliable connection and does not provide error checking.',
    },
    {
      title: 'Which tools can be used to troubleshoot DNS issues?',
      optionsList: [
        'nslookup, dig, traceroute, and monitoring DNS logs',
        'Ping, netstat, nslookup, and monitoring network traffic',
        'Wireshark, tcpdump, nslookup, and monitoring server logs',
        'Ping, traceroute, dig, and monitoring DNS traffic',
      ],
      answer: 'a',
      description:
        'Tools like nslookup, dig, traceroute, and monitoring DNS logs can be used to troubleshoot DNS issues. Non-authoritative answers in nslookup are cached versions of IP addresses, which can be different due to load balancing. TTL refers to the time it takes to cache an IP address, and it usually takes 300 seconds or five minutes.',
    },
    {
      title:
        'What is the purpose of DNS over HTTPS (DoH) and DNS over TLS (DoT)?',
      optionsList: [
        'To improve DNS security and privacy by encrypting DNS queries and responses',
        'To increase the speed and performance of DNS resolution',
        'To prevent DNS cache poisoning and DNS amplification attacks',
        'To provide digital signatures and ensure data authenticity and integrity',
      ],
      answer: 'a',
      description:
        'DNS over HTTPS (DoH) and DNS over TLS (DoT) are protocols used to improve DNS security and privacy by encrypting DNS queries and responses. This helps to prevent eavesdropping and man-in-the-middle attacks on DNS traffic.',
    },
    {
      title: "What is the 'chicken and egg problem' in DNS resolution?",
      optionsList: [
        "The problem of how to keep basic DNS resolvers' IP addresses",
        'The problem of how to prevent DNS cache poisoning',
        'The problem of how to prevent DNS amplification attacks',
        'The problem of how to improve DNS performance',
      ],
      answer: 'a',
      description:
        "The 'chicken and egg problem' in DNS resolution refers to the problem of how to keep basic DNS resolvers' IP addresses, which are necessary for DNS resolution. This can be addressed by using DHCP or static IP addresses.",
    },

    {
      title: 'What is DNS used for?',
      optionsList: [
        'Translating domain names to IP addresses',
        'Translating IP addresses to domain names',
        'Translating MAC addresses to IP addresses',
        'Translating IP addresses to MAC addresses',
      ],
      answer: 'a',
      description:
        'DNS is used to translate domain names to IP addresses and vice versa.',
    },
    {
      title: 'What is an authoritative name server?',
      optionsList: [
        'A DNS server that maintains DNS records for a given domain',
        'A DNS server that resolves DNS queries by recursively querying other name servers',
        'A DNS server that is responsible for the root-level domain',
        'A DNS server that is used for DNS caching',
      ],
      answer: 'a',
      description:
        'An authoritative name server is a DNS server that maintains DNS records for a given domain.',
    },

    {
      title: 'What is DNSSEC?',
      optionsList: [
        'A protocol used to provide digital signatures and ensure data authenticity and integrity',
        'A protocol used to encrypt DNS queries and responses',
        'A protocol used to prevent DNS spoofing attacks',
        'A protocol used to mitigate DNS amplification attacks',
      ],
      answer: 'a',
      description:
        'DNSSEC (DNS Security Extensions) is a protocol used to provide digital signatures and ensure data authenticity and integrity in DNS.',
    },
    {
      title: 'What are the common DNS issues?',
      optionsList: [
        'Slow response times, incorrect DNS records, and network connectivity problems',
        'Slow response times, incorrect IP addresses, and server downtime',
        'Slow response times, DNS spoofing, and DNS amplification attacks',
        'Slow response times, DNSSEC errors, and invalid digital signatures',
      ],
      answer: 'a',
      description:
        'Common DNS issues include slow response times, incorrect DNS records, and network connectivity problems.',
    },

    {
      title: 'How does DNS achieve eventual consistency?',
      optionsList: [
        'By replicating data across all name servers',
        'By updating all name servers simultaneously',
        'By lazily updating replicated servers',
        'By using a single global database for all name servers',
      ],
      answer: 'c',
      description:
        'DNS achieves eventual consistency by lazily updating replicated servers, meaning that updates are not propagated immediately to all name servers, but rather gradually over time.',
    },
    {
      title: 'What is the protocol used in DNS?',
      optionsList: [
        'Transmission Control Protocol (TCP)',
        'User Datagram Protocol (UDP)',
        'File Transfer Protocol (FTP)',
        'Simple Mail Transfer Protocol (SMTP)',
      ],
      answer: 'b',
      description:
        'DNS uses the User Datagram Protocol (UDP) for DNS queries and responses, as it is a lightweight and fast transport protocol that is well-suited for small data transfers over the network.',
    },
    {
      title: 'What is the purpose of TTL in DNS?',
      optionsList: [
        'To ensure data authenticity and integrity',
        'To mitigate DNS security threats',
        'To reduce the query burden on the DNS infrastructure',
        'To specify how long a DNS record can be cached',
      ],
      answer: 'd',
      description:
        'TTL (Time to Live) is used in DNS to specify how long a DNS record can be cached by a client or server, thus reducing the need to query the authoritative name servers frequently and reducing the load on the DNS infrastructure.',
    },
    {
      title: 'What is the "chicken and egg problem" in DNS resolution?',
      optionsList: [
        'The problem of how to keep basic DNS resolvers IP addresses',
        'The problem of how to prevent DNS cache poisoning',
        'The problem of how to prevent DNS amplification attacks',
        'The problem of how to improve DNS performance',
      ],

      answer: 'a',
      description:
        'The "chicken and egg problem" in DNS resolution refers to the challenge of how to resolve domain names when the client does not have the IP address of the DNS resolver, and the resolver does not have the IP address of the client. This can make it difficult to establish a connection between the client and the DNS resolver, especially in cases where the client needs to resolve the domain name of the resolver itself.',
    },

    {
      title: 'Which tools can be used to troubleshoot DNS issues?',
      optionsList: [
        'nslookup, dig, traceroute, and monitoring DNS logs',
        'Ping, netstat, nslookup, and monitoring network traffic',
        'Wireshark, tcpdump, nslookup, and monitoring server logs',
        'Ping, traceroute, dig, and monitoring DNS traffic',
      ],
      answer: 'd',
      description:
        'Tools such as Ping, traceroute, dig, and monitoring DNS traffic can be used to troubleshoot DNS issues by testing connectivity, resolving domain names, and identifying potential network or server problems. These tools can help diagnose DNS issues such as slow response times, incorrect DNS records, and other issues that can affect DNS performance and reliability.',
    },

    {
      title: 'What is DNS hierarchy?',
      optionsList: [
        'A protocol for translating IP addresses into domain names',
        'A distributed system for translating domain names into IP addresses',
        'A protocol for encrypting DNS queries',
        'A centralized system for managing domain names',
      ],
      answer: 'b',
      description:
        'DNS hierarchy is a distributed system used to translate human-readable domain names into IP addresses.',
    },
    {
      title: 'What are root-level name servers?',
      optionsList: [
        'DNS resolvers that initiate the querying sequence',
        'Servers that store IP addresses for top-level domains',
        'Servers that provide authoritative information for a specific domain',
        'Servers that provide information about the root-level domain',
      ],
      answer: 'd',
      description:
        'Root-level name servers provide information about the root-level domain and are the next servers after local DNS resolvers.',
    },
    {
      title: 'What is the purpose of caching in DNS?',
      optionsList: [
        'To reduce response time',
        'To decrease traffic',
        'To reduce query burden on servers',
        'All of the above',
      ],
      answer: 'd',
      description:
        'Caching is implemented to reduce response time, decrease traffic, and reduce query burden on servers.',
    },
    {
      title:
        'What is the difference between iterative and recursive query resolution?',
      optionsList: [
        'Iterative resolution is faster than recursive resolution',
        'Recursive resolution is more common than iterative resolution',
        'Iterative resolution requests information from each level in turn',
        'Recursive resolution requests information in a chain of requests',
      ],
      answer: 'd',
      description:
        'Iterative resolution requests information from each level in turn, while recursive resolution requests information in a chain of requests.',
    },
    {
      title: 'What is the purpose of DNS resolvers?',
      optionsList: [
        'To initiate the querying sequence and forward requests to other DNS servers',
        'To provide authoritative information about a specific domain',
        'To store IP addresses for top-level domains',
        'To provide information about the root-level domain',
      ],
      answer: 'a',
      description:
        'DNS resolvers initiate the querying sequence and forward requests to other DNS servers, starting with root-level name servers.',
    },
    {
      title: 'What is the purpose of top-level domain (TLD) name servers?',
      optionsList: [
        'To provide authoritative information about a specific domain',
        'To store IP addresses for root-level domains',
        'To store IP addresses for top-level domains',
        'To provide information about the root-level domain',
      ],
      answer: 'c',
      description:
        'TLD name servers store IP addresses for top-level domains and provide the IP addresses of authoritative name servers for each domain.',
    },
    {
      title: 'What is the purpose of authoritative name servers?',
      optionsList: [
        'To initiate the querying sequence and forward requests to other DNS servers',
        'To store IP addresses for top-level domains',
        'To provide authoritative information about a specific domain',
        'To provide information about the root-level domain',
      ],
      answer: 'c',
      description:
        'Authoritative name servers provide authoritative information about a specific domain, such as the IP addresses of web or application servers.',
    },
    {
      title: 'What is the purpose of the DNS tree structure?',
      optionsList: [
        'To reduce response time',
        'To improve the scalability of the DNS infrastructure',
        'To ensure consistency of DNS queries',
        'To store IP addresses for root-level domains',
      ],
      answer: 'b',
      description:
        'The DNS tree structure enables scalability by dividing the DNS infrastructure into different services that handle different portions of the tree.',
    },
    {
      title: 'What is the difference between UDP and TCP in DNS?',
      optionsList: [
        'UDP is more reliable than TCP',
        'UDP is much slower than TCP',
        'UDP needs a three-way handshake, while TCP needs just one round trip',
        'UDP is not used in DNS, only TCP is used',
      ],
      answer: 'c',
      description:
        'UDP needs just one round trip, while TCP needs a three-way handshake, making UDP faster for DNS queries.',
    },
    {
      title: 'What is the purpose of DNS as a distributed system?',
      optionsList: [
        'To provide a centralized system for managing domain names',
        'To ensure that DNS queries are resolved using the correct IP address',
        'To reduce response time for DNS queries',
        'To improve the reliability and scalability of DNS',
      ],
      answer: 'd',
      description:
        'DNS is a distributed system that improves the reliability and scalability of DNS, by distributing the workload across multiple servers.',
    },
    {
      title:
        'What is the difference between iterative and recursive query resolution?',
      optionsList: [
        'Iterative resolution is faster than recursive resolution',
        'Recursive resolution is more common than iterative resolution',
        'Iterative resolution requests information from each level in turn',
        'Recursive resolution requests information in a chain of requests',
      ],
      answer: 'd',
      description:
        'Iterative resolution requests information from each level in turn, while recursive resolution requests information in a chain of requests.',
    },
    {
      title: 'What is the purpose of caching in DNS?',
      optionsList: [
        'To reduce response time for DNS queries',
        'To decrease traffic on the DNS infrastructure',
        'To reduce query burden on DNS servers',
        'All of the above',
      ],
      answer: 'd',
      description:
        'Caching is implemented to reduce response time, decrease traffic, and reduce query burden on DNS servers.',
    },
    {
      title: 'What is the purpose of TTL in DNS caching?',
      optionsList: [
        'To ensure that DNS queries are resolved using the correct IP address',
        'To reduce downtime in case of server failure',
        'To improve the scalability of the DNS infrastructure',
        'To mitigate consistency issues caused by caching',
      ],
      answer: 'd',
      description:
        'TTL is used to mitigate consistency issues caused by caching, by expiring cached information after a set time.',
    },
    {
      title: 'What is the purpose of redundancy in DNS servers?',
      optionsList: [
        'To reduce response time for DNS queries',
        'To increase query capacity of DNS servers',
        'To improve the scalability of the DNS infrastructure',
        'To improve the reliability of the DNS infrastructure',
      ],
      answer: 'd',
      description:
        'Redundant DNS servers improve the reliability of the DNS infrastructure, by providing backup servers in case of failure or overload.',
    },
  ],
};
