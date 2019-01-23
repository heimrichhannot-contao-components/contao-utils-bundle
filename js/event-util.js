import DomUtil from './dom-util';
import GeneralUtil from './general-util'

class EventUtil {
    static addDynamicEventListener(eventName, selector, callback, disableBubbling) {
        document.addEventListener(eventName, function(e) {
            var parents = (GeneralUtil.isTruthy(disableBubbling) ? [e.target] : DomUtil.getAllParentNodes(e.target));

            if (!Array.isArray(parents))
            {
                return;
            }

            parents.reverse().forEach(function(item) {
                if (item && item.matches(selector)) {
                    callback(item, e);
                }
            });
        });
    }
}

export default EventUtil