package Animals;

public class Test {
    public static void main(String[] args) {
        
        // Test Bird instance
        Bird bird = new Bird();
        bird.setName("Parrot");
        System.out.println("Animal: Bird");
        System.out.println("Name: " + bird.getName());
        System.out.println("Sound: " + bird.tryToFly());
        System.out.println("Flight Ability: " + bird.tryToFly());

        // Test Dog instance
        Dog dog = new Dog();
        dog.setName("Pluto");
        System.out.println("\nAnimal: Dog");
        System.out.println("Name: " + dog.getName());
        System.out.println("Sound: " + dog.tryToFly());
        System.out.println("Flight Ability: " + dog.tryToFly());

        dog.setFlyingAnimal(new CanFly());
        System.out.println("\nAfter enabling flight for the Dog:");
        System.out.println("Flight Ability: " + dog.tryToFly());
    }
}
