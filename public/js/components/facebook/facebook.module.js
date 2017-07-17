angular.module('facebook.module',[]).component('facebookPlayer', {
    templateUrl: './js/components/facebook/facebook.html',
    bindings: {
        asset: "<"
    },
    controllerAs: 'ctrl',
    controller: ('facebookCtrl', ['$scope', 'errorService', ($scope, errorService) => {

        this.$onInit = () =>{
            console.log('facebook controller one way binding from parent: ', this.asset);
        };

        $scope.getIframeSrc = (src) => {
            const videoId = src.hasOwnProperty('videoId');
            if (videoId) {
                return 'https://www.facebook.com/facebook/videos/' + src.videoId
            } else {
                return ''
            }
        };

        $scope.checkForError = (item) =>{
            const title = item.hasOwnProperty('title');
            const views = item.hasOwnProperty('views');
            const source = item.hasOwnProperty('source');
            return !title || !views || !source
        };

        $scope.errorMessage = (item) => {
            const source = item.hasOwnProperty('source');
            if (source) {
                return errorService.getErrorMessage(item.source);
            }
        }

    }])
});

