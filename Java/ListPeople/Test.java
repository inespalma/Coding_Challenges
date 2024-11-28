package ListPeople;

public class Test {
    public static void main(String[] args) {
        Person person = new Person("John", "Doe", 30);

        // Set additional attributes using setters
        person.setAddress("123 Main St");
        person.setNationality("American");

        // Get and print attributes using getters
        System.out.println("First Name: " + person.getFirstName());
        System.out.println("Last Name: " + person.getLastName());
        System.out.println("Address: " + person.getAddress());

        // Print the Person object
        System.out.println("\nPerson Details: ");
        System.out.println(person); 
    }
}
