// Immediately Invoked Function Expression (IIFE)

function chai(){
    console.log("DB Connected");
}
chai();  //always use ; when more than one IIFE required

(function chai(){
    console.log("DB Connected two");
})();

((name) => {
    console.log(`DB Connected ${name}`)
})('ritwik');
