export const rpcQuiz = {
  title: 'Remote Procedure Calls Quiz',
  questions: [
    {
      text: 'What are the components involved in a Remote Procedure Call (RPC) system?',
      options: ['Client', 'Server', 'RPC runtime', 'All of the above'],
      answer: 'd',
    },
    {
      text: 'What is the role of the client in an RPC system?',
      options: [
        'Execute the remote procedure',
        'Receive the result of the remote procedure',
        'Initiate the remote procedure call',
        'None of the above',
      ],
      answer: 'c',
    },
    {
      text: 'What is the role of the server in an RPC system?',
      options: [
        'Execute the remote procedure',
        'Receive the request from the client',
        'Send the result back to the client',
        'All of the above',
      ],
      answer: 'd',
    },
    {
      text: 'What does the RPC runtime return to the client and server?',
      options: [
        'The result of the remote procedure',
        'An error message if the remote procedure fails',
        'A message indicating the success of the remote procedure call',
        'Both b and c',
      ],
      answer: 'd',
    },
    {
      text: 'What is a remote procedure call?',
      options: [
        'A procedure executed on the same machine',
        'A procedure executed on a different machine',
        'A procedure executed on a virtual machine',
        'A procedure executed in a different programming language',
      ],
      answer: 'b',
    },
    {
      text: 'What are some benefits of using Remote Procedure Calls?',
      options: [
        'Enables inter-process communication between different machines',
        'Reduces the complexity of distributed systems',
        'Allows for modular design of applications',
        'All of the above',
      ],
      answer: 'd',
    },
    {
      text: 'What are some challenges in using Remote Procedure Calls?',
      options: [
        'Network latency and failure',
        'Ensuring compatibility across different machines and platforms',
        'Security concerns',
        'All of the above',
      ],
      answer: 'd',
    },
    {
      text: 'What is a common protocol used for Remote Procedure Calls?',
      options: ['HTTP', 'FTP', 'TCP/IP', 'XML-RPC'],
      answer: 'a',
    },
    {
      text: 'In which step does the client initiate the remote procedure call?',
      options: ['Binding', 'Marshalling', 'Sending', 'Receiving'],
      answer: 'c',
    },
    {
      text: 'In which step does the server execute the remote procedure?',
      options: ['Binding', 'Marshalling', 'Unmarshalling', 'Invocation'],
      answer: 'd',
    },
  ],
};
