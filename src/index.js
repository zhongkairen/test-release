#!/usr/bin/env node

class Main {
  constructor() {
    console.log("Main constructor");
  }

  async start() {
    console.log("Main start");
  }
}

const app = new Main();
await app.start();
