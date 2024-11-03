
function calculate(data: number[]): number {
    let result = 0;
    for (const x of data) {
        result += x * 12;
    }
    return result;
}















class SalaryCalculator {
    baseSalaries: number[];

    constructor(baseSalaries: number[]) {
        this.baseSalaries = baseSalaries;
    }

    calculateTotalAnnualSalary(): number {
        let totalAnnualSalary = 0;
        for (const baseSalary of this.baseSalaries) {
            totalAnnualSalary += baseSalary * 12;
        }
        return totalAnnualSalary;
    }
}


const baseSalaries: number[] = [4000, 5000, 6000];
const calculator = new SalaryCalculator(baseSalaries);
const totalSalary = calculator.calculateTotalAnnualSalary();
console.log(`Total Annual Salary: ${totalSalary}`);


class User{
    userFirstName: string
    userLastName: string
    userPhone: string
    userAdress: string
}