import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MegaMenuModule } from 'primeng/megamenu';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OrderListModule } from 'primeng/orderlist';
import { MessagesModule } from 'primeng/messages';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MegaMenuModule,
    ProgressSpinnerModule,
    SidebarModule,
    ButtonModule,
    IconFieldModule,
    FormsModule,
    MessagesModule

  ],
  exports: [
    MegaMenuModule,
    ProgressSpinnerModule,
    SidebarModule,
    ButtonModule,
    IconFieldModule,
    BrowserAnimationsModule,
    OrderListModule,
    MessagesModule
  ],
})
export class MgPrimeModule {}
