package EnemiesGame;

public abstract class Enemy {

    public String name;
    public int position;

    public void showEnemy() {
        System.out.println(name + "is here" );
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setPosition(int position) {
        this.position = position;
    }
}
