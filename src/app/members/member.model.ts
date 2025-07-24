export interface Member {
  _id?: string;
  name: string;
  age: number;
  email?: string;
  role?: 'parent' | 'child';
}

