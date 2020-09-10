import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BarDiZonesComponent } from "./bar-di-zones.component";
import { BarService } from "./bar.service";

@NgModule({
    declarations: [
        BarDiZonesComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        BarDiZonesComponent
    ],
    providers: [
        BarService
    ]
})
export class BarModule { }