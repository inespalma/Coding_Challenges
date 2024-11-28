package Workers;

public class Assistant extends Employee {

    public Assistant(String name, String employeeCode, double baseSalary) {
        super(name, employeeCode, baseSalary);
    }

    public double calculateSalary() {
        return getBaseSalary();
    }
}