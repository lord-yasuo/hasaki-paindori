import { NgModule } from "@angular/core";
import { ScrollToModule } from "@nicky-lenaers/ngx-scroll-to";
import { GoTopDirective } from "./directives/go-top.directive";

@NgModule({
  declarations: [
    GoTopDirective
  ],
  imports: [
    ScrollToModule.forRoot(),
  ],
  exports: [
    GoTopDirective,
    ScrollToModule
  ]
})
export class SharedModule { }