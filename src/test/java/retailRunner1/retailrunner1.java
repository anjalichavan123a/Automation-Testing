package retailRunner1;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features="src/test/java/retailFeature"
		,glue={"retailDefination","retailHooks",},
		dryRun=true,
		//tags={"@tag1","@tag2"},
				monochrome=true,
				plugin={"pretty","html:target/cucumber-pretty","junit:target/cucumber.xml","json:target/cucumber.json"}
		)
public class retailrunner1 {

}
