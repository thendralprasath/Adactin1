package org.locators;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.parent.Parent;

public class SelectHotel extends Parent{

	public SelectHotel() {
		PageFactory.initElements(driver, this);
	}
	
	
	@FindBy(id="radiobutton_0")
	private WebElement radiobutton_2;
	
	@FindBy(id="continue")
	private WebElement btncontinue;

	public WebElement getRadiobutton_2() {
		return radiobutton_2;
	}

	public WebElement getBtncontinue() {
		return btncontinue;
	}
	
	
	
}
