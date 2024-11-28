import java.util.Scanner;

public class IdentifyNumberType {
    public static void main(String[] args) {
        nInt();
    }

    public static void nInt() {
        Scanner in = new Scanner(System.in);
        try {
            System.out.print("Enter a number: ");
            int input = in.nextInt();

            if (input < 0) {
                System.out.println("This number is negative");
            } else if (input == 0) {
                System.out.println("This number is zero");
            } else {
                System.out.println("This number is positive");
            }
        } catch (Exception e) {
            System.out.println("Please enter a valid number.");
        } finally {
            in.close();
        }
    }
}
