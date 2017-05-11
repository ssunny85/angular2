import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
//import { HelloComponent } from './hello.component';
import { NestedGrandsonComponent } from './nested-component/grandson.component';
import { NestedChildComponent } from './nested-component/child.component';
import { NestedParentComponent } from './nested-component/parent.component';

@NgModule({
  declarations: [
    NestedGrandsonComponent,
    NestedChildComponent,
    NestedParentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [NestedParentComponent]
})
export class AppModule { }
