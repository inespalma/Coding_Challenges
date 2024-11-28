package Workers;

public class Manager extends Employee {

    public Manager(String name, String employeeCode, double baseSalary) {
        super(name, employeeCode, baseSalary);
    }

    public double calculateSalary() {
        return getBaseSalary();
    }
}
