class User {
    constructor(credit, price = 0.20, phoneNumber = 0, numberOfCall = 0) {
        this.Registry = [];
        this.credit = credit;
        this.price = price;
        this.phoneNumber = phoneNumber;
        this.numberOfCall = numberOfCall;
    }
    topUp(money) {
        this.credit += money;
    }
    call(duration) {
        let cost = duration * this.price;
        this.credit -= cost;
        console.log(cost);
        this.numberOfCall += 1;
        this.Registry.push({
            id: Math.floor(Math.random() * 100000000000000 + 1),
            duration: duration,
            dateHourCall: new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString()
        });
    }
    get callNumber404() {
        if (this.credit > 0) {
            return `Il tuo credito residuo è ${this.credit} €`;
        }
        else
            return `Non hai abbastanza credito per effettuare la chiamata!`;
    }
    get callNumber() {
        return `Il tuo numero di telefono è ${this.phoneNumber}`;
    }
    resetCalls() {
        this.numberOfCall = 0;
    }
    showRegistry() {
        return this.Registry;
    }
}
const Aldo = new User(1, 0.20, 3334567890);
Aldo.call(10);
console.log(Aldo.callNumber404);
console.log(Aldo.callNumber);
const Giovanni = new User(50, 0.20, 3331234567);
Giovanni.call(10);
Giovanni.topUp(5);
console.log(Giovanni.callNumber404);
console.log(Giovanni.callNumber);
console.log(Giovanni.numberOfCall);
const Giacomo = new User(50, 0.20, 3330987654);
Giacomo.call(1.5);
Giacomo.call(10);
console.log(Giacomo.callNumber404);
console.log(Giacomo.callNumber);
Giacomo.resetCalls();
console.log(Giacomo.numberOfCall);
console.log(Giacomo.showRegistry());
export {};
