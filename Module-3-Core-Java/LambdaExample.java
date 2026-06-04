import java.util.*;

public class LambdaExample {
    public static void main(String[] args) {
        List<String> names = new ArrayList<>();
        names.add("Naresh");
        names.add("Akash");
        names.add("Ramesh");
        names.add("Rupesh");
        Collections.sort(names, (a, b) -> a.compareTo(b));
        System.out.println("Sorted List:");
        for (String name : names) {
            System.out.println(name);
        }
    }
}