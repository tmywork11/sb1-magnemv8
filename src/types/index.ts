// Base Types
export interface BaseResponse {
  success: boolean;
  message?: string;
}

// Re-export all types
export * from './news';
export * from './features';
export * from './services';
export * from './schedule';