package Commands;

public class Tv implements ElectronicDevice {

    private int volume = 0;

    @Override
    public void on() {
        System.out.println("TV turned on");
    }

    @Override
    public void off() {
        System.out.println("TV turned off");
    }

    @Override
    public void increaseVolume() {
        volume++;
        System.out.println("The volume is now at " + volume);
    }

    @Override
    public void decreaseVolume() {
        volume--;
        System.out.println("The volume is now at " + volume);
    }
}
