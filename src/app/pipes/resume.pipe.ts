import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'resume',
  standalone: true
})
export class ResumePipe implements PipeTransform {
  transform(value: string, limit: number = 30): string {
    if (!value || value.length === 0) {
      return '*';
    }
    if (value.length <= limit) {
      return value;
    }
    return value.substring(0, limit) + '...';
  }
}
