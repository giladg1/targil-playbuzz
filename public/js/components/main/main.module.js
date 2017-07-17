angular.module('main.module',['youtube.module', 'facebook.module', 'url.module']).component('mainView', {
        templateUrl: './js/components/main/main.html',
        controller: ('mainCtrl', ['$scope', 'videoAssets', 'errorService', ($scope, videoAssets, errorService) => {
            $scope.ourItems = {
                items: videoAssets.items
            };

            $scope.filterItems = {
                none: 'none',
                youtube: 'youtube',
                facebook: 'facebook',
                url: 'url'
            };

            $scope.data = {
                filter: $scope.filterItems.none
            };

            $scope.loaderPng = false;

            $scope.getItems = (filter) => {
                // clean old search items
                $scope.ourItems.items = [];
                // load png loader
                $scope.loaderPng = true;
                console.log(`filter by: ${filter}`);
                filter = filter.toLowerCase();
                videoAssets.getAllBySource(filter).then(x => {
                    $scope.loaderPng = false;
                    $scope.ourItems.items = videoAssets.items;
                })

            };

            $scope.whatSource = (item , type) => {
                const hasSource = item.hasOwnProperty('source');
                if (!hasSource) { return false }
                if (item.source === type) { return true } else {
                    return false
                }
            }
        }])
    });

