import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customMessage'
})
export class CustomMessagePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    if(value.length<=50){
      return value
    }else {
      let str = value.split(" ");
      let res = ''
      for(let i=0;i<str.length;i++) {
        if(res.length < 50) {
          res += ' '+str[i]
        }
      }
      res += '...'
      return res;
    }
    
  }

}
