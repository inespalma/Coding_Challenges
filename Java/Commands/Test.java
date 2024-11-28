package Commands;

public class Test {
    public static void main(String[] args) {
        
        ElectronicDevice tv = new Tv();
        Command turnTvOn = new TurnOnTv(tv);

        // Test turn Tv On
        turnTvOn.execute();
        turnTvOn.undo();

        // Test increasing the volume
        tv.increaseVolume();
        tv.decreaseVolume();
    }
}
