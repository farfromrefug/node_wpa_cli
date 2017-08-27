var wpa = require('./index.js');

var handle = new wpa('wlan1');
handle.connect();

handle.setNetwork(0, {ssid: 'TEST'}, function () {
    console.log(arguments);
});

handle.saveConfig(function (err) {
    console.log(arguments);
});