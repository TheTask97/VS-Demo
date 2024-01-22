import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateTodoDialogComponent } from './create-todo-dialog/create-todo-dialog.component';
import { RestDataService } from './restdata.service';
import { PaginationComponent } from './pagination/pagination.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'vs-demo';
  @ViewChild(PaginationComponent) paginationComponent: PaginationComponent | undefined;

  constructor(public dialog: MatDialog, public restService: RestDataService) {}

  openCreateTodoDialog(): void {
    const dialogRef = this.dialog.open(CreateTodoDialogComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result) return;
      this.restService.createNewTodoItem(result).subscribe(() =>  this.paginationComponent?.fetchData());
    });
  }

}
