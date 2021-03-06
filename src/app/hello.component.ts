import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <h1>{{title}}</h1>
        <input type="text" [(ngModel)]="title">
        <textarea [(ngModel)]="title"></textarea>`,
    styles: [`input,textarea{margin-top:20px;width:100%;height:50px;display:block;}`]
})
export class HelloComponent{
    title = 'Hello Component!!';
}