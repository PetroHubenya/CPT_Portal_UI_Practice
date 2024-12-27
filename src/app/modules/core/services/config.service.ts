import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';

// Define a type for the environment object
type EnvironmentType = typeof environment;

@Injectable({
  providedIn: 'root'
})

// The ConfigService provides a convenient way to access environment-specific configurations
export class ConfigService {
  private config: EnvironmentType = environment;

  // Explicitly handle key access with string indexing
  get<T extends keyof EnvironmentType>(key: T): EnvironmentType[T] {
    return this.config[key];
  }
}