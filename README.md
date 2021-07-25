# raspberrypi-remote-photo-taker
### Description
*This application hosts a webserver that allows to take pictures in Raspberry Pi using any other device.*

### Setup 
In raspberrypi directory- 
* 1) Install the node modules 
```
$ npm install 
```

* 2) If PiCamera module not installed 
```
$ pip install PiCamera
```

* 3) To start the webserver 
```
node index.js
```

* 4) To access the server from other devices (laptops, phones etc.) - go to the browser and access the url 
`http://${raspberrypi-ip-address}:3000` (be sure that both the device and pi are on the same network)

* 5) The webpage would be visible

### Functionality 
The raspberrypi hosts a webserver created using JS (express). The home website of this server has a 'Capture' button which upon being click runs a python script in the backend 
to take a picture and save it with approriate name. As newly taken image is hosted onto the server at '/image_name.jpg', this is accessed in the html page using <img>. So the picture
captured is displayed directly in the webpage. 

### Technology 
* 1) Raspberry Pi 
* 2) JavaScript 
* 3) Python 
* 4) SSH

### Modules
* Express (JS)
* await-exec (JS)
* fetch (JS)
* PiCamera (Python)
* os (Python)


### Application in Action
* Website 
<img src="demonstration_images/website_photo.png"<img/>
* Website on clicking Capture 
<img src="demonstration_images/picture_taken_photo.png"<img/>
* Photo 
<img src="demonstration_images/sample_picture.jpg"<img/>
* Raspberry Pi setup 
<img src="demonstration_images/raspberrypi_setup.jpeg"<img/>



### Sources
1) Npm install (https://docs.npmjs.com/cli/v7/commands/npm-install)
2) RaspberryPi Camera Module (https://projects.raspberrypi.org/en/projects/getting-started-with-picamera)
3) Npm await-fetch (https://www.npmjs.com/package/await-exec)
4) Raspberry Pi IP configuration (https://www.raspberrypi.org/documentation/remote-access/ip-address.md)


