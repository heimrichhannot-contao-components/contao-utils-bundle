import './polyfills';
import ArrayUtil from './array-util';
import DomUtil from './dom-util';
import EventUtil from './event-util';
import UrlUtil from './url-util';
import GeneralUtil from './general-util';
import AjaxUtil from './ajax-util';

let utilsBundle = {
    array: ArrayUtil,
    dom: DomUtil,
    event: EventUtil,
    url: UrlUtil,
    util: GeneralUtil,
    ajax: AjaxUtil
};

window.utilsBundle = utilsBundle;

export {
    utilsBundle,
    ArrayUtil,
    DomUtil,
    EventUtil,
    GeneralUtil,
    UrlUtil,
    AjaxUtil
}
