/**
 * Created by: Mayank on 11/5/16
 * Client service for User views
 * Registered app by Angular module name WebAppMaker
 * Using REST architecture
 */

module.exports = function(app)
{
    // data array for widgets services
    var widgets =
    [
        { "_id": "123", "widgetType": "HEADER", "pageId": "321", "size": "2", "text": "GIZMODO"},
        { "_id": "234", "widgetType": "HEADER", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
        { "_id": "345", "widgetType": "IMAGE", "pageId": "321", "width": "100%",
            "url": "http://lorempixel.com/400/200/"},
        { "_id": "456", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"},
        { "_id": "567", "widgetType": "HEADER", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
        { "_id": "678", "widgetType": "YOUTUBE", "pageId": "321", "width": "100%",
            "url": "https://youtu.be/AM2Ivdi9c4E" },
        { "_id": "789", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"}
    ];

    // URL patterns for REST Widget web services
    app.post("/api/page/:pageId/widget", createWidget);
    app.get("/api/page/:pageId/widget", findAllWidgetsForPage);
    app.get("/api/widget/:widgetId", findWidgetById);
    app.put("/api/widget/:widgetId", updateWidget);
    app.delete("/api/widget/:widgetId", deleteWidget);

    // creates a new widget as per the details provided in request body
    function createWidget()
    {
        //todo
    }

    // returns the list of widgets for the pageId from request URL
    function findAllWidgetsForPage()
    {
        //todo
    }

    // returns the widget details for the widgetId from the request URL
    function findWidgetById()
    {
        //todo
    }

    // updates the widget as per the widgetId from request URL
    function updateWidget()
    {
        //todo
    }

    // deletes the widget as per the widgetId from request URL
    function deleteWidget()
    {
        //todo
    }

};
