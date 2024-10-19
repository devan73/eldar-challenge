import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/service/login.service';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/helpers/interfaces/user.interface';
import { ADMIN_NAME } from 'src/app/helpers/consts';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
	users: User[] = [];
	loggedAsAdmin: boolean = false;
	dataReady: boolean = false;

	constructor(private loginService: LoginService,
		private usersService: UsersService,
		private router: Router,
		private messageService: MessageService
	) {

	}

	ngOnInit(): void {
		this.getLoggedUser();
		this.getUsers();
	}

	getLoggedUser() {
		localStorage.getItem('role') === ADMIN_NAME ? this.loggedAsAdmin = true : this.loggedAsAdmin = false;
	}

	getUsers() {
		this.usersService.getUsers().subscribe((users: User[]) => {
			this.users = users;
			setTimeout(() => {
				this.dataReady = true;
			}, 250)
		});
	}

	edit(user: User) {
		this.router.navigate([`Users/${user.id}/Edit`]);
	}

	delete(user: User, index: number) {
		this.dataReady = false;
		setTimeout(() => {
			this.users.splice(index, 1);
			this.dataReady = true;
			this.messageService.add({ severity: 'success', summary: 'Success', detail: `User ${user.username} has been deleted` });
		}, 500)
	}
}
