import { RouterModule,Routes} from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';


const PagesRoutes : Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'progress',
                component: ProgressComponent
            },
            {
                path: '',
                redirectTo: '/dashboard',
                pathMatch: 'full'
            }
        ]
    }
];
export const Pages_Routes = RouterModule.forChild(PagesRoutes);