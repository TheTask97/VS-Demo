import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TodoItem } from '../model/TodoItem';

@Component({
  selector: 'app-edit-todo-dialog',
  templateUrl: './edit-todo-dialog.component.html',
  styleUrls: ['./edit-todo-dialog.component.css']
})
export class EditTodoDialogComponent {
  editedTodoItem: TodoItem;

  constructor(
    public dialogRef: MatDialogRef<EditTodoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { todoItem: TodoItem }
  ) {
    this.editedTodoItem = { ...data.todoItem };
  }

  onSave(): void {
    this.dialogRef.close(this.editedTodoItem);
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
