public class RoundToNearestInteger {
    public static void main(String[] args) {
        System.out.println(arredondarParaInteiros(8.8));
        // Output: 9
        System.out.println(arredondarParaInteiros(8.2));
        // Output: 8
    }

    public static int arredondarParaInteiros(double numero) {
        double casaDecimal = numero - (int) numero;

        if (casaDecimal < 0.5) {
            return (int) numero;
        } else {
            return (int) numero + 1;
        }
    }
}
