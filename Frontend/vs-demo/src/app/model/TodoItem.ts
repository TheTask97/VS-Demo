export class TodoItem {
  id: number | undefined;
  name: string
  description: string;

  constructor(name: string, description: string) {
    this.name = name;
    this.description = description;
  }
}
