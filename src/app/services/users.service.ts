import { Injectable } from '@angular/core';
import { User } from '../helpers/interfaces/user.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const JSON_HEADERS = {
	headers: {
		'Content-type': 'application/json; charset=UTF-8',
	}
}

@Injectable({
	providedIn: 'root'
})
export class UsersService {
	baseUrl: string = 'https://jsonplaceholder.typicode.com/users/';

	constructor(private httpClient: HttpClient) { }

	getUsers(): Observable<User[]> {
		return this.httpClient.get<User[]>(this.baseUrl, JSON_HEADERS);
	}

	getUser(id: number): Observable<User> {
		const url = `${this.baseUrl + id}`;
		return this.httpClient.get<User>(url, JSON_HEADERS);
	}

	saveUser(form: any, id?: string): Observable<User> {
		const url = `${this.baseUrl + id}`;
		let body = form && JSON.stringify(form);

		if (id) {
			return this.httpClient.put<User>(url, body, JSON_HEADERS);
		} else {
			return this.httpClient.post<User>(this.baseUrl, body, JSON_HEADERS);
		}
	}
}
