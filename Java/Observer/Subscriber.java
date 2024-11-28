package Observer;

public class Subscriber implements Observer {
    private String name;

    public Subscriber(String name) {
        this.name = name;
    }

    @Override
    public void update(Message msg) {
        System.out.println("Subscriber " + name + " received message: " + msg.getContent());
    }
}
