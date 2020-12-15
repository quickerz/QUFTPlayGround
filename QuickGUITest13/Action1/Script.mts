Browser("Advantage Shopping").Page("Advantage Shopping").Link("SpeakersCategoryTxt").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").Link("SpeakersCategoryTxt")_;_script infofile_;_ZIP::ssf1.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("HP S9500 Bluetooth Wireless").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("HP S9500 Bluetooth Wireless")_;_script infofile_;_ZIP::ssf2.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Wireless").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Wireless")_;_script infofile_;_ZIP::ssf3.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Wireless").Check CheckPoint("Wireless") @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Wireless")_;_script infofile_;_ZIP::ssf4.xml_;_
itemprice = Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Item Price").GetROProperty("innertext")
ConvertedValue = CCur(mid(itemprice, 2,6))
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("quantity").Set DataTable("quantity", dtGlobalSheet) @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("quantity")_;_script infofile_;_ZIP::ssf5.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("save_to_cart").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("save to cart")_;_script infofile_;_ZIP::ssf6.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").Link("ShoppingCart").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").Link("ShoppingCart")_;_script infofile_;_ZIP::ssf7.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("check_out_btn").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("check out btn")_;_script infofile_;_ZIP::ssf8.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("TotalPrice Output").Output CheckPoint("$600.00") @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("$600.00")_;_script infofile_;_ZIP::ssf9.xml_;_

TotalPrice = CCur(DataTable("TotalPrice", dtGlobalSheet))
quantity = CInt(DataTable("quantity", dtGlobalSheet))

If TotalPrice = quantity * ConvertedValue Then
	Reporter.ReportEvent micPass, "Price Check", "Calculation Passed"
else
	Reporter.ReportEvent micFail, "Price Check", "Calculation Failed"
End If

Browser("Advantage Shopping").Page("Advantage Shopping").Link("SHOPPING CART").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").Link("SHOPPING CART")_;_script infofile_;_ZIP::ssf9.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("REMOVE").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("REMOVE")_;_script infofile_;_ZIP::ssf10.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").Link("Link").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").Link("Link")_;_script infofile_;_ZIP::ssf11.xml_;_
Browser("Advantage Shopping").Close
