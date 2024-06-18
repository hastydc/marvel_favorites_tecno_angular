import { AbstractControl, ValidationErrors } from '@angular/forms';
import { SessionFormKey } from './sessionFormKey.enum';

export interface SessionForm {
  [SessionFormKey.EMAIL]: (
    | string
    | ((control: AbstractControl<any, any>) => ValidationErrors | null)[]
  )[];
  [SessionFormKey.PASSWORD]: (
    | string
    | ((control: AbstractControl<any, any>) => ValidationErrors | null)[]
  )[];
}

export interface UserData {
  [SessionFormKey.EMAIL]: string;
  [SessionFormKey.PASSWORD]: string;
}
