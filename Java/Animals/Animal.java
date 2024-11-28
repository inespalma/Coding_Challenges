package Animals;

public class Animal {
    private String name;
    private String sound;
    private Fly fly;

    // Getters
    public String getName() {
        return name;
    }
    public String getSound() {
        return sound;
    }

    // Setters
    public void setName(String name) {
        this.name = name;
    }

    public void setSound(String sound) {
        this.sound = sound;
    }

    public String tryToFly() {
        return fly.Fly();
    }

    public void setFlyingAnimal(Fly newFlyingAnimal) {
        this.fly = newFlyingAnimal;
    }
}
