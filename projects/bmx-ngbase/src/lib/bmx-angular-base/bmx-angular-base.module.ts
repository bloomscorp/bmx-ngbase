import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NGBaseConfig} from "./interface/ngbase-config";


@NgModule({
	declarations: [],
	imports: [
		CommonModule
	]
})
export class BmxAngularBaseModule {
	public static forRoot(config: NGBaseConfig): ModuleWithProviders<BmxAngularBaseModule> {
		return {
			ngModule: BmxAngularBaseModule,
			providers: [
				{ provide: 'ROOT_URL', useValue: config.rootUrl }
			]
		};
	}
}
