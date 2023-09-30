import { io, Socket } from 'socket.io-client';

const clientSocket: Socket = io('http://localhost:4000');
export default clientSocket;
