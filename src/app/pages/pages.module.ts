import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { SharedModule } from '../shared/shared.module';
import { PagesComponent } from './pages.component';
import { Pages_Routes } from './pages.routes';
@NgModule({
    declarations: [
        HomeComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        PagesComponent
    ],
    exports: [
        HomeComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        PagesComponent
    ],
    imports: [
        SharedModule,
        Pages_Routes
    ]
})
export class PagesModule {}
