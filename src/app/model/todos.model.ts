export default class ToDo {
  title: string;
  priority: number;
  isCompleted: boolean;
  constructor() {
    this.title = '';
    this.priority = 0;
    this.isCompleted = false;
  }
}
