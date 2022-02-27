import { NgModule } from "@angular/core";
import { ScrollToModule } from "@nicky-lenaers/ngx-scroll-to";
import { MomentModule } from "ngx-moment";
import { GoTopDirective } from "./directives/go-top.directive";

@NgModule({
  declarations: [
    GoTopDirective
  ],
  imports: [
    ScrollToModule.forRoot(),
    MomentModule.forRoot({
      relativeTimeThresholdOptions: {
        'm': 59
      }
    })
  ],
  exports: [
    GoTopDirective,
    ScrollToModule
  ]
})
export class SharedModule { }