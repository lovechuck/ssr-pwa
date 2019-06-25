import { article } from './../model/article';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class BlogService {

    private api: string = '/blog'

    constructor(private http: HttpClient) {

    }

    search(page: number): Observable<Array<article>> {
        return this.http.get<Array<article>>(`${this.api}/search`)
    }

    view(guid: string): Observable<article> {
        return this.http.get<article>(`${this.api}/view`)
    }
}