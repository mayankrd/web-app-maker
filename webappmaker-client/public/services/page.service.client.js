/**
 * Created by: Mayank
 * Client service for Pages view
 * Registered app by Angular module name WebAppMaker
 */

(function (){
    angular
        .module("WebAppMaker") // Registered app by Angular module name WebAppMaker
        .factory("PageService", PageService)

    function PageService($http)
    {
        // data array
        var pages =  [
            { "_id": "321", "name": "Post 1", "websiteId": "456", "description": "Lorem" },
            { "_id": "432", "name": "Post 2", "websiteId": "456", "description": "Lorem" },
            { "_id": "543", "name": "Post 3", "websiteId": "456", "description": "Lorem" }
        ];

        // api to Page controllers
        var api = {
            createPage:createPage,
            findPageByWebsiteId: findPageByWebsiteId,
            findPageById: findPageById,
            updatePage: updatePage,
            deletePage: deletePage
        };

        return api;

        // function to create new pages, this function will make an entry into the data arrray
        function createPage(websiteId, page)
        {
            var url = "/api/website/" + websiteId + "/page";
            return $http.post(url, page);
        }

        // function to find pages corresponding to website ID
        function findPageByWebsiteId(websiteId)
        {
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

        // returns the Page details by fetching data from Pages data as per input pageId
        function findPageById(pageId)
        {
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

        // updates the current data for the page corresponding pageId
        function updatePage(pageId, page)
        {
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

        // deletes the data from pages array corresponding to pageId
        function deletePage(pageId)
        {
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

        /**
         * auxiliary functions for the page client service
         */

        // returns a random integer between min and max
        function getRandomInt(min, max)
        {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
        }

        // returns a page's index in pages array as per the input pageId
        function findPageIndexById(pageId)
        {
            for(var i = 0; i < pages.length; i++)
            {
                if( pages[i]._id === pageId)
                    return i;
            }
            return -1;
        }
    }

})();