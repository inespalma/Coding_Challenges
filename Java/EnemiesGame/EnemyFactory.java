package EnemiesGame;

public class EnemyFactory {

    public Enemy createEnemy(String letter) {
        // Check if the letter is 'S' for Skeleton
        if (letter.equals("S")) {
            return new Skeleton();
        }
        // Check if the letter is 'C' for Commander
        else if (letter.equals("C")) {
            return new Commander();
        } else {
            // Handle invalid input
            System.out.println("Invalid input. Please enter 'S' for Skeleton or 'C' for Commander.");
            return null;
        }
    }
}
