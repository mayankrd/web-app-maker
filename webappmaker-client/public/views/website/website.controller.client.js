/**
 * Created by mayank on 10/17/16.
 */
(function() {
    angular
        .module("WebAppMaker")
        .controller("EditWebsiteController", EditWebsiteController)
        .controller("NewWebsiteController", NewWebsiteController)
        .controller("WebsiteListController", WebsiteListController);

        function EditWebsiteController($routeParams, WebsiteService, $location)
        {
            var vm = this;
            var userId = $routeParams.uid;
            var websiteId = $routeParams.wid;
            vm.userId = userId;
            vm.websiteId = websiteId;
            vm.updateWebsite = updateWebsite;
            vm.deleteWebsite = deleteWebsite;

            function init()
            {
                var promise = WebsiteService.findWebsiteById(websiteId);
                promise
                    .success(function(website) {
                        if(website != '0')
                        {
                            vm.website = website;
                        }
                    })
                    .error (function() {
                        vm.alert = "Could not retrieve websites list";
                    });

                promise = WebsiteService.findWebsitesByUser(userId);
                promise
                    .success(function (websites) {
                        if(websites != '0')
                        {
                            vm.websites = websites;
                        }
                    })
                    .error (function() {
                        vm.alert = "Could not retrieve website";
                    });

            }

            init();

/*            console.log(websites);
            console.log(website);


            var website = WebsiteService.findWebsiteById(websiteId);
            var websites = WebsiteService.findWebsitesByUser(userId);

            console.log(websites);
            console.log(website);

            function init()
            {
                vm.websites = websites;
                vm.website = website;
                vm.userId = userId;
                vm.websiteId = websiteId;
                vm.updateWebsite = updateWebsite;
                vm.deleteWebsite = deleteWebsite;
            }
            init();*/

            function updateWebsite(website)
            {
                WebsiteService.updateWebsite(vm.websiteId, website);
                $location.url("/user/" + vm.userId + "/website");
            }

            function deleteWebsite()
            {
                WebsiteService.deleteWebsite(vm.websiteId);
                $location.url("/user/" + vm.userId + "/website");
            }

        }

        function WebsiteListController($routeParams, WebsiteService)
        {
            var vm = this;
            var userId = $routeParams.uid;
            vm.userId = userId;

            function init()
            {
                var promise = WebsiteService.findWebsitesByUser(userId);
                promise
                    .success(function(websites) {
                        if (websites != '0') {
                            vm.websites = websites;
                         }
                        })
                    .error (function(){
                        vm.alert = "Could not retrieve websites list";
                    })
            }
            init();

  /*          var websites = WebsiteService.findWebsitesByUser(userId);
            vm.websites = websites;
            vm.userId = userId;
            for(i = 0; i < websites.length; i++)
            {
                console.log(websites[i].name);
            }*/
        }

        function NewWebsiteController($routeParams, $location, WebsiteService)
        {
            var vm = this;
            var userId = $routeParams.uid;
            var websites = WebsiteService.findWebsitesByUser(userId);
            vm.userId = userId;
            vm.createWebsite = createWebsite;

            function init()
            {
                var promise = WebsiteService.findWebsitesByUser(userId);
                promise
                    .success(function(websites) {
                        if (websites != '0') {
                            vm.websites = websites;
                        }
                    })
                    .error (function(){
                        vm.alert = "Could not retrieve websites list";
                    })
            }

            init();

/*            function init()
            {
                vm.websites = websites;
                vm.userId = userId;
                vm.createWebsite = createWebsite;
            }
            init();*/

            function createWebsite(website)
            {
                WebsiteService.createWebsite(vm.userId, website);
                console.log("website created !")
                $location.url("/user/" + vm.userId + "/website");
            }
        }
})();