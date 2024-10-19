import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { LoginModule } from "./components/login/login.module";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { DashboardModule } from "./components/dashboard/dashboard.module";
import { AuthGuard, RoleGuard } from "./guards/Auth-guard.guard";
import { UserFormComponent } from "./components/dashboard/user-form/user-form.component";
import { UserFormModule } from "./components/dashboard/user-form/user-form.module";

export const APP_ROUTES: Routes = [
    {
        path: '',
        redirectTo: '/Login',
        pathMatch: 'full',
        data: {
            title: 'Login'
        }
    },
    {
        path: 'Login',
        component: LoginComponent,
        title: 'Login',
        loadChildren: () => import('./components/login/login.module').then(m => LoginModule)
    },
    {
        path: 'Users',
        component: DashboardComponent,
        title: 'Users',
        canActivate: [AuthGuard],
        loadChildren: () => import('./components/dashboard/dashboard.module').then(m => DashboardModule)
    },
    {
        path: 'Users/Create',
        component: UserFormComponent,
        title: 'Create user',
        loadChildren: () => import('./components/dashboard/user-form/user-form.module').then(m => UserFormModule),
        canActivate: [AuthGuard, RoleGuard]
    },
    {
        path: 'Users/:id/Edit',
        component: UserFormComponent,
        title: 'Edit user',
        loadChildren: () => import('./components/dashboard/user-form/user-form.module').then(m => UserFormModule),
        canActivate: [AuthGuard, RoleGuard]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
})

export class AppRoutingModule {}