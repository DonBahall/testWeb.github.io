import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { SERVER_API_URL } from 'app/app.constants';

@Injectable()
export class PasswordResetService {
    constructor(private http: HttpClient) {}

    getResetLink(mail: string): Observable<string> {
        return this.http.post(SERVER_API_URL + 'api/account/reset-password/link', mail, { responseType: 'text' });
    }

    areMailsEnabled(): Observable<string> {
        return this.http.get(SERVER_API_URL + 'api/mail/enabled', { responseType: 'text' });
    }
}
