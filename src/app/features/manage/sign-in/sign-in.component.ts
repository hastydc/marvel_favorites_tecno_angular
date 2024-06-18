import { Component, inject } from '@angular/core';
import { FormComponent } from '../components/form/form.component';
import { UserData } from '@app/models/sessionForm.interface';
import { TranslateModule } from '@ngx-translate/core';
import { LogoComponent } from '@app/shared/components/logo/logo.component';
import { RoutePath } from '@app/models/routePath.enum';
import { Router, RouterModule } from '@angular/router';
import { ManageService } from '../services/manage.service';
import { catchError, finalize } from 'rxjs';
import { ToastService } from '@app/shared/components/toast/toast.service';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [FormComponent, TranslateModule, LogoComponent, RouterModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
})
export class SignInComponent {
  private readonly manageService = inject(ManageService);
  private readonly toastService = inject(ToastService);
  private readonly router = inject(Router);

  routePath = RoutePath;
  loading: boolean = false;

  signIn(payload: UserData): void {
    this.loading = true;

    this.manageService
      .signIn(payload)
      .pipe(
        catchError((error) => {
          this.toastService.setData({
            show: true,
            text: 'invalidCredentials',
            error: true,
          });

          return error;
        }),
        finalize(() => {
          this.loading = false;
        })
      )
      .subscribe({
        next: () => {
          this.toastService.setData({ show: true, text: 'successfulSignIn' });
          this.router.navigate([RoutePath.HOME]);
        },
      });
  }
}
