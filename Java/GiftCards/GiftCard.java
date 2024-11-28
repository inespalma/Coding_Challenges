package GiftCards;

public abstract class GiftCard {

    protected String recipient;

    public GiftCard(String recipient) {
        this.recipient = recipient;
    }

    public void showMessage() {
        // This method is meant to be overridden by subclasses to show a message
    }
}
