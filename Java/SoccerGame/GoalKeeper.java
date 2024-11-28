package SoccerGame;

public class GoalKeeper extends Player {

    private int goalsConceded;

    // Constructor
    public GoalKeeper(String name, int number) {
        super(name, number); // Call the constructor of the Player class
        this.goalsConceded = 0; // Initialize goals conceded to 0
    }

    // Method to increment goals conceded
    public void incGoalsConceded() {
        goalsConceded++;
    }

    public int getGoalsConceded() {
        return goalsConceded;
    }

    // Override toString() method to print the goalkeeper's details
    @Override
    public String toString() {
        return "Goalkeeper{" +
                "name='" + super.getName() + '\'' +
                ", num=" + getNumber() +
                ", goalsScored=" + getGoalsScored() + // Access getGoalsScored() method from Player
                ", goalsConceded=" + goalsConceded +
                '}';
    }
}
