package org.runner;


//import org.junit.AfterClass;
import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features= { "src//test//resources//sampleadactin.feature" }, glue= {"org.stepdef"},monochrome=true,
plugin= {"pretty",
		"html:C:\\Users\\ARI\\Desktop\\eworkspace\\Adactin1\\target",
		"json:C:\\Users\\ARI\\Desktop\\eworkspace\\Adactin1\\target\\report.json",
		"junit:C:\\Users\\ARI\\Desktop\\eworkspace\\Adactin1\\target\\fb.xml",
		
}
)
public class BaseTestRunner {
	
	
}
