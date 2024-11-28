package Observer;

public class Test {
    public static void main(String[] args) {

        // Create the subject (service) and some subscribers
        SubscribersService service = new SubscribersService();

        Subscriber subscriber1 = new Subscriber("Alice");
        Subscriber subscriber2 = new Subscriber("Bob");
        Subscriber subscriber3 = new Subscriber("Charlie");

        // Add subscribers to the service
        service.add(subscriber1);
        service.add(subscriber2);
        service.add(subscriber3);

        // Remove a subscriber
        service.remove(subscriber2);

        // Notify subscribers
        Message message1 = new Message("First update available!");
        System.out.println("Sending first message:");
        service.notify(message1);

        Message message2 = new Message("Second update available!");
        System.out.println("\nSending second message:");
        service.notify(message2);

    }
}
