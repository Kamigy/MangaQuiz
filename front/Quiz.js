import React, { useEffect, useState } from 'react';
import socketIOClient from 'socket.io-client';

const ENDPOINT = 'http://localhost:4001';

function Quiz() {
  const [response, setResponse] = useState('');

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on('connect', () => {
      console.log('Connected to server');
    });
    return () => {
      socket.disconnect();
      console.log('Disconnected from server');
    };
  }, []);

  return (
    <div>
      <p>
        Quiz goes here!
      </p>
    </div>
  );
}

export default Quiz;
