import { NgModule,Optional,SkipSelf,ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './title.component';
import { UserService } from './user.service';
import { UserServiceConfig } from './user.service';

@NgModule({
    imports: [CommonModule],
    exports: [TitleComponent],
    declarations: [TitleComponent],
    providers: [UserService, UserServiceConfig]
})
export class CoreModule{
    constructor(@Optional() @SkipSelf() parentModule:CoreModule){
        if(parentModule){
            throw new Error('CoreModule이 이미 로딩되었습니다.');
        }
    }
    static forRoot(config:UserServiceConfig):ModuleWithProviders{
        return {
            ngModule: CoreModule,
            providers: [
                {provide:UserServiceConfig, useValue:config}
            ]
        }
    }
}
