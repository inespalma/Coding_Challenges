package Commands;

public class TurnOnTv implements Command {

    private ElectronicDevice electronicDevice;

    public TurnOnTv(ElectronicDevice electronicDevice) {
        this.electronicDevice = electronicDevice;
    }

    @Override
    public void execute() {
        electronicDevice.on();
    }

    @Override
    public void undo() {
        electronicDevice.off();
    }
}
