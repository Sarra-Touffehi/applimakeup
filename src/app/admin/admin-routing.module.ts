import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthAdminGuard } from '../auth-admin.guard';
import { AdminComponent } from '../components/admin/admin.component';

const routes: Routes = [
  {path:'ADMIN', component:AdminComponent,
  canActivate:[AuthAdminGuard],
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
