function getThem(theList) {
    let list1 = [];
    for (let x of theList) {
        if (x[0] === 4) {
            list1.push(x);
        }
    }
    return list1;
}
