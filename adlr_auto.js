var AutoDealer = AutoDealer || {};

AutoDealer.adlr_auto = (function()
{
    return {
        onLoad : function (context) {
            let formContext = context.getFormContext();

            let ownersCountControl = formContext.getControl("adlr_ownerscount").setVisible(false);
            let isDamagedControl = formContext.getControl("adlr_isdamaged").setVisible(false);
            let mileageControl = formContext.getControl("adlr_km").setVisible(false);

            let used = formContext.getAttribute("adlr_used").getValue();

            if (used === "Yes")
            {
                ownersCountControl.setVisible(true);
                isDamagedControl.setVisible(true);
                mileageControl.setVisible(true);
            }
        }
    }
})();