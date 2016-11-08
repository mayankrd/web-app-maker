(function (){
    angular
        .module("WebAppMaker")
        .factory("PageService", PageService)

    function PageService($http){

        var pages =  [
            { "_id": "321", "name": "Post 1", "websiteId": "456", "description": "Lorem" },
            { "_id": "432", "name": "Post 2", "websiteId": "456", "description": "Lorem" },
            { "_id": "543", "name": "Post 3", "websiteId": "456", "description": "Lorem" }
        ];

        var api = {
            createPage:createPage,
            findPageByWebsiteId: findPageByWebsiteId,
            findPageById: findPageById,
            updatePage: updatePage,
            deletePage: deletePage
        };

        return api;

        function createPage(websiteId, page)
        {
            var url = "/api/website/" + websiteId + "/page";
            return $http.post(url, page);

           /* page.websiteId = websiteId;
            var newPid;
            do {
                newPid = getRandomInt(0, 1000).toString();
                if (findPageById(newPid) === null)
                {
                    page._id = newPid;
                    pages.push(page);
                    return page;
                }
            }while(1);*/
        }

        function findPageByWebsiteId(websiteId) {
            console.log(websiteId);
            var result = [];
            for (var w in pages) {
                page = pages[w];
                console.log(page);
                if(parseInt(page.websiteId) === parseInt(websiteId)) {
                    result.push(page);
                }
            }
            return result;
        }

        function findPageById(pageId) {
            console.log(pageId);
            for (var p in pages) {
                page = pages[p];

                if(parseInt(page._id) === parseInt(pageId)) {
                    console.log(page);
                    return page;

                }
            }
            return null;
        }

        function updatePage(pageId, page) {
            var pageIndex = findPageIndexById(pageId);
            if(pageIndex === -1)
            {
                return null;
            }
            else
            {
                pages[pageIndex] = page;
                return pages[pageIndex];
            }
        }

        function deletePage(pageId) {
            var pageIndex = findPageIndexById(pageId);
            if(pageIndex === -1)
            {
                return false;
            }
            else
            {
                pages.splice(pageIndex, 1);
                return true;
            }
        }

        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
        }

        function findPageIndexById(pageId) {
            for(var i = 0; i < pages.length; i++)
            {
                if( pages[i]._id === pageId)
                    return i;
            }
            return -1;
        }
    }

})();