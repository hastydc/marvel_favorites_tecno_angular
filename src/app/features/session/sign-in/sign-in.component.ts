import { Component } from '@angular/core';
import { FormComponent } from '../components/form/form.component';
import { UserData } from '@app/models/sessionForm.interface';
import { TranslateModule } from '@ngx-translate/core';
import { LogoComponent } from '@app/shared/components/logo/logo.component';
import { RoutePath } from '@app/models/routePath.enum';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [FormComponent, TranslateModule, LogoComponent, RouterModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
})
export class SignInComponent {
  routePath = RoutePath;

  signIn(payload: UserData): void {}
}
