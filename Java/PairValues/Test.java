package PairValues;

public class Test {

    public static void main(String[] args) {
        Integer i1 = 1; // Initialize the first key
        Integer i2 = 2; // Initialize the second key

        // Create pairs with proper initialization
        Pair<Integer, String> pair1 = new Pair<>(i1, "First Value");
        Pair<Integer, String> pair2 = new Pair<>(i2, "Second Value");

        // Print the key-value pairs
        System.out.println(pair1.getKey() + " -> " + pair1.getValue());
        System.out.println(pair2.getKey() + " -> " + pair2.getValue());
    }
    
}
