import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Message } from 'primeng/api';
import { LoginService } from './service/login.service';
import { Router } from '@angular/router';
import { ADMIN_NAME, ADMIN_PASSWORD, USER_NAME, USER_PASSWORD } from 'src/app/helpers/consts';
import { UserAccount } from 'src/app/helpers/interfaces/user-account.interface';

export interface Login {
	user: FormControl<string | null>;
	password: FormControl<string | null>;
}

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
	messages: Message[] | any;
	userValue!: string;
	passwordValue!: string;
	loading: boolean = false;
	loginForm: FormGroup = new FormGroup<Login>({
		user: new FormControl('', [Validators.required, Validators.minLength(4)]),
		password: new FormControl('', [Validators.required, Validators.minLength(8)])
	});

	users: UserAccount[] = [];

	constructor(private loginService: LoginService,
				private router: Router
	) {
		this.loginService.removeLocalStorageLoggedInKey();
	}

	ngOnInit(): void {}

	createUsers() {
		this.users = [
			{
				username: ADMIN_NAME,
				password: ADMIN_PASSWORD
			},
			{
				username: USER_NAME,
				password: USER_PASSWORD
			}
		];
	}

	login() {
		this.clearError();
		this.loading = true;

		setTimeout(() => {
			if(this.loginForm.get('user')?.value === ADMIN_NAME && this.loginForm.get('password')?.value === ADMIN_PASSWORD) {
				this.setUserLoggedAsAdmin(true);
				this.loading = false;
				this.redirectToUserList();
				return;
			}

			if(this.loginForm.get('user')?.value === USER_NAME && this.loginForm.get('password')?.value === USER_PASSWORD) {
				this.setUserLoggedAsAdmin(false);
				this.loading = false;
				this.redirectToUserList();
				return;
			}

			this.loading = false;
			this.showError();
		}, 2000);
	}

	redirectToUserList() {
		this.router.navigate(['Users']);
	}

	setUserLoggedAsAdmin(isAdmin: boolean) {
		this.loginService.loggedIn = true;
		localStorage.setItem('loggedIn', 'true');
		localStorage.setItem('role', isAdmin ? ADMIN_NAME : USER_NAME);
	}

	clearError() {
		this.messages = [];
	}

	showError() {
		this.messages = [
            { severity: 'error', detail: 'Invalid username or password' }
        ];
	}
}
