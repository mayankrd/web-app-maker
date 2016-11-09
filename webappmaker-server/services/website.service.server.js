/**
 * Created by: Mayank on 11/5/16
 * Client service for User views
 * Registered app by Angular module name WebAppMaker
 * Using REST architecture
 */

module.exports = function(app)
{
    // data array for website services
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

    // URL patterns for REST Website web services
    app.post("/api/user/:userId/website", createWebsite);
    app.get("/api/user/:userId/website", findAllWebsitesForUser);
    app.get("/api/website/:websiteId", findWebsiteById);
    app.put('/api/website/:websiteId', updateWebsite);
    app.delete("/api/website/:websiteId", deleteWebsite);


    // creates a new website as per the details provided in request body
    function createWebsite(req, res)
    {
        var newWid;
        var website = req.body;
        website.developerId = req.params.userId;

        // todo to analyze the website id generation
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

    // returns the array websites corresponding to the user
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

    // returns the website as per the websiteId from request URL
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

    // updates the website as per data present in request body
    function updateWebsite(req, res)
    {
        var wid = req.params.websiteId;
        var website = req.body;
        var webIndex = findWebIndexById(wid);
        if( webIndex === -1)
        {
            res.send('0');

        }
        else
        {
            websites[webIndex] = website;
            res.json(websites[webIndex]);

        }
    }

    // deletes a website as per the websiteId in request URL
    function deleteWebsite(req, res)
    {
        var wid = req.params.websiteId;
        var webIndex = findWebIndexById(wid);
        if(webIndex === -1)
        {
            res.send('0');

        }
        else
        {
            websites.splice(webIndex, 1);
            res.send(200);

        }
    }

    /**
     * auxiliary functions for the page client service
     */

    // returns the website by its index in data array
    function findWebIndexById(websiteId)
    {
        for(var i = 0; i < websites.length; i++)
        {
            if( websites[i]._id === websiteId)
                return i;
        }
        return -1;
    }

    // returns a random integer between min and max
    function getRandomInt(min, max)
    {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

};