package GiftCards;

public class Birthday extends GiftCard {

    private int date;
    
    public Birthday(String recipient, int date) {
        super(recipient);
        this.date = date;
    }

    public void showMessage() {
        System.out.println(recipient + ", today is " + date + ", Happy Birthday!");
    }
}

