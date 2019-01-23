import ArrayUtil from './array-util'
import DomUtil from './dom-util'
import EventUtil from './event-util'
import UrlUtil from './url-util'
import GeneralUtil from './general-util'

let utils = {
    array: ArrayUtil,
    dom: DomUtil,
    event: EventUtil,
    url: UrlUtil,
    util: GeneralUtil
};

window.utilsBundle = utils;

export {
    utils,
    ArrayUtil,
    DomUtil,
    EventUtil,
    GeneralUtil,
    UrlUtil
}