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

  // sorry guys i coudnt did unit tests
  // i know how to write them but it was  time..
});
