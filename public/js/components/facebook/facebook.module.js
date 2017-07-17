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
            const haveRegularUrl = src.hasOwnProperty('url');
            const haveSource = src.hasOwnProperty('source');
            if (haveRegularUrl) {
                return src.url
            } else if (haveSource) {
                return getSource(src)
            } else {
                return ''
            }
        };

        const getSource = (src) => {
            switch (src.source) {
                case 'youtube':
                    return 'http://www.youtube.com/embed/' + src.videoId;
                    break;
                case 'facebook':
                    return 'https://www.facebook.com/facebook/videos/' + src.videoId;
                    break;
                default:
                    return '';
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

