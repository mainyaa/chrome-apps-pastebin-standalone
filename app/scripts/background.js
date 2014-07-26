(function(){
    'use strict';

    chrome.app.runtime.onLaunched.addListener(function() {
        var screenWidth = screen.availWidth;
        var screenHeight = screen.availHeight;
        var width = 1280;
        var height = 800;
        chrome.app.window.create('main.html', {
            id: 'pastebin',
            minWidth: 1200,
            minHeight: 400,
            width: width,
            height: height,
            left: Math.floor((screenWidth - width) / 2),
            top: Math.floor((screenHeight - height) / 2)
        });
    });
}).call(this);

