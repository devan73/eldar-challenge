import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LoginService } from '../login/service/login.service';
import { Router } from '@angular/router';
import { ADMIN_NAME } from 'src/app/helpers/consts';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
	menuBarItems: MenuItem[] | undefined;
	userMenuItems: MenuItem[] | null = [];

	constructor(private loginService: LoginService,
				private router: Router
	) {
		this.setMenuBarItems();
		this.setUserMenuItems();
	}

	ngOnInit() {
		this.checkIfAdmin();
	}

	checkIfAdmin() {
		if (localStorage.getItem('role') === ADMIN_NAME) {
			this.menuBarItems?.push(
				{
					label: 'Create user',
					icon: 'pi pi-user-plus',
					command: () => {
						this.goToCreateForm();
					}
				}
			)
		}
	}

	goToUserList() {
		this.router.navigate(['Users']);
	}

	goToCreateForm() {
		this.router.navigateByUrl('Users/Create');
	}

	setMenuBarItems() {
		this.menuBarItems = [
			{
				label: 'Users',
				icon: 'pi pi-user',
				command: () => {
					this.goToUserList();
				}
			}
		];
	}

	setUserMenuItems() {
		this.userMenuItems = [
			{
				label: 'Log out',
				icon: 'pi pi-sign-out',
				command: () => {
					this.logout();
                }
			}
		]
	}

	logout() {
		this.loginService.removeLocalStorageLoggedInKey();
		this.router.navigate(['Login']);
	}
}
