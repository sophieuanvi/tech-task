import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TasksComponent } from "./tasks.component";
import { TaskComponent } from "./task/task.component";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { TaskModalComponent } from "./task/task-modal/task-modal.component";
import { MatDialogModule } from "@angular/material/dialog";
import { SharedModule } from "../../components/shared/shared.module";
import { MatSelectModule } from "@angular/material/select";
import { MatInputModule } from "@angular/material/input";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import { TasksRoutingModule } from "./tasks.routing.module";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatDividerModule } from "@angular/material/divider";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatMenuModule } from "@angular/material/menu";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [TasksComponent, TaskComponent, TaskModalComponent],
  imports: [
    TasksRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    SharedModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,

    MatToolbarModule,
    MatDividerModule,

    MatCardModule,
    MatDividerModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    HttpClientModule,
    MatMenuModule,
    MatTooltipModule,
  ],
  exports: [TasksComponent],
})
export class TasksModule {}
