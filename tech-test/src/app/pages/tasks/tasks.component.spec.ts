import { ComponentFixture, TestBed } from "@angular/core/testing";

import { TasksComponent } from "./tasks.component";
import { inject } from "@angular/core";
import { TaskService } from "../../services/task.service";

describe("TasksComponent", () => {
  let component: TasksComponent;
  let fixture: ComponentFixture<TasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TasksComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  // @ts-ignore
  it("retrieves all the cars", inject([TaskService], (taskservice) => {
    taskservice
      .getAllTasks()
      .subscribe((result) => expect(result.length).toBeGreaterThan(0));
  }));
});
