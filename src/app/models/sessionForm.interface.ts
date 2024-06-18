import { AbstractControl, ValidationErrors } from '@angular/forms';
import { SessionFormKey } from './sessionFormKey.enum';

/**
 * SessionForm
 */
export interface SessionForm {
  /** email */
  [SessionFormKey.EMAIL]: (
    | string
    | ((control: AbstractControl<any, any>) => ValidationErrors | null)[]
  )[];

  /** password */
  [SessionFormKey.PASSWORD]: (
    | string
    | ((control: AbstractControl<any, any>) => ValidationErrors | null)[]
  )[];
}

/**
 * UserData
 */
export interface UserData {
  /** email */
  [SessionFormKey.EMAIL]: string;

  /** password */
  [SessionFormKey.PASSWORD]: string;
}
