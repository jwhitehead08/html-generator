// packages for this application
const inquirer = require('inquirer');
const writeFile = require('./utils/generate');
const Manager = require("./library/Manager");
const Intern = require("./library/Intern");
const Engineer = require("./library/Engineer");
const fs = require('fs');

let managerhtml = ""
let internhtml = ""
let engineerhtml = ""  

// Manager questions
let managerQuestion = [
  {
    type: 'input',
    name: 'manager',
    message: 'What is your managers name? (Required)',
    validate: managerInput => {
      if (managerInput) {
        return true;
      } else {
        console.log('Please enter your manager name!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'managerId',
    message: 'Enter a your manager ID (Required)',
    validate: managerIdInput => {
      if (managerIdInput) {
        return true;
      } else {
        console.log('Please enter your manager ID!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'managerEmail',
    message: 'Enter a your manager email (Required)',
    validate: managerEmailInput => {
      if (managerEmailInput) {
        return true;
      } else {
        console.log('Please enter your manager email!');
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

// Engineer Questions
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
      name: 'github',
      message: 'Please enter your github username (Required)',
      validate: githubInput => {
        if (githubInput) {
          return true;
        } else {
          console.log('Please enter your github username!');
          return false;
        }
      }
    }
  ]

  //Intern Questions
  let InternQuestions = [
    {
      type: 'input',
      name: 'InternName',
      message: 'What is the name of your Intern? (Required)',
      validate: InternNameInput => {
        if (InternNameInput) {
          return true;
        } else {
          console.log('You need to enter an Intern name!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'InternId',
      message: 'Enter a your Intern ID (Required)',
      validate: InternIdInput => {
        if (InternIdInput) {
          return true;
        } else {
          console.log('Please enter your Intern ID!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'InternEmail',
      message: 'Enter a your Intern email (Required)',
      validate: InternEmailInput => {
        if (InternEmailInput) {
          return true;
        } else {
          console.log('Please enter your Intern email!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'school',
      message: 'Please enter your school (Required)',
      validate: schoolInput => {
        if (schoolInput) {
          return true;
        } else {
          console.log('Please enter your school!');
          return false;
        }
      }
    }
  ]


// Exit function
    function exit()
    {
    
    const contentFile = `
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <!-- CSS only -->
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
            <link rel="stylesheet" href="./dist/style.css">
            <title>Team Page</title>
          </head>
        
          <body>
            <!-- header -->
            
            <header class="text-center p-3">
            <h1>My Team</h1>
            </header>
            <div class="container text-center">

            <div class="row">
            <div class="col-12">
            <h3>Manager</h3>
            ${managerhtml}
            </div>
            </div>
          

          <div class="row">
            <div class="col-12">
            <h3>Intern</h3>
            ${internhtml}
            </div>
            </div>
         

          <div class="row">
            <div class="col-12">
            <h3>Engineer</h3>
            ${engineerhtml}
            </div>
            </div>
          </div>
          </div>
          </body>
        </html>

        `
    console.log(contentFile);
    fs.writeFileSync('index.html', contentFile, function(err) {
      if (err)
      throw err;
    })

  }
  // .then(pageHTML => {
  //   console.log(pageHTML);
  //   return writeFile(pageHTML);
  // })
  // .then(writeFileResponse => {
  //   console.log(writeFileResponse);

  // })
  // .catch(err => {
  //   console.log(err);
  // });

// function to prompt user
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

function addManager() {
  inquirer.prompt(managerQuestion)
  .then(response => {
    const newEmployee = new Manager(response.manager, response.managerId, response.managerEmail, response.office)
    managerhtml += `
    <div class="card" style="width: 18rem;">
  <div class="card-body" id="blueSec">
    <h5 class="card-title">${newEmployee.name} </h5>
    <p class="card-text">${newEmployee.getRole()}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${newEmployee.id}</li>
    <li class="list-group-item">Office #: ${newEmployee.officeNumber}</li>
  </ul>
  <div class="card-body">
   Email: <a href="mailto:${newEmployee.email}" target="_blank" rel="noopener noreferrer" class="card-link">${newEmployee.email}</a>
  </div>
</div>
    `
    init()
  })
}

// function for adding engineer
function addEngineer() {
  inquirer.prompt(enginneerQuestions)
  .then(response => {
    const newEmployee = new Engineer(response.EngineerName, response.teamId, response.teamEmail, response.github)
    engineerhtml += `
    <div class="card border border-primary" style="width: 18rem;">
  <div class="card-body" id="blueSec">
    <h5 class="card-title">${newEmployee.name} </h5>
    <p class="card-text">${newEmployee.getRole()}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${newEmployee.id}</li>
    <li class="list-group-item">Github: <a href="https://github.com/${newEmployee.githubUser}" target="_blank" rel="noopener noreferrer" class="card-link">${newEmployee.githubUser}</a></li>
  </ul>
  <div class="card-body">
    Email: <a href="mailto:${newEmployee.email}" target="_blank" rel="noopener noreferrer" class="card-link">${newEmployee.email}</a>
  </div>
</div>
    `
    init()
  })
}

// function for adding intern
function addInter() {
  inquirer.prompt(InternQuestions)
  .then(response => {
    const newEmployee = new Intern(response.InternName, response.InternId, response.InternEmail, response.school)
    internhtml += `
    <div class="card border border-primary" style="width: 18rem;">
  <div class="card-body" id="blueSec">
    <h5 class="card-title">${newEmployee.name} </h5>
    <p class="card-text">${newEmployee.getRole()}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${newEmployee.id}</li>
    <li class="list-group-item">School: ${newEmployee.school}</li>
  </ul>
  <div class="card-body">
   Email: <a href="mailto:${newEmployee.email}" target="_blank" rel="noopener noreferrer" class="card-link">${newEmployee.email}</a>
  </div>
</div>
    `
    init()
  })
}


init()