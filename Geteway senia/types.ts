export interface BusinessIdea {
  title: string;
  description: string;
  targetAudience: string;
  monetization: string;
}

export enum GeneratorStatus {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}

export interface UserInput {
  career: string;
  hobby: string;
  strength: string;
}