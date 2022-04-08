const Employee = require("./Employee")
class Engineer extends Employee {
    constructor(id,name,email,githubUser){
        super(name,id,email)
        this.githubUser= githubUser;
    }
    getGithubName(){
        return this.githubUser
    }
    getRole(){
        return "Engineer";
    }  
}

module.exports = Engineer;