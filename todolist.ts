import inquirer from 'inquirer';
// todo array
// function
// operation
var todo: string[]= []
async function createTodo (arr:string[]) {
    var ans = await inquirer.prompt({
        type:"list",
        message:"select an opperation";
        name: "select",
        choices:["Add", "Update", "View", "Delete"]
    })
    if (ans.select == "Add") {
        let addTodo = await inquirer.prompt
    }
    if (ans.select == "Update") {}
    if (ans.select == "View") {}
    if (ans.select == "Delete") {}
}
createTodo(todo) 