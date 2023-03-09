export class Employee {
    _id: string;
    name: string;
    position: string;
    office: string;
    salary: number;

    constructor() {
        this._id = "";
        this.name = "";
        this.position = "";
        this.office = "";
        this.salary = null;
    }

    // Add a prototype property to the class
    static EMPLOYEE_PROTOTYPE: Employee = new Employee();
}