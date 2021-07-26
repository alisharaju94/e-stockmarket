import { CommonGuard } from './shared/common-guard';
import { CompanyDetailComponent } from './companies/company-detail/company-detail.component';
import { Routes, RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import { CompaniesComponent } from './companies/companies.component';
import { CompanyStartComponent } from './companies/company-start/company-start.component';

const routes: Routes = [
  { path: '', redirectTo: 'companies', pathMatch: 'full' },
  {
    path: 'companies',
    component: CompaniesComponent,
    children: [
      { path: '', component: CompanyStartComponent },
      { path: ':code', component: CompanyDetailComponent, resolve: [CommonGuard]}
    ],
  },
  { path: '**', redirectTo: 'companies' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRouting {}
