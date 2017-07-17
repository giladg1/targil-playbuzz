myApp.factory('videoAssets', ['$http', '$q', ($http, $q) => {

    let videoAssets = {
        items: []
    };

    videoAssets.getAllBySource = (filterString) => {
        let deferred = $q.defer();
        const data = { ourFilterQuery: filterString };
        $http.post('/items', data).then((response) => {
            console.log('items from server: ', response);
            angular.copy(response.data, videoAssets.items);
            deferred.resolve(response.data);
        }).catch((error) => {
            console.log('Error while calling server on getAllBySource request: ', error);
            deferred.reject();
        });
        return deferred.promise;
    };

    return videoAssets;

}]);