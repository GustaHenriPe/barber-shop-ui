import type { ComponentType } from "@angular/cdk/portal"
import type { Observable } from "rxjs"
import type { YesNoDialogComponent } from "../commons/components/yes-no-dialog/yes-no-dialog.component"

export interface IDialogManagerService {
  showYesNoDialog(
    component: ComponentType<YesNoDialogComponent>,
    data: { title: string; content: string },
  ): Observable<any>
}

