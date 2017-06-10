import { Component } from '@angular/core';

@Component({
    selector: 'built-in-validator',
    template: `
    ID : <input type="text" [(ngModel)]="user.userId" #userId="ngModel" minlength="2" maxlength="10" placeholder="2~10글자" required>{{userId.valid}}<br>
    이름 : <input type="text" [(ngModel)]="user.userName" #userName="ngModel" minlength="2" maxlength="5" pattern="^[a-z][a-z0-9]{1,9}" required>{{userName.valid}}<br>
    <div *ngIf="userId.valid && userName.valid">
        {{user|json}}
    </div>
        `
})
export class BuileInValidatorComponent{
    user = {
        userId : '',
        userName : ''
    };
}