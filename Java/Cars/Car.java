package Cars;

public class Car {

    private String licensePlate;
    private String brand;
    private int yearOfSale;

    public Car(String licensePlate, String brand, int yearOfSale) {
        this.licensePlate = licensePlate;
        this.brand = brand;
        this.yearOfSale = yearOfSale;
    }

    // Getters
    public String getLicensePlate() {
        return licensePlate;
    }

    public String getBrand() {
        return brand;
    }

    public int getYearOfSale() {
        return yearOfSale;
    }

    public String toString() {
        return "Car{" +
                "licensePlate='" + licensePlate + '\'' +
                ", brand='" + brand + '\'' +
                ", yearOfSale=" + yearOfSale +
                '}';
    }
}