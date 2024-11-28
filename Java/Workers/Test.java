package Workers;

public class Test {
    public static void main(String[] args) {

        // Creating instances of different types of employees
        Employee a = new Assistant("João", "3333", 600);
        Employee b = new Manager("Bernardo", "3367", 700);
        Employee c = new Salesperson("Maria", "3355", 500, 60);

        // Print details for each employee
        System.out.println(" Employee Code + Salary |" +a.getName() + " | " + a.getEmployeeCode() + " | Salary: " + a.calculateSalary());
        System.out.println(" Employee Code + Salary |" +b.getName() + " | " + b.getEmployeeCode() + " | Salary: " + b.calculateSalary());
        System.out.println(" Employee Code + Salary |" +c.getName() + " | " + c.getEmployeeCode() + " | Salary: " + c.calculateSalary());

        // Alternative approach using an array of employees
        Employee[] employees = new Employee[3];
        employees[0] = new Assistant("João", "3333", 600);
        employees[1] = new Manager("Bernardo", "3367", 700);
        employees[2] = new Salesperson("Maria", "3355", 500, 60);

        // Loop through the array and print details for each employee
        for (int i = 0; i < employees.length; i++) {
            System.out.println("Name: " + employees[i].getName() + " | Code: " + employees[i].getEmployeeCode()
                    + " | Salary: " + employees[i].calculateSalary());

            // Check which type of employee it is
            if (employees[i] instanceof Manager) {
                System.out.println(" Role | " + employees[i].getName() + " is a Manager");
            } else if (employees[i] instanceof Salesperson) {
                System.out.println(" Role | " + employees[i].getName() + " is a Salesperson");
            } else if (employees[i] instanceof Assistant) {
                System.out.println(" Role | " + employees[i].getName() + " is an Assistant");
            }
        }
    }
}