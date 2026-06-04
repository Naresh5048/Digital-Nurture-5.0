import java.io.*;
import java.util.*;

public class FileWrite {
    public static void main(String[] args) throws Exception {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a string: ");
        String str = sc.nextLine();
        FileWriter fw = new FileWriter("output.txt");
        fw.write(str);
        fw.close();
        System.out.println("Data written to output.txt successfully.");
        sc.close();
    }
}