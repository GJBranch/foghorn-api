import { Server } from './src/startup/server';

let start = async () => {
    try {
        let server = new Server();
    } catch (ex) {
        process.exit(1);
    }
}

start();