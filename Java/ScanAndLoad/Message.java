package ScanAndLoad;

import java.io.Serializable;

public class Message implements Serializable {

    private String name;
    private String text;
    private String title;

    public Message(String name, String text, String title) {
        this.name = name;
        this.text = text;
        this.title = title;
    }

    // Getters
    public String getName() {
        return name;
    }

    public String getText() {
        return text;
    }

    public String getTitle() {
        return title;
    }
}
