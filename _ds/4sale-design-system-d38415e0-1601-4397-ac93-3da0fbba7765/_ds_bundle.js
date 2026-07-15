/* @ds-bundle: {"format":4,"namespace":"Ds4SALEDesignSystem_d38415","components":[{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"IconButton","sourcePath":"components/buttons/IconButton.jsx"},{"name":"Avatar","sourcePath":"components/display/Avatar.jsx"},{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"Tabs","sourcePath":"components/display/Tabs.jsx"},{"name":"Tag","sourcePath":"components/display/Tag.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"SearchBar","sourcePath":"components/forms/SearchBar.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"CategoryTile","sourcePath":"components/marketplace/CategoryTile.jsx"},{"name":"ListingCard","sourcePath":"components/marketplace/ListingCard.jsx"}],"sourceHashes":{"components/buttons/Button.jsx":"6d9b070e05e5","components/buttons/IconButton.jsx":"6745298beb86","components/display/Avatar.jsx":"cd6b70a854a7","components/display/Badge.jsx":"06dd38fe86d0","components/display/Tabs.jsx":"4e80d9e30d94","components/display/Tag.jsx":"1a7817daefa4","components/forms/Input.jsx":"a24d1df25bbe","components/forms/SearchBar.jsx":"46bb49152f5b","components/forms/Switch.jsx":"161704224c70","components/marketplace/CategoryTile.jsx":"cd674b2c454e","components/marketplace/ListingCard.jsx":"6043391145c4","ui_kits/marketplace/app.jsx":"9e118e0e3ad0","ui_kits/marketplace/data.jsx":"bd21fb385b73","ui_kits/marketplace/shell.jsx":"39162315dc61"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.Ds4SALEDesignSystem_d38415 = window.Ds4SALEDesignSystem_d38415 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * 4SALE Button — the primary action element.
 * Variants: primary (Risd Blue), secondary (navy-tint surface),
 * outline, ghost, and accent (yellow). Pill-rounded, springy press.
 */
function Button({
  children,
  variant = "primary",
  size = "md",
  block = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: "0 14px",
      height: 36,
      fontSize: 14,
      gap: 6
    },
    md: {
      padding: "0 20px",
      height: 44,
      fontSize: 15,
      gap: 8
    },
    lg: {
      padding: "0 28px",
      height: 54,
      fontSize: 17,
      gap: 10
    }
  };
  const s = sizes[size] || sizes.md;
  const variants = {
    primary: {
      background: "var(--blue)",
      color: "#fff",
      border: "1.5px solid var(--blue)",
      boxShadow: "var(--sh-brand)"
    },
    secondary: {
      background: "var(--surface-3)",
      color: "var(--blue-700)",
      border: "1.5px solid transparent"
    },
    outline: {
      background: "transparent",
      color: "var(--blue)",
      border: "1.5px solid var(--blue)"
    },
    ghost: {
      background: "transparent",
      color: "var(--blue)",
      border: "1.5px solid transparent"
    },
    accent: {
      background: "var(--yellow)",
      color: "#5a4a00",
      border: "1.5px solid var(--yellow)"
    },
    danger: {
      background: "var(--danger)",
      color: "#fff",
      border: "1.5px solid var(--danger)"
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    disabled: disabled,
    style: {
      display: block ? "flex" : "inline-flex",
      width: block ? "100%" : "auto",
      alignItems: "center",
      justifyContent: "center",
      gap: s.gap,
      height: s.height,
      padding: s.padding,
      fontFamily: "var(--font-body)",
      fontWeight: 700,
      fontSize: s.fontSize,
      lineHeight: 1,
      letterSpacing: "0.005em",
      borderRadius: "var(--r-pill)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      transition: "transform var(--dur-fast) var(--ease), filter var(--dur) var(--ease), box-shadow var(--dur) var(--ease)",
      WebkitTapHighlightColor: "transparent",
      ...(variants[variant] || variants.primary),
      ...style
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = "scale(0.96)";
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = "scale(1)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = "scale(1)";
      e.currentTarget.style.filter = "none";
    },
    onMouseEnter: e => {
      if (!disabled) e.currentTarget.style.filter = "brightness(0.94)";
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/buttons/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * 4SALE IconButton — a square/circular control holding a single glyph.
 * Use for toolbar actions, favourites, close, share.
 */
function IconButton({
  children,
  variant = "soft",
  size = "md",
  round = true,
  active = false,
  disabled = false,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: 34,
    md: 42,
    lg: 50
  };
  const dim = sizes[size] || sizes.md;
  const variants = {
    soft: {
      background: "var(--surface-3)",
      color: "var(--blue-700)",
      border: "1.5px solid transparent"
    },
    solid: {
      background: "var(--blue)",
      color: "#fff",
      border: "1.5px solid var(--blue)",
      boxShadow: "var(--sh-brand)"
    },
    outline: {
      background: "var(--white)",
      color: "var(--ink-2)",
      border: "1.5px solid var(--line-2)"
    },
    ghost: {
      background: "transparent",
      color: "var(--ink-2)",
      border: "1.5px solid transparent"
    }
  };
  const activeStyle = active ? {
    background: "var(--blue)",
    color: "#fff",
    border: "1.5px solid var(--blue)"
  } : {};
  return /*#__PURE__*/React.createElement("button", _extends({
    disabled: disabled,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: dim,
      height: dim,
      borderRadius: round ? "var(--r-pill)" : "var(--r-md)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      transition: "transform var(--dur-fast) var(--ease), filter var(--dur) var(--ease)",
      WebkitTapHighlightColor: "transparent",
      ...(variants[variant] || variants.soft),
      ...activeStyle,
      ...style
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = "scale(0.9)";
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = "scale(1)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = "scale(1)";
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/display/Avatar.jsx
try { (() => {
/**
 * 4SALE Avatar — user image or initials with optional verified ring.
 */
function Avatar({
  src = null,
  name = "",
  size = 44,
  verified = false,
  style = {}
}) {
  const initials = name.split(" ").map(w => w[0]).filter(Boolean).slice(0, 2).join("").toUpperCase();
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "inline-flex",
      width: size,
      height: size,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: size,
      height: size,
      borderRadius: "50%",
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: src ? "var(--surface-3)" : "var(--blue)",
      color: "#fff",
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: size * 0.38,
      letterSpacing: "-0.02em",
      border: verified ? "2px solid var(--blue)" : "2px solid transparent"
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : initials), verified && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      right: -2,
      bottom: -2,
      width: size * 0.4,
      height: size * 0.4,
      background: "var(--blue)",
      borderRadius: "50%",
      border: "2px solid #fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: size * 0.22,
    height: size * 0.22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "3.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  }))));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/display/Badge.jsx
try { (() => {
/**
 * 4SALE Badge — small status/label chip. Solid or soft tint.
 */
function Badge({
  children,
  color = "blue",
  soft = false,
  size = "md",
  icon = null,
  style = {}
}) {
  const palette = {
    blue: ["var(--blue)", "rgba(29,74,255,.12)", "var(--blue-700)"],
    green: ["var(--green-app)", "rgba(29,183,90,.14)", "#0f7a3c"],
    yellow: ["var(--yellow-app)", "rgba(255,186,0,.18)", "#8a6500"],
    orange: ["var(--orange)", "rgba(255,104,44,.14)", "#c2440f"],
    red: ["var(--red)", "rgba(230,61,78,.13)", "#b3293a"],
    violet: ["var(--slate-blue)", "rgba(123,96,255,.14)", "#5a3fd6"],
    neutral: ["var(--ink-2)", "var(--surface-3)", "var(--ink-2)"]
  };
  const [solidBg, softBg, softFg] = palette[color] || palette.blue;
  const sizes = {
    sm: {
      fs: 11,
      pad: "3px 8px"
    },
    md: {
      fs: 12,
      pad: "4px 10px"
    }
  };
  const s = sizes[size] || sizes.md;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 5,
      padding: s.pad,
      fontFamily: "var(--font-body)",
      fontWeight: 700,
      fontSize: s.fs,
      lineHeight: 1.2,
      borderRadius: "var(--r-pill)",
      background: soft ? softBg : solidBg,
      color: soft ? softFg : "#fff",
      letterSpacing: "0.01em",
      ...style
    }
  }, icon, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/display/Tabs.jsx
try { (() => {
/**
 * 4SALE Tabs — underline-style segmented navigation.
 */
function Tabs({
  items = [],
  value = null,
  onChange = null,
  style = {}
}) {
  const active = value != null ? value : items[0] && items[0].value;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 4,
      borderBottom: "1.5px solid var(--line)",
      ...style
    }
  }, items.map(it => {
    const on = it.value === active;
    return /*#__PURE__*/React.createElement("button", {
      key: it.value,
      onClick: () => onChange && onChange(it.value),
      style: {
        position: "relative",
        border: "none",
        background: "transparent",
        cursor: "pointer",
        padding: "12px 16px 14px",
        fontFamily: "var(--font-body)",
        fontSize: 15,
        fontWeight: on ? 700 : 600,
        color: on ? "var(--blue)" : "var(--ink-3)",
        transition: "color var(--dur) var(--ease)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 7
      }
    }, it.icon, it.label, it.count != null && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        fontWeight: 700,
        padding: "1px 7px",
        borderRadius: "var(--r-pill)",
        background: on ? "rgba(29,74,255,.12)" : "var(--surface-3)",
        color: on ? "var(--blue)" : "var(--ink-3)"
      }
    }, it.count)), /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        left: 8,
        right: 8,
        bottom: -1.5,
        height: 3,
        borderRadius: "3px 3px 0 0",
        background: "var(--blue)",
        transform: on ? "scaleX(1)" : "scaleX(0)",
        transition: "transform var(--dur) var(--ease-out)"
      }
    }));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/display/Tag.jsx
try { (() => {
/**
 * 4SALE Tag — filter / category chip. Selectable, optionally removable.
 */
function Tag({
  children,
  selected = false,
  onClick = null,
  onRemove = null,
  icon = null,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("span", {
    onClick: onClick,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 7,
      height: 38,
      padding: "0 16px",
      fontFamily: "var(--font-body)",
      fontWeight: 600,
      fontSize: 14,
      borderRadius: "var(--r-pill)",
      cursor: onClick ? "pointer" : "default",
      background: selected ? "var(--blue)" : "var(--white)",
      color: selected ? "#fff" : "var(--ink-2)",
      border: `1.5px solid ${selected ? "var(--blue)" : "var(--line-2)"}`,
      transition: "all var(--dur) var(--ease)",
      whiteSpace: "nowrap",
      ...style
    }
  }, icon, children, onRemove && /*#__PURE__*/React.createElement("span", {
    onClick: e => {
      e.stopPropagation();
      onRemove();
    },
    style: {
      display: "inline-flex",
      marginRight: -4,
      opacity: 0.7,
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.4",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18M6 6l12 12"
  }))));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * 4SALE Input — text field with optional leading/trailing adornments.
 */
function Input({
  label = null,
  hint = null,
  error = null,
  iconLeft = null,
  iconRight = null,
  size = "md",
  style = {},
  id,
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const heights = {
    sm: 40,
    md: 48,
    lg: 56
  };
  const h = heights[size] || heights.md;
  const borderColor = error ? "var(--danger)" : focused ? "var(--blue)" : "var(--line-2)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      fontFamily: "var(--font-body)",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: "var(--ink-2)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      height: h,
      padding: "0 16px",
      background: "var(--white)",
      border: `1.5px solid ${borderColor}`,
      borderRadius: "var(--r-md)",
      boxShadow: focused ? "var(--sh-focus)" : "none",
      transition: "border-color var(--dur) var(--ease), box-shadow var(--dur) var(--ease)"
    }
  }, iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ink-3)",
      display: "inline-flex"
    }
  }, iconLeft), /*#__PURE__*/React.createElement("input", _extends({
    id: id,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      flex: 1,
      border: "none",
      outline: "none",
      background: "transparent",
      fontFamily: "var(--font-body)",
      fontSize: size === "lg" ? 16 : 15,
      color: "var(--ink)",
      minWidth: 0
    }
  }, rest)), iconRight && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ink-3)",
      display: "inline-flex"
    }
  }, iconRight)), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: error ? "var(--danger)" : "var(--ink-3)"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/SearchBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * 4SALE SearchBar — the marketplace's signature search control.
 * Pill-shaped, blue submit affordance. Optional category prefix.
 */
function SearchBar({
  placeholder = "Search 4SALE…",
  category = null,
  size = "lg",
  onSubmit = null,
  style = {},
  ...rest
}) {
  const heights = {
    md: 48,
    lg: 58
  };
  const h = heights[size] || heights.lg;
  return /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      onSubmit && onSubmit();
    },
    style: {
      display: "flex",
      alignItems: "center",
      height: h,
      padding: "5px 5px 5px 6px",
      background: "var(--white)",
      border: "1.5px solid var(--line-2)",
      borderRadius: "var(--r-pill)",
      boxShadow: "var(--sh-sm)",
      gap: 6,
      ...style
    }
  }, category && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      height: "100%",
      padding: "0 16px",
      borderRight: "1.5px solid var(--line)",
      fontFamily: "var(--font-body)",
      fontWeight: 600,
      fontSize: 14,
      color: "var(--blue-700)",
      whiteSpace: "nowrap"
    }
  }, category), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      color: "var(--ink-3)",
      paddingLeft: category ? 6 : 14
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m21 21-4.3-4.3"
  }))), /*#__PURE__*/React.createElement("input", _extends({
    placeholder: placeholder,
    style: {
      flex: 1,
      border: "none",
      outline: "none",
      background: "transparent",
      fontFamily: "var(--font-body)",
      fontSize: 16,
      color: "var(--ink)",
      minWidth: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    style: {
      height: "100%",
      padding: "0 26px",
      border: "none",
      cursor: "pointer",
      background: "var(--blue)",
      color: "#fff",
      borderRadius: "var(--r-pill)",
      fontFamily: "var(--font-body)",
      fontWeight: 700,
      fontSize: 15,
      boxShadow: "var(--sh-brand)"
    }
  }, "Search"));
}
Object.assign(__ds_scope, { SearchBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SearchBar.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
/**
 * 4SALE Switch — on/off toggle. Blue when on.
 */
function Switch({
  checked = false,
  onChange = null,
  disabled = false,
  size = "md",
  style = {}
}) {
  const dims = {
    sm: {
      w: 38,
      h: 22,
      k: 16
    },
    md: {
      w: 48,
      h: 28,
      k: 22
    }
  };
  const d = dims[size] || dims.md;
  return /*#__PURE__*/React.createElement("button", {
    role: "switch",
    "aria-checked": checked,
    disabled: disabled,
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      width: d.w,
      height: d.h,
      borderRadius: "var(--r-pill)",
      border: "none",
      padding: 0,
      position: "relative",
      cursor: disabled ? "not-allowed" : "pointer",
      background: checked ? "var(--blue)" : "var(--line-2)",
      opacity: disabled ? 0.5 : 1,
      transition: "background var(--dur) var(--ease)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: (d.h - d.k) / 2,
      left: checked ? d.w - d.k - (d.h - d.k) / 2 : (d.h - d.k) / 2,
      width: d.k,
      height: d.k,
      borderRadius: "50%",
      background: "#fff",
      boxShadow: "0 1px 3px rgba(11,21,89,.3)",
      transition: "left var(--dur) var(--ease-out)"
    }
  }));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/marketplace/CategoryTile.jsx
try { (() => {
/**
 * 4SALE CategoryTile — entry point to a marketplace category.
 * Icon in a soft tile over a label. Used in the category grid/rail.
 */
function CategoryTile({
  icon = null,
  label = "",
  count = null,
  color = "blue",
  onClick = null,
  style = {}
}) {
  const tints = {
    blue: ["rgba(29,74,255,.10)", "var(--blue)"],
    green: ["rgba(29,183,90,.12)", "var(--green-app)"],
    orange: ["rgba(255,104,44,.12)", "var(--orange)"],
    violet: ["rgba(123,96,255,.12)", "var(--slate-blue)"],
    sky: ["rgba(0,194,243,.12)", "var(--sky-bright)"],
    yellow: ["rgba(255,186,0,.16)", "#a87a00"]
  };
  const [bg, fg] = tints[color] || tints.blue;
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 10,
      padding: "18px 12px",
      background: "var(--white)",
      cursor: "pointer",
      border: "1.5px solid var(--line)",
      borderRadius: "var(--r-lg)",
      boxShadow: hover ? "var(--sh-sm)" : "none",
      transform: hover ? "translateY(-2px)" : "none",
      transition: "all var(--dur) var(--ease)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 56,
      height: 56,
      borderRadius: "var(--r-md)",
      background: bg,
      color: fg,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, icon), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 700,
      fontSize: 14,
      color: "var(--ink)"
    }
  }, label), count != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 12,
      color: "var(--ink-3)",
      marginTop: -4
    }
  }, count));
}
Object.assign(__ds_scope, { CategoryTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketplace/CategoryTile.jsx", error: String((e && e.message) || e) }); }

// components/marketplace/ListingCard.jsx
try { (() => {
/**
 * 4SALE ListingCard — the core marketplace ad card.
 * Photo, price, title, location/meta, favourite heart and badges.
 */
function ListingCard({
  image = null,
  title = "",
  price = "",
  currency = "KWD",
  location = "",
  timeAgo = "",
  badges = [],
  featured = false,
  favorite = false,
  onFavorite = null,
  onClick = null,
  style = {}
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "flex",
      flexDirection: "column",
      background: "var(--white)",
      borderRadius: "var(--r-lg)",
      overflow: "hidden",
      border: featured ? "1.5px solid var(--blue)" : "1.5px solid var(--line)",
      boxShadow: hover ? "var(--sh-md)" : "var(--sh-xs)",
      transform: hover ? "translateY(-3px)" : "none",
      transition: "box-shadow var(--dur) var(--ease), transform var(--dur) var(--ease)",
      cursor: onClick ? "pointer" : "default",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      aspectRatio: "4 / 3",
      background: "var(--surface-3)"
    }
  }, image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: title,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--ink-3)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "40",
    height: "40",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "3",
    width: "18",
    height: "18",
    rx: "3"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "9",
    cy: "9",
    r: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m21 15-3.6-3.6a2 2 0 0 0-2.8 0L6 20"
  }))), featured && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 10,
      left: 10,
      padding: "4px 10px",
      background: "var(--yellow)",
      color: "#5a4a00",
      borderRadius: "var(--r-pill)",
      fontFamily: "var(--font-body)",
      fontWeight: 700,
      fontSize: 11,
      letterSpacing: "0.02em"
    }
  }, "FEATURED"), /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      onFavorite && onFavorite();
    },
    "aria-label": "Favourite",
    style: {
      position: "absolute",
      top: 10,
      right: 10,
      width: 36,
      height: 36,
      borderRadius: "50%",
      border: "none",
      cursor: "pointer",
      background: "rgba(255,255,255,.92)",
      color: favorite ? "var(--red)" : "var(--ink-2)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "var(--sh-sm)",
      transition: "transform var(--dur-fast) var(--ease)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "19",
    height: "19",
    viewBox: "0 0 24 24",
    fill: favorite ? "currentColor" : "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "12px 14px 14px",
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 19,
      color: "var(--blue)",
      letterSpacing: "-0.02em",
      lineHeight: 1
    }
  }, price, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: "var(--ink-3)"
    }
  }, currency)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 600,
      fontSize: 15,
      color: "var(--ink)",
      lineHeight: 1.3,
      overflow: "hidden",
      display: "-webkit-box",
      WebkitLineClamp: 2,
      WebkitBoxOrient: "vertical"
    }
  }, title), badges.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      flexWrap: "wrap",
      marginTop: 2
    }
  }, badges.map((b, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 600,
      fontSize: 11,
      padding: "2px 8px",
      borderRadius: "var(--r-pill)",
      background: "var(--surface-2)",
      color: "var(--ink-2)"
    }
  }, b))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      marginTop: 4,
      fontFamily: "var(--font-body)",
      fontSize: 12.5,
      color: "var(--ink-3)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "10",
    r: "3"
  })), /*#__PURE__*/React.createElement("span", null, location), timeAgo && /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "auto"
    }
  }, timeAgo))));
}
Object.assign(__ds_scope, { ListingCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketplace/ListingCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketplace/app.jsx
try { (() => {
/* 4SALE Marketplace — main app: listings grid, filters, detail drawer, post flow */

const M = window.MarketplaceData;
const S = window.MarketplaceShell;
const {
  Ico,
  icons,
  CATEGORIES,
  LISTINGS
} = M;
const {
  Button,
  IconButton,
  Badge,
  Tag,
  Avatar,
  SearchBar,
  ListingCard,
  CategoryTile,
  Tabs
} = M.DS;
const {
  Header,
  Hero,
  CategoryGrid,
  SectionHead
} = S;
function ListingsSection({
  cat,
  setCat,
  favs,
  toggleFav,
  onOpen
}) {
  const filtered = cat === "all" ? LISTINGS : LISTINGS.filter(l => l.cat === cat);
  const list = filtered.length ? filtered : LISTINGS;
  const catLabel = cat === "all" ? "All" : (CATEGORIES.find(c => c.key === cat) || {}).label;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1180,
      margin: "0 auto",
      padding: "30px 28px 60px"
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    title: cat === "all" ? "Featured ads" : catLabel + " for sale",
    action: "See all"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 9,
      marginBottom: 22,
      flexWrap: "wrap",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    selected: cat === "all",
    onClick: () => setCat("all")
  }, "All"), CATEGORIES.slice(0, 5).map(c => /*#__PURE__*/React.createElement(Tag, {
    key: c.key,
    selected: cat === c.key,
    onClick: () => setCat(c.key)
  }, c.label)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("button", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      height: 38,
      padding: "0 16px",
      borderRadius: "var(--r-pill)",
      border: "1.5px solid var(--line-2)",
      background: "var(--white)",
      cursor: "pointer",
      fontFamily: "var(--font-body)",
      fontWeight: 600,
      fontSize: 14,
      color: "var(--ink-2)"
    }
  }, /*#__PURE__*/React.createElement(Ico, {
    size: 17,
    sw: 2
  }, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M3 6h18M7 12h10M11 18h2"
  }))), " Filters")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 18
    }
  }, list.map(l => /*#__PURE__*/React.createElement(ListingCard, {
    key: l.id,
    price: l.price,
    title: l.title,
    location: l.loc,
    timeAgo: l.time,
    badges: l.badges,
    featured: l.featured,
    favorite: !!favs[l.id],
    onFavorite: () => toggleFav(l.id),
    onClick: () => onOpen(l)
  }))));
}
function DetailDrawer({
  item,
  favs,
  toggleFav,
  onClose
}) {
  if (!item) return null;
  const fav = !!favs[item.id];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 60,
      display: "flex",
      justifyContent: "flex-end"
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "absolute",
      inset: 0,
      background: "rgba(11,21,89,.42)",
      backdropFilter: "blur(2px)",
      animation: "fadeIn .2s ease"
    }
  }), /*#__PURE__*/React.createElement("aside", {
    style: {
      position: "relative",
      width: 460,
      maxWidth: "92vw",
      height: "100%",
      background: "var(--white)",
      boxShadow: "var(--sh-lg)",
      overflowY: "auto",
      animation: "slideIn .28s cubic-bezier(.16,1,.3,1)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      aspectRatio: "4/3",
      background: "var(--surface-3)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--ink-3)"
    }
  }, /*#__PURE__*/React.createElement(Ico, {
    size: 56,
    sw: 1.4
  }, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "3",
    width: "18",
    height: "18",
    rx: "3"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "9",
    cy: "9",
    r: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m21 15-3.6-3.6a2 2 0 0 0-2.8 0L6 20"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 14,
      left: 14,
      right: 14,
      display: "flex",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    variant: "solid",
    style: {
      background: "rgba(255,255,255,.92)",
      color: "var(--ink)",
      boxShadow: "var(--sh-sm)"
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement(Ico, null, icons.close)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    style: {
      background: "rgba(255,255,255,.92)",
      color: "var(--ink-2)",
      boxShadow: "var(--sh-sm)"
    }
  }, /*#__PURE__*/React.createElement(Ico, null, icons.share)), /*#__PURE__*/React.createElement(IconButton, {
    style: {
      background: "rgba(255,255,255,.92)",
      color: fav ? "var(--red)" : "var(--ink-2)",
      boxShadow: "var(--sh-sm)"
    },
    onClick: () => toggleFav(item.id)
  }, /*#__PURE__*/React.createElement("svg", {
    width: "19",
    height: "19",
    viewBox: "0 0 24 24",
    fill: fav ? "currentColor" : "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
  }))))), item.featured && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      bottom: 14,
      left: 14,
      padding: "5px 12px",
      background: "var(--yellow)",
      color: "#5a4a00",
      borderRadius: "var(--r-pill)",
      fontFamily: "var(--font-body)",
      fontWeight: 700,
      fontSize: 12
    }
  }, "FEATURED")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "22px 24px 30px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 34,
      color: "var(--blue)",
      letterSpacing: "-0.025em",
      lineHeight: 1
    }
  }, item.price, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 17,
      color: "var(--ink-3)"
    }
  }, "KWD")), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 700,
      fontSize: 19,
      color: "var(--ink)",
      margin: "12px 0 0",
      lineHeight: 1.35
    }
  }, item.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      marginTop: 12,
      color: "var(--ink-3)",
      fontFamily: "var(--font-body)",
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement(Ico, {
    size: 16
  }, icons.pin), " ", item.loc, ", Kuwait \xB7 ", item.time), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap",
      marginTop: 18
    }
  }, item.badges.map((b, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 600,
      fontSize: 13,
      padding: "6px 12px",
      borderRadius: "var(--r-pill)",
      background: "var(--surface-2)",
      color: "var(--ink-2)"
    }
  }, b))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      padding: "16px",
      borderRadius: "var(--r-lg)",
      border: "1.5px solid var(--line)",
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Ahmad Ali",
    verified: true,
    size: 48
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 700,
      fontSize: 15,
      color: "var(--ink)",
      display: "flex",
      alignItems: "center",
      gap: 6
    }
  }, "Ahmad Ali ", /*#__PURE__*/React.createElement(Badge, {
    color: "green",
    soft: true,
    size: "sm"
  }, "Verified")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13,
      color: "var(--ink-3)",
      marginTop: 2
    }
  }, "Member since 2019 \xB7 42 ads"))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 15,
      lineHeight: 1.6,
      color: "var(--ink-2)",
      marginTop: 20
    }
  }, "Excellent condition, no accidents. Agency maintained with full service history. Serious buyers only \u2014 price is slightly negotiable. Call or message anytime."), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "sticky",
      bottom: 0,
      display: "flex",
      gap: 10,
      marginTop: 24,
      paddingTop: 14,
      background: "linear-gradient(transparent, var(--white) 30%)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    iconLeft: /*#__PURE__*/React.createElement(Ico, {
      size: 18
    }, icons.msg),
    style: {
      flex: 1
    }
  }, "Chat"), /*#__PURE__*/React.createElement(Button, {
    iconLeft: /*#__PURE__*/React.createElement(Ico, {
      size: 18
    }, icons.call),
    style: {
      flex: 1
    }
  }, "Call seller")))));
}
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--blue-700)",
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: "0 auto",
      padding: "44px 28px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: S.LOGO_W,
    alt: "4SALE",
    style: {
      height: 24,
      marginBottom: 12
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 14,
      color: "var(--sky)"
    }
  }, "\u0631\u064A\u0651\u062D \u0628\u0627\u0644\u0643 \xB7 Worry Free \u2014 Kuwait's fastest marketplace.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent"
  }, "Get the app"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    style: {
      color: "#fff",
      border: "1.5px solid rgba(255,255,255,.3)"
    }
  }, "www.q84sale.com"))));
}
function App() {
  const [cat, setCat] = React.useState("all");
  const [favs, setFavs] = React.useState({
    1: true
  });
  const [open, setOpen] = React.useState(null);
  const toggleFav = id => setFavs(f => ({
    ...f,
    [id]: !f[id]
  }));
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Header, {
    onPost: () => alert("Post your ad — flow not included in this kit")
  }), /*#__PURE__*/React.createElement(Hero, {
    onSearch: () => {},
    cat: cat,
    setCat: setCat
  }), /*#__PURE__*/React.createElement(CategoryGrid, {
    setCat: setCat
  }), /*#__PURE__*/React.createElement(ListingsSection, {
    cat: cat,
    setCat: setCat,
    favs: favs,
    toggleFav: toggleFav,
    onOpen: setOpen
  }), /*#__PURE__*/React.createElement(Footer, null), /*#__PURE__*/React.createElement(DetailDrawer, {
    item: open,
    favs: favs,
    toggleFav: toggleFav,
    onClose: () => setOpen(null)
  }));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketplace/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketplace/data.jsx
try { (() => {
/* 4SALE Marketplace UI kit — brand-led recreation of the q84sale.com web view.
   Composes design-system primitives from window.Ds4SALEDesignSystem_d38415.
   NOTE: built from the brand manual (no product codebase was provided);
   listing photos are graceful placeholders. */

const DS = window.Ds4SALEDesignSystem_d38415;
const {
  Button,
  IconButton,
  Badge,
  Tag,
  Avatar,
  SearchBar,
  ListingCard,
  CategoryTile,
  Tabs
} = DS;

/* ---- inline icon helper (Lucide-style: unfilled, rounded, forward-facing) ---- */
function Ico({
  children,
  size = 22,
  sw = 1.8
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: sw,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, children);
}
const icons = {
  car: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M5 17H3v-5l2-5h14l2 5v5h-2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "7.5",
    cy: "17",
    r: "2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "16.5",
    cy: "17",
    r: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 17h6"
  })),
  home: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M3 10 12 3l9 7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 9v11h14V9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 20v-6h4v6"
  })),
  phone: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
    x: "7",
    y: "3",
    width: "10",
    height: "18",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11 18h2"
  })),
  sofa: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M4 11V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2 13a2 2 0 0 1 2 2v2h16v-2a2 2 0 0 1 2-2 2 2 0 0 0-2-2 2 2 0 0 0-2 2H6a2 2 0 0 0-2-2 2 2 0 0 0-2 2Z"
  })),
  bag: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 6h18M16 10a4 4 0 0 1-8 0"
  })),
  briefcase: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "7",
    width: "20",
    height: "14",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"
  })),
  wrench: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.1 2.1-2.1-2.1Z"
  })),
  paw: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "4",
    r: "2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "18",
    cy: "8",
    r: "2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "4",
    cy: "8",
    r: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.5 14.5c1-2 5-2 6 0 .6 1.2 2 2 2 3.5a3 3 0 0 1-6 0 3 3 0 0 1-6 0c0-1.5 1.4-2.3 2-3.5Z"
  })),
  pin: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "10",
    r: "3"
  })),
  chevron: /*#__PURE__*/React.createElement("path", {
    d: "m6 9 6 6 6-6"
  }),
  plus: /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14M12 5v14"
  }),
  bell: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.3 21a1.94 1.94 0 0 0 3.4 0"
  })),
  msg: /*#__PURE__*/React.createElement("path", {
    d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z"
  }),
  grid: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "3",
    width: "7",
    height: "7",
    rx: "1.5"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14",
    y: "3",
    width: "7",
    height: "7",
    rx: "1.5"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "14",
    width: "7",
    height: "7",
    rx: "1.5"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14",
    y: "14",
    width: "7",
    height: "7",
    rx: "1.5"
  })),
  share: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("circle", {
    cx: "18",
    cy: "5",
    r: "3"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "6",
    cy: "12",
    r: "3"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "18",
    cy: "19",
    r: "3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m8.6 13.5 6.8 4M15.4 6.5l-6.8 4"
  })),
  star: /*#__PURE__*/React.createElement("path", {
    d: "M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 17l-5.2 2.7 1-5.8L3.5 9.7l5.9-.9Z"
  }),
  shield: /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m9 12 2 2 4-4"
  })),
  call: /*#__PURE__*/React.createElement("path", {
    d: "M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8 9.6a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2Z"
  }),
  close: /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18M6 6l12 12"
  })
};
const CATEGORIES = [{
  key: "cars",
  label: "Cars",
  icon: icons.car,
  color: "blue",
  count: "32,480"
}, {
  key: "realestate",
  label: "Real Estate",
  icon: icons.home,
  color: "green",
  count: "18,900"
}, {
  key: "electronics",
  label: "Electronics",
  icon: icons.phone,
  color: "violet",
  count: "9,120"
}, {
  key: "furniture",
  label: "Furniture",
  icon: icons.sofa,
  color: "orange",
  count: "6,540"
}, {
  key: "fashion",
  label: "Fashion",
  icon: icons.bag,
  color: "sky",
  count: "4,300"
}, {
  key: "jobs",
  label: "Jobs",
  icon: icons.briefcase,
  color: "yellow",
  count: "2,150"
}, {
  key: "services",
  label: "Services",
  icon: icons.wrench,
  color: "blue",
  count: "3,870"
}, {
  key: "pets",
  label: "Pets",
  icon: icons.paw,
  color: "green",
  count: "1,220"
}];
const LISTINGS = [{
  id: 1,
  cat: "cars",
  price: "4,250",
  title: "Toyota Land Cruiser 2021 — full options, agency maintained",
  loc: "Hawally",
  time: "2h ago",
  badges: ["2021", "45,000 km", "Petrol"],
  featured: true,
  tint: "blue"
}, {
  id: 2,
  cat: "electronics",
  price: "320",
  title: "iPhone 15 Pro Max 256GB — like new with warranty",
  loc: "Salmiya",
  time: "5h ago",
  badges: ["256GB", "Warranty"],
  tint: "violet"
}, {
  id: 3,
  cat: "realestate",
  price: "650",
  title: "Spacious 3-bedroom apartment for rent, sea view",
  loc: "Mahboula",
  time: "1d ago",
  badges: ["3 BR", "Furnished"],
  featured: true,
  tint: "green"
}, {
  id: 4,
  cat: "furniture",
  price: "85",
  title: "Modern L-shaped sofa, grey fabric — barely used",
  loc: "Jabriya",
  time: "3h ago",
  badges: ["Like new"],
  tint: "orange"
}, {
  id: 5,
  cat: "cars",
  price: "2,900",
  title: "Nissan Patrol 2019 — single owner, clean history",
  loc: "Farwaniya",
  time: "6h ago",
  badges: ["2019", "78,000 km"],
  tint: "blue"
}, {
  id: 6,
  cat: "electronics",
  price: "180",
  title: "PlayStation 5 Slim + 2 controllers & 3 games",
  loc: "Kuwait City",
  time: "8h ago",
  badges: ["Bundle"],
  tint: "violet"
}, {
  id: 7,
  cat: "realestate",
  price: "1,200",
  title: "Commercial office space, 120 sqm, prime location",
  loc: "Sharq",
  time: "2d ago",
  badges: ["120 sqm"],
  tint: "green"
}, {
  id: 8,
  cat: "furniture",
  price: "45",
  title: "Solid wood dining table with 6 chairs",
  loc: "Fahaheel",
  time: "1d ago",
  badges: ["Wood"],
  tint: "orange"
}];
window.MarketplaceData = {
  icons,
  Ico,
  CATEGORIES,
  LISTINGS,
  DS
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketplace/data.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketplace/shell.jsx
try { (() => {
/* 4SALE Marketplace — app shell, header, hero, sections, detail drawer */

const M = window.MarketplaceData;
const {
  Ico,
  icons,
  CATEGORIES,
  LISTINGS
} = M;
const {
  Button,
  IconButton,
  Badge,
  Tag,
  Avatar,
  SearchBar,
  ListingCard,
  CategoryTile,
  Tabs
} = M.DS;
const LOGO = "../../assets/logo/4sale-blue.png";
const LOGO_W = "../../assets/logo/4sale-white.png";
function Header({
  onPost
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 40,
      background: "rgba(255,255,255,.86)",
      backdropFilter: "blur(14px)",
      borderBottom: "1.5px solid var(--line)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: "0 auto",
      padding: "0 28px",
      height: 70,
      display: "flex",
      alignItems: "center",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: LOGO,
    alt: "4SALE",
    style: {
      height: 26
    }
  }), /*#__PURE__*/React.createElement("button", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 7,
      height: 40,
      padding: "0 14px",
      borderRadius: "var(--r-pill)",
      border: "1.5px solid var(--line-2)",
      background: "var(--white)",
      cursor: "pointer",
      fontFamily: "var(--font-body)",
      fontWeight: 600,
      fontSize: 14,
      color: "var(--ink-2)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--blue)",
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement(Ico, {
    size: 18
  }, icons.pin)), "Kuwait ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ink-3)",
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement(Ico, {
    size: 16
  }, icons.chevron))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    variant: "ghost"
  }, /*#__PURE__*/React.createElement(Ico, null, icons.msg)), /*#__PURE__*/React.createElement(IconButton, {
    variant: "ghost"
  }, /*#__PURE__*/React.createElement(Ico, null, icons.bell)), /*#__PURE__*/React.createElement("button", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      height: 40,
      padding: "0 6px 0 14px",
      borderRadius: "var(--r-pill)",
      border: "1.5px solid var(--line-2)",
      background: "var(--white)",
      cursor: "pointer",
      fontFamily: "var(--font-body)",
      fontWeight: 600,
      fontSize: 13,
      color: "var(--ink-2)"
    }
  }, "\u0639\u0631\u0628\u064A", /*#__PURE__*/React.createElement(Avatar, {
    name: "Ahmad Ali",
    size: 30
  })), /*#__PURE__*/React.createElement(Button, {
    iconLeft: /*#__PURE__*/React.createElement(Ico, {
      size: 18
    }, icons.plus),
    onClick: onPost
  }, "Post your ad"))));
}
function Hero({
  onSearch,
  cat,
  setCat
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      overflow: "hidden",
      background: "var(--blue)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      opacity: 0.5,
      background: "radial-gradient(360px 360px at 88% -10%, rgba(141,227,255,.45), transparent 60%), radial-gradient(300px 300px at 12% 120%, rgba(123,96,255,.4), transparent 60%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: 1180,
      margin: "0 auto",
      padding: "64px 28px 40px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      padding: "6px 14px",
      borderRadius: "var(--r-pill)",
      background: "rgba(255,255,255,.16)",
      color: "#fff",
      fontFamily: "var(--font-body)",
      fontWeight: 600,
      fontSize: 13,
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(Ico, {
    size: 16
  }, icons.shield), " Worry Free \xB7 \u0631\u064A\u0651\u062D \u0628\u0627\u0644\u0643"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 60,
      lineHeight: 0.98,
      letterSpacing: "-0.03em",
      color: "#fff",
      margin: "0 0 14px",
      maxWidth: 720
    }
  }, "Your fastest destination to buy & sell"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 18,
      color: "var(--sky)",
      margin: "0 0 28px",
      maxWidth: 560
    }
  }, "Kuwait's #1 marketplace \u2014 cars, real estate, electronics and everything in between."), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 760
    }
  }, /*#__PURE__*/React.createElement(SearchBar, {
    category: "All",
    placeholder: "Search for anything\u2026",
    onSubmit: onSearch
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 9,
      marginTop: 18,
      flexWrap: "wrap"
    }
  }, CATEGORIES.slice(0, 6).map(c => /*#__PURE__*/React.createElement("button", {
    key: c.key,
    onClick: () => setCat(c.key),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 7,
      height: 38,
      padding: "0 16px",
      borderRadius: "var(--r-pill)",
      cursor: "pointer",
      fontFamily: "var(--font-body)",
      fontWeight: 600,
      fontSize: 14,
      border: "1.5px solid transparent",
      background: cat === c.key ? "#fff" : "rgba(255,255,255,.16)",
      color: cat === c.key ? "var(--blue)" : "#fff"
    }
  }, /*#__PURE__*/React.createElement(Ico, {
    size: 17
  }, c.icon), " ", c.label)))));
}
function CategoryGrid({
  setCat
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1180,
      margin: "0 auto",
      padding: "38px 28px 6px"
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    title: "Browse categories",
    action: "All categories"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(8, 1fr)",
      gap: 12
    }
  }, CATEGORIES.map(c => /*#__PURE__*/React.createElement(CategoryTile, {
    key: c.key,
    icon: /*#__PURE__*/React.createElement(Ico, {
      size: 26
    }, c.icon),
    label: c.label,
    count: c.count,
    color: c.color,
    onClick: () => setCat(c.key)
  }))));
}
function SectionHead({
  title,
  action
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      justifyContent: "space-between",
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 26,
      letterSpacing: "-0.025em",
      color: "var(--ink)",
      margin: 0
    }
  }, title), action && /*#__PURE__*/React.createElement("a", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 700,
      fontSize: 14,
      color: "var(--blue)",
      cursor: "pointer"
    }
  }, action, " \u2192"));
}
window.MarketplaceShell = {
  Header,
  Hero,
  CategoryGrid,
  SectionHead,
  LOGO,
  LOGO_W
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketplace/shell.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.SearchBar = __ds_scope.SearchBar;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.CategoryTile = __ds_scope.CategoryTile;

__ds_ns.ListingCard = __ds_scope.ListingCard;

})();
