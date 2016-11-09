/**
 * Created by: Mayank on 11/5/16
 * Client service for User views
 * Registered app by Angular module name WebAppMaker
 * Using REST architecture
 */

module.exports = function(app)
{
    // data array for user services
    var users =
    [
        {_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonder"  },
        {_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley"  },
        {_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia"  },
        {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi" }
    ];

    // URL patterns for REST User web services
    app.post('/api/user', createUser);
    app.get('/api/user?username=username', findUserByUsername);
    app.get('/api/user?username=username&password=password', findUserByCredentials);

    app.get('/api/user/:uid', findUserById);
    app.put('/api/user/:uid', updateUser);
    app.delete('/api/user/:uid', deleteUser);

    app.delete('/api/user/:uid', unregisterUser);

    app.get('/api/user', findUser);

    // removes the user from Users data set
    function unregisterUser(req, res)
    {
        var uid = req.params.uid;
        for(var u in users) {
            if(users[u]._id == uid) {
                users.splice(u, 1);
            }
        }
        res.send(200);
    }

    // updates the user data as per the request body
    function updateUser(req, res)
    {
        var user = req.body;
        var uid = req.params.uid;
        for(var u in users) {
            if(users[u]._id == uid) {
                users[u] = user;
            }
        }
        console.log(users);
        res.send(200);
    }

    // creates a new user as per the details provided in request body
    function createUser(req, res)
    {
        console.log("createuser at server called");
        var user = req.body;
        var userId;
        // todo to analyze the user id generation
        /*
        do {
            userId = getRandomInt(0, 1000).toString();
            if (findUserByIdLocal(userId) === null)
            {
                user._id = userId;
                users.push(user);
            }
        } while(1);*/

        user._id = 220;
        users.push(user);
        res.send(user);

        /*
        if (user) {
            res.send(user);
            return;
        }
        else {
            res.send('0');
        }*/
    }

    // returns the user as per the userId from request URL
    function findUser(req, res)
    {
        var params = req.params;
        var query = req.query;
        if(query.password && query.username) {
            findUserByCredentials(req, res);
        } else if(query.username) {
            findUserByUsername(req, res);
        }
    }

    // returns the user for the matching username and password from request URL
    function findUserByCredentials(req, res)
    {
        var username = req.query.username;
        var password = req.query.password;
        for(var u in users) {
            if(users[u].username === username &&
                users[u].password === password) {
                res.send(users[u]);
                return;
            }
        }
        res.send('0');
    }

    //  returns the user for the matching username from request URL
    function findUserByUsername(req, res)
    {
        var username = req.query.username;
        for(var u in users) {
            if(users[u].username === username) {
                res.send(users[u]);
                return;
            }
        }
        res.send('0');
    }

    // returns the user as per the userId
    function findUserById(req, res)
    {
        var userId = parseInt(req.params.uid);
        for(var u in users) {
            if(parseInt(users[u]._id) === userId) {
                res.send(users[u]);
                return;
            }
        }
        res.send('0');
    }

    // deletes the user as per given userId
    function deleteUser(userId)
    {
        //todo
    }


    /**
     * auxiliary functions for the page client service
     */

    // returns a random integer between min and max
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    // returns the user by its index id in data array
    function findUserIndexById(userId) {
        for(var i = 0; i < users.length; i++)
        {
            if( users[i]._id === userId)
                return i;
        }
        return -1;
    }

    // return the user with corresponding userId in data array
    function findUserByIdLocal(userId){
        for (var u in users) {
            user = users[u];
            if(parseInt(user._id) === userId) {
                return user;
            }
        }
        return null;
    }

};