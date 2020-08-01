<p align="center">Nodejs - Git Repository Search By Topic</p>

## About

A program that let's user search for repositories in GitHub by language or topic using GitHub’s well documented APIs with the search results paginated.

## Prerequisite

* Node js installed on the system
* AWS IAM Access Key ID and Secret Access Key

## Steps

* Create a folder for your project go to that path in CMD
* Initialize and install common libraries
	* npm init  :- To create your package.json file which have all the details about the projects.
	* npm install nodemon --save-dev
	* npm install express --save  :- Install express and save that dependency.
	* npm install body-parser ejs --save  :- Request parser and ejs template for frontend
* Create index.js inside src folder and configure that
* Point index.js as startup script inside package.json
* Set up Serverless and deploy
	* npm install serverless --save-dev
	* npm install aws-serverless-express --save
	* echo > serverless.yml
	* echo > lambda.js
	* echo > local.js
	* Install AWS CLI and configure using:
		* aws configure (Give access key ID and secret access key)
	* As the domain (stage) of serverless is given as production in the serverless.yml file, we will have to change the url in ejs file w.r.t that.