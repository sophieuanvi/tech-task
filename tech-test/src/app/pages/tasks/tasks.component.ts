import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { Observable } from "rxjs";
import {
  debounceTime,
  filter,
  finalize,
  distinctUntilChanged,
  startWith,
  switchMap,
} from "rxjs/operators";

import { Todo } from "../../models/todos";
import { TaskModalComponent } from "./task/task-modal/task-modal.component";
import { TaskService } from "../../services/task.service";

@Component({
  selector: "app-tasks",
  templateUrl: "./tasks.component.html",
  styleUrls: ["./tasks.component.scss"],
})
export class TasksComponent implements OnInit {
  constructor(public dialog: MatDialog, private taskService: TaskService) {}
  $tasks: Observable<Todo[]>;

  public searchControl = new FormControl("");

  ngOnInit(): void {
    this.$tasks = this.taskService.getAllTasks();

    this.taskService.taskListUpdate.subscribe(() => {
      this.$tasks = this.taskService.getAllTasks();
    });

    this.$tasks = this.searchControl.valueChanges.pipe(
      debounceTime(500),
      startWith(""),
      distinctUntilChanged(),
      switchMap((searchString) => this.taskService.getAllTasks(searchString))
    );
  }

  public addNewTask(): void {
    const dialogRef = this.dialog.open(TaskModalComponent, {
      width: "450px",
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
  }
}
