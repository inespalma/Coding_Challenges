package Observer;

import java.util.ArrayList;
import java.util.List;

public class SubscribersService implements Subject {
    private List<Observer> subscriberList = new ArrayList<>();

    @Override
    public void add(Observer o) {
        subscriberList.add(o);
    }

    @Override
    public void remove(Observer o) {
        subscriberList.remove(o);
    }

    @Override
    public void notify(Message msg) {
        for (Observer subscriber : subscriberList) {
            subscriber.update(msg);
        }
    }
}
