console.log("k ho bhai");
// alert("ALERT!!!!");
// document.write("hello");
// var a = "challu";
// let b = " lau";
// let c = 365;
// if(true){
//     console.log("Baafrey, kasto milaideko ta bhanya");
//     document.write("Milyo ta yaar thyakkai")
// }


const age = parseInt(prompt("Enter your age"))

// if (age>=18 && age<40){
//     // alert("ELIGIBLE")
//     document.write("Hello brother")
// }
// else if(age>=40 && age<60){
//     // alert("NOT ELIGIBLE")
//     document.write("Hello uncle")
// }
// else if(age<18){
//     document.write("Hello underage people")
// }
// else{
//     document.write("Hello aged person")
// }

switch(true){
    case age<18 && age>0:
        document.write("You're under age")
        break;
    case age>=18 && age<60:
        document.write("You're middle aged")
        break;
    default:
        document.write("Your an aged person")
}
