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

            nameAttr.addOnChange(nameOnChange);

            let nameControl = formContext.getControl("adlr_name");
            nameControl.setDisabled(true);

            formContext.getControl("adlr_date").setVisible(false);

        }
    }
})();