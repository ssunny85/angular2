import { Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-twoway-ngmodel',
    template: `
    <h1>실행결과 : </h1>
    <select [(ngModel)]="city">
        <option *ngFor="let obj of cities" [value]="obj.eng">{{obj.han}}</option>
    </select>
    <select (change)="city=$event.target.value">
        <option *ngFor="let obj of cities" [value]="obj.eng">{{obj.han}}</option>
    </select>
    <input type="text" [(ngModel)]="city">
    <input type="text" [value]="city" (input)="city=$event.target.value"><br><br>
    <span *ngFor="let obj of cities">
        <input type="radio" [value]="obj.eng" [checked]="(obj.eng==city?true:null)" (click)="$event.target.value"><label for="">{{obj.han}}</label>
    </span>
    `,
    styles:[`select{margin-bottom:20px;}`]
})
export class TwowayNgmodelComponent{
    city:string = 'pusan';
    cities:Object[] = [
        {han:"서울",eng:'seoul'},
        {han:"대전",eng:'daejeon'},
        {han:"대구",eng:'daegu'},
        {han:"부산",eng:'pusan'}
    ]
}
