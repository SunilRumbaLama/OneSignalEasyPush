// load all node modules
var http = require('http');
var appId = '';
var oneSignalAuthorization = '';

function setCredentials(oneSignalAuthorizationKey, appIdkey) {
  oneSignalAuthorization = oneSignalAuthorizationKey;
  appId = appIdkey;
}

function pushMessage(userId, pushId, senderName) {

  var sendMessage = function (data) {
    var headers = {
      "Content-Type": "application/json; charset=utf-8",
      "Authorization": "Basic " + oneSignalAuthorization
    };

    var options = {
      host: "onesignal.com",
      port: 443,
      path: "/api/v1/notifications",
      method: "POST",
      headers: headers
    };

    var https = require('https');
    var req = https.request(options, function (res) {
      res.on('data', function (data) {
        console.log("Response:");
        var one_signal_resp = JSON.parse(data);
        console.log(JSON.parse(data));
      });
    });


    req.on('error', function (e) {
      response.json({
        error: e,
        message: 'error from onesignal'
      });
      console.log("ERROR:");
      console.log(e);
    });

    req.write(JSON.stringify(data));
    req.end();
  };

  var message = {
    app_id: appId,
    contents: {
      'en': senderName + ' sent you a message.',
      'es': 'Cuerpo de la notificación'
    },
    include_player_ids: [pushId],
    large_icon: "www/img/pushImage.png",
    small_icon: "sym_contact_card",
    data: {
      "callerId": userId,
      "senderName": senderName,
      "isCall": false,
      "isMessage": true
    },
  };
  sendMessage(message);
}

module.exports = {
  setCredentials,
  pushMessage
};