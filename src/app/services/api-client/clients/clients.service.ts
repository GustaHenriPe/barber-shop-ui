import { Injectable } from "@angular/core"
import type { ICLientService } from "./iclients.service"
import type { Observable } from "rxjs"
import type {
  SaveClientRequest,
  SaveClientResponse,
  UpdateClientRequest,
  UpdateClientResponse,
  ListClientResponse,
  DetailClientResponse,
} from "./client.models"
import type { HttpClient } from "@angular/common/http"
import { environment } from "../../../../environments/environment"

@Injectable({
  providedIn: "root",
})
export class ClientsService implements ICLientService {
  private readonly basePath = environment.apiUrl

  constructor(private http: HttpClient) {}

  save(request: SaveClientRequest): Observable<SaveClientResponse> {
    return this.http.post<SaveClientResponse>(`${this.basePath}clients`, request)
  }
  update(id: number, request: UpdateClientRequest): Observable<UpdateClientResponse> {
    return this.http.put<UpdateClientResponse>(`${this.basePath}clients/${id}`, request)
  }
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.basePath}clients/${id}`)
  }
  list(): Observable<ListClientResponse[]> {
    return this.http.get<ListClientResponse[]>(`${this.basePath}clients`)
  }
  findById(id: number): Observable<DetailClientResponse> {
    return this.http.get<DetailClientResponse>(`${this.basePath}clients/${id}`)
  }
}

