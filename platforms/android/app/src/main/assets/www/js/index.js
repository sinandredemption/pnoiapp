/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

const ErrorOutput = "[!!]";

var IsSSHConnected = false;
var LastSSHOutput;

var success = function (resp) {
 	writeLog("[rasp] " + resp);
	LastSSHOutput = resp;
}
  
var failure = function (error) {
  	alert(error);
	writeLog("[ERROR] " + error);
	LastSSHOutput = ErrorOutput;
}
 
function SSH(cmd) {
    window.cordova.plugins.sshConnect.executeCommand(cmd, success, failure);
}

function writeLog(msg) {
	document.getElementById("log").innerHTML += msg + "<br/>";
}
// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready

function toggleRecording() {
	if (!IsSSHConnected) { failure("SSH not connected"); return; }

	if (document.getElementById("startstop_button").innerHTML == "Start") // Stop Recording
	{
		writeLog("starting recording...");
		SSH("df -h");
		if (LastSSHOutput != ErrorOutput)
			document.getElementById("startstop_button").innerHTML = "Stop";
	}
	else if (document.getElementById("startstop_button").innerHTML == "Stop") // Start Recording
	{
		writeLog("stopping recording...");
		SSH("free");
		if (LastSSHOutput != ErrorOutput)
			document.getElementById("startstop_button").innerHTML = "Start";
	}
	else
	{
		failure("unknown state");
	}
}

function downloadRecording() {
}

function connectSSH() {
	writeLog("trying to connect...");
/*	window.cordova.plugins.sshConnect.connect('pi', 'raspberry', '192.168.4.1', 22, writeLog("Connection successful to Raspberry Pi!"), failure);*/
	window.cordova.plugins.sshConnect.connect('pi', 'raspberry', '192.168.4.1', 22,
		function(resp) {
			if (resp) {
				writeLog("connection successful");
				IsSSHConnected = true;
				//window.cordova.plugins.sshConnect.executeCommand('top', success, failure);
				//window.cordova.plugins.sshConnect.disconnect(success, failure);
 			}
		}
	, failure);

	if (IsSSHConnected) document.getElementById("connection_button").innerHTML = "Disconnect";
	else document.getElementById("connection_button").innerHTML = "Connect";
}

document.addEventListener('deviceready', onDeviceReady, false);
function onDeviceReady() {
	// Cordova is now initialized. Have fun!

	console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
	document.getElementById('deviceready').classList.add('ready');
	writeLog("device is ready");

	connectSSH();
}

