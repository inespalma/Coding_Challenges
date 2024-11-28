package TrimText;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class TrimAttributes {

    public static void main(String[] args) {

        List<Person> people = new ArrayList<>();
        try {
            // Replace the file path with your actual file location.
            Scanner scanner = new Scanner(new File("Java/TrimThroughText/List.txt"), "UTF-8");

            while (scanner.hasNextLine()) {
                String line = scanner.nextLine().trim(); // Remove extra whitespace
                String[] tokens = line.split(":");

                // Check if the line has the expected format
                if (tokens.length == 3) {
                    try {
                        String name = tokens[0].trim();
                        int age = Integer.parseInt(tokens[1].trim());
                        String location = tokens[2].trim();

                        Person person = new Person(name, age, location);
                        people.add(person);
                    } catch (NumberFormatException e) {
                        System.out.println("Invalid age format in line: " + line);
                    }
                } else {
                    System.out.println("Skipping invalid line: " + line);
                }
            }
        } catch (FileNotFoundException e) {
            System.out.println("File not found. Please check the file path.");
            e.printStackTrace();
        }

        // Print all people
        for (Person person : people) {
            System.out.println(person);
        }
    }
}
