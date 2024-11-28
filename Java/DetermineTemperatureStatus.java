public class DetermineTemperatureStatus {
    public static void main(String[] args) {
        getTemperatureStatus(-1);
        getTemperatureStatus(6);
        getTemperatureStatus(20);
        getTemperatureStatus(40);
        getTemperatureStatus(55);
    }

    public static void getTemperatureStatus(int temp) {
        if (temp < 0) {
            System.out.println("It's freezing");
        } else if (temp < 15) {
            System.out.println("It's cold");
        } else if (temp <= 30) {
            System.out.println("It's normal");
        } else if (temp <= 50) {
            System.out.println("It's hot");
        } else {
            System.out.println("It's boiling");
        }
    }
}
