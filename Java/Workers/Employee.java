package Workers;

public abstract class Employee {

    // Attributes
    private String name;
    private String employeeCode;
    private double baseSalary;

    // Constructor
    public Employee(String name, String employeeCode, double baseSalary) {
        this.name = name;
        this.employeeCode = employeeCode;
        this.baseSalary = baseSalary;
    }

    // Getters
    public String getName() {
        return name;
    }
    public String getEmployeeCode() {
        return employeeCode;
    }
    public double getBaseSalary() {
        return baseSalary;
    }

    // Abstract method to calculate salary
    public abstract double calculateSalary();
}
