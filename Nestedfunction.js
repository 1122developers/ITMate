// Nested Function 
// function is used in another function
var newfunc = () => {
    console.log("Print Console");
};
newfunc();
newfunc();
newfunc();
var anotherfunc = () => {
    newfunc();
};
anotherfunc();
export {};
