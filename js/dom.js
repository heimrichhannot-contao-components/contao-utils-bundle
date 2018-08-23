module.exports = {
    getTextWithoutChildren: function(element, notrim) {
        let result = element.clone().children().remove().text();

        if (typeof notrim !== 'undefined' && notrim === true) {
            return result;
        } else {
            return result.trim();
        }
    },
};