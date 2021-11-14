import { Pipe, PipeTransform } from '@angular/core';
import { Address } from '../../model/address.model';

@Pipe({
  name: 'address'
})
export class AddressPipePipe implements PipeTransform {

  transform(value: Address): string {
    return `${value.streetNumber} ${value.streetName}, ${value.zipCode} ${value.city}, ${value.state}`;
  }

}
