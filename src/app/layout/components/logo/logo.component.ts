import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RoutePath } from '@app/models/routePath.enum';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [RouterModule, TranslateModule],
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.scss',
})
export class LogoComponent {
  routePath = RoutePath;
}
