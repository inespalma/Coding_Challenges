package SoccerGame;

public class FieldPlayer extends Player {

    private int passesMade;
    private int passesReceived;

    public FieldPlayer(String name, int number) {
        super(name, number);
        passesMade = 0;
        passesReceived = 0;
    }

    public void incrementPassesMade() {
        passesMade++;
    }

    public int getPassesMade() {
        return passesMade;
    }

    public void incrementPassesReceived() {
        passesReceived++;
    }

    public int getPassesReceived() {
        return passesReceived;
    }

    @Override
    public String toString() {
        return "FieldPlayer{" +
                "name='" + super.getName() + '\'' +
                ", number=" + getNumber() +
                ", goalsScored=" + getGoalsScored() +
                ", passesMade=" + passesMade +
                ", passesReceived=" + passesReceived +
                '}';
    }
}
