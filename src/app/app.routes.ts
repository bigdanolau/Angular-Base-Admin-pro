import {RouterModule, Routes } from "@angular/router";
import { Component } from '@angular/core';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from "./login/login.component";
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { PagesComponent } from './pages/pages.component';
import { RegisterComponent } from "./login/register/register.component";

const appRoutes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'registrar',
        component: RegisterComponent
    },
    {
        path: '**',
        component: NopagefoundComponent
    }
];
export const APP_ROUTES = RouterModule.forRoot(appRoutes,{useHash: true});