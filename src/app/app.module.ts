import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
//import { HelloComponent } from './hello.component';
//중첩
/*
import { NestedGrandsonComponent } from './nested-component/grandson.component';
import { NestedChildComponent } from './nested-component/child.component';
import { NestedParentComponent } from './nested-component/parent.component';
*/
//값전달
/*
import { ParentToChildInputComponent } from './parent-to-child-input/parent-to-child-input.component';
import { ChildInputComponent } from './parent-to-child-input/child-input.component';
import { ParentToChildInputsComponent } from './parent-to-child-inputs/parent-to-child-inputs.component';
import { ChildInputsComponent } from './parent-to-child-inputs/child-inputs.component';
*/
import { ChildComponent } from './child-to-parent/child.component';
import { ChildToParentComponent } from './child-to-parent/child-to-parent.component';


@NgModule({
  declarations: [
    ChildComponent,
    ChildToParentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [ChildToParentComponent]
})
export class AppModule { }
