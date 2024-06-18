import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { LogoComponent } from '@app/shared/components/logo/logo.component';
import { TranslateModule } from '@ngx-translate/core';
import { FormComponent } from '../components/form/form.component';
import { RoutePath } from '@app/models/routePath.enum';
import { UserData } from '@app/models/sessionForm.interface';
import { ToastService } from '@app/shared/components/toast/toast.service';
import { catchError, finalize } from 'rxjs';
import { ManageService } from '../services/manage.service';

/**
 * SignUpComponent
 */
@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormComponent, TranslateModule, LogoComponent, RouterModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
})
export class SignUpComponent {
  /** manageService */
  private readonly manageService = inject(ManageService);

  /** toastService */
  private readonly toastService = inject(ToastService);

  /** router */
  private readonly router = inject(Router);

  /** routePath */
  routePath = RoutePath;

  /** loading */
  loading: boolean = false;

  /**
   * signUp
   * @param {UserData} payload
   */
  signUp(payload: UserData): void {
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
          this.toastService.setData({ show: true, text: 'successfulSignUp' });
          this.router.navigate([RoutePath.SIGN_IN]);
        },
      });
  }
}
