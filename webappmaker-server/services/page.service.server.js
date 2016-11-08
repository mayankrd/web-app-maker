/**
 * Created by mayank on 11/5/16.
 */
module.exports = function(app) {

    var pages =  [
        { "_id": "321", "name": "Post 1", "websiteId": "456", "description": "Lorem" },
        { "_id": "432", "name": "Post 2", "websiteId": "456", "description": "Lorem" },
        { "_id": "543", "name": "Post 3", "websiteId": "456", "description": "Lorem" }
    ];

    app.post("/api/website/:websiteId/page", createPage);
    app.get("/api/website/:websiteId/page", findAllPagesForWebsite);
    app.get("/api/page/:pageId", findPageById);
    app.put("/api/page/:pageId", updatePage);
    app.delete("/api/page/:pageId", deletePage);
    
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
    
    function findAllPagesForWebsite(req, res)
    {

    }
    
    function findPageById(req, res)
    {
        
    }
    
    function updatePage(req, res)
    {
        
    }
    
    function deletePage(req, res)
    {
        
    }


};