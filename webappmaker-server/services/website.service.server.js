/**
 * Created by mayank on 11/5/16.
 */

module.exports = function(app) {

    var websites =   [
        { "_id": "123", "name": "Facebook",    "developerId": "456", "description": "Lorem" },
        { "_id": "123", "name": "Facebook",    "developerId": "456", "description": "Lorem" },
        { "_id": "234", "name": "Tweeter",     "developerId": "456", "description": "Lorem" },
        { "_id": "456", "name": "Gizmodo",     "developerId": "456", "description": "Lorem" },
        { "_id": "567", "name": "Tic Tac Toe", "developerId": "123", "description": "Lorem" },
        { "_id": "678", "name": "Checkers",    "developerId": "123", "description": "Lorem" },
        { "_id": "789", "name": "Chess",       "developerId": "234", "description": "Lorem" }
    ];


    app.post("/api/user/:userId/website", createWebsite);
    app.get("/api/user/:userId/website", findAllWebsitesForUser);
    app.get("/api/website/:websiteId", findWebsiteById);
    app.put('/api/website/:websiteId', updateWebsite);
    app.delete("/api/website/:websiteId", deleteWebsite);


    function createWebsite(req, res)
    {
        var newWid;
        var website = req.body;
        website.developerId = req.params.userId;

        /*do {
            newWid = getRandomInt(0, 1000).toString();
            existingWid = function () {

                for (var w in websites) {
                website = websites[w];
                console.log(website);
                if(parseInt(website._id) != parseInt(wid))
                {
                    return null;
                }
              }
            };

            if (existingWid === null)
            {
                website._id = newWid;
                //websites.push(website);
                for(i = 0; i < websites.length; i++)
                    console.log(websites[i]);
                return;
            }
        }while(1);*/

        website._id = 500;
        websites.push(website);
        res.json(websites);
    }

    function findAllWebsitesForUser(req, res)
    {
        var uid = req.params.userId;
        var result = [];
        for(var w in websites) {
            if(websites[w].developerId == uid) {
                result.push(websites[w]);
            }
        }
        res.json(result);
    }

    function findWebsiteById(req, res)
    {
        var wid = req.params.websiteId;
        for (var w in websites) {
            website = websites[w];
            console.log(website);
            if(parseInt(website._id) === parseInt(wid))
            {
                res.json(website);
            }
        }
        res.send('0');
    }

    function updateWebsite(req, res)
    {
        var wid = req.params.websiteId;
        var website = req.body;
        var webIndex = findWebIndexById(wid);
        if( webIndex === -1)
        {
            res.send('0');
            return;
        }
        else
        {
            websites[webIndex] = website;
            res.json(websites[webIndex]);
            return;
        }
    }

    function deleteWebsite(req, res)
    {
        var wid = req.params.websiteId;
        var webIndex = findWebIndexById(wid);
        if(webIndex === -1)
        {
            res.send('0');
            return;
        }
        else
        {
            websites.splice(webIndex, 1);
            res.send(200);
            return;
        }
    }


    // auxiliary functions

    function findWebIndexById(websiteId) {
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
    }


};