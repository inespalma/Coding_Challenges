package Workers;

public class Salesperson extends Employee {

    private double bonus;

    public Salesperson(String name, String employeeCode, double baseSalary, double bonus) {
        super(name, employeeCode, baseSalary);
        this.bonus = bonus;
    }

    public double calculateSalary() {
        return getBaseSalary() + bonus;
    }
}
