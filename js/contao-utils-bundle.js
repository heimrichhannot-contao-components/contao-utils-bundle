import ArrayUtil from './array-util'
import DomUtil from './dom-util'
import EventUtil from './event-util'
import UrlUtil from './url-util'
import GeneralUtil from './general-util'

let UtilsBundle = {
    array: ArrayUtil,
    dom: DomUtil,
    event: EventUtil,
    url: UrlUtil,
    util: GeneralUtil
};

window.utilsBundle = UtilsBundle;

export {
    UtilsBundle,
    ArrayUtil,
    DomUtil,
    EventUtil,
    GeneralUtil,
    UrlUtil
}