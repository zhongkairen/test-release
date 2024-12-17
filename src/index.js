#!/usr/bin/env node

class Main {
  constructor() {
    console.log("Main constructor");
  }

  async start() {
    // Start the main application
    console.log("Main start");
  }
}

const app = new Main();
await app.start();
