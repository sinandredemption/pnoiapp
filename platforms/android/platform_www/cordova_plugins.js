cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-ssh-connect.sshConnect",
      "file": "plugins/cordova-plugin-ssh-connect/www/sshConnect.js",
      "pluginId": "cordova-plugin-ssh-connect",
      "clobbers": [
        "cordova.plugins.sshConnect"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-ssh-connect": "1.1.1"
  };
});