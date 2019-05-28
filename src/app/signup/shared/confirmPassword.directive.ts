import { Validator, NG_VALIDATORS, AbstractControl } from "@angular/forms";
import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[confirmEqualValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: confirmPasswordDirective,
    multi: true
  }]

})
export class confirmPasswordDirective implements Validator {
  @Input() confirmEqualValidator: string;
  validate(control: AbstractControl): { [key: string]: any } | null {
    const controlToCompare = control.parent.get(this.confirmEqualValidator);

    //if the password and confirm password doesn't match, return the object
    if (controlToCompare && controlToCompare.value !== control.value) {
      return { 'notEqual': true };
    }
    //else return null
    return null;
  }
}
