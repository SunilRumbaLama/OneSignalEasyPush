# Onesignalmadeeasy

A beta-test nodejs package to just make the sending push via nodejs easier.</br>
It is only to send "senderName" sent the message.</br>
Refer [Onesignal](https://documentation.onesignal.com/v3.0/reference "Onesignal") for thorough api and its usage.


## Usage

First, install the package using npm:

    npm install onesignaleasypush --save

Then, require the package and use it like so:

    var onesignaleasypush = require('onesignaleasypush');
    onesignaleasypush.setCredentials("onesignaleasypush", "onesignalAppId");
    onesignaleasypush.pushMessage("senderId", "playerid From onesignal", "senderName");

   (senderId is just to retrieve information which will be sent in pushdata).</br>
   
## License

MIT
