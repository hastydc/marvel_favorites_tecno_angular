import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LogoComponent } from '@app/shared/components/logo/logo.component';
import { TranslateModule } from '@ngx-translate/core';
import { FormComponent } from '../components/form/form.component';
import { RoutePath } from '@app/models/routePath.enum';
import { UserData } from '@app/models/sessionForm.interface';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormComponent, TranslateModule, LogoComponent, RouterModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
})
export class SignUpComponent {
  routePath = RoutePath;

  signUp(userData: UserData): void {}
}
