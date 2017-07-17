myApp.filter('viewOrder', () => {
    return function(views) {
        views = views.toString();
        if (views.length >= 6) {
            let million = views.charAt(6);
            let millionRest = views.charAt(5);
            return million + '.' + millionRest + 'M views'
        } else {
            // if less than 6 digit, we do not want to display '0.0M views' so the real number will be better choice
            return views + ' views'
        }
    }
})
