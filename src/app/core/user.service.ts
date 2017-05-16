import { Injectable,Optional } from '@angular/core';

export class UserServiceConfig{
    nickName = '';
}

@Injectable()
export class UserService{
    private _nickName = '';
    constructor(@Optional() config:UserServiceConfig){
        //Optional장식자를 통해 주입객체가 있으면 객체를 받고 없으면 null 전달
        if(config){
            this._nickName = config.nickName;
        }
    }
    get nickName(){
        return this._nickName;
    }
}