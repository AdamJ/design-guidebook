!(function (t) {
  var e = {};
  function n(i) {
      if (e[i]) return e[i].exports;
      var o = (e[i] = { i: i, l: !1, exports: {} });
      return t[i].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }
  (n.m = t),
      (n.c = e),
      (n.d = function (t, e, i) {
          n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: i });
      }),
      (n.r = function (t) {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 });
      }),
      (n.t = function (t, e) {
          if ((1 & e && (t = n(t)), 8 & e)) return t;
          if (4 & e && "object" == typeof t && t && t.__esModule) return t;
          var i = Object.create(null);
          if ((n.r(i), Object.defineProperty(i, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t))
              for (var o in t)
                  n.d(
                      i,
                      o,
                      function (e) {
                          return t[e];
                      }.bind(null, o)
                  );
          return i;
      }),
      (n.n = function (t) {
          var e =
              t && t.__esModule
                  ? function () {
                        return t.default;
                    }
                  : function () {
                        return t;
                    };
          return n.d(e, "a", e), e;
      }),
      (n.o = function (t, e) {
          return Object.prototype.hasOwnProperty.call(t, e);
      }),
      (n.p = ""),
      n((n.s = 32));
})([
  ,
  ,
  ,
  ,
  ,
  ,
  function (t, e, n) {
      (function (t) {
          (function (e) {
              "use strict";
              function n(t, e) {
                  if (window.NodeList.prototype.forEach) return t.forEach(e);
                  for (var n = 0; n < t.length; n++) e.call(window, t[n], n, t);
              }
              function i(t) {
                  (this.$module = t),
                      (this.moduleId = t.getAttribute("id")),
                      (this.$sections = t.querySelectorAll(".govuk-accordion__section")),
                      (this.$openAllButton = ""),
                      (this.browserSupportsSessionStorage = o.checkForSessionStorage()),
                      (this.controlsClass = "govuk-accordion__controls"),
                      (this.openAllClass = "govuk-accordion__open-all"),
                      (this.iconClass = "govuk-accordion__icon"),
                      (this.sectionHeaderClass = "govuk-accordion__section-header"),
                      (this.sectionHeaderFocusedClass = "govuk-accordion__section-header--focused"),
                      (this.sectionHeadingClass = "govuk-accordion__section-heading"),
                      (this.sectionSummaryClass = "govuk-accordion__section-summary"),
                      (this.sectionButtonClass = "govuk-accordion__section-button"),
                      (this.sectionExpandedClass = "govuk-accordion__section--expanded");
              }
              (function (t) {
                  var e, n, i;
                  ("defineProperty" in Object &&
                      (function () {
                          try {
                              return Object.defineProperty({}, "test", { value: 42 }), !0;
                          } catch (t) {
                              return !1;
                          }
                      })()) ||
                      ((e = Object.defineProperty),
                      (n = Object.prototype.hasOwnProperty("__defineGetter__")),
                      (i = "A property cannot both have accessors and be writable or have a value"),
                      (Object.defineProperty = function (t, o, s) {
                          if (e && (t === window || t === document || t === Element.prototype || t instanceof Element)) return e(t, o, s);
                          if (null === t || !(t instanceof Object || "object" == typeof t)) throw new TypeError("Object.defineProperty called on non-object");
                          if (!(s instanceof Object)) throw new TypeError("Property description must be an object");
                          var r = String(o),
                              a = "value" in s || "writable" in s,
                              c = "get" in s && typeof s.get,
                              l = "set" in s && typeof s.set;
                          if (c) {
                              if ("function" !== c) throw new TypeError("Getter must be a function");
                              if (!n) throw new TypeError("Getters & setters cannot be defined on this javascript engine");
                              if (a) throw new TypeError(i);
                              Object.__defineGetter__.call(t, r, s.get);
                          } else t[r] = s.value;
                          if (l) {
                              if ("function" !== l) throw new TypeError("Setter must be a function");
                              if (!n) throw new TypeError("Getters & setters cannot be defined on this javascript engine");
                              if (a) throw new TypeError(i);
                              Object.__defineSetter__.call(t, r, s.set);
                          }
                          return "value" in s && (t[r] = s.value), t;
                      }));
              }.call(("object" == typeof window && window) || ("object" == typeof self && self) || ("object" == typeof t && t) || {}),
                  function (t) {
                      "bind" in Function.prototype ||
                          Object.defineProperty(Function.prototype, "bind", {
                              value: function (t) {
                                  var e,
                                      n = Array,
                                      i = Object,
                                      o = i.prototype,
                                      s = n.prototype,
                                      r = function () {},
                                      a = o.toString,
                                      c = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag,
                                      l = Function.prototype.toString,
                                      u = function (t) {
                                          try {
                                              return l.call(t), !0;
                                          } catch (t) {
                                              return !1;
                                          }
                                      },
                                      d = "[object Function]",
                                      h = "[object GeneratorFunction]";
                                  e = function (t) {
                                      if ("function" != typeof t) return !1;
                                      if (c) return u(t);
                                      var e = a.call(t);
                                      return e === d || e === h;
                                  };
                                  var p = s.slice,
                                      f = s.concat,
                                      m = s.push,
                                      b = Math.max,
                                      g = this;
                                  if (!e(g)) throw new TypeError("Function.prototype.bind called on incompatible " + g);
                                  for (
                                      var v,
                                          y = p.call(arguments, 1),
                                          E = function () {
                                              if (this instanceof v) {
                                                  var e = g.apply(this, f.call(y, p.call(arguments)));
                                                  return i(e) === e ? e : this;
                                              }
                                              return g.apply(t, f.call(y, p.call(arguments)));
                                          },
                                          w = b(0, g.length - y.length),
                                          A = [],
                                          L = 0;
                                      L < w;
                                      L++
                                  )
                                      m.call(A, "$" + L);
                                  return (
                                      (v = Function("binder", "return function (" + A.join(",") + "){ return binder.apply(this, arguments); }")(E)),
                                      g.prototype && ((r.prototype = g.prototype), (v.prototype = new r()), (r.prototype = null)),
                                      v
                                  );
                              },
                          });
                  }.call(("object" == typeof window && window) || ("object" == typeof self && self) || ("object" == typeof t && t) || {}),
                  function (t) {
                      var e;
                      ("DOMTokenList" in this && (!("classList" in (e = document.createElement("x"))) || (!e.classList.toggle("x", !1) && !e.className))) ||
                          (function (e) {
                              var n;
                              ("DOMTokenList" in e &&
                                  e.DOMTokenList &&
                                  (!document.createElementNS || !document.createElementNS("http://www.w3.org/2000/svg", "svg") || document.createElementNS("http://www.w3.org/2000/svg", "svg").classList instanceof DOMTokenList)) ||
                                  (e.DOMTokenList = (function () {
                                      var e = !0,
                                          n = function (t, n, i, o) {
                                              Object.defineProperty ? Object.defineProperty(t, n, { configurable: !1 === e || !!o, get: i }) : t.__defineGetter__(n, i);
                                          };
                                      try {
                                          n({}, "support");
                                      } catch (t) {
                                          e = !1;
                                      }
                                      return function (e, i) {
                                          var o = this,
                                              s = [],
                                              r = {},
                                              a = 0,
                                              c = 0,
                                              l = function (t) {
                                                  n(
                                                      o,
                                                      t,
                                                      function () {
                                                          return d(), s[t];
                                                      },
                                                      !1
                                                  );
                                              },
                                              u = function () {
                                                  if (a >= c) for (; c < a; ++c) l(c);
                                              },
                                              d = function () {
                                                  var t,
                                                      n,
                                                      o = arguments,
                                                      c = /\s+/;
                                                  if (o.length)
                                                      for (n = 0; n < o.length; ++n) if (c.test(o[n])) throw (((t = new SyntaxError('String "' + o[n] + '" contains an invalid character')).code = 5), (t.name = "InvalidCharacterError"), t);
                                                  for (
                                                      "" === (s = "object" == typeof e[i] ? ("" + e[i].baseVal).replace(/^\s+|\s+$/g, "").split(c) : ("" + e[i]).replace(/^\s+|\s+$/g, "").split(c))[0] && (s = []), r = {}, n = 0;
                                                      n < s.length;
                                                      ++n
                                                  )
                                                      r[s[n]] = !0;
                                                  (a = s.length), u();
                                              };
                                          return (
                                              d(),
                                              n(o, "length", function () {
                                                  return d(), a;
                                              }),
                                              (o.toLocaleString = o.toString = function () {
                                                  return d(), s.join(" ");
                                              }),
                                              (o.item = function (t) {
                                                  return d(), s[t];
                                              }),
                                              (o.contains = function (t) {
                                                  return d(), !!r[t];
                                              }),
                                              (o.add = function () {
                                                  d.apply(o, (t = arguments));
                                                  for (var t, n, c = 0, l = t.length; c < l; ++c) (n = t[c]), r[n] || (s.push(n), (r[n] = !0));
                                                  a !== s.length && ((a = s.length >>> 0), "object" == typeof e[i] ? (e[i].baseVal = s.join(" ")) : (e[i] = s.join(" ")), u());
                                              }),
                                              (o.remove = function () {
                                                  d.apply(o, (t = arguments));
                                                  for (var t, n = {}, c = 0, l = []; c < t.length; ++c) (n[t[c]] = !0), delete r[t[c]];
                                                  for (c = 0; c < s.length; ++c) n[s[c]] || l.push(s[c]);
                                                  (s = l), (a = l.length >>> 0), "object" == typeof e[i] ? (e[i].baseVal = s.join(" ")) : (e[i] = s.join(" ")), u();
                                              }),
                                              (o.toggle = function (e, n) {
                                                  return d.apply(o, [e]), t !== n ? (n ? (o.add(e), !0) : (o.remove(e), !1)) : r[e] ? (o.remove(e), !1) : (o.add(e), !0);
                                              }),
                                              o
                                          );
                                      };
                                  })()),
                                  "classList" in (n = document.createElement("span")) &&
                                      (n.classList.toggle("x", !1),
                                      n.classList.contains("x") &&
                                          (n.classList.constructor.prototype.toggle = function (e) {
                                              var n = arguments[1];
                                              if (n === t) {
                                                  var i = !this.contains(e);
                                                  return this[i ? "add" : "remove"](e), i;
                                              }
                                              return this[(n = !!n) ? "add" : "remove"](e), n;
                                          })),
                                  (function () {
                                      var t = document.createElement("span");
                                      if ("classList" in t && (t.classList.add("a", "b"), !t.classList.contains("b"))) {
                                          var e = t.classList.constructor.prototype.add;
                                          t.classList.constructor.prototype.add = function () {
                                              for (var t = arguments, n = arguments.length, i = 0; i < n; i++) e.call(this, t[i]);
                                          };
                                      }
                                  })(),
                                  (function () {
                                      var t = document.createElement("span");
                                      if ("classList" in t && (t.classList.add("a"), t.classList.add("b"), t.classList.remove("a", "b"), t.classList.contains("b"))) {
                                          var e = t.classList.constructor.prototype.remove;
                                          t.classList.constructor.prototype.remove = function () {
                                              for (var t = arguments, n = arguments.length, i = 0; i < n; i++) e.call(this, t[i]);
                                          };
                                      }
                                  })();
                          })(this);
                  }.call(("object" == typeof window && window) || ("object" == typeof self && self) || ("object" == typeof t && t) || {}),
                  function (t) {
                      "Document" in this ||
                          ("undefined" == typeof WorkerGlobalScope &&
                              "function" != typeof importScripts &&
                              (this.HTMLDocument
                                  ? (this.Document = this.HTMLDocument)
                                  : ((this.Document = this.HTMLDocument = document.constructor = new Function("return function Document() {}")()), (this.Document.prototype = document))));
                  }.call(("object" == typeof window && window) || ("object" == typeof self && self) || ("object" == typeof t && t) || {}),
                  function (t) {
                      ("Element" in this && "HTMLElement" in this) ||
                          (function () {
                              if (!window.Element || window.HTMLElement) {
                                  window.Element = window.HTMLElement = new Function("return function Element() {}")();
                                  var t,
                                      e = document.appendChild(document.createElement("body")),
                                      n = e.appendChild(document.createElement("iframe")).contentWindow.document,
                                      i = (Element.prototype = n.appendChild(n.createElement("*"))),
                                      o = {},
                                      s = function (t, e) {
                                          var n,
                                              i,
                                              r,
                                              a = t.childNodes || [],
                                              c = -1;
                                          if (1 === t.nodeType && t.constructor !== Element) for (n in ((t.constructor = Element), o)) (i = o[n]), (t[n] = i);
                                          for (; (r = e && a[++c]); ) s(r, e);
                                          return t;
                                      },
                                      r = document.getElementsByTagName("*"),
                                      a = document.createElement,
                                      c = 100;
                                  i.attachEvent("onpropertychange", function (t) {
                                      for (var e, n = t.propertyName, s = !o.hasOwnProperty(n), a = i[n], c = o[n], l = -1; (e = r[++l]); ) 1 === e.nodeType && (s || e[n] === c) && (e[n] = a);
                                      o[n] = a;
                                  }),
                                      (i.constructor = Element),
                                      i.hasAttribute ||
                                          (i.hasAttribute = function (t) {
                                              return null !== this.getAttribute(t);
                                          }),
                                      l() || ((document.onreadystatechange = l), (t = setInterval(l, 25))),
                                      (document.createElement = function (t) {
                                          var e = a(String(t).toLowerCase());
                                          return s(e);
                                      }),
                                      document.removeChild(e);
                              } else window.HTMLElement = window.Element;
                              function l() {
                                  return (
                                      c-- || clearTimeout(t),
                                      !(!document.body || document.body.prototype || !/(complete|interactive)/.test(document.readyState) || (s(document, !0), t && document.body.prototype && clearTimeout(t), !document.body.prototype))
                                  );
                              }
                          })();
                  }.call(("object" == typeof window && window) || ("object" == typeof self && self) || ("object" == typeof t && t) || {}),
                  function (t) {
                      var e;
                      ("document" in this && "classList" in document.documentElement && "Element" in this && "classList" in Element.prototype && ((e = document.createElement("span")).classList.add("a", "b"), e.classList.contains("b"))) ||
                          (function (t) {
                              var e = !0,
                                  n = function (t, n, i, o) {
                                      Object.defineProperty ? Object.defineProperty(t, n, { configurable: !1 === e || !!o, get: i }) : t.__defineGetter__(n, i);
                                  };
                              try {
                                  n({}, "support");
                              } catch (t) {
                                  e = !1;
                              }
                              var i = function (t, o, s) {
                                  n(
                                      t.prototype,
                                      o,
                                      function () {
                                          var t,
                                              r = "__defineGetter__DEFINE_PROPERTY" + o;
                                          if (this[r]) return t;
                                          if (((this[r] = !0), !1 === e)) {
                                              for (var a, c = i.mirror || document.createElement("div"), l = c.childNodes, u = l.length, d = 0; d < u; ++d)
                                                  if (l[d]._R === this) {
                                                      a = l[d];
                                                      break;
                                                  }
                                              a || (a = c.appendChild(document.createElement("div"))), (t = DOMTokenList.call(a, this, s));
                                          } else t = new DOMTokenList(this, s);
                                          return (
                                              n(this, o, function () {
                                                  return t;
                                              }),
                                              delete this[r],
                                              t
                                          );
                                      },
                                      !0
                                  );
                              };
                              i(t.Element, "classList", "className"), i(t.HTMLElement, "classList", "className"), i(t.HTMLLinkElement, "relList", "rel"), i(t.HTMLAnchorElement, "relList", "rel"), i(t.HTMLAreaElement, "relList", "rel");
                          })(this);
                  }.call(("object" == typeof window && window) || ("object" == typeof self && self) || ("object" == typeof t && t) || {}),
                  (i.prototype.init = function () {
                      if (this.$module) {
                          this.initControls(), this.initSectionHeaders();
                          var t = this.checkIfAllSectionsOpen();
                          this.updateOpenAllButton(t);
                      }
                  }),
                  (i.prototype.initControls = function () {
                      (this.$openAllButton = document.createElement("button")),
                          this.$openAllButton.setAttribute("type", "button"),
                          (this.$openAllButton.innerHTML = 'Open all <span class="govuk-visually-hidden">sections</span>'),
                          this.$openAllButton.setAttribute("class", this.openAllClass),
                          this.$openAllButton.setAttribute("aria-expanded", "false"),
                          this.$openAllButton.setAttribute("type", "button");
                      var t = document.createElement("div");
                      t.setAttribute("class", this.controlsClass),
                          t.appendChild(this.$openAllButton),
                          this.$module.insertBefore(t, this.$module.firstChild),
                          this.$openAllButton.addEventListener("click", this.onOpenOrCloseAllToggle.bind(this));
                  }),
                  (i.prototype.initSectionHeaders = function () {
                      n(
                          this.$sections,
                          function (t, e) {
                              var n = t.querySelector("." + this.sectionHeaderClass);
                              this.initHeaderAttributes(n, e), this.setExpanded(this.isExpanded(t), t), n.addEventListener("click", this.onSectionToggle.bind(this, t)), this.setInitialState(t);
                          }.bind(this)
                      );
                  }),
                  (i.prototype.initHeaderAttributes = function (t, e) {
                      var n = this,
                          i = t.querySelector("." + this.sectionButtonClass),
                          o = t.querySelector("." + this.sectionHeadingClass),
                          s = t.querySelector("." + this.sectionSummaryClass),
                          r = document.createElement("button");
                      r.setAttribute("type", "button"), r.setAttribute("id", this.moduleId + "-heading-" + (e + 1)), r.setAttribute("aria-controls", this.moduleId + "-content-" + (e + 1));
                      for (var a = 0; a < i.attributes.length; a++) {
                          var c = i.attributes.item(a);
                          r.setAttribute(c.nodeName, c.nodeValue);
                      }
                      r.addEventListener("focusin", function (e) {
                          t.classList.contains(n.sectionHeaderFocusedClass) || (t.className += " " + n.sectionHeaderFocusedClass);
                      }),
                          r.addEventListener("blur", function (e) {
                              t.classList.remove(n.sectionHeaderFocusedClass);
                          }),
                          null != s && r.setAttribute("aria-describedby", this.moduleId + "-summary-" + (e + 1)),
                          (r.innerHTML = i.innerHTML),
                          o.removeChild(i),
                          o.appendChild(r);
                      var l = document.createElement("span");
                      (l.className = this.iconClass), l.setAttribute("aria-hidden", "true"), o.appendChild(l);
                  }),
                  (i.prototype.onSectionToggle = function (t) {
                      var e = this.isExpanded(t);
                      this.setExpanded(!e, t), this.storeState(t);
                  }),
                  (i.prototype.onOpenOrCloseAllToggle = function () {
                      var t = this,
                          e = this.$sections,
                          i = !this.checkIfAllSectionsOpen();
                      n(e, function (e) {
                          t.setExpanded(i, e), t.storeState(e);
                      }),
                          t.updateOpenAllButton(i);
                  }),
                  (i.prototype.setExpanded = function (t, e) {
                      e.querySelector("." + this.sectionButtonClass).setAttribute("aria-expanded", t), t ? e.classList.add(this.sectionExpandedClass) : e.classList.remove(this.sectionExpandedClass);
                      var n = this.checkIfAllSectionsOpen();
                      this.updateOpenAllButton(n);
                  }),
                  (i.prototype.isExpanded = function (t) {
                      return t.classList.contains(this.sectionExpandedClass);
                  }),
                  (i.prototype.checkIfAllSectionsOpen = function () {
                      return this.$sections.length === this.$module.querySelectorAll("." + this.sectionExpandedClass).length;
                  }),
                  (i.prototype.updateOpenAllButton = function (t) {
                      var e = t ? "Close all" : "Open all";
                      (e += '<span class="govuk-visually-hidden"> sections</span>'), this.$openAllButton.setAttribute("aria-expanded", t), (this.$openAllButton.innerHTML = e);
                  }));
              var o = {
                  checkForSessionStorage: function () {
                      var t,
                          e = "this is the test string";
                      try {
                          return window.sessionStorage.setItem(e, e), (t = window.sessionStorage.getItem(e) === e.toString()), window.sessionStorage.removeItem(e), t;
                      } catch (t) {
                          ("undefined" != typeof console && void 0 !== console.log) || console.log("Notice: sessionStorage not available.");
                      }
                  },
              };
              function s(t) {
                  (this.$module = t), (this.debounceFormSubmitTimer = null);
              }
              function r(t) {
                  this.$module = t;
              }
              function a(t) {
                  (this.$module = t), (this.$textarea = t.querySelector(".govuk-js-character-count")), this.$textarea && (this.$countMessage = t.querySelector("[id=" + this.$textarea.id + "-info]"));
              }
              function c(t) {
                  (this.$module = t), (this.$inputs = t.querySelectorAll('input[type="checkbox"]'));
              }
              function l(t) {
                  this.$module = t;
              }
              function u(t) {
                  this.$module = t;
              }
              function d(t) {
                  this.$module = t;
              }
              function h(t) {
                  (this.$module = t), (this.$tabs = t.querySelectorAll(".govuk-tabs__tab")), (this.keys = { left: 37, right: 39, up: 38, down: 40 }), (this.jsHiddenClass = "govuk-tabs__panel--hidden");
              }
              (i.prototype.storeState = function (t) {
                  if (this.browserSupportsSessionStorage) {
                      var e = t.querySelector("." + this.sectionButtonClass);
                      if (e) {
                          var n = e.getAttribute("aria-controls"),
                              i = e.getAttribute("aria-expanded");
                          void 0 !== n || ("undefined" != typeof console && void 0 !== console.log) || console.error(new Error("No aria controls present in accordion section heading.")),
                              void 0 !== i || ("undefined" != typeof console && void 0 !== console.log) || console.error(new Error("No aria expanded present in accordion section heading.")),
                              n && i && window.sessionStorage.setItem(n, i);
                      }
                  }
              }),
                  (i.prototype.setInitialState = function (t) {
                      if (this.browserSupportsSessionStorage) {
                          var e = t.querySelector("." + this.sectionButtonClass);
                          if (e) {
                              var n = e.getAttribute("aria-controls"),
                                  i = n ? window.sessionStorage.getItem(n) : null;
                              null !== i && this.setExpanded("true" === i, t);
                          }
                      }
                  }),
                  function (t) {
                      "Window" in this ||
                          ("undefined" == typeof WorkerGlobalScope &&
                              "function" != typeof importScripts &&
                              (function (t) {
                                  t.constructor ? (t.Window = t.constructor) : ((t.Window = t.constructor = new Function("return function Window() {}")()).prototype = this);
                              })(this));
                  }.call(("object" == typeof window && window) || ("object" == typeof self && self) || ("object" == typeof t && t) || {}),
                  function (t) {
                      (function (t) {
                          if (!("Event" in t)) return !1;
                          if ("function" == typeof t.Event) return !0;
                          try {
                              return new Event("click"), !0;
                          } catch (t) {
                              return !1;
                          }
                      })(this) ||
                          (function () {
                              var e = {
                                  click: 1,
                                  dblclick: 1,
                                  keyup: 1,
                                  keypress: 1,
                                  keydown: 1,
                                  mousedown: 1,
                                  mouseup: 1,
                                  mousemove: 1,
                                  mouseover: 1,
                                  mouseenter: 1,
                                  mouseleave: 1,
                                  mouseout: 1,
                                  storage: 1,
                                  storagecommit: 1,
                                  textinput: 1,
                              };
                              if ("undefined" != typeof document && "undefined" != typeof window) {
                                  var n = (window.Event && window.Event.prototype) || null;
                                  (window.Event = Window.prototype.Event = function (e, n) {
                                      if (!e) throw new Error("Not enough arguments");
                                      var i;
                                      if ("createEvent" in document) {
                                          i = document.createEvent("Event");
                                          var o = !(!n || n.bubbles === t) && n.bubbles,
                                              s = !(!n || n.cancelable === t) && n.cancelable;
                                          return i.initEvent(e, o, s), i;
                                      }
                                      return ((i = document.createEventObject()).type = e), (i.bubbles = !(!n || n.bubbles === t) && n.bubbles), (i.cancelable = !(!n || n.cancelable === t) && n.cancelable), i;
                                  }),
                                      n && Object.defineProperty(window.Event, "prototype", { configurable: !1, enumerable: !1, writable: !0, value: n }),
                                      "createEvent" in document ||
                                          ((window.addEventListener = Window.prototype.addEventListener = Document.prototype.addEventListener = Element.prototype.addEventListener = function () {
                                              var t = this,
                                                  n = arguments[0],
                                                  o = arguments[1];
                                              if (t === window && n in e)
                                                  throw new Error("In IE8 the event: " + n + " is not available on the window object. Please see https://github.com/Financial-Times/polyfill-service/issues/317 for more information.");
                                              t._events || (t._events = {}),
                                                  t._events[n] ||
                                                      ((t._events[n] = function (e) {
                                                          var n,
                                                              o = t._events[e.type].list,
                                                              s = o.slice(),
                                                              r = -1,
                                                              a = s.length;
                                                          for (
                                                              e.preventDefault = function () {
                                                                  !1 !== e.cancelable && (e.returnValue = !1);
                                                              },
                                                                  e.stopPropagation = function () {
                                                                      e.cancelBubble = !0;
                                                                  },
                                                                  e.stopImmediatePropagation = function () {
                                                                      (e.cancelBubble = !0), (e.cancelImmediate = !0);
                                                                  },
                                                                  e.currentTarget = t,
                                                                  e.relatedTarget = e.fromElement || null,
                                                                  e.target = e.target || e.srcElement || t,
                                                                  e.timeStamp = new Date().getTime(),
                                                                  e.clientX && ((e.pageX = e.clientX + document.documentElement.scrollLeft), (e.pageY = e.clientY + document.documentElement.scrollTop));
                                                              ++r < a && !e.cancelImmediate;

                                                          )
                                                              r in s && -1 !== i(o, (n = s[r])) && "function" == typeof n && n.call(t, e);
                                                      }),
                                                      (t._events[n].list = []),
                                                      t.attachEvent && t.attachEvent("on" + n, t._events[n])),
                                                  t._events[n].list.push(o);
                                          }),
                                          (window.removeEventListener = Window.prototype.removeEventListener = Document.prototype.removeEventListener = Element.prototype.removeEventListener = function () {
                                              var t,
                                                  e = this,
                                                  n = arguments[0],
                                                  o = arguments[1];
                                              e._events &&
                                                  e._events[n] &&
                                                  e._events[n].list &&
                                                  -1 !== (t = i(e._events[n].list, o)) &&
                                                  (e._events[n].list.splice(t, 1), e._events[n].list.length || (e.detachEvent && e.detachEvent("on" + n, e._events[n]), delete e._events[n]));
                                          }),
                                          (window.dispatchEvent = Window.prototype.dispatchEvent = Document.prototype.dispatchEvent = Element.prototype.dispatchEvent = function (t) {
                                              if (!arguments.length) throw new Error("Not enough arguments");
                                              if (!t || "string" != typeof t.type) throw new Error("DOM Events Exception 0");
                                              var e = this,
                                                  n = t.type;
                                              try {
                                                  if (!t.bubbles) {
                                                      t.cancelBubble = !0;
                                                      var i = function (t) {
                                                          (t.cancelBubble = !0), (e || window).detachEvent("on" + n, i);
                                                      };
                                                      this.attachEvent("on" + n, i);
                                                  }
                                                  this.fireEvent("on" + n, t);
                                              } catch (i) {
                                                  t.target = e;
                                                  do {
                                                      (t.currentTarget = e),
                                                          "_events" in e && "function" == typeof e._events[n] && e._events[n].call(e, t),
                                                          "function" == typeof e["on" + n] && e["on" + n].call(e, t),
                                                          (e = 9 === e.nodeType ? e.parentWindow : e.parentNode);
                                                  } while (e && !t.cancelBubble);
                                              }
                                              return !0;
                                          }),
                                          document.attachEvent("onreadystatechange", function () {
                                              "complete" === document.readyState && document.dispatchEvent(new Event("DOMContentLoaded", { bubbles: !0 }));
                                          }));
                              }
                              function i(t, e) {
                                  for (var n = -1, i = t.length; ++n < i; ) if (n in t && t[n] === e) return n;
                                  return -1;
                              }
                          })();
                  }.call(("object" == typeof window && window) || ("object" == typeof self && self) || ("object" == typeof t && t) || {}),
                  (s.prototype.handleKeyDown = function (t) {
                      var e = t.target;
                      "button" === e.getAttribute("role") && 32 === t.keyCode && (t.preventDefault(), e.click());
                  }),
                  (s.prototype.debounce = function (t) {
                      if ("true" === t.target.getAttribute("data-prevent-double-click"))
                          return this.debounceFormSubmitTimer
                              ? (t.preventDefault(), !1)
                              : void (this.debounceFormSubmitTimer = setTimeout(
                                    function () {
                                        this.debounceFormSubmitTimer = null;
                                    }.bind(this),
                                    1e3
                                ));
                  }),
                  (s.prototype.init = function () {
                      this.$module.addEventListener("keydown", this.handleKeyDown), this.$module.addEventListener("click", this.debounce);
                  }),
                  (r.prototype.init = function () {
                      this.$module && ("boolean" == typeof this.$module.open || this.polyfillDetails());
                  }),
                  (r.prototype.polyfillDetails = function () {
                      var t,
                          e = this.$module,
                          n = (this.$summary = e.getElementsByTagName("summary").item(0)),
                          i = (this.$content = e.getElementsByTagName("div").item(0));
                      n &&
                          i &&
                          (i.id ||
                              (i.id =
                                  "details-content-" +
                                  ((t = new Date().getTime()),
                                  void 0 !== window.performance && "function" == typeof window.performance.now && (t += window.performance.now()),
                                  "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
                                      var n = (t + 16 * Math.random()) % 16 | 0;
                                      return (t = Math.floor(t / 16)), ("x" === e ? n : (3 & n) | 8).toString(16);
                                  }))),
                          e.setAttribute("role", "group"),
                          n.setAttribute("role", "button"),
                          n.setAttribute("aria-controls", i.id),
                          (n.tabIndex = 0),
                          !0 == (null !== e.getAttribute("open"))
                              ? (n.setAttribute("aria-expanded", "true"), i.setAttribute("aria-hidden", "false"))
                              : (n.setAttribute("aria-expanded", "false"), i.setAttribute("aria-hidden", "true"), (i.style.display = "none")),
                          this.polyfillHandleInputs(n, this.polyfillSetAttributes.bind(this)));
                  }),
                  (r.prototype.polyfillSetAttributes = function () {
                      var t = this.$module,
                          e = this.$summary,
                          n = this.$content,
                          i = "true" === e.getAttribute("aria-expanded"),
                          o = "true" === n.getAttribute("aria-hidden");
                      return (
                          e.setAttribute("aria-expanded", i ? "false" : "true"),
                          n.setAttribute("aria-hidden", o ? "false" : "true"),
                          (n.style.display = i ? "none" : ""),
                          null !== t.getAttribute("open") ? t.removeAttribute("open") : t.setAttribute("open", "open"),
                          !0
                      );
                  }),
                  (r.prototype.polyfillHandleInputs = function (t, e) {
                      t.addEventListener("keypress", function (t) {
                          var n = t.target;
                          (13 !== t.keyCode && 32 !== t.keyCode) || ("summary" === n.nodeName.toLowerCase() && (t.preventDefault(), n.click ? n.click() : e(t)));
                      }),
                          t.addEventListener("keyup", function (t) {
                              var e = t.target;
                              32 === t.keyCode && "summary" === e.nodeName.toLowerCase() && t.preventDefault();
                          }),
                          t.addEventListener("click", e);
                  }),
                  (a.prototype.defaults = { characterCountAttribute: "data-maxlength", wordCountAttribute: "data-maxwords" }),
                  (a.prototype.init = function () {
                      var t = this.$module,
                          e = this.$textarea,
                          n = this.$countMessage;
                      if (e && n) {
                          e.insertAdjacentElement("afterend", n), (this.options = this.getDataset(t));
                          var i = this.defaults.characterCountAttribute;
                          this.options.maxwords && (i = this.defaults.wordCountAttribute),
                              (this.maxLength = t.getAttribute(i)),
                              this.maxLength && (t.removeAttribute("maxlength"), this.bindChangeEvents.bind(this)(), this.updateCountMessage.bind(this)());
                      }
                  }),
                  (a.prototype.getDataset = function (t) {
                      var e = {},
                          n = t.attributes;
                      if (n)
                          for (var i = 0; i < n.length; i++) {
                              var o = n[i],
                                  s = o.name.match(/^data-(.+)/);
                              s && (e[s[1]] = o.value);
                          }
                      return e;
                  }),
                  (a.prototype.count = function (t) {
                      return this.options.maxwords ? (t.match(/\S+/g) || []).length : t.length;
                  }),
                  (a.prototype.bindChangeEvents = function () {
                      var t = this.$textarea;
                      t.addEventListener("keyup", this.checkIfValueChanged.bind(this)), t.addEventListener("focus", this.handleFocus.bind(this)), t.addEventListener("blur", this.handleBlur.bind(this));
                  }),
                  (a.prototype.checkIfValueChanged = function () {
                      this.$textarea.oldValue || (this.$textarea.oldValue = ""), this.$textarea.value !== this.$textarea.oldValue && ((this.$textarea.oldValue = this.$textarea.value), this.updateCountMessage.bind(this)());
                  }),
                  (a.prototype.updateCountMessage = function () {
                      var t = this.$textarea,
                          e = this.options,
                          n = this.$countMessage,
                          i = this.count(t.value),
                          o = this.maxLength,
                          s = o - i;
                      (o * (e.threshold ? e.threshold : 0)) / 100 > i
                          ? (n.classList.add("govuk-character-count__message--disabled"), n.setAttribute("aria-hidden", !0))
                          : (n.classList.remove("govuk-character-count__message--disabled"), n.removeAttribute("aria-hidden")),
                          s < 0
                              ? (t.classList.add("govuk-textarea--error"), n.classList.remove("govuk-hint"), n.classList.add("govuk-error-message"))
                              : (t.classList.remove("govuk-textarea--error"), n.classList.remove("govuk-error-message"), n.classList.add("govuk-hint"));
                      var r,
                          a,
                          c = "character";
                      e.maxwords && (c = "word"), (c += -1 === s || 1 === s ? "" : "s"), (r = s < 0 ? "too many" : "remaining"), (a = Math.abs(s)), (n.innerHTML = "You have " + a + " " + c + " " + r);
                  }),
                  (a.prototype.handleFocus = function () {
                      this.valueChecker = setInterval(this.checkIfValueChanged.bind(this), 1e3);
                  }),
                  (a.prototype.handleBlur = function () {
                      clearInterval(this.valueChecker);
                  }),
                  (c.prototype.init = function () {
                      var t = this.$module;
                      n(
                          this.$inputs,
                          function (e) {
                              var n = e.getAttribute("data-aria-controls");
                              n && t.querySelector("#" + n) && (e.setAttribute("aria-controls", n), e.removeAttribute("data-aria-controls"), this.setAttributes(e));
                          }.bind(this)
                      ),
                          t.addEventListener("click", this.handleClick.bind(this));
                  }),
                  (c.prototype.setAttributes = function (t) {
                      var e = t.checked;
                      t.setAttribute("aria-expanded", e);
                      var n = this.$module.querySelector("#" + t.getAttribute("aria-controls"));
                      n && n.classList.toggle("govuk-checkboxes__conditional--hidden", !e);
                  }),
                  (c.prototype.handleClick = function (t) {
                      var e = t.target,
                          n = "checkbox" === e.getAttribute("type"),
                          i = e.getAttribute("aria-controls");
                      n && i && this.setAttributes(e);
                  }),
                  function (t) {
                      ("document" in this && "matches" in document.documentElement) ||
                          (Element.prototype.matches =
                              Element.prototype.webkitMatchesSelector ||
                              Element.prototype.oMatchesSelector ||
                              Element.prototype.msMatchesSelector ||
                              Element.prototype.mozMatchesSelector ||
                              function (t) {
                                  for (var e = (this.document || this.ownerDocument).querySelectorAll(t), n = 0; e[n] && e[n] !== this; ) ++n;
                                  return !!e[n];
                              });
                  }.call(("object" == typeof window && window) || ("object" == typeof self && self) || ("object" == typeof t && t) || {}),
                  function (t) {
                      ("document" in this && "closest" in document.documentElement) ||
                          (Element.prototype.closest = function (t) {
                              for (var e = this; e; ) {
                                  if (e.matches(t)) return e;
                                  e = "SVGElement" in window && e instanceof SVGElement ? e.parentNode : e.parentElement;
                              }
                              return null;
                          });
                  }.call(("object" == typeof window && window) || ("object" == typeof self && self) || ("object" == typeof t && t) || {}),
                  (l.prototype.init = function () {
                      var t = this.$module;
                      t && (t.focus(), t.addEventListener("click", this.handleClick.bind(this)));
                  }),
                  (l.prototype.handleClick = function (t) {
                      var e = t.target;
                      this.focusTarget(e) && t.preventDefault();
                  }),
                  (l.prototype.focusTarget = function (t) {
                      if ("A" !== t.tagName || !1 === t.href) return !1;
                      var e = this.getFragmentFromUrl(t.href),
                          n = document.getElementById(e);
                      if (!n) return !1;
                      var i = this.getAssociatedLegendOrLabel(n);
                      return !!i && (i.scrollIntoView(), n.focus({ preventScroll: !0 }), !0);
                  }),
                  (l.prototype.getFragmentFromUrl = function (t) {
                      return -1 !== t.indexOf("#") && t.split("#").pop();
                  }),
                  (l.prototype.getAssociatedLegendOrLabel = function (t) {
                      var e = t.closest("fieldset");
                      if (e) {
                          var n = e.getElementsByTagName("legend");
                          if (n.length) {
                              var i = n[0];
                              if ("checkbox" === t.type || "radio" === t.type) return i;
                              var o = i.getBoundingClientRect().top,
                                  s = t.getBoundingClientRect();
                              if (s.height && window.innerHeight && s.top + s.height - o < window.innerHeight / 2) return i;
                          }
                      }
                      return document.querySelector("label[for='" + t.getAttribute("id") + "']") || t.closest("label");
                  }),
                  (u.prototype.init = function () {
                      var t = this.$module;
                      if (t) {
                          var e = t.querySelector(".govuk-js-header-toggle");
                          e && e.addEventListener("click", this.handleClick.bind(this));
                      }
                  }),
                  (u.prototype.toggleClass = function (t, e) {
                      t.className.indexOf(e) > 0 ? (t.className = t.className.replace(" " + e, "")) : (t.className += " " + e);
                  }),
                  (u.prototype.handleClick = function (t) {
                      var e = this.$module,
                          n = t.target || t.srcElement,
                          i = e.querySelector("#" + n.getAttribute("aria-controls"));
                      n &&
                          i &&
                          (this.toggleClass(i, "govuk-header__navigation--open"),
                          this.toggleClass(n, "govuk-header__menu-button--open"),
                          n.setAttribute("aria-expanded", "true" !== n.getAttribute("aria-expanded")),
                          i.setAttribute("aria-hidden", "false" === i.getAttribute("aria-hidden")));
                  }),
                  (d.prototype.init = function () {
                      var t = this.$module;
                      n(
                          t.querySelectorAll('input[type="radio"]'),
                          function (e) {
                              var n = e.getAttribute("data-aria-controls");
                              n && t.querySelector("#" + n) && (e.setAttribute("aria-controls", n), e.removeAttribute("data-aria-controls"), this.setAttributes(e));
                          }.bind(this)
                      ),
                          t.addEventListener("click", this.handleClick.bind(this));
                  }),
                  (d.prototype.setAttributes = function (t) {
                      var e = document.querySelector("#" + t.getAttribute("aria-controls"));
                      if (e && e.classList.contains("govuk-radios__conditional")) {
                          var n = t.checked;
                          t.setAttribute("aria-expanded", n), e.classList.toggle("govuk-radios__conditional--hidden", !n);
                      }
                  }),
                  (d.prototype.handleClick = function (t) {
                      var e = t.target;
                      "radio" === e.type &&
                          n(
                              document.querySelectorAll('input[type="radio"][aria-controls]'),
                              function (t) {
                                  var n = t.form === e.form;
                                  t.name === e.name && n && this.setAttributes(t);
                              }.bind(this)
                          );
                  }),
                  function (t) {
                      ("Element" in this && "nextElementSibling" in document.documentElement) ||
                          Object.defineProperty(Element.prototype, "nextElementSibling", {
                              get: function () {
                                  for (var t = this.nextSibling; t && 1 !== t.nodeType; ) t = t.nextSibling;
                                  return t;
                              },
                          });
                  }.call(("object" == typeof window && window) || ("object" == typeof self && self) || ("object" == typeof t && t) || {}),
                  function (t) {
                      ("Element" in this && "previousElementSibling" in document.documentElement) ||
                          Object.defineProperty(Element.prototype, "previousElementSibling", {
                              get: function () {
                                  for (var t = this.previousSibling; t && 1 !== t.nodeType; ) t = t.previousSibling;
                                  return t;
                              },
                          });
                  }.call(("object" == typeof window && window) || ("object" == typeof self && self) || ("object" == typeof t && t) || {}),
                  (h.prototype.init = function () {
                      "function" == typeof window.matchMedia ? this.setupResponsiveChecks() : this.setup();
                  }),
                  (h.prototype.setupResponsiveChecks = function () {
                      (this.mql = window.matchMedia("(min-width: 40.0625em)")), this.mql.addListener(this.checkMode.bind(this)), this.checkMode();
                  }),
                  (h.prototype.checkMode = function () {
                      this.mql.matches ? this.setup() : this.teardown();
                  }),
                  (h.prototype.setup = function () {
                      var t = this.$module,
                          e = this.$tabs,
                          i = t.querySelector(".govuk-tabs__list"),
                          o = t.querySelectorAll(".govuk-tabs__list-item");
                      if (e && i && o) {
                          i.setAttribute("role", "tablist"),
                              n(o, function (t) {
                                  t.setAttribute("role", "presentation");
                              }),
                              n(
                                  e,
                                  function (t) {
                                      this.setAttributes(t),
                                          (t.boundTabClick = this.onTabClick.bind(this)),
                                          (t.boundTabKeydown = this.onTabKeydown.bind(this)),
                                          t.addEventListener("click", t.boundTabClick, !0),
                                          t.addEventListener("keydown", t.boundTabKeydown, !0),
                                          this.hideTab(t);
                                  }.bind(this)
                              );
                          var s = this.getTab(window.location.hash) || this.$tabs[0];
                          this.showTab(s), (t.boundOnHashChange = this.onHashChange.bind(this)), window.addEventListener("hashchange", t.boundOnHashChange, !0);
                      }
                  }),
                  (h.prototype.teardown = function () {
                      var t = this.$module,
                          e = this.$tabs,
                          i = t.querySelector(".govuk-tabs__list"),
                          o = t.querySelectorAll(".govuk-tabs__list-item");
                      e &&
                          i &&
                          o &&
                          (i.removeAttribute("role"),
                          n(o, function (t) {
                              t.removeAttribute("role", "presentation");
                          }),
                          n(
                              e,
                              function (t) {
                                  t.removeEventListener("click", t.boundTabClick, !0), t.removeEventListener("keydown", t.boundTabKeydown, !0), this.unsetAttributes(t);
                              }.bind(this)
                          ),
                          window.removeEventListener("hashchange", t.boundOnHashChange, !0));
                  }),
                  (h.prototype.onHashChange = function (t) {
                      var e = window.location.hash,
                          n = this.getTab(e);
                      if (n)
                          if (this.changingHash) this.changingHash = !1;
                          else {
                              var i = this.getCurrentTab();
                              this.hideTab(i), this.showTab(n), n.focus();
                          }
                  }),
                  (h.prototype.hideTab = function (t) {
                      this.unhighlightTab(t), this.hidePanel(t);
                  }),
                  (h.prototype.showTab = function (t) {
                      this.highlightTab(t), this.showPanel(t);
                  }),
                  (h.prototype.getTab = function (t) {
                      return this.$module.querySelector('.govuk-tabs__tab[href="' + t + '"]');
                  }),
                  (h.prototype.setAttributes = function (t) {
                      var e = this.getHref(t).slice(1);
                      t.setAttribute("id", "tab_" + e), t.setAttribute("role", "tab"), t.setAttribute("aria-controls", e), t.setAttribute("aria-selected", "false"), t.setAttribute("tabindex", "-1");
                      var n = this.getPanel(t);
                      n.setAttribute("role", "tabpanel"), n.setAttribute("aria-labelledby", t.id), n.classList.add(this.jsHiddenClass);
                  }),
                  (h.prototype.unsetAttributes = function (t) {
                      t.removeAttribute("id"), t.removeAttribute("role"), t.removeAttribute("aria-controls"), t.removeAttribute("aria-selected"), t.removeAttribute("tabindex");
                      var e = this.getPanel(t);
                      e.removeAttribute("role"), e.removeAttribute("aria-labelledby"), e.classList.remove(this.jsHiddenClass);
                  }),
                  (h.prototype.onTabClick = function (t) {
                      if (!t.target.classList.contains("govuk-tabs__tab")) return !1;
                      t.preventDefault();
                      var e = t.target,
                          n = this.getCurrentTab();
                      this.hideTab(n), this.showTab(e), this.createHistoryEntry(e);
                  }),
                  (h.prototype.createHistoryEntry = function (t) {
                      var e = this.getPanel(t),
                          n = e.id;
                      (e.id = ""), (this.changingHash = !0), (window.location.hash = this.getHref(t).slice(1)), (e.id = n);
                  }),
                  (h.prototype.onTabKeydown = function (t) {
                      switch (t.keyCode) {
                          case this.keys.left:
                          case this.keys.up:
                              this.activatePreviousTab(), t.preventDefault();
                              break;
                          case this.keys.right:
                          case this.keys.down:
                              this.activateNextTab(), t.preventDefault();
                      }
                  }),
                  (h.prototype.activateNextTab = function () {
                      var t = this.getCurrentTab(),
                          e = t.parentNode.nextElementSibling;
                      if (e) var n = e.querySelector(".govuk-tabs__tab");
                      n && (this.hideTab(t), this.showTab(n), n.focus(), this.createHistoryEntry(n));
                  }),
                  (h.prototype.activatePreviousTab = function () {
                      var t = this.getCurrentTab(),
                          e = t.parentNode.previousElementSibling;
                      if (e) var n = e.querySelector(".govuk-tabs__tab");
                      n && (this.hideTab(t), this.showTab(n), n.focus(), this.createHistoryEntry(n));
                  }),
                  (h.prototype.getPanel = function (t) {
                      return this.$module.querySelector(this.getHref(t));
                  }),
                  (h.prototype.showPanel = function (t) {
                      this.getPanel(t).classList.remove(this.jsHiddenClass);
                  }),
                  (h.prototype.hidePanel = function (t) {
                      this.getPanel(t).classList.add(this.jsHiddenClass);
                  }),
                  (h.prototype.unhighlightTab = function (t) {
                      t.setAttribute("aria-selected", "false"), t.parentNode.classList.remove("govuk-tabs__list-item--selected"), t.setAttribute("tabindex", "-1");
                  }),
                  (h.prototype.highlightTab = function (t) {
                      t.setAttribute("aria-selected", "true"), t.parentNode.classList.add("govuk-tabs__list-item--selected"), t.setAttribute("tabindex", "0");
                  }),
                  (h.prototype.getCurrentTab = function () {
                      return this.$module.querySelector(".govuk-tabs__list-item--selected .govuk-tabs__tab");
                  }),
                  (h.prototype.getHref = function (t) {
                      var e = t.getAttribute("href");
                      return e.slice(e.indexOf("#"), e.length);
                  }),
                  (e.initAll = function (t) {
                      var e = void 0 !== (t = void 0 !== t ? t : {}).scope ? t.scope : document;
                      n(e.querySelectorAll('[data-module="govuk-button"]'), function (t) {
                          new s(t).init();
                      }),
                          n(e.querySelectorAll('[data-module="govuk-accordion"]'), function (t) {
                              new i(t).init();
                          }),
                          n(e.querySelectorAll('[data-module="govuk-details"]'), function (t) {
                              new r(t).init();
                          }),
                          n(e.querySelectorAll('[data-module="govuk-character-count"]'), function (t) {
                              new a(t).init();
                          }),
                          n(e.querySelectorAll('[data-module="govuk-checkboxes"]'), function (t) {
                              new c(t).init();
                          }),
                          new l(e.querySelector('[data-module="govuk-error-summary"]')).init(),
                          new u(e.querySelector('[data-module="govuk-header"]')).init(),
                          n(e.querySelectorAll('[data-module="govuk-radios"]'), function (t) {
                              new d(t).init();
                          }),
                          n(e.querySelectorAll('[data-module="govuk-tabs"]'), function (t) {
                              new h(t).init();
                          });
                  }),
                  (e.Accordion = i),
                  (e.Button = s),
                  (e.Details = r),
                  (e.CharacterCount = a),
                  (e.Checkboxes = c),
                  (e.ErrorSummary = l),
                  (e.Header = u),
                  (e.Radios = d),
                  (e.Tabs = h);
          })(e);
      }.call(this, n(7)));
  },
  function (t, e) {
      var n;
      n = (function () {
          return this;
      })();
      try {
          n = n || new Function("return this")();
      } catch (t) {
          "object" == typeof window && (n = window);
      }
      t.exports = n;
  },
  function (t, e) {
      t.exports = {
          on: function (t, e) {
              const n = (this.events = this.events || {});
              return (n[t] = this.events[t] || []), n[t].push(e), this;
          },
          off: function (t) {
              return this.events && this.events[t] && delete this.events[t], this;
          },
          trigger: function (t) {
              const e = this.events || {};
              if (!1 === e.hasOwnProperty(t)) return this;
              for (let n = 0, i = e[t].length; n < i; n++) this.events[t][n].apply(this, arguments);
              return this;
          },
      };
  },
  ,
  function (t, e) {
      t.exports = {
          closest: function (t, e) {
              if ("closest" in t) return t.closest(e);
              const n = t.matches || t.webkitMatchesSelector || t.mozMatchesSelector || t.msMatchesSelector;
              let i;
              for (; t; ) if ((n.bind(t)(e) ? (i = t) : (t = t.parentElement), i)) return t;
              return null;
          },
      };
  },
  function (t, e) {
      t.exports = {
          DIRECTIONS: { UP: 0, RIGHT: 1, DOWN: -1, LEFT: -2 },
          NO_OP_FUNCTION: function () {},
          PREFIXES: { PAGE: "p-", TEMPLATE: "t-", ORGANISM: "o-", MOLECULE: "m-", ATOM: "a-" },
          TYPES: { PAGE: 1, TEMPLATE: 2, ORGANISM: 3, MOLECULE: 4, ATOM: 5 },
          UNDEFINED: void 0,
      };
  },
  ,
  ,
  ,
  ,
  ,
  ,
  function (t, e, n) {
      const i = n(33),
          o = n(11).TYPES,
          s = i.extend({ TYPE: o.ORGANISM, CHILD_TYPES: [o.MOLECULE, o.ATOM] });
      t.exports = s;
  },
  ,
  ,
  function (t, e, n) {
      const i = n(10).closest,
          o = n(8),
          s = n(18),
          r = n(38),
          a = s.extend({
              ui: { base: ".o-expandable", target: ".o-expandable_target", content: ".o-expandable_content", header: ".o-expandable_header", label: ".o-expandable_label" },
              classes: { targetExpanded: "o-expandable_target__expanded", targetCollapsed: "o-expandable_target__collapsed", group: "o-expandable-group", groupAccordion: "o-expandable-group__accordion" },
              events: { "click .o-expandable_target": "expandableClickHandler" },
              transition: null,
              isAccordionGroup: !1,
              activeAccordion: !1,
              initialize: function () {
                  const t = new r(this.ui.content);
                  (this.transition = t.init()),
                      this.transition.addEventListener("expandBegin", l.bind(this)),
                      this.transition.addEventListener("collapseEnd", u.bind(this)),
                      this.ui.content.classList.contains(r.CLASSES.EXPANDED)
                          ? this.ui.target.classList.add(this.classes.targetExpanded)
                          : (this.ui.target.classList.add(this.classes.targetCollapsed), this.ui.content.classList.add("u-hidden"));
                  const e = i(this.ui.target, "." + this.classes.group);
                  (this.isAccordionGroup = null !== e && e.classList.contains(this.classes.groupAccordion)), this.isAccordionGroup && o.on("accordionActivated", c.bind(this));
              },
              expandableClickHandler: function () {
                  this.transition.toggleExpandable(),
                      this.toggleTargetState(this.ui.target),
                      this.isAccordionGroup && (this.activeAccordion ? (this.activeAccordion = !1) : (o.trigger("accordionActivated", { target: this }), (this.activeAccordion = !0)));
              },
              toggleTargetState: function (t) {
                  t.classList.contains(this.classes.targetExpanded)
                      ? (this.ui.target.classList.add(this.classes.targetCollapsed), this.ui.target.classList.remove(this.classes.targetExpanded))
                      : (this.ui.target.classList.add(this.classes.targetExpanded), this.ui.target.classList.remove(this.classes.targetCollapsed));
              },
              getLabelText: function () {
                  return this.ui.label.textContent.trim();
              },
          });
      function c() {
          this.activeAccordion && (this.transition.toggleExpandable(), this.toggleTargetState(this.ui.target), (this.activeAccordion = !1));
      }
      function l() {
          this.ui.content.classList.remove("u-hidden");
      }
      function u() {
          this.ui.content.classList.add("u-hidden");
      }
      t.exports = a;
  },
  function (t, e, n) {
      const i = n(11),
          o = n(18),
          s = n(40),
          r = n(41),
          a = o.extend({ ui: { base: ".o-table" }, modifiers: [s, r] });
      (a.constants.DIRECTIONS = i.DIRECTIONS), (t.exports = a);
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (t, e, n) {
      "use strict";
      n.r(e);
      var i = n(6),
          o = n(21),
          s = n.n(o),
          r = n(22),
          a = n.n(r);
      s.a.init(), a.a.init();
      var c = document.querySelector("main.content"),
          l = document.querySelectorAll('[data-module="tabs"]');
      if (l) {
          c.classList.add("js-enabled");
          for (var u = 0; u < l.length; u++) {
              var d = l[u];
              new i.Tabs(d).init();
          }
      }
      var h = document.getElementById("toggle-code-btn"),
          p = document.querySelectorAll("[data-toggle-code]");
      null !== h &&
          h.addEventListener("click", function (t) {
              t.preventDefault(),
                  h.getAttribute("data-code-hidden")
                      ? (p.forEach(function (t) {
                            return t.classList.remove("u-hidden");
                        }),
                        h.removeAttribute("data-code-hidden"))
                      : (!(function (t) {
                            t.forEach(function (t) {
                                return t.classList.add("u-hidden");
                            });
                        })(p),
                        h.setAttribute("data-code-hidden", "true"));
          }),
          (function (t) {
              for (var e = 0; e < t.length; e++) {
                  var n = t[e],
                      i = n.getAttribute("id");
                  if (i) {
                      var o = document.createElement("a");
                      o.setAttribute("href", "#" + i),
                          o.setAttribute("data-anchor-link", ""),
                          (o.innerHTML =
                              ' <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 929.5 1200" class="cf-icon-svg"><path d="M894.4 702.8L731.3 539.7c-46.9-46.8-122.8-46.8-169.7 0l-34.9 34.9-53.2-53.2 34.4-34.4c46.8-46.9 46.8-122.8 0-169.7L344.8 154.2c-46.9-46.8-122.8-46.8-169.7 0l-140 140c-46.8 46.9-46.8 122.8 0 169.7L198.2 627c46.9 46.8 122.8 46.8 169.7 0l34.9-34.9 53.2 53.2-34.4 34.4c-46.8 46.9-46.8 122.8 0 169.7l163.1 163.1c46.9 46.8 122.8 46.8 169.7 0l140-140c46.8-46.9 46.8-122.8 0-169.7zM297.2 556.2c-7.9 7.7-20.4 7.7-28.3 0l-163.1-163c-7.7-7.9-7.7-20.4 0-28.3l140-140c7.9-7.7 20.4-7.7 28.3 0l163 163.1c7.7 7.9 7.7 20.4 0 28.3l-34.4 34.4-55.5-55.5c-19.6-19.4-51.3-19.3-70.7.3-19.3 19.5-19.3 50.9 0 70.4l55.6 55.6-34.9 34.7zm526.5 245.6l-140 140c-7.9 7.7-20.4 7.7-28.3 0L492.3 778.7c-7.7-7.9-7.7-20.4 0-28.3l34.4-34.4 55.5 55.5c19.4 19.6 51.1 19.7 70.7.3s19.7-51.1.3-70.7l-.3-.3-55.5-55.5 34.9-34.9c7.9-7.7 20.4-7.7 28.3 0l163.1 163.1c7.7 7.9 7.7 20.4 0 28.3z"/></svg> <small class="u-visually-hidden">Copy link to #' +
                              i +
                              " section of this page</small>"),
                          o.setAttribute("title", "Copy link to #" + i + " section of this page"),
                          n.appendChild(o);
                  }
              }
              document.querySelectorAll("[data-anchor-link]").forEach(function (t) {
                  return t.addEventListener("click", function (t) {
                      t.currentTarget.href;
                      !(function (t) {
                          var e = document.createRange(),
                              n = t.innerHTML,
                              i = t.href;
                          (t.innerHTML = i), e.selectNodeContents(t), window.getSelection().addRange(e);
                          try {
                              var o = document.execCommand("copy") ? "successful" : "unsuccessful";
                              console.log("Copy email command was " + o);
                          } catch (t) {
                              console.log("Oops, unable to copy");
                          }
                          window.getSelection().removeAllRanges(), (t.innerHTML = n);
                      })(t.currentTarget);
                  });
              });
          })(document.querySelectorAll(".content_main h3"));
  },
  function (t, e, n) {
      const i = n(34).assign,
          o = n(35).Delegate,
          s = n(8),
          r = n(37).isFunction;
      function a(t, e) {
          (this.element = t),
              (this.initializers = []),
              (this.uId = this.uniqueId("ac")),
              i(this, e),
              this.processModifiers(),
              this.ensureElement(),
              this.setCachedElements(),
              this.initializers.push(this.initialize),
              this.initializers.forEach(function (t) {
                  r(t) && t.apply(this, arguments);
              }, this),
              this.trigger("component:initialized");
      }
      i(a.prototype, s, {
          tagName: "div",
          processModifiers: function () {
              this.modifiers &&
                  this.modifiers.forEach(function (t) {
                      const e = t.ui.base.substring(1);
                      this.element.classList.contains(e) && (t.initialize && (this.initializers.push(t.initialize), delete t.initialize), i(this, t));
                  }, this);
          },
          render: function () {
              return this;
          },
          ensureElement: function () {
              if (this.element) this.setElement(this.element);
              else {
                  const t = i({}, this.attributes);
                  (t.id = this.id || this.u_id), this.className && (t.class = this.className), this.setElement(document.createElement(this.tagName)), this.setElementAttributes(t);
              }
              this.element.setAttribute("data-bound", !0);
          },
          setElement: function (t) {
              return this.element && this.undelegateEvents(), (this.element = t), this.delegateEvents(), this;
          },
          setCachedElements: function () {
              const t = i({}, this.ui);
              let e, n;
              for (e in t) t.hasOwnProperty(e) && ((n = this.element.querySelectorAll(t[e])), 1 === n.length ? (t[e] = n[0]) : n.length > 1 ? (t[e] = n) : (t[e] = null));
              return (this.ui = t), t;
          },
          destroy: function () {
              return this.element && (this.element.parentNode.removeChild(this.element), this.element.view && delete this.element.view, delete this.element), this.undelegateEvents(), this.trigger("component:destroyed"), !0;
          },
          setElementAttributes: function (t) {
              let e;
              for (e in t) t.hasOwnProperty(e) && this.element.setAttribute(e, t[e]);
          },
          delegateEvents: function (t) {
              const e = /^(\S+)\s*(.*)$/;
              let n, i, s;
              if (!(t = t || (t = this.events))) return this;
              for (n in (this.undelegateEvents(), (this._delegate = new o(this.element)), t)) ({}.hasOwnProperty.call(t, n) && ((i = t[n]), r(this[i]) && (i = this[i]), i && ((s = n.match(e)), this.delegate(s[1], s[2], i.bind(this)))));
              return this.trigger("component:bound"), this;
          },
          delegate: function (t, e, n) {
              return this._delegate.on(t, e, n), this;
          },
          undelegateEvents: function () {
              return this._delegate && this._delegate.destroy(), this.element.removeAttribute("data-bound"), this;
          },
          uniqueId: function (t) {
              return t + "_" + Math.random().toString(36).substr(2, 9);
          },
      }),
          (a.extend = function (t) {
              function e() {
                  return (this._super = a.prototype), a.apply(this, arguments);
              }
              return (e.prototype = Object.create(a.prototype)), i(e.prototype, t), i(e, a), t.hasOwnProperty("ui") && t.ui.hasOwnProperty("base") && (e.selector = t.ui.base), (e.constants = {}), e;
          }),
          (a.init = function (t) {
              const e = (t || document).querySelectorAll(this.selector),
                  n = [];
              let i;
              for (let t = 0, o = e.length; t < o; t++) (i = e[t]), !1 === i.hasAttribute("data-bound") && n.push(new this(i));
              return n;
          }),
          (t.exports = a);
  },
  function (t, e) {
      function n(t) {
          return "[object Object]" === Object.prototype.toString.call(t);
      }
      t.exports = {
          assign: function t(e) {
              e = e || {};
              for (let i = 1, o = arguments.length; i < o; i++) {
                  const o = arguments[i] || {};
                  let s;
                  for (s in o)
                      if (Object.prototype.hasOwnProperty.call(o, s)) {
                          const i = o[s];
                          n(i) ? t(e[s] || (e[s] = {}), i) : (e[s] = i);
                      }
              }
              return e;
          },
      };
  },
  function (t, e, n) {
      "use strict";
      /**
       * @preserve Create and manage a DOM event delegator.
       *
       * @codingstandard ftlabs-jsv2
       * @copyright The Financial Times Limited [All Rights Reserved]
       * @license MIT License (see LICENSE.txt)
       */ var i = n(36);
      (t.exports = function (t) {
          return new i(t);
      }),
          (t.exports.Delegate = i);
  },
  function (t, e, n) {
      "use strict";
      function i(t) {
          (this.listenerMap = [{}, {}]), t && this.root(t), (this.handle = i.prototype.handle.bind(this)), (this._removedListeners = []);
      }
      (t.exports = i),
          (i.prototype.root = function (t) {
              var e,
                  n = this.listenerMap;
              if (this.rootElement) {
                  for (e in n[1]) n[1].hasOwnProperty(e) && this.rootElement.removeEventListener(e, this.handle, !0);
                  for (e in n[0]) n[0].hasOwnProperty(e) && this.rootElement.removeEventListener(e, this.handle, !1);
              }
              if (!t || !t.addEventListener) return this.rootElement && delete this.rootElement, this;
              for (e in ((this.rootElement = t), n[1])) n[1].hasOwnProperty(e) && this.rootElement.addEventListener(e, this.handle, !0);
              for (e in n[0]) n[0].hasOwnProperty(e) && this.rootElement.addEventListener(e, this.handle, !1);
              return this;
          }),
          (i.prototype.captureForType = function (t) {
              return -1 !== ["blur", "error", "focus", "load", "resize", "scroll"].indexOf(t);
          }),
          (i.prototype.on = function (t, e, n, i) {
              var c, l, u, d;
              if (!t) throw new TypeError("Invalid event type: " + t);
              if (("function" == typeof e && ((i = n), (n = e), (e = null)), void 0 === i && (i = this.captureForType(t)), "function" != typeof n)) throw new TypeError("Handler must be a type of Function");
              return (
                  (c = this.rootElement),
                  (l = this.listenerMap[i ? 1 : 0])[t] || (c && c.addEventListener(t, this.handle, i), (l[t] = [])),
                  e ? (/^[a-z]+$/i.test(e) ? ((d = e), (u = s)) : /^#[a-z0-9\-_]+$/i.test(e) ? ((d = e.slice(1)), (u = a)) : ((d = e), (u = o))) : ((d = null), (u = r.bind(this))),
                  l[t].push({ selector: e, handler: n, matcher: u, matcherParam: d }),
                  this
              );
          }),
          (i.prototype.off = function (t, e, n, i) {
              var o, s, r, a, c;
              if (("function" == typeof e && ((i = n), (n = e), (e = null)), void 0 === i)) return this.off(t, e, n, !0), this.off(t, e, n, !1), this;
              if (((r = this.listenerMap[i ? 1 : 0]), !t)) {
                  for (c in r) r.hasOwnProperty(c) && this.off(c, e, n);
                  return this;
              }
              if (!(a = r[t]) || !a.length) return this;
              for (o = a.length - 1; o >= 0; o--) (s = a[o]), (e && e !== s.selector) || (n && n !== s.handler) || (this._removedListeners.push(s), a.splice(o, 1));
              return a.length || (delete r[t], this.rootElement && this.rootElement.removeEventListener(t, this.handle, i)), this;
          }),
          (i.prototype.handle = function (t) {
              var e,
                  n,
                  i,
                  o,
                  s,
                  r = t.type,
                  a = [];
              if (!0 !== t.ftLabsDelegateIgnore) {
                  switch ((3 === (s = t.target).nodeType && (s = s.parentNode), s.correspondingUseElement && (s = s.correspondingUseElement), (i = this.rootElement), t.eventPhase || (t.target !== t.currentTarget ? 3 : 2))) {
                      case 1:
                          a = this.listenerMap[1][r];
                          break;
                      case 2:
                          this.listenerMap[0] && this.listenerMap[0][r] && (a = a.concat(this.listenerMap[0][r])), this.listenerMap[1] && this.listenerMap[1][r] && (a = a.concat(this.listenerMap[1][r]));
                          break;
                      case 3:
                          a = this.listenerMap[0][r];
                  }
                  var c,
                      l = [];
                  for (n = a.length; s && n; ) {
                      for (e = 0; e < n && (o = a[e]); e++)
                          s.tagName && ["button", "input", "select", "textarea"].indexOf(s.tagName.toLowerCase()) > -1 && s.hasAttribute("disabled") ? (l = []) : o.matcher.call(s, o.matcherParam, s) && l.push([t, s, o]);
                      if (s === i) break;
                      if (((n = a.length), (s = s.parentElement || s.parentNode) instanceof HTMLDocument)) break;
                  }
                  for (e = 0; e < l.length; e++)
                      if (!(this._removedListeners.indexOf(l[e][2]) > -1) && !1 === this.fire.apply(this, l[e])) {
                          (l[e][0].ftLabsDelegateIgnore = !0), l[e][0].preventDefault(), (c = !1);
                          break;
                      }
                  return c;
              }
          }),
          (i.prototype.fire = function (t, e, n) {
              return n.handler.call(e, t, e);
          });
      var o = (function (t) {
          if (t) {
              var e = t.prototype;
              return e.matches || e.matchesSelector || e.webkitMatchesSelector || e.mozMatchesSelector || e.msMatchesSelector || e.oMatchesSelector;
          }
      })(Element);
      function s(t, e) {
          return t.toLowerCase() === e.tagName.toLowerCase();
      }
      function r(t, e) {
          return this.rootElement === window ? e === document || e === document.documentElement || e === window : this.rootElement === e;
      }
      function a(t, e) {
          return t === e.id;
      }
      i.prototype.destroy = function () {
          this.off(), this.root();
      };
  },
  function (t, e) {
      const n = Object.prototype.toString;
      function i(t) {
          return void 0 === t;
      }
      function o(t) {
          return "[object String]" === n.call(t);
      }
      const s =
          Array.isArray ||
          function (t) {
              return "[object Array]" === n.call(t);
          };
      t.exports = {
          isUndefined: i,
          isDefined: function (t) {
              return void 0 !== t;
          },
          isObject: function (t) {
              return null !== t && "object" == typeof t;
          },
          isString: o,
          isNumber: function (t) {
              return "[object Number]" === n.call(t);
          },
          isDate: function (t) {
              return "[object Date]" === n.call(t);
          },
          isArray: s,
          isFunction: function (t) {
              return "[object Function]" === n.call(t);
          },
          isEmpty: function (t) {
              return i(t) || null === t || (o(t) && t.length <= 0) || /^\s*$/.test(t);
          },
      };
  },
  function (t, e, n) {
      const i = n(8),
          o = n(39),
          s = { BASE_CLASS: "o-expandable_content__transition", EXPANDED: "o-expandable_content__expanded", COLLAPSED: "o-expandable_content__collapsed", OPEN_DEFAULT: "o-expandable_content__onload-open" };
      function r(t) {
          const e = new o(t, s);
          let n;
          function r() {
              t.classList.contains(s.EXPANDED)
                  ? (this.dispatchEvent("expandEnd", { target: this }), t.scrollHeight > n && (t.style.maxHeight = t.scrollHeight + "px"))
                  : t.classList.contains(s.COLLAPSED) && this.dispatchEvent("collapseEnd", { target: this });
          }
          return (
              (this.addEventListener = i.on),
              (this.dispatchEvent = i.trigger),
              (this.removeEventListener = i.off),
              (this.animateOff = e.animateOff),
              (this.animateOn = e.animateOn),
              (this.halt = e.halt),
              (this.isAnimated = e.isAnimated),
              (this.setElement = e.setElement),
              (this.remove = e.remove),
              (this.init = function () {
                  return e.init(), e.addEventListener(o.END_EVENT, r.bind(this)), t.classList.contains(s.OPEN_DEFAULT) ? this.expand() : this.collapse(), this;
              }),
              (this.toggleExpandable = function () {
                  return t.classList.contains(s.COLLAPSED) ? this.expand() : this.collapse(), this;
              }),
              (this.collapse = function () {
                  return this.dispatchEvent("collapseBegin", { target: this }), (n = t.scrollHeight), (t.style.maxHeight = "0"), e.applyClass(s.COLLAPSED), this;
              }),
              (this.expand = function () {
                  return this.dispatchEvent("expandBegin", { target: this }), (!n || t.scrollHeight > n) && (n = t.scrollHeight), (t.style.maxHeight = n + "px"), e.applyClass(s.EXPANDED), this;
              }),
              this
          );
      }
      (r.CLASSES = s), (t.exports = r);
  },
  function (t, e, n) {
      const i = n(8);
      function o(t, e) {
          const n = e;
          let s,
              r,
              a,
              c,
              l,
              u = !1,
              d = !1;
          function h(t) {
              s && (y(), p()),
                  (s = t),
                  s.classList.add(n.BASE_CLASS),
                  (a = (function (t) {
                      if (!t) {
                          throw new Error("Element does not have TransitionEnd event. It may be null!");
                      }
                      let e;
                      const n = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" };
                      let i;
                      for (i in n)
                          if (n.hasOwnProperty(i) && void 0 !== t.style[i]) {
                              e = n[i];
                              break;
                          }
                      return e;
                  })(s));
          }
          function p() {
              return s ? (s.classList.remove(o.NO_ANIMATION_CLASS), this) : this;
          }
          function f() {
              u &&
                  ((s.style.webkitTransitionDuration = "0"),
                  (s.style.mozTransitionDuration = "0"),
                  (s.style.oTransitionDuration = "0"),
                  (s.style.transitionDuration = "0"),
                  s.removeEventListener(a, c),
                  c(),
                  (s.style.webkitTransitionDuration = ""),
                  (s.style.mozTransitionDuration = ""),
                  (s.style.oTransitionDuration = ""),
                  (s.style.transitionDuration = ""));
          }
          function m() {
              (u = !0), a ? (s.addEventListener(a, c), this.trigger(o.BEGIN_EVENT, { target: this })) : (this.trigger(o.BEGIN_EVENT, { target: this }), c());
          }
          function b() {
              s.removeEventListener(a, c);
          }
          function g() {
              b(), this.trigger(o.END_EVENT, { target: this }), (u = !1);
          }
          function v() {
              let t;
              for (t in n) n.hasOwnProperty(t) && n[t] !== n.BASE_CLASS && s.classList.contains(n[t]) && s.classList.remove(n[t]);
          }
          function y() {
              return !!s && (f(), s.classList.remove(n.BASE_CLASS), v(), !0);
          }
          return (
              (this.addEventListener = i.on),
              (this.trigger = i.trigger),
              (this.removeEventListener = i.off),
              (this.animateOff = function () {
                  return s ? (s.classList.add(o.NO_ANIMATION_CLASS), this) : this;
              }),
              (this.animateOn = p),
              (this.applyClass = function (t) {
                  return !!s && (d || (v(), (d = !0)), !s.classList.contains(t) && (b(), s.classList.remove(r), (r = t), l(), s.classList.add(r), !0));
              }),
              (this.halt = f),
              (this.init = function () {
                  return (c = g.bind(this)), (l = m.bind(this)), h(t), this;
              }),
              (this.isAnimated = function () {
                  return !!s && !s.classList.contains(o.NO_ANIMATION_CLASS);
              }),
              (this.remove = y),
              (this.setElement = h),
              this
          );
      }
      (o.BEGIN_EVENT = "transitionBegin"), (o.END_EVENT = "transitionEnd"), (o.NO_ANIMATION_CLASS = "u-no-animation"), (t.exports = o);
  },
  function (t, e, n) {
      const i = n(11),
          o = n(10).closest,
          s = i.DIRECTIONS,
          r = i.UNDEFINED,
          a = {
              ui: { base: ".o-table__sortable", tableBody: "tbody", sortButton: ".sorted-up, .sorted-down" },
              classes: { sortDown: "sorted-down", sortUp: "sorted-up" },
              events: { "click .sortable": "onSortableClick" },
              initialize: function () {
                  (this.sortClass = r),
                      (this.sortColumnIndex = r),
                      (this.sortDirection = r),
                      (this.tableData = []),
                      this.bindProperties(),
                      this.ui.sortButton && ((this.sortColumnIndex = this.getColumnIndex()), (this.sortDirection = s.UP), this.ui.sortButton.classList.contains(this.classes.sortDown) && (this.sortDirection = s.DOWN), this.updateTable());
              },
              bindProperties: function () {
                  let t;
                  Object.defineProperty(this, "sortDirection", {
                      configurable: !0,
                      get: function () {
                          return t;
                      },
                      set: function (e) {
                          e === s.UP ? (this.sortClass = this.classes.sortUp) : e === s.DOWN && (this.sortClass = this.classes.sortDown), (t = e);
                      },
                  });
              },
              getColumnIndex: function (t) {
                  return o(t || this.ui.sortButton, "td, th").cellIndex;
              },
              updateTable: function () {
                  return this.updateTableData() && this.updateTableDom();
              },
              updateTableData: function (t) {
                  let e;
                  const n = this.ui.tableBody.querySelectorAll("tr");
                  (this.tableData = []), (t = t || this.sortColumnIndex);
                  for (let i = 0, o = n.length; i < o; ++i) (e = n[i].cells[t]), e && (e = e.textContent.trim()), this.tableData.push([e, n[i]]);
                  const i = this.ui.sortButton.getAttribute("data-sort_type");
                  return this.tableData.sort(this.tableDataSorter(this.sortDirection, i)), this.tableData;
              },
              updateTableDom: function () {
                  const t = this.ui.tableBody;
                  for (; t.lastChild; ) t.removeChild(t.lastChild);
                  const e = document.createDocumentFragment();
                  for (let t = 0; t < this.tableData.length; t++) e.appendChild(this.tableData[t][1]);
                  return t.appendChild(e), this.trigger("table:updated"), t;
              },
              tableDataSorter: function (t, e) {
                  return function (n, i) {
                      const o = t === s.DOWN ? -1 : 1;
                      let r = 0;
                      const a = /[^\d.-]/g;
                      return (n = n[0]), (i = i[0]), "number" === e && ((n = Number(n.replace(a, ""))), (i = Number(i.replace(a, "")))), n < i ? (r = -1 * o) : n > i && (r = o), r;
                  };
              },
              onSortableClick: function (t) {
                  this.ui.sortButton && this.ui.sortButton.classList.remove(this.sortClass);
                  this.ui.sortButton === t.target ? (this.sortDirection = ~this.sortDirection) : ((this.ui.sortButton = t.target), (this.sortColumnIndex = this.getColumnIndex()), (this.sortDirection = s.UP));
                  return this.ui.sortButton.classList.add(this.sortClass), this.updateTable(), this;
              },
          };
      t.exports = a;
  },
  function (t, e, n) {
      const i = n(10).closest,
          o = {
              ui: { base: ".o-table__row-links" },
              events: { "click tbody tr": "onRowLinkClick" },
              onRowLinkClick: function (t) {
                  let e = t.target;
                  if (e && "A" === e.tagName) return;
                  e = i(t.target, "tr");
                  const n = e.querySelector("a");
                  n && (window.location = n.getAttribute("href"));
              },
          };
      t.exports = o;
  },
]);
//# sourceMappingURL=design-system.js.map
