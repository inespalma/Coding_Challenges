package Singleton;

public class Test {
    public static void main(String[] args) {
        
        Singleton a = Singleton.getInstace();
        Singleton b = Singleton.getInstace();

        System.out.println(a.getName());
        System.out.println(b.getName());
        a.setName("hello");
        System.out.println(a.getName());
        System.out.println(b.getName());
    }
}