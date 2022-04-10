import { Pipe, PipeTransform } from '@angular/core';
@Pipe({name: 'timeElapsed', pure:false})
export class TimeElapsedPipe implements PipeTransform {
  transform(value:Date): number{
const now = new Date();
const quoteCreated = new Date(value);
const timeElapsedMilliseconds = now.getTime()-quoteCreated.getTime();
const timeElapsedSeconds = timeElapsedMilliseconds/1000
return timeElapsedSeconds;
  }
}