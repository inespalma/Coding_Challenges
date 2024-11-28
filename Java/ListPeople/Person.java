package ListPeople;

public class Person {

    // Attributes
    protected String firstName;
    protected String lastName;
    protected int age;
    protected String address;
    protected String nationality;

    // Constructor
    public Person(String firstName, String lastName, int age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    //<---- Getters ---->

    public String getFirstName() {
        return firstName;
    }
    public String getLastName() {
        return lastName;
    }
    public int getAge() {
        return age;
    }
    public String getAddress() {
        return address;
    }
    public String getNationality() {
        return nationality;
    }

    //<---- Setters ---->

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }    
    public void setLastName(String lastName) {
        this.lastName = lastName;
    }    
    public void setAge(int age) {
        this.age = age;
    }    
    public void setAddress(String address) {
        this.address = address;
    }    
    public void setNationality(String nationality) {
        this.nationality = nationality;
    }

    public String toString() {
        return "Person [First Name=" + firstName + ", Last Name=" + lastName + ", Age=" + age + ", Address=" + address + ", Nationality=" + nationality + "]";
    }
}
