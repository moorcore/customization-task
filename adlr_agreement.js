var AutoDealer = AutoDealer || {};

AutoDealer.adlr_agreement = (function()
{
    var nameOnChange = function(context)
    {
        let formContext = context.getFormContext();
        let nameAttr = formContext.getAttribute("adlr_name");
        nameAttr.addOnChange("Changed data " + nameOnChange);
    }

    return {
        onLoad : function (context) {
            let formContext = context.getFormContext();

            let nameAttr = formContext.getAttribute("adlr_name");
            
            let creditTab = formContext.ui.tabs.get("CreditTab");

            creditTab.setVisible(false);

            formContext.getControl("ownerid").setVisible(false);
            formContext.getControl("adlr_total").setVisible(false);
            formContext.getControl("adlr_fact").setVisible(false);
            formContext.getControl("adlr_creditid").setVisible(false);

            nameAttr.addOnChange(nameOnChange);
        }
    }
})();