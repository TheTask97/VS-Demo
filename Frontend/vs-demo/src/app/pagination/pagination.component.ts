import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { RestDataService } from '../restdata.service';
import { TodoItem } from '../model/TodoItem';
import { EditTodoDialogComponent } from '../edit-todo-dialog/edit-todo-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit{
  @Input() searchInput: string = '';
  @Input() elements: TodoItem[] = [];
  @Input() buttonFunction: 'details' | 'edit' = 'details';
  currentPage = 1;
  itemsPerPage = 12;

  constructor(public dialog: MatDialog, private restService: RestDataService) {}

  ngOnInit() {
   this.fetchData();
  }

  get displayedElements(): TodoItem[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.elements.slice(startIndex, endIndex);
  }

  deleteItem(id: number): void {
    // Use the built-in JavaScript confirm function
    const confirmed = confirm('Are you sure you want to delete this item?');

    if (!confirmed) return;
    this.restService.deleteTodoItem(id).subscribe(() => this.fetchData());
  }

  fetchData(){
    this.restService.getAllTodoItems().subscribe((data) => this.elements = data);
  }

  openEditTodoDialog(todoItem: TodoItem): void {
    const dialogRef = this.dialog.open(EditTodoDialogComponent, {
      width: '400px',
      data: { todoItem }  // Pass the todo item data to the dialog
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result) return
      this.restService.updateTodoItem(result).subscribe(() => this.fetchData());
    });
  }

}
