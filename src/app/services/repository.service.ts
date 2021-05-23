import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class RepositoryService {
    constructor(private http: HttpClient) { }
    public getData = <T>(route: string) => this.http.get(route) as Observable<T>;
}
