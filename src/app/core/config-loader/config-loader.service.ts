import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Global } from './global.config';

@Injectable({
    providedIn: 'root',
})
export class ConfigLoaderService {
    constructor(
        private http: HttpClient
    ) { }

    public getJSON(): Observable<Global> {
        return this.http.get<Global>('./configs/global.json');
    }
}
