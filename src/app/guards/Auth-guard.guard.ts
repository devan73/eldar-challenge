import { inject } from '@angular/core';
import { Router, type CanActivateFn } from '@angular/router';
import { ADMIN_NAME } from '../helpers/consts';

export const AuthGuard: CanActivateFn = (route, state) => {
	const router = inject(Router);

	const data = localStorage.getItem('loggedIn');

	if (data == 'true') {
		return true;
	}

	router.navigate(['Login'])
	return false;
};

export const RoleGuard: CanActivateFn = (route, state) => {
	const router = inject(Router);

	const data = localStorage.getItem('role');

	if (data === ADMIN_NAME) {
		return true;
	}

	router.navigate(['Users'])
	return false;
};