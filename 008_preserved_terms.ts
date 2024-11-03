class Calculator {
    add(a: number, b: number) {
        return a + b;
    }
}

class Collection {
    items: Array<number>;
    constructor() {
        this.items = [];
    }

    add(item: number) { // should be named insert to avoid conflict with add method of Calculator
        this.items.push(item);
    }
}
