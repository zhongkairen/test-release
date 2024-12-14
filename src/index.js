#!/usr/bin/env node

class Main {
  constructor() {
    console.log("Main constructor");
  }

  start() {
    // Start the main application
    console.log("Main start");
  }
}

const app = new Main();
app.start();
