# Automation_Challenge
Tools needed:
-Gitbash (for mac you can use iterm2)
-vsCode (Or any other editor)

Technology and Libraries used:
-node js 
-selenium 
-Webdriverio
-mocha 
-Chai

Download a copy of the repo(Automation_challenge) to your local machine.
****To execute the test scripts use "npm test" in GitBash command line****

**All files have already been set up. However, these are step by step instructions to getting started from sratch once you have created a new directory**
Create package.json file in the directory by typing “npm init” into gitbash
In gitbash, Download webdriverio dependencies using this command “npm install -save-dev webdriverio@4.13.2”
In gitbash, Download selenium-standalone server using this command “npm install -save-dev selenium-standalone@6.15.3”
In gitbash, install selenium server using “./node_modules/.bin/selenium-standalone install”     
To configure WDIO config file (test runner) enter into the file in git bash using “./node_modules/.bin/wdio” and fill out the following:

? Where do you want to execute your tests? On my local machine
? Which framework do you want to use? mocha
? Shall I install the framework adapter for you? Yes
? Where are your test specs located? ./tests/**/*.js
? Which reporter do you want to use? dot
? Do you want to add a service to your test setup? Selenium-standalone
? Level of logging verbosity? silent
? In which directory should screenshots gets saved if a command fails? ./errorShots/
? What is the base url? www.saucedemo.com

In gitbash download mocha using this command “npm install -save-dev mocha@latest”
In Wdio file change sync value to true
In Wdio file add ‘selenium –standalone’ to services (line 114)
In gitbash install selenium-standalone service using “npm install wdio-selenium-standalone-service -save-dev”
In package.json file, change the value of “test” to “wdio”
Now you can use “npm test” to run the test scripts without opening another gitbash to start selenium server
Set up additional environments in Wdio file like this;
var baseUrl;

if(process.env.SERVER === 'prod') {
    baseURL ='https://www.google.com';
}   else {
        baseUrl = 'https://www.saucedemo.com'
}                             

**Additional Information**
For logging during run time use this in Gitbash; “npm test -- --logLevel=verbose”
For more enhanced assertions you can use chai. To Install chai in Gitbash use “npm install chai@latest -save –dev”

To target just one test file in gitbash use “npm test -- --spec=nameOfFile
To execute DEBUG mode in gitbash use “DEBUG=true npm test -- --spec=nameOfFile

