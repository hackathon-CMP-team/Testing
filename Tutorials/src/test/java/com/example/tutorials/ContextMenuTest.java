package com.example.tutorials;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import java.util.concurrent.TimeUnit;
import java.util.List;

public class ContextMenuTest {

    public static void main(String[] args) throws Exception {

        // Set the system property for chromedriver
        System.setProperty("webdriver.chrome.driver", "chromedriver");

        // Create a new instance of ChromeDriver
        WebDriver driver = new ChromeDriver();

        // Maximize window
        driver.manage().window().maximize();

        // Navigate to the web page
        driver.get("https://swisnl.github.io/jQuery-contextMenu/demo.html");

        // print the 3 titles in the page
        WebElement pageHeading1 = driver.findElement(By.id("example-code-simple-context-menu"));
        System.out.println(pageHeading1.getText());

        WebElement pageHeading2 = driver.findElement(By.id("example-html-simple-context-menu"));
        System.out.println(pageHeading2.getText());

        WebElement pageHeading3 = driver.findElement(By.id("jquery-context-menu-demo-gallery"));
        System.out.println(pageHeading3.getText());

        TimeUnit.SECONDS.sleep(2);

        // right click the button that says “right click me”
        WebElement button = driver.findElement(By.cssSelector(".context-menu-one.btn.btn-neutral"));
        Actions actions = new Actions(driver);
        actions.contextClick(button).perform();

        // get the context menu
        WebElement contextMenu = driver.findElement(By.cssSelector(".context-menu-list.context-menu-root"));

        // get all the items in the context menu
        List<WebElement> items = contextMenu.findElements(By.tagName("li"));

        // print the text of each item
        for (WebElement item : items) {
            System.out.println(item.getText());
        }

        TimeUnit.SECONDS.sleep(10);

        // Close the browser
        driver.quit();
    }
}