import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Observable, Subject } from "rxjs";
import { Todo } from "../models/todos";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class TaskService {
  constructor(private http: HttpClient) {}

  private baseUrl = environment.dbURL;

  public taskListUpdate: Subject<boolean> = new Subject<boolean>();

  public getAllTasks(searchStr?: string): Observable<Todo[]> {
    if (searchStr) {
      return this.http
        .get<Todo[]>(`${this.baseUrl}/tasks`)
        .pipe(
          map((res: Todo[]) =>
            res.filter(
              (x: Todo) =>
                x.label.includes(searchStr) || x.description.includes(searchStr)
            )
          )
        );
    }
    return this.http.get<Todo[]>(`${this.baseUrl}/tasks`);
  }

  public createTask(task: Todo): Observable<Todo> {
    return this.http.post<Todo>(`${this.baseUrl}`, task);
  }

  public updateTask(task: Todo): Observable<Todo> {
    return this.http.patch<Todo>(`${this.baseUrl}/tasks/${task.id}`, task);
  }

  public deleteTask(id: string): Observable<Todo> {
    console.log("delete", id);

    // I don't get why ist not working, i tried both ways, with tasks in string and without
    return this.http.delete<Todo>(`${this.baseUrl}/tasks/${id}`);
  }
}
