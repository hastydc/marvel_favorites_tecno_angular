import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RoutePath } from '@app/models/routePath.enum';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-back-button',
  standalone: true,
  imports: [TranslateModule, RouterModule],
  templateUrl: './back-button.component.html',
  styleUrl: './back-button.component.scss',
})
export class BackButtonComponent {
  routePath = RoutePath;
}
