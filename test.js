const locomotion = require("./index");

locomotion.then((svc) => {
    const palindrome = svc.locate("palindrome");
    console.log(svc);
    console.log(palindrome);
    console.info(palindrome.isPalindrome("no x in nixon"));
}).catch((err) => {
    console.log(err);
})