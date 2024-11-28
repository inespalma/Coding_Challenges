package Contacts;

public class Test {
    public static void main(String[] args) {

        // Create an array to store Contact objects
        Contact[] ct = new Contact[8];
        
        // Initialize contacts in the array
        ct[0] = new Contact("João", 929184441, "inespalma@hotmail.com");
        ct[1] = new Contact("André", 3737373, "pmpires@gmail.com");
        ct[2] = new Contact("Maria", 982123456, "maria.santos@yahoo.com");
        ct[3] = new Contact("Pedro", 981234567, "pedro.abreu@hotmail.com");
        ct[4] = new Contact("Ana", 964567890, "ana.silva@outlook.com");
        ct[5] = new Contact("Carlos", 987654321, "carlos.lima@live.com");
        ct[6] = new Contact("Luís", 936548732, "luis.martins@gmail.com");
        ct[7] = new Contact("Clara", 926537801, "clara.pereira@icloud.com");

        // Loop through the array and print each contact's details
        for (int i = 0; i < ct.length; i++) {
            System.out.println(ct[i]);
        }
    }
}
