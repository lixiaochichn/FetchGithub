document.addEventListener('DOMContentLoaded', function () {

    fetch('https://api.github.com/users/lixiaochichn')
        .then(function (response) {
            return response.json();
        })
        .then(function (user) {
            // console.log(user);  //log user
            return user;
        })
        .then(function (user) {
            return new Promise(resolve => {

                fetch(user.repos_url) //fetch user
                    .then(function (response) {
                        return response.json();//转成json

                    })
                    .then(function (repos) {
                        user.repos = repos;//增加json user的repos
                        resolve(user);
                    });
            });

        })
        .then(function (user) {
            console.log('q');
            $('.usermessage').append(`<div>ID:${user.id}</div><img src="${user.avatar_url}" alt="">`);
            console.log(user);
            return user;

        })
        .catch(function (error) {
            console.log(error.message);
        });




});