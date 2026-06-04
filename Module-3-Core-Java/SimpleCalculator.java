import java.util.*;
class SimpleCalculator{
	public static void main(String args[]){
		Scanner sc = new Scanner(System.in);
		String input = "";
		while (!input.equalsIgnoreCase("stop")) {
			double a,b;
			System.out.println("Enter the two values:");
			a=sc.nextDouble();
			b=sc.nextDouble();
			System.out.println("+ for addition, - for subtraction, * for multiplication, / for division, e for Stop :");
			input = sc.next();
			switch (input.toLowerCase()) {
				case "+":
					System.out.println(a+b);
					break;
				case "-":
					System.out.println(a-b);
					break;
				case "*":
					System.out.println(a*b);
					break;
				case "/":
					if(b!=0){
						System.out.println(a/b);
					}
					else
						System.out.println("Error: Division by zero is not allowed.");
					break;
				case "e":
					System.exit(0);
					break;
				default:
					System.out.println("Invalid.");
			}
		}
	}
}