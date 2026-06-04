import java.util.Scanner;

public class TryCatchEx{
    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);
        System.out.print("Enter 1st number: ");
        int a=sc.nextInt();
        System.out.print("Enter 2nd number: ");
        int b=sc.nextInt();
        try{
            int res=a/b;
            System.out.println("Result = "+res);
        }catch(ArithmeticException e){
            System.out.println("Can't divide by zero");
        }
    }
}