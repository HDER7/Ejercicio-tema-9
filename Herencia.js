class Person {
    constructor() {
        this._age = 0;
        this._name = "";
        this._phone = "";
    }

    get age() {
        return this._age;
    }

    get name() {
        return this._name;
    }

    get phone() {
        return this._phone;
    }

    set age(age) {
        this._age = age;
    }

    set name(name) {
        this._name = name;
    }

    set phone(phone) {
        this._phone = phone;
    }
}

class Customer extends Person {
    constructor() {
        super();
        this._credit = 0;
    }

    get credit() {
        return this._credit;
    }

    set credit(credit) {
        this._credit = credit;
    }
}

class Worker extends Person {
    constructor() {
        super();
        this._salary = 0;
    }

    get salary() {
        return this._salary;
    }

    set salary(salary) {
        this._salary = salary;
    }
}

function main() {
    const customer = new Customer();
    customer.name = "Jose";
    customer.age = 30;
    customer.phone = "1234567890";
    customer.credit = 10000;

    console.log("Customer Details:");
    console.log(`Name: ${customer.name}`);
    console.log(`Age: ${customer.age}`);
    console.log(`Phone: ${customer.phone}`);
    console.log(`Credit: ${customer.credit}`);

    const worker = new Worker();
    worker.name = "Juan";
    worker.age = 25;
    worker.phone = "9876543210";
    worker.salary = 50000;

    console.log("\nWorker Details:");
    console.log(`Name: ${worker.name}`);
    console.log(`Age: ${worker.age}`);
    console.log(`Phone: ${worker.phone}`);
    console.log(`Salary: ${worker.salary}`);
}

main();
