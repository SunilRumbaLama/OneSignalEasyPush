# Onesignalmadeeasy

A beta-test nodejs package to just make the sending push via nodejs easier. 

## Usage

First, install the package using npm:

    npm install onesignalmadeeasy --save

Then, require the package and use it like so:

    var onesignalmadeeasy = require('onesignalmadeeasy');
    onesignalmadeeasy.setCredentials("OnesignalServerKey", "onesignalAppId");
    onesignalmadeeasy.pushMessage("senderId", "playerid From onesignal", "senderName");

   (senderId is just to retrieve information which will be sent in pushdata).
## License

MIT
