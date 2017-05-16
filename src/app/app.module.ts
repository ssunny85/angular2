import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { HelloComponent } from './hello.component';
import { CoreTestComponent } from './core-test/core-test.component';

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
import { ChildComponent } from './child-to-parent/child.component';
import { ChildToParentComponent } from './child-to-parent/child-to-parent.component';
*/
//viewchild
/*
import { ViewChildComponent } from './viewchild/viewchild.component';
import { ItemComponent } from './viewchild/viewchild.component';
import { Item } from './viewchild/viewchild.component';
*/
//component style
/*
import { ComponentStyleComponent } from './component-style/component-style.component';
import { FirstDepthComponent } from './component-style/first-child.component';
import { SecondDepthComponent } from './component-style/second-child.component';
*/
//mock
/*
import { MockComponent } from './mock/mock.component';
*/

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    CoreTestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    CoreModule.forRoot({nickName : 'Happy'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
