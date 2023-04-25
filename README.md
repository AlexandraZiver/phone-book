# The phone-book 

## Project description
The phone-book project is an application that provides the ability to display users from a local database in a list and on the main screen.
The program includes a search among users.
Input data - string to search.
Output - found users.

The program is built in the JavaScript language using the react and redux libraries.
The API is represented by the RTK Query tool.
The program was partially tested with Jest and React testing library tools.

## Project view
<img width="1170" alt="image" src="https://user-images.githubusercontent.com/91556009/233975110-3bf098da-97c9-4048-8f3e-b744f59584d4.png">
<img width="1148" alt="image" src="https://user-images.githubusercontent.com/91556009/233975247-32b7b9ed-4998-48b6-aa14-d65975ae3dab.png">
<img width="1264" alt="image" src="https://user-images.githubusercontent.com/91556009/233979588-77ec3711-fc11-4ec9-8e1b-2bc92bed3892.png">

### Adapted version
<img width="501" alt="image" src="https://user-images.githubusercontent.com/91556009/233979229-430b4c11-51f1-4437-a1bd-e0b697ac127d.png">
<img width="497" alt="image" src="https://user-images.githubusercontent.com/91556009/233979291-c0117300-e094-43d5-bca2-d88ceb27f197.png">


## Getting Started

- Clone the repository to a new folder using the command `git clone (https://github.com/DARKSWAAN/phone-book`

- Install the project dependencies using the `npm install` command. This command will install all the dependencies specified in the package.json file.

- Start the project using the `npm run start command`.

## Available Scripts
In the project directory, you can run:

`npm run start`: This command will start the development of the project and open it in the browser at http://localhost:3000 and `start` the local database http://localhost:8000.

`npm client:start`This script starts the client part of the application. Using the react-scripts package, it starts the development server and opens the app in the browser.

`npm server:start` This script runs the backend of the application using json-server, which provides a simple API to manipulate data from the db.json file.


`npm run test`: This script runs tests using the jest package and generates a coverage report.

`npm lint`: This script runs the eslint code linter on all files in the project.

`npm lint`:fix: This script runs the eslint code linter and fixes any detected problems that can be automatically fixed.

`npm eject`: This script outputs configuration settings, styles, and other settings to the project so that you can manage them without using react-scripts.
