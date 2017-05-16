import { Component,Input } from '@angular/core';
import { UserService } from '../core/user.service';

@Component({
    selector: 'app-title',
    template: `
    <h1>{{title}}</h1><br>
    <b>{{user}}</b>
    `
})
export class TitleComponent{
    @Input() title:any = '';
    user = '';

    constructor(private userService:UserService){
        this.user = userService.nickName;
    }
}