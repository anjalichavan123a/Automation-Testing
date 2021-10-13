package retailDefination;

import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;
import retailHooks.retailhooks;

public class retaildefination 
{
	WebDriver driver=retailhooks.driver;
	@And("^User is on the Retail application$")
	public void user_is_on_the_Retail_application() 
	{
	    try
	    {
	    	System.out.println("User is on Retail application page");
	    }
	    catch(Exception e)
	    {
	    	System.out.println("User is unble to search retail page"+e);
	    }
	}
	@And("^User enter the username and password$")
	public void user_enter_the_username_and_password()  
	{
		 try
		  {
			  driver.findElement(By.name("username")).sendKeys("admin");
			  driver.findElement(By.name("password")).sendKeys("admin@123");
		  }
		  catch(Exception e)
		  {
			  System.out.println("User is unble to enter data"+e);
		  }
	}
	
	@And("^click on login button$")
	public void click_on_login_button() 
	{
		try
		  {
			  driver.findElement(By.tagName("button")).click();
			 
		  }
		  catch(Exception e)
		  {
			  System.out.println("User is unble to login"+e);
		  }
	   
	}

	@And("^User navigate to the Dashboard$")
	public void user_navigate_to_the_Dashboard()  
	{
		try{
			String expectedtitle=driver.getTitle();
			String actualtitle="Dashboard";
			Assert.assertEquals(expectedtitle,actualtitle);
			Thread.sleep(2000);
		}
		catch(Exception e)
		{
			System.out.println("User not able to navigate to dashboard"+e);
		}
	}
	@And ("^User click on Button-menue$")
	public void user_click_on_Button_menue() {
	    try
	    {
	    	driver.findElement(By.id("button-menu")).click();
	    }
	    catch(Exception e)
	    {
	    	System.out.println("User unble to click on button-menue" +e);
	    }
	}
//////////////////////////////////Sales/////////////////////////////////////////////////////
	
	
	@Then("^User click on Sales$")
	public void user_click_on_Sales() {
		try
		  {
			  driver.findElement(By.xpath("//span[contains(text(),'Sales')]")).click();
			  Thread.sleep(2000);
			 
		  }
		  catch(Exception e)
		  {
			  System.out.println("User is unble to click on sales button" +e);
		  }
	   
	}

	@And("^User click on returns$")
	public void user_click_on_returns()  
	{
		try
		  {
			  driver.findElement(By.linkText("Returns")).click();
			 
		  }
		  catch(Exception e)
		  {
			  System.out.println("User is unble to click on returns link" +e);
		  }
	   
	}
	
	@And("^Click on Add button$")
	public void click_on_Add_button() 
	{
		
		try
		  {
			  driver.findElement(By.xpath("//a[@data-toggle='tooltip']")).click();
			 
		  }
		  catch(Exception e)
		  {
			  System.out.println("User is unble to click on returns" +e);
		  }
	}
	@And("^Enter the \"([^\"]*)\",\"([^\"]*)\", \"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\"$")
	public void enter_the(String Order_ID,String Order_Date,String Customer, String First_Name, String Last_Name, String E_Mail, String Telephone, String Product,String Model, String Quantity, String Comment){
		try
		   {
		
			   driver.findElement(By.name("order_id")).sendKeys(Order_ID);
			   driver.findElement(By.name("date_ordered")).sendKeys(Order_Date);
			   driver.findElement(By.name("customer")).sendKeys(Customer);
			   driver.findElement(By.name("firstname")).sendKeys(First_Name);
			   driver.findElement(By.name("lastname")).sendKeys(Last_Name);
			   driver.findElement(By.name("email")).sendKeys(E_Mail);
			   driver.findElement(By.name("telephone")).sendKeys(Telephone);
			   driver.findElement(By.name("product")).sendKeys(Product);;
			   driver.findElement(By.name("model")).sendKeys(Model);
			   driver.findElement(By.name("quantity")).sendKeys(Quantity);
			   driver.findElement(By.name("comment")).sendKeys(Comment);
			   
			  
			  
	     }
		   catch(Exception e)
		   {
			   System.out.println("User is unble to enter data"+e);
		   }
	}
	@And("^User select the Return_Reason and Opened and Return_Action and Return_Status$")
	public void user_select_the_Return_Reason_and_Opened_and_Return_Action_and_Return_Status() {
	   try
	   {
		   /*WebElement data=driver.findElement(By.id("input-return-reason"));
	       data.click();
	       Actions action = new Actions(driver);
	       action.moveByOffset(5,5).perform();  
	       Thread.sleep(4000);
	       
	       WebElement data1=driver.findElement(By.id("input-opened"));
	       data1.click();
	       Actions action1 = new Actions(driver);
	       action1.moveByOffset(2,2).perform();  
	       Thread.sleep(4000);
	       
	       WebElement data2=driver.findElement(By.id("input-return-action"));
	       data2.click();
	       Actions action2 = new Actions(driver);
	       action2.moveByOffset(3,3).perform();  
	       Thread.sleep(4000);
	       
	       WebElement data3=driver.findElement(By.id("input-return-status"));
	       data3.click();
	       Actions action3 = new Actions(driver);
	       action3.moveByOffset(3,3).perform();  
	       Thread.sleep(4000);*/
	   
		   Select dropdown = new Select(driver.findElement(By.id("input-return-reason")));  
		   dropdown.selectByValue("2");
		   Select dropdown1 = new Select(driver.findElement(By.id("input-opened")));  
		   dropdown1.selectByValue("1"); 
		   Select dropdown3 = new Select(driver.findElement(By.id("input-return-action")));  
		   dropdown3.selectByValue("1"); 
		   Select dropdown4 = new Select(driver.findElement(By.id("input-return-status")));  
		   dropdown4.selectByValue("2"); 
		   
		   
	   }
	   catch(Exception e)
	   {
		   System.out.println("User is unble to select data"+e);
	   }
	}
	@And("^User click on save  button$")
	public void user_click_on_save_button()  {
		try{
			   driver.findElement(By.xpath("//*[@id='content']/div[1]/div/div/button")).click();
			   Thread.sleep(2000);
			 
		   }
		   catch(Exception e)
		   {
			   System.out.println("User unble to save"+e);
		   }
	}

	@And("^User click on cancle button$")
	public void user_click_on_cancle_button()  {
		try{
			
			  driver.findElement(By.xpath("//*[@id='content']/div[1]/div/div/a")).click();
			  Thread.sleep(2000);
		   }
		   catch(Exception e)
		   {
			   System.out.println("User unble to  cancle"+e);
		   }
	}

	@And("^user navigate to dashboard$")
	public void user_navigate_to_dashboard()  {
		try{
			String expectedtitle=driver.getTitle();
			String actualtitle="Product Returns";
			Assert.assertEquals(expectedtitle,actualtitle);
			Thread.sleep(2000);
			System.out.println("Successfully navigate to dashboard");
		}
		catch(Exception e)
		{
			System.out.println("User not able to navigate to dashboard"+e);
		}
	}
@Then("^check the displayed message$")
public void check_the_displayed_message() {

	try {
		 if(isDisplayed1()) {
				 System.out.print("Order ID given "+ " ");
				 System.out.println(driver.findElement(By.xpath("//*[@class='alert alert-danger']")).getText());
			}
			else
			{
				System.out.println("Order ID is entered");
			}
			
	      if(isDisplayed2())
		    {
			 System.out.print("First Name  given "+ " ");
			 System.out.println(driver.findElement(By.xpath("//*[@class='alert alert-danger']")).getText());
		    }
	      else
			{
				System.out.println("First Name is entered");
			}
	      if(isDisplayed3())
		    {
			 System.out.print("Last Name  given "+ " ");
			 System.out.println(driver.findElement(By.xpath("//*[@class='alert alert-danger']")).getText());
		    }
	      else
			{
				System.out.println("Last Name is entered");
			}
	      if(isDisplayed4())
		    {
			 System.out.print("E-mail   given "+ " ");
			 System.out.println(driver.findElement(By.xpath("//*[@class='alert alert-danger']")).getText());
		    }
	      else
			{
				System.out.println("E-mail is entered");
			}
	      if(isDisplayed5())
		    {
			 System.out.print("Telephone is  given "+ " ");
			 System.out.println(driver.findElement(By.xpath("//*[@class='alert alert-danger']")).getText());
		    }
	      else
			{
				System.out.println("Telephone is entered");
			}
	    
	      if(isDisplayed6())
	       {
		    System.out.print("product name is  given "+ " ");
		    System.out.println(driver.findElement(By.xpath("//*[@class='alert alert-danger']")).getText());
	       }
         else
		  {
			System.out.println("product Name is entered");
		  }
      
        if(isDisplayed7())
          {
            System.out.print("Model is  given "+ " ");
            System.out.println(driver.findElement(By.xpath("//*[@class='alert alert-danger']")).getText());
          }
         else
          {
	       System.out.println("Model is entered");
          }
        if(isDisplayed())
		  {
			   System.out.print("Valid Message"+ "  ");
			   System.out.println(driver.findElement(By.xpath("//*[contains(text(),'Success')]")).getText());
		  }
        

	}
		 catch(Exception e) 
	            {
					System.out.println(e);

			    }
}
				  public boolean isDisplayed() {
				    try {
				       WebElement element = driver.findElement(By.xpath("//*[contains(text(),'Success')]"));
				       boolean flag = element.isDisplayed();
				       return flag;
				        	
				            
				      } catch (Exception e)
				         {
				            return false;
				         }
				     }
				    public boolean isDisplayed1() {
					    try {
					       WebElement element = driver.findElement(By.xpath("//*[contains(text(),'Order ID required!')]"));
					       boolean flag = element.isDisplayed();
					       return flag;
					       }
					    catch (Exception e) 
					    {
					     return false;
					    }
				     }
					        
					public boolean isDisplayed2() {
						 try {
						    WebElement element = driver.findElement(By.xpath("//*[contains(text(),'First Name must be between 1 and 32 characters!')]"));
						     boolean flag = element.isDisplayed();
						     return flag;
						     } 
						 catch (Exception e) 
						 {
						    return false;
						 }
					  }
						        
                   public boolean isDisplayed3() {
						try {
							  WebElement element = driver.findElement(By.xpath("//*[contains(text(),'Last Name must be between 1 and 32 characters!')]"));
							  boolean flag = element.isDisplayed();
							  return flag;
							  }
						catch (Exception e) {
							            return false;
							        }
						       }
				    public boolean isDisplayed4() {
					    try {
							WebElement element = driver.findElement(By.xpath("//*[contains(text(),'E-Mail Address does not appear to be valid!')]"));
						    boolean flag = element.isDisplayed();
							return flag;
							} 
					    catch (Exception e)
					          {
								 return false;
						       }
						}
				  public boolean isDisplayed5() {
				        try {
							WebElement element = driver.findElement(By.xpath("//div[contains(text(),'Telephone must be between 3 and 32 characters!')]"));
							boolean flag = element.isDisplayed();
						    return flag;
					      } 
				        catch (Exception e) 
				           {
						      return false;
					       }
				      }
				  public boolean isDisplayed6() {
				        try {
				        	WebElement element = driver.findElement(By.xpath("//*[contains(text(),'Product Name must be greater than 3 and less than 255 characters!')]"));
				        	boolean flag = element.isDisplayed();
				        	return flag;
				           } 
				        catch (Exception e) 
				        {
				            return false;
				        }
			        }
				 public boolean isDisplayed7() {
					   try {
					       WebElement element = driver.findElement(By.xpath("//*[contains(text(),'Product Model must be greater than 3 and less than 64 characters!')]"));
					       boolean flag = element.isDisplayed();
					       return flag;
					       } 
					   catch (Exception e) 
					        {
					            return false;
					        }				        
											        
}
	
/////////////////////////////////////ALPHANUMERIC VALUE////////////////////////////////////////////////
				 @Then("^User Enter the \"([^\"]*)\",\"([^\"]*)\", \"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\"$")
				 public void user_Enter_the(String Order_ID,String Order_Date,String Customer, String First_Name, String Last_Name, String E_Mail, String Telephone, String Product,String Model, String Quantity, String Comment) {
					 try
					   {
					
						   driver.findElement(By.name("order_id")).sendKeys(Order_ID);
						   //System.out.println("Order ID take duplicate value");
						   Assert.fail();
						   driver.findElement(By.name("date_ordered")).sendKeys(Order_Date);
						   driver.findElement(By.name("customer")).sendKeys(Customer);
						   driver.findElement(By.name("firstname")).sendKeys(First_Name);
						   //System.out.println("First name take a number and special character also");
						   Assert.fail();
						   driver.findElement(By.name("lastname")).sendKeys(Last_Name);
						   //System.out.println("Last name take a number and special character also");
						   Assert.fail();
						   driver.findElement(By.name("email")).sendKeys(E_Mail);
						   driver.findElement(By.name("telephone")).sendKeys(Telephone);
						   //System.out.println("Test case failed because telephone take otherthan 10 digit value"); 
						   Assert.fail();
						   driver.findElement(By.name("product")).sendKeys(Product);
						   driver.findElement(By.name("model")).sendKeys(Model);
						   driver.findElement(By.name("quantity")).sendKeys(Quantity);
						   //System.out.println("Test case failed because quantity take other than digit value"); 
						   Assert.fail();
						   driver.findElement(By.name("comment")).sendKeys(Comment);
						   
						  
						  
				     }
					   catch(Exception e)
					   {
						   System.out.println("User is unble to enter data"+e);
					   }
				 }

	
//////////////////////////////////////GIFT VOUCHER///////////////////////////////////////////////////	
	@Then("^user click on Gift Vouchers$")
	public void user_click_on_Gift_Vouchers(){

		try
		  {
			  driver.findElement(By.xpath("//a[contains(text(),'Gift Vouchers')]")).click();
			Thread.sleep(2000);
		  }
		  catch(Exception e)
		  {
			  System.out.println("User is unble to click on giftvoucher" +e);
		  }
	}
	@And("^user click on inner Gift Vouchers$")
	public void user_click_on_inner_Gift_Vouchers()  {

		try
		  {
			   driver.findElement(By.xpath("//*[@id='menu-sale']/ul/li[4]/ul/li[1]/a")).click();
			 Thread.sleep(5000);
		  }
		  catch(Exception e)
		  {
			  System.out.println("User is unble to click on inner giftvoucher" +e);
		  }
	}

	@And("^user click on add button$")
	public void user_click_on_add_button()  {
		try
		  {
			  driver.findElement(By.xpath("//a[@data-toggle='tooltip']")).click();
			  
			 
		  }
		  catch(Exception e)
		  {
			  System.out.println("User is unble to click on add button" +e);
		  }
		
	}

	@And("^user enter \"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\"$")
	public void user_enter(String Code , String  From_Name , String From_E_Mail, String To_Name, String To_E_Mail, String Message, String Amount){
		try
		  {
			  driver.findElement(By.id("input-code")).sendKeys(Code);
			  driver.findElement(By.id("input-from-name")).sendKeys(From_Name);
			  driver.findElement(By.id("input-from-email")).sendKeys(From_E_Mail);
			  driver.findElement(By.id("input-to-name")).sendKeys(To_Name);
			  driver.findElement(By.id("input-to-email")).sendKeys(To_E_Mail);
			  driver.findElement(By.id("input-message")).sendKeys(Message);
			  driver.findElement(By.id("input-amount")).sendKeys(Amount);
			 
		  }
		  catch(Exception e)
		  {
			  System.out.println("User is unble toadd data" +e);
		  }
		
		
	}

	@And("^user select Theme,Status$")
	public void user_select_Theme_Status() {
		try
		  {
			   Select dropdown = new Select(driver.findElement(By.id("input-theme")));  
			   dropdown.selectByValue("8");
			   Select dropdown1 = new Select(driver.findElement(By.id("input-status")));  
			   dropdown1.selectByValue("0");
			  
			 
		  }
		  catch(Exception e)
		  {
			  System.out.println("User is unbletoadd data " +e);
		  }
	}
	@And("^click on save button$")
	public void click_on_save_button() throws Throwable {
		try{
			   driver.findElement(By.xpath("//*[@data-original-title='Save']")).click();
			   Thread.sleep(4000);
			   
		   }
		   catch(Exception e)
		   {
			   System.out.println("User unble to save"+e);
		   }
	}

/////////////////////////Cancle button///////////////////////////
	
	@And("^click on cancle button$")
	public void click_on_cancle_button() throws Throwable {
		try{
	           driver.findElement(By.xpath("//*[@data-original-title='Cancel']")).click();
			    Thread.sleep(4000);
			   
		   }
		   catch(Exception e)
		   {
			   System.out.println("User unble to click on cancle"+e);
		   }
	}
	
	@Then("^User navigate to dashboard of Gift voucher$")
	public void user_navigate_to_dashboard_of_Gift_voucher() {
		try{
			String expectedtitle=driver.getTitle();
			String actualtitle="Gift Vouchers";
			Assert.assertEquals(expectedtitle,actualtitle);
			Thread.sleep(2000);
		}
		catch(Exception e)
		{
			System.out.println("User not able to navigate Gift voucher"+e);
		}
	}
/////////////////////////////////DELETE BUTTON///////////////////////////////////////////////////////
	// user click on inner Gift Vouchers
	@And("^User click on the checkbox of new created record and delete record$")
	public void user_click_on_the_checkbox_of_new_created_record_and_delete_record() {
		try {
			WebElement check = driver.findElement(By.xpath("//td[contains(text(),'132233')]/../td/input"));
			check.click();
			System.out.println("First user Checkbox clicked");
			Thread.sleep(2000);
			WebElement check1 = driver.findElement(By.xpath("//td[contains(text(),'132233')]/../td/input"));
			check1.click();
			System.out.println("Second user Checkbox clicked");
			Thread.sleep(2000);
			WebElement delbtn1 = driver.findElement(By.xpath("//*[@data-original-title='Delete']"));
			delbtn1.click();
			Thread.sleep(3000);

			driver.switchTo().alert().accept();
			Thread.sleep(3000);
			System.out.println("Delete Button clicked");
		    
			

		} catch (Exception e) {
			System.out.println("unable to click on  pop-up" + e);
			
		}
	}

	
////////////////////////EDIT BUTTON/////////////////////////////////////////
@And("^user click on check button$")
public void user_click_on_check_button()  {
	try{
		   driver.findElement(By.xpath("//*[@value='30']")).click();
		   Thread.sleep(8000);

	   }
	   catch(Exception e)
	   {
		   System.out.println("User unble to clickoncheck_button" +e);
	   }
}

@And("^User select on edit option$")
public void user_select_on_edit_option()  {
	try{
		   driver.findElement(By.xpath("//*[@data-original-title='Edit']")).click();
		   Thread.sleep(4000);
	   }
	   catch(Exception e)
	   {
		   System.out.println("User unble toclickoneditbutton" +e);
	   }
}

@And("^user edit  \"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\"$")
public void user_edit(String Code , String  From_Name , String From_E_Mail, String To_Name, String To_E_Mail, String Message, String Amount) {
	try
	  {
		 WebElement data= driver.findElement(By.id("input-code"));
		 data.clear();
		 data.sendKeys(Code);
		 WebElement data1=driver.findElement(By.id("input-from-name"));
		 data1.clear();
		 data1.sendKeys(From_Name);
		 WebElement data2= driver.findElement(By.id("input-from-email"));
		 data2.clear();
		 data2.sendKeys(From_E_Mail);
		 WebElement data3=driver.findElement(By.id("input-to-name"));
		 data3.clear();
		 data3.sendKeys(To_Name);
		 WebElement data4=driver.findElement(By.id("input-to-email"));
		 data4.clear();
		 data4.sendKeys(To_E_Mail);
		 WebElement data5=driver.findElement(By.id("input-message"));
		 data5.clear();
		 data5.sendKeys(Message);
		 WebElement data6=driver.findElement(By.id("input-amount"));
		 data6.clear();
		 data6.sendKeys(Amount);
		 
	  }
	  catch(Exception e)
	  {
		  System.out.println("User is unble to edit data" +e);
	  }
	
}

@And("^user select Theme and Status$")
public void user_select_Theme_and_Status() {
	try
	  {
		   Select dropdown = new Select(driver.findElement(By.id("input-theme")));  
		   dropdown.selectByValue("8");
		   Select dropdown1 = new Select(driver.findElement(By.id("input-status")));  
		   dropdown1.selectByValue("0");
		  
		 
	  }
	  catch(Exception e)
	  {
		  System.out.println("User is unble to select data" +e);
	  }
}


//////////////////////////////////SEND BUTTON//////////////////////////////////////////////////////
@Then("^User click on the bulk checkbox and Send record$")
public void user_click_on_the_bulk_checkbox_and_Send_record() {
	try {
		WebElement check = driver.findElement(By.xpath("//thead/tr[1]/td[1]/input[1]"));
		check.click();
		WebElement delbtn1 = driver.findElement(By.xpath("//*[@id='button-send']"));
		delbtn1.click();
		Thread.sleep(3000);

		driver.switchTo().alert().accept();
		Thread.sleep(3000);
		System.out.println("send  Button clicked");
	    
		

	} catch (Exception e) {
		System.out.println("unable to send data" + e);
		
	}
}

//////////////////////////////SORT GIFT VOUCHER////////////////
@And("^User want to check the sorting functionality on gift voucher$")
public void user_want_to_check_the_sorting_functionality_on_gift_voucher()  {
	try{
		WebElement data=driver.findElement(By.xpath("//*[@id='form-voucher']/div/table/thead/tr/td[2]/a"));
		data.click();
		Thread.sleep(2000);
		System.out.println("User is able to sort the Code in ascending or in descending order");
		WebElement data1=driver.findElement(By.xpath("//a[contains(text(),'From')]"));
		data1.click();
		Thread.sleep(2000);
		System.out.println("User is able to sort the from in ascending or in descending order");
		WebElement data6=driver.findElement(By.linkText("To"));
		data6.click();
		Thread.sleep(2000);
		System.out.println("User is able to sort the To in ascending or in descending order");
		WebElement data2=driver.findElement(By.xpath("//*[contains(text(),'Amount')]"));
		data2.click();
		Thread.sleep(2000);
		System.out.println("User is able to sort the Amount in ascending or in descending order");
		WebElement data3=driver.findElement(By.linkText("Theme"));
		data3.click();
		Thread.sleep(2000);
		System.out.println("User is able to sort the Theme in ascending or in descending order");
		WebElement data4=driver.findElement(By.linkText("Status"));
		data4.click();
		Thread.sleep(2000);
		System.out.println("User is able to sort the statue in ascending or in descending order");
		WebElement data5=driver.findElement(By.xpath("//*[contains(text(),'Date Added')]"));
		data5.click();
		Thread.sleep(2000);
		System.out.println("User is able to sort the Date added in ascending or in descending order");
	}
	catch(Exception e)
	{
		System.out.println("User is uable to sort the field in ascending or in descending order"+e);
	}
	/*try{
		
		 driver.findElement(By.xpath("//a[contains(text(),'Code')]")).click();
		Thread.sleep(2000);
		System.out.println("User is able to sort the Code in ascending or in descending order");
	}
	catch(Exception e)
	{
		System.out.println("User is uable to sort the Code in ascending or in descending order"+e);
	}*/
}
////////////////////////////////DISPLAY GIFT VOUCHER/////////////////////////
@Then("^check the display message of gift voucher$")
public void check_the_display_message_of_gift_voucher() {
	try {
		if(isDisplaymsg1()) {
			 System.out.println(" code given warning message");
   	     }
			 
		else
		{
			System.out.println(" code is entered");
		}
		if(isDisplaymsg2()) {
			 System.out.println(" From Name given warning message");
  	     }
			 
		else
		{
			System.out.println(" From Name is entered");
		}
		if(isDisplaymsg3()) {
			 System.out.println(" From E-Mail given warning message");
  	     }
			 
		else
		{
			System.out.println(" From E-Mail is entered");
		}
		if(isDisplaymsg4()) {
			 System.out.println("To Name given warning message");
  	     }
			 
		else
		{
			System.out.println(" To Name is entered");
		}
		if(isDisplaymsg5()) {
			 System.out.println("To E-Mail given warning message");
  	     }
			 
		else
		{
			System.out.println("To E-Mail is entered");
		}
		if(isDisplaymsg6()) {
			 System.out.println(" Amount given warning message");
  	     }
			 
		else
		{
			System.out.println("Amount is entered");
		}
       
       if(isDisplaymsg())
		  {
			   System.out.print("Valid Message"+ "  ");
			   System.out.println(driver.findElement(By.xpath("//*[contains(text(),'Success')]")).getText());
		  }
       else
       {
    	   System.out.println(driver.findElement(By.xpath("//*[@class='alert alert-danger']")).getText());
       }
       }
		 catch(Exception e) 
	            {
					System.out.println(e);

			    }
}
				  public boolean isDisplaymsg() {
				    try {
				       WebElement element = driver.findElement(By.xpath("//*[contains(text(),'Success')]"));
				       boolean flag = element.isDisplayed();
				       return flag;
				        	
				            
				      } catch (Exception e)
				         {
				            return false;
				         }
				  }
				    public boolean isDisplaymsg1() {
					    try {
					       WebElement element = driver.findElement(By.xpath("//*[contains(text(),'Code must be between 3 and 10 characters!')]"));
					       boolean flag = element.isDisplayed();
					       return flag;
					        	
					            
					      } catch (Exception e)
					         {
					            return false;
					         }
				    }
					    public boolean isDisplaymsg2() {
						    try {
						       WebElement element = driver.findElement(By.xpath("//*[contains(text(),'Your Name must be between 1 and 64 characters!')]"));
						       boolean flag = element.isDisplayed();
						       return flag;
						        	
						            
						      } catch (Exception e)
						         {
						            return false;
						         }
					    }
						    public boolean isDisplaymsg3() {
							    try {
							       WebElement element = driver.findElement(By.xpath("//*[contains(text(),'E-Mail Address does not appear to be valid!')]"));
							       boolean flag = element.isDisplayed();
							       return flag;
							        	
							            
							      } catch (Exception e)
							         {
							            return false;
							         }
						    }
							    public boolean isDisplaymsg4() {
								    try {
								       WebElement element = driver.findElement(By.xpath("//*[contains(text(),'Recipient's Name must be between 1 and 64 characters!')]"));
								       boolean flag = element.isDisplayed();
								       return flag;
								        	
								            
								      } catch (Exception e)
								         {
								            return false;
								         }
							    }
								    public boolean isDisplaymsg5() {
									    try {
									       WebElement element = driver.findElement(By.xpath("//*[contains(text(),'E-Mail Address does not appear to be valid!')]"));
									       boolean flag = element.isDisplayed();
									       return flag;
									        	
									            
									      } catch (Exception e)
									         {
									            return false;
									         }
								    }
								    public boolean isDisplaymsg6() {
									    try {
									       WebElement element = driver.findElement(By.xpath("//*[contains(text(),'Amount must be greater than or equal to 1!')]"));
									       boolean flag = element.isDisplayed();
									       return flag;
									        	
									            
									      } catch (Exception e)
									         {
									            return false;
									         }
									  }
//////////////////////////////BUG OF GIFT VOUCHER/////////////////////////////
@Then("^user enter the\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\"$")
	public void user_enter_the(String Code , String  From_Name , String From_E_Mail, String To_Name, String To_E_Mail, String Message, String Amount){
		try
		  {
			  driver.findElement(By.id("input-code")).sendKeys(Code);
			  driver.findElement(By.id("input-from-name")).sendKeys(From_Name);
			  //System.out.println("input-from-name take a special character and number also")
			  Assert.fail();
			  driver.findElement(By.id("input-from-email")).sendKeys(From_E_Mail);
			  driver.findElement(By.id("input-to-name")).sendKeys(To_Name);
			  //System.out.println("input-to-name take a special character and number also");
			  Assert.fail();
			  driver.findElement(By.id("input-to-email")).sendKeys(To_E_Mail);
			  driver.findElement(By.id("input-message")).sendKeys(Message);
			  driver.findElement(By.id("input-amount")).sendKeys(Amount);
			 // System.out.println("input-amount take a alphanumeric value ");
			  Assert.fail();
			 
		  }
		  catch(Exception e)
		  {
			  System.out.println("User is unble toadd data" +e);
		  }
		}

				 
 ///////////////////////////////VOUCHER THEME//////////////////////////////////////////////
@And("^user click on  Vouchers Theme$")
public void user_click_on_Vouchers_Theme() {
	try{
		   driver.findElement(By.xpath("//*[@id='menu-sale']/ul/li[4]/ul/li[2]/a")).click();
	   }
	   catch(Exception e)
	   {
		   System.out.println("User unble to click on voucher theme" +e);
	   }
}
@And("^user click on add button of voucher theme$")
public void user_click_on_add_button_of_voucher_theme()  {
try{
	   driver.findElement(By.xpath("//a[@data-toggle='tooltip']")).click();
   }
   catch(Exception e)
   {
	   System.out.println("User unble to save"+e);
   }
}

@And("^User enter data of \"([^\"]*)\"$")
public void user_enter_data_of(String Voucher_theme_name) {
try{
	   driver.findElement(By.name("voucher_theme_description[1][name]")).sendKeys(Voucher_theme_name);
   }
   catch(Exception e)
   {
	   System.out.println("User unble to enter data"+e);
   }
}

@And("^user select image$")
public void user_select_image() {
try{
	   driver.findElement(By.xpath("//*[@id='thumb-image']/img")).click();
	   Thread.sleep(1000);
	   driver.findElement(By.id("button-image")).click();
	   Thread.sleep(1000);
	   driver.findElement(By.xpath("//*[@id='filemanager']/div/div[2]/div[5]/div[3]/a")).click();  
	   Thread.sleep(2000);
	  
   }
   catch(Exception e)
   {
	   System.out.println("User unble to  select image"+e);
   }
}
/*@Then("^User click on delete image button$")
public void user_click_on_delete_image_button() throws InterruptedException {
 driver.findElement(By.xpath("//*[@id='thumb-image']/img")).click();
   Thread.sleep(1000);
   driver.findElement(By.id("button-clear")).click();
   Thread.sleep(1000);
}*/


@And("^click on save button of voucher theme$")
public void click_on_save_button_of_voucher_theme(){
try{
	   driver.findElement(By.xpath("//button[@form='form-theme-voucher']")).click();
	
   }
   catch(Exception e)
   {
	   System.out.println("User unble to save"+e);
   }
}

@Then("^User navigate to dashboard of voucher theme$")
public void user_navigate_to_dashboard_of_voucher_theme()  {
	try{
		String expectedtitle=driver.getTitle();
		String actualtitle="Voucher Themes";
		Assert.assertEquals(expectedtitle,actualtitle);
		Thread.sleep(2000);
	}
	catch(Exception e)
	{
		System.out.println("User not able to navigate voucher theme"+e);
	}
}
///////////////////////////////EDIT VOUCHER THEME/////////////////////////////////////////////////

@And("^User click on checkbox$")
public void user_click_on_checkbox()  {
	try{
		driver.findElement(By.xpath("//input[@value='39']")).click();
		   Thread.sleep(4000);
	   }
	   catch(Exception e)
	   {
		   System.out.println("User unble tocheckbox" +e);
	   }
}

@And("^user click on edit button of voucher theme$")
public void user_click_on_edit_button_of_voucher_theme()  {
	try{
		WebElement delbtn1 = driver.findElement(By.xpath("//*[@data-original-title='Edit']"));
		delbtn1.click();
		Thread.sleep(3000);
	   }
	   catch(Exception e)
	   {
		   System.out.println("User unble to click on edit button "+e);
	   }
}

@And("^User edit the data from \"([^\"]*)\"$")
public void user_edit_the_data_from(String Voucher_Theme_code)  {
	try{
		 WebElement data=  driver.findElement(By.name("voucher_theme_description[1][name]"));
		 data.click();
		 Thread.sleep(2000);
		 data.clear();
		 Thread.sleep(2000);
		 data.sendKeys(Voucher_Theme_code);
		 Thread.sleep(1000);
	   }
	   catch(Exception e)
	   {
		   System.out.println("User unble to edit the data"+e);
	   }
}

@And("^user edit the image$")
public void user_edit_the_image()  {
	try{
		driver.findElement(By.xpath("//*[@id='thumb-image']/img")).click();
		   Thread.sleep(1000);
		   driver.findElement(By.id("button-image")).click();
		   Thread.sleep(1000);
		   driver.findElement(By.xpath("//*[@id='filemanager']/div/div[2]/div[4]/div[2]/a")).click();  
		   Thread.sleep(2000);
		  
		  
	   }
	   catch(Exception e)
	   {
		   System.out.println("User unble to edit the image"+e);
	   }
}

@And("^click on save button of vouchertheme$")
public void click_on_save_button_of_vouchertheme()  {
	try{
		   driver.findElement(By.xpath("//button[@form='form-theme-voucher']")).click();
		
	   }
	   catch(Exception e)
	   {
		   System.out.println("User unble to save"+e);
	   }
}

/////////////////////////////DELETE VOUCHER THEME/////////////////////////////////
@And("^User click on the checkbox of created record and delete record$")
public void user_click_on_the_checkbox_of_created_record_and_delete_record()  {
	try {
		WebElement check = driver.findElement(By.xpath("//td[contains(text(),'Birth')]/../td/input"));
		check.click();
		System.out.println("First user Checkbox clicked");
		Thread.sleep(2000);
		WebElement check1 = driver.findElement(By.xpath("//td[contains(text(),'Birth')]/../td/input"));
		check1.click();
		System.out.println("Second user Checkbox clicked");
		Thread.sleep(2000);
		WebElement delbtn1 = driver.findElement(By.xpath("//*[@data-original-title='Delete']"));
		delbtn1.click();
		Thread.sleep(3000);

		driver.switchTo().alert().accept();
		Thread.sleep(3000);
		System.out.println("Delete Button clicked");
	    
		

	} catch (Exception e) {
		System.out.println("unable to click on  pop-up" + e);
		
	}
}

//////////////////////////////SORT VOUCHER THEME with BULK ACTION////////////////////////////////////////////////////
@And("^User want to check the sorting functionality on voucher theme$")
public void user_want_to_check_the_sorting_functionality_on_voucher_theme() {
	try{
		WebElement data=driver.findElement(By.xpath("//a[contains(text(),'Voucher Theme Name')]"));
		data.click();
		Thread.sleep(2000);
		System.out.println("User is able to sort the Voucher theme code in ascending or in descending order");
	}
	catch(Exception e)
	{
		System.out.println("User unable to sort voucher theme code"+e);
	}
}


@Then("^User check bulk functionality$")
public void user_check_bulk_functionality()  {
	try{
		WebElement data=driver.findElement(By.xpath("//thead/tr[1]/td[1]"));
		data.click();
		Thread.sleep(2000);
		System.out.println("User is able to perform bulk action");
	}
	catch(Exception e)
	{
		System.out.println("User unable to perform bulk action"+e);
	}
}
///////////////////////////////DISPLAY MESSAGE///////////////////////////////

@Then("^check the display message of voucher theme$")
public void check_the_display_message_of_voucher_theme(){
    try {
    	if(isDisplay1()) {
			 System.out.println("voucher theme code given warning message");
    	}
			 
		else
		{
			System.out.println("Voucher theme code is entered");
		}
       
       if(isDisplay())
		  {
			   System.out.print("Valid Message"+ "  ");
			   System.out.println(driver.findElement(By.xpath("//*[contains(text(),'Success')]")).getText());
		  }
       }
		 catch(Exception e) 
	            {
					System.out.println(e);

			    }
}
				  public boolean isDisplay() {
				    try {
				       WebElement element = driver.findElement(By.xpath("//*[contains(text(),'Success')]"));
				       boolean flag = element.isDisplayed();
				       return flag;
				        	
				            
				      } catch (Exception e)
				         {
				            return false;
				         }
				     }
				  public boolean isDisplay1() {
					    try {
					       WebElement element = driver.findElement(By.xpath("//div[contains(text(),'Voucher Theme Name must be between 3 and 32 characters!')]"));
					       boolean flag = element.isDisplayed();
					       return flag;
					        	
					            
					      } catch (Exception e)
					         {
					            return false;
					         }
					     }
}






