var AutoDealer = AutoDealer || {};

AutoDealer.adlr_communication = (function()
{
    return {
        onLoad : function (context) {
            let formContext = context.getFormContext();

            let phoneControl = formContext.getControl("adlr_phone").setVisible(false);
            let emailControl = formContext.getControl("adlr_email").setVisible(false);

            let type = formContext.getAttribute("adlr_type").getValue();

            if (type === "Phone")
            {
                phoneControl.setVisible(true);
            }
            else
            {
                emailControl.setVisible(true);
            }
        }
    }
})();