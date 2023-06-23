import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { RouterModule, Routes } from '@angular/router';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { StoreModule } from '@ngrx/store';
import { usersTransactionsReducer } from './store/transaction.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AdminEffects } from './store/transaction.effect';
import { TransactionStatusColorPipe } from './pipe/transaction-status-color.pipe';
import { AdminGuard } from 'src/app/shared/guards/admin/admin.guard';
import { RoutesGuard } from 'src/app/shared/guards/routes.guard';

const routes: Routes = [
  {
    path: "", component: MainComponent, canActivate: [RoutesGuard, AdminGuard]
  }
]

@NgModule({
  declarations: [
    TransactionStatusColorPipe,
    MainComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatSelectModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule,
    StoreModule.forFeature("usersTransactions", usersTransactionsReducer),
    EffectsModule.forFeature(AdminEffects),
    RouterModule.forChild(routes)
  ]
})
export class AdminDashboardModule { }
