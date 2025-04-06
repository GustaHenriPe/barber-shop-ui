import { Injectable } from "@angular/core"
import type { IDialogManagerService } from "./idialog-manager.service"
import type { ComponentType } from "@angular/cdk/portal"
import type { Observable } from "rxjs"
import type { YesNoDialogComponent } from "../commons/components/yes-no-dialog/yes-no-dialog.component"
import type { MatDialog } from "@angular/material/dialog"

@Injectable({
  providedIn: "root",
})
export class DialogManagerService implements IDialogManagerService {
  constructor(private readonly dialog: MatDialog) {}

  showYesNoDialog(
    component: ComponentType<YesNoDialogComponent>,
    data: { title: string; content: string },
  ): Observable<any> {
    const dialogRef = this.dialog.open(component, {
      width: "400px",
      data,
    })

    return dialogRef.afterClosed()
  }
}

