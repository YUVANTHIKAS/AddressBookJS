class Contact {
    constructor(FirstName, LastName, Address, City, State, Zip, PhoneNumber, Email) {

        this.FirstName = FirstName;
        this.LastName = LastName;
        this.Address = Address;
        this.City = City;
        this.State = State;
        this.Zip = Zip;
        this.PhoneNumber = PhoneNumber;
        this.Email = Email;
    }
}

class AddressBook {
    constructor() {
        this.contacts = [];
    }
    addNewContact(contact) {
        validate(contact);
        this.contacts.push(contact);
        console.log(contact.FirstName + " contact Added ");
    }
    duplicateContact(contact) {
        if (this.contacts.some((element) => element.FirstName == contact.FirstName)) {
            console.log("Contact already Exists");
        }
        else {
            this.addNewContact(contact)
        }
    }
    displayContactDetails() {
        this.contacts.forEach(element => {
            console.log("Full Name: " + element.FirstName + " " + element.LastName);
        });
    }
    EditContact(contact) {
        validate(contact);
        this.contacts.forEach(element => {
            if (contact.FirstName == element.FirstName) {
                element.LastName = contact.LastName;
                element.Address = contact.Address;
                element.City = contact.City;
                element.State = contact.State;
                element.Zip = contact.Zip;
                element.PhoneNumber = contact.PhoneNumber;
                element.Email = contact.Email;
                console.log("Edited Address Book Successfully");
            }
        });
    }
    DeleteContact(name) {
        var a = 0;
        this.contacts.forEach(element => {
            if (name == element.FirstName) {
                this.contacts.splice(a, 1);
                console.log(name + " deleted Successfully");
            }
            a++;
        });
    }
    CountContact() {
        const count = this.contacts.reduce((count, sum) => {
            return count + 1
        }, 0);
        console.log("Total number of contacts in the Addressbook: " + count);
    }
    City(city) {
        const citySearch = this.contacts.filter((element) => element.City == city);
        console.log("The persons in the city " + city + " are: ");
        citySearch.forEach(element => {
            console.log("Full Name: " + element.FirstName + " " + element.LastName);
        })
    }
    State(state) {
        const stateSearch = this.contacts.filter((element) => element.State == state);
        console.log("The persons in the state " + state + " are: ");
        stateSearch.forEach(element => {
            console.log("Full Name: " + element.FirstName + " " + element.LastName);
        })
    }
    CountCity(city)
    {
        this.citySearch = this.contacts.filter((element)=>element.City == city);
        console.log("The total number of contacts in the city " + city + " are: "+this.citySearch.length);
    }
    CountState(state)
    {
        this.stateSearch = this.contacts.filter((element)=>element.State == state);
        console.log("The total number of contacts in the state " + " are: "+this.stateSearch.length);
    }
    
    SortName() {
        this.contacts.sort((a, b) => {
            let n1 = a.FirstName;
            let n2 = b.FirstName;
            if (n1 < n2)
                return -1;
            else
                return 1;
        });
        this.displayContactDetails();
    }
    SortCity() {
        this.contacts.sort((a, b) => {
            let n1 = a.City;
            let n2 = b.City;
            if (n1 < n2)
                return -1;
            else
                return 1;
        });
        console.log("Sorted by city:");
        this.displayContactDetails();
    }
    SortState() {
        this.contacts.sort((a, b) => {
            let n1 = a.State;
            let n2 = b.State;
            if (n1 < n2)
                return -1;
            else
                return 1;
        });
        console.log("Sorted by state:");
        this.displayContactDetails();
    }
    SortZip() {
        this.contacts.sort((a, b) => {
            let n1 = a.Zip;
            let n2 = b.Zip;
            if (n1 < n2)
                return -1;
            else
                return 1;
        });
        console.log("Sorted by zip:");
        this.displayContactDetails();
    }

}

function validate(Details) {
    console.log(Details.FirstName + " " + Details.LastName + " " + Details.Address + " " + Details.City
        + " " + Details.State + " " + Details.Zip + " " + Details.PhoneNumber + " " + Details.Email);
    if (!/^[A-Z][a-zA-Z]{2,}$/.test(Details.FirstName)) {
        throw new Error("Invalid First Name");
    }
    else if (!/^[A-Z][a-zA-Z]{2,}$/.test(Details.LastName)) {
        throw new Error("Invalid Last Name");
    }
    else if (!/^[0-9a-zA-Z]{4,}$/.test(Details.Address)) {
        throw new Error("Invalid Address");
    }
    else if (!/^[a-zA-Z]{4,}$/.test(Details.City)) {
        throw new Error("Invalid City");
    }
    else if (!/^[0-9a-zA-Z]{4,}$/.test(Details.State)) {
        throw new Error("Invalid State");
    }
    else if (!/^[0-9]{6}$/.test(Details.Zip)) {
        throw new Error("Invalid Zip");
    }
    else if (!/^[0-9]{10}$/.test(Details.PhoneNumber)) {
        throw new Error("Invalid Phone Number");
    }
    else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(Details.Email)) {
        throw new error("Invalid Email")
    }
    else {
        console.log("Validation Successful");;
    }
}

const addressbook = new AddressBook();


const Contact1 = new Contact(
    FirstName= "Yuvanthika",
    LastName= "Sarathy",
    Address= "KN road",
    City= "Vellore",
    State= "TN",
    Zip ="689642",
    PhoneNumber= "1234567890",
    Email= "yuvan@gmail.com");
const Contact2 = new Contact(
    FirstName="rosy",
    LastName= "S",
    Address= "poomagal road",
    City= "chennai",
    State= "TN",
    Zip= "123456",
    PhoneNumber= "1023445678",
    Email= "rosy@gmail.com");

const Contact3 = new Contact(
    FirstName = "malini",
    LastName = "c",
    Address = "Anaicut",
    City = "vellore",
    State = "andhra",
    Zip = "123456",
    PhoneNumber = "1023445678",
    Email = "malini@gmail.com");
addressbook.addNewContact(Contact3);

    const UpdateContact = new Contact(
    FirstName = "sarathy",
    LastName = "S",
    Address = "Gandhi nagar",
    City = "trichy",
    State = "TN",
    Zip = "987654",
    PhoneNumber = "1123445678",
    Email = "sarathy@gmail.com");

//addressbook.DeleteContact("malini");
//addressbook.displayContactDetails();
//addressbook.CountContact();
//addressbook.duplicateContact(Contact3);
//addressbook.City("vellore","malini");
//addressbook.State("TN","rosy");
//addressbook.CountCity("vellore");
//addressbook.CountState("TN");
//addressbook.SortName();
addressbook.SortCity();
addressbook.SortState();
addressbook.SortZip();