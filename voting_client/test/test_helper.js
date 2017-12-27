import jsdom from 'jsdom';
import chai from 'chai';
import chaiImmutable from 'chai-immutable';

const dom = new jsdom.JSDOM('<!doctype html><html><body></body></html>');
const win = dom.window;

global.window = win;
global.document = window.document;

Object.keys(window).forEach((key) => {
    if (!(key in global)) {
      global[key] = window[key];
    }
  });

chai.use(chaiImmutable);
