package Contacts;

public class Contact {

    // Attributes
    protected String name;
    protected int phoneNumber;
    protected String email;

    // Constructor
    public Contact(String name, int phoneNumber, String email) {
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }

    // Getters
    public String getName() {
        return name;
    }
    public int getPhoneNumber() {
        return phoneNumber;
    }
    public String getEmail() {
        return email;
    }

    public String toString() {
        return "Contact {" +
                "Name='" + name + '\'' +
                ", Phone Number=" + phoneNumber +
                ", Email='" + email + '\'' +
                '}';
    }
}
