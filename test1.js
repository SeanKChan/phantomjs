"use strict"

var webPage = require('webpage'),
  page = webPage.create();

page.viewportSize = {
  width: 375,
  height: 667
};

page.settings.userAgent = 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1';


page.open('https://www.zybang.com/question/f9bbb20a52c75392b099f45ff48bddaf.html?matchType=3', function (status) {
  if (status === 'success') {
    page.includeJs('http://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js', function () {
      page.evaluate(function () {
        console.log($('.qb-content').text());
      })
    })
    page.render('zybang.png', {
      format: 'png',
      quality: 100
    });
  }
})

page.onResourceRequested = function (requestData, networkRequest) {
  console.log('requestData: #' + requestData.id + ', ' + JSON.stringify(requestData) + '\n\n\n-----------request---------------');
  // networkRequest.changeUrl('http://www.baidu.com/');
}

page.onResourceReceived = function (responseData) {
  console.log('responseData: #' + JSON.stringify(responseData) + '\n\n\n------------response----------------');
}

page.onConsoleMessage = function (msg, lineNum, sourceId) {
  console.log('CONSOLE: ' + msg + 'from line #' + lineNum + ' in ' + sourceId);
}