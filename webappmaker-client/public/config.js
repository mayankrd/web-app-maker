/**
 * Created by mayank on 10/15/16.
 */

(function() {
    angular.module("WebAppMaker") .config(Config);

    function Config($routeProvider) {
        console.log("inside route provider");
        $routeProvider

            .when("/login", {
                templateUrl: "/views/user/login.view.client.html",
                controller: "LoginController",
                controllerAs: "model"
            })

            .when("/", {
                templateUrl: "/views/user/login.view.client.html",
                controller: "LoginController",
                controllerAs: "model"
            })

            .when("default", {
                templateUrl: "/views/user/login.view.client.html"
            })

            .when("/register", {
                templateUrl: "/views/user/register.view.client.html",
                controller: "RegisterController",
                controllerAs: "model"
            })

            .when("/profile", {
                templateUrl: "/views/user/profile.view.client.html",
                controller: "ProfileController",
                controllerAs: "model"
            })

            .when("/user/:uid", {
                templateUrl: "/views/user/profile.view.client.html",
                controller: "ProfileController",
                controllerAs: "model"
            })

            .when("/page-edit", {
                templateUrl: "/views/page/page-edit.view.client.html",
                controller: "EditPageController",
                controllerAs: "model"
            })

            .when("/user/:uid/website/:wid/page/new", {
                templateUrl: "/views/page/page-new.view.client.html",
                controller: "NewPageController",
                controllerAs: "model"
            })

            .when("/user/:uid/website/:wid/page/:pid", {
                templateUrl: "/views/page/page-edit.view.client.html",
                controller: "EditPageController",
                controllerAs: "model"
            })

            .when("/page-list", {
                templateUrl: "/views/page/page-list.view.client.html",
                controller: "ListPageController",
                controllerAs: "model"
            })

            .when("/user/:uid/website/:wid/page", {
                templateUrl: "/views/page/page-list.view.client.html",
                controller: "PageListController",
                controllerAs: "model"
            })

            .when("/page-new", {
                templateUrl: "/views/page/page-new.view.client.html",
                controller: "NewPageController",
                controllerAs: "model"
            })


            .when("/website-new", {
                templateUrl: "/views/website/website-new.view.client.html",
                controller: "NewWebsiteController",
                controllerAs: "model"
            })

            .when("/user/:uid/website/new", {
                templateUrl: "/views/website/website-new.view.client.html",
                controller: "NewWebsiteController",
                controllerAs: "model"
            })

            .when("/website-list", {
                templateUrl: "/views/website/website-list.view.client.html",
                controller: "WebsiteListController",
                controllerAs: "model"
            })

            .when("/user/:uid/website", {
                templateUrl: "/views/website/website-list.view.client.html",
                controller: "WebsiteListController",
                controllerAs: "model"
            })

            .when("/website-edit", {
                templateUrl: "/views/website/website-edit.view.client.html",
                controller: "EditWebsiteController",
                controllerAs: "model"
            })

            .when("/user/:uid/website/:wid", {
                templateUrl: "/views/website/website-edit.view.client.html",
                controller: "EditWebsiteController",
                controllerAs: "model"
            })

            .when("/widget-youtube", {
                templateUrl: "/views/widget/widget-youtube.view.client.html",
                controller: "EditWidgetController",
                controllerAs: "model"

            })

            .when("/widget-choose", {
                templateUrl: "/views/widget/widget-chooser.view.client.html",
                controller: "NewWidgetController",
                controllerAs: "model"
            })

            .when("/user/:uid/website/:wid/page/:pid/widget/new", {
                templateUrl: "/views/widget/widget-chooser.view.client.html",
                controller: "NewWidgetController",
                controllerAs: "model"
            })

            .when("/widget-heading", {
                templateUrl: "/views/widget/widget-heading.view.client.html",
                controller: "EditWidgetController",
                controllerAs: "model"
            })

            .when("/widget-image", {
                templateUrl: "/views/widget/widget-image.view.client.html",
                controller: "EditWidgetController",
                controllerAs: "model"
            })

            .when("/user/:uid/website/:wid/page/:pid/widget", {
                templateUrl: "/views/widget/widget-list.view.client.html",
                controller: "WidgetListController",
                controllerAs: "model"
            })

            .when("/user/:uid/website/:wid/page/:pid/widget/:wgid", {
                templateUrl: "/views/widget/widget-edit.view.client.html",
                controller: "EditWidgetController",
                controllerAs: "model"
            })

            .when("/website/:wid", {
                templateUrl: "/views/website/website-edit.view.client.html"
            })

            .otherwise({
                redirectTo: "/login"
            });

    }
})();