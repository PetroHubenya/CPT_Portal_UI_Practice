import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModule } from './login/login.module';
import { HomeModule } from './home/home.module';
import { SecurityDashboardModule } from './security-dashboard/security-dashboard.module';
import { ExternalSurfaceAssetsModule } from './external-surface-assets/external-surface-assets.module';
import { VulnerabilitiesModule } from './vulnerabilities/vulnerabilities.module';
import { EmailHealthModule } from './email-health/email-health.module';
import { SuspiciousUrlsEmailsModule } from './suspicious-urls-emails/suspicious-urls-emails.module';
import { CustomersModule } from './customers/customers.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LoginModule,
    HomeModule
  ],
  exports: [
    LoginModule,
    SecurityDashboardModule,
    ExternalSurfaceAssetsModule,
    VulnerabilitiesModule,
    EmailHealthModule,
    SuspiciousUrlsEmailsModule, // Public data page
    HomeModule,
    CustomersModule // List of customers that admin selects after loging in.
  ]
})
export class PagesModule { }