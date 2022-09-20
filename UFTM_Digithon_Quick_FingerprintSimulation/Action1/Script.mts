AIUtil.SetContext Device("micclass:=Device")
AIUtil("hamburger_menu").Click
AIUtil("profile").Click
AIUtil("input", "USER NAME").Type "Mercury"
AIUtil.FindTextBlock("PASSWORD").Click
AIUtil("input", "PASSWORD").Type "Mercury"
AIUtil("button", "LOGIN").Click
AIUtil.FindTextBlock("YES").Click
'Option 1
'Device("Device").App("Advantage Shopping").SimulateAuthentication ("Success")

'Option 2
Set dt = DataTable
Set oDevice=Device("Class Name:=Device","ostype:=" & dt.value("ostype") ,"id:=" & dt.value("device_id"))
Set oApp=oDevice.App("Class Name:=App","identifier:=" & dt.value("app_identifier") ,"instrumented:=" & dt.value("app_instrumented"))	
oApp.SimulateAuthentication ("Success")

AIUtil("search").Search "laptop"
AIUtil("search").Click
AIUtil.FindTextBlock("HP PAVILION X360").Click
AIUtil.FindTextBlock("$319.99").CheckExists True
AIUtil("button", "ADD TO CART").Click
AIUtil("shopping_cart").Click
AIUtil("button", "CHECKOUT (PAY $319.99)").Click
AIUtil("button", "PAY NOW").Click
AIUtil("close").Click

'Sign out
AIUtil("hamburger_menu").Click
AIUtil("profile").Click
AIUtil.FindTextBlock("YES").Click
