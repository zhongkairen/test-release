#!/usr/bin/env node

class Main {
  constructor() {
    console.log("Main constructor");
  }

  start() {
    console.log("Main start");
  }
}

const app = new Main();
app.start();
