import { Injectable } from "@angular/core"
import type { ISnackbarManagerService } from "./isnackbar-manager.service"
import type { MatSnackBar } from "@angular/material/snack-bar"

@Injectable({
  providedIn: "root",
})
export class SnackbarManagerService implements ISnackbarManagerService {
  constructor(private readonly snackBar: MatSnackBar) {}

  show(message: string, action = "fechar", duration = 3000): void {
    this.snackBar.open(message, action, { duration, verticalPosition: "top", horizontalPosition: "right" })
  }
}

