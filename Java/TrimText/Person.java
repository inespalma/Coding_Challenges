package TrimText;

public class Person {
    private String name;
    private int age;
    private String location;

    public Person(String name, int age, String location) {
        this.name = name;
        this.age = age;
        this.location = location;
    }

    @Override
    public String toString() {
        return "Person{" +
                "name='" + name + '\'' +
                ", age=" + age +
                ", location='" + location + '\'' +
                '}';
    }
}