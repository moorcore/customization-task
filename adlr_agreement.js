var AutoDealer = AutoDealer || {};

AutoDealer.adlr_agreement = (function()
{
    var nameOnChange = function(context)
    {
        let formContext = context.getFormContext();
        let nameAttr = formContext.getAttribute("adlr_name");
        nameAttr.addOnChange("Changed data " + nameOnChange);
    }

    var autoOnChange = function(context)
    {
        let formContext = context.getFormContext();
        let autoAttr = formContext.getAttribute("adlr_auto");
        autoAttr.addOnChange("Changed data " + autoOnChange);
    }

    return {
        onLoad : function (context) {
            let formContext = context.getFormContext();

            let nameAttr = formContext.getAttribute("adlr_name");
            let autoAttr = formContext.getAttribute("adlr_auto");
            
            let creditTab = formContext.ui.tabs.get("CreditTab");

            creditTab.setVisible(false);

            formContext.getControl("ownerid").setVisible(false);
            formContext.getControl("adlr_total").setVisible(false);
            formContext.getControl("adlr_fact").setVisible(false);
            formContext.getControl("adlr_creditid").setVisible(false);

            if (nameAttr.getValue() != null && autoAttr.getValue() != null)
            {
                creditTab.setVisible(true);
            }

            nameAttr.addOnChange(nameOnChange);
            autoAttr.addOnChange(autoOnChange);
        }
    }
})();