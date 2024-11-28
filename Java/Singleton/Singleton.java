package Singleton;

public class Singleton {

    private static Singleton instance = null;
    private String name;

    private Singleton() {
        name = "abc";
    }

    public static Singleton getInstace() {
        if (instance == null) {
            instance = new Singleton();
        }
        return instance;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

}
