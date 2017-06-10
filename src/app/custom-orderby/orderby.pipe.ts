import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name : 'orderBy'
})
export default class OrderbyPipe implements PipeTransform{
    transform(array:Array<any>, sortType:string, keyname:string):Array<any>{
        if(!sortType){
            return array;
        }

        var key = keyname;
        if(keyname === null){
            var keynames = Object.keys(array);
            key = keynames[0].toLowerCase();
        }

        //오름차순
        if(sortType === 'asc'){
            array.sort(function(a,b){
                if(a[key] < b[key]) return -1;
                if(a[key] > b[key]) return 1;
                return 0;
            });
        } else if(sortType === 'desc'){
            //내림차순
            array.sort(function(a,b){
                if(a[key] < b[key]) return 1;
                if(a[key] > b[key]) return -1;
                return 0;
            });
        }
        return array;
    }
}