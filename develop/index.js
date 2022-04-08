// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const writeFile = require('./utils/generate');

// TODO: Create an array of questions for user input
// const promptUser = userData => {
//     return inquirer.prompt([
let managerQuestion = [
  {
    type: 'input',
    name: 'team',
    message: 'What is your team managers name? (Required)',
    validate: teamInput => {
      if (teamInput) {
        return true;
      } else {
        console.log('Please enter your team name!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'teamId',
    message: 'Enter a your team ID (Required)',
    validate: teamIdInput => {
      if (teamIdInput) {
        return true;
      } else {
        console.log('Please enter your team ID!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'teamEmail',
    message: 'Enter a your team email (Required)',
    validate: teamEmailInput => {
      if (teamEmailInput) {
        return true;
      } else {
        console.log('Please enter your team email!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'office',
    message: 'Please enter your office number (Required)',
    validate: officeInput => {
      if (officeInput) {
        return true;
      } else {
        console.log('Please enter your office number!');
        return false;
      }
    }
  }
]


// Engineer 
if (!portfolioData.projects) {
  portfolioData.projects = [];
}
// return inquirer
//   .prompt([
  let enginneerQuestions = [
    {
      type: 'input',
      name: 'EngineerName',
      message: 'What is the name of your engineer? (Required)',
      validate: EngineerNameInput => {
        if (EngineerNameInput) {
          return true;
        } else {
          console.log('You need to enter an engineer name!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'teamId',
      message: 'Enter a your team ID (Required)',
      validate: teamIdInput => {
        if (teamIdInput) {
          return true;
        } else {
          console.log('Please enter your team ID!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'teamEmail',
      message: 'Enter a your team email (Required)',
      validate: teamEmailInput => {
        if (teamEmailInput) {
          return true;
        } else {
          console.log('Please enter your team email!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'office',
      message: 'Please enter your office number (Required)',
      validate: officeInput => {
        if (officeInput) {
          return true;
        } else {
          console.log('Please enter your office number!');
          return false;
        }
      }
    }
  ]


//   ])
//   .then(projectData => {
//     portfolioData.projects.push(projectData);
//     if (projectData.confirmAddProject) {
//       return promptProject(portfolioData);
//     } else {
//       return portfolioData;
//     }
//   });
// };



promptUser()
  .then(data => {
    console.log(data);
    const contentFile = `
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="stylesheet" href="./utils/style.css">
            <title>Team Page</title>
          </head>
        
          <body>
            <!-- header -->
            <header>
              <h1>
                My Team
              </h1>
            </header>
            
            <div>
              <h2>
                ${data.team}
              </h2>
              <h3>
                Manager
              </h3>
              <ul>
                <li>${data.teamId}</li>
                <li>${data.teamEmail}</li>
                <li>${data.office}</li>
            <ul>
                
            </div>
              
          </body>
        </html>

        `
    return contentFile;
  })
  .then(pageHTML => {
    console.log(pageHTML);
    return writeFile(pageHTML);
  })
  .then(writeFileResponse => {
    console.log(writeFileResponse);

  })
  .catch(err => {
    console.log(err);
  });


function init() {
  inquirer.prompt([
    {
      type: "list",
      name: "userselection",
      choices: ["Add Manager", "Add Intern", "Add Engineer", "Exit App"],
      message: ""
    }
  ]).then(({ userselection }) => {
    switch (userselection) {
      case "Add Manager":
        addManager();
        break;
      case "Add Intern":
        addInter();
        break;
      case "Add Engineer":
        addEngineer();
        break;
      case "Exit App":
        exit();
        break;
    }
  })
}