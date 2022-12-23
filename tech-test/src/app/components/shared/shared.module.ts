import { NgModule } from "@angular/core";
import { DeleteDialogComponent } from "./delete-dialog/delete-dialog.component";
import { MatDialogModule } from "@angular/material/dialog";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule } from "@angular/material/button";
@NgModule({
  declarations: [DeleteDialogComponent],
  imports: [MatDialogModule, BrowserAnimationsModule, MatButtonModule],
  exports: [DeleteDialogComponent],
})
export class SharedModule {}
