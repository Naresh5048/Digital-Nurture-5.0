import java.util.*;

record Person(String name, int age) {}

public class RecordExample {
    public static void main(String[] args) {
        Person p1 = new Person("Tej", 20);
        Person p2 = new Person("Ravi", 17);
        Person p3 = new Person("Kiran", 22);
        System.out.println(p1);
        System.out.println(p2);
        System.out.println(p3);
        List<Person> people = Arrays.asList(p1, p2, p3);
        System.out.println("\nPersons age 18 and above:");
        people.stream()
              .filter(p -> p.age() >= 18)
              .forEach(System.out::println);
    }
}