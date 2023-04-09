import { Quiz } from '../src/app/services/interfaces';

export const rpc: Quiz = {
  courseId: '1',
  courseTitle: 'System Design',
  id: '4',
  title: 'Remote Procedure Call (RPC)',
  questionsList: [
    {
      title:
        'What are the components involved in a Remote Procedure Call (RPC) system?',
      optionsList: ['Client', 'Server', 'RPC runtime', 'All of the above'],
      answer: 'd',
      description:
        'All of the above components are involved in a Remote Procedure Call (RPC) system.',
    },
    {
      title: 'What is the role of the client in an RPC system?',
      optionsList: [
        'Execute the remote procedure',
        'Receive the result of the remote procedure',
        'Initiate the remote procedure call',
        'None of the above',
      ],
      answer: 'c',
      description:
        'The client initiates the remote procedure call in an RPC system.',
    },
    {
      title: 'What is the role of the server in an RPC system?',
      optionsList: [
        'Execute the remote procedure',
        'Receive the request from the client',
        'Send the result back to the client',
        'All of the above',
      ],
      answer: 'd',
      description:
        'The server receives the request from the client, executes the remote procedure, and sends the result back to the client in an RPC system.',
    },
    {
      title: 'What does the RPC runtime return to the client and server?',
      optionsList: [
        'The result of the remote procedure',
        'An error message if the remote procedure fails',
        'A message indicating the success of the remote procedure call',
        'Both b and c',
      ],
      answer: 'd',
      description:
        'The RPC runtime returns both an error message if the remote procedure fails and a message indicating the success of the remote procedure call to the client and server.',
    },
    {
      title: 'What is a remote procedure call?',
      optionsList: [
        'A procedure executed on the same machine',
        'A procedure executed on a different machine',
        'A procedure executed on a virtual machine',
        'A procedure executed in a different programming language',
      ],
      answer: 'b',
      description:
        'A remote procedure call is a procedure executed on a different machine.',
    },
    {
      title: 'What are some benefits of using Remote Procedure Calls?',
      optionsList: [
        'Enables inter-process communication between different machines',
        'Reduces the complexity of distributed systems',
        'Allows for modular design of applications',
        'All of the above',
      ],
      answer: 'd',
      description:
        'All of the above are benefits of using Remote Procedure Calls, as they enable inter-process communication between different machines, reduce the complexity of distributed systems, and allow for modular design of applications.',
    },
    {
      title: 'What are some challenges in using Remote Procedure Calls?',
      optionsList: [
        'Network latency and failure',
        'Ensuring compatibility across different machines and platforms',
        'Security concerns',
        'All of the above',
      ],
      answer: 'd',
      description:
        'All of the above are challenges in using Remote Procedure Calls, as they involve network latency and failure, ensuring compatibility across different machines and platforms, and security concerns.',
    },
    {
      title: 'What is a common protocol used for Remote Procedure Calls?',
      optionsList: ['HTTP', 'FTP', 'TCP/IP', 'XML-RPC'],
      answer: 'a',
      description: 'HTTP is a common protocol used for Remote Procedure Calls.',
    },
    {
      title: 'What is the fourth step in the RPC process?',
      optionsList: ['Packing', 'Unpacking', 'Dispatching', 'Execution'],
      answer: 'd',
      description:
        'The execution step is where the server executes the remote procedure.',
    },
    {
      title:
        "Which step in the RPC process is critical for processing the client's request?",
      optionsList: ['Packing', 'Unpacking', 'Dispatching', 'Execution'],
      answer: 'd',
      description:
        "The execution step is critical for processing the client's request.",
    },
    {
      title: 'What is the purpose of a remote procedure call?',
      optionsList: [
        'To execute procedures on a remote server',
        'To execute procedures on a local client',
        'To execute procedures on a remote client',
        'To execute procedures on a local server',
      ],
      answer: 'a',
      description:
        'The purpose of a remote procedure call is to execute procedures on a remote server.',
    },
  ],
};
