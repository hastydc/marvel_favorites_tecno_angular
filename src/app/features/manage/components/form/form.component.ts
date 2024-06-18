import { NgClass, NgTemplateOutlet } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  inject,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { SessionForm, UserData } from '@app/models/sessionForm.interface';
import { SessionFormKey } from '@app/models/sessionFormKey.enum';
import { ButtonComponent } from '@app/shared/components/button/button.component';
import { InputComponent } from '@app/shared/components/input/input.component';
import { TranslateModule } from '@ngx-translate/core';

/**
 * FormComponent
 */
@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    TranslateModule,
    NgClass,
    ButtonComponent,
    InputComponent,
    NgTemplateOutlet,
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent implements OnInit {
  /** btnAction */
  @Output() btnAction: EventEmitter<UserData> = new EventEmitter<UserData>();

  /** btnLabel */
  @Input() btnLabel: string = '';

  /** signUp */
  @Input() signUp: boolean = false;

  /** loading */
  @Input() loading: boolean = false;

  /** formBuilder */
  private readonly formBuilder: FormBuilder = inject(FormBuilder);

  /** form */
  form!: FormGroup;

  /** formKey */
  formKey = SessionFormKey;

  /**
   * ngOnInit
   */
  ngOnInit(): void {
    this.initForm();
  }

  /**
   * initForm
   */
  initForm(): void {
    let controls: SessionForm = {
      [SessionFormKey.EMAIL]: ['', [Validators.required, Validators.email]],
      [SessionFormKey.PASSWORD]: ['', [Validators.required]],
    };

    this.form = this.formBuilder.group<SessionForm>(controls);
  }

  /**
   * action
   */
  action(): void {
    this.btnAction.emit(this.form.getRawValue());
  }
}
