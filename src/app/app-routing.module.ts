import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [];

  @NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '',
                pathMatch: 'full',
                redirectTo: '/home/index',
            },
            { path: 'home', loadChildren: './blocs/home.bloc/home.module#HomeBlocModule' },
        ]),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule { }
