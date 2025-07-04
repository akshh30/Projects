import java.io.*;

public class BufferReader {

	public static void main(String[] args) throws IOException {
		
		BufferedReader bf = new BufferedReader (new InputStreamReader (System.in));
		
		System.out.print("Enter your Name:");
		String name=bf.readLine();
		
		System.out.print("Enter your age:");
		int age = Integer.parseInt(bf.readLine());
		
		System.out.print("Enter your English marks:");
		int eng = Integer.parseInt(bf.readLine());
		
		System.out.print("Enter your Maths marks:");
		int math = Integer.parseInt(bf.readLine());
		
		System.out.print("Enter your Science marks:");
		int sci = Integer.parseInt(bf.readLine());
		
		float avg=(eng+math+sci)/3f;
		
		
		System.out.println();
		System.out.println("Name:"+name);
		System.out.println("Age:"+age);
		System.out.println("Your academics average is:"+avg);
		
		
		bf.close();
		
		

	}

}
