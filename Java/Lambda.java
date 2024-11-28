import java.util.ArrayList;

public class Lambda {
    public static void main(String[] args) {

        ArrayList<Integer> numero = new ArrayList<>();
        numero.add(1);
        numero.add(2);
        numero.add(3);
        numero.add(4);
        numero.add(5);
        numero.forEach((n) -> System.out.println(n * 2));

    }

}
