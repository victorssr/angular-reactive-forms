import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BarDiZonesComponent } from "./bar-di-zones.component";
import { BarService } from "./bar.service";
import { BarUnidadeConfig, BAR_UNIDADE_CONFIG } from "./bar.config";

@NgModule({
    declarations: [
        BarDiZonesComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        BarDiZonesComponent
    ]
})
export class BarModule {

    static forRoot(config: BarUnidadeConfig): ModuleWithProviders<BarModule> {
        return {
            ngModule: BarModule,
            providers: [
                { provide: 'ConfigManualUnidade', useValue: config },
                { provide: BAR_UNIDADE_CONFIG, useValue: config }
            ]
        }
    }

}