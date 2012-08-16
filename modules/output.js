KISSY.add('modules/output', function (S) {
    var css = 'body{cursor: pointer}';

    return function () {
        S.one('#r-output').on('click', function(e) {
            this.href = img;
            //this.href = 'data:text/css;charset=utf-8,' + encodeURIComponent(css);
        });
    };
});
