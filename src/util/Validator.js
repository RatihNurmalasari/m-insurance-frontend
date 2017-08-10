export function isEmailValid(email)  {
    var re = /([\S]+)@((?:[\w-]+\.)*\w[\w-]{0,})\.([a-z]{2,}(?:\.[a-z]{2})?)$/g;
    return (re.test(email) && (email.length <= 40));
}

export function isPasswordValid(password) {
    /**
    * at least one number, one lowercase and one uppercase letter
    * at least six characters that are letters, numbers or the underscore
    * maximum fifty characters that are letters, numbers or the underscore 
    **/
    var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\S{6,50}$/g;
    return (re.test(password));
}

export function isNumber (number){
    var numberRegex = /^[0-9]+$/g;
    return numberRegex.test(number);
}
