package Cars;

import java.util.HashMap;
import java.util.Map;

public class RegisterCars {
    public static void main(String[] args) {

        // Create a carPlates to store cars
        Map<String, Car> carPlates  = new HashMap<>();

        // Create car objects
        Car car1 = new Car("AA-BB-00", "Golf", 2010);
        Car car2 = new Car("HH-YY-00", "BMW", 2017);
        Car car3 = new Car("CC-TT-00", "Mercedes", 2016);
        Car car4 = new Car("74-MB-72", "Renault", 1997);

        // Add cars to the map using their license plate as the key
        carPlates.put(car1.getLicensePlate(), car1);
        carPlates.put(car2.getLicensePlate(), car2);
        carPlates.put(car3.getLicensePlate(), car3);
        carPlates.put(car4.getLicensePlate(), car4);

        System.out.println("Car Register:");
        for (Map.Entry<String, Car> entry : carPlates.entrySet()) {
            System.out.println("License Plate: " + entry.getKey() + ", " + entry.getValue());
        }
    }
}
