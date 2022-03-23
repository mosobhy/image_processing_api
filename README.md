#Image Processing API

##Functionality
###Resizing(filename, width, height)
this is the only functionality of our app, it takes a filename representing an image with the .jpg extension and width and a height and the purpose of the function is to resize that image to the new width and height and store the result on the disk

##Building
##npm run build
compiles the typescript code into javascript code which will be located in the build directory

##Testing
##npm run test
this script will run the test suite upon our endpoint as it comprised of two scripts, first it compiles to javascript and then it run jasmine to run test specs

##Endpoint
###GET: api/image?filename=fjord&width=200&height=200
accessing this endpoint with the valid filename will return the resized image to be rendered on the browser and also written to the disk
