import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timepassed'
})
export class TimepassedPipe implements PipeTransform {

  transform ( value: number, ...args: unknown[] ): number {
    const today: Date = new Date()
    let todayWithNoTime: any = new Date( today.getFullYear(), today.getMonth(), today.getDate() )
    let dateDifference: number = Math.abs(todayWithNoTime - value)
    const secondsInDay = 86400;
    var dateDifferenceSeconds = dateDifference*0.001;
    var dateCounter = dateDifferenceSeconds / secondsInDay;
    
    if (dateCounter >= 1 && todayWithNoTime > value ){
      return Math.floor(dateCounter);
    }else{
      return 0;
    }
  }

}
