import fs from 'node:fs/promises';

async function run() {
    const timestamp = new Date().toISOString();
    const message = `Hello, world! It's ${timestamp}\n`;

    console.log(message.trim());

    try {
      await fs.appendFile('output.log', message);
      console.log('Message logged to output.log');
    } catch (err) {
      console.error('Error writing to log file:', err);
    }
}

run();