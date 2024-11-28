package SoccerGame;

public class Test {
    public static void main(String[] args) {
        FieldPlayer player1 = new FieldPlayer("Manel", 11);
        GoalKeeper player2 = new GoalKeeper("Ze", 12);

        player1.incGoalsScored();
        player1.incGoalsScored();
        player2.incGoalsScored();
        player2.incGoalsScored();
        player2.incGoalsConceded();
        player2.incGoalsConceded();
        player2.incGoalsConceded();
        player1.incrementPassesMade();
        player1.incrementPassesMade();
        player1.incrementPassesMade();
        player1.incrementPassesMade();
        player1.incrementPassesReceived();
        player1.incrementPassesReceived();
        player1.incrementPassesReceived();
        player1.incrementPassesReceived();
        player1.incrementPassesReceived();

        System.out.println(player1);
        //FieldPlayer {name='Manel', number=11, goalsScored=2, passesMade=4, passesReceived=5}
        System.out.println(player2);
        //Goalkeeper {name='Zé', num=12, goalsScored=2, goalsConceded=3}
    }
}