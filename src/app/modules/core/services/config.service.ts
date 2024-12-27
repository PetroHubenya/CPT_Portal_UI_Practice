// The ConfigService is used to manage environment-specific configurations dynamically
// and provide a centralized way to access these configurations throughout the application.
// It serves as a flexible and reusable solution, especially when you need to load environment variables
// or settings at runtime, rather than at build time.

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private config: any;

  constructor() { }

  async loadConfig() {
    const response = await fetch('/assets/environments/environment.dev.json');
    this.config = await response.json();
  }

  get(key: string): any {
    return this.config[key];
  }
}
