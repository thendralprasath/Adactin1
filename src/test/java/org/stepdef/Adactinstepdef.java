package org.stepdef;

import org.locators.BookaHotel;
import org.locators.Login;
import org.locators.SearchHotel;
import org.locators.SelectHotel;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;
import org.parent.Parent;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Adactinstepdef extends Parent{
	@Given("user is Adacting home page")
	public void user_is_Adacting_home_page() {
		getDriver("chrome");
		launchUrl("https://adactin.com/HotelApp/");
	}

	@When("user enter {string} and {string}")
	public void user_enter_and(String string, String string2) {
		Login l =new Login();
	    WebElement user =l.getUsername();
		typeText(user, string);
		WebElement pass =l.getPassword();
		typeText(pass, string2);
	    
	}

	@When("user should click login button")
	public void user_should_click_login_button() {
		Login l =new Login();
		WebElement log =l.getLogin();
		btnclick(log);
	    
	}
	
	@When("User enter the {string}  {string} {string} {string}  {string} {string} {string} {string}")
	public void user_enter(String string, String string2, String string3, String string4, String string5, String string6, String string7, String string8) {
	   

		
       WebElement loc = driver.findElement(By.id("location"));
	   Select s1=new Select(loc);
	   s1.selectByIndex(Integer.parseInt(string));
	   
	   WebElement hot = driver.findElement(By.id("hotels"));
	   Select s2=new Select(hot);
	   s2.selectByIndex(Integer.parseInt(string2));
	   
	   WebElement room_type = driver.findElement(By.id("room_type"));
	   Select s3=new Select(room_type);
	   s3.selectByIndex(Integer.parseInt(string3));
	   
	   WebElement room_nos = driver.findElement(By.id("room_nos"));
	   Select s4=new Select(room_nos);
	   s4.selectByIndex(Integer.parseInt(string4));
	   
	   driver.findElement(By.id("datepick_in")).sendKeys(string5);
	   driver.findElement(By.id("datepick_out")).sendKeys(string6);
	   
	   WebElement adult_room = driver.findElement(By.id("adult_room"));
	   Select s5=new Select(adult_room);
	   s5.selectByIndex(Integer.parseInt(string7));
	   
	   WebElement child_room = driver.findElement(By.id("child_room"));
	   Select s6=new Select(child_room);
	   s6.selectByIndex(Integer.parseInt(string8));
	   }
	
	@Then("user  click the search button")
	public void user_should_click_the_search_button() {
		 SearchHotel s =new  SearchHotel();
		 s.getSubmit().click();
	}

	@When("user should selec hotel and continue for booking")
	public void user_should_selec_hotel_and_continue_for_booking() {
		 SelectHotel s1=new SelectHotel();
		   s1.getRadiobutton_2().click();
		   s1.getBtncontinue().click();
		   
	}
	
	@When("User entries {string}  {string} {string} {string}  {string} {string} {string} {string}")
	public void user_entries(String string, String string2, String string3, String string4, String string5, String string6, String string7, String string8) {
		BookaHotel b=new BookaHotel();
		   
		   WebElement first_name = b.getFirst_name();
		   typeText(first_name, string);
		   
		   WebElement last_name = b.getLast_name();
		   typeText(last_name, string2);
		   
		   WebElement address = b.getAddress();
		   typeText(address,string3);
		   
		   WebElement cc_num = b.getCc_num();
		   typeText(cc_num, string4);
		   
		   WebElement cc_type =b.getCc_type();
		   selectByDropDown(cc_type, "index", string5);
		     
		     WebElement cc_exp_month =b.getCc_exp_month();
		     selectByDropDown(cc_exp_month, "index", string6);
		     
		     WebElement cc_exp_year =b.getCc_exp_year();
		     selectByDropDown(cc_exp_year, "index",string7);
		   
		     
		     WebElement cc_cvv = b.getCc_cvv();
			 typeText(cc_cvv, string8);
		   
		     
	}
	
	@Then("user should click the book now button")
	public void user_should_click_the_book_now_button() {
		BookaHotel b=new BookaHotel();
		b.getBook_now().click();
	}




}
