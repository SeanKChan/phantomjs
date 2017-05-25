"use strict"

var page = require('webpage').create(),
  system = require('system');

var address,
  t;

if (system.args.length === 1) {
  console.log('Usage: index.js <some URL>');
  phantom.exit();
}

t = Date.now();
address = system.args[1];

page.viewportSize = {
  width: 375,
  height: 667
};

page.settings.userAgent = 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1';

page.open(address, function (status) {
  if (status === 'success') {
    t = Date.now() - t;
    console.log('Loading ' + system.args[1]);
    console.log('Loading time ' + t + ' msec');
    page.render('zybang.png', {
      format: 'png',
      quality: 50
    });
    console.log('render ended');
    phantom.exit();
  }
})

page.onResourceRequested = function (requestData, networkRequest) {
  // console.log('requestData: #' + requestData.id + ', ' + JSON.stringify(requestData) + '\n\n\n-----------request---------------');
  // networkRequest.changeUrl('http://www.baidu.com/');
}

page.onResourceReceived = function (responseData) {
  // console.log('responseData: #' + JSON.stringify(responseData) + '\n\n\n------------response----------------');
}

page.onConsoleMessage = function (msg, lineNum, sourceId) {
  console.log('CONSOLE: ' + msg + 'from line #' + lineNum + ' in ' + sourceId);
}