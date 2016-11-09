/**
 * Created by: Mayank on 11/5/16
 * Client service for User views
 * Registered app by Angular module name WebAppMaker
 * Using REST architecture
 */

module.exports = function(app)
{
    // data array for page services
    var pages =
    [
        { "_id": "321", "name": "Post 1", "websiteId": "456", "description": "Lorem" },
        { "_id": "432", "name": "Post 2", "websiteId": "456", "description": "Lorem" },
        { "_id": "543", "name": "Post 3", "websiteId": "456", "description": "Lorem" }
    ];

    // URL patterns for REST Page web services
    app.post("/api/website/:websiteId/page", createPage);
    app.get("/api/website/:websiteId/page", findAllPagesForWebsite);
    app.get("/api/page/:pageId", findPageById);
    app.put("/api/page/:pageId", updatePage);
    app.delete("/api/page/:pageId", deletePage);

    // creates a new page as per the details provided in request body
    function createPage(req, res)
    {
        var page = req.body;
        page.websiteId = req.params.websiteId;
        var newPid;

        /*do {
            newPid = getRandomInt(0, 1000).toString();
            if (findPageById(newPid) === null)
            {
                page._id = newPid;
                pages.push(page);
                return page;
            }
        }while(1);*/

        page._id = newPid;
        pages.push(page);
        res.json(pages);

    }

    // returns all pages as an array for the matching websites
    function findAllPagesForWebsite(req, res)
    {
        //todo
    }

    // returns page as per pageId
    function findPageById(req, res)
    {
        //todo
    }

    // updates the page data as per the request body
    function updatePage(req, res)
    {
        //todo
    }

    // deletes the page as per the pageId received from request URL
    function deletePage(req, res)
    {
        //todo
    }

};