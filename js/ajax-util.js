import GeneralUtil from './general-util';

class AjaxUtil {
  static get(url, data, config) {
    config = AjaxUtil.modifyConfig(config);

    let request = AjaxUtil.initializeRequest('GET', AjaxUtil.getGetQuery(url, data), config),
        submitData = {
          config: config,
          action: url,
          data: data,
        };

    AjaxUtil.doAjaxSubmit(request, submitData);
  }

  static post(url, data, config) {
    config = AjaxUtil.modifyConfig(config);

    let request = AjaxUtil.initializeRequest('POST', url, config),
        submitData = {
          config: config,
          action: url,
          data: data,
          body: AjaxUtil.getPostQuery(data),
        };

    AjaxUtil.doAjaxSubmit(request, submitData);
  }

  static doAjaxSubmit(request, submitData) {
    let config = submitData.config;

    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        GeneralUtil.call(config.onSuccess, request);
      } else {
        GeneralUtil.call(config.onError, request);
      }
    };

    GeneralUtil.call(config.beforeSubmit, submitData.action, submitData.data, config);

    if ('undefined' === submitData.body) {
      request.send();
    } else {
      request.send(submitData.body);
    }

    GeneralUtil.call(config.afterSubmit, submitData.action, submitData.data, config);
  }

  static initializeRequest(method, url, config) {
    let request = new XMLHttpRequest();

    request.open(method, url, true);
    request = AjaxUtil.setRequestHeaders(request, config);

    return request;
  }

  static setRequestHeaders(request, config) {
    if ('undefined' !== config.headers) {
      for (let key in config.headers) {
        request.setRequestHeader(key, config.headers[key]);
      }
    }

    return request;
  }

  static modifyConfig(config) {
    if ('undefined' === config.onSuccess) {
      config.onSuccess = AjaxUtil.onSuccess;
    }

    if ('undefined' === config.onError) {
      config.onSuccess = AjaxUtil.onError;
    }

    if ('undefined' === config.beforeSubmit) {
      config.onSuccess = AjaxUtil.beforeSubmit;
    }

    if ('undefined' === config.afterSubmit) {
      config.onSuccess = AjaxUtil.afterSubmit;
    }

    if ('undefined' === config.headers) {
      config.headers = {'X-Requested-With': 'XMLHttpRequest'};
    }

    return config;
  }

  static getPostQuery(data) {
    return AjaxUtil.createQuery(data);
  }

  static getGetQuery(url, data) {
    let query = AjaxUtil.createQuery(data);

    if ('/' === url.charAt(url.length - 1)) {
      url = url.substr(0, url.length - 1);
    }

    return url + '?' + query;
  }

  static createQuery(data) {
    let query = '';

    for (let key in data) {
      if ('' !== query) {
        query += '&';
      }

      query += key + '=' + data[key];
    }

    return query;
  }

  static onSuccess(request) {
    console.log(request);
  }

  static onError(request) {
    console.error(request.statusText);
  }

  static beforeSubmit() {
  }

  static afterSubmit() {
  }
}

export default AjaxUtil;