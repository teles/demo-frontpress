angular.module("demo-frontpress-app", ["frontpress"]);
angular.module("demo-frontpress-app").controller("DemoFrontPressController", DemoFrontPressController);
angular.module("demo-frontpress-app").config(DemoFrontPressConfig);

function DemoFrontPressController(){
	var vc = this;
}

function DemoFrontPressConfig($FrontPressProvider, $qProvider){
	$FrontPressProvider.configure.load();
	$qProvider.errorOnUnhandledRejections(false);
}