import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DownloadRoutingModule } from './download-routing.module';
import { DownloadComponent } from './download.component';
import { ShareModule } from '../../../share/share.module';


@NgModule({
  declarations: [DownloadComponent],
  imports: [
    CommonModule,
    ShareModule,
    DownloadRoutingModule
  ]
})
export class DownloadModule {
}
