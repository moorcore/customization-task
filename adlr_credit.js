var AutoDealer = AutoDealer || {};

AutoDealer.adlr_credit = (function()
{
    return {
        onLoad : function (context) {
            let formContext = context.getFormContext();

            let startDate = new Date(formContext.getAttribute("adlr_startdate").getValue());
            let endDate = new Date(formContext.getAttribute("adlr_enddate").getValue());
            let result = endDate.getTime() - startDate.getTime();

            if (result < 31536000000)
            {
                alert("The credit period should be greater than 1 year!");
            }
        }
    }
})();