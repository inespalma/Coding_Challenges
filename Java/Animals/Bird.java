package Animals;

public class Bird extends Animal {
    public Bird() {

        super();
        setSound("cucruu");
        setFlyingAnimal(new CanFly());
        tryToFly();
    }
}
