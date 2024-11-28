package EnemiesGame;

import java.util.Scanner;

public class Test {

    public static void main(String[] args) {

        Enemy enemy;
        Scanner scanner = new Scanner(System.in);
        EnemyFactory factory = new EnemyFactory();

        System.out.println("Enter 'S' for Skeleton or 'C' for Commander:");

        if (scanner.hasNextLine()) {
            String letter = scanner.nextLine();
            enemy = factory.createEnemy(letter);

            // Show enemy details (assuming a showEnemy() method exists)
            enemy.showEnemy();
        }
        scanner.close();
    }
}
