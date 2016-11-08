(function() {
    angular
        .module("WebAppMaker")
        .controller("EditPageController", EditPageController)
        .controller("NewPageController", NewPageController)
        .controller("PageListController", PageListController);

    function EditPageController($routeParams, PageService, $location) {
        var vm = this;
        var userId = $routeParams.uid;
        var pageId = $routeParams.pid;
        var websiteId = $routeParams.wid;
        var page = PageService.findPageById(pageId);
        function init()
        {
            vm.page = page;
            vm.userId = userId;
            vm.websiteId = websiteId;
            vm.pageId = pageId;
            vm.updatePage = updatePage;
            vm.deletePage = deletePage;
        }
        init();

        function updatePage()
        {
            PageService.updatePage(pageId, page);
            $location.url("/user/"+userId+"/website/"+websiteId+"/page");
        }

        function deletePage()
        {
            PageService.deletePage(pageId);
            $location.url("/user/"+userId+"/website/"+websiteId+"/page");
        }

    }

    function NewPageController($routeParams, PageService, $location) {
        var vm = this;
        var userId = $routeParams.uid;
        var websiteId = $routeParams.wid;

        function init()
        {
            vm.createPage = createPage;
            vm.userId = userId;
            vm.websiteId = websiteId;
        }
        init();

        function createPage(page)
        {
            PageService.createPage(websiteId, page);
            $location.url("/user/"+userId+"/website/"+websiteId+"/page");

        }
    }

    function PageListController($routeParams, PageService) {
        var vm = this;
        var userId = $routeParams.uid;
        var websiteId = $routeParams.wid;
        var pages = PageService.findPageByWebsiteId(websiteId);
        vm.pages = pages;
        vm.userId = userId;
        vm.websiteId = websiteId;
    }
})();
