import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { SelectPreviewComponent } from './select-preview/select-preview.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomeComponent, SelectPreviewComponent],
  imports: [CommonModule, HomeRoutingModule, FormsModule],
})
export class HomeModule {}
