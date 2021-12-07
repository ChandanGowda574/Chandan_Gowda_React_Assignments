var per = {
    fname:"Chandan",
    lname:"Gowda",
    age:21,
    skills:[ "C", "HTML" , "CSS", "Java"],
    address: {
        city:"Bengaluru",
        pincode:560000,
    },
    dateOfBirth:"29-Feb-1999",
    married: false,
    profession:"Developer"
};

//constructor//

//Sub question 1)

console.log(person1);
var skillsArray = ["javascript","Spring","GitHub"];
var Person= function(fname,lname,age,Array, DOB,address, married,profession){
    this.fname = fname;
    this.lname = lname;
    this.age = age;
    this.skills=skillsArray;
    this.dateOfBirth = DOB;
    this.address=address;
    this.married = married;
    this.profession= profession;
};


var samAddress={
    city:"hyderabad",
    pincode:521185,
};

var harishAddress={
    city:"Ameerpet",
    pincode:500038,
};

samArray = ["C"];
harishArray = ["HTML"];



var person1 = new Person("sam","goud",22,samArray,"24/10/1996",samAddress, false, "sr-analyst");
console.log(person1)

var person2 = new Person("harish","chinna", 21, harishArray,"08/06/1997",harishAddress,false,"jr-analyst");
console.log(person2)

//Sub question 2)

var amithab = new Person("amithab","bachan",22,samArray,"24/10/1996",samAddress, false, "sr-analyst");
console.log(amithab);

var abhisheik = new Person("amithab",amithab.lname,21,harishArray,"08/06/1997",amithab.address, false, "jr-analyst");
console.log(abhisheik);


//Sub question 3)
var Aaradhya = new Person("aaradhya", amithab.lname, abhisheik.age, abhisheik.samAddress, "18/02/2000", abhisheik.address, true, "devloper");
console.log(Aaradhya);
