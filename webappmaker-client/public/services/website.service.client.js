/**
 * Created by: Mayank
 * Client service for Website views
 * Registered app by Angular module name WebAppMaker
 */

(function () {
    angular
        .module("WebAppMaker") // Registered app by Angular module name WebAppMaker
        .factory("WebsiteService", WebsiteService);

    function WebsiteService($http)
    {
        // data array containing information about the websites which users hold
        var websites =
        [
            { "_id": "123", "name": "Facebook",    "developerId": "456", "description": "Lorem" },
            { "_id": "123", "name": "Facebook",    "developerId": "456", "description": "Lorem" },
            { "_id": "234", "name": "Tweeter",     "developerId": "456", "description": "Lorem" },
            { "_id": "456", "name": "Gizmodo",     "developerId": "456", "description": "Lorem" },
            { "_id": "567", "name": "Tic Tac Toe", "developerId": "123", "description": "Lorem" },
            { "_id": "678", "name": "Checkers",    "developerId": "123", "description": "Lorem" },
            { "_id": "789", "name": "Chess",       "developerId": "234", "description": "Lorem" }
        ];

        // api to 'website' view controllers
        var api =
        {
            createWebsite: createWebsite,
            findWebsitesByUser: findWebsitesByUser,
            findWebsiteById: findWebsiteById,
            updateWebsite: updateWebsite,
            deleteWebsite: deleteWebsite
        };

        return api;

        // function to create a new website, the new website is added to Websites data
        function createWebsite(userId, website)
        {
            var url = '/api/user/'+userId+'/website';
            return $http.post(url, website);
        }

        // returns the websites for the matching userId in the data
        function findWebsitesByUser(userId)
        {
            var url = '/api/user/'+userId+'/website';
            return $http.get(url);

        }

        // returns the website for the matching websiteId
        function findWebsiteById(websiteId)
        {
            var url = '/api/website/'+websiteId;
            return $http.get(url);
        }

        // updates the websites data for the input websiteId
        function updateWebsite(websiteId, website)
        {
            var url = '/api/website/'+websiteId;
            return $http.put(url, website);
        }

        // deletes the website from the Websites array for the matching websiteId
        function deleteWebsite(websiteId)
        {
            var url = '/api/website/'+websiteId;
            return $http.delete(url);
        }

    }

})();