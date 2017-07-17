myApp.factory('errorService', [ () => {

    let errorService = {
        message: ''
    };

    errorService.getErrorMessage = (err) => {
        switch (err) {
            case 'youtube':
                return 'Youtube video is missing';
                break;
            case 'facebook':
                return 'Facebook video post is missing';
                break;
            case 'url':
                return 'URL data is missing';
                break;
            default:
                return '';
        }
    };

    return errorService;

}]);