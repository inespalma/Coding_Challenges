public class CalculateCircleArea {
    public static void main(String[] args) {
        System.out.println(circleArea(8));  
    }
    
    public static double circleArea(int r) {
        double area = Math.PI * r * r;
        return area;
    }
}
