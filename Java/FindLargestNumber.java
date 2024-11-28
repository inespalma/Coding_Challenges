import java.util.Scanner;

public class FindLargestNumber {
    public static void main(String[] args) {
        findLargestValue();
    }

    public static void findLargestValue() {
        Scanner in = new Scanner(System.in);
        System.out.println("Enter three numbers: ");

        System.out.print("Number 1? ");
        int num1 = in.nextInt();
        System.out.print("Number 2? ");
        int num2 = in.nextInt();
        System.out.print("Number 3? ");
        int num3 = in.nextInt();

        if (num1 >= num2 && num1 >= num3) {
            System.out.println("The largest number is " + num1);
        } else if (num2 >= num1 && num2 >= num3) {
            System.out.println("The largest number is " + num2);
        } else {
            System.out.println("The largest number is " + num3);
        }

        in.close();
    }
}
