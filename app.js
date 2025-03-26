var calculateAge = function (birthDate) {
    var today = new Date();
    var birthDay = new Date(birthDate);
    var age = today.getFullYear() - birthDay.getFullYear();
    var month = today.getMonth() - birthDay.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDay.getDate())) {
        age--;
    }
    return age;
};
var age = calculateAge("2003-01-01");
console.log(age);
