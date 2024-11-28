package GiftCards;

public class Christmas extends GiftCard {

    public Christmas(String recipient) {
        super(recipient);
    }

    public void showMessage() {
        System.out.println(recipient + ", Merry Christmas!");
    }
}
