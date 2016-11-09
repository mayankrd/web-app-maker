/**
 * Created by: Mayank
 * Client service for User views
 * Registered app by Angular module name WebAppMaker
 * Using REST architecture
 */

module.exports = function(app)
{
    app.get("/api/test", findAllMessages);
    app.post("/api/test", createMessage);
    app.delete("/api/test/:id", deleteMessage);

    // local machine connection string for MongoDB
    var connectionString = 'mongodb://127.0.0.1:27017/test';

    if(process.env.MLAB_USERNAME)
    {
        if(process.env.MLAB_USERNAME)
        {
            connectionString = process.env.OPENSHIFT_MONGODB_DB_USERNAME + ":" +
                process.env.OPENSHIFT_MONGODB_DB_PASSWORD + "@" +
                process.env.OPENSHIFT_MONGODB_DB_HOST + ':' +
                process.env.OPENSHIFT_MONGODB_DB_PORT + '/' +
                process.env.OPENSHIFT_APP_NAME;
        }

        // connection string for remote mLab instance of MongoDB
        connectionString = 'mongodb://mayank:mayank@ds033076.mlab.com:33076/webdev-mayank';
    }

    // adding mongoose for manipulating Mongo DB
    var mongoose = require("mongoose");
    mongoose.connect(connectionString);

    // schema for database
    var TestSchema = mongoose.Schema({ message: String });

    var TestModel = mongoose.model("TestModel", TestSchema);

    // returns all the messages from DB
    function findAllMessages(req, res)
    {
        TestModel
            .find()
            .then(
                function(tests) {
                    res.json(tests);
                },
                function(err) {
                    res.status(400).send(err);
                }
            );
    }

    // writes new messages to DB
    function createMessage(req, res)
    {
        TestModel
            .create(req.body)
            .then(
                function(test) {
                    res.json(test);
                },
                function(err) {
                    res.status(400).send(err);
                }
            );
    }

    // deletes an existing message from DB
    function deleteMessage(req, res)
    {
        TestModel
            .remove({_id: req.params.id})
            .then(
                function(result) {
                    res.json(result);
                },
                function(err) {
                    res.status(400).send(err);
                }
            );
    }
};
