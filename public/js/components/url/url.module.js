angular.module('url.module',[]).component('urlPlayer', {
    templateUrl: './js/components/url/url.html',
    bindings: {
        asset: "<"
    },
    controllerAs: 'ctrl',
    controller: ('urlCtrl', ['$scope', 'errorService', ($scope, errorService) => {

        this.$onInit = () =>{
            console.log('url controller one way binding from parent: ', this.asset);
        };

        $scope.getOnlyRegularUrlVideoSrc = (src) => {
            const haveRegularUrl = src.hasOwnProperty('url');
            if (haveRegularUrl) {
                return src.url
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