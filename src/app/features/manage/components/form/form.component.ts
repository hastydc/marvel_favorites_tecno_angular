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
  @Output() btnAction: EventEmitter<UserData> = new EventEmitter<UserData>();

  @Input() btnLabel: string = '';

  @Input() signUp: boolean = false;

  @Input() loading: boolean = false;

  private readonly formBuilder: FormBuilder = inject(FormBuilder);

  form!: FormGroup;
  formKey = SessionFormKey;

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    let controls: SessionForm = {
      [SessionFormKey.EMAIL]: ['', [Validators.required, Validators.email]],
      [SessionFormKey.PASSWORD]: ['', [Validators.required]],
    };

    this.form = this.formBuilder.group<SessionForm>(controls);
  }

  action(): void {
    this.btnAction.emit(this.form.getRawValue());
  }
}
