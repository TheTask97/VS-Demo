// create-todo-dialog.component.ts
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { TodoItem } from '../model/TodoItem';

@Component({
  selector: 'app-create-todo-dialog',
  templateUrl: './create-todo-dialog.component.html',
  styleUrls: ['./create-todo-dialog.component.css']
})
export class CreateTodoDialogComponent {
  name: string = '';
  description: string = '';

  constructor(public dialogRef: MatDialogRef<CreateTodoDialogComponent>) {}

  onSave(): void {

    const newTodoItem = new TodoItem(this.name, this.description);
    this.dialogRef.close(newTodoItem);
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
