import { Pipe, PipeTransform } from '@angular/core';
import { Identity } from '../../../model/user.model';

@Pipe({
  name: 'identity'
})
export class IdentityPipePipe implements PipeTransform {

  transform(value: Identity): string {
    return value.firstname + ' ' + value.lastname;
  }

}
