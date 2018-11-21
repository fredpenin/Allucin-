import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rate'
})
export class RatePipe implements PipeTransform {

  transform(value: number): string {
    let out = "";
    value = Math.round(value * 10) / 10;
    for(let i=0; i<5; i++){
      if(i < value){
        if (i < Math.round(value)){
          out += "<i class="fas fa-star"></i>";
        }else {
          out += "<i class="fas fa-star-half-alt"></i>";
        }
      }else{
        out+= "<i class="far fa-star"></i>";
      }
    }
    return out;
  }
}
