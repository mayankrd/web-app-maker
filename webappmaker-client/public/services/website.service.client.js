(function (){
    angular
        .module("WebAppMaker")
        .factory("WebsiteService", WebsiteService)

    function WebsiteService($http){

        var websites =   [
            { "_id": "123", "name": "Facebook",    "developerId": "456", "description": "Lorem" },
            { "_id": "123", "name": "Facebook",    "developerId": "456", "description": "Lorem" },
            { "_id": "234", "name": "Tweeter",     "developerId": "456", "description": "Lorem" },
            { "_id": "456", "name": "Gizmodo",     "developerId": "456", "description": "Lorem" },
            { "_id": "567", "name": "Tic Tac Toe", "developerId": "123", "description": "Lorem" },
            { "_id": "678", "name": "Checkers",    "developerId": "123", "description": "Lorem" },
            { "_id": "789", "name": "Chess",       "developerId": "234", "description": "Lorem" }
        ];

        var api = {
            createWebsite: createWebsite,
            findWebsitesByUser: findWebsitesByUser,
            findWebsiteById: findWebsiteById,
            updateWebsite: updateWebsite,
            deleteWebsite: deleteWebsite
        };

        return api;

        function createWebsite(userId, website)
        {
            var url = '/api/user/'+userId+'/website';
            return $http.post(url, website);

            /*website.developerId = userId;
            var newWid;
            do {
                newWid = getRandomInt(0, 1000).toString();
                if (findWebsiteById(newWid) === null)
                {
                    website._id = newWid;
                    websites.push(website);
                    for(i = 0; i < websites.length; i++)
                        console.log(websites[i]);
                    return website;
                }
            }while(1);*/
        }

        function findWebsitesByUser(userId)
        {
            var url = '/api/user/'+userId+'/website';
            return $http.get(url);

        }

        function findWebsiteById(websiteId)
        {
            var url = '/api/website/'+websiteId;
            return $http.get(url);

            /*
            console.log(websiteId);
            for (var w in websites) {
                website = websites[w];
                console.log(website);
                if(parseInt(website._id) === parseInt(websiteId)) {
                    return website;
                }
            }
            return null;*/
        }

        function updateWebsite(websiteId, website)
        {
            var url = '/api/website/'+websiteId;
            return $http.put(url, website);

           /* var webIndex = findWebIndexById(websiteId);
            if( webIndex === -1)
            {
                return null;
            }
            else
            {
                websites[webIndex] = website;
                return websites[webIndex];
            }*/
        }

        function deleteWebsite(websiteId)
        {
            var url = '/api/website/'+websiteId;
            return $http.delete(url);


           /* var webIndex = findWebIndexById(websiteId);
            if(webIndex === -1)
            {
                return false;
            }
            else
            {
                websites.splice(webIndex, 1);
                return true;
            }*/
        }

        /*function findWebIndexById(websiteId) {
            for(var i = 0; i < websites.length; i++)
            {
                if( websites[i]._id === websiteId)
                    return i;
            }
            return -1;
        }

        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
        }*/
    }

})();