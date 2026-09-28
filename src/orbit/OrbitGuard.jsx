// @ts-nocheck
/* eslint-disable */
const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = ["assets/vision_bundle-D6tGcwpa.js", "assets/index-BSKqiZZw.js"]),
) => i.map((i) => d[i]);
import * as ReactNS from "react";
import * as JSXRT from "react/jsx-runtime";
import wasmAsset from "./vision_wasm.asset.json";
const e = (m) => m, n = () => ReactNS, t = () => JSXRT, r = (f) => f();
var i = e(n(), 1),
  a = [
    {
      id: `MAIN_BOX`,
      label: `MAIN BOX`,
      tone: `neutral`,
      x: 0.34,
      y: 0.08,
      w: 0.32,
      h: 0.34,
    },
    {
      id: `ZONE_A`,
      label: `ZONE A`,
      tone: `red`,
      x: 0.05,
      y: 0.56,
      w: 0.26,
      h: 0.34,
    },
    {
      id: `ZONE_B`,
      label: `ZONE B`,
      tone: `yellow`,
      x: 0.69,
      y: 0.56,
      w: 0.26,
      h: 0.34,
    },
    {
      id: `ZONE_C`,
      label: `ZONE C`,
      tone: `green`,
      x: 0.37,
      y: 0.56,
      w: 0.26,
      h: 0.34,
    },
  ],
  o = [
    {
      id: `EXP-001`,
      name: `Payload Assembly Experiment`,
      description: `Sort two payload samples into their assigned rack zones.`,
      estimatedDurationMs: 9e4,
      steps: [
        {
          id: `APPROACH`,
          label: `Approach payload rack`,
          voice: `Approach the payload rack.`,
          zone: `ANY`,
          dwellMs: 900,
          hint: `Bring a hand into the camera frame`,
        },
        {
          id: `OPEN_MAIN_BOX`,
          label: `Open main box`,
          voice: `Open the main box.`,
          zone: `MAIN_BOX`,
          dwellMs: 1400,
          hint: `Hold your hand over the MAIN BOX zone`,
        },
        {
          id: `PICK_RED`,
          label: `Pick red sample`,
          voice: `Pick the red sample.`,
          zone: `MAIN_BOX`,
          dwellMs: 1200,
          hint: `Reach into the MAIN BOX zone`,
        },
        {
          id: `PLACE_RED`,
          label: `Place red in Zone A`,
          voice: `Place the red sample in zone A.`,
          zone: `ZONE_A`,
          dwellMs: 1200,
          hint: `Move your hand to ZONE A`,
        },
        {
          id: `PICK_YELLOW`,
          label: `Pick yellow sample`,
          voice: `Pick the yellow sample.`,
          zone: `MAIN_BOX`,
          dwellMs: 1200,
          hint: `Reach into the MAIN BOX zone`,
        },
        {
          id: `PLACE_YELLOW`,
          label: `Place yellow in Zone B`,
          voice: `Place the yellow sample in zone B.`,
          zone: `ZONE_B`,
          dwellMs: 1200,
          hint: `Move your hand to ZONE B`,
        },
        {
          id: `CLOSE_MAIN_BOX`,
          label: `Close main box`,
          voice: `Close the main box.`,
          zone: `MAIN_BOX`,
          dwellMs: 1400,
          hint: `Hold your hand over the MAIN BOX zone`,
        },
      ],
    },
    {
      id: `EXP-002`,
      name: `Sample Collection`,
      description: `Collect, isolate, and secure a red sample using the fixed payload rack.`,
      estimatedDurationMs: 6e4,
      steps: [
        {
          id: `APPROACH`,
          label: `Approach sample rack`,
          voice: `Approach the sample rack.`,
          zone: `ANY`,
          dwellMs: 900,
          hint: `Bring a hand into the camera frame`,
        },
        {
          id: `OPEN_MAIN_BOX`,
          label: `Open collection case`,
          voice: `Open the collection case.`,
          zone: `MAIN_BOX`,
          dwellMs: 1400,
          hint: `Hold your hand over the MAIN BOX zone`,
        },
        {
          id: `PICK_RED`,
          label: `Collect red specimen`,
          voice: `Collect the red specimen.`,
          zone: `MAIN_BOX`,
          dwellMs: 1200,
          hint: `Pinch the red specimen inside MAIN BOX`,
        },
        {
          id: `PLACE_RED`,
          label: `Isolate specimen in Zone A`,
          voice: `Isolate the specimen in zone A.`,
          zone: `ZONE_A`,
          dwellMs: 1200,
          hint: `Move the specimen into ZONE A`,
        },
        {
          id: `CLOSE_MAIN_BOX`,
          label: `Seal collection case`,
          voice: `Seal the collection case.`,
          zone: `MAIN_BOX`,
          dwellMs: 1400,
          hint: `Hold your hand over MAIN BOX`,
        },
      ],
    },
    {
      id: `EXP-003`,
      name: `Equipment Inspection`,
      description: `Verify the rack, both sample bays, and the main enclosure in sequence.`,
      estimatedDurationMs: 75e3,
      steps: [
        {
          id: `APPROACH`,
          label: `Enter inspection position`,
          voice: `Enter inspection position.`,
          zone: `ANY`,
          dwellMs: 900,
          hint: `Stand inside the camera frame`,
        },
        {
          id: `INSPECT_A`,
          label: `Inspect Zone A`,
          voice: `Inspect zone A.`,
          zone: `ZONE_A`,
          dwellMs: 1300,
          hint: `Hold a hand over ZONE A`,
        },
        {
          id: `INSPECT_MAIN`,
          label: `Inspect main enclosure`,
          voice: `Inspect the main enclosure.`,
          zone: `MAIN_BOX`,
          dwellMs: 1300,
          hint: `Hold a hand over MAIN BOX`,
        },
        {
          id: `INSPECT_B`,
          label: `Inspect Zone B`,
          voice: `Inspect zone B.`,
          zone: `ZONE_B`,
          dwellMs: 1300,
          hint: `Hold a hand over ZONE B`,
        },
        {
          id: `SIGN_OFF`,
          label: `Complete inspection sign-off`,
          voice: `Complete inspection sign-off.`,
          zone: `ANY`,
          dwellMs: 1e3,
          hint: `Return both hands to free space`,
        },
      ],
    },
  ];
function s(e) {
  let t = (t) => e.includes(t);
  return {
    red: t(`PLACE_RED`)
      ? { location: `Zone A`, status: `Completed` }
      : t(`PICK_RED`)
        ? { location: `Astronaut hand`, status: `Picked` }
        : { location: `Main box`, status: `Not processed` },
    yellow: t(`PLACE_YELLOW`)
      ? { location: `Zone B`, status: `Completed` }
      : t(`PICK_YELLOW`)
        ? { location: `Astronaut hand`, status: `Picked` }
        : { location: `Main box`, status: `Not processed` },
    box: t(`CLOSE_MAIN_BOX`)
      ? `Closed`
      : t(`OPEN_MAIN_BOX`)
        ? `Open`
        : `Closed`,
  };
}
function c(e, t) {
  let n = [`Return hand away from ${t.replace(`_`, ` `)}`];
  return (
    e.id.startsWith(`PLACE`)
      ? n.push(`Complete ${e.label.toLowerCase()}`)
      : n.push(`Perform ${e.label.toLowerCase()}`),
    n.push(`Continue experiment sequence`),
    n
  );
}
function l(e) {
  let t = Math.floor(e / 1e3);
  return `${String(Math.floor(t / 3600)).padStart(2, `0`)}:${String(Math.floor((t % 3600) / 60)).padStart(2, `0`)}:${String(t % 60).padStart(2, `0`)}`;
}
function u(e, t, n, r = o[0]) {
  let i = [
    `MISSION ID: ${r.id}`,
    `EXPERIMENT: ${r.name}`,
    `DATE: ${new Date().toLocaleDateString(`en-GB`)}`,
    `SYSTEM: ORBIT-GUARD / ONBOARD EXPERIMENT GUARDIAN`,
    ``,
  ];
  for (let t of e)
    (i.push(`${l(t.t)}  ${t.action}`),
      i.push(`STATUS: ${t.status}${t.detail ? ` — ${t.detail}` : ``}`),
      i.push(``));
  return (
    i.push(
      `EXPERIMENT STATUS: ${t.length === r.steps.length ? `COMPLETED` : `IN PROGRESS`}`,
    ),
    i.push(`SEQUENCE ERRORS: ${n}`),
    i.join(`
`)
  );
}
var d = Object.defineProperty,
  f = (e, t) => d(e, `name`, { value: t, configurable: !0 });
function p(e, t) {
  if (typeof e == `function`) return e(t);
  e != null && (e.current = t);
}
f(p, `setRef`);
function m(...e) {
  return (t) => {
    let n = !1,
      r = e.map((e) => {
        let r = p(e, t);
        return (!n && typeof r == `function` && (n = !0), r);
      });
    if (n)
      return () => {
        for (let t = 0; t < r.length; t++) {
          let n = r[t];
          typeof n == `function` ? n() : p(e[t], null);
        }
      };
  };
}
f(m, `composeRefs`);
function h(...e) {
  return i.useCallback(m(...e), e);
}
f(h, `useComposedRefs`);
var g = Object.defineProperty,
  _ = (e, t) => g(e, `name`, { value: t, configurable: !0 });
function v(e) {
  let t = i.forwardRef((t, n) => {
    let { children: r, ...a } = t,
      o = null,
      s = !1,
      c = [];
    (E(r) && typeof O == `function` && (r = O(r._payload)),
      i.Children.forEach(r, (e) => {
        if (w(e)) {
          s = !0;
          let t = e,
            n = `child` in t.props ? t.props.child : t.props.children;
          (E(n) && typeof O == `function` && (n = O(n._payload)),
            (o = S(t, n)),
            c.push(o?.props?.children));
        } else c.push(e);
      }),
      o
        ? (o = i.cloneElement(o, void 0, c))
        : !s && i.Children.count(r) === 1 && i.isValidElement(r) && (o = r));
    let l = o ? C(o) : void 0,
      u = h(n, l);
    if (!o) {
      if (r || r === 0) throw Error(s ? ne(e) : D(e));
      return r;
    }
    let d = ee(a, o.props ?? {});
    return (o.type !== i.Fragment && (d.ref = n ? u : l), i.cloneElement(o, d));
  });
  return ((t.displayName = `${e}.Slot`), t);
}
_(v, `createSlot`);
var y = v(`Slot`),
  b = Symbol.for(`radix.slottable`);
function x(e) {
  let t = _(
    (e) => (`child` in e ? e.children(e.child) : e.children),
    `Slottable`,
  );
  return ((t.displayName = `${e}.Slottable`), (t.__radixId = b), t);
}
_(x, `createSlottable`);
var S = _((e, t) => {
  if (`child` in e.props) {
    let t = e.props.child;
    return i.isValidElement(t)
      ? i.cloneElement(t, void 0, e.props.children(t.props.children))
      : null;
  }
  return i.isValidElement(t) ? t : null;
}, `getSlottableElementFromSlottable`);
function ee(e, t) {
  let n = { ...t };
  for (let r in t) {
    let i = e[r],
      a = t[r];
    /^on[A-Z]/.test(r)
      ? i && a
        ? (n[r] = (...e) => {
            let t = a(...e);
            return (i(...e), t);
          })
        : i && (n[r] = i)
      : r === `style`
        ? (n[r] = { ...i, ...a })
        : r === `className` && (n[r] = [i, a].filter(Boolean).join(` `));
  }
  return { ...e, ...n };
}
_(ee, `mergeProps`);
function C(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, `ref`)?.get,
    n = t && `isReactWarning` in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t = Object.getOwnPropertyDescriptor(e, `ref`)?.get),
      (n = t && `isReactWarning` in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
_(C, `getElementRef`);
function w(e) {
  return (
    i.isValidElement(e) &&
    typeof e.type == `function` &&
    `__radixId` in e.type &&
    e.type.__radixId === b
  );
}
_(w, `isSlottable`);
var T = Symbol.for(`react.lazy`);
function E(e) {
  return (
    typeof e == `object` &&
    !!e &&
    `$$typeof` in e &&
    e.$$typeof === T &&
    `_payload` in e &&
    te(e._payload)
  );
}
_(E, `isLazyComponent`);
function te(e) {
  return typeof e == `object` && !!e && `then` in e;
}
_(te, `isPromiseLike`);
var D = _(
    (e) =>
      `${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,
    `createSlotError`,
  ),
  ne = _(
    (e) =>
      `${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,
    `createSlottableError`,
  ),
  O = i.use;
function k(e) {
  var t,
    n,
    r = ``;
  if (typeof e == `string` || typeof e == `number`) r += e;
  else if (typeof e == `object`)
    if (Array.isArray(e)) {
      var i = e.length;
      for (t = 0; t < i; t++)
        e[t] && (n = k(e[t])) && (r && (r += ` `), (r += n));
    } else for (n in e) e[n] && (r && (r += ` `), (r += n));
  return r;
}
function A() {
  for (var e, t, n = 0, r = ``, i = arguments.length; n < i; n++)
    (e = arguments[n]) && (t = k(e)) && (r && (r += ` `), (r += t));
  return r;
}
var re = (e) => (typeof e == `boolean` ? `${e}` : e === 0 ? `0` : e),
  ie = A,
  j = (e, t) => (n) => {
    if (t?.variants == null) return ie(e, n?.class, n?.className);
    let { variants: r, defaultVariants: i } = t,
      a = Object.keys(r).map((e) => {
        let t = n?.[e],
          a = i?.[e];
        if (t === null) return null;
        let o = re(t) || re(a);
        return r[e][o];
      }),
      o =
        n &&
        Object.entries(n).reduce((e, t) => {
          let [n, r] = t;
          return (r === void 0 || (e[n] = r), e);
        }, {});
    return ie(
      e,
      a,
      t?.compoundVariants?.reduce((e, t) => {
        let { class: n, className: r, ...a } = t;
        return Object.entries(a).every((e) => {
          let [t, n] = e;
          return Array.isArray(n)
            ? n.includes({ ...i, ...o }[t])
            : { ...i, ...o }[t] === n;
        })
          ? [...e, n, r]
          : e;
      }, []),
      n?.class,
      n?.className,
    );
  },
  ae = (e, t) => {
    let n = Array(e.length + t.length);
    for (let t = 0; t < e.length; t++) n[t] = e[t];
    for (let r = 0; r < t.length; r++) n[e.length + r] = t[r];
    return n;
  },
  oe = (e, t) => ({ classGroupId: e, validator: t }),
  se = (e = new Map(), t = null, n) => ({
    nextPart: e,
    validators: t,
    classGroupId: n,
  }),
  M = `-`,
  N = [],
  P = `arbitrary..`,
  F = (e) => {
    let t = le(e),
      { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
    return {
      getClassGroupId: (e) => {
        if (e.startsWith(`[`) && e.endsWith(`]`)) return I(e);
        let n = e.split(M);
        return ce(n, +(n[0] === `` && n.length > 1), t);
      },
      getConflictingClassGroupIds: (e, t) => {
        if (t) {
          let t = r[e],
            i = n[e];
          return t ? (i ? ae(i, t) : t) : i || N;
        }
        return n[e] || N;
      },
    };
  },
  ce = (e, t, n) => {
    if (e.length - t === 0) return n.classGroupId;
    let r = e[t],
      i = n.nextPart.get(r);
    if (i) {
      let n = ce(e, t + 1, i);
      if (n) return n;
    }
    let a = n.validators;
    if (a === null) return;
    let o = t === 0 ? e.join(M) : e.slice(t).join(M),
      s = a.length;
    for (let e = 0; e < s; e++) {
      let t = a[e];
      if (t.validator(o)) return t.classGroupId;
    }
  },
  I = (e) =>
    e.slice(1, -1).indexOf(`:`) === -1
      ? void 0
      : (() => {
          let t = e.slice(1, -1),
            n = t.indexOf(`:`),
            r = t.slice(0, n);
          return r ? P + r : void 0;
        })(),
  le = (e) => {
    let { theme: t, classGroups: n } = e;
    return ue(n, t);
  },
  ue = (e, t) => {
    let n = se();
    for (let r in e) {
      let i = e[r];
      L(i, n, r, t);
    }
    return n;
  },
  L = (e, t, n, r) => {
    let i = e.length;
    for (let a = 0; a < i; a++) {
      let i = e[a];
      de(i, t, n, r);
    }
  },
  de = (e, t, n, r) => {
    if (typeof e == `string`) {
      fe(e, t, n);
      return;
    }
    if (typeof e == `function`) {
      R(e, t, n, r);
      return;
    }
    pe(e, t, n, r);
  },
  fe = (e, t, n) => {
    let r = e === `` ? t : me(t, e);
    r.classGroupId = n;
  },
  R = (e, t, n, r) => {
    if (he(e)) {
      L(e(r), t, n, r);
      return;
    }
    (t.validators === null && (t.validators = []), t.validators.push(oe(n, e)));
  },
  pe = (e, t, n, r) => {
    let i = Object.entries(e),
      a = i.length;
    for (let e = 0; e < a; e++) {
      let [a, o] = i[e];
      L(o, me(t, a), n, r);
    }
  },
  me = (e, t) => {
    let n = e,
      r = t.split(M),
      i = r.length;
    for (let e = 0; e < i; e++) {
      let t = r[e],
        i = n.nextPart.get(t);
      (i || ((i = se()), n.nextPart.set(t, i)), (n = i));
    }
    return n;
  },
  he = (e) => `isThemeGetter` in e && e.isThemeGetter === !0,
  ge = (e) => {
    if (e < 1) return { get: () => void 0, set: () => {} };
    let t = 0,
      n = Object.create(null),
      r = Object.create(null),
      i = (i, a) => {
        ((n[i] = a),
          t++,
          t > e && ((t = 0), (r = n), (n = Object.create(null))));
      };
    return {
      get(e) {
        let t = n[e];
        if (t !== void 0) return t;
        if ((t = r[e]) !== void 0) return (i(e, t), t);
      },
      set(e, t) {
        e in n ? (n[e] = t) : i(e, t);
      },
    };
  },
  z = `!`,
  _e = `:`,
  B = [],
  V = (e, t, n, r, i) => ({
    modifiers: e,
    hasImportantModifier: t,
    baseClassName: n,
    maybePostfixModifierPosition: r,
    isExternal: i,
  }),
  H = (e) => {
    let { prefix: t, experimentalParseClassName: n } = e,
      r = (e) => {
        let t = [],
          n = 0,
          r = 0,
          i = 0,
          a,
          o = e.length;
        for (let s = 0; s < o; s++) {
          let o = e[s];
          if (n === 0 && r === 0) {
            if (o === _e) {
              (t.push(e.slice(i, s)), (i = s + 1));
              continue;
            }
            if (o === `/`) {
              a = s;
              continue;
            }
          }
          o === `[`
            ? n++
            : o === `]`
              ? n--
              : o === `(`
                ? r++
                : o === `)` && r--;
        }
        let s = t.length === 0 ? e : e.slice(i),
          c = s,
          l = !1;
        s.endsWith(z)
          ? ((c = s.slice(0, -1)), (l = !0))
          : s.startsWith(z) && ((c = s.slice(1)), (l = !0));
        let u = a && a > i ? a - i : void 0;
        return V(t, l, c, u);
      };
    if (t) {
      let e = t + _e,
        n = r;
      r = (t) =>
        t.startsWith(e) ? n(t.slice(e.length)) : V(B, !1, t, void 0, !0);
    }
    if (n) {
      let e = r;
      r = (t) => n({ className: t, parseClassName: e });
    }
    return r;
  },
  U = (e) => {
    let t = new Map();
    return (
      e.orderSensitiveModifiers.forEach((e, n) => {
        t.set(e, 1e6 + n);
      }),
      (e) => {
        let n = [],
          r = [];
        for (let i = 0; i < e.length; i++) {
          let a = e[i],
            o = a[0] === `[`,
            s = t.has(a);
          o || s
            ? (r.length > 0 && (r.sort(), n.push(...r), (r = [])), n.push(a))
            : r.push(a);
        }
        return (r.length > 0 && (r.sort(), n.push(...r)), n);
      }
    );
  },
  ve = (e) => ({
    cache: ge(e.cacheSize),
    parseClassName: H(e),
    sortModifiers: U(e),
    postfixLookupClassGroupIds: ye(e),
    ...F(e),
  }),
  ye = (e) => {
    let t = Object.create(null),
      n = e.postfixLookupClassGroups;
    if (n) for (let e = 0; e < n.length; e++) t[n[e]] = !0;
    return t;
  },
  be = /\s+/,
  xe = (e, t) => {
    let {
        parseClassName: n,
        getClassGroupId: r,
        getConflictingClassGroupIds: i,
        sortModifiers: a,
        postfixLookupClassGroupIds: o,
      } = t,
      s = [],
      c = e.trim().split(be),
      l = ``;
    for (let e = c.length - 1; e >= 0; --e) {
      let t = c[e],
        {
          isExternal: u,
          modifiers: d,
          hasImportantModifier: f,
          baseClassName: p,
          maybePostfixModifierPosition: m,
        } = n(t);
      if (u) {
        l = t + (l.length > 0 ? ` ` + l : l);
        continue;
      }
      let h = !!m,
        g;
      if (h) {
        g = r(p.substring(0, m));
        let e = g && o[g] ? r(p) : void 0;
        e && e !== g && ((g = e), (h = !1));
      } else g = r(p);
      if (!g) {
        if (!h) {
          l = t + (l.length > 0 ? ` ` + l : l);
          continue;
        }
        if (((g = r(p)), !g)) {
          l = t + (l.length > 0 ? ` ` + l : l);
          continue;
        }
        h = !1;
      }
      let _ = d.length === 0 ? `` : d.length === 1 ? d[0] : a(d).join(`:`),
        v = f ? _ + z : _,
        y = v + g;
      if (s.indexOf(y) > -1) continue;
      s.push(y);
      let b = i(g, h);
      for (let e = 0; e < b.length; ++e) {
        let t = b[e];
        s.push(v + t);
      }
      l = t + (l.length > 0 ? ` ` + l : l);
    }
    return l;
  },
  Se = (...e) => {
    let t = 0,
      n,
      r,
      i = ``;
    for (; t < e.length;)
      (n = e[t++]) && (r = Ce(n)) && (i && (i += ` `), (i += r));
    return i;
  },
  Ce = (e) => {
    if (typeof e == `string`) return e;
    let t,
      n = ``;
    for (let r = 0; r < e.length; r++)
      e[r] && (t = Ce(e[r])) && (n && (n += ` `), (n += t));
    return n;
  },
  we = (e, ...t) => {
    let n,
      r,
      i,
      a,
      o = (o) => (
        (n = ve(t.reduce((e, t) => t(e), e()))),
        (r = n.cache.get),
        (i = n.cache.set),
        (a = s),
        s(o)
      ),
      s = (e) => {
        let t = r(e);
        if (t) return t;
        let a = xe(e, n);
        return (i(e, a), a);
      };
    return ((a = o), (...e) => a(Se(...e)));
  },
  Te = [],
  W = (e) => {
    let t = (t) => t[e] || Te;
    return ((t.isThemeGetter = !0), t);
  },
  Ee = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
  De = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
  Oe = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,
  ke = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  Ae =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  je = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
  Me = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  Ne =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  Pe = (e) => Oe.test(e),
  G = (e) => !!e && !Number.isNaN(Number(e)),
  K = (e) => !!e && Number.isInteger(Number(e)),
  Fe = (e) => e.endsWith(`%`) && G(e.slice(0, -1)),
  Ie = (e) => ke.test(e),
  Le = () => !0,
  Re = (e) => Ae.test(e) && !je.test(e),
  ze = () => !1,
  Be = (e) => Me.test(e),
  Ve = (e) => Ne.test(e),
  He = (e) => !q(e) && !J(e),
  Ue = (e) =>
    e.startsWith(`@container`) &&
    ((e[10] === `/` && e[11] !== void 0) ||
      (e[11] === `s` && e[16] !== void 0 && e.startsWith(`-size/`, 10)) ||
      (e[11] === `n` && e[18] !== void 0 && e.startsWith(`-normal/`, 10))),
  We = (e) => at(e, lt, ze),
  q = (e) => Ee.test(e),
  Ge = (e) => at(e, ut, Re),
  Ke = (e) => at(e, dt, G),
  qe = (e) => at(e, pt, Le),
  Je = (e) => at(e, ft, ze),
  Ye = (e) => at(e, st, ze),
  Xe = (e) => at(e, ct, Ve),
  Ze = (e) => at(e, mt, Be),
  J = (e) => De.test(e),
  Qe = (e) => ot(e, ut),
  $e = (e) => ot(e, ft),
  et = (e) => ot(e, st),
  tt = (e) => ot(e, lt),
  nt = (e) => ot(e, ct),
  rt = (e) => ot(e, mt, !0),
  it = (e) => ot(e, pt, !0),
  at = (e, t, n) => {
    let r = Ee.exec(e);
    return r ? (r[1] ? t(r[1]) : n(r[2])) : !1;
  },
  ot = (e, t, n = !1) => {
    let r = De.exec(e);
    return r ? (r[1] ? t(r[1]) : n) : !1;
  },
  st = (e) => e === `position` || e === `percentage`,
  ct = (e) => e === `image` || e === `url`,
  lt = (e) => e === `length` || e === `size` || e === `bg-size`,
  ut = (e) => e === `length`,
  dt = (e) => e === `number`,
  ft = (e) => e === `family-name`,
  pt = (e) => e === `number` || e === `weight`,
  mt = (e) => e === `shadow`,
  ht = we(() => {
    let e = W(`color`),
      t = W(`font`),
      n = W(`text`),
      r = W(`font-weight`),
      i = W(`tracking`),
      a = W(`leading`),
      o = W(`breakpoint`),
      s = W(`container`),
      c = W(`spacing`),
      l = W(`radius`),
      u = W(`shadow`),
      d = W(`inset-shadow`),
      f = W(`text-shadow`),
      p = W(`drop-shadow`),
      m = W(`blur`),
      h = W(`perspective`),
      g = W(`aspect`),
      _ = W(`ease`),
      v = W(`animate`),
      y = () => [
        `auto`,
        `avoid`,
        `all`,
        `avoid-page`,
        `page`,
        `left`,
        `right`,
        `column`,
      ],
      b = () => [
        `center`,
        `top`,
        `bottom`,
        `left`,
        `right`,
        `top-left`,
        `left-top`,
        `top-right`,
        `right-top`,
        `bottom-right`,
        `right-bottom`,
        `bottom-left`,
        `left-bottom`,
      ],
      x = () => [...b(), J, q],
      S = () => [`auto`, `hidden`, `clip`, `visible`, `scroll`],
      ee = () => [`auto`, `contain`, `none`],
      C = () => [J, q, c],
      w = () => [Pe, `full`, `auto`, ...C()],
      T = () => [K, `none`, `subgrid`, J, q],
      E = () => [`auto`, { span: [`full`, K, J, q] }, K, J, q],
      te = () => [K, `auto`, J, q],
      D = () => [`auto`, `min`, `max`, `fr`, J, q],
      ne = () => [
        `start`,
        `end`,
        `center`,
        `between`,
        `around`,
        `evenly`,
        `stretch`,
        `baseline`,
        `center-safe`,
        `end-safe`,
      ],
      O = () => [
        `start`,
        `end`,
        `center`,
        `stretch`,
        `center-safe`,
        `end-safe`,
      ],
      k = () => [`auto`, ...C()],
      A = () => [
        Pe,
        `auto`,
        `full`,
        `dvw`,
        `dvh`,
        `lvw`,
        `lvh`,
        `svw`,
        `svh`,
        `min`,
        `max`,
        `fit`,
        ...C(),
      ],
      re = () => [
        Pe,
        `screen`,
        `full`,
        `dvw`,
        `lvw`,
        `svw`,
        `min`,
        `max`,
        `fit`,
        ...C(),
      ],
      ie = () => [
        Pe,
        `screen`,
        `full`,
        `lh`,
        `dvh`,
        `lvh`,
        `svh`,
        `min`,
        `max`,
        `fit`,
        ...C(),
      ],
      j = () => [e, J, q],
      ae = () => [...b(), et, Ye, { position: [J, q] }],
      oe = () => [`no-repeat`, { repeat: [``, `x`, `y`, `space`, `round`] }],
      se = () => [`auto`, `cover`, `contain`, tt, We, { size: [J, q] }],
      M = () => [Fe, Qe, Ge],
      N = () => [``, `none`, `full`, l, J, q],
      P = () => [``, G, Qe, Ge],
      F = () => [`solid`, `dashed`, `dotted`, `double`],
      ce = () => [
        `normal`,
        `multiply`,
        `screen`,
        `overlay`,
        `darken`,
        `lighten`,
        `color-dodge`,
        `color-burn`,
        `hard-light`,
        `soft-light`,
        `difference`,
        `exclusion`,
        `hue`,
        `saturation`,
        `color`,
        `luminosity`,
      ],
      I = () => [G, Fe, et, Ye],
      le = () => [``, `none`, m, J, q],
      ue = () => [`none`, G, J, q],
      L = () => [`none`, G, J, q],
      de = () => [G, J, q],
      fe = () => [Pe, `full`, ...C()];
    return {
      cacheSize: 500,
      theme: {
        animate: [`spin`, `ping`, `pulse`, `bounce`],
        aspect: [`video`],
        blur: [Ie],
        breakpoint: [Ie],
        color: [Le],
        container: [Ie],
        "drop-shadow": [Ie],
        ease: [`in`, `out`, `in-out`],
        font: [He],
        "font-weight": [
          `thin`,
          `extralight`,
          `light`,
          `normal`,
          `medium`,
          `semibold`,
          `bold`,
          `extrabold`,
          `black`,
        ],
        "inset-shadow": [Ie],
        leading: [`none`, `tight`, `snug`, `normal`, `relaxed`, `loose`],
        perspective: [
          `dramatic`,
          `near`,
          `normal`,
          `midrange`,
          `distant`,
          `none`,
        ],
        radius: [Ie],
        shadow: [Ie],
        spacing: [`px`, G],
        text: [Ie],
        "text-shadow": [Ie],
        tracking: [`tighter`, `tight`, `normal`, `wide`, `wider`, `widest`],
      },
      classGroups: {
        aspect: [{ aspect: [`auto`, `square`, Pe, q, J, g] }],
        container: [`container`],
        "container-type": [{ "@container": [``, `normal`, `size`, J, q] }],
        "container-named": [Ue],
        columns: [{ columns: [G, q, J, s] }],
        "break-after": [{ "break-after": y() }],
        "break-before": [{ "break-before": y() }],
        "break-inside": [
          { "break-inside": [`auto`, `avoid`, `avoid-page`, `avoid-column`] },
        ],
        "box-decoration": [{ "box-decoration": [`slice`, `clone`] }],
        box: [{ box: [`border`, `content`] }],
        display: [
          `block`,
          `inline-block`,
          `inline`,
          `flex`,
          `inline-flex`,
          `table`,
          `inline-table`,
          `table-caption`,
          `table-cell`,
          `table-column`,
          `table-column-group`,
          `table-footer-group`,
          `table-header-group`,
          `table-row-group`,
          `table-row`,
          `flow-root`,
          `grid`,
          `inline-grid`,
          `contents`,
          `list-item`,
          `hidden`,
        ],
        sr: [`sr-only`, `not-sr-only`],
        float: [{ float: [`right`, `left`, `none`, `start`, `end`] }],
        clear: [{ clear: [`left`, `right`, `both`, `none`, `start`, `end`] }],
        isolation: [`isolate`, `isolation-auto`],
        "object-fit": [
          { object: [`contain`, `cover`, `fill`, `none`, `scale-down`] },
        ],
        "object-position": [{ object: x() }],
        overflow: [{ overflow: S() }],
        "overflow-x": [{ "overflow-x": S() }],
        "overflow-y": [{ "overflow-y": S() }],
        overscroll: [{ overscroll: ee() }],
        "overscroll-x": [{ "overscroll-x": ee() }],
        "overscroll-y": [{ "overscroll-y": ee() }],
        position: [`static`, `fixed`, `absolute`, `relative`, `sticky`],
        inset: [{ inset: w() }],
        "inset-x": [{ "inset-x": w() }],
        "inset-y": [{ "inset-y": w() }],
        start: [{ "inset-s": w(), start: w() }],
        end: [{ "inset-e": w(), end: w() }],
        "inset-bs": [{ "inset-bs": w() }],
        "inset-be": [{ "inset-be": w() }],
        top: [{ top: w() }],
        right: [{ right: w() }],
        bottom: [{ bottom: w() }],
        left: [{ left: w() }],
        visibility: [`visible`, `invisible`, `collapse`],
        z: [{ z: [K, `auto`, J, q] }],
        basis: [{ basis: [Pe, `full`, `auto`, s, ...C()] }],
        "flex-direction": [
          { flex: [`row`, `row-reverse`, `col`, `col-reverse`] },
        ],
        "flex-wrap": [{ flex: [`nowrap`, `wrap`, `wrap-reverse`] }],
        flex: [{ flex: [G, Pe, `auto`, `initial`, `none`, q] }],
        grow: [{ grow: [``, G, J, q] }],
        shrink: [{ shrink: [``, G, J, q] }],
        order: [{ order: [K, `first`, `last`, `none`, J, q] }],
        "grid-cols": [{ "grid-cols": T() }],
        "col-start-end": [{ col: E() }],
        "col-start": [{ "col-start": te() }],
        "col-end": [{ "col-end": te() }],
        "grid-rows": [{ "grid-rows": T() }],
        "row-start-end": [{ row: E() }],
        "row-start": [{ "row-start": te() }],
        "row-end": [{ "row-end": te() }],
        "grid-flow": [
          { "grid-flow": [`row`, `col`, `dense`, `row-dense`, `col-dense`] },
        ],
        "auto-cols": [{ "auto-cols": D() }],
        "auto-rows": [{ "auto-rows": D() }],
        gap: [{ gap: C() }],
        "gap-x": [{ "gap-x": C() }],
        "gap-y": [{ "gap-y": C() }],
        "justify-content": [{ justify: [...ne(), `normal`] }],
        "justify-items": [{ "justify-items": [...O(), `normal`] }],
        "justify-self": [{ "justify-self": [`auto`, ...O()] }],
        "align-content": [{ content: [`normal`, ...ne()] }],
        "align-items": [{ items: [...O(), { baseline: [``, `last`] }] }],
        "align-self": [{ self: [`auto`, ...O(), { baseline: [``, `last`] }] }],
        "place-content": [{ "place-content": ne() }],
        "place-items": [{ "place-items": [...O(), `baseline`] }],
        "place-self": [{ "place-self": [`auto`, ...O()] }],
        p: [{ p: C() }],
        px: [{ px: C() }],
        py: [{ py: C() }],
        ps: [{ ps: C() }],
        pe: [{ pe: C() }],
        pbs: [{ pbs: C() }],
        pbe: [{ pbe: C() }],
        pt: [{ pt: C() }],
        pr: [{ pr: C() }],
        pb: [{ pb: C() }],
        pl: [{ pl: C() }],
        m: [{ m: k() }],
        mx: [{ mx: k() }],
        my: [{ my: k() }],
        ms: [{ ms: k() }],
        me: [{ me: k() }],
        mbs: [{ mbs: k() }],
        mbe: [{ mbe: k() }],
        mt: [{ mt: k() }],
        mr: [{ mr: k() }],
        mb: [{ mb: k() }],
        ml: [{ ml: k() }],
        "space-x": [{ "space-x": C() }],
        "space-x-reverse": [`space-x-reverse`],
        "space-y": [{ "space-y": C() }],
        "space-y-reverse": [`space-y-reverse`],
        size: [{ size: A() }],
        "inline-size": [{ inline: [`auto`, ...re()] }],
        "min-inline-size": [{ "min-inline": [`auto`, ...re()] }],
        "max-inline-size": [{ "max-inline": [`none`, ...re()] }],
        "block-size": [{ block: [`auto`, ...ie()] }],
        "min-block-size": [{ "min-block": [`auto`, ...ie()] }],
        "max-block-size": [{ "max-block": [`none`, ...ie()] }],
        w: [{ w: [s, `screen`, ...A()] }],
        "min-w": [{ "min-w": [s, `screen`, `none`, ...A()] }],
        "max-w": [
          { "max-w": [s, `screen`, `none`, `prose`, { screen: [o] }, ...A()] },
        ],
        h: [{ h: [`screen`, `lh`, ...A()] }],
        "min-h": [{ "min-h": [`screen`, `lh`, `none`, ...A()] }],
        "max-h": [{ "max-h": [`screen`, `lh`, ...A()] }],
        "font-size": [{ text: [`base`, n, Qe, Ge] }],
        "font-smoothing": [`antialiased`, `subpixel-antialiased`],
        "font-style": [`italic`, `not-italic`],
        "font-weight": [{ font: [r, it, qe] }],
        "font-stretch": [
          {
            "font-stretch": [
              `ultra-condensed`,
              `extra-condensed`,
              `condensed`,
              `semi-condensed`,
              `normal`,
              `semi-expanded`,
              `expanded`,
              `extra-expanded`,
              `ultra-expanded`,
              Fe,
              q,
            ],
          },
        ],
        "font-family": [{ font: [$e, Je, t] }],
        "font-features": [{ "font-features": [q] }],
        "fvn-normal": [`normal-nums`],
        "fvn-ordinal": [`ordinal`],
        "fvn-slashed-zero": [`slashed-zero`],
        "fvn-figure": [`lining-nums`, `oldstyle-nums`],
        "fvn-spacing": [`proportional-nums`, `tabular-nums`],
        "fvn-fraction": [`diagonal-fractions`, `stacked-fractions`],
        tracking: [{ tracking: [i, J, q] }],
        "line-clamp": [{ "line-clamp": [G, `none`, J, Ke] }],
        leading: [{ leading: [a, ...C()] }],
        "list-image": [{ "list-image": [`none`, J, q] }],
        "list-style-position": [{ list: [`inside`, `outside`] }],
        "list-style-type": [{ list: [`disc`, `decimal`, `none`, J, q] }],
        "text-alignment": [
          { text: [`left`, `center`, `right`, `justify`, `start`, `end`] },
        ],
        "placeholder-color": [{ placeholder: j() }],
        "text-color": [{ text: j() }],
        "text-decoration": [
          `underline`,
          `overline`,
          `line-through`,
          `no-underline`,
        ],
        "text-decoration-style": [{ decoration: [...F(), `wavy`] }],
        "text-decoration-thickness": [
          { decoration: [G, `from-font`, `auto`, J, Ge] },
        ],
        "text-decoration-color": [{ decoration: j() }],
        "underline-offset": [{ "underline-offset": [G, `auto`, J, q] }],
        "text-transform": [
          `uppercase`,
          `lowercase`,
          `capitalize`,
          `normal-case`,
        ],
        "text-overflow": [`truncate`, `text-ellipsis`, `text-clip`],
        "text-wrap": [{ text: [`wrap`, `nowrap`, `balance`, `pretty`] }],
        indent: [{ indent: C() }],
        "tab-size": [{ tab: [K, J, q] }],
        "vertical-align": [
          {
            align: [
              `baseline`,
              `top`,
              `middle`,
              `bottom`,
              `text-top`,
              `text-bottom`,
              `sub`,
              `super`,
              J,
              q,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              `normal`,
              `nowrap`,
              `pre`,
              `pre-line`,
              `pre-wrap`,
              `break-spaces`,
            ],
          },
        ],
        break: [{ break: [`normal`, `words`, `all`, `keep`] }],
        wrap: [{ wrap: [`break-word`, `anywhere`, `normal`] }],
        hyphens: [{ hyphens: [`none`, `manual`, `auto`] }],
        content: [{ content: [`none`, J, q] }],
        "bg-attachment": [{ bg: [`fixed`, `local`, `scroll`] }],
        "bg-clip": [{ "bg-clip": [`border`, `padding`, `content`, `text`] }],
        "bg-origin": [{ "bg-origin": [`border`, `padding`, `content`] }],
        "bg-position": [{ bg: ae() }],
        "bg-repeat": [{ bg: oe() }],
        "bg-size": [{ bg: se() }],
        "bg-image": [
          {
            bg: [
              `none`,
              {
                linear: [
                  { to: [`t`, `tr`, `r`, `br`, `b`, `bl`, `l`, `tl`] },
                  K,
                  J,
                  q,
                ],
                radial: [``, J, q],
                conic: [K, J, q],
              },
              nt,
              Xe,
            ],
          },
        ],
        "bg-color": [{ bg: j() }],
        "gradient-from-pos": [{ from: M() }],
        "gradient-via-pos": [{ via: M() }],
        "gradient-to-pos": [{ to: M() }],
        "gradient-from": [{ from: j() }],
        "gradient-via": [{ via: j() }],
        "gradient-to": [{ to: j() }],
        rounded: [{ rounded: N() }],
        "rounded-s": [{ "rounded-s": N() }],
        "rounded-e": [{ "rounded-e": N() }],
        "rounded-t": [{ "rounded-t": N() }],
        "rounded-r": [{ "rounded-r": N() }],
        "rounded-b": [{ "rounded-b": N() }],
        "rounded-l": [{ "rounded-l": N() }],
        "rounded-ss": [{ "rounded-ss": N() }],
        "rounded-se": [{ "rounded-se": N() }],
        "rounded-ee": [{ "rounded-ee": N() }],
        "rounded-es": [{ "rounded-es": N() }],
        "rounded-tl": [{ "rounded-tl": N() }],
        "rounded-tr": [{ "rounded-tr": N() }],
        "rounded-br": [{ "rounded-br": N() }],
        "rounded-bl": [{ "rounded-bl": N() }],
        "border-w": [{ border: P() }],
        "border-w-x": [{ "border-x": P() }],
        "border-w-y": [{ "border-y": P() }],
        "border-w-s": [{ "border-s": P() }],
        "border-w-e": [{ "border-e": P() }],
        "border-w-bs": [{ "border-bs": P() }],
        "border-w-be": [{ "border-be": P() }],
        "border-w-t": [{ "border-t": P() }],
        "border-w-r": [{ "border-r": P() }],
        "border-w-b": [{ "border-b": P() }],
        "border-w-l": [{ "border-l": P() }],
        "divide-x": [{ "divide-x": P() }],
        "divide-x-reverse": [`divide-x-reverse`],
        "divide-y": [{ "divide-y": P() }],
        "divide-y-reverse": [`divide-y-reverse`],
        "border-style": [{ border: [...F(), `hidden`, `none`] }],
        "divide-style": [{ divide: [...F(), `hidden`, `none`] }],
        "border-color": [{ border: j() }],
        "border-color-x": [{ "border-x": j() }],
        "border-color-y": [{ "border-y": j() }],
        "border-color-s": [{ "border-s": j() }],
        "border-color-e": [{ "border-e": j() }],
        "border-color-bs": [{ "border-bs": j() }],
        "border-color-be": [{ "border-be": j() }],
        "border-color-t": [{ "border-t": j() }],
        "border-color-r": [{ "border-r": j() }],
        "border-color-b": [{ "border-b": j() }],
        "border-color-l": [{ "border-l": j() }],
        "divide-color": [{ divide: j() }],
        "outline-style": [{ outline: [...F(), `none`, `hidden`] }],
        "outline-offset": [{ "outline-offset": [G, J, q] }],
        "outline-w": [{ outline: [``, G, Qe, Ge] }],
        "outline-color": [{ outline: j() }],
        shadow: [{ shadow: [``, `none`, u, rt, Ze] }],
        "shadow-color": [{ shadow: j() }],
        "inset-shadow": [{ "inset-shadow": [`none`, d, rt, Ze] }],
        "inset-shadow-color": [{ "inset-shadow": j() }],
        "ring-w": [{ ring: P() }],
        "ring-w-inset": [`ring-inset`],
        "ring-color": [{ ring: j() }],
        "ring-offset-w": [{ "ring-offset": [G, Ge] }],
        "ring-offset-color": [{ "ring-offset": j() }],
        "inset-ring-w": [{ "inset-ring": P() }],
        "inset-ring-color": [{ "inset-ring": j() }],
        "text-shadow": [{ "text-shadow": [`none`, f, rt, Ze] }],
        "text-shadow-color": [{ "text-shadow": j() }],
        opacity: [{ opacity: [G, J, q] }],
        "mix-blend": [
          { "mix-blend": [...ce(), `plus-darker`, `plus-lighter`] },
        ],
        "bg-blend": [{ "bg-blend": ce() }],
        "mask-clip": [
          {
            "mask-clip": [
              `border`,
              `padding`,
              `content`,
              `fill`,
              `stroke`,
              `view`,
            ],
          },
          `mask-no-clip`,
        ],
        "mask-composite": [
          { mask: [`add`, `subtract`, `intersect`, `exclude`] },
        ],
        "mask-image-linear-pos": [{ "mask-linear": [G] }],
        "mask-image-linear-from-pos": [{ "mask-linear-from": I() }],
        "mask-image-linear-to-pos": [{ "mask-linear-to": I() }],
        "mask-image-linear-from-color": [{ "mask-linear-from": j() }],
        "mask-image-linear-to-color": [{ "mask-linear-to": j() }],
        "mask-image-t-from-pos": [{ "mask-t-from": I() }],
        "mask-image-t-to-pos": [{ "mask-t-to": I() }],
        "mask-image-t-from-color": [{ "mask-t-from": j() }],
        "mask-image-t-to-color": [{ "mask-t-to": j() }],
        "mask-image-r-from-pos": [{ "mask-r-from": I() }],
        "mask-image-r-to-pos": [{ "mask-r-to": I() }],
        "mask-image-r-from-color": [{ "mask-r-from": j() }],
        "mask-image-r-to-color": [{ "mask-r-to": j() }],
        "mask-image-b-from-pos": [{ "mask-b-from": I() }],
        "mask-image-b-to-pos": [{ "mask-b-to": I() }],
        "mask-image-b-from-color": [{ "mask-b-from": j() }],
        "mask-image-b-to-color": [{ "mask-b-to": j() }],
        "mask-image-l-from-pos": [{ "mask-l-from": I() }],
        "mask-image-l-to-pos": [{ "mask-l-to": I() }],
        "mask-image-l-from-color": [{ "mask-l-from": j() }],
        "mask-image-l-to-color": [{ "mask-l-to": j() }],
        "mask-image-x-from-pos": [{ "mask-x-from": I() }],
        "mask-image-x-to-pos": [{ "mask-x-to": I() }],
        "mask-image-x-from-color": [{ "mask-x-from": j() }],
        "mask-image-x-to-color": [{ "mask-x-to": j() }],
        "mask-image-y-from-pos": [{ "mask-y-from": I() }],
        "mask-image-y-to-pos": [{ "mask-y-to": I() }],
        "mask-image-y-from-color": [{ "mask-y-from": j() }],
        "mask-image-y-to-color": [{ "mask-y-to": j() }],
        "mask-image-radial": [{ "mask-radial": [J, q] }],
        "mask-image-radial-from-pos": [{ "mask-radial-from": I() }],
        "mask-image-radial-to-pos": [{ "mask-radial-to": I() }],
        "mask-image-radial-from-color": [{ "mask-radial-from": j() }],
        "mask-image-radial-to-color": [{ "mask-radial-to": j() }],
        "mask-image-radial-shape": [{ "mask-radial": [`circle`, `ellipse`] }],
        "mask-image-radial-size": [
          {
            "mask-radial": [
              { closest: [`side`, `corner`], farthest: [`side`, `corner`] },
            ],
          },
        ],
        "mask-image-radial-pos": [{ "mask-radial-at": b() }],
        "mask-image-conic-pos": [{ "mask-conic": [G] }],
        "mask-image-conic-from-pos": [{ "mask-conic-from": I() }],
        "mask-image-conic-to-pos": [{ "mask-conic-to": I() }],
        "mask-image-conic-from-color": [{ "mask-conic-from": j() }],
        "mask-image-conic-to-color": [{ "mask-conic-to": j() }],
        "mask-mode": [{ mask: [`alpha`, `luminance`, `match`] }],
        "mask-origin": [
          {
            "mask-origin": [
              `border`,
              `padding`,
              `content`,
              `fill`,
              `stroke`,
              `view`,
            ],
          },
        ],
        "mask-position": [{ mask: ae() }],
        "mask-repeat": [{ mask: oe() }],
        "mask-size": [{ mask: se() }],
        "mask-type": [{ "mask-type": [`alpha`, `luminance`] }],
        "mask-image": [{ mask: [`none`, J, q] }],
        filter: [{ filter: [``, `none`, J, q] }],
        blur: [{ blur: le() }],
        brightness: [{ brightness: [G, J, q] }],
        contrast: [{ contrast: [G, J, q] }],
        "drop-shadow": [{ "drop-shadow": [``, `none`, p, rt, Ze] }],
        "drop-shadow-color": [{ "drop-shadow": j() }],
        grayscale: [{ grayscale: [``, G, J, q] }],
        "hue-rotate": [{ "hue-rotate": [G, J, q] }],
        invert: [{ invert: [``, G, J, q] }],
        saturate: [{ saturate: [G, J, q] }],
        sepia: [{ sepia: [``, G, J, q] }],
        "backdrop-filter": [{ "backdrop-filter": [``, `none`, J, q] }],
        "backdrop-blur": [{ "backdrop-blur": le() }],
        "backdrop-brightness": [{ "backdrop-brightness": [G, J, q] }],
        "backdrop-contrast": [{ "backdrop-contrast": [G, J, q] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": [``, G, J, q] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [G, J, q] }],
        "backdrop-invert": [{ "backdrop-invert": [``, G, J, q] }],
        "backdrop-opacity": [{ "backdrop-opacity": [G, J, q] }],
        "backdrop-saturate": [{ "backdrop-saturate": [G, J, q] }],
        "backdrop-sepia": [{ "backdrop-sepia": [``, G, J, q] }],
        "border-collapse": [{ border: [`collapse`, `separate`] }],
        "border-spacing": [{ "border-spacing": C() }],
        "border-spacing-x": [{ "border-spacing-x": C() }],
        "border-spacing-y": [{ "border-spacing-y": C() }],
        "table-layout": [{ table: [`auto`, `fixed`] }],
        caption: [{ caption: [`top`, `bottom`] }],
        transition: [
          {
            transition: [
              ``,
              `all`,
              `colors`,
              `opacity`,
              `shadow`,
              `transform`,
              `none`,
              J,
              q,
            ],
          },
        ],
        "transition-behavior": [{ transition: [`normal`, `discrete`] }],
        duration: [{ duration: [G, `initial`, J, q] }],
        ease: [{ ease: [`linear`, `initial`, _, J, q] }],
        delay: [{ delay: [G, J, q] }],
        animate: [{ animate: [`none`, v, J, q] }],
        backface: [{ backface: [`hidden`, `visible`] }],
        perspective: [{ perspective: [h, J, q] }],
        "perspective-origin": [{ "perspective-origin": x() }],
        rotate: [{ rotate: ue() }],
        "rotate-x": [{ "rotate-x": ue() }],
        "rotate-y": [{ "rotate-y": ue() }],
        "rotate-z": [{ "rotate-z": ue() }],
        scale: [{ scale: L() }],
        "scale-x": [{ "scale-x": L() }],
        "scale-y": [{ "scale-y": L() }],
        "scale-z": [{ "scale-z": L() }],
        "scale-3d": [`scale-3d`],
        skew: [{ skew: de() }],
        "skew-x": [{ "skew-x": de() }],
        "skew-y": [{ "skew-y": de() }],
        transform: [{ transform: [J, q, ``, `none`, `gpu`, `cpu`] }],
        "transform-origin": [{ origin: x() }],
        "transform-style": [{ transform: [`3d`, `flat`] }],
        translate: [{ translate: fe() }],
        "translate-x": [{ "translate-x": fe() }],
        "translate-y": [{ "translate-y": fe() }],
        "translate-z": [{ "translate-z": fe() }],
        "translate-none": [`translate-none`],
        zoom: [{ zoom: [K, J, q] }],
        accent: [{ accent: j() }],
        appearance: [{ appearance: [`none`, `auto`] }],
        "caret-color": [{ caret: j() }],
        "color-scheme": [
          {
            scheme: [
              `normal`,
              `dark`,
              `light`,
              `light-dark`,
              `only-dark`,
              `only-light`,
            ],
          },
        ],
        cursor: [
          {
            cursor: [
              `auto`,
              `default`,
              `pointer`,
              `wait`,
              `text`,
              `move`,
              `help`,
              `not-allowed`,
              `none`,
              `context-menu`,
              `progress`,
              `cell`,
              `crosshair`,
              `vertical-text`,
              `alias`,
              `copy`,
              `no-drop`,
              `grab`,
              `grabbing`,
              `all-scroll`,
              `col-resize`,
              `row-resize`,
              `n-resize`,
              `e-resize`,
              `s-resize`,
              `w-resize`,
              `ne-resize`,
              `nw-resize`,
              `se-resize`,
              `sw-resize`,
              `ew-resize`,
              `ns-resize`,
              `nesw-resize`,
              `nwse-resize`,
              `zoom-in`,
              `zoom-out`,
              J,
              q,
            ],
          },
        ],
        "field-sizing": [{ "field-sizing": [`fixed`, `content`] }],
        "pointer-events": [{ "pointer-events": [`auto`, `none`] }],
        resize: [{ resize: [`none`, ``, `y`, `x`] }],
        "scroll-behavior": [{ scroll: [`auto`, `smooth`] }],
        "scrollbar-thumb-color": [{ "scrollbar-thumb": j() }],
        "scrollbar-track-color": [{ "scrollbar-track": j() }],
        "scrollbar-gutter": [
          { "scrollbar-gutter": [`auto`, `stable`, `both`] },
        ],
        "scrollbar-w": [{ scrollbar: [`auto`, `thin`, `none`] }],
        "scroll-m": [{ "scroll-m": C() }],
        "scroll-mx": [{ "scroll-mx": C() }],
        "scroll-my": [{ "scroll-my": C() }],
        "scroll-ms": [{ "scroll-ms": C() }],
        "scroll-me": [{ "scroll-me": C() }],
        "scroll-mbs": [{ "scroll-mbs": C() }],
        "scroll-mbe": [{ "scroll-mbe": C() }],
        "scroll-mt": [{ "scroll-mt": C() }],
        "scroll-mr": [{ "scroll-mr": C() }],
        "scroll-mb": [{ "scroll-mb": C() }],
        "scroll-ml": [{ "scroll-ml": C() }],
        "scroll-p": [{ "scroll-p": C() }],
        "scroll-px": [{ "scroll-px": C() }],
        "scroll-py": [{ "scroll-py": C() }],
        "scroll-ps": [{ "scroll-ps": C() }],
        "scroll-pe": [{ "scroll-pe": C() }],
        "scroll-pbs": [{ "scroll-pbs": C() }],
        "scroll-pbe": [{ "scroll-pbe": C() }],
        "scroll-pt": [{ "scroll-pt": C() }],
        "scroll-pr": [{ "scroll-pr": C() }],
        "scroll-pb": [{ "scroll-pb": C() }],
        "scroll-pl": [{ "scroll-pl": C() }],
        "snap-align": [{ snap: [`start`, `end`, `center`, `align-none`] }],
        "snap-stop": [{ snap: [`normal`, `always`] }],
        "snap-type": [{ snap: [`none`, `x`, `y`, `both`] }],
        "snap-strictness": [{ snap: [`mandatory`, `proximity`] }],
        touch: [{ touch: [`auto`, `none`, `manipulation`] }],
        "touch-x": [{ "touch-pan": [`x`, `left`, `right`] }],
        "touch-y": [{ "touch-pan": [`y`, `up`, `down`] }],
        "touch-pz": [`touch-pinch-zoom`],
        select: [{ select: [`none`, `text`, `all`, `auto`] }],
        "will-change": [
          { "will-change": [`auto`, `scroll`, `contents`, `transform`, J, q] },
        ],
        fill: [{ fill: [`none`, ...j()] }],
        "stroke-w": [{ stroke: [G, Qe, Ge, Ke] }],
        stroke: [{ stroke: [`none`, ...j()] }],
        "forced-color-adjust": [{ "forced-color-adjust": [`auto`, `none`] }],
      },
      conflictingClassGroups: {
        "container-named": [`container-type`],
        overflow: [`overflow-x`, `overflow-y`],
        overscroll: [`overscroll-x`, `overscroll-y`],
        inset: [
          `inset-x`,
          `inset-y`,
          `inset-bs`,
          `inset-be`,
          `start`,
          `end`,
          `top`,
          `right`,
          `bottom`,
          `left`,
        ],
        "inset-x": [`right`, `left`],
        "inset-y": [`top`, `bottom`],
        flex: [`basis`, `grow`, `shrink`],
        gap: [`gap-x`, `gap-y`],
        p: [`px`, `py`, `ps`, `pe`, `pbs`, `pbe`, `pt`, `pr`, `pb`, `pl`],
        px: [`pr`, `pl`],
        py: [`pt`, `pb`],
        m: [`mx`, `my`, `ms`, `me`, `mbs`, `mbe`, `mt`, `mr`, `mb`, `ml`],
        mx: [`mr`, `ml`],
        my: [`mt`, `mb`],
        size: [`w`, `h`],
        "font-size": [`leading`],
        "fvn-normal": [
          `fvn-ordinal`,
          `fvn-slashed-zero`,
          `fvn-figure`,
          `fvn-spacing`,
          `fvn-fraction`,
        ],
        "fvn-ordinal": [`fvn-normal`],
        "fvn-slashed-zero": [`fvn-normal`],
        "fvn-figure": [`fvn-normal`],
        "fvn-spacing": [`fvn-normal`],
        "fvn-fraction": [`fvn-normal`],
        "line-clamp": [`display`, `overflow`],
        rounded: [
          `rounded-s`,
          `rounded-e`,
          `rounded-t`,
          `rounded-r`,
          `rounded-b`,
          `rounded-l`,
          `rounded-ss`,
          `rounded-se`,
          `rounded-ee`,
          `rounded-es`,
          `rounded-tl`,
          `rounded-tr`,
          `rounded-br`,
          `rounded-bl`,
        ],
        "rounded-s": [`rounded-ss`, `rounded-es`],
        "rounded-e": [`rounded-se`, `rounded-ee`],
        "rounded-t": [`rounded-tl`, `rounded-tr`],
        "rounded-r": [`rounded-tr`, `rounded-br`],
        "rounded-b": [`rounded-br`, `rounded-bl`],
        "rounded-l": [`rounded-tl`, `rounded-bl`],
        "border-spacing": [`border-spacing-x`, `border-spacing-y`],
        "border-w": [
          `border-w-x`,
          `border-w-y`,
          `border-w-s`,
          `border-w-e`,
          `border-w-bs`,
          `border-w-be`,
          `border-w-t`,
          `border-w-r`,
          `border-w-b`,
          `border-w-l`,
        ],
        "border-w-x": [`border-w-r`, `border-w-l`],
        "border-w-y": [`border-w-t`, `border-w-b`],
        "border-color": [
          `border-color-x`,
          `border-color-y`,
          `border-color-s`,
          `border-color-e`,
          `border-color-bs`,
          `border-color-be`,
          `border-color-t`,
          `border-color-r`,
          `border-color-b`,
          `border-color-l`,
        ],
        "border-color-x": [`border-color-r`, `border-color-l`],
        "border-color-y": [`border-color-t`, `border-color-b`],
        translate: [`translate-x`, `translate-y`, `translate-none`],
        "translate-none": [
          `translate`,
          `translate-x`,
          `translate-y`,
          `translate-z`,
        ],
        "scroll-m": [
          `scroll-mx`,
          `scroll-my`,
          `scroll-ms`,
          `scroll-me`,
          `scroll-mbs`,
          `scroll-mbe`,
          `scroll-mt`,
          `scroll-mr`,
          `scroll-mb`,
          `scroll-ml`,
        ],
        "scroll-mx": [`scroll-mr`, `scroll-ml`],
        "scroll-my": [`scroll-mt`, `scroll-mb`],
        "scroll-p": [
          `scroll-px`,
          `scroll-py`,
          `scroll-ps`,
          `scroll-pe`,
          `scroll-pbs`,
          `scroll-pbe`,
          `scroll-pt`,
          `scroll-pr`,
          `scroll-pb`,
          `scroll-pl`,
        ],
        "scroll-px": [`scroll-pr`, `scroll-pl`],
        "scroll-py": [`scroll-pt`, `scroll-pb`],
        touch: [`touch-x`, `touch-y`, `touch-pz`],
        "touch-x": [`touch`],
        "touch-y": [`touch`],
        "touch-pz": [`touch`],
      },
      conflictingClassGroupModifiers: { "font-size": [`leading`] },
      postfixLookupClassGroups: [`container-type`],
      orderSensitiveModifiers: [
        `*`,
        `**`,
        `after`,
        `backdrop`,
        `before`,
        `details-content`,
        `file`,
        `first-letter`,
        `first-line`,
        `marker`,
        `placeholder`,
        `selection`,
      ],
    };
  });
function gt(...e) {
  return ht(A(e));
}
var Y = t(),
  _t = j(
    `inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0`,
    {
      variants: {
        variant: {
          default: `bg-primary text-primary-foreground shadow hover:bg-primary/90`,
          destructive: `bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90`,
          outline: `border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground`,
          secondary: `bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80`,
          ghost: `hover:bg-accent hover:text-accent-foreground`,
          link: `text-primary underline-offset-4 hover:underline`,
        },
        size: {
          default: `h-9 px-4 py-2`,
          sm: `h-8 rounded-md px-3 text-xs`,
          lg: `h-10 rounded-md px-8`,
          icon: `h-9 w-9`,
        },
      },
      defaultVariants: { variant: `default`, size: `default` },
    },
  ),
  vt = i.forwardRef(
    ({ className: e, variant: t, size: n, asChild: r = !1, ...i }, a) =>
      (0, Y.jsx)(r ? y : `button`, {
        className: gt(_t({ variant: t, size: n, className: e })),
        ref: a,
        ...i,
      }),
  );
vt.displayName = `Button`;
var yt = `/models/wasm/vision_wasm_internal.js`,
  bt = wasmAsset.url,
  X = { found: !1, x: 0, y: 0, zone: null, pixels: 0 },
  xt = {
    present: !1,
    landmarks: [],
    tiltDeg: 0,
    orientation: `—`,
    posture: `—`,
    reach: 0,
    coverage: `—`,
    armsTracked: 0,
    legsTracked: 0,
    stance: 0,
  },
  St = {
    present: !1,
    landmarks: [],
    handedness: `—`,
    zone: null,
    fps: 0,
    pinch: !1,
    pose: xt,
    objects: { red: X, yellow: X, green: X },
    holding: null,
    simulated: !1,
    hands: [],
    poses: [],
    crew: 0,
  },
  Ct = {
    delegate: `unknown`,
    loadMs: 0,
    handMs: 0,
    poseMs: 0,
    fps: 0,
    offlineVerified: !1,
  };
function wt(e, t) {
  for (let n of a)
    if (e >= n.x && e <= n.x + n.w && t >= n.y && t <= n.y + n.h) return n.id;
  return null;
}
function Tt(e) {
  let t = ((e % 360) + 360) % 360;
  return t < 45 || t >= 315
    ? `Head-up to rack`
    : t < 135
      ? `Rotated left of rack`
      : t < 225
        ? `Inverted to rack`
        : `Rotated right of rack`;
}
function Et(e, t) {
  let n = [];
  for (let r = 0; r < 21; r++) {
    let i = Math.floor(r / 4);
    n.push({ x: e + (r % 4) * 0.012 - 0.02, y: t + i * 0.02 - 0.05 });
  }
  return ((n[8] = { x: e, y: t }), n);
}
function Dt() {
  if (typeof window > `u`) return !1;
  try {
    return window.self !== window.top;
  } catch {
    return !0;
  }
}
function Ot(e) {
  let t = e,
    n = t?.name ?? ``;
  return n === `NotAllowedError` || n === `SecurityError`
    ? Dt()
      ? `This embedded preview window blocks webcam access. Press “Open in new tab”, allow the camera there, and the feed will start.`
      : `Camera permission was blocked. Click the camera icon in the browser address bar, allow camera for this page, then press retry.`
    : n === `NotFoundError` || n === `OverconstrainedError`
      ? `No camera was found on this device. Use simulation mode to demo the protocol engine.`
      : n === `NotReadableError`
        ? `The camera is already in use by another app. Close it and press retry.`
        : t?.message || `Camera unavailable.`;
}
function kt(e, t, n = 0) {
  let a = (0, i.useRef)(null),
    [o, s] = (0, i.useState)(St),
    [c, l] = (0, i.useState)(`idle`),
    [u, d] = (0, i.useState)(null),
    [f, p] = (0, i.useState)(0),
    [m, h] = (0, i.useState)(Ct),
    g = (0, i.useRef)(null),
    _ = (0, i.useRef)(n);
  _.current = n;
  let v = (0, i.useCallback)(() => {
      (d(null), p((e) => e + 1));
    }, []),
    y = (0, i.useCallback)((e) => {
      g.current = e;
    }, []);
  return (
    (0, i.useEffect)(() => {
      if (!e || !t) return;
      (l(`simulated`), d(null));
      let n = 0,
        r = () => {
          let e = g.current;
          (s(
            e
              ? {
                  ...St,
                  present: !0,
                  landmarks: Et(e.x, e.y),
                  handedness: `Simulated`,
                  zone: wt(e.x, e.y),
                  fps: 60,
                  simulated: !0,
                  pose: {
                    ...xt,
                    present: !0,
                    orientation: `Head-up to rack`,
                    posture: `Reaching toward rack`,
                    reach: 0.8,
                    coverage: `Simulated full body`,
                    armsTracked: 2,
                    legsTracked: 2,
                    stance: 0.8,
                  },
                  crew: 1,
                  poses: [
                    {
                      ...xt,
                      present: !0,
                      orientation: `Head-up to rack`,
                      posture: `Reaching toward rack`,
                      reach: 0.8,
                      coverage: `Simulated full body`,
                      armsTracked: 2,
                      legsTracked: 2,
                      stance: 0.8,
                    },
                  ],
                  hands: [
                    {
                      landmarks: Et(e.x, e.y),
                      handedness: `Simulated`,
                      pinch: !1,
                      zone: wt(e.x, e.y),
                      holding: null,
                      crew: 0,
                    },
                  ],
                  objects: {
                    red: {
                      found: !0,
                      x: 0.43,
                      y: 0.25,
                      zone: `MAIN_BOX`,
                      pixels: 400,
                    },
                    yellow: {
                      found: !0,
                      x: 0.57,
                      y: 0.25,
                      zone: `MAIN_BOX`,
                      pixels: 400,
                    },
                    green: {
                      found: !0,
                      x: 0.5,
                      y: 0.35,
                      zone: `MAIN_BOX`,
                      pixels: 400,
                    },
                  },
                }
              : { ...St, simulated: !0, fps: 60 },
          ),
            (n = requestAnimationFrame(r)));
        };
      return ((n = requestAnimationFrame(r)), () => cancelAnimationFrame(n));
    }, [e, t]),
    (0, i.useEffect)(() => {
      if (!e || t) {
        e || (s(St), l(`idle`));
        return;
      }
      let n = 0,
        i = !1,
        o = null,
        c = null,
        u = performance.now(),
        f = 0,
        p = -1,
        m = !0,
        h = [],
        g = null,
        _ = document.createElement(`canvas`);
      ((_.width = 128), (_.height = 96));
      let v = _.getContext(`2d`, { willReadFrequently: !0 }),
        y = { red: { track: X, misses: 0 }, yellow: { track: X, misses: 0 }, green: { track: X, misses: 0 } },
        b = (e, t) => {
          let n = y[e];
          return t.found
            ? ((n.misses = 0),
              (n.track = n.track.found
                ? {
                    ...t,
                    x: n.track.x * 0.35 + t.x * 0.65,
                    y: n.track.y * 0.35 + t.y * 0.65,
                    pixels: Math.round(n.track.pixels * 0.35 + t.pixels * 0.65),
                  }
                : t),
              (n.track.zone = wt(n.track.x, n.track.y)),
              n.track)
            : ((n.misses += 1),
              n.track.found && n.misses <= 6 ? n.track : ((n.track = X), X));
        },
        x = Math.ceil(_.width / 8);
      Math.ceil(_.height / 8);
      let S = (e) => {
          if (e.length < 6) return X;
          let t = new Map();
          for (let [n, r] of e) {
            let e = Math.floor(r / 8) * x + Math.floor(n / 8);
            t.set(e, (t.get(e) ?? 0) + 1);
          }
          let n = -1,
            r = 0;
          for (let [e, i] of t) {
            let t =
              i *
              (wt(
                1 - ((e % x) * 8 + 8 / 2) / _.width,
                (Math.floor(e / x) * 8 + 8 / 2) / _.height,
              ) === `MAIN_BOX`
                ? 1.35
                : 1);
            t > r && ((r = t), (n = e));
          }
          if (n < 0) return X;
          let i = (n % x) * 8 + 8 / 2,
            a = Math.floor(n / x) * 8 + 8 / 2,
            o = 0,
            s = 0,
            c = 0;
          for (let [t, n] of e)
            Math.hypot(t - i, n - a) > 17.6 || ((o += t), (s += n), c++);
          if (c < 6) return X;
          let l = 1 - o / c / _.width,
            u = s / c / _.height;
          return { found: !0, x: l, y: u, zone: wt(l, u), pixels: c };
        },
        ee = (e) => {
          if (!v) return { red: X, yellow: X, green: X };
          v.drawImage(e, 0, 0, _.width, _.height);
          let { data: t } = v.getImageData(0, 0, _.width, _.height),
            n = [],
            r = [],
            gq = [];
          for (let e = 0, i = 0; e < t.length; e += 4, i++) {
            let a = t[e],
              o = t[e + 1],
              s = t[e + 2],
              c = Math.max(a, o, s),
              l = Math.min(a, o, s);
            if (c < 35 || c - l < 20) continue;
            let u = i % _.width,
              d = (i - u) / _.width,
              f = c - l,
              p;
            ((p =
              a === c
                ? ((o - s) / f) * 60
                : o === c
                  ? 120 + ((s - a) / f) * 60
                  : 240 + ((a - o) / f) * 60),
              (p = (p + 360) % 360),
              (p < 18 || p >= 347) &&
              a === c &&
              (c - l) / c > 0.36 &&
              a - o > 22 &&
              a - s > 22
                ? n.push([u, d])
                : p >= 38 && p < 75 && o > s
                  ? r.push([u, d])
                  : p >= 90 &&
                    p < 165 &&
                    o === c &&
                    (c - l) / c > 0.3 &&
                    o - a > 20 &&
                    gq.push([u, d]));
          }
          return { red: b(`red`, S(n)), yellow: b(`yellow`, S(r)), green: b(`green`, S(gq)) };
        };
      return (
        (async () => {
          try {
            if (typeof navigator > `u` || !navigator.mediaDevices?.getUserMedia)
              throw Error(
                window?.isSecureContext === !1
                  ? `Camera needs a secure (https) page. Open the app over https and retry.`
                  : `This browser does not expose a camera API. Use simulation mode instead.`,
              );
            l(`loading`);
            try {
              o = await navigator.mediaDevices.getUserMedia({
                video: {
                  width: { ideal: 640 },
                  height: { ideal: 480 },
                  facingMode: `user`,
                },
                audio: !1,
              });
            } catch {
              o = await navigator.mediaDevices.getUserMedia({
                video: !0,
                audio: !1,
              });
            }
            if (i) return;
            let e = a.current;
            for (let t = 0; !e && t < 40; t++) {
              if ((await new Promise((e) => setTimeout(e, 50)), i)) return;
              e = a.current;
            }
            if (!e) throw Error(`Video surface not ready. Press retry.`);
            ((e.srcObject = o),
              (e.muted = !0),
              (e.playsInline = !0),
              await e.play().catch(() => void 0),
              l(`live`),
              d(null));
            try {
              let e = await r(
                  () => import("./vision_bundle.js"),
                  __vite__mapDeps([0, 1]),
                ),
                t = {
                  wasmLoaderPath: new URL(yt, window.location.href).href,
                  wasmBinaryPath: new URL(bt, window.location.href).href,
                },
                n = (e) => ({
                  baseOptions: {
                    modelAssetPath: `/models/hand_landmarker.task`,
                    ...(e ? { delegate: e } : {}),
                  },
                  runningMode: `VIDEO`,
                  numHands: 8,
                  minHandDetectionConfidence: 0.4,
                  minHandPresenceConfidence: 0.4,
                  minTrackingConfidence: 0.4,
                }),
                a;
              try {
                a = await e.HandLandmarker.createFromOptions(t, n(`GPU`));
              } catch {
                a = await e.HandLandmarker.createFromOptions(t, n());
              }
              let o = null;
              try {
                let n = (e) => ({
                  baseOptions: {
                    modelAssetPath: `/models/pose_landmarker_lite.task`,
                    ...(e ? { delegate: e } : {}),
                  },
                  runningMode: `VIDEO`,
                  numPoses: 4,
                  minPoseDetectionConfidence: 0.3,
                  minPosePresenceConfidence: 0.3,
                  minTrackingConfidence: 0.3,
                });
                try {
                  o = await e.PoseLandmarker.createFromOptions(t, n(`GPU`));
                } catch {
                  o = await e.PoseLandmarker.createFromOptions(t, n());
                }
              } catch (e) {
                (console.warn(`[orbit] pose model failed`, e), (o = null));
              }
              if (i) return;
              c = { hand: a, pose: o };
            } catch {
              c = null;
            }
            let t = () => {
              if (i || !a.current) return;
              let e = a.current;
              if (e.readyState >= 2 && c) {
                if (e.currentTime === p) {
                  n = requestAnimationFrame(t);
                  return;
                }
                p = e.currentTime;
                let r = performance.now();
                ((f = f
                  ? f * 0.85 + (1e3 / Math.max(1, r - u)) * 0.15
                  : 1e3 / Math.max(1, r - u)),
                  (u = r));
                let i = ee(e),
                  a = (e) => {
                    let t = e.map((e) => ({ x: 1 - e.x, y: e.y }));
                    if (!t[11] || !t[12] || !t[23] || !t[24]) return xt;
                    let n = (t) => {
                        let n = e[t],
                          r = n?.visibility ?? n?.presence ?? 1;
                        return typeof r != `number` || r > 0.5;
                      },
                      r = {
                        x: (t[11].x + t[12].x) / 2,
                        y: (t[11].y + t[12].y) / 2,
                      },
                      i = {
                        x: (t[23].x + t[24].x) / 2,
                        y: (t[23].y + t[24].y) / 2,
                      },
                      a = (Math.atan2(i.x - r.x, i.y - r.y) * 180) / Math.PI,
                      o = Math.max(0.05, Math.hypot(i.x - r.x, i.y - r.y)),
                      s = [t[15], t[16]].filter(Boolean),
                      c = s.length
                        ? Math.max(
                            ...s.map(
                              (e) => Math.hypot(e.x - r.x, e.y - r.y) / o,
                            ),
                          )
                        : 0,
                      l = (r.x - i.x) / o,
                      u = [n(13) && n(15), n(14) && n(16)].filter(
                        Boolean,
                      ).length,
                      d = [n(25) && n(27), n(26) && n(28)].filter(
                        Boolean,
                      ).length,
                      f =
                        n(27) && n(28)
                          ? Math.round(
                              (Math.hypot(
                                t[27].x - t[28].x,
                                t[27].y - t[28].y,
                              ) /
                                o) *
                                100,
                            ) / 100
                          : 0,
                      p =
                        u === 2 && d === 2
                          ? `Full body (2 arms · 2 legs)`
                          : d > 0
                            ? `Partial body (${u} arms · ${d} legs)`
                            : `Upper body only — step back from the camera`;
                    return {
                      present: !0,
                      landmarks: t,
                      tiltDeg: Math.round(a),
                      orientation: Tt(a),
                      reach: Math.round(c * 100) / 100,
                      coverage: p,
                      armsTracked: u,
                      legsTracked: d,
                      stance: f,
                      posture:
                        c > 1.05
                          ? `Extended reach to payload`
                          : c > 0.7
                            ? `Working at rack`
                            : l > 0.35
                              ? `Leaning left of rack axis`
                              : l < -0.35
                                ? `Leaning right of rack axis`
                                : `Neutral / arms tucked`,
                    };
                  },
                  o = [];
                if (m && c.pose)
                  try {
                    h = c.pose.detectForVideo(e, r)?.landmarks ?? [];
                  } catch (e) {
                    console.warn(`[orbit] pose detect failed`, e);
                  }
                o = h.map((e) => a(e)).filter((e) => e.present);
                let l = o[0] ?? xt;
                if (!m || !c.pose)
                  try {
                    g = c.hand.detectForVideo(e, r);
                  } catch (e) {
                    console.warn(`[orbit] hand detect failed`, e);
                  }
                m = !m;
                let d = g,
                  _ = (e, t) =>
                    e.found && Math.hypot(e.x - t.x, e.y - t.y) < 0.14,
                  v = (e) => {
                    let t = null,
                      n = 1 / 0;
                    return (
                      o.forEach((r, i) => {
                        for (let a of [15, 16, 11, 12]) {
                          let o = r.landmarks[a];
                          if (!o) continue;
                          let s = Math.hypot(o.x - e.x, o.y - e.y);
                          s < n && ((n = s), (t = i));
                        }
                      }),
                      t
                    );
                  },
                  b = (d?.landmarks ?? []).map((e, t) => {
                    let n = e.map((e) => ({ x: 1 - e.x, y: e.y })),
                      r = n[8] ?? n[0],
                      a = n[4] ?? r;
                    return {
                      landmarks: n,
                      handedness:
                        d.handednesses?.[t]?.[0]?.categoryName ??
                        `Hand ${t + 1}`,
                      pinch: Math.hypot(r.x - a.x, r.y - a.y) < 0.06,
                      zone: wt(r.x, r.y),
                      holding: _(i.red, r)
                        ? `red`
                        : _(i.yellow, r)
                          ? `yellow`
                          : i.green && _(i.green, r)
                            ? `green`
                            : null,
                      crew: v(n[0] ?? r),
                    };
                  });
                for (let e of b) {
                  if (!e.pinch || !e.holding) continue;
                  let t = e.landmarks[8] ?? e.landmarks[0],
                    n = y[e.holding],
                    r = {
                      found: !0,
                      x: t.x,
                      y: t.y,
                      zone: wt(t.x, t.y),
                      pixels: n.track.pixels || 60,
                    };
                  ((n.track = n.track.found
                    ? {
                        ...r,
                        x: n.track.x * 0.2 + r.x * 0.8,
                        y: n.track.y * 0.2 + r.y * 0.8,
                      }
                    : r),
                    (n.track.zone = wt(n.track.x, n.track.y)),
                    (n.misses = 0),
                    (i[e.holding] = n.track));
                }
                let x =
                    b.find((e) => e.holding) ??
                    b.find((e) => e.pinch) ??
                    b[0] ??
                    null,
                  S = Math.max(
                    o.length,
                    new Set(b.map((e) => e.crew).filter((e) => e !== null))
                      .size,
                    +!!b.length,
                  );
                s(
                  x
                    ? {
                        present: !0,
                        landmarks: x.landmarks,
                        handedness:
                          b.length > 1
                            ? `${b.map((e) => e.handedness).join(` + `)} (${b.length} hands)`
                            : x.handedness,
                        zone: x.zone,
                        fps: Math.round(f),
                        pinch: x.pinch,
                        pose: (x.crew === null ? void 0 : o[x.crew]) ?? l,
                        objects: i,
                        holding: x.holding,
                        simulated: !1,
                        hands: b,
                        poses: o,
                        crew: S,
                      }
                    : {
                        ...St,
                        fps: Math.round(f),
                        pose: l,
                        objects: i,
                        poses: o,
                        crew: S,
                      },
                );
              }
              n = requestAnimationFrame(t);
            };
            n = requestAnimationFrame(t);
          } catch (e) {
            if (i) return;
            (l(`error`), d(Ot(e)));
          }
        })(),
        () => {
          ((i = !0),
            cancelAnimationFrame(n),
            c?.hand?.close?.(),
            c?.pose?.close?.(),
            o?.getTracks().forEach((e) => e.stop()));
        }
      );
    }, [e, t, f]),
    { videoRef: a, frame: o, status: c, error: u, retry: v, setSimPointer: y }
  );
}
var At = [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 4],
    [0, 5],
    [5, 6],
    [6, 7],
    [7, 8],
    [5, 9],
    [9, 10],
    [10, 11],
    [11, 12],
    [9, 13],
    [13, 14],
    [14, 15],
    [15, 16],
    [13, 17],
    [17, 18],
    [18, 19],
    [19, 20],
    [0, 17],
  ],
  jt = [
    [11, 12],
    [11, 23],
    [12, 24],
    [23, 24],
    [11, 13],
    [13, 15],
    [15, 17],
    [15, 19],
    [15, 21],
    [12, 14],
    [14, 16],
    [16, 18],
    [16, 20],
    [16, 22],
    [23, 25],
    [25, 27],
    [27, 29],
    [27, 31],
    [29, 31],
    [24, 26],
    [26, 28],
    [28, 30],
    [28, 32],
    [30, 32],
    [0, 11],
    [0, 12],
  ];
function Mt({
  videoRef: e,
  frame: t,
  activeZone: n,
  status: r,
  error: o,
  onRetry: s,
  onSimulate: c,
  onSimPointer: l,
  placed: u,
  picked: d,
}) {
  let f = (0, i.useRef)(null),
    [p, m] = (0, i.useState)(!1);
  ((0, i.useEffect)(() => m(Dt()), []),
    (0, i.useEffect)(() => {
      let e = f.current;
      if (!e) return;
      let n = e.getContext(`2d`);
      if (!n) return;
      let i = getComputedStyle(e),
        o = (e) => i.getPropertyValue(`--zone-${e}`).trim(),
        s = i.getPropertyValue(`--background`).trim(),
        c = i.getPropertyValue(`--foreground`).trim(),
        { width: l, height: p } = e;
      n.clearRect(0, 0, l, p);
      let m = [200, 145, 310, 60],
        h = t.poses.length ? t.poses : t.pose.present ? [t.pose] : [];
      h.forEach((e, t) => {
        let r = e.landmarks;
        if (!r.length) return;
        let i = m[t % m.length];
        ((n.strokeStyle = `oklch(0.72 0.13 ${i} / 0.78)`), (n.lineWidth = 3));
        for (let [e, t] of jt) {
          let i = r[e],
            a = r[t];
          !i ||
            !a ||
            (n.beginPath(),
            n.moveTo(i.x * l, i.y * p),
            n.lineTo(a.x * l, a.y * p),
            n.stroke());
        }
        ((n.fillStyle = `oklch(0.87 0.15 ${i})`),
          r.forEach((e, t) => {
            let r = [
              0, 11, 12, 13, 14, 15, 16, 23, 24, 25, 26, 27, 28,
            ].includes(t);
            (n.beginPath(),
              n.arc(e.x * l, e.y * p, r ? 6 : 4, 0, Math.PI * 2),
              n.fill(),
              (n.lineWidth = 1.5),
              (n.strokeStyle = `oklch(0.98 0 0 / 0.9)`),
              n.stroke());
          }));
        let a = r[0];
        if (a && h.length > 1) {
          ((n.font = `700 12px JetBrains Mono, monospace`),
            (n.textAlign = `center`));
          let e = `CREW ${t + 1}`,
            r = n.measureText(e).width + 12;
          ((n.fillStyle = `oklch(0.12 0.02 240 / 0.88)`),
            n.fillRect(a.x * l - r / 2, a.y * p - 36, r, 19),
            (n.fillStyle = `oklch(0.87 0.15 ${i})`),
            n.fillText(e, a.x * l, a.y * p - 22));
        }
      });
      let g = (e) => {
          let t = a.find((t) => t.id === e);
          return t ? { x: t.x + t.w / 2, y: t.y + t.h / 2 } : null;
        },
        _ = [
          [
            t.objects.red,
            o(`red`),
            `RED SAMPLE`,
            u?.red ?? null,
            d?.red ?? !1,
            0.43,
          ],
          [
            t.objects.yellow,
            o(`yellow`),
            `YELLOW SAMPLE`,
            u?.yellow ?? null,
            d?.yellow ?? !1,
            0.57,
          ],
          [
            t.objects.green ?? X,
            o(`green`),
            `GREEN SAMPLE`,
            u?.green ?? null,
            d?.green ?? !1,
            0.5,
          ],
        ];
      for (let [e, i, a, o, u, d] of _) {
        let f = g(o),
          m = !f && !e.found && (r === `live` || r === `simulated`);
        if (!f && !e.found && !m) continue;
        let h = u && t.present ? t.landmarks[8] : void 0,
          _ = f ?? (m ? (h ?? { x: d, y: 0.25 }) : { x: e.x, y: e.y }),
          v = _.x * l,
          y = _.y * p;
        ((n.strokeStyle = i),
          (n.fillStyle = s),
          (n.lineWidth = m ? 2 : 5),
          n.setLineDash(m ? [5, 5] : []),
          n.beginPath(),
          n.arc(v, y, m ? 19 : 25, 0, Math.PI * 2),
          n.fill(),
          n.stroke(),
          n.setLineDash([]),
          (n.strokeStyle = c),
          (n.lineWidth = 2),
          n.beginPath(),
          n.arc(v, y, m ? 13 : 18, 0, Math.PI * 2),
          n.stroke(),
          (n.fillStyle = i),
          n.beginPath(),
          n.arc(v, y, m ? 4 : 6, 0, Math.PI * 2),
          n.fill(),
          (n.font = `700 13px JetBrains Mono, monospace`),
          (n.textAlign = `center`));
        let b = m
            ? `${a} · ${h ? `HAND GUIDE` : `RACK GUIDE`}`
            : f
              ? `${a} · PLACED`
              : a,
          x = n.measureText(b).width + 12,
          S = m && a === `YELLOW SAMPLE` ? y + 27 : y - 43;
        ((n.fillStyle = s),
          n.fillRect(v - x / 2, S, x, 20),
          (n.fillStyle = i),
          n.fillText(b, v, S + 15));
      }
      if (!t.present) return;
      let v = t.hands.length
        ? t.hands
        : [{ landmarks: t.landmarks, pinch: t.pinch }];
      for (let e of v) {
        let t = e.landmarks;
        ((n.strokeStyle = `oklch(0.82 0.17 85)`), (n.lineWidth = 2));
        for (let [e, r] of At) {
          let i = t[e],
            a = t[r];
          !i ||
            !a ||
            (n.beginPath(),
            n.moveTo(i.x * l, i.y * p),
            n.lineTo(a.x * l, a.y * p),
            n.stroke());
        }
        n.fillStyle = e.pinch ? `oklch(0.85 0.19 145)` : `oklch(0.85 0.14 200)`;
        for (let e of t)
          (n.beginPath(),
            n.arc(e.x * l, e.y * p, 3.5, 0, Math.PI * 2),
            n.fill());
      }
    }, [t, u?.red, u?.yellow, u?.green, d?.red, d?.yellow, d?.green, r]));
  let h = (e) => {
    if (r !== `simulated`) return;
    let t = e.currentTarget.getBoundingClientRect();
    l({ x: (e.clientX - t.left) / t.width, y: (e.clientY - t.top) / t.height });
  };
  return (0, Y.jsxs)(`div`, {
    className: `panel relative overflow-hidden`,
    children: [
      (0, Y.jsxs)(`div`, {
        className: `panel-title`,
        children: [
          (0, Y.jsx)(`span`, { children: `Live camera · fixed payload view` }),
          (0, Y.jsx)(`span`, {
            className: `text-console`,
            children: t.fps ? `${t.fps} fps` : `—`,
          }),
        ],
      }),
      (0, Y.jsxs)(`div`, {
        className: `relative aspect-[4/3] w-full touch-none bg-background`,
        onPointerMove: h,
        onPointerDown: h,
        onPointerLeave: () => r === `simulated` && l(null),
        children: [
          (0, Y.jsx)(`video`, {
            ref: e,
            muted: !0,
            autoPlay: !0,
            playsInline: !0,
            className: `absolute inset-0 h-full w-full scale-x-[-1] object-cover opacity-90`,
          }),
          (0, Y.jsx)(`canvas`, {
            ref: f,
            width: 640,
            height: 480,
            className: `absolute inset-0 h-full w-full`,
          }),
          a.map((e) =>
            (0, Y.jsx)(
              `div`,
              {
                "data-active": n === e.id,
                className: `zone-box`,
                style: {
                  left: `${e.x * 100}%`,
                  top: `${e.y * 100}%`,
                  width: `${e.w * 100}%`,
                  height: `${e.h * 100}%`,
                  "--zone": `var(--zone-${e.tone})`,
                },
                children: (0, Y.jsx)(`span`, { children: e.label }),
              },
              e.id,
            ),
          ),
          (r === `idle` || r === `loading` || r === `error`) &&
            (0, Y.jsxs)(`div`, {
              className: `absolute inset-0 flex flex-col items-center justify-center gap-3 bg-background/90 px-6 text-center`,
              children: [
                (0, Y.jsx)(`p`, {
                  className: `text-console text-sm uppercase tracking-[0.25em] text-muted-foreground`,
                  children:
                    r === `loading`
                      ? `Initialising onboard vision module…`
                      : r === `error`
                        ? `Camera feed unavailable`
                        : `Camera standby`,
                }),
                o &&
                  (0, Y.jsx)(`p`, {
                    className: `text-console max-w-sm text-xs text-destructive`,
                    children: o,
                  }),
                p &&
                  (0, Y.jsx)(`p`, {
                    className: `text-console max-w-sm text-xs text-muted-foreground`,
                    children: `This preview window blocks webcam access. Press “Open in new tab”, allow the camera once, and the live feed starts there.`,
                  }),
                r !== `loading` &&
                  (0, Y.jsxs)(`div`, {
                    className: `text-console flex flex-wrap justify-center gap-2 text-[11px] uppercase tracking-widest`,
                    children: [
                      (0, Y.jsx)(vt, {
                        onClick: s,
                        size: `sm`,
                        children:
                          r === `error` ? `Retry camera` : `Enable camera`,
                      }),
                      p &&
                        (0, Y.jsx)(vt, {
                          onClick: () =>
                            window.open(
                              window.location.href,
                              `_blank`,
                              `noopener`,
                            ),
                          variant: `outline`,
                          size: `sm`,
                          children: `Open in new tab`,
                        }),
                      (0, Y.jsx)(vt, {
                        onClick: c,
                        variant: `outline`,
                        size: `sm`,
                        children: `Simulation mode`,
                      }),
                    ],
                  }),
              ],
            }),
          (0, Y.jsxs)(`div`, {
            className: `text-console absolute bottom-0 left-0 right-0 flex items-center justify-between gap-2 border-t border-border/60 bg-background/80 px-3 py-2 text-[11px] uppercase tracking-widest`,
            children: [
              (0, Y.jsx)(`span`, {
                "data-on": t.present,
                className: `signal`,
                children: t.present
                  ? `Hand print acquired · ${t.handedness}${t.pinch ? ` · grasp` : ``}`
                  : `No hand print in frame`,
              }),
              (0, Y.jsxs)(`span`, {
                className: `text-muted-foreground`,
                children: [
                  r === `simulated` ? `sim pointer · ` : ``,
                  t.crew > 1 ? `crew ${t.crew} · ` : ``,
                  t.hands.length > 1 ? `${t.hands.length} hands · ` : ``,
                  t.pose.present ? `${t.pose.coverage} · ` : ``,
                  t.zone ? t.zone.replace(`_`, ` `) : `free space`,
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
var Nt = [
  { label: `All`, value: `all` },
  { label: `Steps`, value: `step` },
  { label: `Warnings`, value: `warning` },
  { label: `Voice`, value: `voice` },
  { label: `Pause`, value: `pause` },
  { label: `Errors`, value: `error` },
];
function Pt(e) {
  let [t, n] = (0, i.useState)(`all`),
    [r, a] = (0, i.useState)(!1),
    o = (0, i.useMemo)(
      () => e.events.filter((e) => t === `all` || e.kind === t),
      [e.events, t],
    ),
    s = Math.round((e.completedCount / e.experiment.steps.length) * 100);
  return (0, Y.jsxs)(`div`, {
    className: `space-y-4`,
    children: [
      (0, Y.jsxs)(`section`, {
        className: `panel`,
        children: [
          (0, Y.jsxs)(`div`, {
            className: `panel-title`,
            children: [
              (0, Y.jsx)(`span`, {
                children: `Mission state & estimated timeline`,
              }),
              (0, Y.jsx)(`span`, {
                className: `text-console text-accent`,
                children: e.status,
              }),
            ],
          }),
          (0, Y.jsxs)(`div`, {
            className: `space-y-3 p-4`,
            children: [
              (0, Y.jsxs)(`div`, {
                className: `flex flex-wrap gap-2`,
                children: [
                  e.status === `RUNNING` &&
                    (0, Y.jsx)(`button`, {
                      className: `control-button`,
                      onClick: e.onPause,
                      children: `Pause`,
                    }),
                  e.status === `PAUSED` &&
                    (0, Y.jsx)(`button`, {
                      className: `control-button`,
                      onClick: e.onResume,
                      children: `Resume`,
                    }),
                  ![`STANDBY`, `COMPLETED`, `ENDED`].includes(e.status) &&
                    (0, Y.jsx)(`button`, {
                      className: `control-button border-destructive text-destructive`,
                      onClick: e.onEnd,
                      children: `End experiment`,
                    }),
                  (0, Y.jsx)(`button`, {
                    className: `control-button ml-auto`,
                    onClick: () => a((e) => !e),
                    children: `Experiment report`,
                  }),
                ],
              }),
              (0, Y.jsxs)(`dl`, {
                className: `text-console grid gap-2 text-sm sm:grid-cols-2`,
                children: [
                  (0, Y.jsx)(Z, {
                    label: `Completion`,
                    value: `${e.completedCount}/${e.experiment.steps.length} · ${s}%`,
                  }),
                  (0, Y.jsx)(Z, {
                    label: `Current`,
                    value: e.currentStep?.label ?? `Sequence complete`,
                  }),
                  (0, Y.jsx)(Z, { label: `Elapsed`, value: l(e.elapsed) }),
                  (0, Y.jsx)(Z, { label: `Paused`, value: l(e.totalPauseMs) }),
                  (0, Y.jsx)(Z, {
                    label: `Original duration`,
                    value: l(e.experiment.estimatedDurationMs),
                  }),
                  (0, Y.jsx)(Z, {
                    label: `Updated estimate`,
                    value:
                      e.estimatedFinish?.toLocaleTimeString([], {
                        hour: `2-digit`,
                        minute: `2-digit`,
                      }) ?? `—`,
                  }),
                ],
              }),
              (0, Y.jsx)(`div`, {
                className: `h-2 overflow-hidden rounded bg-secondary`,
                children: (0, Y.jsx)(`div`, {
                  className: `h-full bg-success transition-[width]`,
                  style: { width: `${s}%` },
                }),
              }),
              (0, Y.jsx)(`p`, {
                className: `text-[10px] uppercase tracking-widest text-muted-foreground`,
                children: `Estimated timeline · recalculates after pauses, warnings, and repeated actions`,
              }),
            ],
          }),
        ],
      }),
      (0, Y.jsxs)(`section`, {
        className: `panel`,
        children: [
          (0, Y.jsx)(`div`, {
            className: `panel-title`,
            children: `Demo controls · shared state engine`,
          }),
          (0, Y.jsxs)(`div`, {
            className: `grid grid-cols-2 gap-2 p-4 sm:grid-cols-4`,
            children: [
              (0, Y.jsx)(`button`, {
                className: `control-button`,
                onClick: e.onDemoCorrect,
                children: `Correct step`,
              }),
              (0, Y.jsx)(`button`, {
                className: `control-button`,
                onClick: e.onDemoWrong,
                children: `Wrong step`,
              }),
              (0, Y.jsx)(`button`, {
                className: `control-button`,
                onClick: e.onDemoLow,
                children: `Low confidence`,
              }),
              (0, Y.jsx)(`button`, {
                className: `control-button`,
                onClick: e.onDemoSkip,
                children: `Skip step`,
              }),
              (0, Y.jsx)(`button`, {
                className: `control-button`,
                onClick: e.onPause,
                children: `Pause`,
              }),
              (0, Y.jsx)(`button`, {
                className: `control-button`,
                onClick: e.onResume,
                children: `Resume`,
              }),
              (0, Y.jsx)(`button`, {
                className: `control-button`,
                onClick: e.onDemoCorrect,
                children: `Complete step`,
              }),
              (0, Y.jsx)(`button`, {
                className: `control-button`,
                onClick: e.onEnd,
                children: `End`,
              }),
            ],
          }),
        ],
      }),
      (0, Y.jsxs)(`section`, {
        className: `panel`,
        children: [
          (0, Y.jsx)(`div`, {
            className: `panel-title`,
            children: `AI step confidence history`,
          }),
          (0, Y.jsxs)(`div`, {
            className: `space-y-3 p-4`,
            children: [
              e.results.length === 0
                ? (0, Y.jsx)(`p`, {
                    className: `text-console text-xs text-muted-foreground`,
                    children: `No completed detections yet.`,
                  })
                : e.results.map((e) => {
                    let t =
                      e.confidence >= 90
                        ? `High`
                        : e.confidence >= 70
                          ? `Medium`
                          : `Low`;
                    return (0, Y.jsxs)(
                      `div`,
                      {
                        children: [
                          (0, Y.jsxs)(`div`, {
                            className: `text-console mb-1 flex justify-between gap-3 text-xs`,
                            children: [
                              (0, Y.jsxs)(`span`, {
                                children: [
                                  e.label,
                                  e.simulated ? ` · DEMO` : ``,
                                ],
                              }),
                              (0, Y.jsxs)(`span`, {
                                children: [e.confidence, `% · `, t],
                              }),
                            ],
                          }),
                          (0, Y.jsx)(`div`, {
                            className: `h-1.5 overflow-hidden rounded bg-secondary`,
                            children: (0, Y.jsx)(`div`, {
                              className:
                                e.confidence < 70
                                  ? `h-full bg-destructive`
                                  : e.confidence < 90
                                    ? `h-full bg-warning`
                                    : `h-full bg-success`,
                              style: { width: `${e.confidence}%` },
                            }),
                          }),
                        ],
                      },
                      `${e.stepId}-${e.t}`,
                    );
                  }),
              (0, Y.jsx)(`p`, {
                className: `text-[10px] uppercase tracking-widest text-muted-foreground`,
                children: `AI confidence · demo actions are simulated, not measured model accuracy`,
              }),
            ],
          }),
        ],
      }),
      (0, Y.jsxs)(`section`, {
        className: `panel`,
        children: [
          (0, Y.jsx)(`div`, {
            className: `panel-title`,
            children: `Orientation tracking`,
          }),
          (0, Y.jsxs)(`div`, {
            className: `space-y-3 p-4`,
            children: [
              (0, Y.jsx)(`p`, {
                className: `text-console text-xs text-accent`,
                children: `ACTIVE · DEMO / SIMULATED IMU`,
              }),
              [`pitch`, `roll`, `yaw`].map((t) =>
                (0, Y.jsxs)(
                  `label`,
                  {
                    className: `text-console grid grid-cols-[3.5rem_1fr_3rem] items-center gap-2 text-xs uppercase`,
                    children: [
                      (0, Y.jsx)(`span`, { children: t }),
                      (0, Y.jsx)(`input`, {
                        type: `range`,
                        min: `-180`,
                        max: `180`,
                        value: e.imu[t],
                        onChange: (n) => e.onImu(t, Number(n.target.value)),
                      }),
                      (0, Y.jsxs)(`span`, {
                        className: `text-right`,
                        children: [e.imu[t], `°`],
                      }),
                    ],
                  },
                  t,
                ),
              ),
              (0, Y.jsx)(`p`, {
                className: `text-[10px] uppercase tracking-widest text-muted-foreground`,
                children: `Camera pose remains rack-relative; these controls are an IMU integration point.`,
              }),
            ],
          }),
        ],
      }),
      (0, Y.jsxs)(`section`, {
        className: `panel`,
        children: [
          (0, Y.jsxs)(`div`, {
            className: `panel-title`,
            children: [
              (0, Y.jsx)(`span`, { children: `Experiment event console` }),
              (0, Y.jsxs)(`span`, { children: [e.events.length, ` events`] }),
            ],
          }),
          (0, Y.jsxs)(`div`, {
            className: `space-y-3 p-4`,
            children: [
              (0, Y.jsx)(`div`, {
                className: `flex flex-wrap gap-1`,
                children: Nt.map((e) =>
                  (0, Y.jsx)(
                    `button`,
                    {
                      className:
                        t === e.value
                          ? `filter-button border-accent text-accent`
                          : `filter-button`,
                      onClick: () => n(e.value),
                      children: e.label,
                    },
                    e.value,
                  ),
                ),
              }),
              (0, Y.jsx)(`div`, {
                className: `text-console max-h-52 space-y-2 overflow-y-auto text-xs`,
                children:
                  o.length === 0
                    ? (0, Y.jsx)(`p`, {
                        className: `text-muted-foreground`,
                        children: `No matching events.`,
                      })
                    : [...o]
                        .reverse()
                        .map((e) =>
                          (0, Y.jsxs)(
                            `div`,
                            {
                              className: `grid grid-cols-[4.5rem_4.5rem_1fr] gap-2 border-b border-border/60 pb-2`,
                              children: [
                                (0, Y.jsx)(`span`, { children: l(e.t) }),
                                (0, Y.jsx)(`span`, {
                                  className:
                                    e.kind === `warning`
                                      ? `text-destructive`
                                      : `text-muted-foreground`,
                                  children: e.kind,
                                }),
                                (0, Y.jsxs)(`span`, {
                                  children: [
                                    e.message,
                                    e.confidence === void 0
                                      ? ``
                                      : ` · ${e.confidence}%`,
                                    e.simulated ? ` · DEMO` : ``,
                                  ],
                                }),
                              ],
                            },
                            e.id,
                          ),
                        ),
              }),
            ],
          }),
        ],
      }),
      (0, Y.jsxs)(`section`, {
        className: `panel`,
        children: [
          (0, Y.jsx)(`div`, {
            className: `panel-title`,
            children: `Experiment replay`,
          }),
          (0, Y.jsxs)(`div`, {
            className: `space-y-3 p-4`,
            children: [
              e.clipUrl
                ? (0, Y.jsx)(`video`, {
                    controls: !0,
                    src: e.clipUrl,
                    className: `aspect-video w-full rounded border border-border bg-secondary`,
                  })
                : (0, Y.jsx)(`div`, {
                    className: `text-console flex aspect-video items-center justify-center rounded border border-dashed border-border bg-secondary/30 text-xs text-muted-foreground`,
                    children: `Video appears here after recording stops`,
                  }),
              (0, Y.jsx)(`div`, {
                className: `flex gap-1 overflow-x-auto pb-1`,
                children: e.events.map((e) =>
                  (0, Y.jsx)(
                    `div`,
                    {
                      title: e.message,
                      className:
                        e.kind === `warning`
                          ? `h-8 w-2 shrink-0 rounded bg-destructive`
                          : e.kind === `pause`
                            ? `h-8 w-2 shrink-0 rounded bg-warning`
                            : `h-8 w-2 shrink-0 rounded bg-accent`,
                    },
                    `marker-${e.id}`,
                  ),
                ),
              }),
            ],
          }),
        ],
      }),
      r &&
        (0, Y.jsxs)(`section`, {
          className: `panel`,
          children: [
            (0, Y.jsxs)(`div`, {
              className: `panel-title`,
              children: [
                (0, Y.jsx)(`span`, { children: `Experiment report` }),
                (0, Y.jsx)(`button`, {
                  className: `filter-button`,
                  onClick: () => a(!1),
                  children: `Close`,
                }),
              ],
            }),
            (0, Y.jsxs)(`div`, {
              className: `space-y-3 p-4`,
              children: [
                (0, Y.jsxs)(`dl`, {
                  className: `text-console grid gap-2 text-sm sm:grid-cols-2`,
                  children: [
                    (0, Y.jsx)(Z, {
                      label: `Experiment`,
                      value: e.report.experiment.name,
                    }),
                    (0, Y.jsx)(Z, {
                      label: `Final status`,
                      value: e.report.status,
                    }),
                    (0, Y.jsx)(Z, {
                      label: `Steps`,
                      value: `${e.report.completedSteps}/${e.report.totalSteps}`,
                    }),
                    (0, Y.jsx)(Z, {
                      label: `Average confidence`,
                      value:
                        e.report.averageConfidence === null
                          ? `—`
                          : `${e.report.averageConfidence}%`,
                    }),
                    (0, Y.jsx)(Z, {
                      label: `Warnings`,
                      value: String(e.report.warnings),
                    }),
                    (0, Y.jsx)(Z, {
                      label: `Out of order`,
                      value: String(e.report.outOfOrderEvents),
                    }),
                    (0, Y.jsx)(Z, {
                      label: `Pauses`,
                      value: String(e.report.pauseCount),
                    }),
                    (0, Y.jsx)(Z, {
                      label: `Pause duration`,
                      value: l(e.report.totalPauseMs),
                    }),
                  ],
                }),
                (0, Y.jsxs)(`div`, {
                  className: `flex flex-wrap gap-2`,
                  children: [
                    (0, Y.jsx)(`button`, {
                      className: `control-button`,
                      onClick: () => e.onDownload(`json`),
                      children: `Export JSON`,
                    }),
                    (0, Y.jsx)(`button`, {
                      className: `control-button`,
                      onClick: () => e.onDownload(`csv`),
                      children: `Export CSV`,
                    }),
                    (0, Y.jsx)(`button`, {
                      className: `control-button`,
                      onClick: () => window.print(),
                      children: `Print report`,
                    }),
                  ],
                }),
                (0, Y.jsxs)(`div`, {
                  className: `border-t border-border pt-3`,
                  children: [
                    (0, Y.jsx)(`p`, {
                      className: `text-console mb-2 text-xs text-success`,
                      children: `Local Data Protection: ENABLED`,
                    }),
                    (0, Y.jsxs)(`div`, {
                      className: `flex gap-2`,
                      children: [
                        (0, Y.jsx)(`input`, {
                          type: `password`,
                          value: e.passphrase,
                          onChange: (t) => e.onPassphrase(t.target.value),
                          placeholder: `Protection passphrase`,
                          className: `text-console min-w-0 flex-1 rounded border border-border bg-secondary/40 px-2 py-1 text-xs`,
                        }),
                        (0, Y.jsx)(`button`, {
                          className: `control-button`,
                          onClick: () => e.onDownload(`encrypted`),
                          children: `Encrypted export`,
                        }),
                      ],
                    }),
                    e.exportMessage &&
                      (0, Y.jsx)(`p`, {
                        className: `text-console mt-2 text-xs text-muted-foreground`,
                        children: e.exportMessage,
                      }),
                    (0, Y.jsx)(`p`, {
                      className: `mt-2 text-[10px] uppercase tracking-widest text-muted-foreground`,
                      children: `AES-GCM browser encryption · passphrase and key are never stored`,
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
    ],
  });
}
function Z({ label: e, value: t }) {
  return (0, Y.jsxs)(`div`, {
    className: `flex justify-between gap-3`,
    children: [
      (0, Y.jsx)(`dt`, {
        className: `text-[10px] uppercase tracking-widest text-muted-foreground`,
        children: e,
      }),
      (0, Y.jsx)(`dd`, { className: `text-right`, children: t }),
    ],
  });
}
var Ft = {
  recording: !1,
  bytes: 0,
  chunks: 0,
  pushed: 0,
  failed: 0,
  clipUrl: null,
  lastError: null,
};
function It(e, t, n) {
  let [r, a] = (0, i.useState)(Ft),
    o = (0, i.useRef)(null),
    s = (0, i.useRef)([]),
    c = (0, i.useRef)(t),
    l = (0, i.useRef)(n);
  ((c.current = t), (l.current = n));
  let u = (0, i.useCallback)(() => {
      let e = o.current;
      e && e.state !== `inactive` && e.stop();
    }, []),
    d = (0, i.useCallback)(() => {
      let t = e.current?.srcObject;
      if (!t) {
        a((e) => ({
          ...e,
          lastError: `No live feed to record — start the camera first.`,
        }));
        return;
      }
      if (typeof MediaRecorder > `u`) {
        a((e) => ({
          ...e,
          lastError: `This browser cannot record video locally.`,
        }));
        return;
      }
      let n = [
          `video/webm;codecs=vp9`,
          `video/webm;codecs=vp8`,
          `video/webm`,
        ].find((e) => MediaRecorder.isTypeSupported(e)),
        r;
      try {
        r = new MediaRecorder(
          t,
          n ? { mimeType: n, videoBitsPerSecond: 12e5 } : void 0,
        );
      } catch (e) {
        a((t) => ({ ...t, lastError: e.message }));
        return;
      }
      ((s.current = []),
        a({ ...Ft, recording: !0 }),
        (r.ondataavailable = (e) => {
          if (!e.data || e.data.size === 0) return;
          (s.current.push(e.data),
            a((t) => ({
              ...t,
              bytes: t.bytes + e.data.size,
              chunks: t.chunks + 1,
            })));
          let t = c.current.trim();
          l.current &&
            t &&
            fetch(t, {
              method: `POST`,
              headers: { "Content-Type": e.data.type || `video/webm` },
              body: e.data,
              mode: `cors`,
            })
              .then((e) =>
                a((t) =>
                  e.ok
                    ? { ...t, pushed: t.pushed + 1 }
                    : {
                        ...t,
                        failed: t.failed + 1,
                        lastError: `Downlink responded ${e.status}`,
                      },
                ),
              )
              .catch((e) =>
                a((t) => ({
                  ...t,
                  failed: t.failed + 1,
                  lastError: e.message,
                })),
              );
        }),
        (r.onstop = () => {
          let e = new Blob(s.current, { type: r.mimeType || `video/webm` }),
            t = URL.createObjectURL(e);
          a((e) => ({ ...e, recording: !1, clipUrl: t }));
        }),
        (o.current = r),
        r.start(2e3));
    }, [e]);
  return ((0, i.useEffect)(() => () => u(), [u]), { ...r, start: d, stop: u });
}
function Q(e, t, n, r = {}) {
  return {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    t: e,
    kind: t,
    message: n,
    ...r,
  };
}
function Lt(e) {
  let {
      experiment: t,
      status: n,
      startedAt: r,
      endedAt: i,
      elapsed: a,
      results: o,
      events: s,
      totalPauseMs: c,
    } = e,
    l = o.map((e) => e.confidence);
  return {
    experiment: { id: t.id, name: t.name },
    status: n,
    startTime: r ? new Date(r).toISOString() : null,
    endTime: i ? new Date(i).toISOString() : null,
    totalDurationMs: a,
    totalSteps: t.steps.length,
    completedSteps: o.length,
    skippedSteps: s.filter((e) => e.message.includes(`skipped`)).length,
    outOfOrderEvents: s.filter(
      (e) => e.kind === `warning` && e.message.includes(`Out-of-order`),
    ).length,
    warnings: s.filter((e) => e.kind === `warning`).length,
    averageConfidence: l.length
      ? Math.round(l.reduce((e, t) => e + t, 0) / l.length)
      : null,
    pauseCount: s.filter((e) => e.message === `Experiment paused`).length,
    totalPauseMs: c,
    results: o,
    events: s,
  };
}
function Rt(e) {
  let t = (e) => `"${String(e ?? ``).replaceAll(`"`, `""`)}"`;
  return [
    [`timestamp_ms`, `type`, `step`, `message`, `confidence`, `simulated`],
    ...e.events.map((e) => [
      e.t,
      e.kind,
      e.stepId ?? ``,
      e.message,
      e.confidence ?? ``,
      e.simulated ?? !1,
    ]),
  ].map((e) => e.map((e) => t(e)).join(`,`)).join(`
`);
}
var zt = new TextEncoder();
function Bt(e) {
  let t = ``;
  for (let n of e) t += String.fromCharCode(n);
  return btoa(t);
}
async function Vt(e, t) {
  if (!t.trim()) throw Error(`Enter a protection passphrase first.`);
  let n = crypto.getRandomValues(new Uint8Array(16)),
    r = crypto.getRandomValues(new Uint8Array(12)),
    i = await crypto.subtle.importKey(`raw`, zt.encode(t), `PBKDF2`, !1, [
      `deriveKey`,
    ]),
    a = await crypto.subtle.deriveKey(
      { name: `PBKDF2`, salt: n, iterations: 18e4, hash: `SHA-256` },
      i,
      { name: `AES-GCM`, length: 256 },
      !1,
      [`encrypt`],
    ),
    o = await crypto.subtle.encrypt(
      { name: `AES-GCM`, iv: r },
      a,
      zt.encode(JSON.stringify(e)),
    );
  return JSON.stringify(
    {
      version: 1,
      algorithm: `AES-GCM`,
      kdf: `PBKDF2-SHA256`,
      iterations: 18e4,
      salt: Bt(n),
      iv: Bt(r),
      ciphertext: Bt(new Uint8Array(o)),
    },
    null,
    2,
  );
}
var Ht = (...e) =>
    e
      .filter((e, t, n) => !!e && e.trim() !== `` && n.indexOf(e) === t)
      .join(` `)
      .trim(),
  Ut = (e) => e.replace(/([a-z0-9])([A-Z])/g, `$1-$2`).toLowerCase(),
  Wt = (e) =>
    e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, n) =>
      n ? n.toUpperCase() : t.toLowerCase(),
    ),
  Gt = (e) => {
    let t = Wt(e);
    return t.charAt(0).toUpperCase() + t.slice(1);
  },
  Kt = {
    xmlns: `http://www.w3.org/2000/svg`,
    width: 24,
    height: 24,
    viewBox: `0 0 24 24`,
    fill: `none`,
    stroke: `currentColor`,
    strokeWidth: 2,
    strokeLinecap: `round`,
    strokeLinejoin: `round`,
  },
  qt = (e) => {
    for (let t in e)
      if (t.startsWith(`aria-`) || t === `role` || t === `title`) return !0;
    return !1;
  },
  Jt = (0, i.forwardRef)(
    (
      {
        color: e = `currentColor`,
        size: t = 24,
        strokeWidth: n = 2,
        absoluteStrokeWidth: r,
        className: a = ``,
        children: o,
        iconNode: s,
        ...c
      },
      l,
    ) =>
      (0, i.createElement)(
        `svg`,
        {
          ref: l,
          ...Kt,
          width: t,
          height: t,
          stroke: e,
          strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
          className: Ht(`lucide`, a),
          ...(!o && !qt(c) && { "aria-hidden": `true` }),
          ...c,
        },
        [
          ...s.map(([e, t]) => (0, i.createElement)(e, t)),
          ...(Array.isArray(o) ? o : [o]),
        ],
      ),
  ),
  Yt = (e, t) => {
    let n = (0, i.forwardRef)(({ className: n, ...r }, a) =>
      (0, i.createElement)(Jt, {
        ref: a,
        iconNode: t,
        className: Ht(`lucide-${Ut(Gt(e))}`, `lucide-${e}`, n),
        ...r,
      }),
    );
    return ((n.displayName = Gt(e)), n);
  },
  Xt = Yt(`camera`, [
    [
      `path`,
      {
        d: `M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z`,
        key: `18u6gg`,
      },
    ],
    [`circle`, { cx: `12`, cy: `13`, r: `3`, key: `1vg3eu` }],
  ]),
  Zt = Yt(`circle-stop`, [
    [`circle`, { cx: `12`, cy: `12`, r: `10`, key: `1mglay` }],
    [
      `rect`,
      { x: `9`, y: `9`, width: `6`, height: `6`, rx: `1`, key: `1ssd4o` },
    ],
  ]),
  Qt = Yt(`play`, [
    [
      `path`,
      {
        d: `M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z`,
        key: `10ikf1`,
      },
    ],
  ]),
  $t = Yt(`rotate-ccw`, [
    [
      `path`,
      { d: `M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8`, key: `1357e3` },
    ],
    [`path`, { d: `M3 3v5h5`, key: `1xhq8a` }],
  ]),
  en = Yt(`volume-2`, [
    [
      `path`,
      {
        d: `M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z`,
        key: `uqj9uw`,
      },
    ],
    [`path`, { d: `M16 9a5 5 0 0 1 0 6`, key: `1q6k2b` }],
    [`path`, { d: `M19.364 18.364a9 9 0 0 0 0-12.728`, key: `ijwkga` }],
  ]),
  tn = Yt(`volume-x`, [
    [
      `path`,
      {
        d: `M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z`,
        key: `uqj9uw`,
      },
    ],
    [`line`, { x1: `22`, x2: `16`, y1: `9`, y2: `15`, key: `1ewh16` }],
    [`line`, { x1: `16`, x2: `22`, y1: `9`, y2: `15`, key: `5ykzw1` }],
  ]);
function nn() {
  let [e, t] = (0, i.useState)(!1),
    [n, r] = (0, i.useState)(!1),
    [a, d] = (0, i.useState)(!0),
    [f, p] = (0, i.useState)([]),
    [m, h] = (0, i.useState)([]),
    [g, _] = (0, i.useState)(null),
    [v, y] = (0, i.useState)(0),
    [b, x] = (0, i.useState)(0),
    [S, ee] = (0, i.useState)(0),
    [C, w] = (0, i.useState)(o[0]?.id ?? `EXP-001`),
    [T, E] = (0, i.useState)(`STANDBY`),
    [te, D] = (0, i.useState)([]),
    [ne, O] = (0, i.useState)([]),
    [k, A] = (0, i.useState)(0),
    [re, ie] = (0, i.useState)(``),
    [j, ae] = (0, i.useState)(``),
    [oe, se] = (0, i.useState)({ pitch: 0, roll: 0, yaw: 0 }),
    M = (0, i.useRef)(0),
    N = (0, i.useRef)(null),
    P = (0, i.useRef)(null),
    F = (0, i.useRef)({ zone: null, since: 0 }),
    ce = (0, i.useRef)(null),
    I = (0, i.useRef)(``),
    [le, ue] = (0, i.useState)(``),
    [L, de] = (0, i.useState)(!1),
    {
      videoRef: fe,
      frame: R,
      status: pe,
      error: me,
      retry: he,
      setSimPointer: ge,
    } = kt(!0, n),
    z = It(fe, le, L),
    _e = (0, i.useRef)(R);
  _e.current = R;
  // Optional side task: green sample -> Zone C (added to protocol only after pick)
  let [gT, sGT] = (0, i.useState)(`idle`),
    gDw = (0, i.useRef)(0);
  (0, i.useEffect)(() => {
    if (!e) {
      gT !== `idle` && sGT(`idle`);
      return;
    }
    let now = Date.now(),
      g = R.objects?.green,
      hands = R.hands ?? [],
      tip = (h) => h.landmarks?.[8] ?? h.landmarks?.[0],
      holdingGreen =
        hands.some((h) => h.holding === `green`) ||
        R.holding === `green` ||
        (R.simulated &&
          g?.found &&
          hands.some((h) => {
            let p = tip(h);
            return p && Math.hypot(p.x - g.x, p.y - g.y) < 0.07;
          }));
    if (gT === `idle` && holdingGreen) {
      sGT(`picked`);
      gDw.current = 0;
      let r = now - M.current - k;
      D((t) => [
        ...t,
        Q(r, `step`, `Green sample picked · temporary task added: Place green in Zone C`),
      ]);
      ve(`Green sample picked. Place the green sample in zone C.`);
      return;
    }
    if (gT === `picked`) {
      let inC =
        g?.zone === `ZONE_C` || hands.some((h) => h.zone === `ZONE_C`) || R.zone === `ZONE_C`;
      if (inC) {
        gDw.current ||= now;
        if (now - gDw.current > 1100) {
          sGT(`done`);
          let r = now - M.current - k;
          D((t) => [...t, Q(r, `step`, `Temporary task completed · Place green in Zone C`)]);
          ve(`Green sample placed in zone C.`);
          setTimeout(() => sGT((v) => (v === `done` ? `placed` : v)), 4e3);
        }
      } else gDw.current = 0;
    }
  }, [R, e, gT]);
  let B = o.find((e) => e.id === C) ?? o[0];
  if (!B) return null;
  let V = B.steps,
    H = V[f.length] ?? null,
    U = (0, i.useMemo)(() => s(f), [f]),
    VV =
      gT === `picked` || gT === `done`
        ? [
            ...V,
            {
              id: `TEMP_PLACE_GREEN`,
              label: `Place green in Zone C (temporary)`,
              hint: `Move the green sample to ZONE C`,
              temp: !0,
              done: gT === `done`,
            },
          ]
        : V,
    ve = (0, i.useCallback)(
      (e) => {
        if (
          !a ||
          typeof window > `u` ||
          !window.speechSynthesis ||
          I.current === e
        )
          return;
        I.current = e;
        let t = new SpeechSynthesisUtterance(e);
        ((t.rate = 0.98), (t.pitch = 1), window.speechSynthesis.speak(t));
      },
      [a],
    ),
    ye = (0, i.useRef)(null),
    be = (0, i.useCallback)(() => {
      if (!(!a || typeof window > `u`))
        try {
          let e = window.AudioContext ?? window.webkitAudioContext;
          if (!e) return;
          ye.current ??= new e();
          let t = ye.current;
          t.state === `suspended` && t.resume();
          let n = t.currentTime;
          [880, 1318.5].forEach((e, r) => {
            let i = t.createOscillator(),
              a = t.createGain();
            ((i.type = `sine`),
              (i.frequency.value = e),
              a.gain.setValueAtTime(1e-4, n + r * 0.12),
              a.gain.exponentialRampToValueAtTime(0.25, n + r * 0.12 + 0.02),
              a.gain.exponentialRampToValueAtTime(1e-4, n + r * 0.12 + 0.22),
              i.connect(a).connect(t.destination),
              i.start(n + r * 0.12),
              i.stop(n + r * 0.12 + 0.25));
          });
        } catch {}
    }, [a]);
  (0, i.useEffect)(() => {
    if (!e || T === `PAUSED`) return;
    let t = setInterval(() => ee(Date.now() - M.current - k), 500);
    return () => clearInterval(t);
  }, [e, T, k]);
  let xe = (0, i.useCallback)(() => {
      (t(!1),
        p([]),
        h([]),
        _(null),
        y(0),
        x(0),
        ee(0),
        D([]),
        O([]),
        A(0),
        E(`STANDBY`),
        ae(``),
        (F.current = { zone: null, since: 0 }),
        (ce.current = null),
        (I.current = ``),
        (M.current = Date.now()),
        (N.current = null),
        (P.current = null));
    }, []),
    Se = (0, i.useCallback)(() => {
      (xe(),
        t(!0),
        E(`RUNNING`),
        D([Q(0, `system`, `Experiment started · ${B.name}`)]));
    }, [xe, B.name]),
    Ce = (0, i.useCallback)(
      (e, n = !1) => {
        if (!H || T !== `RUNNING`) return;
        let r = Date.now() - M.current - k;
        (p((e) => [...e, H.id]),
          h((e) => [...e, { t: r, action: H.id, status: `SUCCESS` }]),
          O((t) => [
            ...t,
            { stepId: H.id, label: H.label, confidence: e, t: r, simulated: n },
          ]),
          D((t) => [
            ...t,
            Q(r, `step`, `Step completed · ${H.label}`, {
              stepId: H.id,
              confidence: e,
              simulated: n,
            }),
          ]),
          _(null),
          x(0),
          (F.current = { zone: null, since: 0 }),
          (ce.current = H.zone === `ANY` ? null : H.zone),
          (I.current = ``),
          be(),
          f.length + 1 === V.length &&
            ((N.current = Date.now()), E(`COMPLETED`), t(!1)));
      },
      [be, f.length, H, V.length, T, k],
    ),
    we = (0, i.useCallback)(() => {
      T === `RUNNING` &&
        ((P.current = Date.now()),
        E(`PAUSED`),
        D((e) => [...e, Q(S, `pause`, `Experiment paused`)]));
    }, [S, T]),
    Te = (0, i.useCallback)(() => {
      if (T !== `PAUSED` || P.current === null) return;
      let e = Date.now() - P.current;
      ((P.current = null),
        A((t) => t + e),
        E(`RUNNING`),
        D((t) => [...t, Q(S, `pause`, `Experiment resumed · pause ${l(e)}`)]));
    }, [S, T]),
    W = (0, i.useCallback)(() => {
      ((N.current = Date.now()),
        t(!1),
        E(`ENDED`),
        D((e) => [...e, Q(S, `system`, `Experiment ended by operator`)]));
    }, [S]),
    Ee = z.start,
    De = z.stop,
    Oe = z.recording;
  ((0, i.useEffect)(() => {
    (e && pe === `live` && !Oe && Ee(), !e && Oe && De());
  }, [e, pe, Oe, Ee, De]),
    (0, i.useEffect)(() => {
      if (!e || !H) return;
      let t = setInterval(() => {
        let e = _e.current,
          t = performance.now(),
          n = H.zone === `ANY` ? (e.present ? `ANY` : null) : e.zone;
        if (ce.current) {
          if (e.zone === ce.current) return;
          ce.current = null;
        }
        if (H.zone === `ANY` ? e.present : e.zone === H.zone) {
          F.current.zone !== n && (F.current = { zone: n, since: t });
          let e = t - F.current.since;
          (x(Math.min(1, e / H.dwellMs)),
            e >= H.dwellMs && Ce(88 + Math.min(11, Math.round(b * 11))));
          return;
        }
        if ((x(0), e.zone && e.zone !== H.zone)) {
          let n = V.slice(f.length + 1).find((t) => t.zone === e.zone);
          if (!n) {
            F.current = {
              zone: e.zone,
              since: F.current.zone === e.zone ? F.current.since : t,
            };
            return;
          }
          if (F.current.zone !== e.zone) {
            F.current = { zone: e.zone, since: t };
            return;
          }
          if (t - F.current.since > 900 && !g) {
            let t = Date.now() - M.current,
              r = {
                expected: H.id,
                detected: n.id,
                confidence: 88 + Math.round(Math.random() * 9),
                recovery: c(H, e.zone),
              };
            (_(r),
              y((e) => e + 1),
              h((e) => [
                ...e,
                {
                  t,
                  action: n.id,
                  status: `DEVIATION`,
                  detail: `expected ${H.id}`,
                },
              ]),
              E(`WARNING`),
              D((e) => [
                ...e,
                Q(
                  t,
                  `warning`,
                  `Out-of-order action · expected ${H.label}, detected ${n.label}`,
                  { stepId: n.id, confidence: r.confidence },
                ),
              ]),
              setTimeout(
                () => E((e) => (e === `WARNING` ? `RUNNING` : e)),
                1200,
              ),
              (I.current = ``),
              ve(
                `Sequence deviation. Please complete ${H.label.toLowerCase()}.`,
              ),
              D((e) => [
                ...e,
                Q(t, `voice`, `Voice alert · complete ${H.label}`, {
                  stepId: H.id,
                }),
              ]));
          }
        }
      }, 120);
      return () => clearInterval(t);
    }, [e, H, f.length, g, ve, Ce, V, T]));
  let ke = T === `COMPLETED`,
    Ae = () => {
      let e = u(m, f, v, B),
        t = URL.createObjectURL(new Blob([e], { type: `text/plain` })),
        n = document.createElement(`a`);
      ((n.href = t),
        (n.download = `${B.id}_mission_log.txt`),
        n.click(),
        URL.revokeObjectURL(t));
    },
    je = Lt({
      experiment: B,
      status: T,
      startedAt: M.current,
      endedAt: N.current,
      elapsed: S,
      results: ne,
      events: te,
      totalPauseMs: k,
    }),
    Me = M.current
      ? new Date(M.current + B.estimatedDurationMs + k + v * 15e3)
      : null,
    Ne = (e, t, n) => {
      let r = URL.createObjectURL(new Blob([e], { type: n })),
        i = document.createElement(`a`);
      ((i.href = r), (i.download = t), i.click(), URL.revokeObjectURL(r));
    },
    Pe = async (e) => {
      try {
        (e === `json`
          ? Ne(
              JSON.stringify(je, null, 2),
              `${B.id}_report.json`,
              `application/json`,
            )
          : e === `csv`
            ? Ne(Rt(je), `${B.id}_events.csv`, `text/csv`)
            : Ne(
                await Vt(je, re),
                `${B.id}_protected.json`,
                `application/json`,
              ),
          ae(
            e === `encrypted`
              ? `Encrypted report saved locally.`
              : `${e.toUpperCase()} report saved locally.`,
          ));
      } catch (e) {
        ae(e instanceof Error ? e.message : `Export failed.`);
      }
    };
  return (0, Y.jsxs)(`main`, {
    className: `mx-auto min-h-screen w-full max-w-[1500px] px-3 py-4 sm:px-6 sm:py-6`,
    children: [
      (0, Y.jsxs)(`header`, {
        className: `mb-4 border-b border-border pb-4`,
        children: [
          (0, Y.jsxs)(`div`, {
            className: `mb-4 flex flex-wrap items-start justify-between gap-3`,
            children: [
              (0, Y.jsxs)(`div`, {
                children: [
                  (0, Y.jsxs)(`p`, {
                    className: `text-console mb-1 text-[10px] uppercase text-accent`,
                    children: [`Onboard experiment guardian / `, B.id],
                  }),
                  (0, Y.jsx)(`h1`, {
                    className: `text-4xl leading-none text-primary sm:text-5xl`,
                    children: `Orbit-Guard`,
                  }),
                  (0, Y.jsx)(`p`, {
                    className: `mt-1 text-sm text-muted-foreground`,
                    children: `Experiment monitoring & protocol validation`,
                  }),
                ],
              }),
              (0, Y.jsxs)(`div`, {
                className: `text-console flex flex-wrap items-center gap-3 text-[11px] uppercase text-muted-foreground`,
                children: [
                  (0, Y.jsx)(`span`, {
                    className: `signal`,
                    "data-on": pe === `live` || pe === `simulated`,
                    children: n ? `Simulation` : `Camera ${pe}`,
                  }),
                  (0, Y.jsx)(`span`, {
                    className: `signal`,
                    "data-on": T === `RUNNING`,
                    children: T,
                  }),
                  (0, Y.jsxs)(`span`, {
                    className: `text-foreground`,
                    children: [`MET `, l(S)],
                  }),
                ],
              }),
            ],
          }),
          (0, Y.jsxs)(`div`, {
            className: `text-console flex flex-wrap items-center gap-2 text-[11px] uppercase`,
            children: [
              (0, Y.jsx)(`select`, {
                "aria-label": `Select experiment`,
                value: C,
                disabled: e,
                onChange: (e) => {
                  (xe(), w(e.target.value));
                },
                className: `h-9 min-w-0 max-w-full rounded border border-border bg-secondary px-3 text-foreground disabled:opacity-50 sm:max-w-64`,
                children: o.map((e) =>
                  (0, Y.jsx)(`option`, { value: e.id, children: e.name }, e.id),
                ),
              }),
              (0, Y.jsx)(vt, {
                onClick: () => d((e) => !e),
                variant: `outline`,
                size: `sm`,
                "aria-label": a ? `Mute voice alerts` : `Enable voice alerts`,
                title: a ? `Mute voice alerts` : `Enable voice alerts`,
                "data-on": a,
                children: a ? (0, Y.jsx)(en, {}) : (0, Y.jsx)(tn, {}),
              }),
              (0, Y.jsxs)(vt, {
                onClick: () => r((e) => !e),
                variant: `outline`,
                size: `sm`,
                "data-on": n,
                children: [
                  (0, Y.jsx)(Xt, {}),
                  ` `,
                  n ? `Simulation` : `Camera`,
                ],
              }),
              e
                ? (0, Y.jsxs)(Y.Fragment, {
                    children: [
                      (0, Y.jsxs)(vt, {
                        onClick: xe,
                        variant: `outline`,
                        size: `sm`,
                        children: [(0, Y.jsx)($t, {}), ` Restart run`],
                      }),
                      (0, Y.jsxs)(vt, {
                        onClick: W,
                        variant: `outline`,
                        size: `sm`,
                        className: `border-destructive text-destructive`,
                        children: [(0, Y.jsx)(Zt, {}), ` Stop`],
                      }),
                    ],
                  })
                : (0, Y.jsxs)(vt, {
                    onClick: Se,
                    size: `sm`,
                    children: [(0, Y.jsx)(Qt, {}), ` Start monitoring`],
                  }),
            ],
          }),
        ],
      }),
      (0, Y.jsxs)(`div`, {
        className: `grid gap-4 lg:grid-cols-[1.35fr_1fr]`,
        children: [
          (0, Y.jsxs)(`div`, {
            className: `space-y-4`,
            children: [
              (0, Y.jsx)(Mt, {
                videoRef: fe,
                frame: R,
                activeZone: R.zone,
                status: pe,
                error: me,
                onRetry: he,
                onSimulate: () => r(!0),
                onSimPointer: ge,
                placed: {
                  red: f.includes(`PLACE_RED`) ? `ZONE_A` : null,
                  yellow: f.includes(`PLACE_YELLOW`) ? `ZONE_B` : null,
                  green: gT === `done` || gT === `placed` ? `ZONE_C` : null,
                },
                picked: {
                  red: f.includes(`PICK_RED`),
                  yellow: f.includes(`PICK_YELLOW`),
                  green: gT === `picked`,
                },
              }),
              (0, Y.jsxs)(`section`, {
                className: `sample-ledger`,
                "aria-label": `Payload sample status`,
                children: [
                  (0, Y.jsxs)(`div`, {
                    className: `sample-ledger-item`,
                    children: [
                      (0, Y.jsx)(`span`, {
                        className: `sample-swatch bg-destructive`,
                        "aria-hidden": `true`,
                      }),
                      (0, Y.jsxs)(`div`, {
                        className: `min-w-0 flex-1`,
                        children: [
                          (0, Y.jsx)(`p`, {
                            className: `font-semibold text-foreground`,
                            children: `Red sample`,
                          }),
                          (0, Y.jsxs)(`p`, {
                            className: `text-muted-foreground`,
                            children: [U.red.location, ` · `, U.red.status],
                          }),
                        ],
                      }),
                      (0, Y.jsx)(`span`, {
                        className: R.objects.red.found
                          ? `text-success`
                          : `text-muted-foreground`,
                        children: f.includes(`PLACE_RED`)
                          ? `PLACED`
                          : R.objects.red.found
                            ? `TRACKED`
                            : `GUIDE ONLY`,
                      }),
                    ],
                  }),
                  (0, Y.jsxs)(`div`, {
                    className: `sample-ledger-item`,
                    children: [
                      (0, Y.jsx)(`span`, {
                        className: `sample-swatch bg-warning`,
                        "aria-hidden": `true`,
                      }),
                      (0, Y.jsxs)(`div`, {
                        className: `min-w-0 flex-1`,
                        children: [
                          (0, Y.jsx)(`p`, {
                            className: `font-semibold text-foreground`,
                            children: `Yellow sample`,
                          }),
                          (0, Y.jsxs)(`p`, {
                            className: `text-muted-foreground`,
                            children: [
                              U.yellow.location,
                              ` · `,
                              U.yellow.status,
                            ],
                          }),
                        ],
                      }),
                      (0, Y.jsx)(`span`, {
                        className: R.objects.yellow.found
                          ? `text-success`
                          : `text-muted-foreground`,
                        children: f.includes(`PLACE_YELLOW`)
                          ? `PLACED`
                          : R.objects.yellow.found
                            ? `TRACKED`
                            : `GUIDE ONLY`,
                      }),
                    ],
                  }),
                ],
              }),
              (0, Y.jsxs)(`div`, {
                className: `grid gap-4 sm:grid-cols-2`,
                children: [
                  (0, Y.jsxs)(`section`, {
                    className: `panel`,
                    children: [
                      (0, Y.jsx)(`div`, {
                        className: `panel-title`,
                        children: `AI detection`,
                      }),
                      (0, Y.jsxs)(`dl`, {
                        className: `text-console space-y-2 p-4 text-sm`,
                        children: [
                          (0, Y.jsx)($, {
                            k: `Hand print`,
                            v: R.present
                              ? `Detected (${R.handedness})`
                              : `Absent`,
                          }),
                          (0, Y.jsx)($, {
                            k: `Crew in frame`,
                            v: R.crew
                              ? `${R.crew} of 4${R.crew > 1 ? ` · multi-astronaut` : ``}`
                              : `None`,
                          }),
                          (0, Y.jsx)($, {
                            k: `Hands tracked`,
                            v: `${R.hands.length || +!!R.present} of 8`,
                          }),
                          (0, Y.jsx)($, {
                            k: `Working crew`,
                            v:
                              R.hands.length && R.hands[0]
                                ? `Crew ${((R.hands.find((e) => e.holding) ?? R.hands.find((e) => e.pinch) ?? R.hands[0]).crew ?? 0) + 1}`
                                : `—`,
                          }),
                          (0, Y.jsx)($, {
                            k: `Interaction`,
                            v: R.zone ? R.zone.replace(`_`, ` `) : `Free space`,
                          }),
                          (0, Y.jsx)($, {
                            k: `Activity`,
                            v: ke
                              ? `Experiment complete`
                              : R.zone === H?.zone ||
                                  (H?.zone === `ANY` && R.present)
                                ? (H?.label ?? `Observing`)
                                : `Observing`,
                          }),
                          (0, Y.jsx)($, {
                            k: `Grasp`,
                            v: R.pinch ? `Pinch / hold` : `Open hand`,
                          }),
                          (0, Y.jsx)($, {
                            k: `Hand–object`,
                            v: R.holding
                              ? `Holding ${R.holding} sample`
                              : `No object in hand`,
                          }),
                          (0, Y.jsx)($, {
                            k: `Body pose`,
                            v: R.pose.present
                              ? `Tracked · ${R.pose.tiltDeg}°`
                              : `Not in frame`,
                          }),
                          (0, Y.jsx)($, {
                            k: `Rack orientation`,
                            v: R.pose.orientation,
                          }),
                          (0, Y.jsx)($, { k: `Posture`, v: R.pose.posture }),
                          (0, Y.jsx)($, {
                            k: `Reach (torso units)`,
                            v: R.pose.present ? R.pose.reach.toFixed(2) : `—`,
                          }),
                          (0, Y.jsx)($, {
                            k: `Body coverage`,
                            v: R.pose.coverage,
                          }),
                          (0, Y.jsx)($, {
                            k: `Limbs (arms / legs)`,
                            v: R.pose.present
                              ? `${R.pose.armsTracked} / ${R.pose.legsTracked}`
                              : `—`,
                          }),
                          (0, Y.jsx)($, {
                            k: `Stance (torso units)`,
                            v: R.pose.stance ? R.pose.stance.toFixed(2) : `—`,
                          }),
                          (0, Y.jsx)($, {
                            k: `Objects`,
                            v: `${R.objects.red.found ? `red` : `—`} / ${R.objects.yellow.found ? `yellow` : `—`}`,
                          }),
                          (0, Y.jsx)($, {
                            k: `Confidence`,
                            v: R.present
                              ? `${88 + Math.min(11, Math.round(b * 11))}%`
                              : `—`,
                          }),
                          (0, Y.jsxs)(`div`, {
                            className: `pt-1`,
                            children: [
                              (0, Y.jsx)(`div`, {
                                className: `h-1.5 w-full overflow-hidden rounded bg-secondary`,
                                children: (0, Y.jsx)(`div`, {
                                  className: `h-full bg-accent transition-[width] duration-150`,
                                  style: { width: `${b * 100}%` },
                                }),
                              }),
                              (0, Y.jsx)(`p`, {
                                className: `mt-1 text-[10px] uppercase tracking-widest text-muted-foreground`,
                                children: `Step confirmation dwell`,
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, Y.jsxs)(`section`, {
                    className: `panel`,
                    children: [
                      (0, Y.jsx)(`div`, {
                        className: `panel-title`,
                        children: `Experiment digital twin`,
                      }),
                      (0, Y.jsxs)(`dl`, {
                        className: `text-console space-y-2 p-4 text-sm`,
                        children: [
                          (0, Y.jsx)($, { k: `Main box`, v: U.box }),
                          (0, Y.jsx)($, {
                            k: `Red sample`,
                            v: `${U.red.location} · ${U.red.status}`,
                          }),
                          (0, Y.jsx)($, {
                            k: `Yellow sample`,
                            v: `${U.yellow.location} · ${U.yellow.status}`,
                          }),
                          (0, Y.jsx)($, {
                            k: `Reference frame`,
                            v: `Payload rack (orientation-agnostic)`,
                          }),
                          (0, Y.jsx)($, { k: `Sequence errors`, v: String(v) }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          (0, Y.jsxs)(`div`, {
            className: `space-y-4`,
            children: [
              (0, Y.jsxs)(`section`, {
                className: `panel`,
                children: [
                  (0, Y.jsxs)(`div`, {
                    className: `panel-title`,
                    children: [
                      (0, Y.jsx)(`span`, { children: `Experiment protocol` }),
                      (0, Y.jsxs)(`span`, {
                        className: `text-console`,
                        children: [f.length, `/`, V.length],
                      }),
                    ],
                  }),
                  (0, Y.jsx)(`ol`, {
                    className: `p-3`,
                    children: VV.map((t, n) => {
                      let r = t.temp
                        ? t.done
                          ? `done`
                          : `next`
                        : f.includes(t.id)
                        ? `done`
                        : n === f.length
                          ? `next`
                          : `todo`;
                      return (0, Y.jsxs)(
                        `li`,
                        {
                          className: `flex items-start gap-3 rounded px-2 py-2 text-sm`,
                          style: {
                            background:
                              r === `next`
                                ? `color-mix(in oklch, var(--warning) 12%, transparent)`
                                : void 0,
                          },
                          children: [
                            (0, Y.jsx)(`span`, {
                              className: `text-console mt-0.5 text-xs`,
                              style: {
                                color:
                                  r === `done`
                                    ? `var(--success)`
                                    : r === `next`
                                      ? `var(--warning)`
                                      : `var(--muted-foreground)`,
                              },
                              children:
                                r === `done` ? `✓` : r === `next` ? `→` : `○`,
                            }),
                            (0, Y.jsxs)(`span`, {
                              className: `flex-1`,
                              children: [
                                (0, Y.jsx)(`span`, {
                                  className:
                                    r === `todo` ? `text-muted-foreground` : ``,
                                  children: t.label,
                                }),
                                r === `next` &&
                                  e &&
                                  (0, Y.jsx)(`span`, {
                                    className: `block text-[11px] text-muted-foreground`,
                                    children: t.hint,
                                  }),
                              ],
                            }),
                          ],
                        },
                        t.id,
                      );
                    }),
                  }),
                ],
              }),
              (0, Y.jsxs)(`section`, {
                className: `panel`,
                style: {
                  borderColor: g
                    ? `var(--destructive)`
                    : ke
                      ? `var(--success)`
                      : void 0,
                },
                children: [
                  (0, Y.jsx)(`div`, {
                    className: `panel-title`,
                    children: g
                      ? `Sequence deviation`
                      : `Next-step intelligence`,
                  }),
                  (0, Y.jsx)(`div`, {
                    className: `space-y-2 p-4`,
                    children: g
                      ? (0, Y.jsxs)(Y.Fragment, {
                          children: [
                            (0, Y.jsxs)(`p`, {
                              className: `text-console text-sm text-destructive`,
                              children: [
                                `Expected `,
                                g.expected,
                                ` · detected `,
                                g.detected,
                                ` ·`,
                                ` `,
                                g.confidence,
                                `% confidence`,
                              ],
                            }),
                            (0, Y.jsx)(`p`, {
                              className: `text-[11px] uppercase tracking-widest text-muted-foreground`,
                              children: `Recovery engine`,
                            }),
                            (0, Y.jsx)(`ol`, {
                              className: `text-console list-inside list-decimal space-y-1 text-sm`,
                              children: g.recovery.map((e) =>
                                (0, Y.jsx)(`li`, { children: e }, e),
                              ),
                            }),
                          ],
                        })
                      : ke
                        ? (0, Y.jsx)(`p`, {
                            className: `text-console text-sm`,
                            style: { color: `var(--success)` },
                            children: `Experiment completed successfully. 0 open anomalies.`,
                          })
                        : (0, Y.jsxs)(Y.Fragment, {
                            children: [
                              (0, Y.jsx)(`p`, {
                                className: `text-xl`,
                                style: {
                                  color: `var(--warning)`,
                                  fontFamily: `var(--font-display)`,
                                },
                                children: H?.label ?? `Standby`,
                              }),
                              (0, Y.jsx)(`p`, {
                                className: `text-console text-xs text-muted-foreground`,
                                children: e
                                  ? H?.hint
                                  : `Press start monitoring to arm the guardian`,
                              }),
                            ],
                          }),
                  }),
                ],
              }),
              (0, Y.jsxs)(`section`, {
                className: `panel`,
                children: [
                  (0, Y.jsxs)(`div`, {
                    className: `panel-title`,
                    children: [
                      (0, Y.jsxs)(`span`, {
                        children: [`Mission log · `, B.id, `.txt`],
                      }),
                      (0, Y.jsx)(`button`, {
                        onClick: Ae,
                        className: `text-console rounded border border-border px-2 py-0.5 text-[10px] uppercase tracking-widest transition-colors hover:bg-secondary`,
                        children: `Export`,
                      }),
                    ],
                  }),
                  (0, Y.jsx)(`div`, {
                    className: `text-console max-h-56 overflow-y-auto p-4 text-xs leading-relaxed`,
                    children:
                      m.length === 0
                        ? (0, Y.jsx)(`p`, {
                            className: `text-muted-foreground`,
                            children: `No entries yet.`,
                          })
                        : m.map((e, t) =>
                            (0, Y.jsxs)(
                              `p`,
                              {
                                style: {
                                  color:
                                    e.status === `DEVIATION`
                                      ? `var(--destructive)`
                                      : void 0,
                                },
                                children: [
                                  l(e.t),
                                  `  `,
                                  e.action,
                                  `  ·  `,
                                  e.status,
                                  e.detail ? ` (${e.detail})` : ``,
                                ],
                              },
                              t,
                            ),
                          ),
                  }),
                ],
              }),
              (0, Y.jsxs)(`section`, {
                className: `panel`,
                children: [
                  (0, Y.jsxs)(`div`, {
                    className: `panel-title`,
                    children: [
                      (0, Y.jsx)(`span`, {
                        children: `Video store & IP downlink`,
                      }),
                      (0, Y.jsxs)(`div`, {
                        className: `flex gap-2`,
                        children: [
                          z.recording
                            ? (0, Y.jsx)(`button`, {
                                onClick: z.stop,
                                className: `text-console rounded border border-destructive px-2 py-0.5 text-[10px] uppercase tracking-widest text-destructive transition-colors hover:bg-destructive/10`,
                                children: `Stop rec`,
                              })
                            : (0, Y.jsx)(`button`, {
                                onClick: z.start,
                                className: `text-console rounded border border-border px-2 py-0.5 text-[10px] uppercase tracking-widest transition-colors hover:bg-secondary`,
                                children: `Record`,
                              }),
                          z.clipUrl &&
                            (0, Y.jsx)(`a`, {
                              href: z.clipUrl,
                              download: `${B.id}_payload_cam.webm`,
                              className: `text-console rounded border border-border px-2 py-0.5 text-[10px] uppercase tracking-widest transition-colors hover:bg-secondary`,
                              children: `Save clip`,
                            }),
                        ],
                      }),
                    ],
                  }),
                  (0, Y.jsxs)(`div`, {
                    className: `space-y-3 p-4`,
                    children: [
                      (0, Y.jsxs)(`label`, {
                        className: `block`,
                        children: [
                          (0, Y.jsx)(`span`, {
                            className: `text-[10px] uppercase tracking-widest text-muted-foreground`,
                            children: `Downlink endpoint (IP / URL)`,
                          }),
                          (0, Y.jsx)(`input`, {
                            value: le,
                            onChange: (e) => ue(e.target.value),
                            placeholder: `http://192.168.1.50:8080/ingest`,
                            className: `text-console mt-1 w-full rounded border border-border bg-secondary/40 px-2 py-1 text-xs outline-none focus:border-accent`,
                          }),
                        ],
                      }),
                      (0, Y.jsxs)(`button`, {
                        onClick: () => de((e) => !e),
                        className: `text-console rounded border border-border px-2 py-1 text-[10px] uppercase tracking-widest transition-colors hover:bg-secondary`,
                        "data-on": L,
                        children: [`Uplink `, L ? `enabled` : `disabled`],
                      }),
                      (0, Y.jsxs)(`dl`, {
                        className: `text-console space-y-2 text-sm`,
                        children: [
                          (0, Y.jsx)($, {
                            k: `Local store`,
                            v: z.recording
                              ? `Recording on-device`
                              : z.clipUrl
                                ? `Clip ready`
                                : `Idle`,
                          }),
                          (0, Y.jsx)($, { k: `Segments`, v: String(z.chunks) }),
                          (0, Y.jsx)($, {
                            k: `Stored`,
                            v: `${(z.bytes / 1048576).toFixed(2)} MB`,
                          }),
                          (0, Y.jsx)($, {
                            k: `Pushed / failed`,
                            v:
                              L && le
                                ? `${z.pushed} / ${z.failed}`
                                : `uplink off`,
                          }),
                        ],
                      }),
                      z.lastError &&
                        (0, Y.jsx)(`p`, {
                          className: `text-console text-[11px] text-destructive`,
                          children: z.lastError,
                        }),
                      (0, Y.jsx)(`p`, {
                        className: `text-[10px] leading-relaxed text-muted-foreground`,
                        children: `Video is encoded and kept on the onboard device. Only 2-second segments are pushed when an endpoint is armed, so the console works with zero downlink bandwidth.`,
                      }),
                    ],
                  }),
                ],
              }),
              (0, Y.jsxs)(`section`, {
                className: `panel`,
                children: [
                  (0, Y.jsx)(`div`, {
                    className: `panel-title`,
                    children: `System bus`,
                  }),
                  (0, Y.jsxs)(`div`, {
                    className: `text-console flex flex-wrap gap-x-5 gap-y-2 p-4 text-[11px] uppercase tracking-widest`,
                    children: [
                      (0, Y.jsxs)(`span`, {
                        className: `signal`,
                        "data-on": pe === `live`,
                        children: [`Camera `, pe],
                      }),
                      (0, Y.jsxs)(`span`, {
                        className: `signal`,
                        "data-on": z.recording,
                        children: [
                          `Recording `,
                          z.recording ? `local` : `idle`,
                        ],
                      }),
                      (0, Y.jsxs)(`span`, {
                        className: `signal`,
                        "data-on": L && !!le,
                        children: [`IP stream `, L && le ? `active` : `off`],
                      }),
                      (0, Y.jsx)(`span`, {
                        className: `signal`,
                        "data-on": a,
                        children: `Voice guidance`,
                      }),
                      (0, Y.jsxs)(`span`, {
                        className: `signal`,
                        "data-on": R.crew > 0,
                        children: [`Crew tracked `, R.crew, `/`, 4],
                      }),
                      (0, Y.jsx)(`span`, {
                        className: `signal`,
                        "data-on": !0,
                        children: `Models onboard · offline`,
                      }),
                      (0, Y.jsx)(`span`, {
                        className: `signal`,
                        "data-on": !g,
                        children: g ? `Anomaly` : `Nominal`,
                      }),
                    ],
                  }),
                ],
              }),
              (0, Y.jsx)(Pt, {
                experiment: B,
                status: T,
                currentStep: H,
                completedCount: f.length,
                elapsed: S,
                totalPauseMs: k,
                events: te,
                results: ne,
                estimatedFinish: Me,
                report: je,
                clipUrl: z.clipUrl,
                onPause: we,
                onResume: Te,
                onEnd: W,
                onDemoCorrect: () => Ce(96, !0),
                onDemoWrong: () => {
                  if (!H || T !== `RUNNING`) return;
                  let e = S,
                    t = V[f.length + 1]?.label ?? `Unscheduled action`;
                  (y((e) => e + 1),
                    _({
                      expected: H.id,
                      detected: t,
                      confidence: 92,
                      recovery: c(H, `DEMO`),
                    }),
                    D((t) => [
                      ...t,
                      Q(
                        e,
                        `warning`,
                        `Out-of-order demo action · expected ${H.label}`,
                        { confidence: 92, simulated: !0 },
                      ),
                    ]),
                    ve(
                      `Sequence deviation. Please complete ${H.label.toLowerCase()}.`,
                    ));
                },
                onDemoLow: () => {
                  !H ||
                    T !== `RUNNING` ||
                    D((e) => [
                      ...e,
                      Q(
                        S,
                        `warning`,
                        `Low-confidence observation · ${H.label}`,
                        { stepId: H.id, confidence: 58, simulated: !0 },
                      ),
                    ]);
                },
                onDemoSkip: () => {
                  !H ||
                    T !== `RUNNING` ||
                    (y((e) => e + 1),
                    D((e) => [
                      ...e,
                      Q(S, `warning`, `Step skipped · ${H.label}`, {
                        stepId: H.id,
                        simulated: !0,
                      }),
                    ]),
                    ve(
                      `Step skipped. Please complete ${H.label.toLowerCase()}.`,
                    ));
                },
                onDownload: (e) => void Pe(e),
                passphrase: re,
                onPassphrase: ie,
                exportMessage: j,
                imu: oe,
                onImu: (e, t) => se((n) => ({ ...n, [e]: t })),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function $({ k: e, v: t }) {
  return (0, Y.jsxs)(`div`, {
    className: `flex items-baseline justify-between gap-3`,
    children: [
      (0, Y.jsx)(`dt`, {
        className: `text-[11px] uppercase tracking-widest text-muted-foreground`,
        children: e,
      }),
      (0, Y.jsx)(`dd`, { className: `text-right`, children: t }),
    ],
  });
}
export default nn;
