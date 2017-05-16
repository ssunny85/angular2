import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelloComponent } from './hello.component'
import { CoreTestComponent } from './core-test/core-test.component'

const appRoutes:Routes = [
    {
        path:'hello',
        component: HelloComponent
    },
    {
        path:'core-test',
        component:CoreTestComponent
    }
];

@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}