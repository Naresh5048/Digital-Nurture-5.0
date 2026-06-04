import java.util.Scanner;

class LeapYearChecker {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a year: ");
        int y = sc.nextInt();
        if (y % 400 == 0) {
            System.out.println(y + " is a Leap Year.");
        } 
        else if (y % 100 == 0) {
            System.out.println(y + " is Not a Leap Year.");
        } 
        else if (y % 4 == 0) {
            System.out.println(y + " is a Leap Year.");
        } 
        else {
            System.out.println(y + " is Not a Leap Year.");
        }
    }
}