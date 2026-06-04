import java.util.*;
public class NumberGuessingGame {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Random random = new Random();
        int secNum = random.nextInt(100) + 1; 
        int g;
        int attempts = 0;
        System.out.println("Number Guessing Game");
        System.out.println("Guess a number between 1 and 100");
        do {
            System.out.print("Enter your guess: ");
            g = sc.nextInt();
            attempts++;
            if (g > secNum) {
                System.out.println("Too High! Try Again.");
            } 
            else if (g < secNum) {
                System.out.println("Too Low! Try Again.");
            } 
            else {
                System.out.println("Congrats You guessed the correct number.");
                System.out.println("Number of attempts: " +attempts);
            }
        } while (guess != secNum);
    }
}