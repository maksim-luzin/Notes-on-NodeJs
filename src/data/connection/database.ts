import { Database } from 'sqlite3';

const database = new Database('./data');

type TDatabase = typeof database;

export { database };

export type {TDatabase};
