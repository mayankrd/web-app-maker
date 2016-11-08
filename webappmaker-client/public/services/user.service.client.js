/**
 * Created by: Mayank
 * Client service for User views
 * Registered app by Angular module name WebAppMaker
 */

(function (){
    angular
        .module("WebAppMaker") // Registered app by Angular module name WebAppMaker
        .factory("UserService", UserService)

    // forming REST Request using Express $http
    function UserService($http)
    {
        var users =   [
                        {_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonder"  },
                        {_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley"  },
                        {_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia"  },
                        {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi" }
                    ];

        // api to User controllers
        var api = {
            findUsersByCredentials: findUserByCredentials,
            createUser: createUser,
            findUserById: findUserById,
            findUserByUsername: findUserByUsername,
            findUserByCredentials: findUserByCredentials,
            updateUser: updateUser,
            deleteUser: deleteUser
        };

        return api;

        // return a user from Users data for the matching credentials
        function findUserByCredentials(username, password)
        {

            var url = '/api/user?username='+username+'&password='+password;
            return  $http.get(url);
        }

        // function to create a new user, the new user is added to Users data
        function createUser(user)
        {
            var url = '/api/user';
            return $http.post(url, user);
        }

        // returns user data for the matching userId
        function findUserById(userId)
        {
            var url = '/api/user/' + userId;
            console.log(url);
            return $http.get(url);
        }

        // returns the user for the matching username
        function findUserByUsername(username)
        {
            //todo
        }

        // updates the user with associated userId
        function updateUser(userId, user)
        {
            var url = '/api/user/' + userId;
            return $http.put(url, user);
        }

        // deletes the user from the Users data
        function deleteUser(userId)
        {
            //todo
        }


        /**
         * auxiliary functions for the user client service
         */

        // returns a random integer between min and max
        function getRandomInt(min, max)
        {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
        }

        // returns a page's index in pages array as per the input pageId
        function findUserIndexById(userId)
        {
            for(var i = 0; i < users.length; i++)
            {
                if( users[i]._id === userId)
                    return i;
            }
            return -1;
        }

    }

})();