import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class LoginService {
	loggedIn: boolean = false;

	constructor() { }

	userIsLogged() {
		this.loggedIn = localStorage.getItem('loggedIn') === 'true' ? true : false;
		return this.loggedIn;
	}

	removeLocalStorageLoggedInKey() {
		this.loggedIn = false;
		localStorage.removeItem('loggedIn');
	}
}
