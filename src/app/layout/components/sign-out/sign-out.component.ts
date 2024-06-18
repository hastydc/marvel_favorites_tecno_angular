import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { RoutePath } from '@app/models/routePath.enum';
import { StorageKey } from '@app/models/storageKey.enum';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-sign-out',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './sign-out.component.html',
  styleUrl: './sign-out.component.scss',
})
export class SignOutComponent {
  private readonly router = inject(Router);

  signOunt(): void {
    localStorage.removeItem(StorageKey.AUTH);
    this.router.navigate([RoutePath.SIGN_IN]);
  }
}
