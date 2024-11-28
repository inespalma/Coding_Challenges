public class CelsiusToFahrenheitConversion {
    public static void main(String[] args) {
        System.out.println(celToFahr(8));
    }

    public static double celToFahr (double celsius) {
        double fahrenheit  = 1.8 * celsius + 32;
        return fahrenheit;
    }
}
