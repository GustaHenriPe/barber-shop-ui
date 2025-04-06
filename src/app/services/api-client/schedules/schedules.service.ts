import { Injectable } from "@angular/core"
import type { IScheduleService } from "./ischedules.service"
import type { Observable } from "rxjs"
import type { SaveScheduleRequest, SaveScheduleResponse, ScheduleAppointmentMonthResponse } from "./schedule.models"
import { environment } from "../../../../environments/environment"
import type { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: "root",
})
export class SchedulesService implements IScheduleService {
  private readonly basePath = environment.apiUrl

  constructor(private http: HttpClient) {}

  save(request: SaveScheduleRequest): Observable<SaveScheduleResponse> {
    return this.http.post<SaveScheduleResponse>(`${this.basePath}schedules`, request)
  }
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.basePath}schedules/${id}`)
  }
  listInMonth(year: number, month: number): Observable<ScheduleAppointmentMonthResponse> {
    return this.http.get<ScheduleAppointmentMonthResponse>(`${this.basePath}schedules/${year}/${month}`)
  }
}

