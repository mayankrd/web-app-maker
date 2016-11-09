/**
 * Created by: Mayank
 * Client service for Website views
 * Registered app by Angular module name WebAppMaker
 */

(function (){
    angular
        .module("WebAppMaker") // Registered app by Angular module name WebAppMaker
        .factory("WidgetService", WidgetService);

    function WidgetService($http)
    {

        // data array containing information about the widgets in pages
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

        // case conversion of fixed filename prefixes
        var filenamePrefixes =
        {
          "HEADER": "heading",
          "HTML": "html",
          "IMAGE": "image",
          "YOUTUBE": "youtube"
        };

        // case conversion of fixed widget types
        var widgetTypes =
         [ "HEADER",
           "IMAGE",
           "HTML",
           "YOUTUBE"
         ];

        // case conversion of fixed widget values
        var defaultWidgetValues =
        {
            "HEADER": {"size":1},
            "IMAGE": {"width": "100%"},
            "YOUTUBE": {"width": "100%"}
        };

        // api to 'widget' view controllers
        var api =
        {
            createWidget: createWidget,
            findWidgetsByPageId: findWidgetsByPageId,
            findWidgetById: findWidgetById,
            updateWidget: updateWidget,
            deleteWidget: deleteWidget,
            getFilenamePrefix: getFilenamePrefix,
            getAllWidgetTypes: getAllWidgetTypes,
            getDefaultWidgetValues: getDefaultWidgetValues
        };

        return api;

        // function to create a new widget, the new widget is added to Widgets data array
        function createWidget(pageId, widget)
        {
            widget.pageId = pageId;
            var newWid;
            do {
                newWid = getRandomInt(0, 1000).toString();  // using auxiliary function to get random int
                if (findWidgetById(newWid) === null)
                {
                    widget._id = newWid;
                    widgets.push(widget);
                    return widget;
                }
            } while(1);
        }

        // return a widget as per the input page id
        function findWidgetsByPageId(pageId) {
            var result = [];
            for (var w in widgets) {
                widget = widgets[w];
                if(parseInt(widget.pageId) === parseInt(pageId)) {
                    result.push(widget);
                }
            }
            return result;
        }

        // returns widget as per its widget id
        function findWidgetById(widgetId) {

            for (var w in widgets) {
                widget = widgets[w];
                if(parseInt(widget._id) === parseInt(widgetId)) {
                    return widget;
                }
            }
            return null;
        }

        // updates the widget with corresponding input widgetId
        function updateWidget(widgetId, widget)
        {
            //todo
        }

        // deletes a widget with corresponding widgetId
        function deleteWidget(widgetId)
        {
            //todo
        }

        /**
         * auxiliary functions for the user client service
         */

        // returns the filename prefix corresponding to input widgetType
        function getFilenamePrefix(widgetType)
        {
            return filenamePrefixes[widgetType];
        }

        // returns all wodget types from 'Widgets' data array
        function getAllWidgetTypes()
        {
            console.log("inside getAllWidgetTypes");
            return widgetTypes;
        }

        // returns a random integer between min and max
        function getRandomInt(min, max)
        {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
        }

        // returns all default widget values
        function getDefaultWidgetValues()
        {
            return defaultWidgetValues;
        }
    }

})();