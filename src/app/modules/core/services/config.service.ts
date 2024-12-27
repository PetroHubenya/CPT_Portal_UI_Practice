// The ConfigService is used to manage environment-specific configurations dynamically
// and provide a centralized way to access these configurations throughout the application.
// It serves as a flexible and reusable solution, especially when you need to load environment variables
// or settings at runtime, rather than at build time.

import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';

// Define a type for the environment object
type EnvironmentType = typeof environment;

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private config: EnvironmentType = environment;

  constructor() {}

  // Explicitly handle key access with string indexing
  get<T extends keyof EnvironmentType>(key: T): EnvironmentType[T] {
    return this.config[key];
  }
}