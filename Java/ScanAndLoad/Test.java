package ScanAndLoad;

import java.io.*;
import java.util.Scanner;

public class Test implements Serializable {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter 1 to Save Data or 2 to Load Data:");
        String option = scanner.nextLine();

        if (option.equals("1")) {
            saveData();
        } else if (option.equals("2")) {
            loadData();
        } else {
            System.out.println("Invalid option.");
        }
        scanner.close();
    }

    private static void saveData() {
        Scanner scanner = new Scanner(System.in);

        try {
            System.out.println("Enter your name:");
            String name = scanner.nextLine();
            System.out.println("Enter the message text:");
            String text = scanner.nextLine();
            System.out.println("Enter the title:");
            String title = scanner.nextLine();
            System.out.println("Enter the filename to save:");
            String filename = scanner.nextLine();

            Message message = new Message(name, text, title);

            FileOutputStream fos = new FileOutputStream(new File("Java/ScanAndLoad/" + filename)); // Save in
                                                                                                   // the
                                                                                                   // folder
            ObjectOutputStream oos = new ObjectOutputStream(fos);
            oos.writeObject(message);
            oos.close();
            fos.close();

            System.out.println("Data successfully saved in file: " + filename);
        } catch (IOException e) {
            System.out.println("Error saving data: " + e.getMessage());
        }

        scanner.close();
    }

    private static void loadData() {
        Scanner scanner = new Scanner(System.in);

        try {
            System.out.println("Enter the filename to load:");
            String filename = scanner.nextLine();

            // Create FileInputStream and ObjectInputStream to read the object from the file
            FileInputStream fis = new FileInputStream(new File("Java/ScanAndLoad/" + filename)); // Load from
                                                                                                 // the folder
            ObjectInputStream ois = new ObjectInputStream(fis);

            // Read the object and cast it to Message
            Message message = (Message) ois.readObject();

            // Display the loaded data
            System.out.println("Data loaded:");
            System.out.println("Name: " + message.getName());
            System.out.println("Text: " + message.getText());
            System.out.println("Title: " + message.getTitle());

            ois.close();
            fis.close();
        } catch (IOException | ClassNotFoundException e) {
            System.out.println("Error loading data: " + e.getMessage());
        }

        scanner.close();
    }
}
