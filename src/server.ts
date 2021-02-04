import http from 'http';
import logging from './config/logging';
import app from './config/config';

const NAMESPACE = 'Server';

const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'http://localhost';
const SERVER_PORT = process.env.SERVER_PORT || 3000;

const httpServer = http.createServer(app);
httpServer.listen(SERVER_PORT, () => logging.info(NAMESPACE, `Server running on ${SERVER_HOSTNAME}:${SERVER_PORT}`));
