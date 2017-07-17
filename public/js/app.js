const myApp = angular.module('videoApp',['main.module']).config(['$sceDelegateProvider', ($sceDelegateProvider) => {

        $sceDelegateProvider.resourceUrlWhitelist([
            'self',
            'https://www.youtube.com/**',
            'https://www.facebook.com/**',
            'http://www.youtube.com/**',
            'http://www.facebook.com/**',
            'http://cdn.playbuzz.com/**'
        ]);
}]);




