import { Component, Directive, Input, Attribute } from '@angular/core';

@Directive({
    selector: '[myDirective]',
    host:{
        '(click)':'onMouseClick()'
    }
})
export class myDirective{
    //정적인 지시자의 경우 @Attribute 장식자를 사용
    constructor(@Attribute('staticValue') private staticValue:string){}

    _inputValue:string;
    @Input() set inputValue(status:string){
        this._inputValue = status;
    }
    onMouseClick(){
        alert("속성바인딩값: " + this._inputValue + "\속성값: " + this.staticValue);
    }
}

@Component({
    selector: 'app-pass-to-directive',
    template:`
    <input type="text" [(ngModel)]="msg">
    <button myDirective [inputValue]="msg" staticValue="안녕하세요.">인사말 출력</button>
    `
})
export class PassToDirectiveComponent{
    msg:string = "행복한 하루되세요.";
}