import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlocksComponent } from './blocks.component';
import { BlocksListComponent } from './blocks-list/blocks-list.component';
import { BlockDetailsComponent } from './block-details/block-details.component';

const routes: Routes = [
  {
    path: '',
    component: BlocksComponent,
    children: [
      {
        path: ':blockId',
        component: BlockDetailsComponent
      },
      {
        path: '',
        pathMatch: 'full',
        component: BlocksListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlocksRoutingModule {}
