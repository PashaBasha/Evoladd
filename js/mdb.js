/*!
 * Material Design for Bootstrap 4
 * Version: MDB FREE: 4.19.1
 *
 *
 * Copyright: Material Design for Bootstrap
 * https://mdbootstrap.com/
 *
 * Read the license: https://mdbootstrap.com/general/license/
 *
 *
 * Documentation: https://mdbootstrap.com/
 *
 * Getting started: https://mdbootstrap.com/docs/jquery/getting-started/download/
 *
 * Tutorials: https://mdbootstrap.com/education/bootstrap/
 *
 * Templates: https://mdbootstrap.com/templates/
 *
 * Support: https://mdbootstrap.com/forums/forum/support/
 *
 * Contact: office@mdbootstrap.com
 *
 * Attribution: Animate CSS, Twitter Bootstrap, Materialize CSS, Normalize CSS, Waves JS, WOW JS, Toastr, Chart.jss
 *
 */


/*

  jquery.easing.js
  velocity.min.js
  chart.js
  wow.js
  scrolling-navbar.js
  waves.js
  forms-free.js
  enhanced-modals.js
  treeview.js

*/

'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

jQuery(function ($) {
  var WOW = function () {
    function WOW() {
      _classCallCheck(this, WOW);
    }

    _createClass(WOW, [{
      key: 'init',
      value: function init() {
        $('.wow').wow();
      }
    }]);

    return WOW;
  }();

  var MDBWow = function () {
    function MDBWow($wowElement, customization) {
      _classCallCheck(this, MDBWow);

      this.$wowElement = $wowElement;
      this.customization = customization;
      this.animated = true;
      this.options = this.assignElementCustomization();
    }

    _createClass(MDBWow, [{
      key: 'init',
      value: function init() {
        var _this = this;

        $(window).scroll(function () {
          if (_this.animated) {
            _this.hide();
          } else {
            _this.mdbWow();
          }
        });

        this.appear();
      }
    }, {
      key: 'assignElementCustomization',
      value: function assignElementCustomization() {
        return {
          animationName: this.$wowElement.css('animation-name'),
          offset: 100,
          iteration: this.fallback().or(this.$wowElement.data('wow-iteration')).or(1).value(),
          duration: this.fallback().or(this.$wowElement.data('wow-duration')).or(1000).value(),
          delay: this.fallback().or(this.$wowElement.data('wow-delay')).or(0).value()
        };
      }
    }, {
      key: 'mdbWow',
      value: function mdbWow() {
        var _this2 = this;

        if (this.$wowElement.css('visibility') === 'visible') {
          return;
        }

        if (this.shouldElementBeVisible(true)) {
          setTimeout(function () {
            return _this2.$wowElement.removeClass('animated');
          }, this.countRemoveTime());
          this.appear();
        }
      }
    }, {
      key: 'appear',
      value: function appear() {
        this.$wowElement.addClass('animated');
        this.$wowElement.css({
          visibility: 'visible',
          'animation-name': this.options.animationName,
          'animation-iteration-count': this.options.iteration,
          'animation-duration': this.options.duration,
          'animation-delay': this.options.delay
        });
      }
    }, {
      key: 'hide',
      value: function hide() {
        var _this3 = this;

        if (this.shouldElementBeVisible(false)) {
          this.$wowElement.removeClass('animated');
          this.$wowElement.css({
            'animation-name': 'none',
            visibility: 'hidden'
          });
        } else {
          setTimeout(function () {
            _this3.$wowElement.removeClass('animated');
          }, this.countRemoveTime());
        }
        this.mdbWow();
        this.animated = !this.animated;
      }
    }, {
      key: 'shouldElementBeVisible',
      value: function shouldElementBeVisible(state) {
        var thisElementOffset = this.getOffset(this.$wowElement[0]);
        var thisElementHeight = this.$wowElement.height();
        var documentHeight = $(document).height();
        var windowHeight = window.innerHeight;
        var scroll = window.scrollY;

        var isElementTopVisible = windowHeight + scroll - this.options.offset > thisElementOffset;
        var isElementBottomVisible = windowHeight + scroll - this.options.offset > thisElementOffset + thisElementHeight;
        var isScrolledToTop = scroll < thisElementOffset;
        var isScrolledToBottom = scroll < thisElementOffset + thisElementHeight;
        var isDocumentHeightEqual = windowHeight + scroll === documentHeight;
        var isOffsetHigherThanDocument = thisElementOffset + this.options.offset > documentHeight;
        var isElementBottomHidden = windowHeight + scroll - this.options.offset < thisElementOffset;
        var isScrolledOverTop = scroll > thisElementOffset + this.options.offset;
        var isNotScrolledToTop = scroll < thisElementOffset + this.options.offset;
        var isScrolledOverElement = thisElementOffset + thisElementHeight > documentHeight - this.options.offset;

        var returnLogic = false;

        if (state) {
          returnLogic = isElementTopVisible && isScrolledToTop || isElementBottomVisible && isScrolledToBottom || isDocumentHeightEqual && isOffsetHigherThanDocument;
        } else {
          returnLogic = isElementTopVisible && isScrolledOverTop || isElementBottomHidden && isNotScrolledToTop || isScrolledOverElement;
        }
        return returnLogic;
      }
    }, {
      key: 'countRemoveTime',
      value: function countRemoveTime() {
        var defaultAnimationTime = this.$wowElement.css('animation-duration').slice(0, -1) * 1000;
        var removeTime = 0;

        if (this.options.duration) {
          removeTime = defaultAnimationTime + this.checkOptionsStringFormat(this.options.duration);
        }
        if (this.options.delay) {
          removeTime += this.checkOptionsStringFormat(this.options.delay);
        }
        return removeTime;
      }
    }, {
      key: 'checkOptionsStringFormat',
      value: function checkOptionsStringFormat(element) {
        var valueToReturn = void 0;

        if (element.toString().slice(-1) === 's') {
          valueToReturn = element.toString().slice(0, -1);
        } else if (!isNaN(element.toString().slice(-1))) {
          valueToReturn = element;
        } else {
          return console.log('Not supported animation customization format.');
        }

        return valueToReturn;
      }
    }, {
      key: 'getOffset',
      value: function getOffset(element) {
        var box = element.getBoundingClientRect();
        var body = document.body;
        var docEl = document.documentElement;
        var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
        var clientTop = docEl.clientTop || body.clientTop || 0;
        var top = box.top + scrollTop - clientTop;

        return Math.round(top);
      }
    }, {
      key: 'fallback',
      value: function fallback() {
        return {
          _value: undefined,
          or: function or(value) {
            if (typeof value !== 'undefined' && typeof this._value === 'undefined') {
              this._value = value;
            }
            return this;
          },
          value: function value() {
            return this._value;
          }
        };
      }
    }]);

    return MDBWow;
  }();

  $.fn.wow = function (options) {
    this.each(function () {
      var mdbWow = new MDBWow($(this), options);
      mdbWow.init();
    });
  };

  window.WOW = WOW;
});
/*!
 * Waves v0.7.6
 * http://fian.my.id/Waves
 *
 * Copyright 2014-2018 Alfiana E. Sibuea and other contributors
 * Released under the MIT license
 * https://github.com/fians/Waves/blob/master/LICENSE
 */


(function (window, factory) {
  'use strict';

  // AMD. Register as an anonymous module.  Wrap in function so we have access
  // to root via `this`.
  if (typeof define === 'function' && define.amd) {
    define([], function () {
      window.Waves = factory.call(window);
      return window.Waves;
    });
  }

  // Node. Does not work with strict CommonJS, but only CommonJS-like
  // environments that support module.exports, like Node.
  else if (typeof exports === 'object') {
    module.exports = factory.call(window);
  }

  // Browser globals.
  else {
    window.Waves = factory.call(window);
  }
})(typeof window === 'object' ? window : this, function () {
  'use strict';

  var Waves = Waves || {};
  var $$ = document.querySelectorAll.bind(document);
  var toString = Object.prototype.toString;
  var isTouchAvailable = 'ontouchstart' in window;


  // Find exact position of element
  function isWindow(obj) {
    return obj !== null && obj === obj.window;
  }

  function getWindow(elem) {
    return isWindow(elem) ? elem : elem.nodeType === 9 && elem.defaultView;
  }

  function isObject(value) {
    var type = typeof value;
    return type === 'function' || type === 'object' && !!value;
  }

  function isDOMNode(obj) {
    return isObject(obj) && obj.nodeType > 0;
  }

  function getWavesElements(nodes) {
    var stringRepr = toString.call(nodes);

    if (stringRepr === '[object String]') {
      return $$(nodes);
    } else if (isObject(nodes) && /^\[object (Array|HTMLCollection|NodeList|Object)\]$/.test(stringRepr) && nodes.hasOwnProperty('length')) {
      return nodes;
    } else if (isDOMNode(nodes)) {
      return [nodes];
    }

    return [];
  }

  function offset(elem) {
    var docElem, win,
      box = {
        top: 0,
        left: 0
      },
      doc = elem && elem.ownerDocument;

    docElem = doc.documentElement;

    if (typeof elem.getBoundingClientRect !== typeof undefined) {
      box = elem.getBoundingClientRect();
    }
    win = getWindow(doc);
    return {
      top: box.top + win.pageYOffset - docElem.clientTop,
      left: box.left + win.pageXOffset - docElem.clientLeft
    };
  }

  function convertStyle(styleObj) {
    var style = '';

    for (var prop in styleObj) {
      if (styleObj.hasOwnProperty(prop)) {
        style += (prop + ':' + styleObj[prop] + ';');
      }
    }

    return style;
  }

  var Effect = {

    // Effect duration
    duration: 750,

    // Effect delay (check for scroll before showing effect)
    delay: 200,

    show: function (e, element, velocity) {

      // Disable right click
      if (e.button === 2) {
        return false;
      }

      element = element || this;

      // Create ripple
      var ripple = document.createElement('div');
      ripple.className = 'waves-ripple waves-rippling';
      element.appendChild(ripple);

      // Get click coordinate and element width
      var pos = offset(element);
      var relativeY = 0;
      var relativeX = 0;
      // Support for touch devices
      if ('touches' in e && e.touches.length) {
        relativeY = (e.touches[0].pageY - pos.top);
        relativeX = (e.touches[0].pageX - pos.left);
      }
      //Normal case
      else {
        relativeY = (e.pageY - pos.top);
        relativeX = (e.pageX - pos.left);
      }
      // Support for synthetic events
      relativeX = relativeX >= 0 ? relativeX : 0;
      relativeY = relativeY >= 0 ? relativeY : 0;

      var scale = 'scale(' + ((element.clientWidth / 100) * 3) + ')';
      var translate = 'translate(0,0)';

      if (velocity) {
        translate = 'translate(' + (velocity.x) + 'px, ' + (velocity.y) + 'px)';
      }

      // Attach data to element
      ripple.setAttribute('data-hold', Date.now());
      ripple.setAttribute('data-x', relativeX);
      ripple.setAttribute('data-y', relativeY);
      ripple.setAttribute('data-scale', scale);
      ripple.setAttribute('data-translate', translate);

      // Set ripple position
      var rippleStyle = {
        top: relativeY + 'px',
        left: relativeX + 'px'
      };

      ripple.classList.add('waves-notransition');
      ripple.setAttribute('style', convertStyle(rippleStyle));
      ripple.classList.remove('waves-notransition');

      // Scale the ripple
      rippleStyle['-webkit-transform'] = scale + ' ' + translate;
      rippleStyle['-moz-transform'] = scale + ' ' + translate;
      rippleStyle['-ms-transform'] = scale + ' ' + translate;
      rippleStyle['-o-transform'] = scale + ' ' + translate;
      rippleStyle.transform = scale + ' ' + translate;
      rippleStyle.opacity = '1';

      var duration = e.type === 'mousemove' ? 2500 : Effect.duration;
      rippleStyle['-webkit-transition-duration'] = duration + 'ms';
      rippleStyle['-moz-transition-duration'] = duration + 'ms';
      rippleStyle['-o-transition-duration'] = duration + 'ms';
      rippleStyle['transition-duration'] = duration + 'ms';

      ripple.setAttribute('style', convertStyle(rippleStyle));
    },

    hide: function (e, element) {
      element = element || this;

      var ripples = element.getElementsByClassName('waves-rippling');

      for (var i = 0, len = ripples.length; i < len; i++) {
        removeRipple(e, element, ripples[i]);
      }

      if (isTouchAvailable) {
        element.removeEventListener('touchend', Effect.hide);
        element.removeEventListener('touchcancel', Effect.hide);
      }

      element.removeEventListener('mouseup', Effect.hide);
      element.removeEventListener('mouseleave', Effect.hide);
    }
  };

  /**
   * Collection of wrapper for HTML element that only have single tag
   * like <input> and <img>
   */
  var TagWrapper = {

    // Wrap <input> tag so it can perform the effect
    input: function (element) {

      var parent = element.parentNode;

      // If input already have parent just pass through
      if (parent.tagName.toLowerCase() === 'span' && parent.classList.contains('waves-effect')) {
        return;
      }

      // Put element class and style to the specified parent
      var wrapper = document.createElement('span');
      wrapper.className = 'waves-input-wrapper';
      // element.className = 'waves-button-input';

      // Put element as child
      parent.replaceChild(wrapper, element);
      wrapper.appendChild(element);

    },

    // Wrap <img> tag so it can perform the effect
    img: function (element) {

      var parent = element.parentNode;

      // If input already have parent just pass through
      if (parent.tagName.toLowerCase() === 'i' && parent.classList.contains('waves-effect')) {
        return;
      }

      // Put element as child
      var wrapper = document.createElement('i');
      parent.replaceChild(wrapper, element);
      wrapper.appendChild(element);

    }
  };

  /**
   * Hide the effect and remove the ripple. Must be
   * a separate function to pass the JSLint...
   */
  function removeRipple(e, el, ripple) {

    // Check if the ripple still exist
    if (!ripple) {
      return;
    }

    ripple.classList.remove('waves-rippling');

    var relativeX = ripple.getAttribute('data-x');
    var relativeY = ripple.getAttribute('data-y');
    var scale = ripple.getAttribute('data-scale');
    var translate = ripple.getAttribute('data-translate');

    // Get delay beetween mousedown and mouse leave
    var diff = Date.now() - Number(ripple.getAttribute('data-hold'));
    var delay = 350 - diff;

    if (delay < 0) {
      delay = 0;
    }

    if (e.type === 'mousemove') {
      delay = 150;
    }

    // Fade out ripple after delay
    var duration = e.type === 'mousemove' ? 2500 : Effect.duration;

    setTimeout(function () {

      var style = {
        top: relativeY + 'px',
        left: relativeX + 'px',
        opacity: '0',

        // Duration
        '-webkit-transition-duration': duration + 'ms',
        '-moz-transition-duration': duration + 'ms',
        '-o-transition-duration': duration + 'ms',
        'transition-duration': duration + 'ms',
        '-webkit-transform': scale + ' ' + translate,
        '-moz-transform': scale + ' ' + translate,
        '-ms-transform': scale + ' ' + translate,
        '-o-transform': scale + ' ' + translate,
        'transform': scale + ' ' + translate
      };

      ripple.setAttribute('style', convertStyle(style));

      setTimeout(function () {
        try {
          el.removeChild(ripple);
        } catch (e) {
          return false;
        }
      }, duration);

    }, delay);
  }


  /**
   * Disable mousedown event for 500ms during and after touch
   */
  var TouchHandler = {

    /* uses an integer rather than bool so there's no issues with
     * needing to clear timeouts if another touch event occurred
     * within the 500ms. Cannot mouseup between touchstart and
     * touchend, nor in the 500ms after touchend. */
    touches: 0,

    allowEvent: function (e) {

      var allow = true;

      if (/^(mousedown|mousemove)$/.test(e.type) && TouchHandler.touches) {
        allow = false;
      }

      return allow;
    },
    registerEvent: function (e) {
      var eType = e.type;

      if (eType === 'touchstart') {

        TouchHandler.touches += 1; // push

      } else if (/^(touchend|touchcancel)$/.test(eType)) {

        setTimeout(function () {
          if (TouchHandler.touches) {
            TouchHandler.touches -= 1; // pop after 500ms
          }
        }, 500);

      }
    }
  };


  /**
   * Delegated click handler for .waves-effect element.
   * returns null when .waves-effect element not in "click tree"
   */
  function getWavesEffectElement(e) {

    if (TouchHandler.allowEvent(e) === false) {
      return null;
    }

    var element = null;
    var target = e.target || e.srcElement;

    while (target.parentElement) {
      if ((!(target instanceof SVGElement)) && target.classList.contains('waves-effect')) {
        element = target;
        break;
      }
      target = target.parentElement;
    }

    return element;
  }

  /**
   * Bubble the click and show effect if .waves-effect elem was found
   */
  function showEffect(e) {

    // Disable effect if element has "disabled" property on it
    // In some cases, the event is not triggered by the current element
    // if (e.target.getAttribute('disabled') !== null) {
    //     return;
    // }

    var element = getWavesEffectElement(e);

    if (element !== null) {

      // Make it sure the element has either disabled property, disabled attribute or 'disabled' class
      if (element.disabled || element.getAttribute('disabled') || element.classList.contains('disabled')) {
        return;
      }

      TouchHandler.registerEvent(e);

      if (e.type === 'touchstart' && Effect.delay) {

        var hidden = false;

        var timer = setTimeout(function () {
          timer = null;
          Effect.show(e, element);
        }, Effect.delay);

        var hideEffect = function (hideEvent) {

          // if touch hasn't moved, and effect not yet started: start effect now
          if (timer) {
            clearTimeout(timer);
            timer = null;
            Effect.show(e, element);
          }
          if (!hidden) {
            hidden = true;
            Effect.hide(hideEvent, element);
          }

          removeListeners();
        };

        var touchMove = function (moveEvent) {
          if (timer) {
            clearTimeout(timer);
            timer = null;
          }
          hideEffect(moveEvent);

          removeListeners();
        };

        element.addEventListener('touchmove', touchMove, false);
        element.addEventListener('touchend', hideEffect, false);
        element.addEventListener('touchcancel', hideEffect, false);

        var removeListeners = function () {
          element.removeEventListener('touchmove', touchMove);
          element.removeEventListener('touchend', hideEffect);
          element.removeEventListener('touchcancel', hideEffect);
        };
      } else {

        Effect.show(e, element);

        if (isTouchAvailable) {
          element.addEventListener('touchend', Effect.hide, false);
          element.addEventListener('touchcancel', Effect.hide, false);
        }

        element.addEventListener('mouseup', Effect.hide, false);
        element.addEventListener('mouseleave', Effect.hide, false);
      }
    }
  }

  Waves.init = function (options) {
    var body = document.body;

    options = options || {};

    if ('duration' in options) {
      Effect.duration = options.duration;
    }

    if ('delay' in options) {
      Effect.delay = options.delay;
    }

    if (isTouchAvailable) {
      body.addEventListener('touchstart', showEffect, false);
      body.addEventListener('touchcancel', TouchHandler.registerEvent, false);
      body.addEventListener('touchend', TouchHandler.registerEvent, false);
    }

    body.addEventListener('mousedown', showEffect, false);
  };


  /**
   * Attach Waves to dynamically loaded inputs, or add .waves-effect and other
   * waves classes to a set of elements. Set drag to true if the ripple mouseover
   * or skimming effect should be applied to the elements.
   */
  Waves.attach = function (elements, classes) {

    elements = getWavesElements(elements);

    if (toString.call(classes) === '[object Array]') {
      classes = classes.join(' ');
    }

    classes = classes ? ' ' + classes : '';

    var element, tagName;

    for (var i = 0, len = elements.length; i < len; i++) {

      element = elements[i];
      tagName = element.tagName.toLowerCase();

      if (['input', 'img'].indexOf(tagName) !== -1) {
        TagWrapper[tagName](element);
        element = element.parentElement;
      }

      if (element.className.indexOf('waves-effect') === -1) {
        element.className += ' waves-effect' + classes;
      }
    }
  };


  /**
   * Cause a ripple to appear in an element via code.
   */
  Waves.ripple = function (elements, options) {
    elements = getWavesElements(elements);
    var elementsLen = elements.length;

    options = options || {};
    options.wait = options.wait || 0;
    options.position = options.position || null; // default = centre of element


    if (elementsLen) {
      var element, pos, off, centre = {},
        i = 0;
      var mousedown = {
        type: 'mousedown',
        button: 1
      };
      var hideRipple = function (mouseup, element) {
        return function () {
          Effect.hide(mouseup, element);
        };
      };

      for (; i < elementsLen; i++) {
        element = elements[i];
        pos = options.position || {
          x: element.clientWidth / 2,
          y: element.clientHeight / 2
        };

        off = offset(element);
        centre.x = off.left + pos.x;
        centre.y = off.top + pos.y;

        mousedown.pageX = centre.x;
        mousedown.pageY = centre.y;

        Effect.show(mousedown, element);

        if (options.wait >= 0 && options.wait !== null) {
          var mouseup = {
            type: 'mouseup',
            button: 1
          };

          setTimeout(hideRipple(mouseup, element), options.wait);
        }
      }
    }
  };

  /**
   * Remove all ripples from an element.
   */
  Waves.calm = function (elements) {
    elements = getWavesElements(elements);
    var mouseup = {
      type: 'mouseup',
      button: 1
    };

    for (var i = 0, len = elements.length; i < len; i++) {
      Effect.hide(mouseup, elements[i]);
    }
  };

  /**
   * Deprecated API fallback
   */
  Waves.displayEffect = function (options) {
    console.error('Waves.displayEffect() has been deprecated and will be removed in future version. Please use Waves.init() to initialize Waves effect');
    Waves.init(options);
  };

  return Waves;
});
$(document).ready(function () {
  //Initialization
  Waves.attach('.btn:not(.btn-flat), .btn-floating', ['waves-light']);
  Waves.attach('.btn-flat');
  Waves.attach('.chip');
  Waves.attach('.view a .mask', ['waves-light']);
  Waves.attach('.waves-light', ['waves-light']);
  Waves.attach('.navbar-nav a:not(.navbar-brand), .nav-icons li a, .nav-tabs .nav-item:not(.dropdown)', ['waves-light']);
  Waves.attach('.pager li a', ['waves-light']);
  Waves.attach('.pagination .page-item .page-link');
  Waves.init();
});

'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

jQuery(function ($) {
  var Forms = function () {
    function Forms() {
      _classCallCheck(this, Forms);

      this.inputSelector = ['text', 'password', 'email', 'url', 'tel', 'number', 'search', 'search-md', 'date'].map(function (selector) {
        return 'input[type=' + selector + ']';
      }).join(', ') + ', textarea';
      this.textAreaSelector = '.materialize-textarea';
      this.$text = $('.md-textarea-auto');
      this.$body = $('body');
      this.$document = $(document);
    }

    _createClass(Forms, [{
      key: 'init',
      value: function init() {
        var _this = this;

        if (this.$text.length) {
          var observe = void 0;

          if (window.attachEvent) {
            observe = function observe(element, event, handler) {
              element.attachEvent('on' + event, handler);
            };
          } else {
            observe = function observe(element, event, handler) {
              element.addEventListener(event, handler, false);
            };
          }

          this.$text.each(function () {
            var self = this;

            function resize() {
              self.style.height = 'auto';
              self.style.height = self.scrollHeight + 'px';
            }

            function delayedResize() {
              window.setTimeout(resize, 0);
            }

            observe(self, 'change', resize);
            observe(self, 'cut', delayedResize);
            observe(self, 'paste', delayedResize);
            observe(self, 'drop', delayedResize);
            observe(self, 'keydown', delayedResize);

            resize();
          });
        }

        $(this.inputSelector).each(function (index, input) {
          var $this = $(input);
          var isNotValid = input.validity.badInput;
          _this.updateTextFields($this);

          if (isNotValid) {
            _this.toggleActiveClass($this, 'add');
          }
        });

        this.addOnFocusEvent();
        this.addOnBlurEvent();
        this.addOnChangeEvent();
        this.addOnResetEvent();
        this.appendHiddenDiv();
        this.makeActiveAutofocus();

        $(this.textAreaSelector).each(this.textAreaAutoResize);
        this.$body.on('keyup keydown', this.textAreaSelector, this.textAreaAutoResize);
      }
    }, {
      key: 'makeActiveAutofocus',
      value: function makeActiveAutofocus() {

        this.toggleActiveClass($('input[autofocus]'), 'add');
      }
    }, {
      key: 'toggleActiveClass',
      value: function toggleActiveClass($this, action) {
        var selectors = void 0;
        action = action + 'Class';

        if ($this.parent().hasClass('timepicker')) {
          selectors = 'label';
        } else {
          selectors = 'label, i, .input-prefix';
        }
        $this.siblings(selectors)[action]('active');
      }
    }, {
      key: 'addOnFocusEvent',
      value: function addOnFocusEvent() {
        var _this2 = this;

        this.$document.on('focus', this.inputSelector, function (e) {
          _this2.toggleActiveClass($(e.target), 'add');

          if ($(e.target).attr("type") == "date") {
            $(e.target).css("color", "#495057");
          }
        });
      }
    }, {
      key: 'addOnBlurEvent',
      value: function addOnBlurEvent() {
        var _this3 = this;

        this.$document.on('blur', this.inputSelector, function (e) {
          var $this = $(e.target);
          var noValue = !$this.val();
          var isValid = !e.target.validity.badInput;
          var noPlaceholder = $this.attr('placeholder') === undefined;

          if (noValue && isValid && noPlaceholder) {
            _this3.toggleActiveClass($this, 'remove');
            if ($this.attr("type") == "date") {
              $this.css("color", "transparent");
            }
          }

          if (!noValue && isValid && noPlaceholder) {
            $this.siblings('i, .input-prefix').removeClass('active');

            if ($this.attr("type") == "date") {
              $this.css("color", "#495057");
            }
          }

          _this3.validateField($this);
        });
      }
    }, {
      key: 'addOnChangeEvent',
      value: function addOnChangeEvent() {
        var _this4 = this;

        this.$document.on('change', this.inputSelector, function (e) {
          var $this = $(e.target);

          _this4.updateTextFields($this);
          _this4.validateField($this);
        });
      }
    }, {
      key: 'addOnResetEvent',
      value: function addOnResetEvent() {
        var _this5 = this;

        this.$document.on('reset', function (e) {
          var $formReset = $(e.target);

          if ($formReset.is('form')) {
            var $formInputs = $formReset.find(_this5.inputSelector);

            $formInputs.removeClass('valid invalid').each(function (index, input) {
              var $this = $(input);
              var noDefaultValue = !$this.val();
              var noPlaceholder = !$this.attr('placeholder');

              if (noDefaultValue && noPlaceholder) {
                _this5.toggleActiveClass($this, 'remove');
              }
            });

            $formReset.find('select.initialized').each(function (index, select) {
              var $select = $(select);
              var $visibleInput = $select.siblings('input.select-dropdown');
              var defaultValue = $select.children('[selected]').val();

              $select.val(defaultValue);
              $visibleInput.val(defaultValue);
            });
          }
        });
      }
    }, {
      key: 'appendHiddenDiv',
      value: function appendHiddenDiv() {
        if (!$('.hiddendiv').first().length) {
          var $hiddenDiv = $('<div class="hiddendiv common"></div>');
          this.$body.append($hiddenDiv);
        }
      }
    }, {
      key: 'updateTextFields',
      value: function updateTextFields($input) {

        if ($input.attr("type") !== "date") {
          var hasValue = Boolean($input.val().length);
          var hasPlaceholder = Boolean($input.attr('placeholder'));
          var addOrRemove = hasValue || hasPlaceholder ? 'add' : 'remove';

          this.toggleActiveClass($input, addOrRemove);
        }
      }
    }, {
      key: 'validateField',
      value: function validateField($input) {
        if ($input.hasClass('validate')) {
          var value = $input.val();
          var noValue = !value.length;
          var isValid = !$input[0].validity.badInput;

          if (noValue && isValid) {
            $input.removeClass('valid').removeClass('invalid');
          } else {
            var valid = $input[0].validity.valid;
            var length = Number($input.attr('length')) || 0;

            if (valid && (!length || length > value.length)) {
              $input.removeClass('invalid').addClass('valid');
            } else {
              $input.removeClass('valid').addClass('invalid');
            }
          }
        }
      }
    }, {
      key: 'textAreaAutoResize',
      value: function textAreaAutoResize() {
        var $textarea = $(this);

        if ($textarea.val().length) {
          var $hiddenDiv = $('.hiddendiv');
          var fontFamily = $textarea.css('font-family');
          var fontSize = $textarea.css('font-size');

          if (fontSize) {
            $hiddenDiv.css('font-size', fontSize);
          }

          if (fontFamily) {
            $hiddenDiv.css('font-family', fontFamily);
          }

          if ($textarea.attr('wrap') === 'off') {
            $hiddenDiv.css('overflow-wrap', 'normal').css('white-space', 'pre');
          }

          $hiddenDiv.text($textarea.val() + '\n');
          var content = $hiddenDiv.html().replace(/\n/g, '<br>');
          $hiddenDiv.html(content);

          // When textarea is hidden, width goes crazy.
          // Approximate with half of window size
          $hiddenDiv.css('width', $textarea.is(':visible') ? $textarea.width() : $(window).width() / 2);
          $textarea.css('height', $hiddenDiv.height());
        }
      }
    }]);

    return Forms;
  }();

  //auto init Forms


  var forms = new Forms();
  forms.init();
});