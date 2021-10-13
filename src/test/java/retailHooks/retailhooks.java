package retailHooks;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class retailhooks {
	public static WebDriver driver;
	@Before
  public void initialization() throws InterruptedException
  {
	  System.setProperty("webdriver.chrome.driver", "C:\\Users\\ANJPRAKA\\workspace\\Capgemini1\\driver\\chromedriver.exe");
      driver=new ChromeDriver();
		driver.get("http://retailm1.upskills.in/admin");
		Thread.sleep(2000);
  }
	@After
  
  public void close()
  {
	  driver.quit();
  }
}
