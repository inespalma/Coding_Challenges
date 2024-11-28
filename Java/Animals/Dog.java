package Animals;

public class Dog extends Animal {

    public Dog() {

        super();
        setName("pluto");
        setSound("ao ao");
        setFlyingAnimal(new CantFly());
        tryToFly();

    }
}
