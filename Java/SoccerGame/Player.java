package SoccerGame;

public class Player {

    private String name;
    private int number;
    private int goalsScored = 0;

    // Constructor
    public Player(String name, int num) {
        this.name = name;
        this.number = num;
    }

    // Method to increment goals scored
    public void incGoalsScored() {
        goalsScored++;
    }

    public int getGoalsScored() {
        return goalsScored;
    }
    public String getName() {
        return name;
    }
    public int getNumber() {
        return number;
    }
}
