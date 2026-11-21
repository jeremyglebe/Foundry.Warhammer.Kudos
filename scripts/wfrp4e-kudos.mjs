// src/module/constants.ts
var e = "wfrp4e-kudos", t = "Drowsy's WFRP4e Kudos";
// node_modules/@vue/shared/dist/shared.esm-bundler.js
// @__NO_SIDE_EFFECTS__
function n(e) {
	let t = /* @__PURE__ */ Object.create(null);
	for (let n of e.split(",")) t[n] = 1;
	return (e) => e in t;
}
var r = {}, i = [], a = () => {}, o = () => !1, s = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), c = (e) => e.startsWith("onUpdate:"), l = Object.assign, u = (e, t) => {
	let n = e.indexOf(t);
	n > -1 && e.splice(n, 1);
}, d = Object.prototype.hasOwnProperty, f = (e, t) => d.call(e, t), p = Array.isArray, m = (e) => C(e) === "[object Map]", h = (e) => C(e) === "[object Set]", g = (e) => C(e) === "[object Date]", _ = (e) => typeof e == "function", v = (e) => typeof e == "string", y = (e) => typeof e == "symbol", b = (e) => typeof e == "object" && !!e, x = (e) => (b(e) || _(e)) && _(e.then) && _(e.catch), S = Object.prototype.toString, C = (e) => S.call(e), w = (e) => C(e).slice(8, -1), ee = (e) => C(e) === "[object Object]", te = (e) => v(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, ne = /* @__PURE__ */ n(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), T = (e) => {
	let t = /* @__PURE__ */ Object.create(null);
	return ((n) => t[n] || (t[n] = e(n)));
}, re = /-\w/g, E = /* @__PURE__ */ T((e) => e.replace(re, (e) => e.slice(1).toUpperCase())), ie = /\B([A-Z])/g, D = /* @__PURE__ */ T((e) => e.replace(ie, "-$1").toLowerCase()), ae = /* @__PURE__ */ T((e) => e.charAt(0).toUpperCase() + e.slice(1)), oe = /* @__PURE__ */ T((e) => e ? `on${ae(e)}` : ""), O = (e, t) => !Object.is(e, t), se = (e, ...t) => {
	for (let n = 0; n < e.length; n++) e[n](...t);
}, ce = (e, t, n, r = !1) => {
	Object.defineProperty(e, t, {
		configurable: !0,
		enumerable: !1,
		writable: r,
		value: n
	});
}, le = (e) => {
	let t = parseFloat(e);
	return isNaN(t) ? e : t;
}, ue, de = () => ue ||= typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
function fe(e) {
	if (p(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) {
			let r = e[n], i = v(r) ? he(r) : fe(r);
			if (i) for (let e in i) t[e] = i[e];
		}
		return t;
	}
	if (v(e) || b(e)) return e;
}
var pe = /;(?![^(]*\))/g, me = /:([^]+)/, k = /"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;
function he(e) {
	let t = {};
	return e.replace(k, (e) => e.startsWith("/*") ? "" : e).split(pe).forEach((e) => {
		if (e) {
			let n = e.split(me);
			n.length > 1 && (t[n[0].trim()] = n[1].trim());
		}
	}), t;
}
function ge(e) {
	let t = "";
	if (v(e)) t = e;
	else if (p(e)) for (let n = 0; n < e.length; n++) {
		let r = ge(e[n]);
		r && (t += r + " ");
	}
	else if (b(e)) for (let n in e) e[n] && (t += n + " ");
	return t.trim();
}
var _e = /* @__PURE__ */ n("itemscope,allowfullscreen,disablepictureinpicture,disableremoteplayback,formnovalidate,ismap,nomodule,novalidate,playsinline,readonly");
function ve(e) {
	return !!e || e === "";
}
function ye(e, t, n) {
	if (e.length !== t.length) return !1;
	let r = !0;
	for (let i = 0; r && i < e.length; i++) r = Ce(e[i], t[i], n);
	return r;
}
function be(e, t, n) {
	if (e.size !== t.size) return !1;
	let r = Array.from(t), i = new Uint8Array(r.length);
	for (let t of e) {
		let e = -1;
		for (let a = 0; a < r.length; a++) if (!i[a] && Ce(t, r[a], n)) {
			e = a;
			break;
		}
		if (e < 0) return !1;
		i[e] = 1;
	}
	return !0;
}
function xe(e, t, n) {
	let r = m(e), i = m(t);
	if (r || i || (r = h(e), i = h(t), r || i)) return r && i ? be(e, t, n) : !1;
	if (Object.keys(e).length !== Object.keys(t).length) return !1;
	for (let r in e) {
		let i = e.hasOwnProperty(r), a = t.hasOwnProperty(r);
		if (i && !a || !i && a || !Ce(e[r], t[r], n)) return !1;
	}
	return String(e) === String(t);
}
function Se(e, t, n, r) {
	n ||= [/* @__PURE__ */ new Map(), /* @__PURE__ */ new Map()];
	let [i, a] = n;
	if (i.has(e) || a.has(t)) return i.get(e) === t && a.get(t) === e;
	i.set(e, t), a.set(t, e);
	let o = r(e, t, n);
	return i.delete(e), a.delete(t), o;
}
function Ce(e, t, n) {
	if (e === t) return !0;
	let r = g(e), i = g(t);
	return r || i ? r && i ? e.getTime() === t.getTime() : !1 : (r = y(e), i = y(t), r || i ? e === t : (r = p(e), i = p(t), r || i ? r && i ? Se(e, t, n, ye) : !1 : (r = b(e), i = b(t), r || i ? !r || !i ? !1 : Se(e, t, n, xe) : String(e) === String(t))));
}
// node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var A, we = class {
	constructor(e = !1) {
		this.detached = e, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !e && A && (A.active ? (this.parent = A, this.index = (A.scopes || (A.scopes = [])).push(this) - 1) : (this._active = !1, this._warnOnRun = !1));
	}
	get active() {
		return this._active;
	}
	pause() {
		if (this._active) {
			this._isPaused = !0;
			let e, t;
			if (this.scopes) {
				let n = this.scopes.slice();
				for (e = 0, t = n.length; e < t; e++) n[e].pause();
			}
			for (e = 0, t = this.effects.length; e < t; e++) this.effects[e].pause();
		}
	}
	resume() {
		if (this._active && this._isPaused) {
			this._isPaused = !1;
			let e, t;
			if (this.scopes) {
				let n = this.scopes.slice();
				for (e = 0, t = n.length; e < t; e++) n[e].resume();
			}
			let n = this.effects.slice();
			for (e = 0, t = n.length; e < t; e++) n[e].resume();
		}
	}
	run(e) {
		if (this._active) {
			let t = A;
			try {
				return A = this, e();
			} finally {
				A = t;
			}
		}
	}
	on() {
		++this._on === 1 && (this.prevScope = A, A = this);
	}
	off() {
		if (this._on > 0 && --this._on === 0) {
			if (A === this) A = this.prevScope;
			else {
				let e = A;
				for (; e;) {
					if (e.prevScope === this) {
						e.prevScope = this.prevScope;
						break;
					}
					e = e.prevScope;
				}
			}
			this.prevScope = void 0;
		}
	}
	stop(e) {
		if (this._active) {
			this._active = !1;
			let t, n;
			for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].stop();
			for (this.effects.length = 0, t = 0, n = this.cleanups.length; t < n; t++) this.cleanups[t]();
			if (this.cleanups.length = 0, this.scopes) {
				let e = this.scopes.slice();
				for (t = 0, n = e.length; t < n; t++) e[t].stop(!0);
				this.scopes.length = 0;
			}
			if (!this.detached && this.parent && !e) {
				let e = this.parent.scopes.pop();
				e && e !== this && (this.parent.scopes[this.index] = e, e.index = this.index);
			}
			this.parent = void 0;
		}
	}
};
function Te(e) {
	return new we(e);
}
function Ee() {
	return A;
}
var j, De = /* @__PURE__ */ new WeakSet(), Oe = class {
	constructor(e) {
		this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, A && (A.active ? A.effects.push(this) : this.flags &= -2);
	}
	pause() {
		this.flags |= 64;
	}
	resume() {
		this.flags & 64 && (this.flags &= -65, De.has(this) && (De.delete(this), this.trigger()));
	}
	notify() {
		this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Me(this);
	}
	run() {
		if (!(this.flags & 1)) return this.fn();
		this.flags |= 2, He(this), Fe(this);
		let e = j, t = M;
		j = this, M = !0;
		try {
			return this.fn();
		} finally {
			Ie(this), j = e, M = t, this.flags &= -3;
		}
	}
	stop() {
		if (this.flags & 1) {
			for (let e = this.deps; e; e = e.nextDep) ze(e);
			this.deps = this.depsTail = void 0, He(this), this.onStop && this.onStop(), this.flags &= -2;
		}
	}
	trigger() {
		this.flags & 64 ? De.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
	}
	runIfDirty() {
		Le(this) && this.run();
	}
	get dirty() {
		return Le(this);
	}
}, ke = 0, Ae, je;
function Me(e, t = !1) {
	e.flags |= 8, t ? (e.next = je, je = e) : (e.next = Ae, Ae = e);
}
function Ne() {
	ke++;
}
function Pe() {
	if (--ke > 0) return;
	if (je) {
		let e = je;
		for (je = void 0; e;) {
			let t = e.next;
			e.next = void 0, e.flags &= -9, e = t;
		}
	}
	let e;
	for (; Ae;) {
		let t = Ae;
		for (Ae = void 0; t;) {
			let n = t.next;
			if (t.next = void 0, t.flags &= -9, t.flags & 1) try {
				t.trigger();
			} catch (t) {
				e ||= t;
			}
			t = n;
		}
	}
	if (e) throw e;
}
function Fe(e) {
	for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Ie(e) {
	let t, n = e.depsTail, r = n;
	for (; r;) {
		let e = r.prevDep;
		r.version === -1 ? (r === n && (n = e), ze(r), Be(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = e;
	}
	e.deps = t, e.depsTail = n;
}
function Le(e) {
	for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (Re(t.dep.computed) || t.dep.version !== t.version)) return !0;
	return !!e._dirty;
}
function Re(e) {
	if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Ue) || (e.globalVersion = Ue, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Le(e)))) return;
	e.flags |= 2;
	let t = e.dep, n = j, r = M;
	j = e, M = !0;
	try {
		Fe(e);
		let n = e.fn(e._value);
		(t.version === 0 || O(n, e._value)) && (e.flags |= 128, e._value = n, t.version++);
	} catch (e) {
		throw t.version++, e;
	} finally {
		j = n, M = r, Ie(e), e.flags &= -3;
	}
}
function ze(e, t = !1) {
	let { dep: n, prevSub: r, nextSub: i } = e;
	if (r && (r.nextSub = i, e.prevSub = void 0), i && (i.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
		n.computed.flags &= -5;
		for (let e = n.computed.deps; e; e = e.nextDep) ze(e, !0);
	}
	!t && !--n.sc && n.map && n.map.delete(n.key);
}
function Be(e) {
	let { prevDep: t, nextDep: n } = e;
	t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
var M = !0, Ve = [];
function N() {
	Ve.push(M), M = !1;
}
function P() {
	let e = Ve.pop();
	M = e === void 0 || e;
}
function He(e) {
	let { cleanup: t } = e;
	if (e.cleanup = void 0, t) {
		let e = j;
		j = void 0;
		try {
			t();
		} finally {
			j = e;
		}
	}
}
var Ue = 0, We = class {
	constructor(e, t) {
		this.sub = e, this.dep = t, this.version = t.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
	}
}, Ge = class {
	constructor(e) {
		this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
	}
	track(e) {
		if (!j || !M || j === this.computed) return;
		let t = this.activeLink;
		if (t === void 0 || t.sub !== j) t = this.activeLink = new We(j, this), j.deps ? (t.prevDep = j.depsTail, j.depsTail.nextDep = t, j.depsTail = t) : j.deps = j.depsTail = t, Ke(t);
		else if (t.version === -1 && (t.version = this.version, t.nextDep)) {
			let e = t.nextDep;
			e.prevDep = t.prevDep, t.prevDep && (t.prevDep.nextDep = e), t.prevDep = j.depsTail, t.nextDep = void 0, j.depsTail.nextDep = t, j.depsTail = t, j.deps === t && (j.deps = e);
		}
		return t;
	}
	trigger(e) {
		this.version++, Ue++, this.notify(e);
	}
	notify(e) {
		Ne();
		try {
			for (let e = this.subs; e; e = e.prevSub) e.sub.notify() && e.sub.dep.notify();
		} finally {
			Pe();
		}
	}
};
function Ke(e) {
	if (e.dep.sc++, e.sub.flags & 4) {
		let t = e.dep.computed;
		if (t && !e.dep.subs) {
			t.flags |= 20;
			for (let e = t.deps; e; e = e.nextDep) Ke(e);
		}
		let n = e.dep.subs;
		n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
	}
}
var qe = /* @__PURE__ */ new WeakMap(), Je = /* @__PURE__ */ Symbol(""), Ye = /* @__PURE__ */ Symbol(""), Xe = /* @__PURE__ */ Symbol("");
function F(e, t, n) {
	if (M && j) {
		let t = qe.get(e);
		t || qe.set(e, t = /* @__PURE__ */ new Map());
		let r = t.get(n);
		r || (t.set(n, r = new Ge()), r.map = t, r.key = n), r.track();
	}
}
function Ze(e, t, n, r, i, a) {
	let o = qe.get(e);
	if (!o) {
		Ue++;
		return;
	}
	let s = (e) => {
		e && e.trigger();
	};
	if (Ne(), t === "clear") o.forEach(s);
	else {
		let i = p(e), a = i && te(n);
		if (i && n === "length") {
			let e = Number(r);
			o.forEach((t, n) => {
				(n === "length" || n === Xe || !y(n) && n >= e) && s(t);
			});
		} else switch ((n !== void 0 || o.has(void 0)) && s(o.get(n)), a && s(o.get(Xe)), t) {
			case "add":
				i ? a && s(o.get("length")) : (s(o.get(Je)), m(e) && s(o.get(Ye)));
				break;
			case "delete":
				i || (s(o.get(Je)), m(e) && s(o.get(Ye)));
				break;
			case "set": m(e) && s(o.get(Je));
		}
	}
	Pe();
}
function Qe(e) {
	let t = /* @__PURE__ */ L(e);
	return t === e || (F(t, "iterate", Xe), /* @__PURE__ */ I(e)) ? t : /* @__PURE__ */ Lt(e) ? /* @__PURE__ */ It(e) ? t.map((e) => Bt(R(e))) : t.map(Bt) : t.map(R);
}
function $e(e) {
	return F(e = /* @__PURE__ */ L(e), "iterate", Xe), e;
}
function et(e, t) {
	return /* @__PURE__ */ Lt(e) ? Bt(/* @__PURE__ */ It(e) ? R(t) : t) : R(t);
}
var tt = {
	__proto__: null,
	[Symbol.iterator]() {
		return nt(this, Symbol.iterator, (e) => et(this, e));
	},
	concat(...e) {
		return Qe(this).concat(...e.map((e) => p(e) ? Qe(e) : e));
	},
	entries() {
		return nt(this, "entries", (e) => (e[1] = et(this, e[1]), e));
	},
	every(e, t) {
		return at(this, "every", e, t, void 0, arguments);
	},
	filter(e, t) {
		return at(this, "filter", e, t, (e) => e.map((e) => et(this, e)), arguments);
	},
	find(e, t) {
		return at(this, "find", e, t, (e) => et(this, e), arguments);
	},
	findIndex(e, t) {
		return at(this, "findIndex", e, t, void 0, arguments);
	},
	findLast(e, t) {
		return at(this, "findLast", e, t, (e) => et(this, e), arguments);
	},
	findLastIndex(e, t) {
		return at(this, "findLastIndex", e, t, void 0, arguments);
	},
	forEach(e, t) {
		return at(this, "forEach", e, t, void 0, arguments);
	},
	includes(...e) {
		return st(this, "includes", e);
	},
	indexOf(...e) {
		return st(this, "indexOf", e);
	},
	join(e) {
		return Qe(this).join(e);
	},
	lastIndexOf(...e) {
		return st(this, "lastIndexOf", e);
	},
	map(e, t) {
		return at(this, "map", e, t, void 0, arguments);
	},
	pop() {
		return ct(this, "pop");
	},
	push(...e) {
		return ct(this, "push", e);
	},
	reduce(e, ...t) {
		return ot(this, "reduce", e, t);
	},
	reduceRight(e, ...t) {
		return ot(this, "reduceRight", e, t);
	},
	shift() {
		return ct(this, "shift");
	},
	some(e, t) {
		return at(this, "some", e, t, void 0, arguments);
	},
	splice(...e) {
		return ct(this, "splice", e);
	},
	toReversed() {
		return Qe(this).toReversed();
	},
	toSorted(e) {
		return Qe(this).toSorted(e);
	},
	toSpliced(...e) {
		return Qe(this).toSpliced(...e);
	},
	unshift(...e) {
		return ct(this, "unshift", e);
	},
	values() {
		return nt(this, "values", (e) => et(this, e));
	}
};
function nt(e, t, n) {
	let r = $e(e), i = r[t], a = i.call(r);
	if (r !== e && !/* @__PURE__ */ I(e)) {
		if (a[Symbol.toStringTag] === "Array Iterator") {
			let e = Object.create(Object.getPrototypeOf(a));
			return e.next = () => rt(a.next(), n), i !== it[t] && Object.defineProperties(e, {
				return: { get() {
					let e = a.return;
					return typeof e == "function" ? e.bind(a) : e;
				} },
				throw: { get() {
					let e = a.throw;
					return typeof e == "function" ? e.bind(a) : e;
				} }
			}), e;
		}
		a._next = a.next, a.next = () => rt(a._next(), n);
	}
	return a;
}
function rt(e, t) {
	return e.done || (e.value = t(e.value)), e;
}
var it = Array.prototype;
function at(e, t, n, r, i, a) {
	let o = $e(e), s = o !== e && !/* @__PURE__ */ I(e), c = o[t];
	if (c !== it[t]) {
		let t = c.apply(e, a);
		return s ? R(t) : t;
	}
	let l = n;
	o !== e && (s ? l = function(t, r) {
		return n.call(this, et(e, t), r, e);
	} : n.length > 2 && (l = function(t, r) {
		return n.call(this, t, r, e);
	}));
	let u = c.call(o, l, r);
	return s && i ? i(u) : u;
}
function ot(e, t, n, r) {
	let i = $e(e), a = i !== e && !/* @__PURE__ */ I(e), o = n, s = !1;
	i !== e && (a ? (s = r.length === 0, o = function(t, r, i) {
		return s && (s = !1, t = et(e, t)), n.call(this, t, et(e, r), i, e);
	}) : n.length > 3 && (o = function(t, r, i) {
		return n.call(this, t, r, i, e);
	}));
	let c = i[t](o, ...r);
	return s ? et(e, c) : c;
}
function st(e, t, n) {
	let r = /* @__PURE__ */ L(e);
	F(r, "iterate", Xe);
	let i = r[t](...n);
	return (i === -1 || i === !1) && /* @__PURE__ */ Rt(n[0]) ? (n[0] = /* @__PURE__ */ L(n[0]), r[t](...n)) : i;
}
function ct(e, t, n = []) {
	N(), Ne();
	let r = (/* @__PURE__ */ L(e))[t].apply(e, n);
	return Pe(), P(), r;
}
var lt = /* @__PURE__ */ n("__proto__,__v_isRef,__isVue"), ut = /* @__PURE__ */ new Set(/* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(y));
function dt(e) {
	y(e) || (e = String(e));
	let t = /* @__PURE__ */ L(this);
	return F(t, "has", e), t.hasOwnProperty(e);
}
var ft = class {
	constructor(e = !1, t = !1) {
		this._isReadonly = e, this._isShallow = t;
	}
	get(e, t, n) {
		if (t === "__v_skip") return e.__v_skip;
		let r = this._isReadonly, i = this._isShallow;
		if (t === "__v_isReactive") return !r;
		if (t === "__v_isReadonly") return r;
		if (t === "__v_isShallow") return i;
		if (t === "__v_raw") return n === (r ? i ? At : kt : i ? Ot : Dt).get(e) || Object.getPrototypeOf(e) === Object.getPrototypeOf(n) ? e : void 0;
		let a = p(e);
		if (!r) {
			let e;
			if (a && (e = tt[t])) return e;
			if (t === "hasOwnProperty") return dt;
		}
		let o = Reflect.get(e, t, /* @__PURE__ */ z(e) ? e : n);
		if ((y(t) ? ut.has(t) : lt(t)) || (r || F(e, "get", t), i)) return o;
		if (/* @__PURE__ */ z(o)) {
			let e = a && te(t) ? o : o.value;
			return r && b(e) ? /* @__PURE__ */ Pt(e) : e;
		}
		return b(o) ? r ? /* @__PURE__ */ Pt(o) : /* @__PURE__ */ Mt(o) : o;
	}
}, pt = class extends ft {
	constructor(e = !1) {
		super(!1, e);
	}
	set(e, t, n, r) {
		let i = e[t], a = p(e) && te(t);
		if (!this._isShallow) {
			let e = /* @__PURE__ */ Lt(i);
			if (!/* @__PURE__ */ I(n) && !/* @__PURE__ */ Lt(n) && (i = /* @__PURE__ */ L(i), n = /* @__PURE__ */ L(n)), !a && /* @__PURE__ */ z(i) && !/* @__PURE__ */ z(n)) return e || (i.value = n), !0;
		}
		let o = a ? Number(t) < e.length : f(e, t), s = Reflect.set(e, t, n, /* @__PURE__ */ z(e) ? e : r);
		return e === /* @__PURE__ */ L(r) && s && (o ? O(n, i) && Ze(e, "set", t, n, i) : Ze(e, "add", t, n)), s;
	}
	deleteProperty(e, t) {
		let n = f(e, t), r = e[t], i = Reflect.deleteProperty(e, t);
		return i && n && Ze(e, "delete", t, void 0, r), i;
	}
	has(e, t) {
		let n = Reflect.has(e, t);
		return y(t) && ut.has(t) || F(e, "has", t), n;
	}
	ownKeys(e) {
		return F(e, "iterate", p(e) ? "length" : Je), Reflect.ownKeys(e);
	}
}, mt = class extends ft {
	constructor(e = !1) {
		super(!0, e);
	}
	set(e, t) {
		return !0;
	}
	deleteProperty(e, t) {
		return !0;
	}
}, ht = /* @__PURE__ */ new pt(), gt = /* @__PURE__ */ new mt(), _t = /* @__PURE__ */ new pt(!0), vt = (e) => e, yt = (e) => Reflect.getPrototypeOf(e);
function bt(e, t, n) {
	return function(...r) {
		let i = this.__v_raw, a = /* @__PURE__ */ L(i), o = m(a), s = e === "entries" || e === Symbol.iterator && o, c = e === "keys" && o, u = i[e](...r), d = n ? vt : t ? Bt : R;
		return !t && F(a, "iterate", c ? Ye : Je), l(Object.create(u), { next() {
			let { value: e, done: t } = u.next();
			return t ? {
				value: e,
				done: t
			} : {
				value: s ? [d(e[0]), d(e[1])] : d(e),
				done: t
			};
		} });
	};
}
function xt(e) {
	return function(...t) {
		return e === "delete" ? !1 : e === "clear" ? void 0 : this;
	};
}
function St(e, t) {
	let n = {
		get(n) {
			let r = this.__v_raw, i = /* @__PURE__ */ L(r), a = /* @__PURE__ */ L(n);
			e || (O(n, a) && F(i, "get", n), F(i, "get", a));
			let { has: o } = yt(i), s = t ? vt : e ? Bt : R;
			if (o.call(i, n)) return s(r.get(n));
			if (o.call(i, a)) return s(r.get(a));
			r !== i && r.get(n);
		},
		get size() {
			let t = this.__v_raw;
			return !e && F(/* @__PURE__ */ L(t), "iterate", Je), t.size;
		},
		has(t) {
			let n = this.__v_raw, r = /* @__PURE__ */ L(n), i = /* @__PURE__ */ L(t);
			return e || (O(t, i) && F(r, "has", t), F(r, "has", i)), t === i ? n.has(t) : n.has(t) || n.has(i);
		},
		forEach(n, r) {
			let i = this, a = i.__v_raw, o = /* @__PURE__ */ L(a), s = t ? vt : e ? Bt : R;
			return !e && F(o, "iterate", Je), a.forEach((e, t) => n.call(r, s(e), s(t), i));
		}
	};
	return l(n, e ? {
		add: xt("add"),
		set: xt("set"),
		delete: xt("delete"),
		clear: xt("clear")
	} : {
		add(e) {
			let n = /* @__PURE__ */ L(this), r = yt(n), i = /* @__PURE__ */ L(e), a = !t && !/* @__PURE__ */ I(e) && !/* @__PURE__ */ Lt(e) ? i : e;
			return r.has.call(n, a) || O(e, a) && r.has.call(n, e) || O(i, a) && r.has.call(n, i) || (n.add(a), Ze(n, "add", a, a)), this;
		},
		set(e, n) {
			t || /* @__PURE__ */ I(n) || /* @__PURE__ */ Lt(n) || (n = /* @__PURE__ */ L(n));
			let r = /* @__PURE__ */ L(this), { has: i, get: a } = yt(r), o = i.call(r, e);
			o ||= (e = /* @__PURE__ */ L(e), i.call(r, e));
			let s = a.call(r, e);
			return r.set(e, n), o ? O(n, s) && Ze(r, "set", e, n, s) : Ze(r, "add", e, n), this;
		},
		delete(e) {
			let t = /* @__PURE__ */ L(this), { has: n, get: r } = yt(t), i = n.call(t, e);
			i ||= (e = /* @__PURE__ */ L(e), n.call(t, e));
			let a = r ? r.call(t, e) : void 0, o = t.delete(e);
			return i && Ze(t, "delete", e, void 0, a), o;
		},
		clear() {
			let e = /* @__PURE__ */ L(this), t = e.size !== 0, n = e.clear();
			return t && Ze(e, "clear", void 0, void 0, void 0), n;
		}
	}), [
		"keys",
		"values",
		"entries",
		Symbol.iterator
	].forEach((r) => {
		n[r] = bt(r, e, t);
	}), n;
}
function Ct(e, t) {
	let n = St(e, t);
	return (r, i, a) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_isShallow" ? t : i === "__v_raw" ? r : Reflect.get(f(n, i) && i in r ? n : r, i, a);
}
var wt = { get: /* @__PURE__ */ Ct(!1, !1) }, Tt = { get: /* @__PURE__ */ Ct(!1, !0) }, Et = { get: /* @__PURE__ */ Ct(!0, !1) }, Dt = /* @__PURE__ */ new WeakMap(), Ot = /* @__PURE__ */ new WeakMap(), kt = /* @__PURE__ */ new WeakMap(), At = /* @__PURE__ */ new WeakMap();
function jt(e) {
	switch (e) {
		case "Object":
		case "Array": return 1;
		case "Map":
		case "Set":
		case "WeakMap":
		case "WeakSet": return 2;
		default: return 0;
	}
}
// @__NO_SIDE_EFFECTS__
function Mt(e) {
	return /* @__PURE__ */ Lt(e) ? e : Ft(e, !1, ht, wt, Dt);
}
// @__NO_SIDE_EFFECTS__
function Nt(e) {
	return Ft(e, !1, _t, Tt, Ot);
}
// @__NO_SIDE_EFFECTS__
function Pt(e) {
	return Ft(e, !0, gt, Et, kt);
}
function Ft(e, t, n, r, i) {
	if (!b(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e)) return e;
	let a = i.get(e);
	if (a) return a;
	let o = jt(w(e));
	if (o === 0) return e;
	let s = new Proxy(e, o === 2 ? r : n);
	return i.set(e, s), s;
}
// @__NO_SIDE_EFFECTS__
function It(e) {
	return /* @__PURE__ */ Lt(e) ? /* @__PURE__ */ It(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Lt(e) {
	return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function I(e) {
	return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Rt(e) {
	return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function L(e) {
	let t = e && e.__v_raw;
	return t ? /* @__PURE__ */ L(t) : e;
}
function zt(e) {
	return !f(e, "__v_skip") && Object.isExtensible(e) && ce(e, "__v_skip", !0), e;
}
var R = (e) => b(e) ? /* @__PURE__ */ Mt(e) : e, Bt = (e) => b(e) ? /* @__PURE__ */ Pt(e) : e;
// @__NO_SIDE_EFFECTS__
function z(e) {
	return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Vt(e) {
	return Ht(e, !1);
}
function Ht(e, t) {
	return /* @__PURE__ */ z(e) ? e : new Ut(e, t);
}
var Ut = class {
	constructor(e, t) {
		this.dep = new Ge(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = t ? e : /* @__PURE__ */ L(e), this._value = t ? e : R(e), this.__v_isShallow = t;
	}
	get value() {
		return this.dep.track(), this._value;
	}
	set value(e) {
		let t = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ I(e) || /* @__PURE__ */ Lt(e);
		e = n ? e : /* @__PURE__ */ L(e), O(e, t) && (this._rawValue = e, this._value = n ? e : R(e), this.dep.trigger());
	}
};
function Wt(e) {
	return /* @__PURE__ */ z(e) ? e.value : e;
}
var Gt = {
	get: (e, t, n) => t === "__v_raw" ? e : Wt(Reflect.get(e, t, n)),
	set: (e, t, n, r) => {
		let i = e[t];
		return /* @__PURE__ */ z(i) && !/* @__PURE__ */ z(n) ? (i.value = n, !0) : Reflect.set(e, t, n, r);
	}
};
function Kt(e) {
	return /* @__PURE__ */ It(e) ? e : new Proxy(e, Gt);
}
var qt = class {
	constructor(e, t, n) {
		this.fn = e, this.setter = t, this._value = void 0, this.dep = new Ge(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Ue - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !t, this.isSSR = n;
	}
	notify() {
		if (this.flags |= 16, !(this.flags & 8) && j !== this) return Me(this, !0), !0;
	}
	get value() {
		let e = this.dep.track();
		return Re(this), e && (e.version = this.dep.version), this._value;
	}
	set value(e) {
		this.setter && this.setter(e);
	}
};
// @__NO_SIDE_EFFECTS__
function Jt(e, t, n = !1) {
	let r, i;
	return _(e) ? r = e : (r = e.get, i = e.set), new qt(r, i, n);
}
var Yt = {}, Xt = /* @__PURE__ */ new WeakMap(), Zt = void 0;
function Qt(e, t = !1, n = Zt) {
	if (n) {
		let t = Xt.get(n);
		t || Xt.set(n, t = []), t.push(e);
	}
}
function $t(e, t, n = r) {
	let { immediate: i, deep: o, once: s, scheduler: c, augmentJob: l, call: d } = n, f = (e) => o ? e : /* @__PURE__ */ I(e) || o === !1 || o === 0 ? en(e, 1) : en(e), m, h, g, v, y = !1, b = !1;
	if (/* @__PURE__ */ z(e) ? (h = () => e.value, y = /* @__PURE__ */ I(e)) : /* @__PURE__ */ It(e) ? (h = () => f(e), y = !0) : p(e) ? (b = !0, y = e.some((e) => /* @__PURE__ */ It(e) || /* @__PURE__ */ I(e)), h = () => e.map((e) => {
		if (/* @__PURE__ */ z(e)) return e.value;
		if (/* @__PURE__ */ It(e)) return f(e);
		if (_(e)) return d ? d(e, 2) : e();
	})) : h = _(e) ? t ? d ? () => d(e, 2) : e : () => {
		if (g) {
			N();
			try {
				g();
			} finally {
				P();
			}
		}
		let t = Zt;
		Zt = m;
		try {
			return d ? d(e, 3, [v]) : e(v);
		} finally {
			Zt = t;
		}
	} : a, t && o) {
		let e = h, t = o === !0 ? Infinity : o;
		h = () => en(e(), t);
	}
	let x = Ee(), S = () => {
		m.stop(), x && x.active && u(x.effects, m);
	};
	if (s && t) {
		let e = t;
		t = (...t) => {
			try {
				return e(...t);
			} finally {
				S();
			}
		};
	}
	let C = b ? Array(e.length).fill(Yt) : Yt, w = (e) => {
		if (m.flags & 1 && (m.dirty || e)) {
			if (t) {
				let n = m.run();
				if (e || o || y || (b ? n.some((e, t) => O(e, C[t])) : O(n, C))) {
					let e = Zt;
					N();
					try {
						g && g(), Zt = m;
						let e = [
							n,
							C === Yt ? void 0 : b && C[0] === Yt ? [] : C,
							v
						];
						C = n, d ? d(t, 3, e) : t(...e);
					} finally {
						Zt = e, P();
					}
				}
			} else m.run();
		}
	};
	return l && l(w), m = new Oe(h), m.scheduler = c ? () => c(w, !1) : w, v = (e) => Qt(e, !1, m), g = m.onStop = () => {
		let e = Xt.get(m);
		if (e) {
			if (d) d(e, 4);
			else for (let t of e) t();
			Xt.delete(m);
		}
	}, t ? i ? w(!0) : C = m.run() : c ? c(w.bind(null, !0), !0) : m.run(), S.pause = m.pause.bind(m), S.resume = m.resume.bind(m), S.stop = S, S;
}
function en(e, t = Infinity, n) {
	if (t <= 0 || !b(e) || e.__v_skip || (n ||= /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t)) return e;
	if (n.set(e, t), t--, /* @__PURE__ */ z(e)) en(e.value, t, n);
	else if (p(e)) for (let r = 0; r < e.length; r++) en(e[r], t, n);
	else if (h(e) || m(e)) e.forEach((e) => {
		en(e, t, n);
	});
	else if (ee(e)) {
		for (let r in e) en(e[r], t, n);
		for (let r of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, r) && en(e[r], t, n);
	}
	return e;
}
// node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
function tn(e, t, n, r) {
	try {
		return r ? e(...r) : e();
	} catch (e) {
		nn(e, t, n);
	}
}
function B(e, t, n, r) {
	if (_(e)) {
		let i = tn(e, t, n, r);
		return i && x(i) && i.catch((e) => {
			nn(e, t, n, void 0, !0);
		}), i;
	}
	if (p(e)) {
		let i = [];
		for (let a = 0; a < e.length; a++) i.push(B(e[a], t, n, r));
		return i;
	}
}
function nn(e, t, n, i = !0, a = !1) {
	let o = t ? t.vnode : null, { errorHandler: s, throwUnhandledErrorInProduction: c } = t && t.appContext.config || r;
	if (t) {
		let r = t.parent, i = t.proxy, o = `https://vuejs.org/error-reference/#runtime-${n}`;
		for (; r;) {
			let t = r.ec;
			if (t && !r.isUnmounted && (!a || r.scope.active)) {
				for (let n = 0; n < t.length; n++) if (t[n](e, i, o) === !1) return;
			}
			r = r.parent;
		}
		if (s) {
			N(), tn(s, null, 10, [
				e,
				i,
				o
			]), P();
			return;
		}
	}
	rn(e, n, o, i, c);
}
function rn(e, t, n, r = !0, i = !1) {
	if (i) throw e;
	console.error(e);
}
var V = [], H = -1, U = [], an = null, on = 0, sn = /* @__PURE__ */ Promise.resolve(), cn = null;
function ln(e) {
	let t = cn || sn;
	return e ? t.then(this ? e.bind(this) : e) : t;
}
function un(e) {
	let t = H + 1, n = V.length;
	for (; t < n;) {
		let r = t + n >>> 1, i = V[r], a = vn(i);
		a < e || a === e && i.flags & 2 ? t = r + 1 : n = r;
	}
	return t;
}
function dn(e) {
	if (!(e.flags & 1)) {
		let t = vn(e), n = V[V.length - 1];
		!n || !(e.flags & 2) && t >= vn(n) ? V.push(e) : V.splice(un(t), 0, e), e.flags |= 1, fn();
	}
}
function fn() {
	cn ||= sn.then(yn);
}
function pn(e) {
	if (!p(e)) an && e.id === -1 ? an.splice(on + 1, 0, e) : e.flags & 1 || (U.push(e), e.flags |= 1);
	else for (let t = 0; t < e.length; t++) U.push(e[t]);
	fn();
}
function mn(e, t, n, r = H + 1) {
	for (; r < V.length; r++) {
		let n = V[r];
		if (n && n.flags & 2) {
			if (e && n.id !== e.uid || t !== void 0 && !(n.id >= t)) continue;
			V.splice(r, 1), r = e ? r - 1 : H, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
		}
	}
}
function hn(e, t, n = 0) {
	if (U.length) {
		let e = U, r = 0;
		if (t) {
			e = [];
			for (let i = 0; i < U.length; i++) {
				let a = U[i];
				(a.i === void 0 ? t.has(a) : !a.i || a.i.uid < n) ? U[r++] = a : e.push(a);
			}
		}
		let i = [...new Set(e)].sort((e, t) => vn(e) - vn(t));
		if (U.length = r, an) {
			for (let e = 0; e < i.length; e++) an.push(i[e]);
			return;
		}
		for (an = i, on = 0; on < an.length; on++) {
			let e = an[on];
			e.flags & 4 && (e.flags &= -2), e.flags & 8 || e(), e.flags &= -2;
		}
		an = null, on = 0;
	}
}
var gn = !1;
function _n(e, t) {
	if (gn) {
		e();
		return;
	}
	let n = t === void 0 ? void 0 : new Set(U);
	e(), gn = !0;
	try {
		mn(void 0, t), hn(void 0, n, t);
	} finally {
		gn = !1;
	}
}
var vn = (e) => e.id == null ? e.flags & 2 ? -1 : Infinity : e.id;
function yn(e) {
	try {
		for (H = 0; H < V.length; H++) {
			let e = V[H];
			e && !(e.flags & 8) && (e.flags & 4 && (e.flags &= -2), tn(e, e.i, e.i ? 15 : 14), e.flags & 4 || (e.flags &= -2));
		}
	} finally {
		for (; H < V.length; H++) {
			let e = V[H];
			e && (e.flags &= -2);
		}
		H = -1, V.length = 0, hn(e), cn = null, (V.length || U.length) && yn(e);
	}
}
var W = null, bn = null;
function xn(e) {
	let t = W;
	return W = e, bn = e && e.type.__scopeId || null, t;
}
function Sn(e, t = W, n) {
	if (!t || e._n) return e;
	let r = (...n) => {
		r._d && Ai(-1);
		let i = xn(t), a = Ei.length, o;
		try {
			o = e(...n);
		} finally {
			for (let e = Ei.length; e > a; e--) Oi();
			xn(i), r._d && Ai(1);
		}
		return o;
	};
	return r._n = !0, r._c = !0, r._d = !0, r;
}
function Cn(e, t, n, r) {
	let i = e;
	if (r === "beforeMount") e._mount = e;
	else if (r === "beforeUpdate") {
		let n = t && t._mount;
		n && (n._latest = e, e._mount = n);
	} else if (r === "mounted") {
		let t = e._latest;
		e._mount = e._latest = void 0, t && (i = t, t._mount = void 0);
	}
	let a = i.dirs, o = t && t.dirs;
	for (let s = 0; s < a.length; s++) {
		let c = a[s];
		o ? c.oldValue = o[s].value : r === "mounted" && c.oldValue !== void 0 && (c = l({}, c, { oldValue: void 0 }));
		let u = c.dir[r];
		u && (N(), B(u, n, 8, [
			e.el,
			c,
			i,
			t
		]), P());
	}
}
function wn(e, t) {
	if (Z) {
		let n = Z.provides, r = Z.parent && Z.parent.provides;
		r === n && (n = Z.provides = Object.create(r)), n[e] = t;
	}
}
function Tn(e, t, n = !1) {
	let r = Xi();
	if (r || jr) {
		let i = jr ? jr._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
		if (i && e in i) return i[e];
		if (arguments.length > 1) return n && _(t) ? t.call(r && r.proxy) : t;
	}
}
var En = /* @__PURE__ */ Symbol.for("v-scx"), Dn = () => Tn(En);
function On(e, t, n) {
	return kn(e, t, n);
}
function kn(e, t, n = r) {
	let { immediate: i, deep: o, flush: s, once: c } = n, u = l({}, n), d = t && i || !t && s !== "post", f;
	if (na) {
		if (s === "sync") {
			let e = Dn();
			f = e.__watcherHandles ||= [];
		} else if (!d) {
			let e = () => {};
			return e.stop = a, e.resume = a, e.pause = a, e;
		}
	}
	let p = Z;
	u.call = (e, t, n) => B(e, p, t, n);
	let m = !1;
	s === "post" ? u.scheduler = (e) => {
		e.i = p, K(e, p && p.suspense);
	} : s !== "sync" && (m = !0, u.scheduler = (e, t) => {
		t ? e() : dn(e);
	}), u.augmentJob = (e) => {
		t && (e.flags |= 4), m && (e.flags |= 2, p && (e.id = p.uid, e.i = p));
	};
	let h = $t(e, t, u);
	return na && (f ? f.push(h) : d && h()), h;
}
function An(e, t, n) {
	let r = this.proxy, i = v(e) ? e.includes(".") ? jn(r, e) : () => r[e] : e.bind(r, r), a;
	_(t) ? a = t : (a = t.handler, n = t);
	let o = $i(this), s = kn(i, a.bind(r), n);
	return o(), s;
}
function jn(e, t) {
	let n = t.split(".");
	return () => {
		let t = e;
		for (let e = 0; e < n.length && t; e++) t = t[n[e]];
		return t;
	};
}
var Mn = /* @__PURE__ */ Symbol("_vte"), Nn = (e) => e.__isTeleport, Pn = /* @__PURE__ */ Symbol("_leaveCb");
function Fn(e) {
	let t = e[0];
	if (e.length > 1) {
		for (let n of e) if (n.type !== wi) {
			t = n;
			break;
		}
	}
	return t;
}
function In(e) {
	if (!Gn(e)) return Nn(e.type) && e.children ? Fn(e.children) : e;
	if (e.component) return e.component.subTree;
	let { shapeFlag: t, children: n } = e;
	if (n) {
		if (t & 16) return n[0];
		if (t & 32 && _(n.default)) return n.default();
	}
}
function Ln(e, t) {
	if (e.shapeFlag & 6 && e.component) {
		e.transition = t;
		let n = e.component.subTree;
		Ln(Nn(n.type) && In(n) || n, t);
	} else if (e.shapeFlag & 128) {
		let n = e.suspense;
		if (n) {
			let e = n.isHydrating ? n.pendingBranch : n.activeBranch;
			e && Ln(e, t.clone(e));
		} else e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback);
	} else if (e.transition = t, e.type === q && p(e.children)) {
		let n = Rr(e.children, !1);
		n && Ln(n, t);
	}
}
function Rn(e) {
	if (e.component) return Rn(e.component.subTree);
	if (e.type === q) {
		let t = p(e.children) && Rr(e.children, !1);
		return t ? Rn(t) : void 0;
	}
	if (e.type !== wi) return e;
}
function zn(e) {
	e.ids = [
		e.ids[0] + e.ids[2]++ + "-",
		0,
		0
	];
}
function Bn(e, t) {
	let n;
	return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
var Vn = /* @__PURE__ */ new WeakMap();
function Hn(e, t, n, i, a = !1) {
	if (p(e)) {
		e.forEach((e, r) => Hn(e, t && (p(t) ? t[r] : t), n, i, a));
		return;
	}
	if (Wn(i) && !a) {
		i.shapeFlag & 512 && i.type.__asyncResolved && i.component.subTree.component && Hn(e, t, n, i.component.subTree);
		return;
	}
	let s = i.shapeFlag & 4 ? ua(i.component) : i.el, c = a ? null : s, { i: l, r: d } = e, m = t && t.r, h = l.refs === r ? l.refs = {} : l.refs, g = l.setupState, y = /* @__PURE__ */ L(g), b = g === r ? o : (e) => !Bn(h, e) && f(y, e), x = (e, t) => !(t && Bn(h, t));
	if (m != null && m !== d) {
		if (Un(t), v(m)) h[m] = null, b(m) && (g[m] = null);
		else if (/* @__PURE__ */ z(m)) {
			let e = t;
			x(m, e.k) && (m.value = null), e.k && (h[e.k] = null);
		}
	}
	if (_(d)) tn(d, l, 12, [c, h]);
	else {
		let t = v(d), r = /* @__PURE__ */ z(d);
		if (t || r) {
			let i = () => {
				if (e.f) {
					let n = t ? b(d) ? g[d] : h[d] : x(d) || !e.k ? d.value : h[e.k];
					if (a) p(n) && u(n, s);
					else if (p(n)) n.includes(s) || n.push(s);
					else if (t) h[d] = [s], b(d) && (g[d] = h[d]);
					else {
						let t = [s];
						x(d, e.k) && (d.value = t), e.k && (h[e.k] = t);
					}
				} else t ? (h[d] = c, b(d) && (g[d] = c)) : r && (x(d, e.k) && (d.value = c), e.k && (h[e.k] = c));
			};
			if (c) {
				let t = () => {
					i(), Vn.delete(e);
				};
				t.id = -1, Vn.set(e, t), K(t, n);
			} else Un(e), i();
		}
	}
}
function Un(e) {
	let t = Vn.get(e);
	t && (t.flags |= 8, Vn.delete(e));
}
de().requestIdleCallback, de().cancelIdleCallback;
var Wn = (e) => !!e.type.__asyncLoader, Gn = (e) => e.type.__isKeepAlive;
function Kn(e, t) {
	Jn(e, "a", t);
}
function qn(e, t) {
	Jn(e, "da", t);
}
function Jn(e, t, n = Z) {
	let r = e.__wdc ||= () => {
		let t = n;
		for (; t;) {
			if (t.isDeactivated) return;
			t = t.parent;
		}
		return e();
	};
	if (Xn(t, r, n), n) {
		let e = n.parent;
		for (; e && e.parent;) Gn(e.parent.vnode) && Yn(r, t, n, e), e = e.parent;
	}
}
function Yn(e, t, n, r) {
	let i = Xn(t, e, r, !0), a = Xn("um", () => u(r[t], i), n);
	a.flags = 16;
}
function Xn(e, t, n = Z, r = !1) {
	if (n) {
		let i = n[e] || (n[e] = []), a = t.__weh ||= (...r) => {
			N();
			let i = $i(n), a = B(t, n, e, r);
			return i(), P(), a;
		};
		return r ? i.unshift(a) : i.push(a), a;
	}
}
var Zn = (e) => (t, n = Z) => {
	na && e !== "sp" || Xn(e, (...e) => t(...e), n);
}, Qn = Zn("bm"), $n = Zn("m"), er = Zn("bu"), tr = Zn("u"), nr = Zn("bum"), rr = Zn("um"), ir = Zn("sp"), ar = Zn("rtg"), or = Zn("rtc");
function sr(e, t = Z) {
	Xn("ec", e, t);
}
var cr = /* @__PURE__ */ Symbol.for("v-ndc"), lr = (e) => e ? ta(e) ? ua(e) : lr(e.parent) : null, ur = /* @__PURE__ */ l(/* @__PURE__ */ Object.create(null), {
	$: (e) => e,
	$el: (e) => e.vnode.el,
	$data: (e) => e.data,
	$props: (e) => e.props,
	$attrs: (e) => e.attrs,
	$slots: (e) => e.slots,
	$refs: (e) => e.refs,
	$parent: (e) => lr(e.parent),
	$root: (e) => lr(e.root),
	$host: (e) => e.ce,
	$emit: (e) => e.emit,
	$options: (e) => yr(e),
	$forceUpdate: (e) => e.f ||= () => {
		dn(e.update);
	},
	$nextTick: (e) => e.n ||= ln.bind(e.proxy),
	$watch: (e) => An.bind(e)
}), dr = (e, t) => e !== r && !e.__isScriptSetup && f(e, t), fr = {
	get({ _: e }, t) {
		if (t === "__v_skip") return !0;
		let { ctx: n, setupState: i, data: a, props: o, accessCache: s, type: c, appContext: l } = e;
		if (t[0] !== "$") {
			let e = s[t];
			if (e !== void 0) switch (e) {
				case 1: return i[t];
				case 2: return a[t];
				case 4: return n[t];
				case 3: return o[t];
			}
			else if (dr(i, t)) return s[t] = 1, i[t];
			else if (a !== r && f(a, t)) return s[t] = 2, a[t];
			else if (f(o, t)) return s[t] = 3, o[t];
			else if (n !== r && f(n, t)) return s[t] = 4, n[t];
			else mr && (s[t] = 0);
		}
		let u = ur[t], d, p;
		if (u) return t === "$attrs" && F(e.attrs, "get", ""), u(e);
		if ((d = c.__cssModules) && (d = d[t])) return d;
		if (n !== r && f(n, t)) return s[t] = 4, n[t];
		if (p = l.config.globalProperties, f(p, t)) return p[t];
	},
	set({ _: e }, t, n) {
		let { data: i, setupState: a, ctx: o } = e;
		return dr(a, t) ? (a[t] = n, !0) : i !== r && f(i, t) ? (i[t] = n, !0) : f(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = n, !0);
	},
	has({ _: { data: e, setupState: t, accessCache: n, ctx: i, appContext: a, props: o, type: s } }, c) {
		let l;
		return !!(n[c] || e !== r && c[0] !== "$" && f(e, c) || dr(t, c) || f(o, c) || f(i, c) || f(ur, c) || f(a.config.globalProperties, c) || (l = s.__cssModules) && l[c]);
	},
	defineProperty(e, t, n) {
		return n.get == null ? f(n, "value") && this.set(e, t, n.value, null) : e._.accessCache[t] = 0, Reflect.defineProperty(e, t, n);
	}
};
function pr(e) {
	return p(e) ? e.reduce((e, t) => (e[t] = null, e), {}) : e;
}
var mr = !0;
function hr(e) {
	let t = yr(e), n = e.proxy, r = e.ctx;
	mr = !1, t.beforeCreate && _r(t.beforeCreate, e, "bc");
	let { data: i, computed: o, methods: s, watch: c, provide: l, inject: u, created: d, beforeMount: f, mounted: m, beforeUpdate: h, updated: g, activated: v, deactivated: y, beforeDestroy: x, beforeUnmount: S, destroyed: C, unmounted: w, render: ee, renderTracked: te, renderTriggered: ne, errorCaptured: T, serverPrefetch: re, expose: E, inheritAttrs: ie, components: D, directives: ae, filters: oe } = t;
	if (u && gr(u, r, null), s) for (let e in s) {
		let t = s[e];
		_(t) && (r[e] = t.bind(n));
	}
	if (i) {
		let t = i.call(n, n);
		b(t) && (e.data = /* @__PURE__ */ Mt(t));
	}
	if (mr = !0, o) for (let e in o) {
		let t = o[e], i = fa({
			get: _(t) ? t.bind(n, n) : _(t.get) ? t.get.bind(n, n) : a,
			set: !_(t) && _(t.set) ? t.set.bind(n) : a
		});
		Object.defineProperty(r, e, {
			enumerable: !0,
			configurable: !0,
			get: () => i.value,
			set: (e) => i.value = e
		});
	}
	if (c) for (let e in c) vr(c[e], r, n, e);
	if (l) {
		let e = _(l) ? l.call(n) : l;
		Reflect.ownKeys(e).forEach((t) => {
			wn(t, e[t]);
		});
	}
	d && _r(d, e, "c");
	function O(e, t) {
		p(t) ? t.forEach((t) => e(t.bind(n))) : t && e(t.bind(n));
	}
	if (O(Qn, f), O($n, m), O(er, h), O(tr, g), O(Kn, v), O(qn, y), O(sr, T), O(or, te), O(ar, ne), O(nr, S), O(rr, w), O(ir, re), p(E)) {
		if (E.length) {
			let t = e.exposed ||= {};
			E.forEach((e) => {
				Object.defineProperty(t, e, {
					get: () => n[e],
					set: (t) => n[e] = t,
					enumerable: !0
				});
			});
		} else e.exposed ||= {};
	}
	ee && e.render === a && (e.render = ee), ie != null && (e.inheritAttrs = ie), D && (e.components = D), ae && (e.directives = ae), re && zn(e);
}
function gr(e, t, n = a) {
	p(e) && (e = wr(e));
	for (let n in e) {
		let r = e[n], i;
		i = b(r) ? "default" in r ? Tn(r.from || n, r.default, !0) : Tn(r.from || n) : Tn(r), /* @__PURE__ */ z(i) ? Object.defineProperty(t, n, {
			enumerable: !0,
			configurable: !0,
			get: () => i.value,
			set: (e) => i.value = e
		}) : t[n] = i;
	}
}
function _r(e, t, n) {
	B(p(e) ? e.map((e) => e.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function vr(e, t, n, r) {
	let i = r.includes(".") ? jn(n, r) : () => n[r];
	if (v(e)) {
		let n = t[e];
		_(n) && On(i, n);
	} else if (_(e)) On(i, e.bind(n));
	else if (b(e)) {
		if (p(e)) e.forEach((e) => vr(e, t, n, r));
		else {
			let r = _(e.handler) ? e.handler.bind(n) : t[e.handler];
			_(r) && On(i, r, e);
		}
	}
}
function yr(e) {
	let t = e.type, { mixins: n, extends: r } = t, { mixins: i, optionsCache: a, config: { optionMergeStrategies: o } } = e.appContext, s = a.get(t), c;
	return s ? c = s : !i.length && !n && !r ? c = t : (c = {}, i.length && i.forEach((e) => br(c, e, o, !0)), br(c, t, o)), b(t) && a.set(t, c), c;
}
function br(e, t, n, r = !1) {
	let { mixins: i, extends: a } = t;
	a && br(e, a, n, !0), i && i.forEach((t) => br(e, t, n, !0));
	for (let i in t) if (!(r && i === "expose")) {
		let r = xr[i] || n && n[i];
		e[i] = r ? r(e[i], t[i]) : t[i];
	}
	return e;
}
var xr = {
	data: Sr,
	props: Er,
	emits: Er,
	methods: Tr,
	computed: Tr,
	beforeCreate: G,
	created: G,
	beforeMount: G,
	mounted: G,
	beforeUpdate: G,
	updated: G,
	beforeDestroy: G,
	beforeUnmount: G,
	destroyed: G,
	unmounted: G,
	activated: G,
	deactivated: G,
	errorCaptured: G,
	serverPrefetch: G,
	components: Tr,
	directives: Tr,
	watch: Dr,
	provide: Sr,
	inject: Cr
};
function Sr(e, t) {
	return t ? e ? function() {
		return l(_(e) ? e.call(this, this) : e, _(t) ? t.call(this, this) : t);
	} : t : e;
}
function Cr(e, t) {
	return Tr(wr(e), wr(t));
}
function wr(e) {
	if (p(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
		return t;
	}
	return e;
}
function G(e, t) {
	return e ? [...new Set([].concat(e, t))] : t;
}
function Tr(e, t) {
	return e ? l(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Er(e, t) {
	return e ? p(e) && p(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : l(/* @__PURE__ */ Object.create(null), pr(e), pr(t ?? {})) : t;
}
function Dr(e, t) {
	if (!e) return t;
	if (!t) return e;
	let n = l(/* @__PURE__ */ Object.create(null), e);
	for (let r in t) n[r] = G(e[r], t[r]);
	return n;
}
function Or() {
	return {
		app: null,
		config: {
			isNativeTag: o,
			performance: !1,
			globalProperties: {},
			optionMergeStrategies: {},
			errorHandler: void 0,
			warnHandler: void 0,
			compilerOptions: {}
		},
		mixins: [],
		components: {},
		directives: {},
		provides: /* @__PURE__ */ Object.create(null),
		optionsCache: /* @__PURE__ */ new WeakMap(),
		propsCache: /* @__PURE__ */ new WeakMap(),
		emitsCache: /* @__PURE__ */ new WeakMap()
	};
}
var kr = 0;
function Ar(e, t) {
	return function(n, r = null) {
		_(n) || (n = l({}, n)), r != null && !b(r) && (r = null);
		let i = Or(), a = /* @__PURE__ */ new WeakSet(), o = [], s = !1, c = i.app = {
			_uid: kr++,
			_component: n,
			_props: r,
			_container: null,
			_context: i,
			_instance: null,
			version: ma,
			get config() {
				return i.config;
			},
			set config(e) {},
			use(e, ...t) {
				return a.has(e) || (e && _(e.install) ? (a.add(e), e.install(c, ...t)) : _(e) && (a.add(e), e(c, ...t))), c;
			},
			mixin(e) {
				return i.mixins.includes(e) || i.mixins.push(e), c;
			},
			component(e, t) {
				return t ? (i.components[e] = t, c) : i.components[e];
			},
			directive(e, t) {
				return t ? (i.directives[e] = t, c) : i.directives[e];
			},
			mount(a, o, l) {
				if (!s) {
					let u = c._ceVNode || Y(n, r);
					return u.appContext = i, l === !0 ? l = "svg" : l === !1 && (l = void 0), o && t ? t(u, a) : e(u, a, l), s = !0, c._container = a, a.__vue_app__ = c, ua(u.component);
				}
			},
			onUnmount(e) {
				o.push(e);
			},
			unmount() {
				s && (B(o, c._instance, 16), e(null, c._container), delete c._container.__vue_app__);
			},
			provide(e, t) {
				return i.provides[e] = t, c;
			},
			runWithContext(e) {
				let t = jr;
				jr = c;
				try {
					return e();
				} finally {
					jr = t;
				}
			}
		};
		return c;
	};
}
var jr = null, Mr = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${E(t)}Modifiers`] || e[`${D(t)}Modifiers`];
function Nr(e, t, ...n) {
	if (e.isUnmounted) return;
	let i = e.vnode.props || r, a = n, o = t.startsWith("update:"), s = o && Mr(i, t.slice(7));
	s && (s.trim && (a = n.map((e) => v(e) ? e.trim() : e)), s.number && (a = a.map(le)));
	let c, l = i[c = oe(t)] || i[c = oe(E(t))];
	!l && o && (l = i[c = oe(D(t))]), l && B(l, e, 6, a);
	let u = i[c + "Once"];
	if (u) {
		if (!e.emitted) e.emitted = {};
		else if (e.emitted[c]) return;
		e.emitted[c] = !0, B(u, e, 6, a);
	}
}
var Pr = /* @__PURE__ */ new WeakMap();
function Fr(e, t, n = !1) {
	let r = n ? Pr : t.emitsCache, i = r.get(e);
	if (i !== void 0) return i;
	let a = e.emits, o = {}, s = !1;
	if (!_(e)) {
		let r = (e) => {
			let n = Fr(e, t, !0);
			n && (s = !0, l(o, n));
		};
		!n && t.mixins.length && t.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r);
	}
	return !a && !s ? (b(e) && r.set(e, null), null) : (p(a) ? a.forEach((e) => o[e] = null) : l(o, a), b(e) && r.set(e, o), o);
}
function Ir(e, t) {
	return !e || !s(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), f(e, t[0].toLowerCase() + t.slice(1)) || f(e, D(t)) || f(e, t));
}
function Lr(e) {
	let { type: t, vnode: n, proxy: r, withProxy: i, propsOptions: [a], slots: o, attrs: s, emit: l, render: u, renderCache: d, props: f, data: p, setupState: m, ctx: h, inheritAttrs: g } = e, _ = xn(e), v, y;
	try {
		if (n.shapeFlag & 4) {
			let e = i || r, t = e;
			v = X(u.call(t, e, d, f, m, p, h)), y = s;
		} else {
			let e = t;
			v = X(e.length > 1 ? e(f, {
				attrs: s,
				slots: o,
				emit: l
			}) : e(f, null)), y = t.props ? s : zr(s);
		}
	} catch (t) {
		Ei.length = 0, nn(t, e, 1), v = Y(wi);
	}
	let b = v;
	if (y && g !== !1) {
		let e = Object.keys(y), { shapeFlag: t } = b;
		e.length && t & 7 && (a && e.some(c) && (y = Br(y, a)), b = Bi(b, y, !1, !0));
	}
	return n.dirs && (b = Bi(b, null, !1, !0), b.dirs = b.dirs ? b.dirs.concat(n.dirs) : n.dirs), n.transition && Ln(Nn(b.type) && In(b) || b, n.transition), v = b, xn(_), v;
}
function Rr(e, t = !0) {
	let n;
	for (let t = 0; t < e.length; t++) {
		let r = e[t];
		if (Ni(r)) {
			if (r.type !== wi || r.children === "v-if") {
				if (n) return;
				n = r;
			}
		} else return;
	}
	return n;
}
var zr = (e) => {
	let t;
	for (let n in e) (n === "class" || n === "style" || s(n)) && ((t ||= {})[n] = e[n]);
	return t;
}, Br = (e, t) => {
	let n = {};
	for (let r in e) c(r) && r.slice(9) in t || (n[r] = e[r]);
	return n;
};
function Vr(e, t, n) {
	let { props: r, children: i, component: a } = e, { props: o, children: s, patchFlag: c } = t, l = a.emitsOptions;
	if (t.dirs || t.transition) return !0;
	if (n && c >= 0) {
		if (c & 1024) return !0;
		if (c & 16) return r ? Hr(r, o, l) : !!o;
		if (c & 8) {
			let e = t.dynamicProps;
			for (let t = 0; t < e.length; t++) {
				let n = e[t];
				if (Ur(o, r, n) && !Ir(l, n)) return !0;
			}
		}
	} else return (i || s) && (!s || !s.$stable) ? !0 : r === o ? !1 : r ? !o || Hr(r, o, l) : !!o;
	return !1;
}
function Hr(e, t, n) {
	let r = Object.keys(t);
	if (r.length !== Object.keys(e).length) return !0;
	for (let i = 0; i < r.length; i++) {
		let a = r[i];
		if (!f(e, a) || Ur(t, e, a) && !Ir(n, a)) return !0;
	}
	return !1;
}
function Ur(e, t, n) {
	let r = e[n], i = t[n];
	return n === "style" && b(r) && b(i) ? !Ce(r, i) : r !== i;
}
function Wr({ vnode: e, parent: t, suspense: n }, r) {
	for (; t;) {
		let n = t.subTree;
		if (n.suspense && n.suspense.activeBranch === e && (n.suspense.vnode.el = n.el = r, e = n), n === e) (e = t.vnode).el = r, t = t.parent;
		else break;
	}
	n && n.activeBranch === e && (n.vnode.el = r);
}
var Gr = {}, Kr = () => Object.create(Gr), qr = (e) => Object.getPrototypeOf(e) === Gr;
function Jr(e, t, n, r = !1) {
	let i = {}, a = Kr();
	e.propsDefaults = /* @__PURE__ */ Object.create(null), Xr(e, t, i, a);
	for (let t in e.propsOptions[0]) t in i || (i[t] = void 0);
	e.props = n ? r ? i : /* @__PURE__ */ Nt(i) : e.type.props ? i : a, e.attrs = a;
}
function Yr(e, t, n, r) {
	let { props: i, attrs: a, vnode: { patchFlag: o } } = e, s = /* @__PURE__ */ L(i), [c] = e.propsOptions, l = !1;
	if ((r || o > 0) && !(o & 16)) {
		if (o & 8) {
			let n = e.vnode.dynamicProps;
			for (let r = 0; r < n.length; r++) {
				let o = n[r];
				if (Ir(e.emitsOptions, o)) continue;
				let u = t[o];
				if (c) {
					if (f(a, o)) u !== a[o] && (a[o] = u, l = !0);
					else {
						let t = E(o);
						i[t] = Zr(c, s, t, u, e, !1);
					}
				} else u !== a[o] && (a[o] = u, l = !0);
			}
		}
	} else {
		Xr(e, t, i, a) && (l = !0);
		let r;
		for (let a in s) t && (f(t, a) || (r = D(a)) !== a && f(t, r)) || (c ? n && (n[a] !== void 0 || n[r] !== void 0) && (i[a] = Zr(c, s, a, void 0, e, !0)) : delete i[a]);
		if (a !== s) for (let e in a) t && f(t, e) || (delete a[e], l = !0);
	}
	l && Ze(e.attrs, "set", "");
}
function Xr(e, t, n, i) {
	let [a, o] = e.propsOptions, s = !1, c;
	if (t) for (let r in t) {
		if (ne(r)) continue;
		let l = t[r], u;
		a && f(a, u = E(r)) ? !o || !o.includes(u) ? n[u] = l : (c ||= {})[u] = l : Ir(e.emitsOptions, r) || r in i && l === i[r] || (i[r] = l, s = !0);
	}
	if (o) {
		let t = /* @__PURE__ */ L(n), i = c || r;
		for (let r = 0; r < o.length; r++) {
			let s = o[r];
			n[s] = Zr(a, t, s, i[s], e, !f(i, s));
		}
	}
	return s;
}
function Zr(e, t, n, r, i, a) {
	let o = e[n];
	if (o != null) {
		let e = f(o, "default");
		if (e && r === void 0) {
			let e = o.default;
			if (o.type !== Function && !o.skipFactory && _(e)) {
				let { propsDefaults: a } = i;
				if (n in a) r = a[n];
				else {
					let o = $i(i);
					r = a[n] = e.call(null, t), o();
				}
			} else r = e;
			i.ce && i.ce._setProp(n, r);
		}
		o[0] && (a && !e ? r = !1 : o[1] && (r === "" || r === D(n)) && (r = !0));
	}
	return r;
}
var Qr = /* @__PURE__ */ new WeakMap();
function $r(e, t, n = !1) {
	let a = n ? Qr : t.propsCache, o = a.get(e);
	if (o) return o;
	let s = e.props, c = {}, u = [], d = !1;
	if (!_(e)) {
		let r = (e) => {
			d = !0;
			let [n, r] = $r(e, t, !0);
			l(c, n), r && u.push(...r);
		};
		!n && t.mixins.length && t.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r);
	}
	if (!s && !d) return b(e) && a.set(e, i), i;
	if (p(s)) for (let e = 0; e < s.length; e++) {
		let t = E(s[e]);
		ei(t) && (c[t] = r);
	}
	else if (s) for (let e in s) {
		let t = E(e);
		if (ei(t)) {
			let n = s[e], r = c[t] = p(n) || _(n) ? { type: n } : l({}, n), i = r.type, a = !1, o = !0;
			if (p(i)) for (let e = 0; e < i.length; ++e) {
				let t = i[e], n = _(t) && t.name;
				if (n === "Boolean") {
					a = !0;
					break;
				}
				n === "String" && (o = !1);
			}
			else a = _(i) && i.name === "Boolean";
			r[0] = a, r[1] = o, (a || f(r, "default")) && u.push(t);
		}
	}
	let m = [c, u];
	return b(e) && a.set(e, m), m;
}
function ei(e) {
	return e[0] !== "$" && !ne(e);
}
var ti = (e) => e === "_" || e === "_ctx" || e === "$stable", ni = (e) => p(e) ? e.map(X) : [X(e)], ri = (e, t, n) => {
	if (t._n) return t;
	let r = Sn((...e) => ni(t(...e)), n);
	return r._c = !1, r;
}, ii = (e, t, n) => {
	let r = e._ctx;
	for (let n in e) {
		if (ti(n)) continue;
		let i = e[n];
		if (_(i)) t[n] = ri(n, i, r);
		else if (i != null) {
			let e = ni(i);
			t[n] = () => e;
		}
	}
}, ai = (e, t) => {
	let n = ni(t);
	e.slots.default = () => n;
}, oi = (e, t, n) => {
	for (let r in t) (n || !ti(r)) && (e[r] = t[r]);
}, si = (e, t, n) => {
	let r = e.slots = Kr();
	if (e.vnode.shapeFlag & 32) {
		let e = t._;
		e ? (oi(r, t, n), n && ce(r, "_", e, !0)) : ii(t, r);
	} else t && ai(e, t);
}, ci = (e, t, n) => {
	let { vnode: i, slots: a } = e, o = !0, s = r;
	if (i.shapeFlag & 32) {
		let e = t._;
		e ? n && e === 1 ? o = !1 : oi(a, t, n) : (o = !t.$stable, ii(t, a)), s = t;
	} else t && (ai(e, t), s = { default: 1 });
	if (o) for (let e in a) !ti(e) && s[e] == null && delete a[e];
}, K = Si;
function li(e) {
	return di(e);
}
function di(e, t) {
	let n = de();
	n.__VUE__ = !0;
	let { insert: o, remove: s, patchProp: c, createElement: l, createText: u, createComment: d, setText: f, setElementText: p, parentNode: m, nextSibling: h, setScopeId: g = a, insertStaticContent: _ } = e, v = (e, t, n, r = null, a = null, o = null, s = void 0, c = null, l = !!t.dynamicChildren) => {
		if (e === t) return;
		e && !Pi(e, t) && (r = ye(e), k(e, a, o, !0), e = null), t.patchFlag === -2 && (l = !1, t.dynamicChildren = null), t.dynamicChildren && e && e.dynamicChildren && e.dynamicChildren.hasOnce && (t.dynamicChildren === i && (t.dynamicChildren = []), t.dynamicChildren.hasOnce = !0);
		let { type: u, ref: d, shapeFlag: f } = t;
		switch (u) {
			case Ci:
				y(e, t, n, r);
				break;
			case wi:
				b(e, t, n, r);
				break;
			case Ti:
				e ?? x(t, n, r, s);
				break;
			case q:
				D(e, t, n, r, a, o, s, c, l);
				break;
			default: f & 1 ? w(e, t, n, r, a, o, s, c, l) : f & 6 ? ae(e, t, n, r, a, o, s, c, l) : (f & 64 || f & 128) && u.process(e, t, n, r, a, o, s, c, l, xe);
		}
		d != null && a ? Hn(d, e && e.ref, o, t || e, !t) : d == null && e && e.ref != null && Hn(e.ref, null, o, e, !0);
	}, y = (e, t, n, r) => {
		if (e == null) o(t.el = u(t.children), n, r);
		else {
			let n = t.el = e.el;
			t.children !== e.children && f(n, t.children);
		}
	}, b = (e, t, n, r) => {
		e == null ? o(t.el = d(t.children || ""), n, r) : t.el = e.el;
	}, x = (e, t, n, r) => {
		[e.el, e.anchor] = _(e.children, t, n, r, e.el, e.anchor);
	}, S = ({ el: e, anchor: t }, n, r) => {
		let i;
		for (; e && e !== t;) i = h(e), o(e, n, r), e = i;
		o(t, n, r);
	}, C = ({ el: e, anchor: t }) => {
		let n;
		for (; e && e !== t;) n = h(e), s(e), e = n;
		s(t);
	}, w = (e, t, n, r, i, a, o, s, c) => {
		if (t.type === "svg" ? o = "svg" : t.type === "math" && (o = "mathml"), e == null) ee(t, n, r, i, a, o, s, c);
		else {
			let n = e.el && e.el._isVueCE ? e.el : null;
			try {
				n && n._beginPatch(), re(e, t, i, a, o, s, c);
			} finally {
				n && n._endPatch();
			}
		}
	}, ee = (e, t, n, r, i, a, s, u) => {
		let d, f, { props: m, shapeFlag: h, transition: g, dirs: _ } = e;
		if (d = e.el = l(e.type, a, m && m.is, m), h & 8 ? p(d, e.children) : h & 16 && T(e.children, d, null, r, i, fi(e, a), s, u), _ && Cn(e, null, r, "created"), te(d, e, e.scopeId, s, r), m) {
			for (let e in m) e !== "value" && !ne(e) && c(d, e, null, m[e], a, r);
			"value" in m && c(d, "value", null, m.value, a), (f = m.onVnodeBeforeMount) && Gi(f, r, e);
		}
		_ && Cn(e, null, r, "beforeMount");
		let v = mi(i, g);
		v ? g.beforeEnter(d) : g && !g.persisted && (d[xi] = !0), o(d, t, n), ((f = m && m.onVnodeMounted) || v || _) && K(() => {
			try {
				f && Gi(f, r, e), v && g.enter(d), _ && Cn(e, null, r, "mounted");
			} finally {}
		}, i);
	}, te = (e, t, n, r, i) => {
		if (n && g(e, n), r) for (let t = 0; t < r.length; t++) g(e, r[t]);
		if (i) {
			let n = i.subTree;
			if (t === n || bi(n.type) && (n.ssContent === t || n.ssFallback === t)) {
				let t = i.vnode;
				te(e, t, t.scopeId, t.slotScopeIds, i.parent);
			}
		}
	}, T = (e, t, n, r, i, a, o, s, c = 0) => {
		for (let l = c; l < e.length; l++) {
			let c = e[l] = s ? Hi(e[l]) : X(e[l]);
			v(null, c, t, n, r, i, a, o, s);
		}
	}, re = (e, t, n, i, a, o, s) => {
		let l = t.el = e.el, { patchFlag: u, dynamicChildren: d, dirs: f } = t;
		u |= e.patchFlag & 16;
		let m = e.props || r, h = t.props || r, g;
		if (n && pi(n, !1), (g = h.onVnodeBeforeUpdate) && Gi(g, n, t, e), f && Cn(t, e, n, "beforeUpdate"), n && pi(n, !0), d && (!e.dynamicChildren || e.dynamicChildren.length !== d.length) && (u = 0, s = !1, d = null), (m.innerHTML && h.innerHTML == null || m.textContent && h.textContent == null) && p(l, ""), d ? E(e.dynamicChildren, d, l, n, i, fi(t, a), o) : s || ue(e, t, l, null, n, i, fi(t, a), o, !1), u > 0) {
			if (u & 16) ie(l, m, h, n, a);
			else if (u & 2 && m.class !== h.class && c(l, "class", null, h.class, a), u & 4 && c(l, "style", m.style, h.style, a), u & 8) {
				let e = t.dynamicProps;
				for (let t = 0; t < e.length; t++) {
					let r = e[t], i = m[r], o = h[r];
					(o !== i || r === "value") && c(l, r, i, o, a, n);
				}
			}
			u & 1 && e.children !== t.children && p(l, t.children);
		} else !s && d == null && ie(l, m, h, n, a);
		((g = h.onVnodeUpdated) || f) && K(() => {
			g && Gi(g, n, t, e), f && Cn(t, e, n, "updated");
		}, i);
	}, E = (e, t, n, r, i, a, o) => {
		for (let s = 0; s < t.length; s++) {
			let c = e[s], l = t[s], u = c.el || yi(c), d = u && (c.type === q || !Pi(c, l) || c.shapeFlag & 198) ? m(u) : n;
			v(c, l, d, null, r, i, a, o, !0);
		}
	}, ie = (e, t, n, i, a) => {
		if (t !== n) {
			if (t !== r) for (let r in t) !ne(r) && !(r in n) && c(e, r, t[r], null, a, i);
			for (let r in n) {
				if (ne(r)) continue;
				let o = n[r], s = t[r];
				o !== s && r !== "value" && c(e, r, s, o, a, i);
			}
			"value" in n && c(e, "value", t.value, n.value, a);
		}
	}, D = (e, t, n, r, i, a, s, c, l) => {
		let d = t.el = e ? e.el : u(""), f = t.anchor = e ? e.anchor : u(""), { patchFlag: p, dynamicChildren: m, slotScopeIds: h } = t;
		h && (c = c ? c.concat(h) : h), e == null ? (o(d, n, r), o(f, n, r), T(t.children || [], n, f, i, a, s, c, l)) : p > 0 && p & 64 && m && e.dynamicChildren && e.dynamicChildren.length === m.length ? (E(e.dynamicChildren, m, n, i, a, s, c), (t.key != null || i && t === i.subTree) && hi(e, t, !0)) : ue(e, t, n, f, i, a, s, c, l);
	}, ae = (e, t, n, r, i, a, o, s, c) => {
		t.slotScopeIds = s, e == null ? t.shapeFlag & 512 ? i.ctx.activate(t, n, r, o, c) : oe(t, n, r, i, a, o, c) : O(e, t, c);
	}, oe = (e, t, n, r, i, a, o) => {
		let s = e.component = Yi(e, r, i);
		if (Gn(e) && (s.ctx.renderer = xe), ra(s, !1, o), s.asyncDep) {
			if (i && i.registerDep(s, ce, o, a), !e.el) {
				let r = s.subTree = Y(wi);
				b(null, r, t, n), e.placeholder = r.el;
			}
		} else ce(s, e, t, n, i, a, o);
	}, O = (e, t, n) => {
		let r = t.component = e.component;
		if (Vr(e, t, n)) {
			if (r.asyncDep && !r.asyncResolved) {
				t.el = e.el, t.placeholder = e.placeholder, le(r, t, n);
				return;
			}
			r.next = t, r.update();
		} else t.el = e.el, t.placeholder = e.placeholder, r.vnode = t;
	}, ce = (e, t, n, r, i, a, o) => {
		let s = () => {
			if (e.isMounted) {
				let { next: t, bu: n, u: r, parent: s, vnode: c } = e;
				{
					let n = _i(e);
					if (n) {
						t && (t.el = c.el, le(e, t, o)), n.asyncDep.then(() => {
							let t = () => {
								e.job.flags & 8 || (i && i.pendingBranch ? K(t, i) : l());
							};
							t.flags = 48, K(t, i);
						});
						return;
					}
				}
				let u = t, d;
				pi(e, !1), t ? (t.el = c.el, le(e, t, o)) : t = c, n && se(n), (d = t.props && t.props.onVnodeBeforeUpdate) && Gi(d, s, t, c), pi(e, !0);
				let f = Lr(e), p = e.subTree;
				e.subTree = f, v(p, f, m(p.el || yi(p)), ye(p), e, i, a), t.el = f.el, u === null && Wr(e, f.el), r && K(r, i), (d = t.props && t.props.onVnodeUpdated) && K(() => Gi(d, s, t, c), i);
			} else {
				let o, { el: s, props: c } = t, { bm: l, m: u, parent: d, root: f, type: p } = e, m = Wn(t);
				if (pi(e, !1), l && se(l), !m && (o = c && c.onVnodeBeforeMount) && Gi(o, d, t), pi(e, !0), s && Ce) {
					let t = () => {
						e.subTree = Lr(e), Ce(s, e.subTree, e, i, null);
					};
					m && p.__asyncHydrate ? p.__asyncHydrate(s, e, t) : t();
				} else {
					f.ce && f.ce._hasShadowRoot() && f.ce._injectChildStyle(p, e.parent ? e.parent.type : void 0);
					let o = e.subTree = Lr(e);
					v(null, o, n, r, e, i, a), t.el = o.el;
				}
				if (u && K(u, i), !m && (o = c && c.onVnodeMounted)) {
					let e = t;
					K(() => Gi(o, d, e), i);
				}
				(t.shapeFlag & 256 || d && Wn(d.vnode) && d.vnode.shapeFlag & 256) && e.a && K(e.a, i), e.isMounted = !0, t = n = r = null;
			}
		};
		e.scope.on();
		let c = e.effect = new Oe(s);
		e.scope.off();
		let l = e.update = c.run.bind(c), u = e.job = c.runIfDirty.bind(c);
		u.i = e, u.id = e.uid, c.scheduler = () => dn(u), pi(e, !0), l();
	}, le = (e, t, n) => {
		t.component = e;
		let r = e.vnode.props;
		e.vnode = t, e.next = null, Yr(e, t.props, r, n), ci(e, t.children, n), N(), mn(e), P();
	}, ue = (e, t, n, r, i, a, o, s, c = !1) => {
		let l = e && e.children, u = e ? e.shapeFlag : 0, d = t.children, { patchFlag: f, shapeFlag: m } = t;
		if (f > 0) {
			if (f & 128) {
				pe(l, d, n, r, i, a, o, s, c);
				return;
			}
			if (f & 256) {
				fe(l, d, n, r, i, a, o, s, c);
				return;
			}
		}
		m & 8 ? (u & 16 && ve(l, i, a), d !== l && p(n, d)) : u & 16 ? m & 16 ? pe(l, d, n, r, i, a, o, s, c) : ve(l, i, a, !0) : (u & 8 && p(n, ""), m & 16 && T(d, n, r, i, a, o, s, c));
	}, fe = (e, t, n, r, a, o, s, c, l) => {
		e ||= i, t ||= i;
		let u = e.length, d = t.length, f = Math.min(u, d), p = 0;
		for (; p < f; p++) {
			let r = t[p] = l ? Hi(t[p]) : X(t[p]);
			v(e[p], r, n, null, a, o, s, c, l);
		}
		u > d ? ve(e, a, o, !0, !1, f) : T(t, n, r, a, o, s, c, l, f);
	}, pe = (e, t, n, r, a, o, s, c, l) => {
		let u = 0, d = t.length, f = e.length - 1, p = d - 1;
		for (; u <= f && u <= p;) {
			let r = e[u], i = t[u] = l ? Hi(t[u]) : X(t[u]);
			if (Pi(r, i)) v(r, i, n, null, a, o, s, c, l);
			else break;
			u++;
		}
		for (; u <= f && u <= p;) {
			let r = e[f], i = t[p] = l ? Hi(t[p]) : X(t[p]);
			if (Pi(r, i)) v(r, i, n, null, a, o, s, c, l);
			else break;
			f--, p--;
		}
		if (u > f) {
			if (u <= p) {
				let e = p + 1, i = e < d ? t[e].el : r;
				for (; u <= p;) v(null, t[u] = l ? Hi(t[u]) : X(t[u]), n, i, a, o, s, c, l), u++;
			}
		} else if (u > p) for (; u <= f;) k(e[u], a, o, !0), u++;
		else {
			let m = u, h = u, g = /* @__PURE__ */ new Map();
			for (u = h; u <= p; u++) {
				let e = t[u] = l ? Hi(t[u]) : X(t[u]);
				e.key != null && g.set(e.key, u);
			}
			let _, y = 0, b = p - h + 1, x = !1, S = 0, C = Array(b);
			for (u = 0; u < b; u++) C[u] = 0;
			for (u = m; u <= f; u++) {
				let r = e[u];
				if (y >= b) {
					k(r, a, o, !0);
					continue;
				}
				let i;
				if (r.key != null) i = g.get(r.key);
				else for (_ = h; _ <= p; _++) if (C[_ - h] === 0 && Pi(r, t[_])) {
					i = _;
					break;
				}
				i === void 0 ? k(r, a, o, !0) : (C[i - h] = u + 1, i >= S ? S = i : x = !0, v(r, t[i], n, null, a, o, s, c, l), y++);
			}
			let w = x ? gi(C) : i;
			for (_ = w.length - 1, u = b - 1; u >= 0; u--) {
				let e = h + u, i = t[e], f = t[e + 1], p = e + 1 < d ? f.el || yi(f) : r;
				C[u] === 0 ? v(null, i, n, p, a, o, s, c, l) : x && (_ < 0 || u !== w[_] ? me(i, n, p, 2) : _--);
			}
		}
	}, me = (e, t, n, r, i = null) => {
		let { el: a, type: c, transition: l, children: u, shapeFlag: d } = e;
		if (d & 6) me(e.component.subTree, t, n, r);
		else if (d & 128) e.suspense.move(t, n, r);
		else if (d & 64) c.move(e, t, n, xe);
		else if (c === q) {
			o(a, t, n);
			for (let e = 0; e < u.length; e++) me(u[e], t, n, r);
			o(e.anchor, t, n);
		} else if (c === Ti) S(e, t, n);
		else if (r !== 2 && d & 1 && l) {
			if (r === 0) l.persisted && !a[Pn] ? o(a, t, n) : (l.beforeEnter(a), o(a, t, n), K(() => l.enter(a), i));
			else {
				let { leave: r, delayLeave: i, afterLeave: c } = l, u = () => {
					e.ctx.isUnmounted ? s(a) : o(a, t, n);
				}, d = () => {
					let e = a._isLeaving || !!a[Pn];
					a._isLeaving && a[Pn](!0), l.persisted && !e ? u() : r(a, () => {
						u(), c && c();
					});
				};
				i ? i(a, u, d) : d();
			}
		} else o(a, t, n);
	}, k = (e, t, n, r = !1, i = !1) => {
		let { type: a, props: o, ref: s, children: c, dynamicChildren: l, shapeFlag: u, patchFlag: d, dirs: f, cacheIndex: p, memo: m } = e;
		if ((d === -2 || l && l.hasOnce) && (i = !1), s != null && (N(), Hn(s, null, n, e, !0), P()), p == null || e.ctx && e.ctx !== t || (t.renderCache[p] = void 0), u & 256 && t.ctx.deactivate(e)) return;
		let h = u & 1 && f, g = !Wn(e), _;
		if (g && (_ = o && o.onVnodeBeforeUnmount) && Gi(_, t, e), u & 6) _e(e.component, n, r);
		else {
			if (u & 128) {
				e.suspense.unmount(n, r);
				return;
			}
			h && Cn(e, null, t, "beforeUnmount"), u & 64 ? e.type.remove(e, t, n, xe, r) : l && !l.hasOnce && (a !== q || d > 0 && d & 64) ? ve(l, t, n, !1, !0) : (a === q && d & 384 || !i && u & 16) && ve(c, t, n), r && he(e);
		}
		let v = m != null && p == null;
		(g && (_ = o && o.onVnodeUnmounted) || h || v) && K(() => {
			_ && Gi(_, t, e), h && Cn(e, null, t, "unmounted"), v && (e.el = null);
		}, n);
	}, he = (e) => {
		let { type: t, el: n, anchor: r, transition: i } = e, a = t === q;
		if (a && !i) {
			ge(n, r);
			return;
		}
		if (t === Ti) {
			C(e), i && !i.persisted && i.afterLeave && i.afterLeave();
			return;
		}
		let o = a ? Rn(e) : e, c = () => {
			a ? m(n) && ge(n, r) : s(n), i && !i.persisted && i.afterLeave && i.afterLeave();
		};
		if (o && o.shapeFlag & 1 && i && !i.persisted) {
			let { leave: e, delayLeave: t } = i, n = o.el, r = () => e(n, c);
			t ? t(n, c, r) : r();
		} else c();
	}, ge = (e, t) => {
		let n;
		for (; e !== t;) n = h(e), s(e), e = n;
		s(t);
	}, _e = (e, t, n) => {
		let { bum: r, scope: i, job: a, subTree: o, um: s, m: c, a: l } = e;
		vi(c), vi(l), r && se(r), i.stop(), a ? (a.flags |= 8, k(o, e, t, n)) : o && (o.transition = e.vnode.transition, k(o, e, t, n)), s && K(s, t);
		let u = () => {
			e.isUnmounted = !0;
		};
		u.flags = 16, K(u, t);
	}, ve = (e, t, n, r = !1, i = !1, a = 0) => {
		for (let o = a; o < e.length; o++) k(e[o], t, n, r, i);
	}, ye = (e) => {
		if (e.shapeFlag & 6) return ye(e.component.subTree);
		if (e.shapeFlag & 128) return e.suspense.next();
		let t = h(e.anchor || e.el), n = t && t[Mn];
		return n ? h(n) : t;
	}, be = (e, t, n) => {
		_n(() => {
			e == null ? t._vnode && k(t._vnode, null, null, !0) : v(t._vnode || null, e, t, null, null, null, n), t._vnode = e;
		}, e && t._vnode ? void 0 : e && e.component ? e.component.uid : Ji());
	}, xe = {
		p: v,
		um: k,
		m: me,
		r: he,
		mt: oe,
		mc: T,
		pc: ue,
		pbc: E,
		n: ye,
		o: e
	}, Se, Ce;
	return t && ([Se, Ce] = t(xe)), {
		render: be,
		hydrate: Se,
		createApp: Ar(be, Se)
	};
}
function fi({ type: e, props: t }, n) {
	return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function pi({ effect: e, job: t }, n) {
	n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function mi(e, t) {
	return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function hi(e, t, n = !1) {
	let r = e.children, i = t.children;
	if (p(r) && p(i)) for (let e = 0; e < r.length; e++) {
		let t = r[e], a = i[e];
		a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[e] = Hi(i[e]), a.el = t.el), !n && a.patchFlag !== -2 && hi(t, a)), a.type === Ci && (a.patchFlag === -1 && (a = i[e] = Hi(a)), a.el = t.el), a.type === wi && !a.el && (a.el = t.el);
	}
}
function gi(e) {
	let t = e.slice(), n = [0], r, i, a, o, s, c = e.length;
	for (r = 0; r < c; r++) {
		let c = e[r];
		if (c !== 0) {
			if (i = n[n.length - 1], e[i] < c) {
				t[r] = i, n.push(r);
				continue;
			}
			for (a = 0, o = n.length - 1; a < o;) s = a + o >> 1, e[n[s]] < c ? a = s + 1 : o = s;
			c < e[n[a]] && (a > 0 && (t[r] = n[a - 1]), n[a] = r);
		}
	}
	for (a = n.length, o = n[a - 1]; a-- > 0;) n[a] = o, o = t[o];
	return n;
}
function _i(e) {
	let t = e.subTree.component;
	if (t) return t.asyncDep && !t.asyncResolved ? t : _i(t);
}
function vi(e) {
	if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
function yi(e) {
	if (e.placeholder) return e.placeholder;
	let t = e.component;
	if (t) return yi(t.subTree);
	let n = e.suspense;
	return n && n.activeBranch ? yi(n.activeBranch) : null;
}
var bi = (e) => e.__isSuspense, xi = /* @__PURE__ */ Symbol("_deferredEnter");
function Si(e, t) {
	t && t.pendingBranch ? p(e) ? t.effects.push(...e) : t.effects.push(e) : pn(e);
}
var q = /* @__PURE__ */ Symbol.for("v-fgt"), Ci = /* @__PURE__ */ Symbol.for("v-txt"), wi = /* @__PURE__ */ Symbol.for("v-cmt"), Ti = /* @__PURE__ */ Symbol.for("v-stc"), Ei = [], J = null;
function Di(e = !1) {
	Ei.push(J = e ? null : []);
}
function Oi() {
	Ei.pop(), J = Ei[Ei.length - 1] || null;
}
var ki = 1;
function Ai(e, t = !1) {
	ki += e, e < 0 && J && t && (J.hasOnce = !0);
}
function ji(e) {
	return e.dynamicChildren = ki > 0 ? J || i : null, Oi(), ki > 0 && J && J.push(e), e;
}
function Mi(e, t, n, r, i, a) {
	return ji(Li(e, t, n, r, i, a, !0));
}
function Ni(e) {
	return e ? e.__v_isVNode === !0 : !1;
}
function Pi(e, t) {
	return e.type === t.type && e.key === t.key;
}
var Fi = ({ key: e }) => e ?? null, Ii = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e == null ? null : v(e) || /* @__PURE__ */ z(e) || _(e) ? {
	i: W,
	r: e,
	k: t,
	f: !!n
} : e);
function Li(e, t = null, n = null, r = 0, i = null, a = e === q ? 0 : 1, o = !1, s = !1) {
	let c = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e,
		props: t,
		key: t && Fi(t),
		ref: t && Ii(t),
		scopeId: bn,
		slotScopeIds: null,
		children: n,
		component: null,
		suspense: null,
		ssContent: null,
		ssFallback: null,
		dirs: null,
		transition: null,
		el: null,
		anchor: null,
		target: null,
		targetStart: null,
		targetAnchor: null,
		staticCount: 0,
		shapeFlag: a,
		patchFlag: r,
		dynamicProps: i,
		dynamicChildren: null,
		appContext: null,
		ctx: W
	};
	return s ? (Ui(c, n), a & 128 && e.normalize(c)) : n && (c.shapeFlag |= v(n) ? 8 : 16), ki > 0 && !o && J && (c.patchFlag > 0 || a & 6) && c.patchFlag !== 32 && J.push(c), c;
}
var Y = Ri;
function Ri(e, t = null, n = null, r = 0, i = null, a = !1) {
	if (e && e !== cr || (e = wi), Ni(e)) {
		let r = Bi(e, t, !0);
		return n && Ui(r, n), ki > 0 && !a && J && (r.shapeFlag & 6 ? J[J.indexOf(e)] = r : J.push(r)), r.patchFlag = -2, r;
	}
	if (da(e) && (e = e.__vccOpts), t) {
		t = zi(t);
		let { class: e, style: n } = t;
		e && !v(e) && (t.class = ge(e)), b(n) && (/* @__PURE__ */ Rt(n) && !p(n) && (n = l({}, n)), t.style = fe(n));
	}
	let o = v(e) ? 1 : bi(e) ? 128 : Nn(e) ? 64 : b(e) ? 4 : _(e) ? 2 : 0;
	return Li(e, t, n, r, i, o, a, !0);
}
function zi(e) {
	return e ? /* @__PURE__ */ Rt(e) ? l({}, e) : qr(e) ? l({}, e[sa] || e) : e : null;
}
function Bi(e, t, n = !1, r = !1) {
	let { props: i, ref: a, patchFlag: o, children: s, transition: c } = e, l = t ? Wi(i || {}, t) : i, u = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e.type,
		props: l,
		key: l && Fi(l),
		ref: t && t.ref ? n && a ? p(a) ? a.concat(Ii(t)) : [a, Ii(t)] : Ii(t) : a,
		scopeId: e.scopeId,
		slotScopeIds: e.slotScopeIds,
		children: s,
		target: e.target,
		targetStart: e.targetStart,
		targetAnchor: e.targetAnchor,
		staticCount: e.staticCount,
		shapeFlag: e.shapeFlag,
		patchFlag: t && e.type !== q ? o === -1 ? 16 : o | 16 : o,
		dynamicProps: e.dynamicProps,
		dynamicChildren: e.dynamicChildren,
		appContext: e.appContext,
		dirs: e.dirs,
		transition: c,
		component: e.component,
		suspense: e.suspense,
		ssContent: e.ssContent && Bi(e.ssContent),
		ssFallback: e.ssFallback && Bi(e.ssFallback),
		placeholder: e.placeholder,
		el: e.el,
		anchor: e.anchor,
		ctx: e.ctx,
		ce: e.ce,
		cacheIndex: e.cacheIndex
	};
	return c && r && Ln(u, c.clone(u)), u;
}
function Vi(e = " ", t = 0) {
	return Y(Ci, null, e, t);
}
function X(e) {
	return e == null || typeof e == "boolean" ? Y(wi) : p(e) ? Y(q, null, e.slice()) : Ni(e) ? Hi(e) : Y(Ci, null, String(e));
}
function Hi(e) {
	return e.el === null && e.patchFlag !== -1 || e.memo ? e : Bi(e);
}
function Ui(e, t) {
	let n = 0, { shapeFlag: r } = e;
	if (t == null) t = null;
	else if (p(t)) n = 16;
	else if (typeof t == "object") {
		if (r & 65) {
			let n = t.default;
			n && (n._c && (n._d = !1), Ui(e, n()), n._c && (n._d = !0));
			return;
		}
		{
			n = 32;
			let r = t._;
			!r && !qr(t) ? t._ctx = W : r === 3 && W && (W.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
		}
	} else if (_(t)) {
		if (r & 65) {
			Ui(e, { default: t });
			return;
		}
		t = {
			default: t,
			_ctx: W
		}, n = 32;
	} else t = String(t), r & 64 ? (n = 16, t = [Vi(t)]) : n = 8;
	e.children = t, e.shapeFlag |= n;
}
function Wi(...e) {
	let t = {};
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		for (let e in r) if (e === "class") t.class !== r.class && (t.class = ge([t.class, r.class]));
		else if (e === "style") t.style = fe([t.style, r.style]);
		else if (s(e)) {
			let n = t[e], i = r[e];
			i && n !== i && !(p(n) && n.includes(i)) ? t[e] = n ? [].concat(n, i) : i : i == null && n == null && !c(e) && (t[e] = i);
		} else e !== "" && (t[e] = r[e]);
	}
	return t;
}
function Gi(e, t, n, r = null) {
	B(e, t, 7, [n, r]);
}
var Ki = /* @__PURE__ */ Or(), qi = 0;
function Ji() {
	return qi;
}
function Yi(e, t, n) {
	let i = e.type, a = (t ? t.appContext : e.appContext) || Ki, o = {
		uid: qi++,
		vnode: e,
		type: i,
		parent: t,
		appContext: a,
		root: null,
		next: null,
		subTree: null,
		effect: null,
		update: null,
		job: null,
		scope: new we(!0),
		render: null,
		proxy: null,
		exposed: null,
		exposeProxy: null,
		withProxy: null,
		provides: t ? t.provides : Object.create(a.provides),
		ids: t ? t.ids : [
			"",
			0,
			0
		],
		accessCache: null,
		renderCache: [],
		components: null,
		directives: null,
		propsOptions: $r(i, a),
		emitsOptions: Fr(i, a),
		emit: null,
		emitted: null,
		propsDefaults: r,
		inheritAttrs: i.inheritAttrs,
		ctx: r,
		data: r,
		props: r,
		attrs: r,
		slots: r,
		refs: r,
		setupState: r,
		setupContext: null,
		suspense: n,
		suspenseId: n ? n.pendingId : 0,
		asyncDep: null,
		asyncResolved: !1,
		isMounted: !1,
		isUnmounted: !1,
		isDeactivated: !1,
		bc: null,
		c: null,
		bm: null,
		m: null,
		bu: null,
		u: null,
		um: null,
		bum: null,
		da: null,
		a: null,
		rtg: null,
		rtc: null,
		ec: null,
		sp: null
	};
	return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = Nr.bind(null, o), e.ce && e.ce(o), o;
}
var Z = null, Xi = () => Z || W, Zi, Qi;
{
	let e = de(), t = (t, n) => {
		let r;
		return (r = e[t]) || (r = e[t] = []), r.push(n), (e) => {
			r.length > 1 ? r.forEach((t) => t(e)) : r[0](e);
		};
	};
	Zi = t("__VUE_INSTANCE_SETTERS__", (e) => Z = e), Qi = t("__VUE_SSR_SETTERS__", (e) => na = e);
}
var $i = (e) => {
	let t = Z;
	return Zi(e), e.scope.on(), () => {
		e.scope.off(), Zi(t);
	};
}, ea = () => {
	Z && Z.scope.off(), Zi(null);
};
function ta(e) {
	return e.vnode.shapeFlag & 4;
}
var na = !1;
function ra(e, t = !1, n = !1) {
	t && Qi(t);
	let { props: r, children: i } = e.vnode, a = ta(e);
	Jr(e, r, a, t), si(e, i, n || t);
	let o = a ? ia(e, t) : void 0;
	return t && Qi(!1), o;
}
function ia(e, t) {
	let n = e.type;
	e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, fr);
	let { setup: r } = n;
	if (r) {
		N();
		let n = e.setupContext = r.length > 1 ? la(e) : null, i = $i(e), a = tn(r, e, 0, [e.props, n]), o = x(a);
		if (P(), i(), (o || e.sp) && !Wn(e) && zn(e), o) {
			if (a.then(ea, ea), t) return a.then((n) => {
				Qi(!0);
				try {
					aa(e, n, t);
				} finally {
					Qi(!1);
				}
			}).catch((t) => {
				nn(t, e, 0, void 0, !0), e.ssrRender = (e, t) => t("<!---->");
			});
			e.asyncDep = a;
		} else aa(e, a, t);
	} else oa(e, t);
}
function aa(e, t, n) {
	_(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : b(t) && (e.setupState = Kt(t)), oa(e, n);
}
function oa(e, t, n) {
	let r = e.type;
	e.render ||= r.render || a;
	{
		let t = $i(e);
		N();
		try {
			hr(e);
		} finally {
			P(), t();
		}
	}
}
var sa = /* @__PURE__ */ Symbol(), ca = { get(e, t) {
	return F(e, "get", ""), t === sa ? e : e[t];
} };
function la(e) {
	return {
		attrs: new Proxy(e.attrs, ca),
		slots: e.slots,
		emit: e.emit,
		expose: (t) => {
			e.exposed = t || {};
		}
	};
}
function ua(e) {
	return e.exposed ? e.exposeProxy ||= new Proxy(Kt(zt(e.exposed)), {
		get(t, n) {
			if (n in t) return t[n];
			if (n in ur) return ur[n](e);
		},
		has(e, t) {
			return t in e || t in ur;
		}
	}) : e.proxy;
}
function da(e) {
	return _(e) && "__vccOpts" in e;
}
var fa = (e, t) => /* @__PURE__ */ Jt(e, t, na);
function pa(e, t, n) {
	try {
		Ai(-1);
		let r = arguments.length;
		return r === 2 ? b(t) && !p(t) ? Ni(t) ? Y(e, null, [t]) : Y(e, t) : Y(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && Ni(n) && (n = [n]), Y(e, t, n));
	} finally {
		Ai(1);
	}
}
var ma = "3.5.45", ha = void 0, ga = typeof window < "u" && window.trustedTypes;
if (ga) try {
	ha = /* @__PURE__ */ ga.createPolicy("vue", { createHTML: (e) => e });
} catch {}
var _a = ha ? (e) => ha.createHTML(e) : (e) => e, va = "http://www.w3.org/2000/svg", ya = "http://www.w3.org/1998/Math/MathML", ba = typeof document < "u" ? document : null, xa = ba && /* @__PURE__ */ ba.createElement("template"), Sa = {
	insert: (e, t, n) => {
		t.insertBefore(e, n || null);
	},
	remove: (e) => {
		let t = e.parentNode;
		t && t.removeChild(e);
	},
	createElement: (e, t, n, r) => {
		let i = t === "svg" ? ba.createElementNS(va, e) : t === "mathml" ? ba.createElementNS(ya, e) : n ? ba.createElement(e, { is: n }) : ba.createElement(e);
		return e === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple), i;
	},
	createText: (e) => ba.createTextNode(e),
	createComment: (e) => ba.createComment(e),
	setText: (e, t) => {
		e.nodeValue = t;
	},
	setElementText: (e, t) => {
		e.textContent = t;
	},
	parentNode: (e) => e.parentNode,
	nextSibling: (e) => e.nextSibling,
	querySelector: (e) => ba.querySelector(e),
	setScopeId(e, t) {
		e.setAttribute(t, "");
	},
	insertStaticContent(e, t, n, r, i, a) {
		let o = n ? n.previousSibling : t.lastChild;
		if (i && (i === a || i.nextSibling)) for (; t.insertBefore(i.cloneNode(!0), n), i !== a && (i = i.nextSibling););
		else {
			xa.innerHTML = _a(r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e);
			let i = xa.content;
			if (r === "svg" || r === "mathml") {
				let e = i.firstChild;
				for (; e.firstChild;) i.appendChild(e.firstChild);
				i.removeChild(e);
			}
			t.insertBefore(i, n);
		}
		return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
	}
}, Ca = /* @__PURE__ */ Symbol("_vtc");
function wa(e, t, n) {
	let r = e[Ca];
	r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
var Ta = /* @__PURE__ */ Symbol("_vod"), Ea = /* @__PURE__ */ Symbol("_vsh"), Da = /* @__PURE__ */ Symbol(""), Oa = /(?:^|;)\s*display\s*:/;
function ka(e, t, n) {
	let r = e.style, i = v(n), a = !1;
	if (n && !i) {
		if (t) {
			if (v(t)) for (let e of t.split(";")) {
				let t = e.slice(0, e.indexOf(":")).trim();
				n[t] ?? ja(r, t, "");
			}
			else for (let e in t) n[e] ?? ja(r, e, "");
		}
		for (let i in n) {
			i === "display" && (a = !0);
			let o = n[i];
			o == null ? ja(r, i, "") : Fa(e, i, !v(t) && t ? t[i] : void 0, o) || ja(r, i, o);
		}
	} else if (i) {
		if (t !== n) {
			let e = r[Da];
			e && (n += ";" + e), r.cssText = n, a = Oa.test(n);
		}
	} else t && e.removeAttribute("style");
	Ta in e && (i && t === n || (e[Ta] = a ? r.display : ""), e[Ea] && (r.display = "none"));
}
var Aa = /\s*!important$/;
function ja(e, t, n) {
	if (p(n)) n.forEach((n) => ja(e, t, n));
	else if (n ??= "", t.startsWith("--")) Aa.test(n) ? e.setProperty(t, n.replace(Aa, ""), "important") : e.setProperty(t, n);
	else {
		let r = Pa(e, t);
		Aa.test(n) ? e.setProperty(D(r), n.replace(Aa, ""), "important") : e[r] = n;
	}
}
var Ma = [
	"Webkit",
	"Moz",
	"ms"
], Na = {};
function Pa(e, t) {
	let n = Na[t];
	if (n) return n;
	let r = E(t);
	if (r !== "filter" && r in e) return Na[t] = r;
	r = ae(r);
	for (let n = 0; n < Ma.length; n++) {
		let i = Ma[n] + r;
		if (i in e) return Na[t] = i;
	}
	return t;
}
function Fa(e, t, n, r) {
	return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && v(r) && n === r;
}
var Ia = "http://www.w3.org/1999/xlink";
function La(e, t, n, r, i, a = _e(t)) {
	r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Ia, t.slice(6, t.length)) : e.setAttributeNS(Ia, t, n) : n == null || a && !ve(n) ? e.removeAttribute(t) : e.setAttribute(t, a ? "" : y(n) ? String(n) : n);
}
function Ra(e, t, n, r, i) {
	if (t === "innerHTML" || t === "textContent") {
		n != null && (e[t] = t === "innerHTML" ? _a(n) : n);
		return;
	}
	let a = e.tagName;
	if (t === "value" && a !== "PROGRESS" && !a.includes("-")) {
		let r = a === "OPTION" ? e.getAttribute("value") || "" : e.value, i = n == null ? e.type === "checkbox" ? "on" : "" : String(n);
		r === i && "_value" in e || (e.value = i), n ?? e.removeAttribute(t), e._value = n;
		return;
	}
	let o = !1;
	if (n === "" || n == null) {
		let r = typeof e[t];
		r === "boolean" ? n = ve(n) : n == null && r === "string" ? (n = "", o = !0) : r === "number" && (n = 0, o = !0);
	}
	try {
		e[t] = n;
	} catch {}
	o && e.removeAttribute(i || t);
}
function za(e, t, n, r) {
	e.addEventListener(t, n, r);
}
function Ba(e, t, n, r) {
	e.removeEventListener(t, n, r);
}
var Va = /* @__PURE__ */ Symbol("_vei");
function Ha(e, t, n, r, i = null) {
	let a = e[Va] || (e[Va] = {}), o = a[t];
	if (r && o) o.value = r;
	else {
		let [n, s] = Ga(t);
		r ? za(e, n, a[t] = Ya(r, i), s) : o && (Ba(e, n, o, s), a[t] = void 0);
	}
}
var Ua = /(Once|Passive|Capture)$/, Wa = /^on:?(?:Once|Passive|Capture)$/;
function Ga(e) {
	let t, n;
	for (; (n = e.match(Ua)) && !Wa.test(e);) t ||= {}, e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
	return [e[2] === ":" ? e.slice(3) : D(e.slice(2)), t];
}
var Ka = 0, qa = /* @__PURE__ */ Promise.resolve(), Ja = () => Ka ||= (qa.then(() => Ka = 0), Date.now());
function Ya(e, t) {
	let n = (e) => {
		if (!e._vts) e._vts = Date.now();
		else if (e._vts <= n.attached) return;
		let r = n.value;
		if (p(r)) {
			let n = e.stopImmediatePropagation;
			e.stopImmediatePropagation = () => {
				n.call(e), e._stopped = !0;
			};
			let i = r.slice(), a = [e];
			for (let n = 0; n < i.length && !e._stopped; n++) {
				let e = i[n];
				e && B(e, t, 5, a);
			}
		} else B(r, t, 5, [e]);
	};
	return n.value = e, n.attached = Ja(), n;
}
var Xa = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Za = (e, t, n, r, i, a) => {
	let o = i === "svg";
	t === "class" ? wa(e, r, o) : t === "style" ? ka(e, n, r) : s(t) ? c(t) || Ha(e, t, n, r, a) : (t[0] === "." ? (t = t.slice(1), 1) : t[0] === "^" ? (t = t.slice(1), 0) : Qa(e, t, r, o)) ? (Ra(e, t, r), e.tagName.includes("-") || t !== "value" && t !== "checked" && t !== "selected" || La(e, t, r, o, a, t !== "value")) : e._isVueCE && ($a(e, t) || e._def.__asyncLoader && (/[A-Z]/.test(t) || !v(r))) ? Ra(e, E(t), r, a, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), La(e, t, r, o));
};
function Qa(e, t, n, r) {
	if (r) return !!(t === "innerHTML" || t === "textContent" || t in e && Xa(t) && _(n));
	if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return !1;
	if (t === "width" || t === "height") {
		let t = e.tagName;
		if (t === "IMG" || t === "VIDEO" || t === "CANVAS" || t === "SOURCE") return !1;
	}
	return Xa(t) && v(n) ? !1 : t in e;
}
function $a(e, t) {
	let n = e._def.props;
	if (!n) return !1;
	let r = E(t);
	return Array.isArray(n) ? n.some((e) => E(e) === r) : Object.keys(n).some((e) => E(e) === r);
}
var eo = /* @__PURE__ */ l({ patchProp: Za }, Sa), to;
function no() {
	return to ||= li(eo);
}
var ro = ((...e) => {
	let t = no().createApp(...e), { mount: n } = t;
	return t.mount = (e) => {
		let r = ao(e);
		if (!r) return;
		let i = t._component;
		_(i) || i.render || i.template || (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
		let a = n(r, !1, io(r));
		return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), a;
	}, t;
});
function io(e) {
	if (e instanceof SVGElement) return "svg";
	if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
}
function ao(e) {
	return v(e) ? document.querySelector(e) : e;
}
// \0plugin-vue:export-helper
var oo = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, so = {}, co = { class: "sample-app" };
function lo(e, t) {
	return Di(), Mi("main", co, [...t[0] ||= [Li("h1", null, "Sample Application", -1), Li("p", null, " This sample demonstrates the application shell. Prefer Foundry controls and native dialogs for simple workflows; use Vue + DaisyUI when a dedicated application is needed. ", -1)]]);
}
var uo = /*#__PURE__*/ oo(so, [["render", lo]]), fo = typeof window < "u", po = Symbol(), mo;
(function(e) {
	e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(mo ||= {});
var ho = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof global == "object" && global.global === global ? global : typeof globalThis == "object" ? globalThis : { HTMLElement: null };
function go(e, { autoBom: t = !1 } = {}) {
	return t && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob(["﻿", e], { type: e.type }) : e;
}
function _o(e, t, n) {
	let r = new XMLHttpRequest();
	r.open("GET", e), r.responseType = "blob", r.onload = function() {
		So(r.response, t, n);
	}, r.onerror = function() {
		console.error("could not download file");
	}, r.send();
}
function vo(e) {
	let t = new XMLHttpRequest();
	t.open("HEAD", e, !1);
	try {
		t.send();
	} catch {}
	return t.status >= 200 && t.status <= 299;
}
function yo(e) {
	try {
		e.dispatchEvent(new MouseEvent("click"));
	} catch {
		let t = new MouseEvent("click", {
			bubbles: !0,
			cancelable: !0,
			view: window,
			detail: 0,
			screenX: 80,
			screenY: 20,
			clientX: 80,
			clientY: 20,
			ctrlKey: !1,
			altKey: !1,
			shiftKey: !1,
			metaKey: !1,
			button: 0,
			relatedTarget: null
		});
		e.dispatchEvent(t);
	}
}
var bo = typeof navigator == "object" ? navigator : { userAgent: "" }, xo = /Macintosh/.test(bo.userAgent) && /AppleWebKit/.test(bo.userAgent) && !/Safari/.test(bo.userAgent), So = fo ? typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype && !xo ? Co : "msSaveOrOpenBlob" in bo ? wo : To : () => {};
function Co(e, t = "download", n) {
	let r = document.createElement("a");
	r.download = t, r.rel = "noopener", typeof e == "string" ? (r.href = e, r.origin === location.origin ? yo(r) : vo(r.href) ? _o(e, t, n) : (r.target = "_blank", yo(r))) : (r.href = URL.createObjectURL(e), setTimeout(function() {
		URL.revokeObjectURL(r.href);
	}, 4e4), setTimeout(function() {
		yo(r);
	}, 0));
}
function wo(e, t = "download", n) {
	if (typeof e == "string") {
		if (vo(e)) _o(e, t, n);
		else {
			let t = document.createElement("a");
			t.href = e, t.target = "_blank", setTimeout(function() {
				yo(t);
			});
		}
	} else navigator.msSaveOrOpenBlob(go(e, n), t);
}
function To(e, t, n, r) {
	if (r ||= open("", "_blank"), r && (r.document.title = r.document.body.innerText = "downloading..."), typeof e == "string") return _o(e, t, n);
	let i = e.type === "application/octet-stream", a = /constructor/i.test(String(ho.HTMLElement)) || "safari" in ho, o = /CriOS\/[\d]+/.test(navigator.userAgent);
	if ((o || i && a || xo) && typeof FileReader < "u") {
		let t = new FileReader();
		t.onloadend = function() {
			let e = t.result;
			if (typeof e != "string") throw r = null, Error("Wrong reader.result type");
			e = o ? e : e.replace(/^data:[^;]*;/, "data:attachment/file;"), r ? r.location.href = e : location.assign(e), r = null;
		}, t.readAsDataURL(e);
	} else {
		let t = URL.createObjectURL(e);
		r ? r.location.assign(t) : location.href = t, r = null, setTimeout(function() {
			URL.revokeObjectURL(t);
		}, 4e4);
	}
}
var { assign: Eo } = Object;
function Do() {
	let e = Te(!0), t = e.run(() => /* @__PURE__ */ Vt({})), n = [], r = [], i = zt({
		install(e) {
			i._a = e, e.provide(po, i), e.config.globalProperties.$pinia = i, r.forEach((e) => n.push(e)), r = [];
		},
		use(e) {
			return this._a ? n.push(e) : r.push(e), this;
		},
		_p: n,
		_a: null,
		_e: e,
		_s: /* @__PURE__ */ new Map(),
		state: t
	});
	return i;
}
var { assign: Oo } = Object, ko = class {
	#e;
	#t;
	#n = /* @__PURE__ */ Nt({});
	root() {
		return this.#t || (this.#t = document.createElement("div"), this.#t.classList.add("wfrp4e-kudos-root"), this.#t.dataset.theme = "wfrp4e-kudos"), this.#t;
	}
	render(e, t, n) {
		for (let e of Object.keys(this.#n)) e in n || delete this.#n[e];
		Object.assign(this.#n, n), this.#e || (e.classList.add("wfrp4e-kudos-app"), e.replaceChildren(this.root()), this.#e = ro({ render: () => pa(t, { ...this.#n }) }), this.#e.use(Do()), this.#e.mount(this.root()));
	}
	unmount() {
		this.#e?.unmount(), this.#e = void 0, this.#t = void 0;
	}
}, Ao = class extends foundry.applications.api.ApplicationV2 {
	#e = new ko();
	getVueProps() {}
	async _renderHTML(e, t) {
		return this.#e.root();
	}
	_replaceHTML(e, t, n) {
		this.#e.render(t, this.getVueComponent(), this.getVueProps() ?? {});
	}
	_tearDown(e) {
		super._tearDown(e), this.#e.unmount();
	}
}, jo = class extends Ao {
	static DEFAULT_OPTIONS = {
		id: `${e}-sample`,
		tag: "section",
		window: {
			icon: "fa-solid fa-cube",
			resizable: !0,
			title: `${t} Sample`
		},
		position: {
			height: "auto",
			width: 480
		}
	};
	getVueComponent() {
		return uo;
	}
};
function Mo(e) {
	return typeof e == "object" && !!e && !Array.isArray(e);
}
`${e}`, `${t}`;
// src/module/foundry/importer/content.ts
var No = /* @__PURE__ */ new WeakMap();
async function Po(e, t) {
	let n = (No.get(e) ?? Promise.resolve()).catch(() => void 0).then(async () => {
		let e = globalThis.navigator?.locks;
		return e ? await e.request("foundry:folder-tidy", t) : t();
	});
	No.set(e, n);
	try {
		return await n;
	} finally {
		No.get(e) === n && No.delete(e);
	}
}
// src/module/foundry/importer/index.ts
var Fo = 6e4, Io = 60 * Fo, Lo = 5 * Fo, Ro = 144 * Io, zo = 24 * Io, Bo = "Chris G";
function Vo(e, t, n = Bo) {
	return `${n}, ${e} (${t})`;
}
function Ho(e) {
	return String(e ?? "").replace(/[<>&"'`]/g, "").replace(/\s+/g, " ").trim().slice(0, 40) || "Chris G";
}
function Uo(e) {
	let t = e.replace(/\s+/g, " ").trim();
	return !t || t.length > 200 ? null : t;
}
function Wo(e) {
	return e.reduce((e, t) => !e || t.awardedAt > e.awardedAt ? t : e, void 0);
}
function Go(e) {
	if (e.giverIsGM) return { blocked: !1 };
	let t = e.name ?? "Chris G", n = e.awards.filter((e) => !e.giverIsGM), r = Wo(n.filter((t) => t.giverUserId === e.giverUserId));
	if (r && e.now - r.awardedAt < 5184e5) {
		let n = r.awardedAt + Ro - e.now;
		return {
			blocked: !0,
			message: `You gave your last ${t} to ${r.recipientName}. You can give another in ${Zo(n)}.`
		};
	}
	let i = Wo(n);
	if (!e.endOfSession && i && e.now - i.awardedAt < 3e5) {
		let n = i.awardedAt + Lo - e.now;
		return {
			blocked: !0,
			message: `${i.giverName} just gave a ${t}. The next one can be given in ${Zo(n)}.`
		};
	}
	return { blocked: !1 };
}
function Ko(e, t) {
	return e.filter((e) => t - e.awardedAt < zo).sort((e, t) => t.awardedAt - e.awardedAt);
}
function qo(e, t) {
	let n = new Set(e.map((e) => e.id));
	return [...e, ...t.filter((e) => !n.has(e.id))];
}
function Jo(e, t) {
	let n = Math.max(Ro, zo);
	return e.filter((e) => t - e.awardedAt < n);
}
function Yo(e, t) {
	let n = e.find((e) => e.id === t)?.character?.id, r = /* @__PURE__ */ new Set(), i = [];
	for (let t of e) {
		let e = t.character;
		!t.isGM && e && (e.id === n || r.has(e.id) || (r.add(e.id), i.push({
			actorId: e.id,
			actorName: e.name,
			img: e.img,
			userId: t.id,
			userName: t.name
		})));
	}
	return i.sort((e, t) => e.actorName.localeCompare(t.actorName));
}
function Xo(e, t) {
	return `${e} ${t}${e === 1 ? "" : "s"}`;
}
function Zo(e) {
	let t = Math.max(1, Math.ceil(e / Fo));
	if (t < 60) return Xo(t, "minute");
	let n = Math.ceil(t / 60);
	if (n < 24) return Xo(n, "hour");
	let r = Math.floor(n / 24), i = n % 24;
	return i ? `${Xo(r, "day")} ${Xo(i, "hour")}` : Xo(r, "day");
}
// src/module/foundry/kudos/settings.ts
var Qo = "kudosAwards", $o = "kudosEndOfSession", es = "kudosSound", ts = "kudosName", ns = "sounds/drums.wav";
function rs() {
	if (!game) throw Error("Foundry game global is unavailable.");
	return game.settings;
}
function is(t, n) {
	rs().register(e, ts, {
		name: "Award name",
		hint: "What your table calls the award. Shown on the button, in the windows and in the XP log.",
		config: !0,
		default: Bo,
		onChange: n,
		scope: "world",
		type: String
	}), rs().register(e, Qo, {
		config: !1,
		default: [],
		scope: "world",
		type: Array
	}), rs().register(e, $o, {
		config: !1,
		default: !1,
		onChange: t,
		scope: "world",
		type: Boolean
	}), rs().register(e, es, {
		name: "Banner sound",
		hint: "Played on every player's screen when the KUDOS! banner appears, at their own interface volume. Leave empty for no sound.",
		config: !0,
		default: ns,
		filePicker: "audio",
		scope: "world",
		type: String
	});
}
function as() {
	let t = rs().get(e, Qo);
	if (!Array.isArray(t)) throw Error(`The ${e}.${Qo} setting is not a list of awards; check it before giving more ${Q()}s.`);
	return t;
}
async function os(t) {
	await rs().set(e, Qo, t);
}
function Q() {
	return Ho(rs().get(e, ts));
}
function ss() {
	return String(rs().get("wfrp4e-kudos", "kudosSound") ?? "").trim();
}
function cs() {
	return rs().get(e, $o) === !0;
}
async function ls(t) {
	await rs().set(e, $o, t);
}
// src/module/foundry/kudos/host.ts
var us = `module.${e}`;
function $() {
	if (!game) throw Error("Foundry game global is unavailable.");
	return game;
}
var ds = () => Hooks, fs = () => foundry.applications.api.DialogV2, ps = () => ui.notifications;
async function ms(e, t, n) {
	let r = globalThis.structuredClone(e.system.details.experience);
	r.total += t, r.log.push({
		reason: n,
		amount: t,
		spent: r.spent,
		total: r.total,
		type: "total"
	}), await e.update({ "system.details.experience": r });
}
async function hs(e, t, n) {
	let r = globalThis, i = r.game.i18n.format("CHAT.ExpReceived", {
		amount: String(t),
		reason: n
	});
	await r.getDocumentClass("ChatMessage").create({
		content: i,
		speaker: { alias: e.name }
	});
}
var gs = () => ui.controls;
function _s(e) {
	foundry.audio.AudioHelper.play({
		src: e,
		volume: .8,
		channel: "interface"
	}, !1);
}
var vs = (e) => foundry.utils.escapeHTML(e);
function ys() {
	return $().users.contents.map((e) => ({
		id: e.id,
		name: e.name,
		isGM: e.isGM,
		character: e.character ? {
			id: e.character.id,
			name: e.character.name,
			img: e.character.img
		} : null
	}));
}
// src/module/foundry/kudos/banner.ts
var bs = "wfrp4e-kudos-banner", xs = 3e4, Ss = 1500;
function Cs(e, t, n) {
	let r = document.createElement(e);
	return r.textContent = t, n && (r.className = n), r;
}
function ws(e) {
	document.querySelector(`.${bs}`)?.remove();
	let t = document.createElement("div");
	t.className = bs, t.setAttribute("role", "status");
	let n = () => {
		t.classList.contains("fading") || (t.classList.add("fading"), setTimeout(() => t.remove(), Ss));
	}, r = document.createElement("button");
	r.type = "button", r.className = `${bs}-close`, r.setAttribute("aria-label", "Close"), r.textContent = "✕", r.addEventListener("click", n), t.append(r, Cs("h2", "KUDOS!"), Cs("p", `${e.giverName} has given ${e.recipientName} a ${Q()} award for`), Cs("p", e.reason, `${bs}-reason`)), document.body.append(t);
	let i = ss();
	i && _s(i), setTimeout(n, xs);
}
// src/module/foundry/kudos/controls.ts
var Ts = "wfrp4e-kudos-bar", Es = null, Ds = async () => void 0;
function Os() {
	let e = document.createElement("div");
	e.className = Ts;
	let t = document.createElement("button");
	return t.type = "button", t.dataset.kudosOpen = "true", t.innerHTML = "<i class=\"fa-solid fa-award\" inert></i><span></span>", t.addEventListener("click", () => {
		t.disabled = !0, Ds().catch((e) => {
			console.error("Kudos failed.", e), ps().error(e instanceof Error ? e.message : String(e));
		}).finally(() => ks());
	}), e.append(t), e;
}
function ks() {
	if (!Es) return;
	let e = $(), t = Es.querySelector("[data-kudos-open]");
	if (t) {
		let n = t.querySelector("span");
		n && (n.textContent = `Send a ${Q()}! (Kudos!)`);
		let r = !!e.users.activeGM;
		t.disabled = !r, t.title = r ? "" : `A GM must be connected to give a ${Q()}.`;
	}
}
function As(e, t) {
	let n = e["#chat-message"];
	n && (Ds = t, Es ??= Os(), n.before(Es), ks());
}
// src/module/foundry/kudos/scene-control.ts
var js = "wfrp4eKudosBackToBack";
function Ms(e) {
	let t = e.tokens?.tools;
	t && (t[js] = {
		name: js,
		order: Object.keys(t).length,
		title: "Allow back-to-back kudos?",
		icon: "fa-solid fa-hands-clapping",
		visible: $().user.isGM,
		toggle: !0,
		active: cs(),
		onChange: (e, t) => {
			t !== cs() && ls(t).catch((e) => {
				console.error("Kudos back-to-back setting could not be saved.", e), ps().error("Allow back-to-back kudos? could not be saved; it is unchanged."), Ns();
			});
		}
	});
}
function Ns() {
	$().user.isGM && gs()?.render({ reset: !0 });
}
// src/module/foundry/kudos/dialogs.ts
var Ps = "wfrp4e-kudos-dialog";
async function Fs(e) {
	let t = null, n = e.map((e) => `<button type="button" class="wfrp4e-kudos-card" data-kudos-actor="${vs(e.actorId)}"><img src="${vs(e.img)}" alt=""><strong>${vs(e.actorName)}</strong><span>${vs(e.userName)}</span></button>`).join("");
	return await fs().wait({
		classes: [Ps],
		window: {
			title: `Send a ${Q()}!`,
			icon: "fa-solid fa-award"
		},
		position: { width: 480 },
		content: `<p>Who earned it?</p><div class="wfrp4e-kudos-gallery">${n}</div>`,
		buttons: [{
			action: "cancel",
			label: "Cancel"
		}],
		render: (n, r) => {
			for (let n of r.element.querySelectorAll("[data-kudos-actor]")) n.addEventListener("click", () => {
				t = e.find((e) => e.actorId === n.dataset.kudosActor) ?? null, r.close();
			});
		}
	}), t;
}
function Is(e) {
	return e.length ? `<ul class="wfrp4e-kudos-recent">${e.map((e) => `<li><strong>${vs(e.recipientName)}</strong> from ${vs(e.giverName)}: ${vs(e.reason)}</li>`).join("")}</ul>` : `<p><em>No ${Q()}s in the last 24 hours.</em></p>`;
}
async function Ls(e, t, n) {
	let r = await fs().wait({
		classes: [Ps],
		window: {
			title: `${Q()} for ${e.actorName}`,
			icon: "fa-solid fa-award"
		},
		position: { width: 480 },
		content: `<div class="form-group stacked"><label for="wfrp4e-kudos-reason">What for?</label><textarea id="wfrp4e-kudos-reason" name="reason" rows="3" maxlength="200" autofocus required>${vs(n)}</textarea></div><h4>${Q()}s in the last 24 hours</h4><p class="hint">Don't give a ${Q()} for something that has already earned one.</p>` + Is(t),
		buttons: [{
			action: "cancel",
			label: "Cancel"
		}, {
			action: "give",
			label: `Give ${Q()} (+5 XP)`,
			icon: "fa-solid fa-award",
			default: !0,
			callback: (e, t) => ({ reason: String(new FormData(t.form ?? void 0).get("reason") ?? "") })
		}]
	});
	return typeof r == "object" && r ? r.reason : null;
}
// src/module/foundry/kudos/award.ts
var Rs = Promise.resolve(), zs = [];
function Bs(e, t, n) {
	let r = Rs.then(() => Hs(e, t, n));
	return Rs = r.catch(() => void 0), r;
}
var Vs = (e) => ({
	ok: !1,
	error: e
});
async function Hs(e, t, n) {
	let r = $();
	if (!r.user.isActiveGM) return Vs(`Only the active GM can record a ${Q()}.`);
	let i = r.users.get(e);
	if (!i) return Vs("The giver is not a user in this world.");
	let a = Uo(String(t.reason ?? ""));
	if (!a) return Vs("Enter a reason of up to 200 characters.");
	let o = Date.now();
	if (zs.length) try {
		await os(Jo(qo(as(), zs), o)), zs = [];
	} catch (e) {
		return console.error("Earlier Kudos records still could not be saved.", e), Vs(`An earlier ${Q()} was given but never recorded, and saving it failed again. No more ${Q()}s until it is saved; the GM can check the console.`);
	}
	let s = as(), c = Go({
		awards: s,
		giverUserId: e,
		giverIsGM: i.isGM,
		endOfSession: cs(),
		now: o,
		name: Q()
	});
	if (c.blocked) return Vs(c.message);
	let l = Yo(ys(), e).find((e) => e.actorId === t.actorId);
	if (!l) return Vs("That character is not assigned to a player.");
	let u = r.actors.get(l.actorId);
	if (!u) return Vs(`${l.actorName} was not found in this world.`);
	let d = {
		id: foundry.utils.randomID(),
		giverUserId: e,
		giverName: i.name,
		giverIsGM: i.isGM,
		recipientActorId: u.id,
		recipientName: u.name,
		reason: a,
		awardedAt: o,
		...n ? { origin: n } : {}
	};
	try {
		await ms(u, 5, Vo(i.name, a, Q()));
	} catch (e) {
		return console.error("Kudos XP update failed.", e), Vs(`${u.name} could not be given the XP, so the ${Q()} was not recorded.`);
	}
	let f = [];
	try {
		await os(Jo([...s, d], o));
	} catch (e) {
		console.error("Kudos award record could not be saved.", e), zs.push(d), f.push(`${u.name} got the ${Q()} XP, but the award could not be recorded. No more ${Q()}s until it is saved; the next attempt retries it.`);
	}
	try {
		await hs(u, 5, Vo(i.name, a, Q()));
	} catch (e) {
		console.error("Kudos XP chat message failed.", e), f.push(`${u.name} got the ${Q()} XP, but its chat message could not be posted.`);
	}
	for (let e of f) ps().error(e);
	return {
		ok: !0,
		award: d,
		warnings: f
	};
}
// src/module/foundry/kudos/socket.ts
var Us = 15e3, Ws = /* @__PURE__ */ new Map(), Gs = () => void 0;
function Ks(e) {
	let t = e?.kind;
	return t === "kudos-request" || t === "kudos-result" || t === "kudos-announce";
}
function qs(e) {
	$().socket.emit(us, {
		kind: "kudos-announce",
		award: e
	}), Gs(e), ds().callAll("wfrp4e-kudos.awarded", e);
}
async function Js(e, t) {
	let n = await Bs(e, t);
	return n.ok && qs(n.award), n;
}
async function Ys(e, t) {
	if (!Ks(e)) return;
	let n = $();
	if (e.kind === "kudos-announce") Gs(e.award);
	else if (e.kind === "kudos-result") Ws.get(e.requestId)?.(e.result), Ws.delete(e.requestId);
	else if (n.user.isActiveGM) {
		let r = await Js(t, e.request).catch((e) => (console.error("Kudos award failed.", e), {
			ok: !1,
			error: `The ${Q()} could not be recorded. The GM can check the console.`
		})), i = {
			kind: "kudos-result",
			requestId: e.requestId,
			result: r
		};
		n.socket.emit(us, i, { recipients: [t] });
	}
}
function Xs(e) {
	Gs = e, $().socket.on(us, (e, t) => void Ys(e, t));
}
function Zs(e) {
	let t = $();
	if (t.user.isActiveGM) return Js(t.user.id, e);
	let n = t.users.activeGM;
	if (!n) return Promise.resolve({
		ok: !1,
		error: `A GM must be connected to give a ${Q()}.`
	});
	let r = foundry.utils.randomID();
	return new Promise((i) => {
		let a = setTimeout(() => {
			Ws.delete(r), i({
				ok: !1,
				error: "The GM's client did not respond. Try again."
			});
		}, Us);
		Ws.set(r, (e) => {
			clearTimeout(a), i(e);
		});
		let o = {
			kind: "kudos-request",
			requestId: r,
			request: e
		};
		t.socket.emit(us, o, { recipients: [n.id] });
	});
}
async function Qs(e) {
	if (!$().user.isActiveGM) return {
		ok: !1,
		error: `Only the active GM can record a ${Q()} from outside Foundry.`
	};
	let { giverUserId: t, origin: n, actorId: r, reason: i } = e;
	if (!n?.source || !n.id) return {
		ok: !1,
		error: "An outside award needs its source and ID."
	};
	let a = await Bs(t, {
		actorId: r,
		reason: i
	}, {
		source: String(n.source),
		id: String(n.id)
	});
	return a.ok && qs(a.award), a;
}
// src/module/foundry/kudos/index.ts
var $s = () => Ko(as(), Date.now());
async function ec() {
	let e = $(), t = ps(), n = Go({
		awards: as(),
		giverUserId: e.user.id,
		giverIsGM: e.user.isGM,
		endOfSession: cs(),
		now: Date.now(),
		name: Q()
	});
	if (n.blocked) return t.warn(n.message), null;
	let r = Yo(ys(), e.user.id);
	if (!r.length) return t.info(`No other player has an assigned character to receive a ${Q()}.`), null;
	let i = await Fs(r);
	if (!i) return null;
	let a = "";
	for (;;) {
		let n = await Ls(i, Ko(as(), Date.now()), a);
		if (n === null) return null;
		let r = Uo(n);
		if (r) {
			let n = await Zs({
				actorId: i.actorId,
				reason: r
			});
			if (!n.ok) t.warn(n.error);
			else if (!e.user.isActiveGM) for (let e of n.warnings) t.warn(e);
			return n;
		}
		a = n, t.warn("Enter a reason of up to 200 characters.");
	}
}
function tc() {
	Hooks.once("init", () => is(Ns, ks)), Hooks.once("ready", () => Xs(ws)), ds().on("renderChatInput", (e, t) => As(t, ec)), ds().on("userConnected", ks), ds().on("getSceneControlButtons", Ms);
}
// src/campaign/settings-presets.json
var nc = {};
// src/module/functions/settings-presets/values.ts
function rc(e) {
	return typeof e == "object" && !!e && !Array.isArray(e);
}
function ic(e, t) {
	if (Array.isArray(e) && Array.isArray(t)) return e.length === t.length && e.every((e, n) => ic(e, t[n]));
	if (rc(e) && rc(t)) {
		let n = Object.keys(e);
		return n.length === Object.keys(t).length && n.every((n) => Object.hasOwn(t, n) && ic(e[n], t[n]));
	}
	return e === t;
}
function ac(e, t = /* @__PURE__ */ new Set()) {
	if (e === null || typeof e == "boolean" || typeof e == "string" || typeof e == "number" && Number.isFinite(e)) return e;
	if (typeof e != "object" || !e) throw Error("Value cannot be represented completely in JSON");
	if (t.has(e)) throw Error("Value contains a circular reference");
	let n = new Set(t).add(e);
	if (Array.isArray(e)) return Array.from(e, (e) => ac(e, n));
	let r = Object.getPrototypeOf(e);
	if (r !== Object.prototype && r !== null) throw Error("Value is not a plain JSON object");
	if (Object.getOwnPropertySymbols(e).length) throw Error("Value contains properties JSON cannot preserve");
	return Object.fromEntries(Object.entries(e).map(([e, t]) => [e, ac(t, n)]));
}
// src/module/functions/settings-presets/sources.ts
function oc(e) {
	return Object.fromEntries(Object.entries(e).map(([e, t]) => {
		let n = e.slice(e.lastIndexOf("/") + 1);
		if (!/^[a-zA-Z0-9][a-zA-Z0-9._-]*\.json$/.test(n)) throw Error(`Invalid settings preset namespace filename: ${e}`);
		if (!t || typeof t != "object" || Array.isArray(t)) throw Error(`Settings preset ${e} must be an object of setting values.`);
		let r = Object.fromEntries(Object.entries(t).map(([t, n]) => {
			if (!t.trim()) throw Error(`Settings preset ${e} contains an empty setting key.`);
			return [t, ac(n)];
		}));
		return [n.slice(0, -5), r];
	}));
}
// src/module/functions/settings-presets/metadata.ts
function sc(e, t) {
	if (!e || typeof e != "object" || Array.isArray(e)) throw Error("Settings preset metadata must be an object.");
	return Object.fromEntries(Object.entries(e).map(([e, n]) => {
		if (!t.includes(e)) throw Error(`Metadata has no settings source: ${e}`);
		if (!n || typeof n != "object" || Array.isArray(n)) throw Error(`Invalid metadata for ${e}`);
		let r = n;
		for (let [t, n] of Object.entries(r)) if (t === "promptOnStartup" ? typeof n != "boolean" : !["title", "description"].includes(t) || typeof n != "string") throw Error(`Invalid preset metadata: ${e}.${t}`);
		return [e, r];
	}));
}
// src/module/foundry/settings/sources.ts
var cc = oc(/* #__PURE__ */ Object.assign({})), lc = sc(Object.values([nc])[0] ?? {}, Object.keys(cc));
// src/module/functions/settings-presets/wfrp.ts
function uc(e, t) {
	return t === "wfrp4e" ? [...e].sort((e, t) => Number(dc(e)) - Number(dc(t))) : [...e];
}
function dc({ namespace: e, key: t }) {
	return e === "wfrp4e" && t === "useGroupAdvantage";
}
function fc({ namespace: e, key: t }) {
	return e === "wfrp4e" && ["homebrew", "customCursor"].includes(t) || e === "wfrp4e-rnhd" && ["showClock", "syncClock"].includes(t);
}
function pc({ namespace: e, key: t, value: n }) {
	return e !== "wfrp4e" || t !== "tableSettings" || !n || typeof n != "object" ? [] : [...new Set(Object.values(n).flatMap((e) => String(e).split(",").filter(Boolean)))];
}
// src/module/foundry/settings/preset-runtime/values.ts
function mc(e, t) {
	return t instanceof foundry.abstract.DataModel ? t = t.toObject() : e.type instanceof foundry.data.fields.DataField && (t = e.type.toObject(t)), ac(t);
}
function hc(e, t) {
	let n = e.type, r = ac(t);
	if (n instanceof foundry.data.fields.DataField) r = ac(n.clean(r)), n.validate(r, {
		fallback: !1,
		strict: !0
	});
	else if (typeof n == "function" && n.prototype instanceof foundry.abstract.DataModel) r = ac(n.fromSource(r, { strict: !0 }).toObject());
	else if (n === String && typeof r != "string" || n === Number && typeof r != "number" || n === Boolean && typeof r != "boolean" || n === Array && !Array.isArray(r) || n === Object && (typeof r != "object" || !r || Array.isArray(r))) throw Error("Preset value does not match this world's setting type.");
	if (!ic(t, r)) throw Error("Preset value does not match this world's setting schema.");
}
// src/module/foundry/settings/preset-runtime/coordination.ts
function gc() {
	let e = [...game?.modules.values() ?? []].filter((e) => e.active).map((e) => e.api?.settingsPresetCoordinator).filter((e) => e?.version === 1);
	if (e.length > 1) throw Error("Multiple settings coordinators are active; disable the duplicate before applying presets.");
	return e[0];
}
function _c(e, t) {
	return gc()?.plan(e, t) ?? {
		entries: t,
		excluded: [],
		conflicts: []
	};
}
async function vc(e, t) {
	if (!game?.ready || !game.user?.isGM) throw Error("A ready GM session is required.");
	return await gc()?.resolve(e, t) ?? !0;
}
// src/module/foundry/settings/preset-runtime/engine.ts
function yc(e) {
	return e === "core" || e === game?.system.id || game?.modules.get(e)?.active === !0;
}
function bc(e, t) {
	if (!game?.ready || !game.user?.isGM) throw Error("A ready GM session is required to inspect settings presets.");
	let n = _c(e, t), r = {
		changes: [],
		unchanged: [],
		skipped: [],
		failed: [],
		conflicts: n.conflicts,
		excluded: n.excluded,
		missingTables: [],
		requiresReload: !1,
		automaticReload: !1
	};
	for (let e of n.entries) {
		let t = `${e.namespace}.${e.key}`, n = game.settings.settings?.get(t), i = yc(e.namespace) ? n ? n.scope === "world" ? void 0 : "Setting is no longer a world setting" : `${e.namespace} no longer registers this setting` : `${e.namespace} is not active in this world`;
		if (i || !n) r.skipped.push({
			id: t,
			reason: i ?? "Setting is unavailable"
		});
		else {
			try {
				hc(n, e.value);
			} catch (e) {
				r.skipped.push({
					id: t,
					reason: `Preset value no longer fits this setting: ${e instanceof Error ? e.message : String(e)}`
				});
				continue;
			}
			try {
				game.system.id === "wfrp4e" && r.missingTables.push(...pc(e).filter((e) => !(game?.collections?.get("RollTable"))?.get(e)));
				let i = mc(n, game.settings.get(e.namespace, e.key));
				if (ic(i, e.value)) {
					r.unchanged.push(t);
					continue;
				}
				r.changes.push({
					...e,
					current: i,
					label: n.name ? game.i18n.localize(n.name) : t
				}), r.requiresReload ||= !!n.requiresReload || game.system.id === "wfrp4e" && (fc(e) || dc(e)), r.automaticReload ||= game.system.id === "wfrp4e" && dc(e);
			} catch (e) {
				r.skipped.push({
					id: t,
					reason: `Could not read the current value: ${e instanceof Error ? e.message : String(e)}`
				});
			}
		}
	}
	return r.missingTables = [...new Set(r.missingTables)], r;
}
function xc(e) {
	return !!(e.failed.length || e.conflicts.length || e.missingTables.length);
}
var Sc = !1;
async function Cc(e, t) {
	if (!game?.ready || !game.user?.isGM) throw Error("A ready GM session is required to apply settings presets.");
	if (Sc) throw Error("A settings preset is already being applied.");
	Sc = !0;
	try {
		let n = bc(e, t), r = {
			...n,
			updated: [],
			blocked: xc(n),
			requiresReload: !1,
			automaticReload: !1
		};
		if (r.blocked) return r;
		for (let i of uc(n.changes, game.system.id)) {
			let n = `${i.namespace}.${i.key}`;
			try {
				if (!game.user?.isGM || !yc(i.namespace)) throw Error("Preset permissions or availability changed.");
				let a = _c(e, t), o = a.entries.find((e) => e.namespace === i.namespace && e.key === i.key);
				if (a.conflicts.length || !o || !ic(o.value, i.value)) throw Error("Preset choices changed; review the remaining settings again.");
				let s = game.settings.settings?.get(n);
				if (!s || s.scope !== "world") throw Error("World setting is unavailable.");
				if (hc(s, i.value), await game.settings.set(i.namespace, i.key, structuredClone(i.value)), r.requiresReload ||= !!s.requiresReload || game.system.id === "wfrp4e" && (fc(i) || dc(i)), r.automaticReload ||= game.system.id === "wfrp4e" && dc(i), !ic(mc(s, game.settings.get(i.namespace, i.key)), i.value)) throw Error("Foundry did not retain the complete preset value.");
				r.updated.push(n);
			} catch (e) {
				r.failed.push({
					id: n,
					reason: e instanceof Error ? e.message : String(e)
				});
				break;
			}
		}
		return r;
	} finally {
		Sc = !1;
	}
}
// src/module/foundry/settings/preset-runtime/export.ts
function wc(e, t, n = !1) {
	if (!game?.user?.isGM) throw Error("Only a GM can export settings.");
	if (!yc(e)) throw Error("The selected system or module is not active.");
	if (!/^[a-zA-Z0-9][a-zA-Z0-9._-]*$/.test(e)) throw Error("Invalid settings namespace.");
	if (!t.length) throw Error("Select at least one setting to export.");
	let r = Object.fromEntries([...new Set(t)].map((t) => {
		let r = game?.settings.settings?.get(`${e}.${t}`);
		if (!r || r.scope !== "world" || !r.config && !n) throw Error(`${e}.${t} is not an available selected world setting.`);
		try {
			return [t, mc(r, game?.settings.get(e, t))];
		} catch (n) {
			throw Error(`${e}.${t}: ${n instanceof Error ? n.message : String(n)}`, { cause: n });
		}
	}));
	return {
		namespace: e,
		filename: `${e}.json`,
		values: r
	};
}
// src/module/foundry/settings/provider.ts
function Tc() {
	return Object.entries(cc).map(([e, t]) => ({
		namespace: e,
		title: lc[e]?.title ?? e,
		...lc[e],
		entries: Object.entries(t).map(([t, n]) => ({
			namespace: e,
			key: t,
			value: n
		}))
	}));
}
function Ec(e) {
	if (e !== void 0 && !Object.hasOwn(cc, e)) throw Error(`No campaign settings source exists for ${e}.`);
	return Tc().filter((t) => e === void 0 || e === t.namespace).flatMap((e) => e.entries);
}
var Dc = {
	version: 1,
	getPresets: () => Tc().filter((e) => yc(e.namespace)),
	inspect: (t) => bc(e, Ec(t)),
	apply: async (t) => Cc(e, Ec(t)),
	resolve: async (t) => vc(e, Ec(t)),
	capture: wc
};
Dc.apply, Dc.inspect;
// src/module/foundry/api/create-package-api.ts
function Oc() {
	let e;
	return {
		awardedHook: "wfrp4e-kudos.awarded",
		awardName: Q,
		open: ec,
		request: Zs,
		recordExternal: Qs,
		recent: $s,
		async openSampleApplication() {
			await (e ??= new jo()).render({ force: !0 });
		},
		openPreviewNotice() {
			console.log("Drowsy's WFRP4e Kudos API is available.");
		}
	};
}
// src/module/foundry/api/register-package-api.ts
function kc() {
	if (!game) throw Error("Foundry game global is unavailable during module API registration.");
	let t = game.modules.get(e);
	if (!t) throw Error(`Foundry module registry entry was not found for ${e}.`);
	t.api = Oc();
}
// src/module/foundry/integrations/is-module-active.ts
function Ac(e) {
	if (typeof game > "u" || !game) throw Error("Optional module integrations require an initialized Foundry game.");
	return game.modules.get(e)?.active === !0;
}
// src/module/foundry/integrations/example-health-system/register-integration.ts
var jc = "example-health-system";
function Mc() {
	Ac(jc) && console.info("Optional health-system integration enabled. Replace this example with the target module's documented API and feature registration.");
}
// src/module/foundry/compendiums/settings.ts
var Nc = "keepCompendiumsTidy";
function Pc() {
	if (!game?.user) throw Error("Foundry user is unavailable during Compendium tidy setting registration.");
	game.settings.register(e, Nc, {
		config: game.user.isGM === !0,
		default: !1,
		hint: "Restore this module's Compendium sidebar folders and pack locations when the active GM opens the world.",
		name: `Keep ${t} Compendiums Tidy?`,
		scope: "world",
		type: Boolean
	});
}
// src/module/foundry/compendiums/merge.ts
async function Fc(e, t, n, r) {
	for (let [, n] of r.entries()) if (n.folder?.id === e.id && (await n.setFolder(t), n.folder?.id !== t.id)) throw Error(`Could not move a pack out of ${e.name}.`);
	for (let r of n.filter((t) => t.folder?.id === e.id)) if (await r.update({ folder: t.id }), r.folder?.id !== t.id) throw Error(`Could not move folder ${r.name}.`);
	if (!await e.delete({
		deleteSubfolders: !1,
		deleteContents: !1
	})) throw Error(`Could not delete empty duplicate folder ${e.name}.`);
	n.splice(n.indexOf(e), 1);
}
async function Ic(e, t, n, r) {
	for (let [e, i] of t.entries()) if (i.folder && n.has(i.folder.id) && !r.has(e) && (await i.setFolder(null), i.folder)) throw Error(`Could not move unrelated pack ${e} to the sidebar root.`);
	for (let t of e) if (t.folder && n.has(t.folder.id) && !n.has(t.id) && (await t.update({ folder: null }), t.folder)) throw Error(`Could not move unrelated folder ${t.name} to the sidebar root.`);
}
// src/module/functions/compendiums/folders.ts
function Lc(e, t) {
	return t.filter((t) => t.folder?.id === e.id);
}
function Rc(e, t) {
	let n = /* @__PURE__ */ new Set([e.id]);
	for (let r of Lc(e, t)) for (let e of Rc(r, t)) n.add(e);
	return n;
}
function zc(e, t) {
	let n = new Set(e.packs.map((e) => `${t}.${e}`));
	for (let r of e.folders) for (let e of zc(r, t)) n.add(e);
	return n;
}
function Bc(e, t, n, r) {
	let i = Rc(e, t), a = !1;
	for (let [e, t] of n.entries()) t.folder && i.has(t.folder.id) && r.has(e) && (a = !0);
	return a;
}
function Vc(e) {
	let t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set();
	function r(e, i) {
		let a = `${i}/${e.name}`;
		if (t.has(a)) throw Error(`Duplicate Compendium folder declaration: ${a}`);
		t.add(a);
		for (let t of e.packs) {
			if (n.has(t)) throw Error(`Duplicate Compendium pack declaration: ${t}`);
			n.add(t);
		}
		for (let t of e.folders) r(t, a);
	}
	for (let t of e) r(t, "");
}
// src/module/foundry/compendiums/tidy.ts
async function Hc(e, t) {
	await Po(e, () => Uc(e, t));
}
async function Uc(t, n) {
	if (t.user.isGM !== !0 || t.user.isActiveGM !== !0) return;
	let r = t.modules.get(e);
	if (!r) throw Error(`Foundry module registry entry was not found for ${e}.`);
	let i = Array.from(r.packFolders ?? []);
	if (Vc(i), i.length === 0) return;
	for (let n of i) for (let r of zc(n, e)) if (!t.packs.has(r)) throw Error(`Declared Compendium ${r} was not found.`);
	let a = Array.from(t.folders).filter((e) => e.type === "Compendium"), o = /* @__PURE__ */ new Set();
	async function s(r, i) {
		let c = zc(r, e), l = a.filter((e) => e.name === r.name && !o.has(e.id) && (!i || !Rc(e, a).has(i.id))).sort((e, n) => Number(Bc(n, a, t.packs, c)) - Number(Bc(e, a, t.packs, c)) || e.id.localeCompare(n.id)), u = l.find((e) => (e.folder?.id ?? null) === (i?.id ?? null));
		if (!u) {
			if (u = l.find((e) => Bc(e, a, t.packs, c) && (!i || !Rc(e, a).has(i.id))), u) {
				if (i && Rc(u, a).has(i.id)) throw Error(`Moving ${r.name} under ${i.name} would make a folder cycle.`);
				let e = i?.id ?? null;
				if (await u.update({ folder: e }) === void 0 && (u.folder?.id ?? null) !== e) throw Error(`Could not move Compendium folder ${r.name}; the update was not applied.`);
			} else {
				if (u = await n({
					name: r.name,
					type: "Compendium",
					folder: i?.id ?? null,
					sorting: r.sorting,
					...r.color ? { color: r.color } : {}
				}), !u) throw Error(`Could not create Compendium folder ${r.name}.`);
				a.push(u);
			}
		}
		o.add(u.id);
		for (let e of l) if (e.id !== u.id && ((e.folder?.id ?? null) === (i?.id ?? null) || Bc(e, a, t.packs, c))) {
			if (Rc(e, a).has(u.id)) throw Error(`Cannot merge ancestor folder ${e.name} into its descendant.`);
			await Fc(e, u, a, t.packs);
		}
		let d = {};
		if (u.sorting !== r.sorting && (d.sorting = r.sorting), r.color !== void 0 && u.color !== r.color && (d.color = r.color), Object.keys(d).length > 0 && await u.update(d) === void 0 && (u.sorting !== r.sorting || r.color !== void 0 && u.color !== r.color)) throw Error(`Could not configure Compendium folder ${r.name}; the update was not applied.`);
		for (let n of r.packs) {
			let r = `${e}.${n}`, i = t.packs.get(r);
			if (!i) throw Error(`Declared Compendium ${r} was not found.`);
			i.folder?.id !== u.id && await i.setFolder(u);
		}
		for (let e of r.folders) await s(e, u);
	}
	for (let e of i) await s(e, null);
	let c = new Set(i.flatMap((t) => [...zc(t, e)]));
	await Ic(a, t.packs, o, c);
}
async function Wc() {
	game?.user.isGM && game.user.isActiveGM && game.settings.get("wfrp4e-kudos", "keepCompendiumsTidy") === !0 && await Hc(game, (e) => CONFIG.Folder.documentClass.create(e));
}
// src/module/functions/imported-content/folders.ts
function Gc(e, t, n, r) {
	let i = new Map(e.map((e) => [e.id, e])), a = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Set();
	function s(e) {
		if (e === null) return [];
		let t = a.get(e);
		if (t) return t;
		let n = i.get(e);
		if (!n) return [];
		if (o.has(e)) throw Error(`Cycle in world folder ancestry at ${e}.`);
		o.add(e);
		let r = [...s(n.folder?.id ?? null), n];
		return o.delete(e), a.set(e, r), r;
	}
	let c = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Set();
	for (let e of t) for (let t of s(e.folderId)) (e.imported ? c : l).add(t.id);
	let u = /* @__PURE__ */ new Map();
	for (let t of e) {
		let e = s(t.id);
		for (let r of e) u.set(r.id, Math.max(u.get(r.id) ?? 0, e.length)), c.has(t.id) && t.id !== n || l.add(r.id);
	}
	let d = /* @__PURE__ */ new Map(), f = [];
	for (let e of t) {
		if (!e.imported) continue;
		let t = s(e.folderId);
		if (t.some(({ id: e }) => e === n)) continue;
		let i = t.findIndex(({ id: e }) => !l.has(e) && (u.get(e) ?? 0) < r);
		i === -1 ? f.push({
			id: e.id,
			path: t
		}) : d.set(t[i], t.slice(0, i));
	}
	return {
		branches: d,
		documents: f
	};
}
// src/module/functions/imported-content/source.ts
function Kc(e, t) {
	return typeof e == "string" && e.startsWith(`Compendium.${t}.`);
}
function qc(e, t) {
	let n = e._stats?.compendiumSource;
	if (n?.startsWith("Compendium.")) return Kc(n, t);
	let r = e.flags?.core;
	return Kc(r?.sourceId, t);
}
// src/module/foundry/imported-content/settings.ts
var Jc = "keepImportedContentTidy";
function Yc(n) {
	game?.settings.register(e, Jc, {
		config: game.user.isGM === !0,
		default: !1,
		hint: "Group this module's imported documents under a module folder in each world directory.",
		name: `Keep ${t} Imported Content Tidy?`,
		onChange: n,
		scope: "world",
		type: Boolean
	});
}
// src/module/foundry/imported-content/tidy.ts
var Xc = "importedContentRoot";
function Zc(e) {
	return e?.ready === !0 && e.user.isGM === !0 && e.user.isActiveGM === !0 && e.settings.get("wfrp4e-kudos", "keepImportedContentTidy") === !0;
}
function Qc(t) {
	return t.flags?.[e]?.[Xc] === !0;
}
async function $c(e, t) {
	let n = t?.id ?? null;
	if ((e.folder?.id ?? null) !== n && (await e.update({ folder: n }), (e.folder?.id ?? null) !== n)) throw Error(`Could not move ${e.name}.`);
}
async function el(t, n) {
	let r = (t.collections.get(n)?.contents ?? []).filter((e) => !e.pack && !e.parent), i = new Map(r.map((e) => [e.id, e])), a = r.map((t) => ({
		id: t.id,
		folderId: t.folder?.id ?? null,
		imported: qc(t, e)
	}));
	if (!a.some((e) => e.imported)) return;
	let o = [...t.folders].filter((e) => e.type === n), s = o.filter(Qc), c = s.find((e) => !e.folder) ?? s[0];
	c?.folder && await $c(c, null);
	let l = CONST.FOLDER_MAX_DEPTH, u = Gc(o, a, c?.id, l);
	if (!u.branches.size && !u.documents.length) return;
	async function d(e) {
		let t = await CONFIG.Folder.documentClass.create({
			type: n,
			...e
		});
		if (!t) throw Error(`Could not create ${n} folder ${String(e.name)}.`);
		return o.push(t), t;
	}
	let f = c ?? await d({
		name: "Drowsy's WFRP4e Kudos",
		sorting: "a",
		flags: { "wfrp4e-kudos": { [Xc]: !0 } }
	});
	async function p(e) {
		let t = f, n = Math.min(e.length, l - 1);
		for (let r = 0; r < n; r++) {
			let n = e[r], i = r === l - 2 ? e.slice(r).map((e) => e.name).join("/") : n.name;
			t = o.find((e) => e.folder?.id === t.id && e.name === i) ?? await d({
				name: i,
				folder: t.id,
				sorting: n.sorting,
				color: n.color?.toString() ?? null
			});
		}
		return t;
	}
	for (let [e, t] of u.branches) await $c(e, await p(t));
	for (let { id: e, path: t } of u.documents) await $c(i.get(e), await p(t));
}
async function tl() {
	let e = game;
	e && Zc(e) && await Po(e, async () => {
		if (Zc(e)) for (let t of CONST.FOLDER_DOCUMENT_TYPES) t !== "Compendium" && await el(e, t);
	});
}
// src/module/hooks/imported-content.ts
var nl, rl = !1, il = !1;
function al() {
	Zc(game) && (rl ? il = !0 : (clearTimeout(nl), nl = setTimeout(() => void ol(), 1e3)));
}
async function ol() {
	rl = !0, il = !1;
	try {
		await tl();
	} catch (e) {
		console.error(`${t}: Imported content cleanup failed.`, e), ui.notifications.error(`${t}: Imported content cleanup failed. See the console for details.`, {
			permanent: !0,
			console: !1
		});
	} finally {
		rl = !1, il && al();
	}
}
function sl(e) {
	!e.pack && !e.parent && qc(e, "wfrp4e-kudos") && al();
}
function cl() {
	Hooks.once("setup", () => Yc(al)), Hooks.once("ready", al), Hooks.on("userConnected", al), Hooks.on("updateUser", al);
	for (let e of CONST.FOLDER_DOCUMENT_TYPES) e !== "Compendium" && (Hooks.on(`create${e}`, sl), Hooks.on(`update${e}`, (e, t) => {
		Object.hasOwn(t, "folder") && sl(e);
	}));
	Hooks.on("updateFolder", (e, t) => {
		e.type !== "Compendium" && !e.pack && Object.hasOwn(t, "folder") && al();
	}), Hooks.on("deleteFolder", (e) => {
		e.type !== "Compendium" && !e.pack && al();
	}), Hooks.on("preImportAdventure", (e, t, n, r) => {
		if (Kc(e.uuid, "wfrp4e-kudos")) for (let t of CONST.FOLDER_DOCUMENT_TYPES) for (let i of [...n[t] ?? [], ...r[t] ?? []]) {
			let t = i._stats;
			i._stats = {
				...Mo(t) ? t : {},
				compendiumSource: e.uuid
			};
		}
	}), Hooks.on("importAdventure", al);
}
foundry.applications.api.ApplicationV2, Promise.resolve();
// src/module/init/register-hooks.ts
function ll() {
	tc(), Hooks.once("init", kc), Hooks.once("setup", Pc), cl(), Hooks.once("ready", async () => {
		Mc();
		try {
			await Wc();
		} catch (e) {
			console.error("Compendium sidebar tidy-up failed.", e), ui.notifications.error(`${t}: Compendium cleanup failed and may be incomplete. See the console for details.`, {
				permanent: !0,
				console: !1
			});
		}
	});
}
// src/module/init/index.ts
ll();
