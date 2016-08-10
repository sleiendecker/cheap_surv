# cheap_surv
Simple node script for cheap surveillance with a USB cam. The script leverages the [icamsource](http://skjm.com/icam/support.php "icamsource's") Motion Detection by sending its motion events to the user via email.

#Pre-installation
Make sure brew is up to date by running brew update and make sure node and npm are installed globally.

```
brew update
brew install node
brew upgrade node
```
#Global NPM Packages
Install required global packages using the following.
```
npm install -g moment forever
```

#Installation
Clone the repository and install dependencies.
```
git clone https://github.com/sleiendecker/cheap_surv.git
cd cheap_surv
npm install
```
#Instructions
Add your gmail credentials to `config/auth.js`:
```javascript
module.exports = {
  email: 'USERNAME@gmail.com',
  password: 'PASSWORD'
}
```
##Mac
Download and install [icamsource](https://itunes.apple.com/us/app/icam-webcam-video-streaming/id296273730?mt=8&uo=4&at=11lcfp "icamsource").

Launch icamsource, enable motion detection, and set the motion events folder to `images`
Run the following command in the app root:
```
forever start --minUptime 1000 --spinSleepTime 100 index.js
```

#TODO:
Add setup/instruction for Linux and PC.


