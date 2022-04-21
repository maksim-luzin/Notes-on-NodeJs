import { config } from 'dotenv';
import { env } from 'process';

config();

const getPort = () => env.PORT || 3000;

export { getPort };
