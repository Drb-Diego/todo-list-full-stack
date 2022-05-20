export interface IRequestTask {
  title: string;
  description: string;
  completed?: boolean;
}

export interface ICreateTask extends IRequestTask {
  userId: string;
}