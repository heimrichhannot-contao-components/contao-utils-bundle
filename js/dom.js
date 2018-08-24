module.exports = {
    getTextWithoutChildren: function(element, notrim) {
        let result = element.clone();
        result.children().remove();

        if (typeof notrim !== 'undefined' && notrim === true) {
            return result.text();
        } else {
            return result.text().trim();
        }
    },
};