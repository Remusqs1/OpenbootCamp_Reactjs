
export class Contact{
    name = "Default Name";
    lastName = "Default Lastname";
    email = "email@email.com";
    isConnected = false

    constructor(name, lastName, email, isConnected){
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.isConnected = isConnected
    }
}