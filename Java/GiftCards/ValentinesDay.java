package GiftCards;

public class ValentinesDay extends GiftCard {

    public ValentinesDay(String recipient) {
        super(recipient);
    }

    public void showMessage() {
        System.out.println(recipient + ", happy Valentine's Day!");
    }
}
