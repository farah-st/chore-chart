export interface Chore {
  _id?: string;
  title: string;
  assignedTo?: string; 
  dueDate: string;
  status: 'To Do' | 'In Progress' | 'Done';
}
