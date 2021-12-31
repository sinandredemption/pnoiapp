cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-ssh-connect.sshConnect",
      "file": "plugins/cordova-plugin-ssh-connect/www/sshConnect.js",
      "pluginId": "cordova-plugin-ssh-connect",
      "clobbers": [
        "cordova.plugins.sshConnect"
      ]
    },
    {
      "id": "cordova-plugin-bluetooth-serial.bluetoothSerial",
      "file": "plugins/cordova-plugin-bluetooth-serial/www/bluetoothSerial.js",
      "pluginId": "cordova-plugin-bluetooth-serial",
      "clobbers": [
        "window.bluetoothSerial"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-ssh-connect": "1.1.1",
    "cordova-plugin-bluetooth-serial": "0.4.7"
  };
});