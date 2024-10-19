import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { User } from 'src/app/helpers/interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
	selector: 'app-user-form',
	templateUrl: './user-form.component.html',
	styleUrl: './user-form.component.scss',
	standalone: false
})
export class UserFormComponent implements OnInit {
	updateForm: boolean = false;
	userId: string | null = null;
	userForm: FormGroup = new FormGroup<any>({
		username: new FormControl('', [Validators.required]),
		password: new FormControl('', [Validators.required, Validators.minLength(8)]),
		name: new FormControl('', [Validators.required]),
		email: new FormControl('', [Validators.required]),
		address: new FormControl('', [Validators.required]),
		phone: new FormControl('', [Validators.required]),
		zipcode: new FormControl(''),
		city: new FormControl(''),
		company: new FormControl(''),
		website: new FormControl('')
	});
	ready: boolean = false;

	constructor(private usersService: UsersService,
		private activatedRoute: ActivatedRoute,
		private router: Router,
		private messageService: MessageService
	) { }

	ngOnInit(): void {
		this.setForm();
	}

	setForm() {
		this.userId = this.activatedRoute.snapshot.paramMap.get('id')
		this.updateForm = this.userId ? true : false;
		this.ready = !this.updateForm;
		this.userId && this.getUserData(parseInt(this.userId));
	}

	getUserData(id: number) {
		this.usersService.getUser(id).subscribe((user: User) => {
			this.userForm.patchValue(user);
			this.userForm.get('address')?.patchValue(user.address.street);
			this.userForm.get('city')?.patchValue(user.address.city);
			this.userForm.get('zipcode')?.patchValue(user.address.zipcode);
			this.userForm.get('company')?.patchValue(user.company.name);
			this.ready = true;
		});
	}

	goToUserList() {
		this.router.navigate(['Users']);
	}

	saveUser() {
		this.ready = false;
		
		let userObj = {
			"name": this.userForm.get('name')?.value,
			"email": this.userForm.get('email')?.value,
			"address": {
				"street": this.userForm.get('address')?.value,
				"zipcode": this.userForm.get('username')?.value,
				"city": this.userForm.get('username')?.value
			},
			"phone": this.userForm.get('phone')?.value,
			"company": {
				"name": this.userForm.get('username')?.value
			},
			"website": this.userForm.get('username')?.value
		};

		this.usersService.saveUser(userObj, this.userId!).subscribe((user: User) => {
			this.ready = true;
			user && this.showSuccessToast();
		});
	}

	showSuccessToast() {
		this.messageService.add({ severity: 'success', summary: 'Success', detail: `User has been ${this.userId ? 'edited' : 'created'}` });
	}


}
