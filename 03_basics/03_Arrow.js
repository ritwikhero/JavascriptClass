const user = {
    username : "Ritwik",
    price : 999,
    
    welcomeMessage : function(){
        console.log(`${this.username} welcome to website`); //this refers current context here
        console.log(this);
    }
}
user.welcomeMessage();
user.username = "Rishik";
user.welcomeMessage();

console.log(this);