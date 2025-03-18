import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NGBaseConfig} from "./interface/ngbase-config";
import {Constant} from "./constant";


@NgModule({
	declarations: [],
	imports: [
		CommonModule
	]
})
export class BmxAngularBaseModule {

	private static setupConfig(config: NGBaseConfig): void {
		if (!config.rootUrl)
			config.rootUrl = Constant.ROOT_URL;
		if (!config.authSuccessRouteKey)
			config.authSuccessRouteKey = Constant.AUTH_SUCCESS_ROUTE_KEY;
		if (!config.siteName)
			config.siteName = Constant.SITE_NAME;
	}
	public static forRoot(config: NGBaseConfig): ModuleWithProviders<BmxAngularBaseModule> {

		BmxAngularBaseModule.setupConfig(config);

		return {
			ngModule: BmxAngularBaseModule,
			providers: [
				{ provide: 'ROOT_URL', useValue: config.rootUrl },
				{ provide: 'AUTH_SUCCESS_ROUTE_KEY', useValue: config.authSuccessRouteKey },
				{ provide: 'SITE_NAME', useValue: config.siteName }
			]
		};
	}
}
