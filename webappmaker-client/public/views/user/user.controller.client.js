/**
 * Created by mayank on 10/17/16.
 */

(function() {
    angular
        .module("WebAppMaker")
        .controller("LoginController", LoginController)
        .controller("RegisterController", RegisterController)
        .controller("ProfileController", ProfileController);

    function LoginController($location, UserService) {

        var vm = this;

        function init()
        {
            vm.login = login;
        }
        init();

        function login(username, password)
        {
            var promise= UserService.findUsersByCredentials(username, password);

            promise.success(function(user){
                if(user === '0') {
                    vm.alert = "Unable to login";
                } else {
                    console.log("inside login controller "+user.username);
                    $location.url("/user/" + user._id);
                }
            });
        }
    }

    function RegisterController($routeParams, $location, UserService)
    {
        var vm = this;

        function init()
        {
            vm.registerUser = registerUser;
        }
        init();

        function registerUser(user)
        {
            var promise = UserService.createUser(user);

            promise.success(function(updatedUser) {

                console.log(updatedUser);
                if (updatedUser === '0') {
                    vm.alert = "Couldn't create user";
                } else {
                    $location.url("/user/" + updatedUser._id);
                }
            });
        };
    }

    function ProfileController($routeParams, $location, UserService)
    {
        var vm = this;
        var userId = parseInt($routeParams.uid);
        vm.userId = userId;
        vm.updateProfile = updateProfile;
        console.log(userId);

        function init()
        {
            UserService.findUserById(userId)
                .success(function(user) {
                    if (user != '0') {
                        vm.user = user;
                        console.log(user);
                    }
                })
                .error (function() {
                    vm.alert = "Could not retrieve user";
                });
        }
        init();

        function updateProfile()
        {
            var promise = UserService.updateUser(userId, vm.user);
            promise.success(function(user){
                if(user === '0') {
                    vm.alert = "Unable to update user";
                } else {
                    console.log("updated user : "+user);
                    $location.url("/user/"+vm.userId);
                }
            });
        }
/*
        function updateProfile()
        {
            UserService.updateUser(user);
            $location.url("/user/"+vm.userId);
            console.log(user);
            //$location.url("/user/" + vm.userId + "/website");
        }*/
    };

})();

