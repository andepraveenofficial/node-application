# Node Application

1. `npm init -y`
2. `npm install express` web framework application
3. `npm install -D nodemon`  Automatic server restart. 
when change the code, we need to restart the server, nodemon restart the server when save the file.
4. `npm install dotenv` Store Secrete Information


### Run the Application
* `node index.js`
* __"start":"node index.js"__ add this to package.json then we can use command `npm run start` to run the Application.
* __"start":"nodemon index.js"__ add this to package.json then we can use command `npm run start` to run the Application.


### Deployment
* Digital Ocean
    - store code in GITHUB