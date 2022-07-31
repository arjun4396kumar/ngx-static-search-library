import { NgModule } from '@angular/core';
import { NgxStaticSearchComponent } from './ngx-static-search.component';
import { CustomSearchPipe } from './pipes/custom-search.pipe';



@NgModule({
  declarations: [
    NgxStaticSearchComponent,
    CustomSearchPipe
  ],
  imports: [
  ],
  exports: [
    CustomSearchPipe,
    NgxStaticSearchComponent
  ]
})
export class NgxStaticSearchModule { }
