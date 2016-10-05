module.exports = function(app)
{
    app.get("/api/test", findAllMessages);
    app.post("/api/test", createMessage);
    app.delete("/api/test/:id", deleteMessage);

    var connectionString = 'mongodb://127.0.0.1:27017/test';

    //'mongodb://username:password@ds033076.mlab.com:33076/webdev-mayank';

    if(process.env.MLAB_USERNAME) {
        /*connectionString = "mongodb://"+ process.env.MLAB_USERNAME + ":" +
         process.env.MLAB_PASSWORD + "@" +
         process.env.OPENSHIFT_MONGODB_DB_HOST + ':' +
         process.env.OPENSHIFT_MONGODB_DB_PORT + '/' +
         process.env.OPENSHIFT_APP_NAME;*/


        if(process.env.MLAB_USERNAME) {
            connectionString = process.env.OPENSHIFT_MONGODB_DB_USERNAME + ":" +
                process.env.OPENSHIFT_MONGODB_DB_PASSWORD + "@" +
                process.env.OPENSHIFT_MONGODB_DB_HOST + ':' +
                process.env.OPENSHIFT_MONGODB_DB_PORT + '/' +
                process.env.OPENSHIFT_APP_NAME;
        }

        connectionString = 'mongodb://mayank:mayank@ds033076.mlab.com:33076/webdev-mayank';
    }

    var mongoose = require("mongoose");
    mongoose.connect(connectionString);

    var TestSchema = mongoose.Schema({
        message: String
    });

    var TestModel = mongoose.model("TestModel", TestSchema);

    function findAllMessages(req, res) {
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

    function createMessage(req, res) {
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

    function deleteMessage(req, res) {
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
