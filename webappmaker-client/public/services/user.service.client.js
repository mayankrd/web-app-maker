(function (){
    angular
        .module("WebAppMaker")
        .factory("UserService", UserService)

    function UserService($http){

        var users =   [
                        {_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonder"  },
                        {_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley"  },
                        {_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia"  },
                        {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi" }
                    ];

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

        function findUserByCredentials(username, password){

            var url = '/api/user?username='+username+'&password='+password;
            return  $http.get(url);
        }

        function createUser(user)
        {
            var url = '/api/user';
            return $http.post(url, user);
        }

        function findUserById(userId)
        {
            var url = '/api/user/' + userId;
            console.log(url);
            return $http.get(url);
        }

           /* for (var u in users) {
                user = users[u];
                if(parseInt(user._id) === userId) {
                    return user;
                }
            }
            return null;
        */

        function findUserByUsername(username){

        }


        function updateUser(userId, user)
        {

            var url = '/api/user/' + userId;
            return $http.put(url, user);

            /*var userIndex = findUserIndexById(userId);
            if( userIndex === -1)
            {
                return null;
            }
            else
            {
                users[userIndex] = user;
                return users[userIndex];
            }*/
        }

        function deleteUser(userId){

        }

        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
        }

        function findUserIndexById(userId) {
            for(var i = 0; i < users.length; i++)
            {
                if( users[i]._id === userId)
                    return i;
            }
            return -1;
        }

    }

})();