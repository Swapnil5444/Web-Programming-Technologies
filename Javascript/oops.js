class Person{
    //data members
    pname = "Bob";
    pcontact = 1234;
    paddress = "Mumbai";


    constructor(name,contact,address){
        this.pname=name;
        this.pcontact=contact;
        this.paddress=address;
    }

    //member function
    personDetails(){
        return `Name:${this.pname}, Contact:${this.pcontact}, Address:${this.paddress}`;
    }
}

let personObj = new Person("Swapnil",22345,"USA");
console.log(personObj.pname);
console.log(personObj.pcontact);
console.log(personObj.personDetails());

let personObj1 = new Person("Rutuja",98745,"UK");
console.log(personObj1.pname);
console.log(personObj1.pcontact);
console.log(personObj1.personDetails());