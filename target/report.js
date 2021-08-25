$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/sampleadactin.feature");
formatter.feature({
  "name": "Validating Adacting Webpage",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Generating order Id of Adacting webpage",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is Adacting home page",
  "keyword": "Given "
});
formatter.step({
  "name": "user enter \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user should click login button",
  "keyword": "And "
});
formatter.step({
  "name": "User enter the \"\u003clocation\u003e\"  \"\u003chotels\u003e\" \"\u003croomtype\u003e\" \"\u003cno_of_rooms\u003e\"  \"\u003ccheck_indate\u003e\" \"\u003ccheckout_date\u003e\" \"\u003cadultsper_room\u003e\" \"\u003cchildrenper_room\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user  click the search button",
  "keyword": "And "
});
formatter.step({
  "name": "user should selec hotel and continue for booking",
  "keyword": "And "
});
formatter.step({
  "name": "User entries \"\u003cfirstname\u003e\"  \"\u003clastname\u003e\" \"\u003caddress\u003e\" \"\u003ccreditcardno\u003e\"  \"\u003ccredit_type\u003e\" \"\u003cmonth\u003e\" \"\u003cyear\u003e\" \"\u003ccvv\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user should click the book now button",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "location",
        "hotels",
        "roomtype",
        "no_of_rooms",
        "check_indate",
        "checkout_date",
        "adultsper_room",
        "childrenper_room",
        "firstname",
        "lastname",
        "address",
        "creditcardno",
        "credit_type",
        "month",
        "year",
        "cvv"
      ]
    },
    {
      "cells": [
        "thendralprasath",
        "IWHO25",
        "2",
        "1",
        "2",
        "4",
        "12/08/2021",
        "14/08/2021",
        "2",
        "1",
        "aaa",
        "BBB",
        "CCCC",
        "5432167895432567",
        "3",
        "8",
        "2",
        "465"
      ]
    },
    {
      "cells": [
        "thendralprasath",
        "IWHO25",
        "4",
        "2",
        "3",
        "5",
        "14/08/2021",
        "20/08/2021",
        "3",
        "2",
        "DDD",
        "EBB",
        "HGCC",
        "8752167895432567",
        "2",
        "4",
        "3",
        "065"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Generating order Id of Adacting webpage",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is Adacting home page",
  "keyword": "Given "
});
formatter.match({
  "location": "Adactinstepdef.user_is_Adacting_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter \"thendralprasath\" and \"IWHO25\"",
  "keyword": "When "
});
formatter.match({
  "location": "Adactinstepdef.user_enter_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click login button",
  "keyword": "And "
});
formatter.match({
  "location": "Adactinstepdef.user_should_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter the \"2\"  \"1\" \"2\" \"4\"  \"12/08/2021\" \"14/08/2021\" \"2\" \"1\"",
  "keyword": "When "
});
formatter.match({
  "location": "Adactinstepdef.user_enter(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user  click the search button",
  "keyword": "And "
});
formatter.match({
  "location": "Adactinstepdef.user_should_click_the_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should selec hotel and continue for booking",
  "keyword": "And "
});
formatter.match({
  "location": "Adactinstepdef.user_should_selec_hotel_and_continue_for_booking()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User entries \"aaa\"  \"BBB\" \"CCCC\" \"5432167895432567\"  \"3\" \"8\" \"2\" \"465\"",
  "keyword": "When "
});
formatter.match({
  "location": "Adactinstepdef.user_entries(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click the book now button",
  "keyword": "Then "
});
formatter.match({
  "location": "Adactinstepdef.user_should_click_the_book_now_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Generating order Id of Adacting webpage",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is Adacting home page",
  "keyword": "Given "
});
formatter.match({
  "location": "Adactinstepdef.user_is_Adacting_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter \"thendralprasath\" and \"IWHO25\"",
  "keyword": "When "
});
formatter.match({
  "location": "Adactinstepdef.user_enter_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click login button",
  "keyword": "And "
});
formatter.match({
  "location": "Adactinstepdef.user_should_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter the \"4\"  \"2\" \"3\" \"5\"  \"14/08/2021\" \"20/08/2021\" \"3\" \"2\"",
  "keyword": "When "
});
formatter.match({
  "location": "Adactinstepdef.user_enter(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user  click the search button",
  "keyword": "And "
});
formatter.match({
  "location": "Adactinstepdef.user_should_click_the_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should selec hotel and continue for booking",
  "keyword": "And "
});
formatter.match({
  "location": "Adactinstepdef.user_should_selec_hotel_and_continue_for_booking()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User entries \"DDD\"  \"EBB\" \"HGCC\" \"8752167895432567\"  \"2\" \"4\" \"3\" \"065\"",
  "keyword": "When "
});
formatter.match({
  "location": "Adactinstepdef.user_entries(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click the book now button",
  "keyword": "Then "
});
formatter.match({
  "location": "Adactinstepdef.user_should_click_the_book_now_button()"
});
formatter.result({
  "status": "passed"
});
});