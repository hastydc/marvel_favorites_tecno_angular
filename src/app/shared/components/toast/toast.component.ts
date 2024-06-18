import {
  CdkConnectedOverlay,
  Overlay,
  OverlayConfig,
  OverlayRef,
} from '@angular/cdk/overlay';
import { NgClass } from '@angular/common';
import { Component, ViewChild, effect, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CdkPortal, PortalModule } from '@angular/cdk/portal';
import { Toast } from '@app/models/toast.interface';
import { ToastService } from './toast.service';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [TranslateModule, PortalModule, CdkConnectedOverlay, NgClass],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss',
})
export class ToastComponent {
  @ViewChild(CdkPortal) portal!: CdkPortal;

  private readonly overlay = inject(Overlay);
  private readonly toastService = inject(ToastService);

  overlayRef!: OverlayRef;

  data: Toast = { show: false, text: '' };

  constructor() {
    effect(() => {
      this.data = this.toastService.getData();

      if (this.data.show) this.show();
    });
  }

  getOverlayConfig(): OverlayConfig {
    return new OverlayConfig({
      hasBackdrop: false,
      width: '50%',
      positionStrategy: this.overlay
        .position()
        .global()
        .top('80px')
        .centerHorizontally(),
    });
  }

  show(): void {
    this.close();

    this.overlayRef = this.overlay.create(this.getOverlayConfig());
    this.overlayRef.attach(this.portal);

    setTimeout(() => {
      this.close();
    }, 4000);
  }

  close(): void {
    this.overlayRef?.dispose();
  }
}
