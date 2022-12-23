import { Component, Input, OnInit } from "@angular/core";
import { filter, finalize } from "rxjs/operators";
import { MatDialog } from "@angular/material/dialog";

import { Todo } from "../../../models/todos";
import { TaskService } from "../../../services/task.service";
import { TaskModalComponent } from "./task-modal/task-modal.component";
import { DeleteDialogComponent } from "../../../components/shared/delete-dialog/delete-dialog.component";

@Component({
  selector: "app-task",
  templateUrl: "./task.component.html",
  styleUrls: ["./task.component.scss"],
})
export class TaskComponent implements OnInit {
  @Input() todo!: Todo;

  edit: boolean = false;

  constructor(public dialog: MatDialog, private taskService: TaskService) {}

  ngOnInit(): void {}

  onEdit(): void {
    this.edit = !this.edit;
  }

  public openDialog($event: Event): void {
    const dialogRef = this.dialog.open(TaskModalComponent, {
      width: "450px",
      data: {
        todo: this.todo,
      },
    });
    dialogRef
      .afterClosed()
      .pipe(
        filter((response: boolean) => response),
        finalize(() => {})
      )
      .subscribe(() => {
        this.taskService.taskListUpdate.next(true);
      });

    $event.preventDefault();
  }

  public deleteTask($event: Event): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: "450px",
      data: {
        title: "Delete Task",
        text: `Are you sure you want to delete  task ${this.todo.label}?`,
      },
    });
    dialogRef
      .afterClosed()
      .pipe(
        filter((response: boolean) => response),
        finalize(() => {})
      )
      .subscribe(() => {
        this.taskService.deleteTask(this.todo.id);
        this.taskService.taskListUpdate.next(true);
      });

    $event.preventDefault();
  }
}
