package GiftCards;
public class Test {

    public static void main(String[] args) {
        Birthday birthday = new Birthday("Inês", 26);
        Christmas christmas = new Christmas("Maria");
        ValentinesDay valentinesDay = new ValentinesDay("Clara");

        birthday.showMessage();
        christmas.showMessage();
        valentinesDay.showMessage();
    }
}

