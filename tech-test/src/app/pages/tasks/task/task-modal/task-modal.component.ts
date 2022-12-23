import { Component, Inject, NgZone, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { MAT_DATE_FORMATS } from "@angular/material/core";
import { TaskService } from "../../../../services/task.service";

export const MY_DATE_FORMATS = {
  parse: {
    dateInput: "DD/MM/YYYY",
  },
  display: {
    dateInput: "DD/MM/YYYY",
    monthYearLabel: "MMMM YYYY",
    dateA11yLabel: "LL",
    monthYearA11yLabel: "MMMM YYYY",
  },
};

@Component({
  selector: "app-task-modal",
  templateUrl: "./task-modal.component.html",
  styleUrls: ["./task-modal.component.scss"],
  providers: [{ provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS }],
})
export class TaskModalComponent implements OnInit {
  taskForm: FormGroup;

  public readonly reqErrorText: string = "This field is required!";

  public readonly succsessText: string = "Data Updated!";
  public showSuccessText: boolean = false;

  public errorText: string = "Error!";
  public showErrorText: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<TaskModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public taskService: TaskService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  createForm(): void {
    this.taskForm = new FormGroup({
      id: new FormControl(""),
      label: new FormControl("", Validators.required),
      category: new FormControl("", Validators.required),
      done: new FormControl(),
      description: new FormControl("", Validators.required),
    });
  }

  initForm(): void {
    this.createForm();
    if (this.data?.todo) {
      this.taskForm.setValue({
        id: this.data.todo.id,
        label: this.data.todo.label,
        category: this.data.todo.category,
        done: this.data.todo.done ? new Date("11/11/2012") : "",
        description: this.data.todo.description,
      });
    }
  }

  onSave(): void {
    if (this.taskForm.invalid) {
      return;
    }

    if (this.taskForm.get("id").value) {
      this.taskService.updateTask(this.taskForm.value).subscribe(
        (res) => {
          this.showSuccessText = true;
        },
        (error) => {
          this.errorText = error.message;
          this.showErrorText = true;
        }
      );
    } else {
      let id = Math.random();
      this.taskForm.get("id").setValue(id);
      this.taskService.createTask(this.taskForm.value).subscribe(
        (res) => {
          this.showSuccessText = true;

          // setTimeout(() => {
          //   this.dialogRef.close();
          // }, 1000);
        },
        (error) => {
          this.errorText = error.message;
          this.showErrorText = true;
        }
      );
    }
  }
}
