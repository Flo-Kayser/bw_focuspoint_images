// node_modules/svelte/src/version.js
var PUBLIC_VERSION = "5";

// node_modules/svelte/src/internal/disclose-version.js
if (typeof window !== "undefined") {
  ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(PUBLIC_VERSION);
}

// node_modules/svelte/src/constants.js
var EACH_ITEM_REACTIVE = 1;
var EACH_INDEX_REACTIVE = 1 << 1;
var EACH_IS_CONTROLLED = 1 << 2;
var EACH_IS_ANIMATED = 1 << 3;
var EACH_ITEM_IMMUTABLE = 1 << 4;
var PROPS_IS_IMMUTABLE = 1;
var PROPS_IS_RUNES = 1 << 1;
var PROPS_IS_UPDATED = 1 << 2;
var PROPS_IS_BINDABLE = 1 << 3;
var PROPS_IS_LAZY_INITIAL = 1 << 4;
var TRANSITION_OUT = 1 << 1;
var TRANSITION_GLOBAL = 1 << 2;
var TEMPLATE_FRAGMENT = 1;
var TEMPLATE_USE_IMPORT_NODE = 1 << 1;
var TEMPLATE_USE_SVG = 1 << 2;
var TEMPLATE_USE_MATHML = 1 << 3;
var HYDRATION_START = "[";
var HYDRATION_START_ELSE = "[!";
var HYDRATION_START_FAILED = "[?";
var HYDRATION_END = "]";
var HYDRATION_ERROR = {};
var ELEMENT_PRESERVE_ATTRIBUTE_CASE = 1 << 1;
var ELEMENT_IS_INPUT = 1 << 2;
var UNINITIALIZED = Symbol("uninitialized");
var FILENAME = Symbol("filename");
var HMR = Symbol("hmr");
var NAMESPACE_HTML = "http://www.w3.org/1999/xhtml";
var NAMESPACE_SVG = "http://www.w3.org/2000/svg";
var NAMESPACE_MATHML = "http://www.w3.org/1998/Math/MathML";

// node_modules/esm-env/dev-fallback.js
var node_env = globalThis.process?.env?.NODE_ENV;
var dev_fallback_default = node_env && !node_env.toLowerCase().startsWith("prod");

// node_modules/svelte/src/internal/shared/utils.js
var is_array = Array.isArray;
var index_of = Array.prototype.indexOf;
var includes = Array.prototype.includes;
var array_from = Array.from;
var object_keys = Object.keys;
var define_property = Object.defineProperty;
var get_descriptor = Object.getOwnPropertyDescriptor;
var get_descriptors = Object.getOwnPropertyDescriptors;
var object_prototype = Object.prototype;
var array_prototype = Array.prototype;
var get_prototype_of = Object.getPrototypeOf;
var is_extensible = Object.isExtensible;
var noop = () => {
};
function run_all(arr) {
  for (var i = 0; i < arr.length; i++) {
    arr[i]();
  }
}
function deferred() {
  var resolve;
  var reject;
  var promise = new Promise((res, rej) => {
    resolve = res;
    reject = rej;
  });
  return { promise, resolve, reject };
}
function to_array(value, n) {
  if (Array.isArray(value)) {
    return value;
  }
  if (n === void 0 || !(Symbol.iterator in value)) {
    return Array.from(value);
  }
  const array = [];
  for (const element2 of value) {
    array.push(element2);
    if (array.length === n) break;
  }
  return array;
}

// node_modules/svelte/src/internal/client/constants.js
var DERIVED = 1 << 1;
var EFFECT = 1 << 2;
var RENDER_EFFECT = 1 << 3;
var MANAGED_EFFECT = 1 << 24;
var BLOCK_EFFECT = 1 << 4;
var BRANCH_EFFECT = 1 << 5;
var ROOT_EFFECT = 1 << 6;
var BOUNDARY_EFFECT = 1 << 7;
var CONNECTED = 1 << 9;
var CLEAN = 1 << 10;
var DIRTY = 1 << 11;
var MAYBE_DIRTY = 1 << 12;
var INERT = 1 << 13;
var DESTROYED = 1 << 14;
var REACTION_RAN = 1 << 15;
var DESTROYING = 1 << 25;
var EFFECT_TRANSPARENT = 1 << 16;
var EAGER_EFFECT = 1 << 17;
var HEAD_EFFECT = 1 << 18;
var EFFECT_PRESERVED = 1 << 19;
var USER_EFFECT = 1 << 20;
var EFFECT_OFFSCREEN = 1 << 25;
var WAS_MARKED = 1 << 16;
var REACTION_IS_UPDATING = 1 << 21;
var ASYNC = 1 << 22;
var ERROR_VALUE = 1 << 23;
var STATE_SYMBOL = Symbol("$state");
var LEGACY_PROPS = Symbol("legacy props");
var LOADING_ATTR_SYMBOL = Symbol("");
var PROXY_PATH_SYMBOL = Symbol("proxy path");
var ATTRIBUTES_CACHE = Symbol("attributes");
var CLASS_CACHE = Symbol("class");
var STYLE_CACHE = Symbol("style");
var TEXT_CACHE = Symbol("text");
var FORM_RESET_HANDLER = Symbol("form reset");
var HMR_ANCHOR = Symbol("hmr anchor");
var STALE_REACTION = new class StaleReactionError extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}();
var IS_XHTML = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  !!globalThis.document?.contentType && /* @__PURE__ */ globalThis.document.contentType.includes("xml")
);
var ELEMENT_NODE = 1;
var TEXT_NODE = 3;
var COMMENT_NODE = 8;
var DOCUMENT_FRAGMENT_NODE = 11;

// node_modules/svelte/src/internal/shared/errors.js
function invariant_violation(message) {
  if (dev_fallback_default) {
    const error = new Error(`invariant_violation
An invariant violation occurred, meaning Svelte's internal assumptions were flawed. This is a bug in Svelte, not your app \u2014 please open an issue at https://github.com/sveltejs/svelte, citing the following message: "${message}"
https://svelte.dev/e/invariant_violation`);
    error.name = "Svelte error";
    throw error;
  } else {
    throw new Error(`https://svelte.dev/e/invariant_violation`);
  }
}
function lifecycle_outside_component(name) {
  if (dev_fallback_default) {
    const error = new Error(`lifecycle_outside_component
\`${name}(...)\` can only be used during component initialisation
https://svelte.dev/e/lifecycle_outside_component`);
    error.name = "Svelte error";
    throw error;
  } else {
    throw new Error(`https://svelte.dev/e/lifecycle_outside_component`);
  }
}
function store_invalid_shape(name) {
  if (dev_fallback_default) {
    const error = new Error(`store_invalid_shape
\`${name}\` is not a store with a \`subscribe\` method
https://svelte.dev/e/store_invalid_shape`);
    error.name = "Svelte error";
    throw error;
  } else {
    throw new Error(`https://svelte.dev/e/store_invalid_shape`);
  }
}

// node_modules/svelte/src/internal/client/errors.js
function async_derived_orphan() {
  if (dev_fallback_default) {
    const error = new Error(`async_derived_orphan
Cannot create a \`$derived(...)\` with an \`await\` expression outside of an effect tree
https://svelte.dev/e/async_derived_orphan`);
    error.name = "Svelte error";
    throw error;
  } else {
    throw new Error(`https://svelte.dev/e/async_derived_orphan`);
  }
}
function bind_invalid_checkbox_value() {
  if (dev_fallback_default) {
    const error = new Error(`bind_invalid_checkbox_value
Using \`bind:value\` together with a checkbox input is not allowed. Use \`bind:checked\` instead
https://svelte.dev/e/bind_invalid_checkbox_value`);
    error.name = "Svelte error";
    throw error;
  } else {
    throw new Error(`https://svelte.dev/e/bind_invalid_checkbox_value`);
  }
}
function component_api_changed(method, component2) {
  if (dev_fallback_default) {
    const error = new Error(`component_api_changed
Calling \`${method}\` on a component instance (of ${component2}) is no longer valid in Svelte 5
https://svelte.dev/e/component_api_changed`);
    error.name = "Svelte error";
    throw error;
  } else {
    throw new Error(`https://svelte.dev/e/component_api_changed`);
  }
}
function component_api_invalid_new(component2, name) {
  if (dev_fallback_default) {
    const error = new Error(`component_api_invalid_new
Attempted to instantiate ${component2} with \`new ${name}\`, which is no longer valid in Svelte 5. If this component is not under your control, set the \`compatibility.componentApi\` compiler option to \`4\` to keep it working.
https://svelte.dev/e/component_api_invalid_new`);
    error.name = "Svelte error";
    throw error;
  } else {
    throw new Error(`https://svelte.dev/e/component_api_invalid_new`);
  }
}
function derived_references_self() {
  if (dev_fallback_default) {
    const error = new Error(`derived_references_self
A derived value cannot reference itself recursively
https://svelte.dev/e/derived_references_self`);
    error.name = "Svelte error";
    throw error;
  } else {
    throw new Error(`https://svelte.dev/e/derived_references_self`);
  }
}
function each_key_duplicate(a, b, value) {
  if (dev_fallback_default) {
    const error = new Error(`each_key_duplicate
${value ? `Keyed each block has duplicate key \`${value}\` at indexes ${a} and ${b}` : `Keyed each block has duplicate key at indexes ${a} and ${b}`}
https://svelte.dev/e/each_key_duplicate`);
    error.name = "Svelte error";
    throw error;
  } else {
    throw new Error(`https://svelte.dev/e/each_key_duplicate`);
  }
}
function each_key_volatile(index2, a, b) {
  if (dev_fallback_default) {
    const error = new Error(`each_key_volatile
Keyed each block has key that is not idempotent \u2014 the key for item at index ${index2} was \`${a}\` but is now \`${b}\`. Keys must be the same each time for a given item
https://svelte.dev/e/each_key_volatile`);
    error.name = "Svelte error";
    throw error;
  } else {
    throw new Error(`https://svelte.dev/e/each_key_volatile`);
  }
}
function effect_in_teardown(rune) {
  if (dev_fallback_default) {
    const error = new Error(`effect_in_teardown
\`${rune}\` cannot be used inside an effect cleanup function
https://svelte.dev/e/effect_in_teardown`);
    error.name = "Svelte error";
    throw error;
  } else {
    throw new Error(`https://svelte.dev/e/effect_in_teardown`);
  }
}
function effect_in_unowned_derived() {
  if (dev_fallback_default) {
    const error = new Error(`effect_in_unowned_derived
Effect cannot be created inside a \`$derived\` value that was not itself created inside an effect
https://svelte.dev/e/effect_in_unowned_derived`);
    error.name = "Svelte error";
    throw error;
  } else {
    throw new Error(`https://svelte.dev/e/effect_in_unowned_derived`);
  }
}
function effect_orphan(rune) {
  if (dev_fallback_default) {
    const error = new Error(`effect_orphan
\`${rune}\` can only be used inside an effect (e.g. during component initialisation)
https://svelte.dev/e/effect_orphan`);
    error.name = "Svelte error";
    throw error;
  } else {
    throw new Error(`https://svelte.dev/e/effect_orphan`);
  }
}
function effect_update_depth_exceeded() {
  if (dev_fallback_default) {
    const error = new Error(`effect_update_depth_exceeded
Maximum update depth exceeded. This typically indicates that an effect reads and writes the same piece of state
https://svelte.dev/e/effect_update_depth_exceeded`);
    error.name = "Svelte error";
    throw error;
  } else {
    throw new Error(`https://svelte.dev/e/effect_update_depth_exceeded`);
  }
}
function hydration_failed() {
  if (dev_fallback_default) {
    const error = new Error(`hydration_failed
Failed to hydrate the application
https://svelte.dev/e/hydration_failed`);
    error.name = "Svelte error";
    throw error;
  } else {
    throw new Error(`https://svelte.dev/e/hydration_failed`);
  }
}
function props_invalid_value(key2) {
  if (dev_fallback_default) {
    const error = new Error(`props_invalid_value
Cannot do \`bind:${key2}={undefined}\` when \`${key2}\` has a fallback value
https://svelte.dev/e/props_invalid_value`);
    error.name = "Svelte error";
    throw error;
  } else {
    throw new Error(`https://svelte.dev/e/props_invalid_value`);
  }
}
function rune_outside_svelte(rune) {
  if (dev_fallback_default) {
    const error = new Error(`rune_outside_svelte
The \`${rune}\` rune is only available inside \`.svelte\` and \`.svelte.js/ts\` files
https://svelte.dev/e/rune_outside_svelte`);
    error.name = "Svelte error";
    throw error;
  } else {
    throw new Error(`https://svelte.dev/e/rune_outside_svelte`);
  }
}
function state_descriptors_fixed() {
  if (dev_fallback_default) {
    const error = new Error(`state_descriptors_fixed
Property descriptors defined on \`$state\` objects must contain \`value\` and always be \`enumerable\`, \`configurable\` and \`writable\`.
https://svelte.dev/e/state_descriptors_fixed`);
    error.name = "Svelte error";
    throw error;
  } else {
    throw new Error(`https://svelte.dev/e/state_descriptors_fixed`);
  }
}
function state_prototype_fixed() {
  if (dev_fallback_default) {
    const error = new Error(`state_prototype_fixed
Cannot set prototype of \`$state\` object
https://svelte.dev/e/state_prototype_fixed`);
    error.name = "Svelte error";
    throw error;
  } else {
    throw new Error(`https://svelte.dev/e/state_prototype_fixed`);
  }
}
function state_unsafe_mutation() {
  if (dev_fallback_default) {
    const error = new Error(`state_unsafe_mutation
Updating state inside \`$derived(...)\`, \`$inspect(...)\` or a template expression is forbidden. If the value should not be reactive, declare it without \`$state\`
https://svelte.dev/e/state_unsafe_mutation`);
    error.name = "Svelte error";
    throw error;
  } else {
    throw new Error(`https://svelte.dev/e/state_unsafe_mutation`);
  }
}
function svelte_boundary_reset_onerror() {
  if (dev_fallback_default) {
    const error = new Error(`svelte_boundary_reset_onerror
A \`<svelte:boundary>\` \`reset\` function cannot be called while an error is still being handled
https://svelte.dev/e/svelte_boundary_reset_onerror`);
    error.name = "Svelte error";
    throw error;
  } else {
    throw new Error(`https://svelte.dev/e/svelte_boundary_reset_onerror`);
  }
}

// node_modules/svelte/src/internal/client/warnings.js
var bold = "font-weight: bold";
var normal = "font-weight: normal";
function await_reactivity_loss(name) {
  if (dev_fallback_default) {
    console.warn(`%c[svelte] await_reactivity_loss
%cDetected reactivity loss when reading \`${name}\`. This happens when state is read in an async function after an earlier \`await\`
https://svelte.dev/e/await_reactivity_loss`, bold, normal);
  } else {
    console.warn(`https://svelte.dev/e/await_reactivity_loss`);
  }
}
function await_waterfall(name, location) {
  if (dev_fallback_default) {
    console.warn(`%c[svelte] await_waterfall
%cAn async derived, \`${name}\` (${location}) was not read immediately after it resolved. This often indicates an unnecessary waterfall, which can slow down your app
https://svelte.dev/e/await_waterfall`, bold, normal);
  } else {
    console.warn(`https://svelte.dev/e/await_waterfall`);
  }
}
function derived_inert() {
  if (dev_fallback_default) {
    console.warn(`%c[svelte] derived_inert
%cReading a derived belonging to a now-destroyed effect may result in stale values
https://svelte.dev/e/derived_inert`, bold, normal);
  } else {
    console.warn(`https://svelte.dev/e/derived_inert`);
  }
}
function hydration_attribute_changed(attribute, html2, value) {
  if (dev_fallback_default) {
    console.warn(`%c[svelte] hydration_attribute_changed
%cThe \`${attribute}\` attribute on \`${html2}\` changed its value between server and client renders. The client value, \`${value}\`, will be ignored in favour of the server value
https://svelte.dev/e/hydration_attribute_changed`, bold, normal);
  } else {
    console.warn(`https://svelte.dev/e/hydration_attribute_changed`);
  }
}
function hydration_html_changed(location) {
  if (dev_fallback_default) {
    console.warn(
      `%c[svelte] hydration_html_changed
%c${location ? `The value of an \`{@html ...}\` block ${location} changed between server and client renders. The client value will be ignored in favour of the server value` : "The value of an `{@html ...}` block changed between server and client renders. The client value will be ignored in favour of the server value"}
https://svelte.dev/e/hydration_html_changed`,
      bold,
      normal
    );
  } else {
    console.warn(`https://svelte.dev/e/hydration_html_changed`);
  }
}
function hydration_mismatch(location) {
  if (dev_fallback_default) {
    console.warn(
      `%c[svelte] hydration_mismatch
%c${location ? `Hydration failed because the initial UI does not match what was rendered on the server. The error occurred near ${location}` : "Hydration failed because the initial UI does not match what was rendered on the server"}
https://svelte.dev/e/hydration_mismatch`,
      bold,
      normal
    );
  } else {
    console.warn(`https://svelte.dev/e/hydration_mismatch`);
  }
}
function lifecycle_double_unmount() {
  if (dev_fallback_default) {
    console.warn(`%c[svelte] lifecycle_double_unmount
%cTried to unmount a component that was not mounted
https://svelte.dev/e/lifecycle_double_unmount`, bold, normal);
  } else {
    console.warn(`https://svelte.dev/e/lifecycle_double_unmount`);
  }
}
function select_multiple_invalid_value() {
  if (dev_fallback_default) {
    console.warn(`%c[svelte] select_multiple_invalid_value
%cThe \`value\` property of a \`<select multiple>\` element should be an array, but it received a non-array value. The selection will be kept as is.
https://svelte.dev/e/select_multiple_invalid_value`, bold, normal);
  } else {
    console.warn(`https://svelte.dev/e/select_multiple_invalid_value`);
  }
}
function state_proxy_equality_mismatch(operator) {
  if (dev_fallback_default) {
    console.warn(`%c[svelte] state_proxy_equality_mismatch
%cReactive \`$state(...)\` proxies and the values they proxy have different identities. Because of this, comparisons with \`${operator}\` will produce unexpected results
https://svelte.dev/e/state_proxy_equality_mismatch`, bold, normal);
  } else {
    console.warn(`https://svelte.dev/e/state_proxy_equality_mismatch`);
  }
}
function state_proxy_unmount() {
  if (dev_fallback_default) {
    console.warn(`%c[svelte] state_proxy_unmount
%cTried to unmount a state proxy, rather than a component
https://svelte.dev/e/state_proxy_unmount`, bold, normal);
  } else {
    console.warn(`https://svelte.dev/e/state_proxy_unmount`);
  }
}
function svelte_boundary_reset_noop() {
  if (dev_fallback_default) {
    console.warn(`%c[svelte] svelte_boundary_reset_noop
%cA \`<svelte:boundary>\` \`reset\` function only resets the boundary the first time it is called
https://svelte.dev/e/svelte_boundary_reset_noop`, bold, normal);
  } else {
    console.warn(`https://svelte.dev/e/svelte_boundary_reset_noop`);
  }
}

// node_modules/svelte/src/internal/client/dom/hydration.js
var hydrating = false;
function set_hydrating(value) {
  hydrating = value;
}
var hydrate_node;
function set_hydrate_node(node) {
  if (node === null) {
    hydration_mismatch();
    throw HYDRATION_ERROR;
  }
  return hydrate_node = node;
}
function hydrate_next() {
  return set_hydrate_node(get_next_sibling(hydrate_node));
}
function reset(node) {
  if (!hydrating) return;
  if (get_next_sibling(hydrate_node) !== null) {
    hydration_mismatch();
    throw HYDRATION_ERROR;
  }
  hydrate_node = node;
}
function next(count = 1) {
  if (hydrating) {
    var i = count;
    var node = hydrate_node;
    while (i--) {
      node = /** @type {TemplateNode} */
      get_next_sibling(node);
    }
    hydrate_node = node;
  }
}
function skip_nodes(remove = true) {
  var depth = 0;
  var node = hydrate_node;
  while (true) {
    if (node.nodeType === COMMENT_NODE) {
      var data = (
        /** @type {Comment} */
        node.data
      );
      if (data === HYDRATION_END) {
        if (depth === 0) return node;
        depth -= 1;
      } else if (data === HYDRATION_START || data === HYDRATION_START_ELSE || // "[1", "[2", etc. for if blocks
      data[0] === "[" && !isNaN(Number(data.slice(1)))) {
        depth += 1;
      }
    }
    var next2 = (
      /** @type {TemplateNode} */
      get_next_sibling(node)
    );
    if (remove) node.remove();
    node = next2;
  }
}
function read_hydration_instruction(node) {
  if (!node || node.nodeType !== COMMENT_NODE) {
    hydration_mismatch();
    throw HYDRATION_ERROR;
  }
  return (
    /** @type {Comment} */
    node.data
  );
}

// node_modules/svelte/src/internal/client/reactivity/equality.js
function equals(value) {
  return value === this.v;
}
function safe_not_equal(a, b) {
  return a != a ? b == b : a !== b || a !== null && typeof a === "object" || typeof a === "function";
}
function safe_equals(value) {
  return !safe_not_equal(value, this.v);
}

// node_modules/svelte/src/internal/flags/index.js
var async_mode_flag = false;
var legacy_mode_flag = false;
var tracing_mode_flag = false;

// node_modules/svelte/src/internal/client/dev/tracing.js
var tracing_expressions = null;
function tag(source2, label) {
  source2.label = label;
  tag_proxy(source2.v, label);
  return source2;
}
function tag_proxy(value, label) {
  value?.[PROXY_PATH_SYMBOL]?.(label);
  return value;
}

// node_modules/svelte/src/internal/shared/dev.js
function get_error(label) {
  const error = new Error();
  const stack2 = get_stack();
  if (stack2.length === 0) {
    return null;
  }
  stack2.unshift("\n");
  define_property(error, "stack", {
    value: stack2.join("\n")
  });
  define_property(error, "name", {
    value: label
  });
  return (
    /** @type {Error & { stack: string }} */
    error
  );
}
function get_stack() {
  const limit = Error.stackTraceLimit;
  Error.stackTraceLimit = Infinity;
  const stack2 = new Error().stack;
  Error.stackTraceLimit = limit;
  if (!stack2) return [];
  const lines = stack2.split("\n");
  const new_lines = [];
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const posixified = line.replaceAll("\\", "/");
    if (line.trim() === "Error") {
      continue;
    }
    if (line.includes("validate_each_keys")) {
      return [];
    }
    if (posixified.includes("svelte/src/internal") || posixified.includes("node_modules/.vite")) {
      continue;
    }
    new_lines.push(line);
  }
  return new_lines;
}
function invariant(condition, message) {
  if (!dev_fallback_default) {
    throw new Error("invariant(...) was not guarded by if (DEV)");
  }
  if (!condition) invariant_violation(message);
}

// node_modules/svelte/src/internal/client/context.js
var component_context = null;
function set_component_context(context) {
  component_context = context;
}
var dev_stack = null;
function set_dev_stack(stack2) {
  dev_stack = stack2;
}
function add_svelte_meta(callback, type, component2, line, column, additional) {
  const parent = dev_stack;
  dev_stack = {
    type,
    file: component2[FILENAME],
    line,
    column,
    parent,
    ...additional
  };
  try {
    return callback();
  } finally {
    dev_stack = parent;
  }
}
var dev_current_component_function = null;
function set_dev_current_component_function(fn) {
  dev_current_component_function = fn;
}
function push(props, runes = false, fn) {
  component_context = {
    p: component_context,
    i: false,
    c: null,
    e: null,
    s: props,
    x: null,
    r: (
      /** @type {Effect} */
      active_effect
    ),
    l: legacy_mode_flag && !runes ? { s: null, u: null, $: [] } : null
  };
  if (dev_fallback_default) {
    component_context.function = fn;
    dev_current_component_function = fn;
  }
}
function pop(component2) {
  var context = (
    /** @type {ComponentContext} */
    component_context
  );
  var effects = context.e;
  if (effects !== null) {
    context.e = null;
    for (var fn of effects) {
      create_user_effect(fn);
    }
  }
  if (component2 !== void 0) {
    context.x = component2;
  }
  context.i = true;
  component_context = context.p;
  if (dev_fallback_default) {
    dev_current_component_function = component_context?.function ?? null;
  }
  return component2 ?? /** @type {T} */
  {};
}
function is_runes() {
  return !legacy_mode_flag || component_context !== null && component_context.l === null;
}

// node_modules/svelte/src/internal/client/dom/task.js
var micro_tasks = [];
function run_micro_tasks() {
  var tasks = micro_tasks;
  micro_tasks = [];
  run_all(tasks);
}
function queue_micro_task(fn) {
  if (micro_tasks.length === 0 && !is_flushing_sync) {
    var tasks = micro_tasks;
    queueMicrotask(() => {
      if (tasks === micro_tasks) run_micro_tasks();
    });
  }
  micro_tasks.push(fn);
}
function flush_tasks() {
  while (micro_tasks.length > 0) {
    run_micro_tasks();
  }
}

// node_modules/svelte/src/internal/client/error-handling.js
var adjustments = /* @__PURE__ */ new WeakMap();
function handle_error(error) {
  var effect2 = active_effect;
  if (effect2 === null) {
    active_reaction.f |= ERROR_VALUE;
    return error;
  }
  if (dev_fallback_default && error instanceof Error && !adjustments.has(error)) {
    adjustments.set(error, get_adjustments(error, effect2));
  }
  if ((effect2.f & REACTION_RAN) === 0 && (effect2.f & EFFECT) === 0) {
    if (dev_fallback_default && !effect2.parent && error instanceof Error) {
      apply_adjustments(error);
    }
    throw error;
  }
  invoke_error_boundary(error, effect2);
}
function invoke_error_boundary(error, effect2) {
  if (effect2 !== null && (effect2.f & DESTROYED) !== 0) {
    return;
  }
  while (effect2 !== null) {
    if ((effect2.f & BOUNDARY_EFFECT) !== 0) {
      if ((effect2.f & REACTION_RAN) === 0) {
        throw error;
      }
      try {
        effect2.b.error(error);
        return;
      } catch (e) {
        error = e;
      }
    }
    effect2 = effect2.parent;
  }
  if (dev_fallback_default && error instanceof Error) {
    apply_adjustments(error);
  }
  throw error;
}
function get_adjustments(error, effect2) {
  const message_descriptor = get_descriptor(error, "message");
  if (message_descriptor && !message_descriptor.configurable) return;
  var indent = is_firefox ? "  " : "	";
  var component_stack = `
${indent}in ${effect2.fn?.name || "<unknown>"}`;
  var context = effect2.ctx;
  while (context !== null) {
    component_stack += `
${indent}in ${context.function?.[FILENAME].split("/").pop()}`;
    context = context.p;
  }
  return {
    message: error.message + `
${component_stack}
`,
    stack: error.stack?.split("\n").filter((line) => !line.includes("svelte/src/internal")).join("\n")
  };
}
function apply_adjustments(error) {
  const adjusted = adjustments.get(error);
  if (adjusted) {
    define_property(error, "message", {
      value: adjusted.message
    });
    define_property(error, "stack", {
      value: adjusted.stack
    });
  }
}

// node_modules/svelte/src/internal/client/reactivity/status.js
var STATUS_MASK = ~(DIRTY | MAYBE_DIRTY | CLEAN);
function set_signal_status(signal, status) {
  signal.f = signal.f & STATUS_MASK | status;
}
function update_derived_status(derived3) {
  if ((derived3.f & CONNECTED) !== 0 || derived3.deps === null) {
    set_signal_status(derived3, CLEAN);
  } else {
    set_signal_status(derived3, MAYBE_DIRTY);
  }
}

// node_modules/svelte/src/internal/client/reactivity/utils.js
function clear_marked(deps) {
  if (deps === null) return;
  for (const dep of deps) {
    if ((dep.f & DERIVED) === 0 || (dep.f & WAS_MARKED) === 0) {
      continue;
    }
    dep.f ^= WAS_MARKED;
    clear_marked(
      /** @type {Derived} */
      dep.deps
    );
  }
}
function defer_effect(effect2, dirty_effects, maybe_dirty_effects) {
  if ((effect2.f & DIRTY) !== 0) {
    dirty_effects.add(effect2);
  } else if ((effect2.f & MAYBE_DIRTY) !== 0) {
    maybe_dirty_effects.add(effect2);
  }
  clear_marked(effect2.deps);
  set_signal_status(effect2, CLEAN);
}

// node_modules/svelte/src/store/utils.js
function subscribe_to_store(store, run3, invalidate) {
  if (store == null) {
    run3(void 0);
    if (invalidate) invalidate(void 0);
    return noop;
  }
  const unsub = untrack(
    () => store.subscribe(
      run3,
      // @ts-expect-error
      invalidate
    )
  );
  return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}

// node_modules/svelte/src/store/shared/index.js
var subscriber_queue = [];
function writable(value, start = noop) {
  let stop = null;
  const subscribers = /* @__PURE__ */ new Set();
  function set2(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update2(fn) {
    set2(fn(
      /** @type {T} */
      value
    ));
  }
  function subscribe(run3, invalidate = noop) {
    const subscriber = [run3, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set2, update2) || noop;
    }
    run3(
      /** @type {T} */
      value
    );
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0 && stop) {
        stop();
        stop = null;
      }
    };
  }
  return { set: set2, update: update2, subscribe };
}
function get(store) {
  let value;
  subscribe_to_store(store, (_) => value = _)();
  return value;
}

// node_modules/svelte/src/internal/client/reactivity/store.js
var legacy_is_updating_store = false;
var is_store_binding = false;
var IS_UNMOUNTED = Symbol("unmounted");
function store_get(store, store_name, stores) {
  const entry = stores[store_name] ??= {
    store: null,
    source: mutable_source(void 0),
    unsubscribe: noop
  };
  if (dev_fallback_default) {
    entry.source.label = store_name;
  }
  if (entry.store !== store && !(IS_UNMOUNTED in stores)) {
    entry.unsubscribe();
    entry.store = store ?? null;
    if (store == null) {
      entry.source.v = void 0;
      entry.unsubscribe = noop;
    } else {
      var is_synchronous_callback = true;
      entry.unsubscribe = subscribe_to_store(store, (v) => {
        if (is_synchronous_callback) {
          entry.source.v = v;
        } else {
          set(entry.source, v);
        }
      });
      is_synchronous_callback = false;
    }
  }
  if (store && IS_UNMOUNTED in stores) {
    return get(store);
  }
  return get2(entry.source);
}
function store_set(store, value) {
  update_with_flag(store, value);
  return value;
}
function setup_stores() {
  const stores = {};
  function cleanup() {
    teardown(() => {
      for (var store_name in stores) {
        const ref = stores[store_name];
        ref.unsubscribe();
      }
      define_property(stores, IS_UNMOUNTED, {
        enumerable: false,
        value: true
      });
    });
  }
  return [stores, cleanup];
}
function update_with_flag(store, value) {
  legacy_is_updating_store = true;
  try {
    store.set(value);
  } finally {
    legacy_is_updating_store = false;
  }
}
function store_mutate(store, expression, new_value) {
  update_with_flag(store, new_value);
  return expression;
}
function capture_store_binding(fn) {
  var previous_is_store_binding = is_store_binding;
  try {
    is_store_binding = false;
    return [fn(), is_store_binding];
  } finally {
    is_store_binding = previous_is_store_binding;
  }
}

// node_modules/svelte/src/internal/client/dom/elements/misc.js
function remove_textarea_child(dom) {
  if (hydrating && get_first_child(dom) !== null) {
    clear_text_content(dom);
  }
}
var listening_to_form_reset = false;
function add_form_reset_listener() {
  if (!listening_to_form_reset) {
    listening_to_form_reset = true;
    document.addEventListener(
      "reset",
      (evt) => {
        Promise.resolve().then(() => {
          if (!evt.defaultPrevented) {
            for (
              const e of
              /**@type {HTMLFormElement} */
              evt.target.elements
            ) {
              e[FORM_RESET_HANDLER]?.();
            }
          }
        });
      },
      // In the capture phase to guarantee we get noticed of it (no possibility of stopPropagation)
      { capture: true }
    );
  }
}

// node_modules/svelte/src/internal/client/dom/elements/bindings/shared.js
function without_reactive_context(fn) {
  var previous_reaction = active_reaction;
  var previous_effect = active_effect;
  set_active_reaction(null);
  set_active_effect(null);
  try {
    return fn();
  } finally {
    set_active_reaction(previous_reaction);
    set_active_effect(previous_effect);
  }
}
function listen_to_event_and_reset_event(element2, event2, handler, on_reset = handler) {
  element2.addEventListener(event2, () => without_reactive_context(handler));
  const prev = (
    /** @type {any} */
    element2[FORM_RESET_HANDLER]
  );
  if (prev) {
    element2[FORM_RESET_HANDLER] = () => {
      prev();
      on_reset(true);
    };
  } else {
    element2[FORM_RESET_HANDLER] = () => on_reset(true);
  }
  add_form_reset_listener();
}

// node_modules/svelte/src/reactivity/create-subscriber.js
function createSubscriber(start) {
  let subscribers = 0;
  let version = source(0);
  let stop;
  if (dev_fallback_default) {
    tag(version, "createSubscriber version");
  }
  return () => {
    if (effect_tracking()) {
      get2(version);
      render_effect(() => {
        if (subscribers === 0) {
          stop = untrack(() => start(() => increment(version)));
        }
        subscribers += 1;
        return () => {
          queue_micro_task(() => {
            subscribers -= 1;
            if (subscribers === 0) {
              stop?.();
              stop = void 0;
              increment(version);
            }
          });
        };
      });
    }
  };
}

// node_modules/svelte/src/internal/client/dom/blocks/boundary.js
var flags = EFFECT_TRANSPARENT | EFFECT_PRESERVED;
function boundary(node, props, children, transform_error) {
  new Boundary(node, props, children, transform_error);
}
var Boundary = class {
  /** @type {Boundary | null} */
  parent;
  is_pending = false;
  /**
   * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
   * Inherited from parent boundary, or defaults to identity.
   * @type {(error: unknown) => unknown}
   */
  transform_error;
  /** @type {TemplateNode} */
  #anchor;
  /** @type {TemplateNode | null} */
  #hydrate_open = hydrating ? hydrate_node : null;
  /** @type {BoundaryProps} */
  #props;
  /** @type {((anchor: Node) => void)} */
  #children;
  /** @type {Effect} */
  #effect;
  /** @type {Effect | null} */
  #main_effect = null;
  /** @type {Effect | null} */
  #pending_effect = null;
  /** @type {Effect | null} */
  #failed_effect = null;
  /** @type {DocumentFragment | null} */
  #offscreen_fragment = null;
  #local_pending_count = 0;
  #pending_count = 0;
  #pending_count_update_queued = false;
  /** @type {Set<Effect>} */
  #dirty_effects = /* @__PURE__ */ new Set();
  /** @type {Set<Effect>} */
  #maybe_dirty_effects = /* @__PURE__ */ new Set();
  /**
   * A source containing the number of pending async deriveds/expressions.
   * Only created if `$effect.pending()` is used inside the boundary,
   * otherwise updating the source results in needless `Batch.ensure()`
   * calls followed by no-op flushes
   * @type {Source<number> | null}
   */
  #effect_pending = null;
  #effect_pending_subscriber = createSubscriber(() => {
    this.#effect_pending = source(this.#local_pending_count);
    if (dev_fallback_default) {
      tag(this.#effect_pending, "$effect.pending()");
    }
    return () => {
      this.#effect_pending = null;
    };
  });
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(node, props, children, transform_error) {
    this.#anchor = node;
    this.#props = props;
    this.#children = (anchor) => {
      var effect2 = (
        /** @type {Effect} */
        active_effect
      );
      effect2.b = this;
      effect2.f |= BOUNDARY_EFFECT;
      children(anchor);
    };
    this.parent = /** @type {Effect} */
    active_effect.b;
    this.transform_error = transform_error ?? this.parent?.transform_error ?? ((e) => e);
    this.#effect = block(() => {
      if (hydrating) {
        const comment2 = (
          /** @type {Comment} */
          this.#hydrate_open
        );
        hydrate_next();
        const server_rendered_pending = comment2.data === HYDRATION_START_ELSE;
        const server_rendered_failed = comment2.data.startsWith(HYDRATION_START_FAILED);
        if (server_rendered_failed) {
          const serialized_error = JSON.parse(comment2.data.slice(HYDRATION_START_FAILED.length));
          this.#hydrate_failed_content(serialized_error);
        } else if (server_rendered_pending) {
          this.#hydrate_pending_content();
        } else {
          this.#hydrate_resolved_content();
        }
      } else {
        this.#render();
      }
    }, flags);
    if (hydrating) {
      this.#anchor = hydrate_node;
    }
  }
  #hydrate_resolved_content() {
    try {
      this.#main_effect = branch(() => this.#children(this.#anchor));
    } catch (error) {
      this.error(error);
    }
  }
  /**
   * @param {unknown} error The deserialized error from the server's hydration comment
   */
  #hydrate_failed_content(error) {
    const failed = this.#props.failed;
    const { reset: reset2, invoke_onerror } = this.#create_reset(error);
    queue_micro_task(invoke_onerror);
    if (!failed) return;
    this.#failed_effect = branch(() => {
      failed(
        this.#anchor,
        () => error,
        () => reset2
      );
    });
  }
  /**
   * Creates the `reset` function for a failed boundary, along with a function
   * that invokes `onerror` with it (if provided)
   * @param {unknown} error
   * @returns {{ reset: () => void, invoke_onerror: () => void }}
   */
  #create_reset(error) {
    var did_reset = false;
    var calling_on_error = false;
    const reset2 = () => {
      if (did_reset) {
        svelte_boundary_reset_noop();
        return;
      }
      did_reset = true;
      if (calling_on_error) {
        svelte_boundary_reset_onerror();
      }
      if (this.#failed_effect !== null) {
        pause_effect(this.#failed_effect, () => {
          this.#failed_effect = null;
        });
      }
      this.#run(() => {
        this.#render();
      });
    };
    const invoke_onerror = () => {
      try {
        calling_on_error = true;
        this.#props.onerror?.(error, reset2);
        calling_on_error = false;
      } catch (err) {
        invoke_error_boundary(err, this.#effect && this.#effect.parent);
      }
    };
    return { reset: reset2, invoke_onerror };
  }
  #hydrate_pending_content() {
    const pending2 = this.#props.pending;
    if (!pending2) return;
    this.is_pending = true;
    this.#pending_effect = branch(() => pending2(this.#anchor));
    queue_micro_task(() => {
      var fragment = this.#offscreen_fragment = document.createDocumentFragment();
      var anchor = create_text();
      fragment.append(anchor);
      this.#main_effect = this.#run(() => {
        return branch(() => this.#children(anchor));
      });
      if (this.#pending_count === 0) {
        this.#anchor.before(fragment);
        this.#offscreen_fragment = null;
        pause_effect(
          /** @type {Effect} */
          this.#pending_effect,
          () => {
            this.#pending_effect = null;
          }
        );
        this.#resolve(
          /** @type {Batch} */
          current_batch
        );
      }
    });
  }
  #render() {
    try {
      this.is_pending = this.has_pending_snippet();
      this.#pending_count = 0;
      this.#local_pending_count = 0;
      this.#main_effect = branch(() => {
        this.#children(this.#anchor);
      });
      if (this.#pending_count > 0) {
        var fragment = this.#offscreen_fragment = document.createDocumentFragment();
        move_effect(this.#main_effect, fragment);
        const pending2 = (
          /** @type {(anchor: Node) => void} */
          this.#props.pending
        );
        this.#pending_effect = branch(() => pending2(this.#anchor));
      } else {
        this.#resolve(
          /** @type {Batch} */
          current_batch
        );
      }
    } catch (error) {
      this.error(error);
    }
  }
  /**
   * @param {Batch} batch
   */
  #resolve(batch) {
    this.is_pending = false;
    batch.transfer_effects(this.#dirty_effects, this.#maybe_dirty_effects);
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(effect2) {
    defer_effect(effect2, this.#dirty_effects, this.#maybe_dirty_effects);
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!this.#props.pending;
  }
  /**
   * @template T
   * @param {() => T} fn
   */
  #run(fn) {
    var previous_effect = active_effect;
    var previous_reaction = active_reaction;
    var previous_ctx = component_context;
    set_active_effect(this.#effect);
    set_active_reaction(this.#effect);
    set_component_context(this.#effect.ctx);
    try {
      Batch.ensure();
      return fn();
    } catch (e) {
      handle_error(e);
      return null;
    } finally {
      set_active_effect(previous_effect);
      set_active_reaction(previous_reaction);
      set_component_context(previous_ctx);
    }
  }
  /**
   * Updates the pending count associated with the currently visible pending snippet,
   * if any, such that we can replace the snippet with content once work is done
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  #update_pending_count(d, batch) {
    if (!this.has_pending_snippet()) {
      if (this.parent) {
        this.parent.#update_pending_count(d, batch);
      }
      return;
    }
    this.#pending_count += d;
    if (this.#pending_count === 0) {
      this.#resolve(batch);
      if (this.#pending_effect) {
        pause_effect(this.#pending_effect, () => {
          this.#pending_effect = null;
        });
      }
      if (this.#offscreen_fragment) {
        this.#anchor.before(this.#offscreen_fragment);
        this.#offscreen_fragment = null;
      }
    }
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(d, batch) {
    this.#update_pending_count(d, batch);
    this.#local_pending_count += d;
    if (!this.#effect_pending || this.#pending_count_update_queued) return;
    this.#pending_count_update_queued = true;
    queue_micro_task(() => {
      this.#pending_count_update_queued = false;
      if (this.#effect_pending) {
        internal_set(this.#effect_pending, this.#local_pending_count);
      }
    });
  }
  get_effect_pending() {
    this.#effect_pending_subscriber();
    return get2(
      /** @type {Source<number>} */
      this.#effect_pending
    );
  }
  /** @param {unknown} error */
  error(error) {
    if (!this.#props.onerror && !this.#props.failed) {
      throw error;
    }
    if (current_batch?.is_fork) {
      if (this.#main_effect) current_batch.skip_effect(this.#main_effect);
      if (this.#pending_effect) current_batch.skip_effect(this.#pending_effect);
      if (this.#failed_effect) current_batch.skip_effect(this.#failed_effect);
      current_batch.oncommit(() => {
        this.#handle_error(error);
      });
    } else {
      this.#handle_error(error);
    }
  }
  /**
   * @param {unknown} error
   */
  #handle_error(error) {
    if (this.#main_effect) {
      destroy_effect(this.#main_effect);
      this.#main_effect = null;
    }
    if (this.#pending_effect) {
      destroy_effect(this.#pending_effect);
      this.#pending_effect = null;
    }
    if (this.#failed_effect) {
      destroy_effect(this.#failed_effect);
      this.#failed_effect = null;
    }
    if (hydrating) {
      set_hydrate_node(
        /** @type {TemplateNode} */
        this.#hydrate_open
      );
      next();
      set_hydrate_node(skip_nodes());
    }
    let failed = this.#props.failed;
    const handle_error_result = (transformed_error) => {
      const { reset: reset2, invoke_onerror } = this.#create_reset(transformed_error);
      invoke_onerror();
      if (failed) {
        this.#failed_effect = this.#run(() => {
          try {
            return branch(() => {
              var effect2 = (
                /** @type {Effect} */
                active_effect
              );
              effect2.b = this;
              effect2.f |= BOUNDARY_EFFECT;
              failed(
                this.#anchor,
                () => transformed_error,
                () => reset2
              );
            });
          } catch (error2) {
            invoke_error_boundary(
              error2,
              /** @type {Effect} */
              this.#effect.parent
            );
            return null;
          }
        });
      }
    };
    queue_micro_task(() => {
      var result;
      try {
        result = this.transform_error(error);
      } catch (e) {
        invoke_error_boundary(e, this.#effect && this.#effect.parent);
        return;
      }
      if (result !== null && typeof result === "object" && typeof /** @type {any} */
      result.then === "function") {
        result.then(
          handle_error_result,
          /** @param {unknown} e */
          (e) => invoke_error_boundary(e, this.#effect && this.#effect.parent)
        );
      } else {
        handle_error_result(result);
      }
    });
  }
};

// node_modules/svelte/src/internal/client/reactivity/async.js
function flatten(blockers, sync, async2, fn) {
  const d = is_runes() ? derived : derived_safe_equal;
  var pending2 = blockers.filter((b) => !b.settled);
  var deriveds = sync.map(d);
  if (dev_fallback_default) {
    deriveds.forEach((d2, i) => {
      d2.label = sync[i].toString().replace("() => ", "").replaceAll("$.eager(() => ", "$state.eager(").replace(/\$\.get\((.+?)\)/g, (_, id) => id);
    });
  }
  if (async2.length === 0 && pending2.length === 0) {
    fn(deriveds);
    return;
  }
  var parent = (
    /** @type {Effect} */
    active_effect
  );
  var restore = capture();
  var blocker_promise = pending2.length === 1 ? pending2[0].promise : pending2.length > 1 ? Promise.all(pending2.map((b) => b.promise)) : null;
  function finish(async3) {
    if ((parent.f & DESTROYED) !== 0) {
      return;
    }
    restore();
    try {
      fn([...deriveds, ...async3]);
    } catch (error) {
      invoke_error_boundary(error, parent);
    }
    unset_context();
  }
  var decrement_pending = increment_pending();
  if (async2.length === 0) {
    blocker_promise.then(() => finish([])).finally(decrement_pending);
    return;
  }
  function run3() {
    Promise.all(async2.map((expression) => async_derived(expression))).then(finish).catch((error) => invoke_error_boundary(error, parent)).finally(decrement_pending);
  }
  if (blocker_promise) {
    blocker_promise.then(() => {
      restore();
      run3();
      unset_context();
    });
  } else {
    run3();
  }
}
function capture() {
  var previous_effect = (
    /** @type {Effect} */
    active_effect
  );
  var previous_reaction = active_reaction;
  var previous_component_context = component_context;
  var previous_batch2 = (
    /** @type {Batch} */
    current_batch
  );
  if (dev_fallback_default) {
    var previous_dev_stack = dev_stack;
  }
  return function restore(activate_batch = true) {
    set_active_effect(previous_effect);
    set_active_reaction(previous_reaction);
    set_component_context(previous_component_context);
    if (activate_batch && (previous_effect.f & DESTROYED) === 0) {
      previous_batch2?.activate();
      previous_batch2?.apply();
    }
    if (dev_fallback_default) {
      set_reactivity_loss_tracker(null);
      set_dev_stack(previous_dev_stack);
    }
  };
}
async function track_reactivity_loss(promise) {
  var previous_reactivity_loss_tracker = reactivity_loss_tracker;
  queueMicrotask(() => {
    if (reactivity_loss_tracker === previous_reactivity_loss_tracker) {
      set_reactivity_loss_tracker(null);
    }
  });
  var value = await promise;
  return () => {
    set_reactivity_loss_tracker(previous_reactivity_loss_tracker);
    queueMicrotask(() => {
      if (reactivity_loss_tracker === previous_reactivity_loss_tracker) {
        set_reactivity_loss_tracker(null);
      }
    });
    return value;
  };
}
function unset_context(deactivate_batch = true) {
  set_active_effect(null);
  set_active_reaction(null);
  set_component_context(null);
  if (deactivate_batch) current_batch?.deactivate();
  if (dev_fallback_default) {
    set_reactivity_loss_tracker(null);
    set_dev_stack(null);
  }
}
function increment_pending() {
  var effect2 = (
    /** @type {Effect} */
    active_effect
  );
  var boundary2 = effect2.b;
  var batch = (
    /** @type {Batch} */
    current_batch
  );
  var blocking = !!boundary2?.is_rendered();
  boundary2?.update_pending_count(1, batch);
  batch.increment(blocking, effect2);
  return () => {
    boundary2?.update_pending_count(-1, batch);
    batch.decrement(blocking, effect2);
  };
}

// node_modules/svelte/src/internal/client/reactivity/deriveds.js
var reactivity_loss_tracker = null;
function set_reactivity_loss_tracker(v) {
  reactivity_loss_tracker = v;
}
var recent_async_deriveds = /* @__PURE__ */ new Set();
// @__NO_SIDE_EFFECTS__
function derived(fn) {
  var flags2 = DERIVED | DIRTY;
  if (active_effect !== null) {
    active_effect.f |= EFFECT_PRESERVED;
  }
  const signal = {
    ctx: component_context,
    deps: null,
    effects: null,
    equals,
    f: flags2,
    fn,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      UNINITIALIZED
    ),
    wv: 0,
    parent: active_effect,
    ac: null
  };
  if (dev_fallback_default && tracing_mode_flag) {
    signal.created = get_error("created at");
  }
  return signal;
}
var OBSOLETE = Symbol("obsolete");
// @__NO_SIDE_EFFECTS__
function async_derived(fn, label, location) {
  let parent = (
    /** @type {Effect | null} */
    active_effect
  );
  if (parent === null) {
    async_derived_orphan();
  }
  var promise = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  );
  var signal = source(
    /** @type {V} */
    UNINITIALIZED
  );
  if (dev_fallback_default) signal.label = label ?? fn.toString();
  var should_suspend = !active_reaction;
  var deferreds = /* @__PURE__ */ new Set();
  async_effect(() => {
    var effect2 = (
      /** @type {Effect} */
      active_effect
    );
    if (dev_fallback_default) {
      reactivity_loss_tracker = { effect: effect2, effect_deps: /* @__PURE__ */ new Set(), warned: false };
    }
    var d = deferred();
    promise = d.promise;
    try {
      Promise.resolve(fn()).then(d.resolve, (e) => {
        if (e !== STALE_REACTION) d.reject(e);
      }).finally(unset_context);
    } catch (error) {
      d.reject(error);
      unset_context();
    }
    if (dev_fallback_default) {
      if (reactivity_loss_tracker) {
        if (effect2.deps !== null) {
          for (let i = 0; i < skipped_deps; i += 1) {
            reactivity_loss_tracker.effect_deps.add(effect2.deps[i]);
          }
        }
        if (new_deps !== null) {
          for (let i = 0; i < new_deps.length; i += 1) {
            reactivity_loss_tracker.effect_deps.add(new_deps[i]);
          }
        }
      }
      reactivity_loss_tracker = null;
    }
    var batch = (
      /** @type {Batch} */
      current_batch
    );
    if (should_suspend) {
      if ((effect2.f & REACTION_RAN) !== 0) {
        var decrement_pending = increment_pending();
      }
      if (
        // boundary can be null if the async derived is inside an $effect.root not connected to the component render tree
        parent.b?.is_rendered()
      ) {
        batch.async_deriveds.get(effect2)?.reject(OBSOLETE);
      } else {
        for (const d2 of deferreds.values()) {
          d2.reject(OBSOLETE);
        }
      }
      deferreds.add(d);
      batch.async_deriveds.set(effect2, d);
    }
    const handler = (value, error = void 0) => {
      if (dev_fallback_default) {
        reactivity_loss_tracker = null;
      }
      decrement_pending?.();
      deferreds.delete(d);
      if (error === OBSOLETE) return;
      batch.activate();
      if (error) {
        signal.f |= ERROR_VALUE;
        internal_set(signal, error);
      } else {
        if ((signal.f & ERROR_VALUE) !== 0) {
          signal.f ^= ERROR_VALUE;
        }
        if (dev_fallback_default && location !== void 0 && !signal.equals(value)) {
          recent_async_deriveds.add(signal);
          setTimeout(() => {
            if (recent_async_deriveds.has(signal) && (effect2.f & DESTROYED) === 0) {
              await_waterfall(
                /** @type {string} */
                signal.label,
                location
              );
              recent_async_deriveds.delete(signal);
            }
          });
        }
        internal_set(signal, value);
      }
      batch.deactivate();
    };
    d.promise.then(handler, (e) => handler(null, e || "unknown"));
  });
  teardown(() => {
    for (const d of deferreds) {
      d.reject(OBSOLETE);
    }
  });
  if (dev_fallback_default) {
    signal.f |= ASYNC;
  }
  return new Promise((fulfil) => {
    function next2(p) {
      function go() {
        if (p === promise) {
          fulfil(signal);
        } else {
          next2(promise);
        }
      }
      p.then(go, go);
    }
    next2(promise);
  });
}
// @__NO_SIDE_EFFECTS__
function user_derived(fn) {
  const d = /* @__PURE__ */ derived(fn);
  if (!async_mode_flag) push_reaction_value(d);
  return d;
}
// @__NO_SIDE_EFFECTS__
function derived_safe_equal(fn) {
  const signal = /* @__PURE__ */ derived(fn);
  signal.equals = safe_equals;
  return signal;
}
function destroy_derived_effects(derived3) {
  var effects = derived3.effects;
  if (effects !== null) {
    derived3.effects = null;
    for (var i = 0; i < effects.length; i += 1) {
      destroy_effect(
        /** @type {Effect} */
        effects[i]
      );
    }
  }
}
var stack = [];
function execute_derived(derived3) {
  var value;
  var prev_active_effect = active_effect;
  var parent = derived3.parent;
  if (!is_destroying_effect && parent !== null && derived3.v !== UNINITIALIZED && // if it was never evaluated before, it's guaranteed to fail downstream, so we try to execute instead
  (parent.f & (DESTROYED | INERT)) !== 0) {
    derived_inert();
    return derived3.v;
  }
  set_active_effect(parent);
  if (dev_fallback_default) {
    let prev_eager_effects = eager_effects;
    set_eager_effects(/* @__PURE__ */ new Set());
    try {
      if (includes.call(stack, derived3)) {
        derived_references_self();
      }
      stack.push(derived3);
      derived3.f &= ~WAS_MARKED;
      destroy_derived_effects(derived3);
      value = update_reaction(derived3);
    } finally {
      set_active_effect(prev_active_effect);
      set_eager_effects(prev_eager_effects);
      stack.pop();
    }
  } else {
    try {
      derived3.f &= ~WAS_MARKED;
      destroy_derived_effects(derived3);
      value = update_reaction(derived3);
    } finally {
      set_active_effect(prev_active_effect);
    }
  }
  return value;
}
function update_derived(derived3) {
  var value = execute_derived(derived3);
  if (!derived3.equals(value)) {
    derived3.wv = increment_write_version();
    if (!current_batch?.is_fork || derived3.deps === null) {
      if (current_batch !== null) {
        current_batch.capture(derived3, value, true);
        previous_batch?.capture(derived3, value, true);
      } else {
        derived3.v = value;
      }
      if (derived3.deps === null) {
        set_signal_status(derived3, CLEAN);
        return;
      }
    }
  }
  if (is_destroying_effect) {
    return;
  }
  if (batch_values !== null) {
    if (effect_tracking() || current_batch?.is_fork) {
      batch_values.set(derived3, value);
    }
  } else {
    update_derived_status(derived3);
  }
}
function freeze_derived_effects(derived3) {
  if (derived3.effects === null) return;
  for (const e of derived3.effects) {
    if (e.teardown || e.ac) {
      e.teardown?.();
      if (e.ac !== null) {
        without_reactive_context(() => {
          e.ac.abort(STALE_REACTION);
          e.ac = null;
        });
      }
      if (e.fn !== null) e.teardown = noop;
      remove_reactions(e, 0);
      destroy_effect_children(e);
    }
  }
}
function unfreeze_derived_effects(derived3) {
  if (derived3.effects === null) return;
  for (const e of derived3.effects) {
    if (e.teardown && e.fn !== null) {
      update_effect(e);
    }
  }
}

// node_modules/svelte/src/internal/client/reactivity/batch.js
var first_batch = null;
var last_batch = null;
var current_batch = null;
var previous_batch = null;
var batch_values = null;
var last_scheduled_effect = null;
var is_flushing_sync = false;
var is_processing = false;
var collected_effects = null;
var legacy_updates = null;
var flush_count = 0;
var source_stacks = /* @__PURE__ */ new Set();
var uid = 1;
var Batch = class _Batch {
  id = uid++;
  /** True as soon as `#process` was called */
  #started = false;
  linked = true;
  /** @type {Batch | null} */
  #prev = null;
  /** @type {Batch | null} */
  #next = null;
  /** @type {Map<Effect, ReturnType<typeof deferred<any>>>} */
  async_deriveds = /* @__PURE__ */ new Map();
  /**
   * The current values of any signals that are updated in this batch.
   * Tuple format: [value, is_derived] (note: is_derived is false for deriveds, too, if they were overridden via assignment)
   * They keys of this map are identical to `this.#previous`
   * @type {Map<Value, [any, boolean]>}
   */
  current = /* @__PURE__ */ new Map();
  /**
   * The values of any signals (sources and deriveds) that are updated in this batch _before_ those updates took place.
   * They keys of this map are identical to `this.#current`
   * @type {Map<Value, any>}
   */
  previous = /* @__PURE__ */ new Map();
  /**
   * When the batch is committed (and the DOM is updated), we need to remove old branches
   * and append new ones by calling the functions added inside (if/each/key/etc) blocks
   * @type {Set<(batch: Batch) => void>}
   */
  #commit_callbacks = /* @__PURE__ */ new Set();
  /**
   * If a fork is discarded, we need to destroy any effects that are no longer needed
   * @type {Set<(batch: Batch) => void>}
   */
  #discard_callbacks = /* @__PURE__ */ new Set();
  /**
   * The number of async effects that are currently in flight
   */
  #pending = 0;
  /**
   * Async effects that are currently in flight, _not_ inside a pending boundary
   * @type {Map<Effect, number>}
   */
  #blocking_pending = /* @__PURE__ */ new Map();
  /**
   * A deferred that resolves when the batch is committed, used with `settled()`
   * TODO replace with Promise.withResolvers once supported widely enough
   * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
   */
  #deferred = null;
  /**
   * The root effects that need to be flushed
   * @type {Effect[]}
   */
  #roots = [];
  /**
   * Effects created while this batch was active.
   * @type {Effect[]}
   */
  #new_effects = [];
  /**
   * Deferred effects (which run after async work has completed) that are DIRTY
   * @type {Set<Effect>}
   */
  #dirty_effects = /* @__PURE__ */ new Set();
  /**
   * Deferred effects that are MAYBE_DIRTY
   * @type {Set<Effect>}
   */
  #maybe_dirty_effects = /* @__PURE__ */ new Set();
  /**
   * A map of branches that still exist, but will be destroyed when this batch
   * is committed — we skip over these during `process`.
   * The value contains child effects that were dirty/maybe_dirty before being reset,
   * so they can be rescheduled if the branch survives.
   * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
   */
  #skipped_branches = /* @__PURE__ */ new Map();
  /**
   * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
   * @type {Set<Effect>}
   */
  #unskipped_branches = /* @__PURE__ */ new Set();
  is_fork = false;
  #decrement_queued = false;
  constructor() {
    if (last_batch === null) {
      first_batch = last_batch = this;
    } else {
      last_batch.#next = this;
      this.#prev = last_batch;
    }
    last_batch = this;
  }
  #is_deferred() {
    if (this.is_fork) return true;
    for (const effect2 of this.#blocking_pending.keys()) {
      var e = effect2;
      var skipped = false;
      while (e.parent !== null) {
        if (this.#skipped_branches.has(e)) {
          skipped = true;
          break;
        }
        e = e.parent;
      }
      if (!skipped) {
        return true;
      }
    }
    return false;
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(effect2) {
    if (!this.#skipped_branches.has(effect2)) {
      this.#skipped_branches.set(effect2, { d: [], m: [] });
    }
    this.#unskipped_branches.delete(effect2);
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   * @param {(e: Effect) => void} callback
   */
  unskip_effect(effect2, callback = (e) => this.schedule(e)) {
    var tracked = this.#skipped_branches.get(effect2);
    if (tracked) {
      this.#skipped_branches.delete(effect2);
      for (var e of tracked.d) {
        set_signal_status(e, DIRTY);
        callback(e);
      }
      for (e of tracked.m) {
        set_signal_status(e, MAYBE_DIRTY);
        callback(e);
      }
    }
    this.#unskipped_branches.add(effect2);
  }
  #process() {
    this.#started = true;
    if (flush_count++ > 1e3) {
      this.#unlink();
      infinite_loop_guard();
    }
    if (dev_fallback_default) {
      for (const value of this.current.keys()) {
        source_stacks.add(value);
      }
    }
    for (const e of this.#dirty_effects) {
      this.#maybe_dirty_effects.delete(e);
      set_signal_status(e, DIRTY);
      this.schedule(e);
    }
    for (const e of this.#maybe_dirty_effects) {
      set_signal_status(e, MAYBE_DIRTY);
      this.schedule(e);
    }
    const roots = this.#roots;
    this.#roots = [];
    this.apply();
    var effects = collected_effects = [];
    var render_effects = [];
    var updates = legacy_updates = [];
    for (const root16 of roots) {
      try {
        this.#traverse(root16, effects, render_effects);
      } catch (e) {
        reset_all(root16);
        if (!this.#is_deferred()) this.discard();
        throw e;
      }
    }
    current_batch = null;
    if (updates.length > 0) {
      var batch = _Batch.ensure();
      for (const e of updates) {
        batch.schedule(e);
      }
    }
    collected_effects = null;
    legacy_updates = null;
    if (this.#is_deferred()) {
      this.#defer_effects(render_effects);
      this.#defer_effects(effects);
      for (const [e, t] of this.#skipped_branches) {
        reset_branch(e, t);
      }
      if (updates.length > 0) {
        /** @type {unknown} */
        current_batch.#process();
      }
      return;
    }
    const earlier_batch = this.#find_earlier_batch();
    if (earlier_batch) {
      this.#defer_effects(render_effects);
      this.#defer_effects(effects);
      earlier_batch.#merge(this);
      return;
    }
    this.#dirty_effects.clear();
    this.#maybe_dirty_effects.clear();
    for (const fn of this.#commit_callbacks) fn(this);
    this.#commit_callbacks.clear();
    previous_batch = this;
    flush_queued_effects(render_effects);
    flush_queued_effects(effects);
    previous_batch = null;
    this.#deferred?.resolve();
    var next_batch = (
      /** @type {Batch | null} */
      /** @type {unknown} */
      current_batch
    );
    if (this.#pending === 0 && (this.#roots.length === 0 || next_batch !== null)) {
      this.#unlink();
      if (async_mode_flag) {
        this.#commit();
        current_batch = next_batch;
      }
    }
    if (this.#roots.length > 0) {
      if (next_batch !== null) {
        const batch2 = next_batch;
        batch2.#roots.push(...this.#roots.filter((r) => !batch2.#roots.includes(r)));
      } else {
        next_batch = this;
      }
    }
    if (next_batch !== null) {
      next_batch.#process();
    }
  }
  /**
   * Traverse the effect tree, executing effects or stashing
   * them for later execution as appropriate
   * @param {Effect} root
   * @param {Effect[]} effects
   * @param {Effect[]} render_effects
   */
  #traverse(root16, effects, render_effects) {
    root16.f ^= CLEAN;
    var effect2 = root16.first;
    while (effect2 !== null) {
      var flags2 = effect2.f;
      var is_branch = (flags2 & (BRANCH_EFFECT | ROOT_EFFECT)) !== 0;
      var is_skippable_branch = is_branch && (flags2 & CLEAN) !== 0;
      var skip = is_skippable_branch || (flags2 & INERT) !== 0 || this.#skipped_branches.has(effect2);
      if (!skip && effect2.fn !== null) {
        if (is_branch) {
          effect2.f ^= CLEAN;
        } else if ((flags2 & EFFECT) !== 0) {
          effects.push(effect2);
        } else if (async_mode_flag && (flags2 & (RENDER_EFFECT | MANAGED_EFFECT)) !== 0) {
          render_effects.push(effect2);
        } else if (is_dirty(effect2)) {
          if ((flags2 & BLOCK_EFFECT) !== 0) this.#maybe_dirty_effects.add(effect2);
          update_effect(effect2);
        }
        var child2 = effect2.first;
        if (child2 !== null) {
          effect2 = child2;
          continue;
        }
      }
      while (effect2 !== null) {
        var next2 = effect2.next;
        if (next2 !== null) {
          effect2 = next2;
          break;
        }
        effect2 = effect2.parent;
      }
    }
  }
  #find_earlier_batch() {
    var batch = this.#prev;
    while (batch !== null) {
      if (!batch.is_fork) {
        for (const [value, [, is_derived]] of this.current) {
          if (batch.current.has(value) && !is_derived) {
            return batch;
          }
        }
      }
      batch = batch.#prev;
    }
    return null;
  }
  /**
   * @param {Batch} batch
   */
  #merge(batch) {
    for (const [source2, value] of batch.current) {
      if (!this.previous.has(source2) && batch.previous.has(source2)) {
        this.previous.set(source2, batch.previous.get(source2));
      }
      this.current.set(source2, value);
    }
    for (const [effect2, deferred2] of batch.async_deriveds) {
      const d = this.async_deriveds.get(effect2);
      if (d) deferred2.promise.then(d.resolve).catch(d.reject);
    }
    batch.async_deriveds.clear();
    this.transfer_effects(batch.#dirty_effects, batch.#maybe_dirty_effects);
    const mark = (value) => {
      var reactions = value.reactions;
      if (reactions === null) return;
      if ((value.f & DERIVED) !== 0 && (value.f & (DIRTY | MAYBE_DIRTY)) === 0) {
        return;
      }
      for (const reaction of reactions) {
        var flags2 = reaction.f;
        if ((flags2 & DERIVED) !== 0) {
          mark(
            /** @type {Derived} */
            reaction
          );
        } else {
          var effect2 = (
            /** @type {Effect} */
            reaction
          );
          if (flags2 & (ASYNC | BLOCK_EFFECT) && !this.async_deriveds.has(effect2)) {
            this.#maybe_dirty_effects.delete(effect2);
            set_signal_status(effect2, DIRTY);
            this.schedule(effect2);
          }
        }
      }
    };
    for (const source2 of this.current.keys()) {
      mark(source2);
    }
    this.oncommit(() => batch.discard());
    batch.#unlink();
    current_batch = this;
    this.#process();
  }
  /**
   * @param {Effect[]} effects
   */
  #defer_effects(effects) {
    for (var i = 0; i < effects.length; i += 1) {
      defer_effect(effects[i], this.#dirty_effects, this.#maybe_dirty_effects);
    }
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Value} source
   * @param {any} value
   * @param {boolean} [is_derived]
   */
  capture(source2, value, is_derived = false) {
    if (source2.v !== UNINITIALIZED && !this.previous.has(source2)) {
      this.previous.set(source2, source2.v);
    }
    if ((source2.f & ERROR_VALUE) === 0) {
      this.current.set(source2, [value, is_derived]);
      batch_values?.set(source2, value);
    }
    if (!this.is_fork) {
      source2.v = value;
    }
  }
  activate() {
    current_batch = this;
  }
  deactivate() {
    current_batch = null;
    batch_values = null;
  }
  flush() {
    try {
      if (dev_fallback_default) {
        source_stacks.clear();
      }
      is_processing = true;
      current_batch = this;
      this.#process();
    } finally {
      flush_count = 0;
      last_scheduled_effect = null;
      collected_effects = null;
      legacy_updates = null;
      is_processing = false;
      current_batch = null;
      batch_values = null;
      old_values.clear();
      if (dev_fallback_default) {
        for (const source2 of source_stacks) {
          source2.updated = null;
        }
      }
    }
  }
  discard() {
    for (const fn of this.#discard_callbacks) fn(this);
    this.#discard_callbacks.clear();
    for (const deferred2 of this.async_deriveds.values()) {
      deferred2.reject(OBSOLETE);
    }
    this.#unlink();
    this.#deferred?.resolve();
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(effect2) {
    this.#new_effects.push(effect2);
  }
  #commit() {
    for (let batch = first_batch; batch !== null; batch = batch.#next) {
      var is_earlier = batch.id < this.id;
      var sources = [];
      for (const [source3, [value, is_derived]] of this.current) {
        if (batch.current.has(source3)) {
          var batch_value = (
            /** @type {[any, boolean]} */
            batch.current.get(source3)[0]
          );
          if (is_earlier && value !== batch_value) {
            batch.current.set(source3, [value, is_derived]);
          } else {
            continue;
          }
        }
        sources.push(source3);
      }
      if (is_earlier) {
        for (const [effect2, deferred2] of this.async_deriveds) {
          const d = batch.async_deriveds.get(effect2);
          if (d) deferred2.promise.then(d.resolve).catch(d.reject);
        }
      }
      var current = [...batch.current.keys()].filter(
        (source3) => !/** @type {[any, boolean]} */
        batch.current.get(source3)[1]
      );
      if (!batch.#started || current.length === 0) continue;
      var others = current.filter((source3) => !this.current.has(source3));
      if (others.length === 0) {
        if (is_earlier) {
          batch.discard();
        }
      } else if (sources.length > 0) {
        if (dev_fallback_default && !batch.#decrement_queued) {
          invariant(batch.#roots.length === 0, "Batch has scheduled roots");
        }
        if (is_earlier) {
          for (const unskipped of this.#unskipped_branches) {
            batch.unskip_effect(unskipped, (e) => {
              if ((e.f & (BLOCK_EFFECT | ASYNC)) !== 0) {
                batch.schedule(e);
              } else {
                batch.#defer_effects([e]);
              }
            });
          }
        }
        batch.activate();
        var marked = /* @__PURE__ */ new Set();
        var checked = /* @__PURE__ */ new Map();
        for (var source2 of sources) {
          mark_effects(source2, others, marked, checked);
        }
        checked = /* @__PURE__ */ new Map();
        var current_unequal = [...batch.current].filter(([c, v1]) => {
          const v2 = this.current.get(c);
          if (!v2) return true;
          return v2[0] !== v1[0] || v2[1] !== v1[1];
        }).map(([c]) => c);
        if (current_unequal.length > 0) {
          for (const effect2 of this.#new_effects) {
            if ((effect2.f & (DESTROYED | INERT | EAGER_EFFECT)) === 0 && depends_on(effect2, current_unequal, checked)) {
              if ((effect2.f & (ASYNC | BLOCK_EFFECT)) !== 0) {
                set_signal_status(effect2, DIRTY);
                batch.schedule(effect2);
              } else {
                batch.#dirty_effects.add(effect2);
              }
            }
          }
        }
        if (batch.#roots.length > 0 && !batch.#decrement_queued) {
          batch.apply();
          for (var root16 of batch.#roots) {
            batch.#traverse(root16, [], []);
          }
          batch.#roots = [];
        }
        batch.deactivate();
      }
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(blocking, effect2) {
    this.#pending += 1;
    if (blocking) {
      let blocking_pending_count = this.#blocking_pending.get(effect2) ?? 0;
      this.#blocking_pending.set(effect2, blocking_pending_count + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  decrement(blocking, effect2) {
    this.#pending -= 1;
    if (blocking) {
      let blocking_pending_count = this.#blocking_pending.get(effect2) ?? 0;
      if (blocking_pending_count === 1) {
        this.#blocking_pending.delete(effect2);
      } else {
        this.#blocking_pending.set(effect2, blocking_pending_count - 1);
      }
    }
    if (this.#decrement_queued) return;
    this.#decrement_queued = true;
    queue_micro_task(() => {
      this.#decrement_queued = false;
      if (this.linked) {
        this.flush();
      }
    });
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(dirty_effects, maybe_dirty_effects) {
    for (const e of dirty_effects) {
      this.#dirty_effects.add(e);
    }
    for (const e of maybe_dirty_effects) {
      this.#maybe_dirty_effects.add(e);
    }
    dirty_effects.clear();
    maybe_dirty_effects.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(fn) {
    this.#commit_callbacks.add(fn);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(fn) {
    this.#discard_callbacks.add(fn);
  }
  settled() {
    return (this.#deferred ??= deferred()).promise;
  }
  static ensure() {
    if (current_batch === null) {
      const batch = current_batch = new _Batch();
      if (!is_processing && !is_flushing_sync) {
        queue_micro_task(() => {
          if (!batch.#started) {
            batch.flush();
          }
        });
      }
    }
    return current_batch;
  }
  apply() {
    if (!async_mode_flag || !this.is_fork && this.#prev === null && this.#next === null) {
      batch_values = null;
      return;
    }
    batch_values = /* @__PURE__ */ new Map();
    for (const [source2, [value]] of this.current) {
      batch_values.set(source2, value);
    }
    for (let batch = first_batch; batch !== null; batch = batch.#next) {
      if (batch === this || batch.is_fork) continue;
      var intersects = false;
      if (batch.id < this.id) {
        for (const [source2, [, is_derived]] of batch.current) {
          if (is_derived) continue;
          if (this.current.has(source2)) {
            intersects = true;
            break;
          }
        }
      }
      if (!intersects) {
        for (const [source2, previous] of batch.previous) {
          if (!batch_values.has(source2)) {
            batch_values.set(source2, previous);
          }
        }
      }
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(effect2) {
    last_scheduled_effect = effect2;
    if (effect2.b?.is_pending && (effect2.f & (EFFECT | RENDER_EFFECT | MANAGED_EFFECT)) !== 0 && (effect2.f & REACTION_RAN) === 0) {
      effect2.b.defer_effect(effect2);
      return;
    }
    var e = effect2;
    while (e.parent !== null) {
      e = e.parent;
      var flags2 = e.f;
      if (collected_effects !== null && e === active_effect) {
        if (async_mode_flag) return;
        if ((active_reaction === null || (active_reaction.f & DERIVED) === 0) && !legacy_is_updating_store) {
          return;
        }
      }
      if ((flags2 & (ROOT_EFFECT | BRANCH_EFFECT)) !== 0) {
        if ((flags2 & CLEAN) === 0) {
          return;
        }
        e.f ^= CLEAN;
      }
    }
    this.#roots.push(e);
  }
  #unlink() {
    if (!this.linked) return;
    var prev = this.#prev;
    var next2 = this.#next;
    if (prev === null) {
      first_batch = next2;
    } else {
      prev.#next = next2;
    }
    if (next2 === null) {
      last_batch = prev;
    } else {
      next2.#prev = prev;
    }
    this.linked = false;
  }
};
function flushSync(fn) {
  var was_flushing_sync = is_flushing_sync;
  is_flushing_sync = true;
  try {
    var result;
    if (fn) {
      if (current_batch !== null && !current_batch.is_fork) {
        current_batch.flush();
      }
      result = fn();
    }
    while (true) {
      flush_tasks();
      if (current_batch === null) {
        return (
          /** @type {T} */
          result
        );
      }
      current_batch.flush();
    }
  } finally {
    is_flushing_sync = was_flushing_sync;
  }
}
function infinite_loop_guard() {
  if (dev_fallback_default) {
    var updates = /* @__PURE__ */ new Map();
    for (
      const source2 of
      /** @type {Batch} */
      current_batch.current.keys()
    ) {
      for (const [stack2, update2] of source2.updated ?? []) {
        var entry = updates.get(stack2);
        if (!entry) {
          entry = { error: update2.error, count: 0 };
          updates.set(stack2, entry);
        }
        entry.count += update2.count;
      }
    }
    for (const update2 of updates.values()) {
      if (update2.error) {
        console.error(update2.error);
      }
    }
  }
  try {
    effect_update_depth_exceeded();
  } catch (error) {
    if (dev_fallback_default) {
      define_property(error, "stack", { value: "" });
    }
    invoke_error_boundary(error, last_scheduled_effect);
  }
}
var eager_block_effects = null;
function flush_queued_effects(effects) {
  var length = effects.length;
  if (length === 0) return;
  var i = 0;
  while (i < length) {
    var effect2 = effects[i++];
    if ((effect2.f & (DESTROYED | INERT)) === 0 && is_dirty(effect2)) {
      eager_block_effects = /* @__PURE__ */ new Set();
      update_effect(effect2);
      if (effect2.deps === null && effect2.first === null && effect2.nodes === null && effect2.teardown === null && effect2.ac === null) {
        unlink_effect(effect2);
      }
      if (eager_block_effects?.size > 0) {
        old_values.clear();
        for (const e of eager_block_effects) {
          if ((e.f & (DESTROYED | INERT)) !== 0) continue;
          const ordered_effects = [e];
          let ancestor = e.parent;
          while (ancestor !== null) {
            if (eager_block_effects.has(ancestor)) {
              eager_block_effects.delete(ancestor);
              ordered_effects.push(ancestor);
            }
            ancestor = ancestor.parent;
          }
          for (let j = ordered_effects.length - 1; j >= 0; j--) {
            const e2 = ordered_effects[j];
            if ((e2.f & (DESTROYED | INERT)) !== 0) continue;
            update_effect(e2);
          }
        }
        eager_block_effects.clear();
      }
    }
  }
  eager_block_effects = null;
}
function mark_effects(value, sources, marked, checked) {
  if (marked.has(value)) return;
  marked.add(value);
  if (value.reactions !== null) {
    for (const reaction of value.reactions) {
      const flags2 = reaction.f;
      if ((flags2 & DERIVED) !== 0) {
        mark_effects(
          /** @type {Derived} */
          reaction,
          sources,
          marked,
          checked
        );
      } else if ((flags2 & (ASYNC | BLOCK_EFFECT)) !== 0 && (flags2 & DIRTY) === 0 && depends_on(reaction, sources, checked)) {
        set_signal_status(reaction, DIRTY);
        schedule_effect(
          /** @type {Effect} */
          reaction
        );
      }
    }
  }
}
function depends_on(reaction, sources, checked) {
  const depends = checked.get(reaction);
  if (depends !== void 0) return depends;
  if (reaction.deps !== null) {
    for (const dep of reaction.deps) {
      if (includes.call(sources, dep)) {
        return true;
      }
      if ((dep.f & DERIVED) !== 0 && depends_on(
        /** @type {Derived} */
        dep,
        sources,
        checked
      )) {
        checked.set(
          /** @type {Derived} */
          dep,
          true
        );
        return true;
      }
    }
  }
  checked.set(reaction, false);
  return false;
}
function schedule_effect(effect2) {
  current_batch.schedule(effect2);
}
function reset_branch(effect2, tracked) {
  if ((effect2.f & BRANCH_EFFECT) !== 0 && (effect2.f & CLEAN) !== 0) {
    return;
  }
  if ((effect2.f & DIRTY) !== 0) {
    tracked.d.push(effect2);
  } else if ((effect2.f & MAYBE_DIRTY) !== 0) {
    tracked.m.push(effect2);
  }
  set_signal_status(effect2, CLEAN);
  var e = effect2.first;
  while (e !== null) {
    reset_branch(e, tracked);
    e = e.next;
  }
}
function reset_all(effect2) {
  set_signal_status(effect2, CLEAN);
  var e = effect2.first;
  while (e !== null) {
    reset_all(e);
    e = e.next;
  }
}

// node_modules/svelte/src/internal/client/reactivity/sources.js
var eager_effects = /* @__PURE__ */ new Set();
var old_values = /* @__PURE__ */ new Map();
function set_eager_effects(v) {
  eager_effects = v;
}
var eager_effects_deferred = false;
function set_eager_effects_deferred() {
  eager_effects_deferred = true;
}
function source(v, stack2) {
  var signal = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v,
    reactions: null,
    equals,
    rv: 0,
    wv: 0
  };
  if (dev_fallback_default && tracing_mode_flag) {
    signal.created = stack2 ?? get_error("created at");
    signal.updated = null;
    signal.set_during_effect = false;
    signal.trace = null;
  }
  return signal;
}
// @__NO_SIDE_EFFECTS__
function state(v, stack2) {
  const s = source(v, stack2);
  push_reaction_value(s);
  return s;
}
// @__NO_SIDE_EFFECTS__
function mutable_source(initial_value, immutable = false, trackable = true) {
  const s = source(initial_value);
  if (!immutable) {
    s.equals = safe_equals;
  }
  if (legacy_mode_flag && trackable && component_context !== null && component_context.l !== null) {
    (component_context.l.s ??= []).push(s);
  }
  return s;
}
function set(source2, value, should_proxy = false) {
  if (active_reaction !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!untracking || (active_reaction.f & EAGER_EFFECT) !== 0) && is_runes() && (active_reaction.f & (DERIVED | BLOCK_EFFECT | ASYNC | EAGER_EFFECT)) !== 0 && (current_sources === null || !current_sources.has(source2))) {
    state_unsafe_mutation();
  }
  let new_value = should_proxy ? proxy(value) : value;
  if (dev_fallback_default) {
    tag_proxy(
      new_value,
      /** @type {string} */
      source2.label
    );
  }
  return internal_set(source2, new_value, legacy_updates);
}
function internal_set(source2, value, updated_during_traversal = null) {
  if (!source2.equals(value)) {
    old_values.set(source2, is_destroying_effect ? value : source2.v);
    var batch = Batch.ensure();
    batch.capture(source2, value);
    if (dev_fallback_default) {
      if (tracing_mode_flag || active_effect !== null) {
        source2.updated ??= /* @__PURE__ */ new Map();
        const count = (source2.updated.get("")?.count ?? 0) + 1;
        source2.updated.set("", { error: (
          /** @type {any} */
          null
        ), count });
        if (tracing_mode_flag || count > 5) {
          const error = get_error("updated at");
          if (error !== null) {
            let entry = source2.updated.get(error.stack);
            if (!entry) {
              entry = { error, count: 0 };
              source2.updated.set(error.stack, entry);
            }
            entry.count++;
          }
        }
      }
      if (active_effect !== null) {
        source2.set_during_effect = true;
      }
    }
    if ((source2.f & DERIVED) !== 0) {
      const derived3 = (
        /** @type {Derived} */
        source2
      );
      if ((source2.f & DIRTY) !== 0) {
        execute_derived(derived3);
      }
      if (batch_values === null) {
        update_derived_status(derived3);
      }
    }
    source2.wv = increment_write_version();
    mark_reactions(source2, DIRTY, updated_during_traversal);
    if (is_runes() && active_effect !== null && (active_effect.f & CLEAN) !== 0 && (active_effect.f & (BRANCH_EFFECT | ROOT_EFFECT)) === 0) {
      if (untracked_writes === null) {
        set_untracked_writes([source2]);
      } else {
        untracked_writes.push(source2);
      }
    }
    if (!batch.is_fork && eager_effects.size > 0 && !eager_effects_deferred) {
      flush_eager_effects();
    }
  }
  return value;
}
function flush_eager_effects() {
  eager_effects_deferred = false;
  for (const effect2 of eager_effects) {
    if ((effect2.f & CLEAN) !== 0) {
      set_signal_status(effect2, MAYBE_DIRTY);
    }
    let dirty;
    try {
      dirty = is_dirty(effect2);
    } catch {
      dirty = true;
    }
    if (dirty) {
      update_effect(effect2);
    }
  }
  eager_effects.clear();
}
function increment(source2) {
  set(source2, source2.v + 1);
}
function mark_reactions(signal, status, updated_during_traversal) {
  var reactions = signal.reactions;
  if (reactions === null) return;
  var runes = is_runes();
  var length = reactions.length;
  for (var i = 0; i < length; i++) {
    var reaction = reactions[i];
    var flags2 = reaction.f;
    if (!runes && reaction === active_effect) continue;
    var not_dirty = (flags2 & DIRTY) === 0;
    if (not_dirty) {
      set_signal_status(reaction, status);
    }
    if ((flags2 & EAGER_EFFECT) !== 0) {
      eager_effects.add(
        /** @type {Effect} */
        reaction
      );
    } else if ((flags2 & DERIVED) !== 0) {
      var derived3 = (
        /** @type {Derived} */
        reaction
      );
      batch_values?.delete(derived3);
      if ((flags2 & WAS_MARKED) === 0) {
        if (flags2 & CONNECTED && (active_effect === null || (active_effect.f & REACTION_IS_UPDATING) === 0)) {
          reaction.f |= WAS_MARKED;
        }
        mark_reactions(derived3, MAYBE_DIRTY, updated_during_traversal);
      }
    } else if (not_dirty) {
      var effect2 = (
        /** @type {Effect} */
        reaction
      );
      if ((flags2 & BLOCK_EFFECT) !== 0 && eager_block_effects !== null) {
        eager_block_effects.add(effect2);
      }
      if (updated_during_traversal !== null) {
        updated_during_traversal.push(effect2);
      } else {
        schedule_effect(effect2);
      }
    }
  }
}

// node_modules/svelte/src/internal/client/proxy.js
var regex_is_valid_identifier = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/;
function proxy(value) {
  if (typeof value !== "object" || value === null || STATE_SYMBOL in value) {
    return value;
  }
  const prototype = get_prototype_of(value);
  if (prototype !== object_prototype && prototype !== array_prototype) {
    return value;
  }
  var sources = /* @__PURE__ */ new Map();
  var is_proxied_array = is_array(value);
  var version = state(0);
  var stack2 = dev_fallback_default && tracing_mode_flag ? get_error("created at") : null;
  var parent_version = update_version;
  var with_parent = (fn) => {
    if (update_version === parent_version) {
      return fn();
    }
    var reaction = active_reaction;
    var version2 = update_version;
    set_active_reaction(null);
    set_update_version(parent_version);
    var result = fn();
    set_active_reaction(reaction);
    set_update_version(version2);
    return result;
  };
  if (is_proxied_array) {
    sources.set("length", state(
      /** @type {any[]} */
      value.length,
      stack2
    ));
    if (dev_fallback_default) {
      value = /** @type {any} */
      inspectable_array(
        /** @type {any[]} */
        value
      );
    }
  }
  var path = "";
  let updating = false;
  function update_path(new_path) {
    if (updating) return;
    updating = true;
    path = new_path;
    tag(version, `${path} version`);
    for (const [prop2, source2] of sources) {
      tag(source2, get_label(path, prop2));
    }
    updating = false;
  }
  return new Proxy(
    /** @type {any} */
    value,
    {
      defineProperty(_, prop2, descriptor) {
        if (!("value" in descriptor) || descriptor.configurable === false || descriptor.enumerable === false || descriptor.writable === false) {
          state_descriptors_fixed();
        }
        var s = sources.get(prop2);
        if (s === void 0) {
          with_parent(() => {
            var s2 = state(descriptor.value, stack2);
            sources.set(prop2, s2);
            if (dev_fallback_default && typeof prop2 === "string") {
              tag(s2, get_label(path, prop2));
            }
            return s2;
          });
        } else {
          set(s, descriptor.value, true);
        }
        return true;
      },
      deleteProperty(target, prop2) {
        var s = sources.get(prop2);
        if (s === void 0) {
          if (prop2 in target) {
            const s2 = with_parent(() => state(UNINITIALIZED, stack2));
            sources.set(prop2, s2);
            increment(version);
            if (dev_fallback_default) {
              tag(s2, get_label(path, prop2));
            }
          }
        } else {
          set(s, UNINITIALIZED);
          increment(version);
        }
        return true;
      },
      get(target, prop2, receiver) {
        if (prop2 === STATE_SYMBOL) {
          return value;
        }
        if (dev_fallback_default && prop2 === PROXY_PATH_SYMBOL) {
          return update_path;
        }
        var s = sources.get(prop2);
        var exists = prop2 in target;
        if (s === void 0 && (!exists || get_descriptor(target, prop2)?.writable)) {
          s = with_parent(() => {
            var p = proxy(exists ? target[prop2] : UNINITIALIZED);
            var s2 = state(p, stack2);
            if (dev_fallback_default) {
              tag(s2, get_label(path, prop2));
            }
            return s2;
          });
          sources.set(prop2, s);
        }
        if (s !== void 0) {
          var v = get2(s);
          return v === UNINITIALIZED ? void 0 : v;
        }
        return Reflect.get(target, prop2, receiver);
      },
      getOwnPropertyDescriptor(target, prop2) {
        var descriptor = Reflect.getOwnPropertyDescriptor(target, prop2);
        if (descriptor && "value" in descriptor) {
          var s = sources.get(prop2);
          if (s) descriptor.value = get2(s);
        } else if (descriptor === void 0) {
          var source2 = sources.get(prop2);
          var value2 = source2?.v;
          if (source2 !== void 0 && value2 !== UNINITIALIZED) {
            return {
              enumerable: true,
              configurable: true,
              value: value2,
              writable: true
            };
          }
        }
        return descriptor;
      },
      has(target, prop2) {
        if (prop2 === STATE_SYMBOL) {
          return true;
        }
        var s = sources.get(prop2);
        var has = s !== void 0 && s.v !== UNINITIALIZED || Reflect.has(target, prop2);
        if (s !== void 0 || active_effect !== null && (!has || get_descriptor(target, prop2)?.writable)) {
          if (s === void 0) {
            s = with_parent(() => {
              var p = has ? proxy(target[prop2]) : UNINITIALIZED;
              var s2 = state(p, stack2);
              if (dev_fallback_default) {
                tag(s2, get_label(path, prop2));
              }
              return s2;
            });
            sources.set(prop2, s);
          }
          var value2 = get2(s);
          if (value2 === UNINITIALIZED) {
            return false;
          }
        }
        return has;
      },
      set(target, prop2, value2, receiver) {
        var s = sources.get(prop2);
        var has = prop2 in target;
        if (is_proxied_array && prop2 === "length") {
          for (var i = value2; i < /** @type {Source<number>} */
          s.v; i += 1) {
            var other_s = sources.get(i + "");
            if (other_s !== void 0) {
              set(other_s, UNINITIALIZED);
            } else if (i in target) {
              other_s = with_parent(() => state(UNINITIALIZED, stack2));
              sources.set(i + "", other_s);
              if (dev_fallback_default) {
                tag(other_s, get_label(path, i));
              }
            }
          }
        }
        if (s === void 0) {
          if (!has || get_descriptor(target, prop2)?.writable) {
            s = with_parent(() => state(void 0, stack2));
            if (dev_fallback_default) {
              tag(s, get_label(path, prop2));
            }
            set(s, proxy(value2));
            sources.set(prop2, s);
          }
        } else {
          has = s.v !== UNINITIALIZED;
          var p = with_parent(() => proxy(value2));
          set(s, p);
        }
        var descriptor = Reflect.getOwnPropertyDescriptor(target, prop2);
        if (descriptor?.set) {
          descriptor.set.call(receiver, value2);
        }
        if (!has) {
          if (is_proxied_array && typeof prop2 === "string") {
            var ls = (
              /** @type {Source<number>} */
              sources.get("length")
            );
            var n = Number(prop2);
            if (Number.isInteger(n) && n >= ls.v) {
              set(ls, n + 1);
            }
          }
          increment(version);
        }
        return true;
      },
      ownKeys(target) {
        get2(version);
        var own_keys = Reflect.ownKeys(target).filter((key3) => {
          var source3 = sources.get(key3);
          return source3 === void 0 || source3.v !== UNINITIALIZED;
        });
        for (var [key2, source2] of sources) {
          if (source2.v !== UNINITIALIZED && !(key2 in target)) {
            own_keys.push(key2);
          }
        }
        return own_keys;
      },
      setPrototypeOf() {
        state_prototype_fixed();
      }
    }
  );
}
function get_label(path, prop2) {
  if (typeof prop2 === "symbol") return `${path}[Symbol(${prop2.description ?? ""})]`;
  if (regex_is_valid_identifier.test(prop2)) return `${path}.${prop2}`;
  return /^\d+$/.test(prop2) ? `${path}[${prop2}]` : `${path}['${prop2}']`;
}
function get_proxied_value(value) {
  try {
    if (value !== null && typeof value === "object" && STATE_SYMBOL in value) {
      return value[STATE_SYMBOL];
    }
  } catch {
  }
  return value;
}
function is(a, b) {
  return Object.is(get_proxied_value(a), get_proxied_value(b));
}
var ARRAY_MUTATING_METHODS = /* @__PURE__ */ new Set([
  "copyWithin",
  "fill",
  "pop",
  "push",
  "reverse",
  "shift",
  "sort",
  "splice",
  "unshift"
]);
function inspectable_array(array) {
  return new Proxy(array, {
    get(target, prop2, receiver) {
      var value = Reflect.get(target, prop2, receiver);
      if (!ARRAY_MUTATING_METHODS.has(
        /** @type {string} */
        prop2
      )) {
        return value;
      }
      return function(...args) {
        set_eager_effects_deferred();
        var result = value.apply(this, args);
        flush_eager_effects();
        return result;
      };
    }
  });
}

// node_modules/svelte/src/internal/client/dev/equality.js
function init_array_prototype_warnings() {
  const array_prototype2 = Array.prototype;
  const cleanup = Array.__svelte_cleanup;
  if (cleanup) {
    cleanup();
  }
  const { indexOf, lastIndexOf, includes: includes2 } = array_prototype2;
  array_prototype2.indexOf = function(item, from_index) {
    const index2 = indexOf.call(this, item, from_index);
    if (index2 === -1) {
      for (let i = from_index ?? 0; i < this.length; i += 1) {
        if (get_proxied_value(this[i]) === item) {
          state_proxy_equality_mismatch("array.indexOf(...)");
          break;
        }
      }
    }
    return index2;
  };
  array_prototype2.lastIndexOf = function(item, from_index) {
    const index2 = lastIndexOf.call(this, item, from_index ?? this.length - 1);
    if (index2 === -1) {
      for (let i = 0; i <= (from_index ?? this.length - 1); i += 1) {
        if (get_proxied_value(this[i]) === item) {
          state_proxy_equality_mismatch("array.lastIndexOf(...)");
          break;
        }
      }
    }
    return index2;
  };
  array_prototype2.includes = function(item, from_index) {
    const has = includes2.call(this, item, from_index);
    if (!has) {
      for (let i = 0; i < this.length; i += 1) {
        if (get_proxied_value(this[i]) === item) {
          state_proxy_equality_mismatch("array.includes(...)");
          break;
        }
      }
    }
    return has;
  };
  Array.__svelte_cleanup = () => {
    array_prototype2.indexOf = indexOf;
    array_prototype2.lastIndexOf = lastIndexOf;
    array_prototype2.includes = includes2;
  };
}
function strict_equals(a, b, equal = true) {
  try {
    if (a === b !== (get_proxied_value(a) === get_proxied_value(b))) {
      state_proxy_equality_mismatch(equal ? "===" : "!==");
    }
  } catch {
  }
  return a === b === equal;
}

// node_modules/svelte/src/internal/client/dom/operations.js
var $window;
var $document;
var is_firefox;
var first_child_getter;
var next_sibling_getter;
function init_operations() {
  if ($window !== void 0) {
    return;
  }
  $window = window;
  $document = document;
  is_firefox = /Firefox/.test(navigator.userAgent);
  var element_prototype = Element.prototype;
  var node_prototype = Node.prototype;
  var text_prototype = Text.prototype;
  first_child_getter = get_descriptor(node_prototype, "firstChild").get;
  next_sibling_getter = get_descriptor(node_prototype, "nextSibling").get;
  if (is_extensible(element_prototype)) {
    element_prototype[CLASS_CACHE] = void 0;
    element_prototype[ATTRIBUTES_CACHE] = null;
    element_prototype[STYLE_CACHE] = void 0;
    element_prototype.__e = void 0;
  }
  if (is_extensible(text_prototype)) {
    text_prototype[TEXT_CACHE] = void 0;
  }
  if (dev_fallback_default) {
    element_prototype.__svelte_meta = null;
    init_array_prototype_warnings();
  }
}
function create_text(value = "") {
  return document.createTextNode(value);
}
// @__NO_SIDE_EFFECTS__
function get_first_child(node) {
  return (
    /** @type {TemplateNode | null} */
    first_child_getter.call(node)
  );
}
// @__NO_SIDE_EFFECTS__
function get_next_sibling(node) {
  return (
    /** @type {TemplateNode | null} */
    next_sibling_getter.call(node)
  );
}
function child(node, is_text) {
  if (!hydrating) {
    return /* @__PURE__ */ get_first_child(node);
  }
  var child2 = /* @__PURE__ */ get_first_child(hydrate_node);
  if (child2 === null) {
    child2 = hydrate_node.appendChild(create_text());
  } else if (is_text && child2.nodeType !== TEXT_NODE) {
    var text2 = create_text();
    child2?.before(text2);
    set_hydrate_node(text2);
    return text2;
  }
  if (is_text) {
    merge_text_nodes(
      /** @type {Text} */
      child2
    );
  }
  set_hydrate_node(child2);
  return child2;
}
function first_child(node, is_text = false) {
  if (!hydrating) {
    var first = /* @__PURE__ */ get_first_child(node);
    if (first instanceof Comment && first.data === "") return /* @__PURE__ */ get_next_sibling(first);
    return first;
  }
  if (is_text) {
    if (hydrate_node?.nodeType !== TEXT_NODE) {
      var text2 = create_text();
      hydrate_node?.before(text2);
      set_hydrate_node(text2);
      return text2;
    }
    merge_text_nodes(
      /** @type {Text} */
      hydrate_node
    );
  }
  return hydrate_node;
}
function sibling(node, count = 1, is_text = false) {
  let next_sibling = hydrating ? hydrate_node : node;
  var last_sibling;
  while (count--) {
    last_sibling = next_sibling;
    next_sibling = /** @type {TemplateNode} */
    /* @__PURE__ */ get_next_sibling(next_sibling);
  }
  if (!hydrating) {
    return next_sibling;
  }
  if (is_text) {
    if (next_sibling?.nodeType !== TEXT_NODE) {
      var text2 = create_text();
      if (next_sibling === null) {
        last_sibling?.after(text2);
      } else {
        next_sibling.before(text2);
      }
      set_hydrate_node(text2);
      return text2;
    }
    merge_text_nodes(
      /** @type {Text} */
      next_sibling
    );
  }
  set_hydrate_node(next_sibling);
  return next_sibling;
}
function clear_text_content(node) {
  node.textContent = "";
}
function should_defer_append() {
  if (!async_mode_flag) return false;
  if (eager_block_effects !== null) return false;
  var flags2 = (
    /** @type {Effect} */
    active_effect.f
  );
  return (flags2 & REACTION_RAN) !== 0;
}
function create_element(tag2, namespace, is2) {
  if (namespace == null || namespace === NAMESPACE_HTML) {
    return (
      /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
      is2 ? document.createElement(tag2, { is: is2 }) : document.createElement(tag2)
    );
  }
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    is2 ? document.createElementNS(namespace, tag2, { is: is2 }) : document.createElementNS(namespace, tag2)
  );
}
function merge_text_nodes(text2) {
  if (
    /** @type {string} */
    text2.nodeValue.length < 65536
  ) {
    return;
  }
  let next2 = text2.nextSibling;
  while (next2 !== null && next2.nodeType === TEXT_NODE) {
    next2.remove();
    text2.nodeValue += /** @type {string} */
    next2.nodeValue;
    next2 = text2.nextSibling;
  }
}

// node_modules/svelte/src/internal/client/reactivity/effects.js
function validate_effect(rune) {
  if (active_effect === null) {
    if (active_reaction === null) {
      effect_orphan(rune);
    }
    effect_in_unowned_derived();
  }
  if (is_destroying_effect) {
    effect_in_teardown(rune);
  }
}
function push_effect(effect2, parent_effect) {
  var parent_last = parent_effect.last;
  if (parent_last === null) {
    parent_effect.last = parent_effect.first = effect2;
  } else {
    parent_last.next = effect2;
    effect2.prev = parent_last;
    parent_effect.last = effect2;
  }
}
function create_effect(type, fn) {
  var parent = active_effect;
  if (dev_fallback_default) {
    while (parent !== null && (parent.f & EAGER_EFFECT) !== 0) {
      parent = parent.parent;
    }
  }
  if (parent !== null && (parent.f & INERT) !== 0) {
    type |= INERT;
  }
  var effect2 = {
    ctx: component_context,
    deps: null,
    nodes: null,
    f: type | DIRTY | CONNECTED,
    first: null,
    fn,
    last: null,
    next: null,
    parent,
    b: parent && parent.b,
    prev: null,
    teardown: null,
    wv: 0,
    ac: null
  };
  if (dev_fallback_default) {
    effect2.component_function = dev_current_component_function;
  }
  current_batch?.register_created_effect(effect2);
  var e = effect2;
  if ((type & EFFECT) !== 0) {
    if (collected_effects !== null) {
      collected_effects.push(effect2);
    } else {
      Batch.ensure().schedule(effect2);
    }
  } else if (fn !== null) {
    try {
      update_effect(effect2);
    } catch (e2) {
      destroy_effect(effect2);
      throw e2;
    }
    if (e.deps === null && e.teardown === null && e.nodes === null && e.first === e.last && // either `null`, or a singular child
    (e.f & EFFECT_PRESERVED) === 0) {
      e = e.first;
      if ((type & BLOCK_EFFECT) !== 0 && (type & EFFECT_TRANSPARENT) !== 0 && e !== null) {
        e.f |= EFFECT_TRANSPARENT;
      }
    }
  }
  if (e !== null) {
    e.parent = parent;
    if (parent !== null) {
      push_effect(e, parent);
    }
    if (active_reaction !== null && (active_reaction.f & DERIVED) !== 0 && (type & ROOT_EFFECT) === 0) {
      var derived3 = (
        /** @type {Derived} */
        active_reaction
      );
      (derived3.effects ??= []).push(e);
    }
  }
  return effect2;
}
function effect_tracking() {
  return active_reaction !== null && !untracking;
}
function teardown(fn) {
  const effect2 = create_effect(RENDER_EFFECT, null);
  set_signal_status(effect2, CLEAN);
  effect2.teardown = fn;
  return effect2;
}
function user_effect(fn) {
  validate_effect("$effect");
  if (dev_fallback_default) {
    define_property(fn, "name", {
      value: "$effect"
    });
  }
  var flags2 = (
    /** @type {Effect} */
    active_effect.f
  );
  var defer = !active_reaction && (flags2 & BRANCH_EFFECT) !== 0 && component_context !== null && !component_context.i;
  if (defer) {
    var context = (
      /** @type {ComponentContext} */
      component_context
    );
    (context.e ??= []).push(fn);
  } else {
    return create_user_effect(fn);
  }
}
function create_user_effect(fn) {
  return create_effect(EFFECT | USER_EFFECT, fn);
}
function effect_root(fn) {
  Batch.ensure();
  const effect2 = create_effect(ROOT_EFFECT | EFFECT_PRESERVED, fn);
  return () => {
    destroy_effect(effect2);
  };
}
function component_root(fn) {
  Batch.ensure();
  const effect2 = create_effect(ROOT_EFFECT | EFFECT_PRESERVED, fn);
  return (options = {}) => {
    return new Promise((fulfil) => {
      if (options.outro) {
        pause_effect(effect2, () => {
          destroy_effect(effect2);
          fulfil(void 0);
        });
      } else {
        destroy_effect(effect2);
        fulfil(void 0);
      }
    });
  };
}
function effect(fn) {
  return create_effect(EFFECT, fn);
}
function async_effect(fn) {
  return create_effect(ASYNC | EFFECT_PRESERVED, fn);
}
function render_effect(fn, flags2 = 0) {
  return create_effect(RENDER_EFFECT | flags2, fn);
}
function template_effect(fn, sync = [], async2 = [], blockers = []) {
  flatten(blockers, sync, async2, (values) => {
    create_effect(RENDER_EFFECT, () => {
      fn(...values.map(get2));
    });
  });
}
function block(fn, flags2 = 0) {
  var effect2 = create_effect(BLOCK_EFFECT | flags2, fn);
  if (dev_fallback_default) {
    effect2.dev_stack = dev_stack;
  }
  return effect2;
}
function branch(fn) {
  return create_effect(BRANCH_EFFECT | EFFECT_PRESERVED, fn);
}
function execute_effect_teardown(effect2) {
  var teardown2 = effect2.teardown;
  if (teardown2 !== null) {
    const previously_destroying_effect = is_destroying_effect;
    const previous_reaction = active_reaction;
    set_is_destroying_effect(true);
    set_active_reaction(null);
    try {
      teardown2.call(null);
    } finally {
      set_is_destroying_effect(previously_destroying_effect);
      set_active_reaction(previous_reaction);
    }
  }
}
function destroy_effect_children(signal, remove_dom = false) {
  var effect2 = signal.first;
  signal.first = signal.last = null;
  while (effect2 !== null) {
    const controller = effect2.ac;
    if (controller !== null) {
      without_reactive_context(() => {
        controller.abort(STALE_REACTION);
      });
    }
    var next2 = effect2.next;
    if ((effect2.f & ROOT_EFFECT) !== 0) {
      effect2.parent = null;
    } else {
      destroy_effect(effect2, remove_dom);
    }
    effect2 = next2;
  }
}
function destroy_block_effect_children(signal) {
  var effect2 = signal.first;
  while (effect2 !== null) {
    var next2 = effect2.next;
    if ((effect2.f & BRANCH_EFFECT) === 0) {
      destroy_effect(effect2);
    }
    effect2 = next2;
  }
}
function destroy_effect(effect2, remove_dom = true) {
  var removed = false;
  if ((remove_dom || (effect2.f & HEAD_EFFECT) !== 0) && effect2.nodes !== null && effect2.nodes.end !== null) {
    remove_effect_dom(
      effect2.nodes.start,
      /** @type {TemplateNode} */
      effect2.nodes.end
    );
    removed = true;
  }
  effect2.f |= DESTROYING;
  destroy_effect_children(effect2, remove_dom && !removed);
  remove_reactions(effect2, 0);
  var transitions = effect2.nodes && effect2.nodes.t;
  if (transitions !== null) {
    for (const transition2 of transitions) {
      transition2.stop();
    }
  }
  execute_effect_teardown(effect2);
  effect2.f ^= DESTROYING;
  effect2.f |= DESTROYED;
  var parent = effect2.parent;
  if (parent !== null && parent.first !== null) {
    unlink_effect(effect2);
  }
  if (dev_fallback_default) {
    effect2.component_function = null;
  }
  effect2.next = effect2.prev = effect2.teardown = effect2.ctx = effect2.deps = effect2.fn = effect2.nodes = effect2.ac = effect2.b = null;
}
function remove_effect_dom(node, end) {
  while (node !== null) {
    var next2 = node === end ? null : get_next_sibling(node);
    node.remove();
    node = next2;
  }
}
function unlink_effect(effect2) {
  var parent = effect2.parent;
  var prev = effect2.prev;
  var next2 = effect2.next;
  if (prev !== null) prev.next = next2;
  if (next2 !== null) next2.prev = prev;
  if (parent !== null) {
    if (parent.first === effect2) parent.first = next2;
    if (parent.last === effect2) parent.last = prev;
  }
}
function pause_effect(effect2, callback, destroy = true) {
  var transitions = [];
  pause_children(effect2, transitions, true);
  var fn = () => {
    if (destroy) destroy_effect(effect2);
    if (callback) callback();
  };
  var remaining = transitions.length;
  if (remaining > 0) {
    var check = () => --remaining || fn();
    for (var transition2 of transitions) {
      transition2.out(check);
    }
  } else {
    fn();
  }
}
function pause_children(effect2, transitions, local) {
  if ((effect2.f & INERT) !== 0) return;
  effect2.f ^= INERT;
  var t = effect2.nodes && effect2.nodes.t;
  if (t !== null) {
    for (const transition2 of t) {
      if (transition2.is_global || local) {
        transitions.push(transition2);
      }
    }
  }
  var child2 = effect2.first;
  while (child2 !== null) {
    var sibling2 = child2.next;
    if ((child2.f & ROOT_EFFECT) === 0) {
      var transparent = (child2.f & EFFECT_TRANSPARENT) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (child2.f & BRANCH_EFFECT) !== 0 && (effect2.f & BLOCK_EFFECT) !== 0;
      pause_children(child2, transitions, transparent ? local : false);
    }
    child2 = sibling2;
  }
}
function resume_effect(effect2) {
  resume_children(effect2, true);
}
function resume_children(effect2, local) {
  if ((effect2.f & INERT) === 0) return;
  effect2.f ^= INERT;
  if ((effect2.f & CLEAN) === 0) {
    set_signal_status(effect2, DIRTY);
    Batch.ensure().schedule(effect2);
  }
  var child2 = effect2.first;
  while (child2 !== null) {
    var sibling2 = child2.next;
    var transparent = (child2.f & EFFECT_TRANSPARENT) !== 0 || (child2.f & BRANCH_EFFECT) !== 0;
    resume_children(child2, transparent ? local : false);
    child2 = sibling2;
  }
  var t = effect2.nodes && effect2.nodes.t;
  if (t !== null) {
    for (const transition2 of t) {
      if (transition2.is_global || local) {
        transition2.in();
      }
    }
  }
}
function move_effect(effect2, fragment) {
  if (!effect2.nodes) return;
  var node = effect2.nodes.start;
  var end = effect2.nodes.end;
  while (node !== null) {
    var next2 = node === end ? null : get_next_sibling(node);
    fragment.append(node);
    node = next2;
  }
}

// node_modules/svelte/src/internal/client/legacy.js
var captured_signals = null;

// node_modules/svelte/src/internal/client/runtime.js
var is_updating_effect = false;
var is_destroying_effect = false;
function set_is_destroying_effect(value) {
  is_destroying_effect = value;
}
var active_reaction = null;
var untracking = false;
function set_active_reaction(reaction) {
  active_reaction = reaction;
}
var active_effect = null;
function set_active_effect(effect2) {
  active_effect = effect2;
}
var current_sources = null;
function push_reaction_value(value) {
  if (active_reaction !== null && (!async_mode_flag || (active_reaction.f & DERIVED) !== 0)) {
    (current_sources ??= /* @__PURE__ */ new Set()).add(value);
  }
}
var new_deps = null;
var skipped_deps = 0;
var untracked_writes = null;
function set_untracked_writes(value) {
  untracked_writes = value;
}
var write_version = 1;
var read_version = 0;
var update_version = read_version;
function set_update_version(value) {
  update_version = value;
}
function increment_write_version() {
  return ++write_version;
}
function is_dirty(reaction) {
  var flags2 = reaction.f;
  if ((flags2 & DIRTY) !== 0) {
    return true;
  }
  if (flags2 & DERIVED) {
    reaction.f &= ~WAS_MARKED;
  }
  if ((flags2 & MAYBE_DIRTY) !== 0) {
    var dependencies = (
      /** @type {Value[]} */
      reaction.deps
    );
    var length = dependencies.length;
    for (var i = 0; i < length; i++) {
      var dependency = dependencies[i];
      if (is_dirty(
        /** @type {Derived} */
        dependency
      )) {
        update_derived(
          /** @type {Derived} */
          dependency
        );
      }
      if (dependency.wv > reaction.wv) {
        return true;
      }
    }
    if ((flags2 & CONNECTED) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    batch_values === null) {
      set_signal_status(reaction, CLEAN);
    }
  }
  return false;
}
function schedule_possible_effect_self_invalidation(signal, effect2, root16 = true) {
  var reactions = signal.reactions;
  if (reactions === null) return;
  if (!async_mode_flag && current_sources !== null && current_sources.has(signal)) {
    return;
  }
  for (var i = 0; i < reactions.length; i++) {
    var reaction = reactions[i];
    if ((reaction.f & DERIVED) !== 0) {
      schedule_possible_effect_self_invalidation(
        /** @type {Derived} */
        reaction,
        effect2,
        false
      );
    } else if (effect2 === reaction) {
      if (root16) {
        set_signal_status(reaction, DIRTY);
      } else if ((reaction.f & CLEAN) !== 0) {
        set_signal_status(reaction, MAYBE_DIRTY);
      }
      schedule_effect(
        /** @type {Effect} */
        reaction
      );
    }
  }
}
function update_reaction(reaction) {
  var previous_deps = new_deps;
  var previous_skipped_deps = skipped_deps;
  var previous_untracked_writes = untracked_writes;
  var previous_reaction = active_reaction;
  var previous_sources = current_sources;
  var previous_component_context = component_context;
  var previous_untracking = untracking;
  var previous_update_version = update_version;
  var flags2 = reaction.f;
  new_deps = /** @type {null | Value[]} */
  null;
  skipped_deps = 0;
  untracked_writes = null;
  active_reaction = (flags2 & (BRANCH_EFFECT | ROOT_EFFECT)) === 0 ? reaction : null;
  current_sources = null;
  set_component_context(reaction.ctx);
  untracking = false;
  update_version = ++read_version;
  if (reaction.ac !== null) {
    without_reactive_context(() => {
      reaction.ac.abort(STALE_REACTION);
    });
    reaction.ac = null;
  }
  try {
    reaction.f |= REACTION_IS_UPDATING;
    var fn = (
      /** @type {Function} */
      reaction.fn
    );
    var result = fn();
    reaction.f |= REACTION_RAN;
    var deps = reaction.deps;
    var is_fork = current_batch?.is_fork;
    if (new_deps !== null) {
      var i;
      if (!is_fork) {
        remove_reactions(reaction, skipped_deps);
      }
      if (deps !== null && skipped_deps > 0) {
        deps.length = skipped_deps + new_deps.length;
        for (i = 0; i < new_deps.length; i++) {
          deps[skipped_deps + i] = new_deps[i];
        }
      } else {
        reaction.deps = deps = new_deps;
      }
      if (effect_tracking() && (reaction.f & CONNECTED) !== 0) {
        for (i = skipped_deps; i < deps.length; i++) {
          (deps[i].reactions ??= []).push(reaction);
        }
      }
    } else if (!is_fork && deps !== null && skipped_deps < deps.length) {
      remove_reactions(reaction, skipped_deps);
      deps.length = skipped_deps;
    }
    if (is_runes() && untracked_writes !== null && !untracking && deps !== null && (reaction.f & (DERIVED | MAYBE_DIRTY | DIRTY)) === 0) {
      for (i = 0; i < /** @type {Source[]} */
      untracked_writes.length; i++) {
        schedule_possible_effect_self_invalidation(
          untracked_writes[i],
          /** @type {Effect} */
          reaction
        );
      }
    }
    if (previous_reaction !== null && previous_reaction !== reaction) {
      read_version++;
      if (previous_reaction.deps !== null) {
        for (let i2 = 0; i2 < previous_skipped_deps; i2 += 1) {
          previous_reaction.deps[i2].rv = read_version;
        }
      }
      if (previous_deps !== null) {
        for (const dep of previous_deps) {
          dep.rv = read_version;
        }
      }
      if (untracked_writes !== null) {
        if (previous_untracked_writes === null) {
          previous_untracked_writes = untracked_writes;
        } else {
          previous_untracked_writes.push(.../** @type {Source[]} */
          untracked_writes);
        }
      }
    }
    if ((reaction.f & ERROR_VALUE) !== 0) {
      reaction.f ^= ERROR_VALUE;
    }
    return result;
  } catch (error) {
    return handle_error(error);
  } finally {
    reaction.f ^= REACTION_IS_UPDATING;
    new_deps = previous_deps;
    skipped_deps = previous_skipped_deps;
    untracked_writes = previous_untracked_writes;
    active_reaction = previous_reaction;
    current_sources = previous_sources;
    set_component_context(previous_component_context);
    untracking = previous_untracking;
    update_version = previous_update_version;
  }
}
function remove_reaction(signal, dependency) {
  let reactions = dependency.reactions;
  if (reactions !== null) {
    var index2 = index_of.call(reactions, signal);
    if (index2 !== -1) {
      var new_length = reactions.length - 1;
      if (new_length === 0) {
        reactions = dependency.reactions = null;
      } else {
        reactions[index2] = reactions[new_length];
        reactions.pop();
      }
    }
  }
  if (reactions === null && (dependency.f & DERIVED) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (new_deps === null || !includes.call(new_deps, dependency))) {
    var derived3 = (
      /** @type {Derived} */
      dependency
    );
    if ((derived3.f & CONNECTED) !== 0) {
      derived3.f ^= CONNECTED;
      derived3.f &= ~WAS_MARKED;
    }
    if (derived3.v !== UNINITIALIZED) {
      update_derived_status(derived3);
    }
    if (derived3.ac !== null) {
      without_reactive_context(() => {
        derived3.ac.abort(STALE_REACTION);
        derived3.ac = null;
        set_signal_status(derived3, DIRTY);
      });
    }
    freeze_derived_effects(derived3);
    remove_reactions(derived3, 0);
  }
}
function remove_reactions(signal, start_index) {
  var dependencies = signal.deps;
  if (dependencies === null) return;
  for (var i = start_index; i < dependencies.length; i++) {
    remove_reaction(signal, dependencies[i]);
  }
}
function update_effect(effect2) {
  var flags2 = effect2.f;
  if ((flags2 & DESTROYED) !== 0) {
    return;
  }
  set_signal_status(effect2, CLEAN);
  var previous_effect = active_effect;
  var was_updating_effect = is_updating_effect;
  active_effect = effect2;
  is_updating_effect = (flags2 & (BRANCH_EFFECT | ROOT_EFFECT)) === 0;
  if (dev_fallback_default) {
    var previous_component_fn = dev_current_component_function;
    set_dev_current_component_function(effect2.component_function);
    var previous_stack = (
      /** @type {any} */
      dev_stack
    );
    set_dev_stack(effect2.dev_stack ?? dev_stack);
  }
  try {
    if ((flags2 & (BLOCK_EFFECT | MANAGED_EFFECT)) !== 0) {
      destroy_block_effect_children(effect2);
    } else {
      destroy_effect_children(effect2);
    }
    execute_effect_teardown(effect2);
    var teardown2 = update_reaction(effect2);
    effect2.teardown = typeof teardown2 === "function" ? teardown2 : null;
    effect2.wv = write_version;
    if (dev_fallback_default && tracing_mode_flag && (effect2.f & DIRTY) !== 0 && effect2.deps !== null) {
      for (var dep of effect2.deps) {
        if (dep.set_during_effect) {
          dep.wv = increment_write_version();
          dep.set_during_effect = false;
        }
      }
    }
  } finally {
    is_updating_effect = was_updating_effect;
    active_effect = previous_effect;
    if (dev_fallback_default) {
      set_dev_current_component_function(previous_component_fn);
      set_dev_stack(previous_stack);
    }
  }
}
async function tick() {
  if (async_mode_flag) {
    return new Promise((f) => {
      requestAnimationFrame(() => f());
      setTimeout(() => f());
    });
  }
  await Promise.resolve();
  flushSync();
}
function get2(signal) {
  var flags2 = signal.f;
  var is_derived = (flags2 & DERIVED) !== 0;
  captured_signals?.add(signal);
  if (active_reaction !== null && !untracking) {
    var destroyed = active_effect !== null && (active_effect.f & DESTROYED) !== 0;
    if (!destroyed && (current_sources === null || !current_sources.has(signal))) {
      var deps = active_reaction.deps;
      if ((active_reaction.f & REACTION_IS_UPDATING) !== 0) {
        if (signal.rv < read_version) {
          signal.rv = read_version;
          if (new_deps === null && deps !== null && deps[skipped_deps] === signal) {
            skipped_deps++;
          } else if (new_deps === null) {
            new_deps = [signal];
          } else {
            new_deps.push(signal);
          }
        }
      } else {
        active_reaction.deps ??= [];
        if (!includes.call(active_reaction.deps, signal)) {
          active_reaction.deps.push(signal);
        }
        var reactions = signal.reactions;
        if (reactions === null) {
          signal.reactions = [active_reaction];
        } else if (!includes.call(reactions, active_reaction)) {
          reactions.push(active_reaction);
        }
      }
    }
  }
  if (dev_fallback_default) {
    if (!untracking && reactivity_loss_tracker && // By checking that current/previous batch are null we filter out false positives.
    // reactivity_loss_tracker is only reset after a microtask, so if a flush happens
    // before that, we get warnings for things we shouldn't warn on.
    current_batch === null && previous_batch === null && !reactivity_loss_tracker.warned && (reactivity_loss_tracker.effect.f & REACTION_IS_UPDATING) === 0 && !reactivity_loss_tracker.effect_deps.has(signal)) {
      reactivity_loss_tracker.warned = true;
      await_reactivity_loss(
        /** @type {string} */
        signal.label
      );
      var trace2 = get_error("traced at");
      if (trace2) console.warn(trace2);
    }
    recent_async_deriveds.delete(signal);
    if (tracing_mode_flag && !untracking && tracing_expressions !== null && active_reaction !== null && tracing_expressions.reaction === active_reaction) {
      if (signal.trace) {
        signal.trace();
      } else {
        trace2 = get_error("traced at");
        if (trace2) {
          var entry = tracing_expressions.entries.get(signal);
          if (entry === void 0) {
            entry = { traces: [] };
            tracing_expressions.entries.set(signal, entry);
          }
          var last = entry.traces[entry.traces.length - 1];
          if (trace2.stack !== last?.stack) {
            entry.traces.push(trace2);
          }
        }
      }
    }
  }
  if (is_destroying_effect && old_values.has(signal)) {
    return old_values.get(signal);
  }
  if (is_derived) {
    var derived3 = (
      /** @type {Derived} */
      signal
    );
    if (is_destroying_effect) {
      var value = derived3.v;
      if ((derived3.f & CLEAN) === 0 && derived3.reactions !== null || depends_on_old_values(derived3)) {
        value = execute_derived(derived3);
      }
      old_values.set(derived3, value);
      return value;
    }
    var should_connect = (derived3.f & CONNECTED) === 0 && !untracking && active_reaction !== null && (is_updating_effect || (active_reaction.f & CONNECTED) !== 0);
    var is_new = (derived3.f & REACTION_RAN) === 0;
    if (is_dirty(derived3)) {
      if (should_connect) {
        derived3.f |= CONNECTED;
      }
      update_derived(derived3);
    }
    if (should_connect && !is_new) {
      unfreeze_derived_effects(derived3);
      reconnect(derived3);
    }
  }
  if (batch_values?.has(signal)) {
    return batch_values.get(signal);
  }
  if ((signal.f & ERROR_VALUE) !== 0) {
    throw signal.v;
  }
  return signal.v;
}
function reconnect(derived3) {
  derived3.f |= CONNECTED;
  if (derived3.deps === null) return;
  for (const dep of derived3.deps) {
    (dep.reactions ??= []).push(derived3);
    if ((dep.f & DERIVED) !== 0 && (dep.f & CONNECTED) === 0) {
      unfreeze_derived_effects(
        /** @type {Derived} */
        dep
      );
      reconnect(
        /** @type {Derived} */
        dep
      );
    }
  }
}
function depends_on_old_values(derived3) {
  if (derived3.v === UNINITIALIZED) return true;
  if (derived3.deps === null) return false;
  for (const dep of derived3.deps) {
    if (old_values.has(dep)) {
      return true;
    }
    if ((dep.f & DERIVED) !== 0 && depends_on_old_values(
      /** @type {Derived} */
      dep
    )) {
      return true;
    }
  }
  return false;
}
function untrack(fn) {
  var previous_untracking = untracking;
  try {
    untracking = true;
    return fn();
  } finally {
    untracking = previous_untracking;
  }
}
function deep_read_state(value) {
  if (typeof value !== "object" || !value || value instanceof EventTarget) {
    return;
  }
  if (STATE_SYMBOL in value) {
    deep_read(value);
  } else if (!Array.isArray(value)) {
    for (let key2 in value) {
      const prop2 = value[key2];
      if (typeof prop2 === "object" && prop2 && STATE_SYMBOL in prop2) {
        deep_read(prop2);
      }
    }
  }
}
function deep_read(value, visited = /* @__PURE__ */ new Set()) {
  if (typeof value === "object" && value !== null && // We don't want to traverse DOM elements
  !(value instanceof EventTarget) && !visited.has(value)) {
    visited.add(value);
    if (value instanceof Date) {
      value.getTime();
    }
    for (let key2 in value) {
      try {
        deep_read(value[key2], visited);
      } catch (e) {
      }
    }
    const proto = get_prototype_of(value);
    if (proto !== Object.prototype && proto !== Array.prototype && proto !== Map.prototype && proto !== Set.prototype && proto !== Date.prototype) {
      const descriptors = get_descriptors(proto);
      for (let key2 in descriptors) {
        const get3 = descriptors[key2].get;
        if (get3) {
          try {
            get3.call(value);
          } catch (e) {
          }
        }
      }
    }
  }
}

// node_modules/svelte/src/internal/client/dom/elements/events.js
var event_symbol = Symbol("events");
var all_registered_events = /* @__PURE__ */ new Set();
var root_event_handles = /* @__PURE__ */ new Set();
function delegated(event_name, element2, handler) {
  (element2[event_symbol] ??= {})[event_name] = handler;
}
function delegate(events) {
  for (var i = 0; i < events.length; i++) {
    all_registered_events.add(events[i]);
  }
  for (var fn of root_event_handles) {
    fn(events);
  }
}
var last_propagated_event = null;
function handle_event_propagation(event2) {
  var handler_element = this;
  var owner_document = (
    /** @type {Node} */
    handler_element.ownerDocument
  );
  var event_name = event2.type;
  var path = event2.composedPath?.() || [];
  var current_target = (
    /** @type {null | Element} */
    path[0] || event2.target
  );
  last_propagated_event = event2;
  var path_idx = 0;
  var handled_at = last_propagated_event === event2 && event2[event_symbol];
  if (handled_at) {
    var at_idx = path.indexOf(handled_at);
    if (at_idx !== -1 && (handler_element === document || handler_element === /** @type {any} */
    window)) {
      event2[event_symbol] = handler_element;
      return;
    }
    var handler_idx = path.indexOf(handler_element);
    if (handler_idx === -1) {
      return;
    }
    if (at_idx <= handler_idx) {
      path_idx = at_idx;
    }
  }
  current_target = /** @type {Element} */
  path[path_idx] || event2.target;
  if (current_target === handler_element) return;
  define_property(event2, "currentTarget", {
    configurable: true,
    get() {
      return current_target || owner_document;
    }
  });
  var previous_reaction = active_reaction;
  var previous_effect = active_effect;
  set_active_reaction(null);
  set_active_effect(null);
  try {
    var throw_error;
    var other_errors = [];
    while (current_target !== null) {
      if (current_target === handler_element) break;
      try {
        var delegated2 = current_target[event_symbol]?.[event_name];
        if (delegated2 != null && (!/** @type {any} */
        current_target.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
        // -> the target could not have been disabled because it emits the event in the first place
        event2.target === current_target)) {
          delegated2.call(current_target, event2);
        }
      } catch (error) {
        if (throw_error) {
          other_errors.push(error);
        } else {
          throw_error = error;
        }
      }
      if (event2.cancelBubble) break;
      path_idx++;
      current_target = path_idx < path.length ? (
        /** @type {Element} */
        path[path_idx]
      ) : null;
    }
    if (throw_error) {
      for (let error of other_errors) {
        queueMicrotask(() => {
          throw error;
        });
      }
      throw throw_error;
    }
  } finally {
    event2[event_symbol] = handler_element;
    delete event2.currentTarget;
    set_active_reaction(previous_reaction);
    set_active_effect(previous_effect);
  }
}

// node_modules/svelte/src/internal/client/dom/reconciler.js
var policy = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (html2) => {
      return html2;
    }
  })
);
function create_trusted_html(html2) {
  return (
    /** @type {string} */
    policy?.createHTML(html2) ?? html2
  );
}
function create_fragment_from_html(html2) {
  var elem = create_element("template");
  elem.innerHTML = create_trusted_html(html2.replaceAll("<!>", "<!---->"));
  return elem.content;
}

// node_modules/svelte/src/internal/client/dom/template.js
function assign_nodes(start, end) {
  var effect2 = (
    /** @type {Effect} */
    active_effect
  );
  if (effect2.nodes === null) {
    effect2.nodes = { start, end, a: null, t: null };
  }
}
// @__NO_SIDE_EFFECTS__
function from_html(content, flags2) {
  var is_fragment = (flags2 & TEMPLATE_FRAGMENT) !== 0;
  var use_import_node = (flags2 & TEMPLATE_USE_IMPORT_NODE) !== 0;
  var node;
  var has_start = !content.startsWith("<!>");
  return () => {
    if (hydrating) {
      assign_nodes(hydrate_node, null);
      return hydrate_node;
    }
    if (node === void 0) {
      node = create_fragment_from_html(has_start ? content : "<!>" + content);
      if (!is_fragment) node = /** @type {TemplateNode} */
      get_first_child(node);
    }
    var clone = (
      /** @type {TemplateNode} */
      use_import_node || is_firefox ? document.importNode(node, true) : node.cloneNode(true)
    );
    if (is_fragment) {
      var start = (
        /** @type {TemplateNode} */
        get_first_child(clone)
      );
      var end = (
        /** @type {TemplateNode} */
        clone.lastChild
      );
      assign_nodes(start, end);
    } else {
      assign_nodes(clone, clone);
    }
    return clone;
  };
}
// @__NO_SIDE_EFFECTS__
function from_namespace(content, flags2, ns = "svg") {
  var has_start = !content.startsWith("<!>");
  var is_fragment = (flags2 & TEMPLATE_FRAGMENT) !== 0;
  var wrapped = `<${ns}>${has_start ? content : "<!>" + content}</${ns}>`;
  var node;
  return () => {
    if (hydrating) {
      assign_nodes(hydrate_node, null);
      return hydrate_node;
    }
    if (!node) {
      var fragment = (
        /** @type {DocumentFragment} */
        create_fragment_from_html(wrapped)
      );
      var root16 = (
        /** @type {Element} */
        get_first_child(fragment)
      );
      if (is_fragment) {
        node = document.createDocumentFragment();
        while (get_first_child(root16)) {
          node.appendChild(
            /** @type {TemplateNode} */
            get_first_child(root16)
          );
        }
      } else {
        node = /** @type {Element} */
        get_first_child(root16);
      }
    }
    var clone = (
      /** @type {TemplateNode} */
      node.cloneNode(true)
    );
    if (is_fragment) {
      var start = (
        /** @type {TemplateNode} */
        get_first_child(clone)
      );
      var end = (
        /** @type {TemplateNode} */
        clone.lastChild
      );
      assign_nodes(start, end);
    } else {
      assign_nodes(clone, clone);
    }
    return clone;
  };
}
// @__NO_SIDE_EFFECTS__
function from_svg(content, flags2) {
  return /* @__PURE__ */ from_namespace(content, flags2, "svg");
}
function text(value = "") {
  if (!hydrating) {
    var t = create_text(value + "");
    assign_nodes(t, t);
    return t;
  }
  var node = hydrate_node;
  if (node.nodeType !== TEXT_NODE) {
    node.before(node = create_text());
    set_hydrate_node(node);
  } else {
    merge_text_nodes(
      /** @type {Text} */
      node
    );
  }
  assign_nodes(node, node);
  return node;
}
function comment() {
  if (hydrating) {
    assign_nodes(hydrate_node, null);
    return hydrate_node;
  }
  var frag = document.createDocumentFragment();
  var start = document.createComment("");
  var anchor = create_text();
  frag.append(start, anchor);
  assign_nodes(start, anchor);
  return frag;
}
function append(anchor, dom) {
  if (hydrating) {
    var effect2 = (
      /** @type {Effect & { nodes: EffectNodes }} */
      active_effect
    );
    if ((effect2.f & REACTION_RAN) === 0 || effect2.nodes.end === null) {
      effect2.nodes.end = hydrate_node;
    }
    hydrate_next();
    return;
  }
  if (anchor === null) {
    return;
  }
  anchor.before(
    /** @type {Node} */
    dom
  );
}

// node_modules/svelte/src/utils.js
var regex_return_characters = /\r/g;
function hash(str) {
  str = str.replace(regex_return_characters, "");
  let hash2 = 5381;
  let i = str.length;
  while (i--) hash2 = (hash2 << 5) - hash2 ^ str.charCodeAt(i);
  return (hash2 >>> 0).toString(36);
}
var DOM_BOOLEAN_ATTRIBUTES = [
  "allowfullscreen",
  "async",
  "autofocus",
  "autoplay",
  "checked",
  "controls",
  "default",
  "disabled",
  "formnovalidate",
  "indeterminate",
  "inert",
  "ismap",
  "loop",
  "multiple",
  "muted",
  "nomodule",
  "novalidate",
  "open",
  "playsinline",
  "readonly",
  "required",
  "reversed",
  "seamless",
  "selected",
  "webkitdirectory",
  "defer",
  "disablepictureinpicture",
  "disableremoteplayback"
];
var DOM_PROPERTIES = [
  ...DOM_BOOLEAN_ATTRIBUTES,
  "formNoValidate",
  "isMap",
  "noModule",
  "playsInline",
  "readOnly",
  "value",
  "volume",
  "defaultValue",
  "defaultChecked",
  "srcObject",
  "noValidate",
  "allowFullscreen",
  "disablePictureInPicture",
  "disableRemotePlayback"
];
var PASSIVE_EVENTS = ["touchstart", "touchmove"];
function is_passive_event(name) {
  return PASSIVE_EVENTS.includes(name);
}
var STATE_CREATION_RUNES = (
  /** @type {const} */
  [
    "$state",
    "$state.raw",
    "$derived",
    "$derived.by"
  ]
);
var RUNES = (
  /** @type {const} */
  [
    ...STATE_CREATION_RUNES,
    "$state.eager",
    "$state.snapshot",
    "$props",
    "$props.id",
    "$bindable",
    "$effect",
    "$effect.pre",
    "$effect.tracking",
    "$effect.root",
    "$effect.pending",
    "$inspect",
    "$inspect().with",
    "$inspect.trace",
    "$host"
  ]
);
function sanitize_location(location) {
  return (
    /** @type {T} */
    location?.replace(/\//g, "/\u200B")
  );
}

// node_modules/svelte/src/internal/client/render.js
var should_intro = true;
function set_text(text2, value) {
  var str = value == null ? "" : typeof value === "object" ? `${value}` : value;
  if (str !== /** @type {any} */
  (text2[TEXT_CACHE] ??= text2.nodeValue)) {
    text2[TEXT_CACHE] = str;
    text2.nodeValue = `${str}`;
  }
}
function mount(component2, options) {
  return _mount(component2, options);
}
function hydrate(component2, options) {
  init_operations();
  options.intro = options.intro ?? false;
  const target = options.target;
  const was_hydrating = hydrating;
  const previous_hydrate_node = hydrate_node;
  try {
    var anchor = get_first_child(target);
    while (anchor && (anchor.nodeType !== COMMENT_NODE || /** @type {Comment} */
    anchor.data !== HYDRATION_START)) {
      anchor = get_next_sibling(anchor);
    }
    if (!anchor) {
      throw HYDRATION_ERROR;
    }
    set_hydrating(true);
    set_hydrate_node(
      /** @type {Comment} */
      anchor
    );
    const instance = _mount(component2, { ...options, anchor });
    set_hydrating(false);
    return (
      /**  @type {Exports} */
      instance
    );
  } catch (error) {
    if (error instanceof Error && error.message.split("\n").some((line) => line.startsWith("https://svelte.dev/e/"))) {
      throw error;
    }
    if (error !== HYDRATION_ERROR) {
      console.warn("Failed to hydrate: ", error);
    }
    if (options.recover === false) {
      hydration_failed();
    }
    init_operations();
    clear_text_content(target);
    set_hydrating(false);
    return mount(component2, options);
  } finally {
    set_hydrating(was_hydrating);
    set_hydrate_node(previous_hydrate_node);
  }
}
var listeners = /* @__PURE__ */ new Map();
function _mount(Component, { target, anchor, props = {}, events, context, intro = true, transformError }) {
  init_operations();
  var component2 = void 0;
  var unmount2 = component_root(() => {
    var anchor_node = anchor ?? target.appendChild(create_text());
    boundary(
      /** @type {TemplateNode} */
      anchor_node,
      {
        pending: () => {
        }
      },
      (anchor_node2) => {
        push({});
        var ctx = (
          /** @type {ComponentContext} */
          component_context
        );
        if (context) ctx.c = context;
        if (events) {
          props.$$events = events;
        }
        if (hydrating) {
          assign_nodes(
            /** @type {TemplateNode} */
            anchor_node2,
            null
          );
        }
        should_intro = intro;
        component2 = Component(anchor_node2, props) || {};
        should_intro = true;
        if (hydrating) {
          active_effect.nodes.end = hydrate_node;
          if (hydrate_node === null || hydrate_node.nodeType !== COMMENT_NODE || /** @type {Comment} */
          hydrate_node.data !== HYDRATION_END) {
            hydration_mismatch();
            throw HYDRATION_ERROR;
          }
        }
        pop();
      },
      transformError
    );
    var registered_events = /* @__PURE__ */ new Set();
    var event_handle = (events2) => {
      for (var i = 0; i < events2.length; i++) {
        var event_name = events2[i];
        if (registered_events.has(event_name)) continue;
        registered_events.add(event_name);
        var passive2 = is_passive_event(event_name);
        for (const node of [target, document]) {
          var counts = listeners.get(node);
          if (counts === void 0) {
            counts = /* @__PURE__ */ new Map();
            listeners.set(node, counts);
          }
          var count = counts.get(event_name);
          if (count === void 0) {
            node.addEventListener(event_name, handle_event_propagation, { passive: passive2 });
            counts.set(event_name, 1);
          } else {
            counts.set(event_name, count + 1);
          }
        }
      }
    };
    event_handle(array_from(all_registered_events));
    root_event_handles.add(event_handle);
    return () => {
      for (var event_name of registered_events) {
        for (const node of [target, document]) {
          var counts = (
            /** @type {Map<string, number>} */
            listeners.get(node)
          );
          var count = (
            /** @type {number} */
            counts.get(event_name)
          );
          if (--count == 0) {
            node.removeEventListener(event_name, handle_event_propagation);
            counts.delete(event_name);
            if (counts.size === 0) {
              listeners.delete(node);
            }
          } else {
            counts.set(event_name, count);
          }
        }
      }
      root_event_handles.delete(event_handle);
      if (anchor_node !== anchor) {
        anchor_node.parentNode?.removeChild(anchor_node);
      }
    };
  });
  mounted_components.set(component2, unmount2);
  return component2;
}
var mounted_components = /* @__PURE__ */ new WeakMap();
function unmount(component2, options) {
  const fn = mounted_components.get(component2);
  if (fn) {
    mounted_components.delete(component2);
    return fn(options);
  }
  if (dev_fallback_default) {
    if (STATE_SYMBOL in component2) {
      state_proxy_unmount();
    } else {
      lifecycle_double_unmount();
    }
  }
  return Promise.resolve();
}

// node_modules/svelte/src/internal/shared/validate.js
function validate_store(store, name) {
  if (store != null && typeof store.subscribe !== "function") {
    store_invalid_shape(name);
  }
}

// node_modules/svelte/src/internal/client/dom/blocks/branches.js
var BranchManager = class {
  /** @type {TemplateNode} */
  anchor;
  /** @type {Map<Batch, Key>} */
  #batches = /* @__PURE__ */ new Map();
  /**
   * Map of keys to effects that are currently rendered in the DOM.
   * These effects are visible and actively part of the document tree.
   * Example:
   * ```
   * {#if condition}
   * 	foo
   * {:else}
   * 	bar
   * {/if}
   * ```
   * Can result in the entries `true->Effect` and `false->Effect`
   * @type {Map<Key, Effect>}
   */
  #onscreen = /* @__PURE__ */ new Map();
  /**
   * Similar to #onscreen with respect to the keys, but contains branches that are not yet
   * in the DOM, because their insertion is deferred.
   * @type {Map<Key, Branch>}
   */
  #offscreen = /* @__PURE__ */ new Map();
  /**
   * Keys of effects that are currently outroing
   * @type {Set<Key>}
   */
  #outroing = /* @__PURE__ */ new Set();
  /**
   * Whether to pause (i.e. outro) on change, or destroy immediately.
   * This is necessary for `<svelte:element>`
   */
  #transition = true;
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(anchor, transition2 = true) {
    this.anchor = anchor;
    this.#transition = transition2;
  }
  /**
   * @param {Batch} batch
   */
  #commit = (batch) => {
    if (!this.#batches.has(batch)) return;
    var key2 = (
      /** @type {Key} */
      this.#batches.get(batch)
    );
    var onscreen = this.#onscreen.get(key2);
    if (onscreen) {
      resume_effect(onscreen);
      this.#outroing.delete(key2);
    } else {
      var offscreen = this.#offscreen.get(key2);
      if (offscreen) {
        resume_effect(offscreen.effect);
        this.#onscreen.set(key2, offscreen.effect);
        this.#offscreen.delete(key2);
        if (dev_fallback_default) {
          offscreen.fragment.lastChild[HMR_ANCHOR] = this.anchor;
        }
        offscreen.fragment.lastChild.remove();
        this.anchor.before(offscreen.fragment);
        onscreen = offscreen.effect;
      }
    }
    for (const [b, k] of this.#batches) {
      this.#batches.delete(b);
      if (b === batch) {
        break;
      }
      const offscreen2 = this.#offscreen.get(k);
      if (offscreen2) {
        destroy_effect(offscreen2.effect);
        this.#offscreen.delete(k);
      }
    }
    for (const [k, effect2] of this.#onscreen) {
      if (k === key2 || this.#outroing.has(k)) continue;
      const on_destroy = () => {
        const keys = Array.from(this.#batches.values());
        if (keys.includes(k)) {
          var fragment = document.createDocumentFragment();
          move_effect(effect2, fragment);
          fragment.append(create_text());
          this.#offscreen.set(k, { effect: effect2, fragment });
        } else {
          destroy_effect(effect2);
        }
        this.#outroing.delete(k);
        this.#onscreen.delete(k);
      };
      if (this.#transition || !onscreen) {
        this.#outroing.add(k);
        pause_effect(effect2, on_destroy, false);
      } else {
        on_destroy();
      }
    }
  };
  /**
   * @param {Batch} batch
   */
  #discard = (batch) => {
    this.#batches.delete(batch);
    const keys = Array.from(this.#batches.values());
    for (const [k, branch2] of this.#offscreen) {
      if (!keys.includes(k)) {
        destroy_effect(branch2.effect);
        this.#offscreen.delete(k);
      }
    }
  };
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(key2, fn) {
    var batch = (
      /** @type {Batch} */
      current_batch
    );
    var defer = should_defer_append();
    if (fn && !this.#onscreen.has(key2) && !this.#offscreen.has(key2)) {
      if (defer) {
        var fragment = document.createDocumentFragment();
        var target = create_text();
        fragment.append(target);
        this.#offscreen.set(key2, {
          effect: branch(() => fn(target)),
          fragment
        });
      } else {
        this.#onscreen.set(
          key2,
          branch(() => fn(this.anchor))
        );
      }
    }
    this.#batches.set(batch, key2);
    if (defer) {
      for (const [k, effect2] of this.#onscreen) {
        if (k === key2) {
          batch.unskip_effect(effect2);
        } else {
          batch.skip_effect(effect2);
        }
      }
      for (const [k, branch2] of this.#offscreen) {
        if (k === key2) {
          batch.unskip_effect(branch2.effect);
        } else {
          batch.skip_effect(branch2.effect);
        }
      }
      batch.oncommit(this.#commit);
      batch.ondiscard(this.#discard);
    } else {
      if (hydrating) {
        this.anchor = hydrate_node;
      }
      this.#commit(batch);
    }
  }
};

// node_modules/svelte/src/index-client.js
if (dev_fallback_default) {
  let throw_rune_error = function(rune) {
    if (!(rune in globalThis)) {
      let value;
      Object.defineProperty(globalThis, rune, {
        configurable: true,
        // eslint-disable-next-line getter-return
        get: () => {
          if (value !== void 0) {
            return value;
          }
          rune_outside_svelte(rune);
        },
        set: (v) => {
          value = v;
        }
      });
    }
  };
  throw_rune_error("$state");
  throw_rune_error("$effect");
  throw_rune_error("$derived");
  throw_rune_error("$inspect");
  throw_rune_error("$props");
  throw_rune_error("$bindable");
}
function onMount(fn) {
  if (component_context === null) {
    lifecycle_outside_component("onMount");
  }
  if (legacy_mode_flag && component_context.l !== null) {
    init_update_callbacks(component_context).m.push(fn);
  } else {
    user_effect(() => {
      const cleanup = untrack(fn);
      if (typeof cleanup === "function") return (
        /** @type {() => void} */
        cleanup
      );
    });
  }
}
function onDestroy(fn) {
  if (component_context === null) {
    lifecycle_outside_component("onDestroy");
  }
  onMount(() => () => untrack(fn));
}
function init_update_callbacks(context) {
  var l = (
    /** @type {ComponentContextLegacy} */
    context.l
  );
  return l.u ??= { a: [], b: [], m: [] };
}

// node_modules/svelte/src/internal/client/dev/css.js
var all_styles = /* @__PURE__ */ new Map();
function register_style(hash2, style) {
  var styles = all_styles.get(hash2);
  if (!styles) {
    styles = /* @__PURE__ */ new Set();
    all_styles.set(hash2, styles);
  }
  styles.add(style);
}

// node_modules/svelte/src/internal/client/dev/elements.js
function add_locations(fn, filename, locations) {
  return (...args) => {
    const dom = fn(...args);
    var node = hydrating ? dom : dom.nodeType === DOCUMENT_FRAGMENT_NODE ? dom.firstChild : dom;
    assign_locations(node, filename, locations);
    return dom;
  };
}
function assign_location(element2, filename, location) {
  element2.__svelte_meta = {
    parent: dev_stack,
    loc: { file: filename, line: location[0], column: location[1] }
  };
  if (location[2]) {
    assign_locations(element2.firstChild, filename, location[2]);
  }
}
function assign_locations(node, filename, locations) {
  var i = 0;
  var depth = 0;
  while (node && i < locations.length) {
    if (hydrating && node.nodeType === COMMENT_NODE) {
      var comment2 = (
        /** @type {Comment} */
        node
      );
      if (comment2.data[0] === HYDRATION_START) depth += 1;
      else if (comment2.data[0] === HYDRATION_END) depth -= 1;
    }
    if (depth === 0 && node.nodeType === ELEMENT_NODE) {
      assign_location(
        /** @type {Element} */
        node,
        filename,
        locations[i++]
      );
    }
    node = node.nextSibling;
  }
}

// node_modules/svelte/src/internal/client/dev/legacy.js
function check_target(target) {
  if (target) {
    component_api_invalid_new(target[FILENAME] ?? "a component", target.name);
  }
}
function legacy_api() {
  const component2 = component_context?.function;
  function error(method) {
    component_api_changed(method, component2[FILENAME]);
  }
  return {
    $destroy: () => error("$destroy()"),
    $on: () => error("$on(...)"),
    $set: () => error("$set(...)")
  };
}

// node_modules/svelte/src/internal/client/dom/blocks/if.js
function if_block(node, fn, elseif = false) {
  var marker;
  if (hydrating) {
    marker = hydrate_node;
    hydrate_next();
  }
  var branches = new BranchManager(node);
  var flags2 = elseif ? EFFECT_TRANSPARENT : 0;
  function update_branch(key2, fn2) {
    if (hydrating) {
      var data = read_hydration_instruction(
        /** @type {TemplateNode} */
        marker
      );
      if (key2 !== parseInt(data.substring(1))) {
        var anchor = skip_nodes();
        set_hydrate_node(anchor);
        branches.anchor = anchor;
        set_hydrating(false);
        branches.ensure(key2, fn2);
        set_hydrating(true);
        return;
      }
    }
    branches.ensure(key2, fn2);
  }
  block(() => {
    var has_branch = false;
    fn((fn2, key2 = 0) => {
      has_branch = true;
      update_branch(key2, fn2);
    });
    if (!has_branch) {
      update_branch(-1, null);
    }
  }, flags2);
}

// node_modules/svelte/src/internal/client/dom/blocks/key.js
var NAN = Symbol("NaN");
function key(node, get_key, render_fn) {
  if (hydrating) {
    hydrate_next();
  }
  var branches = new BranchManager(node);
  var legacy = !is_runes();
  block(() => {
    var key2 = get_key();
    if (key2 !== key2) {
      key2 = /** @type {any} */
      NAN;
    }
    if (legacy && key2 !== null && typeof key2 === "object") {
      key2 = /** @type {V} */
      {};
    }
    branches.ensure(key2, render_fn);
  });
}

// node_modules/svelte/src/internal/client/dom/blocks/each.js
function index(_, i) {
  return i;
}
function pause_effects(state2, to_destroy, controlled_anchor) {
  var transitions = [];
  var length = to_destroy.length;
  var group;
  var remaining = to_destroy.length;
  for (var i = 0; i < length; i++) {
    let effect2 = to_destroy[i];
    pause_effect(
      effect2,
      () => {
        if (group) {
          group.pending.delete(effect2);
          group.done.add(effect2);
          if (group.pending.size === 0) {
            var groups = (
              /** @type {Set<EachOutroGroup>} */
              state2.outrogroups
            );
            destroy_effects(state2, array_from(group.done));
            groups.delete(group);
            if (groups.size === 0) {
              state2.outrogroups = null;
            }
          }
        } else {
          remaining -= 1;
        }
      },
      false
    );
  }
  if (remaining === 0) {
    var fast_path = transitions.length === 0 && controlled_anchor !== null && state2.pending.size === 0;
    if (fast_path) {
      var anchor = (
        /** @type {Element} */
        controlled_anchor
      );
      var parent_node = (
        /** @type {Element} */
        anchor.parentNode
      );
      clear_text_content(parent_node);
      parent_node.append(anchor);
      state2.items.clear();
    }
    destroy_effects(state2, to_destroy, !fast_path);
  } else {
    group = {
      pending: new Set(to_destroy),
      done: /* @__PURE__ */ new Set()
    };
    (state2.outrogroups ??= /* @__PURE__ */ new Set()).add(group);
  }
}
function destroy_effects(state2, to_destroy, remove_dom = true) {
  var preserved_effects;
  if (state2.pending.size > 0) {
    preserved_effects = /* @__PURE__ */ new Set();
    for (const keys of state2.pending.values()) {
      for (const key2 of keys) {
        preserved_effects.add(
          /** @type {EachItem} */
          state2.items.get(key2).e
        );
      }
    }
  }
  for (var i = 0; i < to_destroy.length; i++) {
    var e = to_destroy[i];
    if (preserved_effects?.has(e)) {
      e.f |= EFFECT_OFFSCREEN;
      const fragment = document.createDocumentFragment();
      move_effect(e, fragment);
    } else {
      destroy_effect(to_destroy[i], remove_dom);
    }
  }
}
var offscreen_anchor;
function each(node, flags2, get_collection, get_key, render_fn, fallback_fn = null) {
  var anchor = node;
  var items = /* @__PURE__ */ new Map();
  var is_controlled = (flags2 & EACH_IS_CONTROLLED) !== 0;
  if (is_controlled) {
    var parent_node = (
      /** @type {Element} */
      node
    );
    anchor = hydrating ? set_hydrate_node(get_first_child(parent_node)) : parent_node.appendChild(create_text());
  }
  if (hydrating) {
    hydrate_next();
  }
  var fallback2 = null;
  var each_array = derived_safe_equal(() => {
    var collection = get_collection();
    return (
      /** @type {V[]} */
      is_array(collection) ? collection : collection == null ? [] : array_from(collection)
    );
  });
  if (dev_fallback_default) {
    tag(each_array, "{#each ...}");
  }
  var array;
  var pending2 = /* @__PURE__ */ new Map();
  var first_run = true;
  function commit(batch) {
    if ((state2.effect.f & DESTROYED) !== 0) {
      return;
    }
    state2.pending.delete(batch);
    state2.fallback = fallback2;
    reconcile(state2, array, anchor, flags2, get_key);
    if (fallback2 !== null) {
      if (array.length === 0) {
        if ((fallback2.f & EFFECT_OFFSCREEN) === 0) {
          resume_effect(fallback2);
        } else {
          fallback2.f ^= EFFECT_OFFSCREEN;
          move(fallback2, null, anchor);
        }
      } else {
        pause_effect(fallback2, () => {
          fallback2 = null;
        });
      }
    }
  }
  function discard(batch) {
    state2.pending.delete(batch);
  }
  var effect2 = block(() => {
    array = /** @type {V[]} */
    get2(each_array);
    var length = array.length;
    let mismatch = false;
    if (hydrating) {
      var is_else = read_hydration_instruction(anchor) === HYDRATION_START_ELSE;
      if (is_else !== (length === 0)) {
        anchor = skip_nodes();
        set_hydrate_node(anchor);
        set_hydrating(false);
        mismatch = true;
      }
    }
    var keys = /* @__PURE__ */ new Set();
    var batch = (
      /** @type {Batch} */
      current_batch
    );
    var defer = should_defer_append();
    for (var index2 = 0; index2 < length; index2 += 1) {
      if (hydrating && hydrate_node.nodeType === COMMENT_NODE && /** @type {Comment} */
      hydrate_node.data === HYDRATION_END) {
        anchor = /** @type {Comment} */
        hydrate_node;
        mismatch = true;
        set_hydrating(false);
      }
      var value = array[index2];
      var key2 = get_key(value, index2);
      if (dev_fallback_default) {
        var key_again = get_key(value, index2);
        if (key2 !== key_again) {
          each_key_volatile(String(index2), String(key2), String(key_again));
        }
      }
      var item = first_run ? null : items.get(key2);
      if (item) {
        if (item.v) internal_set(item.v, value);
        if (item.i) internal_set(item.i, index2);
        if (defer) {
          batch.unskip_effect(item.e);
        }
      } else {
        item = create_item(
          items,
          first_run ? anchor : offscreen_anchor ??= create_text(),
          value,
          key2,
          index2,
          render_fn,
          flags2,
          get_collection
        );
        if (!first_run) {
          item.e.f |= EFFECT_OFFSCREEN;
        }
        items.set(key2, item);
      }
      keys.add(key2);
    }
    if (length === 0 && fallback_fn && !fallback2) {
      if (first_run) {
        fallback2 = branch(() => fallback_fn(anchor));
      } else {
        fallback2 = branch(() => fallback_fn(offscreen_anchor ??= create_text()));
        fallback2.f |= EFFECT_OFFSCREEN;
      }
    }
    if (length > keys.size) {
      if (dev_fallback_default) {
        validate_each_keys(array, get_key);
      } else {
        each_key_duplicate("", "", "");
      }
    }
    if (hydrating && length > 0) {
      set_hydrate_node(skip_nodes());
    }
    if (!first_run) {
      pending2.set(batch, keys);
      if (defer) {
        for (const [key3, item2] of items) {
          if (!keys.has(key3)) {
            batch.skip_effect(item2.e);
          }
        }
        batch.oncommit(commit);
        batch.ondiscard(discard);
      } else {
        commit(batch);
      }
    }
    if (mismatch) {
      set_hydrating(true);
    }
    get2(each_array);
  });
  var state2 = { effect: effect2, flags: flags2, items, pending: pending2, outrogroups: null, fallback: fallback2 };
  first_run = false;
  if (hydrating) {
    anchor = hydrate_node;
  }
}
function skip_to_branch(effect2) {
  while (effect2 !== null && (effect2.f & BRANCH_EFFECT) === 0) {
    effect2 = effect2.next;
  }
  return effect2;
}
function reconcile(state2, array, anchor, flags2, get_key) {
  var is_animated = (flags2 & EACH_IS_ANIMATED) !== 0;
  var length = array.length;
  var items = state2.items;
  var current = skip_to_branch(state2.effect.first);
  var seen;
  var prev = null;
  var to_animate;
  var matched = [];
  var stashed = [];
  var value;
  var key2;
  var effect2;
  var i;
  if (is_animated) {
    for (i = 0; i < length; i += 1) {
      value = array[i];
      key2 = get_key(value, i);
      effect2 = /** @type {EachItem} */
      items.get(key2).e;
      if ((effect2.f & EFFECT_OFFSCREEN) === 0) {
        effect2.nodes?.a?.measure();
        (to_animate ??= /* @__PURE__ */ new Set()).add(effect2);
      }
    }
  }
  for (i = 0; i < length; i += 1) {
    value = array[i];
    key2 = get_key(value, i);
    effect2 = /** @type {EachItem} */
    items.get(key2).e;
    if (state2.outrogroups !== null) {
      for (const group of state2.outrogroups) {
        group.pending.delete(effect2);
        group.done.delete(effect2);
      }
    }
    if ((effect2.f & INERT) !== 0) {
      resume_effect(effect2);
      if (is_animated) {
        effect2.nodes?.a?.unfix();
        (to_animate ??= /* @__PURE__ */ new Set()).delete(effect2);
      }
    }
    if ((effect2.f & EFFECT_OFFSCREEN) !== 0) {
      effect2.f ^= EFFECT_OFFSCREEN;
      if (effect2 === current) {
        move(effect2, null, anchor);
      } else {
        var next2 = prev ? prev.next : current;
        if (effect2 === state2.effect.last) {
          state2.effect.last = effect2.prev;
        }
        if (effect2.prev) effect2.prev.next = effect2.next;
        if (effect2.next) effect2.next.prev = effect2.prev;
        link(state2, prev, effect2);
        link(state2, effect2, next2);
        move(effect2, next2, anchor);
        prev = effect2;
        matched = [];
        stashed = [];
        current = skip_to_branch(prev.next);
        continue;
      }
    }
    if (effect2 !== current) {
      if (seen !== void 0 && seen.has(effect2)) {
        if (matched.length < stashed.length) {
          var start = stashed[0];
          var j;
          prev = start.prev;
          var a = matched[0];
          var b = matched[matched.length - 1];
          for (j = 0; j < matched.length; j += 1) {
            move(matched[j], start, anchor);
          }
          for (j = 0; j < stashed.length; j += 1) {
            seen.delete(stashed[j]);
          }
          link(state2, a.prev, b.next);
          link(state2, prev, a);
          link(state2, b, start);
          current = start;
          prev = b;
          i -= 1;
          matched = [];
          stashed = [];
        } else {
          seen.delete(effect2);
          move(effect2, current, anchor);
          link(state2, effect2.prev, effect2.next);
          link(state2, effect2, prev === null ? state2.effect.first : prev.next);
          link(state2, prev, effect2);
          prev = effect2;
        }
        continue;
      }
      matched = [];
      stashed = [];
      while (current !== null && current !== effect2) {
        (seen ??= /* @__PURE__ */ new Set()).add(current);
        stashed.push(current);
        current = skip_to_branch(current.next);
      }
      if (current === null) {
        continue;
      }
    }
    if ((effect2.f & EFFECT_OFFSCREEN) === 0) {
      matched.push(effect2);
    }
    prev = effect2;
    current = skip_to_branch(effect2.next);
  }
  if (state2.outrogroups !== null) {
    for (const group of state2.outrogroups) {
      if (group.pending.size === 0) {
        destroy_effects(state2, array_from(group.done));
        state2.outrogroups?.delete(group);
      }
    }
    if (state2.outrogroups.size === 0) {
      state2.outrogroups = null;
    }
  }
  if (current !== null || seen !== void 0) {
    var to_destroy = [];
    if (seen !== void 0) {
      for (effect2 of seen) {
        if ((effect2.f & INERT) === 0) {
          to_destroy.push(effect2);
        }
      }
    }
    while (current !== null) {
      if ((current.f & INERT) === 0 && current !== state2.fallback) {
        to_destroy.push(current);
      }
      current = skip_to_branch(current.next);
    }
    var destroy_length = to_destroy.length;
    if (destroy_length > 0) {
      var controlled_anchor = (flags2 & EACH_IS_CONTROLLED) !== 0 && length === 0 ? anchor : null;
      if (is_animated) {
        for (i = 0; i < destroy_length; i += 1) {
          to_destroy[i].nodes?.a?.measure();
        }
        for (i = 0; i < destroy_length; i += 1) {
          to_destroy[i].nodes?.a?.fix();
        }
      }
      pause_effects(state2, to_destroy, controlled_anchor);
    }
  }
  if (is_animated) {
    queue_micro_task(() => {
      if (to_animate === void 0) return;
      for (effect2 of to_animate) {
        effect2.nodes?.a?.apply();
      }
    });
  }
}
function create_item(items, anchor, value, key2, index2, render_fn, flags2, get_collection) {
  var v = (flags2 & EACH_ITEM_REACTIVE) !== 0 ? (flags2 & EACH_ITEM_IMMUTABLE) === 0 ? mutable_source(value, false, false) : source(value) : null;
  var i = (flags2 & EACH_INDEX_REACTIVE) !== 0 ? source(index2) : null;
  if (dev_fallback_default && v) {
    v.trace = () => {
      get_collection()[i?.v ?? index2];
    };
  }
  return {
    v,
    i,
    e: branch(() => {
      render_fn(anchor, v ?? value, i ?? index2, get_collection);
      return () => {
        items.delete(key2);
      };
    })
  };
}
function move(effect2, next2, anchor) {
  if (!effect2.nodes) return;
  var node = effect2.nodes.start;
  var end = effect2.nodes.end;
  var dest = next2 && (next2.f & EFFECT_OFFSCREEN) === 0 ? (
    /** @type {EffectNodes} */
    next2.nodes.start
  ) : anchor;
  while (node !== null) {
    var next_node = (
      /** @type {TemplateNode} */
      get_next_sibling(node)
    );
    dest.before(node);
    if (node === end) {
      return;
    }
    node = next_node;
  }
}
function link(state2, prev, next2) {
  if (prev === null) {
    state2.effect.first = next2;
  } else {
    prev.next = next2;
  }
  if (next2 === null) {
    state2.effect.last = prev;
  } else {
    next2.prev = prev;
  }
}
function validate_each_keys(array, key_fn) {
  const keys = /* @__PURE__ */ new Map();
  const length = array.length;
  for (let i = 0; i < length; i++) {
    const key2 = key_fn(array[i], i);
    if (keys.has(key2)) {
      const a = String(keys.get(key2));
      const b = String(i);
      let k = String(key2);
      if (k.startsWith("[object ")) k = null;
      each_key_duplicate(a, b, k);
    }
    keys.set(key2, i);
  }
}

// node_modules/svelte/src/internal/client/dom/blocks/html.js
function check_hash(element2, server_hash, value) {
  if (!server_hash || server_hash === hash(String(value ?? ""))) return;
  let location;
  const loc = element2.__svelte_meta?.loc;
  if (loc) {
    location = `near ${loc.file}:${loc.line}:${loc.column}`;
  } else if (dev_current_component_function?.[FILENAME]) {
    location = `in ${dev_current_component_function[FILENAME]}`;
  }
  hydration_html_changed(sanitize_location(location));
}
function html(node, get_value, is_controlled = false, svg = false, mathml = false, skip_warning = false) {
  var anchor = node;
  var value = "";
  if (is_controlled) {
    var parent_node = (
      /** @type {Element} */
      node
    );
    if (hydrating) {
      anchor = set_hydrate_node(get_first_child(parent_node));
    }
  }
  template_effect(() => {
    var effect2 = (
      /** @type {Effect} */
      active_effect
    );
    if (value === (value = get_value() ?? "")) {
      if (hydrating) hydrate_next();
      return;
    }
    if (is_controlled && !hydrating) {
      effect2.nodes = null;
      parent_node.innerHTML = /** @type {string} */
      value;
      if (value !== "") {
        assign_nodes(
          /** @type {TemplateNode} */
          get_first_child(parent_node),
          /** @type {TemplateNode} */
          parent_node.lastChild
        );
      }
      return;
    }
    if (effect2.nodes !== null) {
      remove_effect_dom(
        effect2.nodes.start,
        /** @type {TemplateNode} */
        effect2.nodes.end
      );
      effect2.nodes = null;
    }
    if (value === "") return;
    if (hydrating) {
      var hash2 = (
        /** @type {Comment} */
        hydrate_node.data
      );
      var next2 = hydrate_next();
      var last = next2;
      while (next2 !== null && (next2.nodeType !== COMMENT_NODE || /** @type {Comment} */
      next2.data !== "")) {
        last = next2;
        next2 = get_next_sibling(next2);
      }
      if (next2 === null) {
        hydration_mismatch();
        throw HYDRATION_ERROR;
      }
      if (dev_fallback_default && !skip_warning) {
        check_hash(
          /** @type {Element} */
          next2.parentNode,
          hash2,
          value
        );
      }
      assign_nodes(hydrate_node, last);
      anchor = set_hydrate_node(next2);
      return;
    }
    var ns = svg ? NAMESPACE_SVG : mathml ? NAMESPACE_MATHML : void 0;
    var wrapper = (
      /** @type {HTMLTemplateElement | SVGElement | MathMLElement} */
      create_element(svg ? "svg" : mathml ? "math" : "template", ns)
    );
    wrapper.innerHTML = /** @type {any} */
    value;
    var node2 = svg || mathml ? wrapper : (
      /** @type {HTMLTemplateElement} */
      wrapper.content
    );
    assign_nodes(
      /** @type {TemplateNode} */
      get_first_child(node2),
      /** @type {TemplateNode} */
      node2.lastChild
    );
    if (svg || mathml) {
      while (get_first_child(node2)) {
        anchor.before(
          /** @type {TemplateNode} */
          get_first_child(node2)
        );
      }
    } else {
      anchor.before(node2);
    }
  });
}

// node_modules/svelte/src/internal/client/dom/blocks/svelte-component.js
function component(node, get_component, render_fn) {
  var hydration_start_node;
  if (hydrating) {
    hydration_start_node = hydrate_node;
    hydrate_next();
  }
  var branches = new BranchManager(node);
  block(() => {
    var component2 = get_component() ?? null;
    if (hydrating) {
      var data = read_hydration_instruction(
        /** @type {TemplateNode} */
        hydration_start_node
      );
      var server_had_component = data === HYDRATION_START;
      var client_has_component = component2 !== null;
      if (server_had_component !== client_has_component) {
        var anchor = skip_nodes();
        set_hydrate_node(anchor);
        branches.anchor = anchor;
        set_hydrating(false);
        branches.ensure(component2, component2 && ((target) => render_fn(target, component2)));
        set_hydrating(true);
        return;
      }
    }
    branches.ensure(component2, component2 && ((target) => render_fn(target, component2)));
  }, EFFECT_TRANSPARENT);
}

// node_modules/svelte/src/internal/client/dom/css.js
function append_styles(anchor, css) {
  effect(() => {
    var root16 = anchor.getRootNode();
    var target = (
      /** @type {ShadowRoot} */
      root16.host ? (
        /** @type {ShadowRoot} */
        root16
      ) : (
        /** @type {Document} */
        root16.head ?? /** @type {Document} */
        root16.ownerDocument.head
      )
    );
    if (!target.querySelector("#" + css.hash)) {
      const style = create_element("style");
      style.id = css.hash;
      style.textContent = css.code;
      target.appendChild(style);
      if (dev_fallback_default) {
        register_style(css.hash, style);
      }
    }
  });
}

// node_modules/svelte/src/internal/client/dom/elements/actions.js
function action(dom, action2, get_value) {
  effect(() => {
    var payload = untrack(() => action2(dom, get_value?.()) || {});
    if (get_value && payload?.update) {
      var inited = false;
      var prev = (
        /** @type {any} */
        {}
      );
      render_effect(() => {
        var value = get_value();
        deep_read_state(value);
        if (inited && safe_not_equal(prev, value)) {
          prev = value;
          payload.update(value);
        }
      });
      inited = true;
    }
    if (payload?.destroy) {
      return () => (
        /** @type {Function} */
        payload.destroy()
      );
    }
  });
}

// node_modules/svelte/src/internal/shared/attributes.js
var whitespace = [..." 	\n\r\f\xA0\v\uFEFF"];
function to_class(value, hash2, directives) {
  var classname = value == null ? "" : "" + value;
  if (hash2) {
    classname = classname ? classname + " " + hash2 : hash2;
  }
  if (directives) {
    for (var key2 of Object.keys(directives)) {
      if (directives[key2]) {
        classname = classname ? classname + " " + key2 : key2;
      } else if (classname.length) {
        var len = key2.length;
        var a = 0;
        while ((a = classname.indexOf(key2, a)) >= 0) {
          var b = a + len;
          if ((a === 0 || whitespace.includes(classname[a - 1])) && (b === classname.length || whitespace.includes(classname[b]))) {
            classname = (a === 0 ? "" : classname.substring(0, a)) + classname.substring(b + 1);
          } else {
            a = b;
          }
        }
      }
    }
  }
  return classname === "" ? null : classname;
}
function append_styles2(styles, important = false) {
  var separator = important ? " !important;" : ";";
  var css = "";
  for (var key2 of Object.keys(styles)) {
    var value = styles[key2];
    if (value != null && value !== "") {
      css += " " + key2 + ": " + value + separator;
    }
  }
  return css;
}
function to_css_name(name) {
  if (name[0] !== "-" || name[1] !== "-") {
    return name.toLowerCase();
  }
  return name;
}
function to_style(value, styles) {
  if (styles) {
    var new_style = "";
    var normal_styles;
    var important_styles;
    if (Array.isArray(styles)) {
      normal_styles = styles[0];
      important_styles = styles[1];
    } else {
      normal_styles = styles;
    }
    if (value) {
      value = String(value).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var in_str = false;
      var in_apo = 0;
      var in_comment = false;
      var reserved_names = [];
      if (normal_styles) {
        reserved_names.push(...Object.keys(normal_styles).map(to_css_name));
      }
      if (important_styles) {
        reserved_names.push(...Object.keys(important_styles).map(to_css_name));
      }
      var start_index = 0;
      var name_index = -1;
      const len = value.length;
      for (var i = 0; i < len; i++) {
        var c = value[i];
        if (in_comment) {
          if (c === "/" && value[i - 1] === "*") {
            in_comment = false;
          }
        } else if (in_str) {
          if (in_str === c) {
            in_str = false;
          }
        } else if (c === "/" && value[i + 1] === "*") {
          in_comment = true;
        } else if (c === '"' || c === "'") {
          in_str = c;
        } else if (c === "(") {
          in_apo++;
        } else if (c === ")") {
          in_apo--;
        }
        if (!in_comment && in_str === false && in_apo === 0) {
          if (c === ":" && name_index === -1) {
            name_index = i;
          } else if (c === ";" || i === len - 1) {
            if (name_index !== -1) {
              var name = to_css_name(value.substring(start_index, name_index).trim());
              if (!reserved_names.includes(name)) {
                if (c !== ";") {
                  i++;
                }
                var property = value.substring(start_index, i).trim();
                new_style += " " + property + ";";
              }
            }
            start_index = i + 1;
            name_index = -1;
          }
        }
      }
    }
    if (normal_styles) {
      new_style += append_styles2(normal_styles);
    }
    if (important_styles) {
      new_style += append_styles2(important_styles, true);
    }
    new_style = new_style.trim();
    return new_style === "" ? null : new_style;
  }
  return value == null ? null : String(value);
}

// node_modules/svelte/src/internal/client/dom/elements/class.js
function set_class(dom, is_html, value, hash2, prev_classes, next_classes) {
  var prev = (
    /** @type {any} */
    dom[CLASS_CACHE]
  );
  if (hydrating || prev !== value || prev === void 0) {
    var next_class_name = to_class(value, hash2, next_classes);
    if (!hydrating || next_class_name !== dom.getAttribute("class")) {
      if (next_class_name == null) {
        dom.removeAttribute("class");
      } else if (is_html) {
        dom.className = next_class_name;
      } else {
        dom.setAttribute("class", next_class_name);
      }
    }
    dom[CLASS_CACHE] = value;
  } else if (next_classes && prev_classes !== next_classes) {
    for (var key2 in next_classes) {
      var is_present = !!next_classes[key2];
      if (prev_classes == null || is_present !== !!prev_classes[key2]) {
        dom.classList.toggle(key2, is_present);
      }
    }
  }
  return next_classes;
}

// node_modules/svelte/src/internal/client/dom/elements/style.js
function update_styles(dom, prev = {}, next2, priority) {
  for (var key2 in next2) {
    var value = next2[key2];
    if (prev[key2] !== value) {
      if (next2[key2] == null) {
        dom.style.removeProperty(key2);
      } else {
        dom.style.setProperty(key2, value, priority);
      }
    }
  }
}
function set_style(dom, value, prev_styles, next_styles) {
  var prev = (
    /** @type {any} */
    dom[STYLE_CACHE]
  );
  if (hydrating || prev !== value) {
    var next_style_attr = to_style(value, next_styles);
    if (!hydrating || next_style_attr !== dom.getAttribute("style")) {
      if (next_style_attr == null) {
        dom.removeAttribute("style");
      } else {
        dom.style.cssText = next_style_attr;
      }
    }
    dom[STYLE_CACHE] = value;
  } else if (next_styles) {
    if (Array.isArray(next_styles)) {
      update_styles(dom, prev_styles?.[0], next_styles[0]);
      update_styles(dom, prev_styles?.[1], next_styles[1], "important");
    } else {
      update_styles(dom, prev_styles, next_styles);
    }
  }
  return next_styles;
}

// node_modules/svelte/src/internal/client/dom/elements/bindings/select.js
function select_option(select, value, mounting = false) {
  if (select.multiple) {
    if (value == void 0) {
      return;
    }
    if (!is_array(value)) {
      return select_multiple_invalid_value();
    }
    for (var option of select.options) {
      option.selected = value.includes(get_option_value(option));
    }
    return;
  }
  for (option of select.options) {
    var option_value = get_option_value(option);
    if (is(option_value, value)) {
      option.selected = true;
      return;
    }
  }
  if (!mounting || value !== void 0) {
    select.selectedIndex = -1;
  }
}
function init_select(select) {
  var observer = new MutationObserver(() => {
    if ("__value" in select) {
      select_option(select, select.__value);
    }
  });
  observer.observe(select, {
    // Listen to option element changes
    childList: true,
    subtree: true,
    // because of <optgroup>
    // Listen to option element value attribute changes
    // (doesn't get notified of select value changes,
    // because that property is not reflected as an attribute)
    attributes: true,
    attributeFilter: ["value"]
  });
  teardown(() => {
    observer.disconnect();
  });
}
function bind_select_value(select, get3, set2 = get3) {
  var batches = /* @__PURE__ */ new WeakSet();
  var mounting = true;
  listen_to_event_and_reset_event(select, "change", (is_reset) => {
    var query = is_reset ? "[selected]" : ":checked";
    var value;
    if (select.multiple) {
      value = [].map.call(select.querySelectorAll(query), get_option_value);
    } else {
      var selected_option = select.querySelector(query) ?? // will fall back to first non-disabled option if no option is selected
      select.querySelector("option:not([disabled])");
      value = selected_option && get_option_value(selected_option);
    }
    set2(value);
    select.__value = value;
    if (current_batch !== null) {
      batches.add(current_batch);
    }
  });
  effect(() => {
    var value = get3();
    if (select === document.activeElement) {
      var batch = (
        /** @type {Batch} */
        async_mode_flag ? previous_batch : current_batch
      );
      if (batches.has(batch)) {
        return;
      }
    }
    select_option(select, value, mounting);
    if (mounting && value === void 0) {
      var selected_option = select.querySelector(":checked");
      if (selected_option !== null) {
        value = get_option_value(selected_option);
        set2(value);
      }
    }
    select.__value = value;
    mounting = false;
  });
  init_select(select);
}
function get_option_value(option) {
  if ("__value" in option) {
    return option.__value;
  } else {
    return option.value;
  }
}

// node_modules/svelte/src/internal/client/dom/elements/attributes.js
var CLASS = Symbol("class");
var STYLE = Symbol("style");
var IS_CUSTOM_ELEMENT = Symbol("is custom element");
var IS_HTML = Symbol("is html");
var LINK_TAG = IS_XHTML ? "link" : "LINK";
var PROGRESS_TAG = IS_XHTML ? "progress" : "PROGRESS";
function remove_input_defaults(input) {
  if (!hydrating) return;
  var already_removed = false;
  var remove_defaults = () => {
    if (already_removed) return;
    already_removed = true;
    if (input.hasAttribute("value")) {
      var value = input.value;
      set_attribute2(input, "value", null);
      input.value = value;
    }
    if (input.hasAttribute("checked")) {
      var checked = input.checked;
      set_attribute2(input, "checked", null);
      input.checked = checked;
    }
  };
  input[FORM_RESET_HANDLER] = remove_defaults;
  queue_micro_task(remove_defaults);
  add_form_reset_listener();
}
function set_value(element2, value) {
  var attributes = get_attributes(element2);
  if (attributes.value === (attributes.value = // treat null and undefined the same for the initial value
  value ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  element2.value === value && (value !== 0 || element2.nodeName !== PROGRESS_TAG)) {
    return;
  }
  element2.value = value ?? "";
}
function set_attribute2(element2, attribute, value, skip_warning) {
  var attributes = get_attributes(element2);
  if (hydrating) {
    attributes[attribute] = element2.getAttribute(attribute);
    if (attribute === "src" || attribute === "srcset" || attribute === "href" && element2.nodeName === LINK_TAG) {
      if (!skip_warning) {
        check_src_in_dev_hydration(element2, attribute, value ?? "");
      }
      return;
    }
  }
  if (attributes[attribute] === (attributes[attribute] = value)) return;
  if (attribute === "loading") {
    element2[LOADING_ATTR_SYMBOL] = value;
  }
  if (value == null) {
    element2.removeAttribute(attribute);
  } else if (typeof value !== "string" && get_setters(element2).includes(attribute)) {
    element2[attribute] = value;
  } else {
    element2.setAttribute(attribute, value);
  }
}
function get_attributes(element2) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    /** @type {any} */
    element2[ATTRIBUTES_CACHE] ??= {
      [IS_CUSTOM_ELEMENT]: element2.nodeName.includes("-"),
      [IS_HTML]: element2.namespaceURI === NAMESPACE_HTML
    }
  );
}
var setters_cache = /* @__PURE__ */ new Map();
function get_setters(element2) {
  var cache_key = element2.getAttribute("is") || element2.nodeName;
  var setters = setters_cache.get(cache_key);
  if (setters) return setters;
  setters_cache.set(cache_key, setters = []);
  var descriptors;
  var proto = element2;
  var element_proto = Element.prototype;
  while (element_proto !== proto) {
    descriptors = get_descriptors(proto);
    for (var key2 in descriptors) {
      if (descriptors[key2].set && // better safe than sorry, we don't want spread attributes to mess with HTML content
      key2 !== "innerHTML" && key2 !== "textContent" && key2 !== "innerText") {
        setters.push(key2);
      }
    }
    proto = get_prototype_of(proto);
  }
  return setters;
}
function check_src_in_dev_hydration(element2, attribute, value) {
  if (!dev_fallback_default) return;
  if (attribute === "srcset" && srcset_url_equal(element2, value)) return;
  if (src_url_equal(element2.getAttribute(attribute) ?? "", value)) return;
  hydration_attribute_changed(
    attribute,
    element2.outerHTML.replace(element2.innerHTML, element2.innerHTML && "..."),
    String(value)
  );
}
function src_url_equal(element_src, url) {
  if (element_src === url) return true;
  return new URL(element_src, document.baseURI).href === new URL(url, document.baseURI).href;
}
function split_srcset(srcset) {
  return srcset.split(",").map((src) => src.trim().split(" ").filter(Boolean));
}
function srcset_url_equal(element2, srcset) {
  var element_urls = split_srcset(element2.srcset);
  var urls = split_srcset(srcset);
  return urls.length === element_urls.length && urls.every(
    ([url, width], i) => width === element_urls[i][1] && // We need to test both ways because Vite will create an a full URL with
    // `new URL(asset, import.meta.url).href` for the client when `base: './'`, and the
    // relative URLs inside srcset are not automatically resolved to absolute URLs by
    // browsers (in contrast to img.src). This means both SSR and DOM code could
    // contain relative or absolute URLs.
    (src_url_equal(element_urls[i][0], url) || src_url_equal(url, element_urls[i][0]))
  );
}

// node_modules/svelte/src/internal/client/dom/elements/bindings/input.js
function bind_value(input, get3, set2 = get3) {
  var batches = /* @__PURE__ */ new WeakSet();
  listen_to_event_and_reset_event(input, "input", async (is_reset) => {
    if (dev_fallback_default && input.type === "checkbox") {
      bind_invalid_checkbox_value();
    }
    var value = is_reset ? input.defaultValue : input.value;
    value = is_numberlike_input(input) ? to_number(value) : value;
    set2(value);
    if (current_batch !== null) {
      batches.add(current_batch);
    }
    await tick();
    if (value !== (value = get3())) {
      var start = input.selectionStart;
      var end = input.selectionEnd;
      var length = input.value.length;
      input.value = value ?? "";
      if (end !== null) {
        var new_length = input.value.length;
        if (start === end && end === length && new_length > length) {
          input.selectionStart = new_length;
          input.selectionEnd = new_length;
        } else {
          input.selectionStart = start;
          input.selectionEnd = Math.min(end, new_length);
        }
      }
    }
  });
  if (
    // If we are hydrating and the value has since changed,
    // then use the updated value from the input instead.
    hydrating && input.defaultValue !== input.value || // If defaultValue is set, then value == defaultValue
    // TODO Svelte 6: remove input.value check and set to empty string?
    untrack(get3) == null && input.value
  ) {
    set2(is_numberlike_input(input) ? to_number(input.value) : input.value);
    if (current_batch !== null) {
      batches.add(current_batch);
    }
  }
  render_effect(() => {
    if (dev_fallback_default && input.type === "checkbox") {
      bind_invalid_checkbox_value();
    }
    var value = get3();
    if (input === document.activeElement) {
      var batch = (
        /** @type {Batch} */
        async_mode_flag ? previous_batch : current_batch
      );
      if (batches.has(batch)) {
        return;
      }
    }
    if (is_numberlike_input(input) && value === to_number(input.value)) {
      return;
    }
    if (input.type === "date" && !value && !input.value) {
      return;
    }
    if (value !== input.value) {
      input.value = value ?? "";
    }
  });
}
function bind_checked(input, get3, set2 = get3) {
  listen_to_event_and_reset_event(input, "change", (is_reset) => {
    var value = is_reset ? input.defaultChecked : input.checked;
    set2(value);
  });
  if (
    // If we are hydrating and the value has since changed,
    // then use the update value from the input instead.
    hydrating && input.defaultChecked !== input.checked || // If defaultChecked is set, then checked == defaultChecked
    untrack(get3) == null
  ) {
    set2(input.checked);
  }
  render_effect(() => {
    var value = get3();
    input.checked = Boolean(value);
  });
}
function is_numberlike_input(input) {
  var type = input.type;
  return type === "number" || type === "range";
}
function to_number(value) {
  return value === "" ? null : +value;
}

// node_modules/svelte/src/internal/client/dom/elements/bindings/this.js
function is_bound_this(bound_value, element_or_component) {
  return bound_value === element_or_component || bound_value?.[STATE_SYMBOL] === element_or_component;
}
function bind_this(element_or_component = {}, update2, get_value, get_parts) {
  var component_effect = (
    /** @type {ComponentContext} */
    component_context.r
  );
  var parent = (
    /** @type {Effect} */
    active_effect
  );
  effect(() => {
    var old_parts;
    var parts;
    render_effect(() => {
      old_parts = parts;
      parts = get_parts?.() || [];
      untrack(() => {
        if (!is_bound_this(get_value(...parts), element_or_component)) {
          update2(element_or_component, ...parts);
          if (old_parts && is_bound_this(get_value(...old_parts), element_or_component)) {
            update2(null, ...old_parts);
          }
        }
      });
    });
    return () => {
      let p = parent;
      while (p !== component_effect && p.parent !== null && p.parent.f & DESTROYING) {
        p = p.parent;
      }
      const teardown2 = () => {
        if (parts && is_bound_this(get_value(...parts), element_or_component)) {
          update2(null, ...parts);
        }
      };
      const original_teardown = p.teardown;
      p.teardown = () => {
        teardown2();
        original_teardown?.();
      };
    };
  });
  return element_or_component;
}

// node_modules/svelte/src/internal/client/reactivity/props.js
function prop(props, key2, flags2, fallback2) {
  var runes = !legacy_mode_flag || (flags2 & PROPS_IS_RUNES) !== 0;
  var bindable = (flags2 & PROPS_IS_BINDABLE) !== 0;
  var lazy = (flags2 & PROPS_IS_LAZY_INITIAL) !== 0;
  var fallback_value = (
    /** @type {V} */
    fallback2
  );
  var fallback_dirty = true;
  var fallback_signal = (
    /** @type {Derived<V> | undefined} */
    void 0
  );
  var get_fallback = () => {
    if (lazy && runes) {
      fallback_signal ??= derived(
        /** @type {() => V} */
        fallback2
      );
      return get2(fallback_signal);
    }
    if (fallback_dirty) {
      fallback_dirty = false;
      fallback_value = lazy ? untrack(
        /** @type {() => V} */
        fallback2
      ) : (
        /** @type {V} */
        fallback2
      );
    }
    return fallback_value;
  };
  let setter;
  if (bindable) {
    var is_entry_props = STATE_SYMBOL in props || LEGACY_PROPS in props;
    setter = get_descriptor(props, key2)?.set ?? (is_entry_props && key2 in props ? (v) => props[key2] = v : void 0);
  }
  var initial_value;
  var is_store_sub = false;
  if (bindable) {
    [initial_value, is_store_sub] = capture_store_binding(() => (
      /** @type {V} */
      props[key2]
    ));
  } else {
    initial_value = /** @type {V} */
    props[key2];
  }
  if (initial_value === void 0 && fallback2 !== void 0) {
    initial_value = get_fallback();
    if (setter) {
      if (runes) props_invalid_value(key2);
      setter(initial_value);
    }
  }
  var getter;
  if (runes) {
    getter = () => {
      var value = (
        /** @type {V} */
        props[key2]
      );
      if (value === void 0) return get_fallback();
      fallback_dirty = true;
      return value;
    };
  } else {
    getter = () => {
      var value = (
        /** @type {V} */
        props[key2]
      );
      if (value !== void 0) {
        fallback_value = /** @type {V} */
        void 0;
      }
      return value === void 0 ? fallback_value : value;
    };
  }
  if (runes && (flags2 & PROPS_IS_UPDATED) === 0) {
    return getter;
  }
  if (setter) {
    var legacy_parent = props.$$legacy;
    return (
      /** @type {() => V} */
      function(value, mutation) {
        if (arguments.length > 0) {
          if (!runes || !mutation || legacy_parent || is_store_sub) {
            setter(mutation ? getter() : value);
          }
          return value;
        }
        return getter();
      }
    );
  }
  var overridden = false;
  var d = ((flags2 & PROPS_IS_IMMUTABLE) !== 0 ? derived : derived_safe_equal)(() => {
    overridden = false;
    return getter();
  });
  if (dev_fallback_default) {
    d.label = key2;
  }
  if (bindable) get2(d);
  var parent_effect = (
    /** @type {Effect} */
    active_effect
  );
  return (
    /** @type {() => V} */
    function(value, mutation) {
      if (arguments.length > 0) {
        const new_value = mutation ? get2(d) : runes && bindable ? proxy(value) : value;
        set(d, new_value);
        overridden = true;
        if (fallback_value !== void 0) {
          fallback_value = new_value;
        }
        return value;
      }
      if (is_destroying_effect && overridden || (parent_effect.f & DESTROYED) !== 0) {
        return d.v;
      }
      return get2(d);
    }
  );
}

// node_modules/svelte/src/legacy/legacy-client.js
function createClassComponent(options) {
  return new Svelte4Component(options);
}
var Svelte4Component = class {
  /** @type {any} */
  #events;
  /** @type {Record<string, any>} */
  #instance;
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(options) {
    var sources = /* @__PURE__ */ new Map();
    var add_source = (key2, value) => {
      var s = mutable_source(value, false, false);
      sources.set(key2, s);
      return s;
    };
    const props = new Proxy(
      { ...options.props || {}, $$events: {} },
      {
        get(target, prop2) {
          return get2(sources.get(prop2) ?? add_source(prop2, Reflect.get(target, prop2)));
        },
        has(target, prop2) {
          if (prop2 === LEGACY_PROPS) return true;
          get2(sources.get(prop2) ?? add_source(prop2, Reflect.get(target, prop2)));
          return Reflect.has(target, prop2);
        },
        set(target, prop2, value) {
          set(sources.get(prop2) ?? add_source(prop2, value), value);
          return Reflect.set(target, prop2, value);
        }
      }
    );
    this.#instance = (options.hydrate ? hydrate : mount)(options.component, {
      target: options.target,
      anchor: options.anchor,
      props,
      context: options.context,
      intro: options.intro ?? false,
      recover: options.recover,
      transformError: options.transformError
    });
    if (!async_mode_flag && (!options?.props?.$$host || options.sync === false)) {
      flushSync();
    }
    this.#events = props.$$events;
    for (const key2 of Object.keys(this.#instance)) {
      if (key2 === "$set" || key2 === "$destroy" || key2 === "$on") continue;
      define_property(this, key2, {
        get() {
          return this.#instance[key2];
        },
        /** @param {any} value */
        set(value) {
          this.#instance[key2] = value;
        },
        enumerable: true
      });
    }
    this.#instance.$set = /** @param {Record<string, any>} next */
    (next2) => {
      Object.assign(props, next2);
    };
    this.#instance.$destroy = () => {
      unmount(this.#instance);
    };
  }
  /** @param {Record<string, any>} props */
  $set(props) {
    this.#instance.$set(props);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(event2, callback) {
    this.#events[event2] = this.#events[event2] || [];
    const cb = (...args) => callback.call(this, ...args);
    this.#events[event2].push(cb);
    return () => {
      this.#events[event2] = this.#events[event2].filter(
        /** @param {any} fn */
        (fn) => fn !== cb
      );
    };
  }
  $destroy() {
    this.#instance.$destroy();
  }
};

// node_modules/svelte/src/internal/client/dom/elements/custom-element.js
var SvelteElement;
if (typeof HTMLElement === "function") {
  SvelteElement = class extends HTMLElement {
    /** The Svelte component constructor */
    $$ctor;
    /** Slots */
    $$s;
    /** @type {any} The Svelte component instance */
    $$c;
    /** Whether or not the custom element is connected */
    $$cn = false;
    /** @type {Record<string, any>} Component props data */
    $$d = {};
    /** `true` if currently in the process of reflecting component props back to attributes */
    $$r = false;
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    $$p_d = {};
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    $$l = {};
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    $$l_u = /* @__PURE__ */ new Map();
    /** @type {any} The managed render effect for reflecting attributes */
    $$me;
    /** @type {ShadowRoot | null} The ShadowRoot of the custom element */
    $$shadowRoot = null;
    /**
     * @param {*} $$componentCtor
     * @param {*} $$slots
     * @param {ShadowRootInit | undefined} shadow_root_init
     */
    constructor($$componentCtor, $$slots, shadow_root_init) {
      super();
      this.$$ctor = $$componentCtor;
      this.$$s = $$slots;
      if (shadow_root_init) {
        this.$$shadowRoot = this.attachShadow(shadow_root_init);
      }
    }
    /**
     * @param {string} type
     * @param {EventListenerOrEventListenerObject} listener
     * @param {boolean | AddEventListenerOptions} [options]
     */
    addEventListener(type, listener, options) {
      this.$$l[type] = this.$$l[type] || [];
      this.$$l[type].push(listener);
      if (this.$$c) {
        const unsub = this.$$c.$on(type, listener);
        this.$$l_u.set(listener, unsub);
      }
      super.addEventListener(type, listener, options);
    }
    /**
     * @param {string} type
     * @param {EventListenerOrEventListenerObject} listener
     * @param {boolean | AddEventListenerOptions} [options]
     */
    removeEventListener(type, listener, options) {
      super.removeEventListener(type, listener, options);
      if (this.$$c) {
        const unsub = this.$$l_u.get(listener);
        if (unsub) {
          unsub();
          this.$$l_u.delete(listener);
        }
      }
    }
    async connectedCallback() {
      this.$$cn = true;
      if (!this.$$c) {
        let create_slot = function(name) {
          return (anchor) => {
            const slot2 = create_element("slot");
            if (name !== "default") slot2.name = name;
            append(anchor, slot2);
          };
        };
        await Promise.resolve();
        if (!this.$$cn || this.$$c) {
          return;
        }
        const $$slots = {};
        const existing_slots = get_custom_elements_slots(this);
        for (const name of this.$$s) {
          if (name in existing_slots) {
            if (name === "default" && !this.$$d.children) {
              this.$$d.children = create_slot(name);
              $$slots.default = true;
            } else {
              $$slots[name] = create_slot(name);
            }
          }
        }
        for (const attribute of this.attributes) {
          const name = this.$$g_p(attribute.name);
          if (!(name in this.$$d)) {
            this.$$d[name] = get_custom_element_value(name, attribute.value, this.$$p_d, "toProp");
          }
        }
        for (const key2 in this.$$p_d) {
          if (!(key2 in this.$$d) && this[key2] !== void 0) {
            this.$$d[key2] = this[key2];
            delete this[key2];
          }
        }
        this.$$c = createClassComponent({
          component: this.$$ctor,
          target: this.$$shadowRoot || this,
          props: {
            ...this.$$d,
            $$slots,
            $$host: this
          }
        });
        this.$$me = effect_root(() => {
          render_effect(() => {
            this.$$r = true;
            for (const key2 of object_keys(this.$$c)) {
              if (!this.$$p_d[key2]?.reflect) continue;
              this.$$d[key2] = this.$$c[key2];
              const attribute_value = get_custom_element_value(
                key2,
                this.$$d[key2],
                this.$$p_d,
                "toAttribute"
              );
              if (attribute_value == null) {
                this.removeAttribute(this.$$p_d[key2].attribute || key2);
              } else {
                this.setAttribute(this.$$p_d[key2].attribute || key2, attribute_value);
              }
            }
            this.$$r = false;
          });
        });
        for (const type in this.$$l) {
          for (const listener of this.$$l[type]) {
            const unsub = this.$$c.$on(type, listener);
            this.$$l_u.set(listener, unsub);
          }
        }
        this.$$l = {};
      }
    }
    // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
    // and setting attributes through setAttribute etc, this is helpful
    /**
     * @param {string} attr
     * @param {string} _oldValue
     * @param {string} newValue
     */
    attributeChangedCallback(attr2, _oldValue, newValue) {
      if (this.$$r) return;
      attr2 = this.$$g_p(attr2);
      this.$$d[attr2] = get_custom_element_value(attr2, newValue, this.$$p_d, "toProp");
      this.$$c?.$set({ [attr2]: this.$$d[attr2] });
    }
    disconnectedCallback() {
      this.$$cn = false;
      Promise.resolve().then(() => {
        if (!this.$$cn && this.$$c) {
          this.$$c.$destroy();
          this.$$me();
          this.$$c = void 0;
        }
      });
    }
    /**
     * @param {string} attribute_name
     */
    $$g_p(attribute_name) {
      return object_keys(this.$$p_d).find(
        (key2) => this.$$p_d[key2].attribute === attribute_name || !this.$$p_d[key2].attribute && key2.toLowerCase() === attribute_name
      ) || attribute_name;
    }
  };
}
function get_custom_element_value(prop2, value, props_definition, transform) {
  const type = props_definition[prop2]?.type;
  value = type === "Boolean" && typeof value !== "boolean" ? value != null : value;
  if (!transform || !props_definition[prop2]) {
    return value;
  } else if (transform === "toAttribute") {
    switch (type) {
      case "Object":
      case "Array":
        return value == null ? null : JSON.stringify(value);
      case "Boolean":
        return value ? "" : null;
      case "Number":
        return value == null ? null : value;
      default:
        return value;
    }
  } else {
    switch (type) {
      case "Object":
      case "Array":
        return value && JSON.parse(value);
      case "Boolean":
        return value;
      // conversion already handled above
      case "Number":
        return value != null ? +value : value;
      default:
        return value;
    }
  }
}
function get_custom_elements_slots(element2) {
  const result = {};
  element2.childNodes.forEach((node) => {
    result[
      /** @type {Element} node */
      node.slot || "default"
    ] = true;
  });
  return result;
}
function create_custom_element(Component, props_definition, slots, exports, shadow_root_init, extend) {
  let Class = class extends SvelteElement {
    constructor() {
      super(Component, slots, shadow_root_init);
      this.$$p_d = props_definition;
    }
    static get observedAttributes() {
      return object_keys(props_definition).map(
        (key2) => (props_definition[key2].attribute || key2).toLowerCase()
      );
    }
  };
  object_keys(props_definition).forEach((prop2) => {
    define_property(Class.prototype, prop2, {
      get() {
        return this.$$c && prop2 in this.$$c ? this.$$c[prop2] : this.$$d[prop2];
      },
      set(value) {
        value = get_custom_element_value(prop2, value, props_definition);
        this.$$d[prop2] = value;
        var component2 = this.$$c;
        if (component2) {
          var setter = get_descriptor(component2, prop2)?.get;
          if (setter) {
            component2[prop2] = value;
          } else {
            component2.$set({ [prop2]: value });
          }
        }
      }
    });
  });
  exports.forEach((property) => {
    define_property(Class.prototype, property, {
      get() {
        return this.$$c?.[property];
      }
    });
  });
  if (extend) {
    Class = extend(Class);
  }
  Component.element = /** @type {any} */
  Class;
  return Class;
}

// Resources/Private/JavaScript/store.svelte.js
import Icons from "@typo3/backend/icons.js";

// Resources/Private/JavaScript/shapeRegistry.js
var shapes = /* @__PURE__ */ new Map();
function registerShape(name, component2, options = {}) {
  shapes.set(name, {
    ...shapes.get(name),
    component: component2,
    ...options
  });
}
function registerShapeDefinition(name, definition) {
  shapes.set(name, {
    ...shapes.get(name),
    ...definition
  });
}
function resolveShapeComponent(shape) {
  return (shapes.get(shape) ?? shapes.get("rectangle"))?.component;
}
function createShapeDefaults(shape, context = {}) {
  const defaults = (shapes.get(shape) ?? shapes.get("rectangle"))?.defaults;
  return typeof defaults === "function" ? defaults(context) : { ...defaults };
}

// Resources/Private/JavaScript/focuspointData.js
function clamp(value, fallback2 = 0) {
  const number2 = Number(value);
  return Math.max(0, Math.min(1, Number.isFinite(number2) ? number2 : fallback2));
}
function normalizeVertices(vertices) {
  if (!Array.isArray(vertices)) {
    return [];
  }
  return vertices.filter((vertex) => vertex && typeof vertex === "object").map((vertex) => ({
    ...vertex,
    x: clamp(vertex.x),
    y: clamp(vertex.y)
  }));
}
function parseFocuspoints(value) {
  if (Array.isArray(value)) {
    return value;
  }
  if (typeof value !== "string" || value.trim() === "") {
    return [];
  }
  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}
function normalizeFocuspoints(points, config = {}) {
  const allowedShapes = Array.isArray(config.allowedShapes) && config.allowedShapes.length > 0 ? config.allowedShapes : ["rectangle"];
  const fallbackShape = allowedShapes[0];
  const geometryDefaults = {
    width: Number.parseFloat(config.defaultWidth) || 0.2,
    height: Number.parseFloat(config.defaultHeight) || 0.2
  };
  return parseFocuspoints(points).filter((focuspoint) => focuspoint && typeof focuspoint === "object").map((focuspoint) => {
    const requestedShape = typeof focuspoint.shape === "string" ? focuspoint.shape : fallbackShape;
    const shape = allowedShapes.includes(requestedShape) ? requestedShape : fallbackShape;
    const normalized = {
      ...createShapeDefaults(shape, geometryDefaults),
      ...focuspoint,
      shape
    };
    for (const property of ["x", "y", "width", "height", "x2", "y2"]) {
      if (property in normalized) {
        normalized[property] = clamp(normalized[property]);
      }
    }
    if (shape === "polygon") {
      normalized.vertices = normalizeVertices(normalized.vertices);
    }
    return normalized;
  });
}
function toPersistedFocuspoints(points) {
  return parseFocuspoints(points).map(({ active, ...focuspoint }) => focuspoint);
}
function serializeFocuspoints(points) {
  return JSON.stringify(toPersistedFocuspoints(points));
}

// Resources/Private/JavaScript/store.svelte.js
var wizardConfigStore = writable(null);
var focuspoints = writable([]);
var focuspointChannelName = (itemFormElName) => `focuspoint:${itemFormElName}`;
var initStores = (initialValue, wizardConfig) => {
  const parsedWizardConfig = JSON.parse(wizardConfig);
  const allowedShapes = Array.isArray(parsedWizardConfig.allowedShapes) && parsedWizardConfig.allowedShapes.length > 0 ? parsedWizardConfig.allowedShapes : ["rectangle"];
  wizardConfigStore.set({ ...parsedWizardConfig, allowedShapes });
  const initialFocuspoints = normalizeFocuspoints(initialValue, { ...parsedWizardConfig, allowedShapes });
  focuspoints.set(initialFocuspoints);
};
var fieldMeetsCondition = (fieldName, point2) => {
  const condition = get(wizardConfigStore).fields[fieldName].displayCond;
  if (!condition) {
    return true;
  }
  const parts = condition.split(":");
  if (parts.length < 4 || parts[0] !== "FIELD") {
    return true;
  }
  const [type, field, operator, value] = parts;
  if (!Object.hasOwn(point2, field)) {
    return true;
  }
  switch (operator) {
    case "REQ":
      return point2[field] !== null && point2[field] !== "";
    case "!=":
      return point2[field] !== value;
    case "=":
      return point2[field] === value;
    case ">": {
      const pointVal = parseInt(point2[field], 10);
      const compareVal = parseInt(value, 10);
      return !isNaN(pointVal) && !isNaN(compareVal) && pointVal > compareVal;
    }
    case "<": {
      const pointVal = parseInt(point2[field], 10);
      const compareVal = parseInt(value, 10);
      return !isNaN(pointVal) && !isNaN(compareVal) && pointVal < compareVal;
    }
    case ">=": {
      const pointVal = parseInt(point2[field], 10);
      const compareVal = parseInt(value, 10);
      return !isNaN(pointVal) && !isNaN(compareVal) && pointVal >= compareVal;
    }
    case "<=": {
      const pointVal = parseInt(point2[field], 10);
      const compareVal = parseInt(value, 10);
      return !isNaN(pointVal) && !isNaN(compareVal) && pointVal <= compareVal;
    }
    case "IN":
      return value.split(",").includes(point2[field]);
    case "!IN":
      return !value.split(",").includes(point2[field]);
    case "-": {
      const range = value.split("-");
      if (range.length !== 2) return false;
      const [min, max] = range;
      const pointVal = parseInt(point2[field], 10);
      return !isNaN(pointVal) && pointVal >= parseInt(min, 10) && pointVal <= parseInt(max, 10);
    }
    case "!-": {
      const range = value.split("-");
      if (range.length !== 2) return false;
      const [min, max] = range;
      const pointVal = parseInt(point2[field], 10);
      return !isNaN(pointVal) && (pointVal < parseInt(min, 10) || pointVal > parseInt(max, 10));
    }
    default:
      return false;
  }
};
var createNewFocuspoint = () => {
  const config = get(wizardConfigStore);
  const shape = config.allowedShapes[0] ?? "rectangle";
  const newFocuspoint = Object.keys(config.fields).reduce(
    (acc, key2) => {
      acc[key2] = config.fields[key2].default ?? null;
      return acc;
    },
    {}
  );
  Object.assign(newFocuspoint, createShapeDefaults(shape, {
    x: 0.333,
    y: 0.333,
    width: parseFloat(config.defaultWidth) || 0.2,
    height: parseFloat(config.defaultHeight) || 0.2
  }));
  newFocuspoint.shape = shape;
  const newFocuspointIndex = get(focuspoints).length;
  focuspoints.update((focuspoints2) => [...focuspoints2, newFocuspoint]);
  activateFocuspoint(newFocuspointIndex);
};
var iconStore = writable({});
var getIcon = async (iconName) => {
  const store = get(iconStore);
  if (store[iconName]) {
    return;
  }
  Icons.getIcon(iconName, Icons.sizes.small).then((html2) => {
    iconStore.update((store2) => {
      store2[iconName] = html2;
      return store2;
    });
  });
};
var activateFocuspoint = (index2) => {
  focuspoints.update((store) => store.map((focuspoint, currentIndex) => ({ ...focuspoint, active: currentIndex === index2 })));
};
var deactivateAllFocuspoints = () => {
  focuspoints.update((store) => store.map((focuspoint) => ({ ...focuspoint, active: false })));
};
var toggleFocuspoint = (index2) => {
  focuspoints.update((store) => {
    const shouldActivate = !store[index2]?.active;
    return store.map((focuspoint, currentIndex) => ({
      ...focuspoint,
      active: shouldActivate && currentIndex === index2
    }));
  });
};
var focusPointName = (index2) => {
  const config = get(wizardConfigStore);
  const nameFields = Object.entries(config.fields).filter(([key2, value]) => {
    return value["useAsName"] === true || value["useAsName"] === "true" || value["useAsName"] === "1" || value["useAsName"] === 1;
  }).map(([key2, value]) => {
    return key2;
  });
  const defaultName = "Focus Point " + (index2 + 1);
  if (nameFields.length === 0) {
    return defaultName;
  }
  const store = get(focuspoints);
  const names = Object.entries(store[index2]).filter(([key2, value]) => {
    return nameFields.includes(key2) && value !== null && value !== "";
  }).map(([key2, value]) => {
    return value;
  });
  if (names.length === 0) {
    return defaultName;
  }
  return names.join(", ");
};

// Resources/Private/JavaScript/components/Shapes/Crosshair.svelte
import interact from "interactjs";
Crosshair[FILENAME] = "Resources/Private/JavaScript/components/Shapes/Crosshair.svelte";
var root = add_locations(from_html(`<svg aria-hidden="true"><line class="svelte-1lemjwi"></line><line class="svelte-1lemjwi"></line></svg> <button type="button" aria-label="Move crosshair point"></button>`, 1), Crosshair[FILENAME], [[72, 0, [[80, 4], [86, 4]]], [94, 0]]);
var $$css = {
  hash: "svelte-1lemjwi",
  code: "\n    .focuspoint-crosshair.svelte-1lemjwi {\n        position: absolute;\n        inset: 0;\n        overflow: visible;\n        pointer-events: none;\n        transition: opacity 0.15s ease;\n    }\n\n    .focuspoint-crosshair.svelte-1lemjwi line:where(.svelte-1lemjwi) {\n        stroke: rgba(255, 255, 255, 0.95);\n        stroke-width: 2;\n        stroke-linecap: round;\n        vector-effect: non-scaling-stroke;\n    }\n\n    .focuspoint-crosshair.active.svelte-1lemjwi line:where(.svelte-1lemjwi) {\n        stroke: #ff8700;\n    }\n\n    .crosshair-handle.svelte-1lemjwi {\n        position: absolute;\n        z-index: 5;\n        width: 14px;\n        height: 14px;\n        padding: 0;\n        border: 2px solid rgba(255, 255, 255, 0.95);\n        border-radius: 50%;\n        background: rgba(0, 0, 0, 0.8);\n        cursor: grab;\n        transition: opacity 0.15s ease, border-color 0.15s ease;\n    }\n\n    .crosshair-handle.active.svelte-1lemjwi {\n        border-color: #ff8700;\n    }\n\n    .crosshair-handle.svelte-1lemjwi:active {\n        cursor: grabbing;\n    }\n\n    .opacity-0.svelte-1lemjwi {\n        opacity: 0;\n    }\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3Jvc3NoYWlyLnN2ZWx0ZSIsInNvdXJjZXMiOlsiQ3Jvc3NoYWlyLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuICAgIGltcG9ydCBpbnRlcmFjdCBmcm9tICdpbnRlcmFjdGpzJ1xuICAgIGltcG9ydCB7YWN0aXZhdGVGb2N1c3BvaW50LCBmb2N1c3BvaW50c30gZnJvbSAnLi4vLi4vc3RvcmUuc3ZlbHRlLmpzJ1xuXG4gICAgbGV0IHtcbiAgICAgICAgZm9jdXNwb2ludCxcbiAgICAgICAgaW5kZXgsXG4gICAgICAgIGluaXRpYWxpemVkLFxuICAgICAgICBjYW52YXNXaWR0aCxcbiAgICAgICAgY2FudmFzSGVpZ2h0XG4gICAgfSA9ICRwcm9wcygpXG5cbiAgICBjb25zdCBzaXplID0gMjJcblxuICAgIGZ1bmN0aW9uIGdldFgoKSB7XG4gICAgICAgIHJldHVybiAoZm9jdXNwb2ludD8ueCA/PyAwKSAqIGNhbnZhc1dpZHRoXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0WSgpIHtcbiAgICAgICAgcmV0dXJuIChmb2N1c3BvaW50Py55ID8/IDApICogY2FudmFzSGVpZ2h0XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNsYW1wKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCB2YWx1ZSkpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3Jvc3NoYWlySW50ZXJhY3Rpb24obm9kZSkge1xuICAgICAgICBjb25zdCBpbnRlcmFjdGFibGUgPSBpbnRlcmFjdChub2RlKS5kcmFnZ2FibGUoe1xuICAgICAgICAgICAgbW9kaWZpZXJzOiBbXG4gICAgICAgICAgICAgICAgaW50ZXJhY3QubW9kaWZpZXJzLnJlc3RyaWN0UmVjdCh7XG4gICAgICAgICAgICAgICAgICAgIHJlc3RyaWN0aW9uOiAncGFyZW50JyxcbiAgICAgICAgICAgICAgICAgICAgZW5kT25seTogZmFsc2UsXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgbGlzdGVuZXJzOiB7XG4gICAgICAgICAgICAgICAgc3RhcnQoKSB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGl2YXRlRm9jdXNwb2ludChpbmRleClcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgbW92ZShldmVudCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2FudmFzV2lkdGggPD0gMCB8fCBjYW52YXNIZWlnaHQgPD0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBmb2N1c3BvaW50cy51cGRhdGUoKGl0ZW1zKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXMubWFwKChwb2ludCwgY3VycmVudEluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRJbmRleCAhPT0gaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBvaW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VycmVudFggPSAocG9pbnQueCA/PyAwKSAqIGNhbnZhc1dpZHRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VycmVudFkgPSAocG9pbnQueSA/PyAwKSAqIGNhbnZhc0hlaWdodFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ucG9pbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IGNsYW1wKChjdXJyZW50WCArIGV2ZW50LmR4KSAvIGNhbnZhc1dpZHRoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogY2xhbXAoKGN1cnJlbnRZICsgZXZlbnQuZHkpIC8gY2FudmFzSGVpZ2h0KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pXG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRlc3Ryb3koKSB7XG4gICAgICAgICAgICAgICAgaW50ZXJhY3RhYmxlLnVuc2V0KClcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuPHN2Z1xuICAgIGNsYXNzPVwiZm9jdXNwb2ludC1jcm9zc2hhaXJcIlxuICAgIGNsYXNzOmFjdGl2ZT17Zm9jdXNwb2ludD8uYWN0aXZlfVxuICAgIGNsYXNzOm9wYWNpdHktMD17IWluaXRpYWxpemVkfVxuICAgIHdpZHRoPXtjYW52YXNXaWR0aH1cbiAgICBoZWlnaHQ9e2NhbnZhc0hlaWdodH1cbiAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuPlxuICAgIDxsaW5lXG4gICAgICAgIHgxPXtnZXRYKCkgLSBzaXplfVxuICAgICAgICB5MT17Z2V0WSgpfVxuICAgICAgICB4Mj17Z2V0WCgpICsgc2l6ZX1cbiAgICAgICAgeTI9e2dldFkoKX1cbiAgICAvPlxuICAgIDxsaW5lXG4gICAgICAgIHgxPXtnZXRYKCl9XG4gICAgICAgIHkxPXtnZXRZKCkgLSBzaXplfVxuICAgICAgICB4Mj17Z2V0WCgpfVxuICAgICAgICB5Mj17Z2V0WSgpICsgc2l6ZX1cbiAgICAvPlxuPC9zdmc+XG5cbjxidXR0b25cbiAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICB1c2U6Y3Jvc3NoYWlySW50ZXJhY3Rpb25cbiAgICBjbGFzcz1cImNyb3NzaGFpci1oYW5kbGVcIlxuICAgIGNsYXNzOmFjdGl2ZT17Zm9jdXNwb2ludD8uYWN0aXZlfVxuICAgIGNsYXNzOm9wYWNpdHktMD17IWluaXRpYWxpemVkfVxuICAgIHN0eWxlPVwidHJhbnNmb3JtOiB0cmFuc2xhdGUzZCh7Z2V0WCgpfXB4LCB7Z2V0WSgpfXB4LCAwKSB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XCJcbiAgICBvbmNsaWNrPXsoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICBhY3RpdmF0ZUZvY3VzcG9pbnQoaW5kZXgpXG4gICAgfX1cbiAgICBhcmlhLWxhYmVsPVwiTW92ZSBjcm9zc2hhaXIgcG9pbnRcIlxuPjwvYnV0dG9uPlxuXG48c3R5bGU+XG4gICAgLmZvY3VzcG9pbnQtY3Jvc3NoYWlyIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBpbnNldDogMDtcbiAgICAgICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMTVzIGVhc2U7XG4gICAgfVxuXG4gICAgLmZvY3VzcG9pbnQtY3Jvc3NoYWlyIGxpbmUge1xuICAgICAgICBzdHJva2U6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45NSk7XG4gICAgICAgIHN0cm9rZS13aWR0aDogMjtcbiAgICAgICAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kO1xuICAgICAgICB2ZWN0b3ItZWZmZWN0OiBub24tc2NhbGluZy1zdHJva2U7XG4gICAgfVxuXG4gICAgLmZvY3VzcG9pbnQtY3Jvc3NoYWlyLmFjdGl2ZSBsaW5lIHtcbiAgICAgICAgc3Ryb2tlOiAjZmY4NzAwO1xuICAgIH1cblxuICAgIC5jcm9zc2hhaXItaGFuZGxlIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB6LWluZGV4OiA1O1xuICAgICAgICB3aWR0aDogMTRweDtcbiAgICAgICAgaGVpZ2h0OiAxNHB4O1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTUpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgICAgICAgY3Vyc29yOiBncmFiO1xuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMTVzIGVhc2UsIGJvcmRlci1jb2xvciAwLjE1cyBlYXNlO1xuICAgIH1cblxuICAgIC5jcm9zc2hhaXItaGFuZGxlLmFjdGl2ZSB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogI2ZmODcwMDtcbiAgICB9XG5cbiAgICAuY3Jvc3NoYWlyLWhhbmRsZTphY3RpdmUge1xuICAgICAgICBjdXJzb3I6IGdyYWJiaW5nO1xuICAgIH1cblxuICAgIC5vcGFjaXR5LTAge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbjwvc3R5bGU+XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQTRHQSxJQUFJLG9DQUFxQixDQUFDO0FBQzFCLFFBQVEsa0JBQWtCO0FBQzFCLFFBQVEsUUFBUTtBQUNoQixRQUFRLGlCQUFpQjtBQUN6QixRQUFRLG9CQUFvQjtBQUM1QixRQUFRLDhCQUE4QjtBQUN0Qzs7QUFFQSxJQUFJLG9DQUFxQixDQUFDLDJCQUFJLENBQUM7QUFDL0IsUUFBUSxpQ0FBaUM7QUFDekMsUUFBUSxlQUFlO0FBQ3ZCLFFBQVEscUJBQXFCO0FBQzdCLFFBQVEsaUNBQWlDO0FBQ3pDOztBQUVBLElBQUkscUJBQXFCLHNCQUFPLENBQUMsMkJBQUksQ0FBQztBQUN0QyxRQUFRLGVBQWU7QUFDdkI7O0FBRUEsSUFBSSxnQ0FBaUIsQ0FBQztBQUN0QixRQUFRLGtCQUFrQjtBQUMxQixRQUFRLFVBQVU7QUFDbEIsUUFBUSxXQUFXO0FBQ25CLFFBQVEsWUFBWTtBQUNwQixRQUFRLFVBQVU7QUFDbEIsUUFBUSwyQ0FBMkM7QUFDbkQsUUFBUSxrQkFBa0I7QUFDMUIsUUFBUSw4QkFBOEI7QUFDdEMsUUFBUSxZQUFZO0FBQ3BCLFFBQVEsdURBQXVEO0FBQy9EOztBQUVBLElBQUksaUJBQWlCLHNCQUFPLENBQUM7QUFDN0IsUUFBUSxxQkFBcUI7QUFDN0I7O0FBRUEsSUFBSSxnQ0FBaUIsT0FBTyxDQUFDO0FBQzdCLFFBQVEsZ0JBQWdCO0FBQ3hCOztBQUVBLElBQUkseUJBQVUsQ0FBQztBQUNmLFFBQVEsVUFBVTtBQUNsQjsifQ== */"
};
function Crosshair($$anchor, $$props) {
  check_target(new.target);
  push($$props, true, Crosshair);
  append_styles($$anchor, $$css);
  let focuspoint = prop($$props, "focuspoint", 7), index2 = prop($$props, "index", 7), initialized = prop($$props, "initialized", 7), canvasWidth = prop($$props, "canvasWidth", 7), canvasHeight = prop($$props, "canvasHeight", 7);
  const size = 22;
  function getX() {
    return (focuspoint()?.x ?? 0) * canvasWidth();
  }
  function getY() {
    return (focuspoint()?.y ?? 0) * canvasHeight();
  }
  function clamp2(value) {
    return Math.max(0, Math.min(1, value));
  }
  function crosshairInteraction(node) {
    const interactable = interact(node).draggable({
      modifiers: [
        interact.modifiers.restrictRect({ restriction: "parent", endOnly: false })
      ],
      listeners: {
        start() {
          activateFocuspoint(index2());
        },
        move(event2) {
          if (canvasWidth() <= 0 || canvasHeight() <= 0) {
            return;
          }
          focuspoints.update((items) => items.map((point2, currentIndex) => {
            if (strict_equals(currentIndex, index2(), false)) {
              return point2;
            }
            const currentX = (point2.x ?? 0) * canvasWidth();
            const currentY = (point2.y ?? 0) * canvasHeight();
            return {
              ...point2,
              x: clamp2((currentX + event2.dx) / canvasWidth()),
              y: clamp2((currentY + event2.dy) / canvasHeight())
            };
          }));
        }
      }
    });
    return {
      destroy() {
        interactable.unset();
      }
    };
  }
  var $$exports = {
    ...legacy_api(),
    get focuspoint() {
      return focuspoint();
    },
    set focuspoint($$value) {
      focuspoint($$value);
      flushSync();
    },
    get index() {
      return index2();
    },
    set index($$value) {
      index2($$value);
      flushSync();
    },
    get initialized() {
      return initialized();
    },
    set initialized($$value) {
      initialized($$value);
      flushSync();
    },
    get canvasWidth() {
      return canvasWidth();
    },
    set canvasWidth($$value) {
      canvasWidth($$value);
      flushSync();
    },
    get canvasHeight() {
      return canvasHeight();
    },
    set canvasHeight($$value) {
      canvasHeight($$value);
      flushSync();
    }
  };
  var fragment = root();
  var svg = first_child(fragment);
  let classes;
  var line = child(svg);
  var line_1 = sibling(line);
  reset(svg);
  var button = sibling(svg, 2);
  let classes_1;
  action(button, ($$node) => crosshairInteraction?.($$node));
  template_effect(
    ($0, $1, $2, $3, $4, $5, $6, $7, $8, $9) => {
      classes = set_class(svg, 0, "focuspoint-crosshair svelte-1lemjwi", null, classes, { active: focuspoint()?.active, "opacity-0": !initialized() });
      set_attribute2(svg, "width", canvasWidth());
      set_attribute2(svg, "height", canvasHeight());
      set_attribute2(line, "x1", $0);
      set_attribute2(line, "y1", $1);
      set_attribute2(line, "x2", $2);
      set_attribute2(line, "y2", $3);
      set_attribute2(line_1, "x1", $4);
      set_attribute2(line_1, "y1", $5);
      set_attribute2(line_1, "x2", $6);
      set_attribute2(line_1, "y2", $7);
      classes_1 = set_class(button, 1, "crosshair-handle svelte-1lemjwi", null, classes_1, { active: focuspoint()?.active, "opacity-0": !initialized() });
      set_style(button, `transform: translate3d(${$8 ?? ""}px, ${$9 ?? ""}px, 0) translate(-50%, -50%);`);
    },
    [
      () => getX() - size,
      () => getY(),
      () => getX() + size,
      () => getY(),
      () => getX(),
      () => getY() - size,
      () => getX(),
      () => getY() + size,
      () => getX(),
      () => getY()
    ]
  );
  delegated("click", button, function click(event2) {
    event2.preventDefault();
    activateFocuspoint(index2());
  });
  append($$anchor, fragment);
  return pop($$exports);
}
delegate(["click"]);
create_custom_element(
  Crosshair,
  {
    focuspoint: {},
    index: {},
    initialized: {},
    canvasWidth: {},
    canvasHeight: {}
  },
  [],
  [],
  { mode: "open" }
);

// Resources/Private/JavaScript/components/Shapes/Ellipse.svelte
import interact2 from "interactjs";
Ellipse[FILENAME] = "Resources/Private/JavaScript/components/Shapes/Ellipse.svelte";
var root2 = add_locations(from_html(`<div><span class="text-break"> </span> <span class="ui-resizable-handle ui-resizable-nw svelte-1hedkt8"></span> <span class="ui-resizable-handle ui-resizable-ne svelte-1hedkt8"></span> <span class="ui-resizable-handle ui-resizable-sw svelte-1hedkt8"></span> <span class="ui-resizable-handle ui-resizable-se svelte-1hedkt8"></span></div>`), Ellipse[FILENAME], [[123, 0, [[133, 4], [135, 4], [136, 4], [137, 4], [138, 4]]]]);
var $$css2 = {
  hash: "svelte-1hedkt8",
  code: "\n\n    .focuspoint-shape--ellipse.svelte-1hedkt8,\n    .focuspoint-shape--circle.svelte-1hedkt8 {\n        border-radius: 50%;\n    }\n\n    .draggable.svelte-1hedkt8 {\n        position: absolute;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        transition: opacity 0.15s ease;\n        user-select: none;\n    }\n\n    .style1.svelte-1hedkt8 {\n        display: inline-grid;\n        background-color: rgba(0, 0, 0, 0.6);\n        border: 1px dashed rgba(255, 255, 255, 0.8);\n        color: white;\n        padding: 10px;\n        --typo3-state-primary-bg: rgba(255, 255, 255, 0.8);\n    }\n\n    .opacity-0.svelte-1hedkt8 {\n        opacity: 0;\n    }\n\n    .style1.active.svelte-1hedkt8 {\n        border-color: #ff8700;\n        --typo3-state-primary-bg: #ff8700;\n        border-style: solid;\n        background-color: rgba(0, 0, 0, 0.8);\n    }\n\n    .ui-resizable-handle.ui-resizable-nw.svelte-1hedkt8, .ui-resizable-handle.ui-resizable-ne.svelte-1hedkt8 {\n        top: -3px;\n    }\n\n    .ui-resizable-handle.ui-resizable-sw.svelte-1hedkt8, .ui-resizable-handle.ui-resizable-se.svelte-1hedkt8 {\n        bottom: -3px;\n    }\n\n    .ui-resizable-handle.ui-resizable-ne.svelte-1hedkt8, .ui-resizable-handle.ui-resizable-se.svelte-1hedkt8 {\n        right: -3px;\n    }\n\n    .ui-resizable-handle.ui-resizable-nw.svelte-1hedkt8, .ui-resizable-handle.ui-resizable-sw.svelte-1hedkt8 {\n        left: -3px;\n    }\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRWxsaXBzZS5zdmVsdGUiLCJzb3VyY2VzIjpbIkVsbGlwc2Uuc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG4gICAgaW1wb3J0IGludGVyYWN0IGZyb20gJ2ludGVyYWN0anMnXG4gICAgaW1wb3J0IHthY3RpdmF0ZUZvY3VzcG9pbnQsIGZvY3VzUG9pbnROYW1lLCBmb2N1c3BvaW50c30gZnJvbSAnLi4vLi4vc3RvcmUuc3ZlbHRlLmpzJ1xuXG4gICAgbGV0IHtcbiAgICAgICAgZm9jdXNwb2ludCxcbiAgICAgICAgaW5kZXgsXG4gICAgICAgIGluaXRpYWxpemVkLFxuICAgICAgICBjYW52YXNXaWR0aCxcbiAgICAgICAgY2FudmFzSGVpZ2h0LFxuICAgICAgICBnZXRQb3NpdGlvblgsXG4gICAgICAgIGdldFBvc2l0aW9uWSxcbiAgICAgICAgZ2V0Rm9jdXNwb2ludFdpZHRoLFxuICAgICAgICBnZXRGb2N1c3BvaW50SGVpZ2h0XG4gICAgfSA9ICRwcm9wcygpXG5cbiAgICBmdW5jdGlvbiBnZXRGb2N1c3BvaW50TmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIGZvY3VzUG9pbnROYW1lKGluZGV4KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsYW1wKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCB2YWx1ZSkpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVjdGFuZ2xlSW50ZXJhY3Rpb24obm9kZSkge1xuICAgICAgICBjb25zdCBpbnRlcmFjdGFibGUgPSBpbnRlcmFjdChub2RlKVxuICAgICAgICAgICAgLnJlc2l6YWJsZSh7XG4gICAgICAgICAgICAgICAgZWRnZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdG9wOiB0cnVlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbW9kaWZpZXJzOiBbXG4gICAgICAgICAgICAgICAgICAgIGludGVyYWN0Lm1vZGlmaWVycy5yZXN0cmljdEVkZ2VzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dGVyOiAncGFyZW50JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZE9ubHk6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIGxpc3RlbmVyczoge1xuICAgICAgICAgICAgICAgICAgICBtb3ZlKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2FudmFzV2lkdGggPD0gMCB8fCBjYW52YXNIZWlnaHQgPD0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBmb2N1c3BvaW50cy51cGRhdGUoaXRlbXMgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtcy5tYXAoKHBvaW50LCBjdXJyZW50SW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRJbmRleCAhPT0gaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwb2ludFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgeCA9ICgocG9pbnQueCA/PyAwKSAqIGNhbnZhc1dpZHRoKSArIGV2ZW50LmRlbHRhUmVjdC5sZWZ0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHkgPSAoKHBvaW50LnkgPz8gMCkgKiBjYW52YXNIZWlnaHQpICsgZXZlbnQuZGVsdGFSZWN0LnRvcFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5wb2ludCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBldmVudC5yZWN0LndpZHRoL2NhbnZhc1dpZHRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBldmVudC5yZWN0LmhlaWdodC9jYW52YXNIZWlnaHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiBjbGFtcCh4L2NhbnZhc1dpZHRoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IGNsYW1wKHkvY2FudmFzSGVpZ2h0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZW5kKCl7XG4gICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmF0ZUZvY3VzcG9pbnQoaW5kZXgpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmRyYWdnYWJsZSh7XG4gICAgICAgICAgICAgICAgbW9kaWZpZXJzOiBbXG4gICAgICAgICAgICAgICAgICAgIGludGVyYWN0Lm1vZGlmaWVycy5yZXN0cmljdFJlY3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdHJpY3Rpb246ICdwYXJlbnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZW5kT25seTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgYXV0b1Njcm9sbDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBsaXN0ZW5lcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgbW92ZShldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNhbnZhc1dpZHRoIDw9IDAgfHwgY2FudmFzSGVpZ2h0IDw9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgZm9jdXNwb2ludHMudXBkYXRlKChpdGVtcykgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtcy5tYXAoKHBvaW50LCBjdXJyZW50SW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRJbmRleCAhPT0gaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwb2ludFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgeCA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKHBvaW50LnggPz8gMCkgKiBjYW52YXNXaWR0aCkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQuZHhcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB5ID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgocG9pbnQueSA/PyAwKSAqIGNhbnZhc0hlaWdodCkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQuZHlcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ucG9pbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiBjbGFtcCh4IC8gY2FudmFzV2lkdGgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogY2xhbXAoeSAvIGNhbnZhc0hlaWdodClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAgICAgZW5kKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZhdGVGb2N1c3BvaW50KGluZGV4KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZGVzdHJveSgpIHtcbiAgICAgICAgICAgICAgICBpbnRlcmFjdGFibGUudW5zZXQoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cbjwhLS0gc3ZlbHRlLWlnbm9yZSBhMTF5X2NsaWNrX2V2ZW50c19oYXZlX2tleV9ldmVudHMgLS0+XG48IS0tIHN2ZWx0ZS1pZ25vcmUgYTExeV9ub19zdGF0aWNfZWxlbWVudF9pbnRlcmFjdGlvbnMgLS0+XG48ZGl2XG4gICAgdXNlOnJlY3RhbmdsZUludGVyYWN0aW9uXG4gICAgb25jbGljaz17KCkgPT4gYWN0aXZhdGVGb2N1c3BvaW50KGluZGV4KX1cbiAgICBjbGFzczphY3RpdmU9e2ZvY3VzcG9pbnQuYWN0aXZlfVxuICAgIGNsYXNzOm9wYWNpdHktMD17IWluaXRpYWxpemVkfVxuICAgIGNsYXNzPVwiZHJhZ2dhYmxlIHN0eWxlMSByZXNpemFibGUgZm9jdXNwb2ludC1zaGFwZSBmb2N1c3BvaW50LXNoYXBlLS17Zm9jdXNwb2ludC5zaGFwZSA/PyAncmVjdGFuZ2xlJ31cIlxuICAgIHN0eWxlPVwidHJhbnNmb3JtOnRyYW5zbGF0ZTNkKHtnZXRQb3NpdGlvblgoaW5kZXgpfXB4LCB7Z2V0UG9zaXRpb25ZKGluZGV4KX1weCwgMCk7IHdpZHRoOiB7Z2V0Rm9jdXNwb2ludFdpZHRoKGluZGV4KX1weDsgaGVpZ2h0OiB7Z2V0Rm9jdXNwb2ludEhlaWdodChpbmRleCl9cHg7XCJcbiAgICBkYXRhLXg9XCJ7Z2V0UG9zaXRpb25YKGluZGV4KX1cIlxuICAgIGRhdGEteT1cIntnZXRQb3NpdGlvblkoaW5kZXgpfVwiXG4+XG4gICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LWJyZWFrXCI+e2ZvY3VzUG9pbnROYW1lKGluZGV4KX08L3NwYW4+XG5cbiAgICA8c3BhbiBjbGFzcz1cInVpLXJlc2l6YWJsZS1oYW5kbGUgdWktcmVzaXphYmxlLW53XCI+PC9zcGFuPlxuICAgIDxzcGFuIGNsYXNzPVwidWktcmVzaXphYmxlLWhhbmRsZSB1aS1yZXNpemFibGUtbmVcIj48L3NwYW4+XG4gICAgPHNwYW4gY2xhc3M9XCJ1aS1yZXNpemFibGUtaGFuZGxlIHVpLXJlc2l6YWJsZS1zd1wiPjwvc3Bhbj5cbiAgICA8c3BhbiBjbGFzcz1cInVpLXJlc2l6YWJsZS1oYW5kbGUgdWktcmVzaXphYmxlLXNlXCI+PC9zcGFuPlxuPC9kaXY+XG5cbjxzdHlsZT5cblxuICAgIC5mb2N1c3BvaW50LXNoYXBlLS1lbGxpcHNlLFxuICAgIC5mb2N1c3BvaW50LXNoYXBlLS1jaXJjbGUge1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgfVxuXG4gICAgLmRyYWdnYWJsZSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4xNXMgZWFzZTtcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgfVxuXG4gICAgLnN0eWxlMSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ncmlkO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gICAgICAgIGJvcmRlcjogMXB4IGRhc2hlZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgLS10eXBvMy1zdGF0ZS1wcmltYXJ5LWJnOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gICAgfVxuXG4gICAgLm9wYWNpdHktMCB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuXG4gICAgLnN0eWxlMS5hY3RpdmUge1xuICAgICAgICBib3JkZXItY29sb3I6ICNmZjg3MDA7XG4gICAgICAgIC0tdHlwbzMtc3RhdGUtcHJpbWFyeS1iZzogI2ZmODcwMDtcbiAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xuICAgIH1cblxuICAgIC51aS1yZXNpemFibGUtaGFuZGxlLnVpLXJlc2l6YWJsZS1udywgLnVpLXJlc2l6YWJsZS1oYW5kbGUudWktcmVzaXphYmxlLW5lIHtcbiAgICAgICAgdG9wOiAtM3B4O1xuICAgIH1cblxuICAgIC51aS1yZXNpemFibGUtaGFuZGxlLnVpLXJlc2l6YWJsZS1zdywgLnVpLXJlc2l6YWJsZS1oYW5kbGUudWktcmVzaXphYmxlLXNlIHtcbiAgICAgICAgYm90dG9tOiAtM3B4O1xuICAgIH1cblxuICAgIC51aS1yZXNpemFibGUtaGFuZGxlLnVpLXJlc2l6YWJsZS1uZSwgLnVpLXJlc2l6YWJsZS1oYW5kbGUudWktcmVzaXphYmxlLXNlIHtcbiAgICAgICAgcmlnaHQ6IC0zcHg7XG4gICAgfVxuXG4gICAgLnVpLXJlc2l6YWJsZS1oYW5kbGUudWktcmVzaXphYmxlLW53LCAudWktcmVzaXphYmxlLWhhbmRsZS51aS1yZXNpemFibGUtc3cge1xuICAgICAgICBsZWZ0OiAtM3B4O1xuICAgIH1cbjwvc3R5bGU+XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUE4SUEsSUFBSSx5Q0FBMEI7QUFDOUIsSUFBSSx3Q0FBeUIsQ0FBQztBQUM5QixRQUFRLGtCQUFrQjtBQUMxQjs7QUFFQSxJQUFJLHlCQUFVLENBQUM7QUFDZixRQUFRLGtCQUFrQjtBQUMxQixRQUFRLGFBQWE7QUFDckIsUUFBUSx1QkFBdUI7QUFDL0IsUUFBUSxtQkFBbUI7QUFDM0IsUUFBUSw4QkFBOEI7QUFDdEMsUUFBUSxpQkFBaUI7QUFDekI7O0FBRUEsSUFBSSxzQkFBTyxDQUFDO0FBQ1osUUFBUSxvQkFBb0I7QUFDNUIsUUFBUSxvQ0FBb0M7QUFDNUMsUUFBUSwyQ0FBMkM7QUFDbkQsUUFBUSxZQUFZO0FBQ3BCLFFBQVEsYUFBYTtBQUNyQixRQUFRLGtEQUFrRDtBQUMxRDs7QUFFQSxJQUFJLHlCQUFVLENBQUM7QUFDZixRQUFRLFVBQVU7QUFDbEI7O0FBRUEsSUFBSSxPQUFPLHNCQUFPLENBQUM7QUFDbkIsUUFBUSxxQkFBcUI7QUFDN0IsUUFBUSxpQ0FBaUM7QUFDekMsUUFBUSxtQkFBbUI7QUFDM0IsUUFBUSxvQ0FBb0M7QUFDNUM7O0FBRUEsSUFBSSxvQkFBb0IsK0JBQWdCLEVBQUUsb0JBQW9CLCtCQUFnQixDQUFDO0FBQy9FLFFBQVEsU0FBUztBQUNqQjs7QUFFQSxJQUFJLG9CQUFvQiwrQkFBZ0IsRUFBRSxvQkFBb0IsK0JBQWdCLENBQUM7QUFDL0UsUUFBUSxZQUFZO0FBQ3BCOztBQUVBLElBQUksb0JBQW9CLCtCQUFnQixFQUFFLG9CQUFvQiwrQkFBZ0IsQ0FBQztBQUMvRSxRQUFRLFdBQVc7QUFDbkI7O0FBRUEsSUFBSSxvQkFBb0IsK0JBQWdCLEVBQUUsb0JBQW9CLCtCQUFnQixDQUFDO0FBQy9FLFFBQVEsVUFBVTtBQUNsQjsifQ== */"
};
function Ellipse($$anchor, $$props) {
  check_target(new.target);
  push($$props, true, Ellipse);
  append_styles($$anchor, $$css2);
  let focuspoint = prop($$props, "focuspoint", 7), index2 = prop($$props, "index", 7), initialized = prop($$props, "initialized", 7), canvasWidth = prop($$props, "canvasWidth", 7), canvasHeight = prop($$props, "canvasHeight", 7), getPositionX = prop($$props, "getPositionX", 7), getPositionY = prop($$props, "getPositionY", 7), getFocuspointWidth = prop($$props, "getFocuspointWidth", 7), getFocuspointHeight = prop($$props, "getFocuspointHeight", 7);
  function getFocuspointName() {
    return focusPointName(index2());
  }
  function clamp2(value) {
    return Math.max(0, Math.min(1, value));
  }
  function rectangleInteraction(node) {
    const interactable = interact2(node).resizable({
      edges: { left: true, right: true, bottom: true, top: true },
      modifiers: [
        interact2.modifiers.restrictEdges({ outer: "parent", endOnly: true })
      ],
      listeners: {
        move(event2) {
          if (canvasWidth() <= 0 || canvasHeight() <= 0) {
            return;
          }
          focuspoints.update((items) => items.map((point2, currentIndex) => {
            if (strict_equals(currentIndex, index2(), false)) {
              return point2;
            }
            const x = (point2.x ?? 0) * canvasWidth() + event2.deltaRect.left;
            const y = (point2.y ?? 0) * canvasHeight() + event2.deltaRect.top;
            return {
              ...point2,
              width: event2.rect.width / canvasWidth(),
              height: event2.rect.height / canvasHeight(),
              x: clamp2(x / canvasWidth()),
              y: clamp2(y / canvasHeight())
            };
          }));
        },
        end() {
          activateFocuspoint(index2());
        }
      }
    }).draggable({
      modifiers: [
        interact2.modifiers.restrictRect({ restriction: "parent", endOnly: true })
      ],
      autoScroll: true,
      listeners: {
        move(event2) {
          if (canvasWidth() <= 0 || canvasHeight() <= 0) {
            return;
          }
          focuspoints.update((items) => items.map((point2, currentIndex) => {
            if (strict_equals(currentIndex, index2(), false)) {
              return point2;
            }
            const x = (point2.x ?? 0) * canvasWidth() + event2.dx;
            const y = (point2.y ?? 0) * canvasHeight() + event2.dy;
            return {
              ...point2,
              x: clamp2(x / canvasWidth()),
              y: clamp2(y / canvasHeight())
            };
          }));
        },
        end() {
          activateFocuspoint(index2());
        }
      }
    });
    return {
      destroy() {
        interactable.unset();
      }
    };
  }
  var $$exports = {
    ...legacy_api(),
    get focuspoint() {
      return focuspoint();
    },
    set focuspoint($$value) {
      focuspoint($$value);
      flushSync();
    },
    get index() {
      return index2();
    },
    set index($$value) {
      index2($$value);
      flushSync();
    },
    get initialized() {
      return initialized();
    },
    set initialized($$value) {
      initialized($$value);
      flushSync();
    },
    get canvasWidth() {
      return canvasWidth();
    },
    set canvasWidth($$value) {
      canvasWidth($$value);
      flushSync();
    },
    get canvasHeight() {
      return canvasHeight();
    },
    set canvasHeight($$value) {
      canvasHeight($$value);
      flushSync();
    },
    get getPositionX() {
      return getPositionX();
    },
    set getPositionX($$value) {
      getPositionX($$value);
      flushSync();
    },
    get getPositionY() {
      return getPositionY();
    },
    set getPositionY($$value) {
      getPositionY($$value);
      flushSync();
    },
    get getFocuspointWidth() {
      return getFocuspointWidth();
    },
    set getFocuspointWidth($$value) {
      getFocuspointWidth($$value);
      flushSync();
    },
    get getFocuspointHeight() {
      return getFocuspointHeight();
    },
    set getFocuspointHeight($$value) {
      getFocuspointHeight($$value);
      flushSync();
    }
  };
  var div = root2();
  let classes;
  var span = child(div);
  var text2 = child(span, true);
  reset(span);
  next(8);
  reset(div);
  action(div, ($$node) => rectangleInteraction?.($$node));
  template_effect(
    ($0, $1, $2, $3, $4, $5, $6) => {
      classes = set_class(div, 1, `draggable style1 resizable focuspoint-shape focuspoint-shape--${focuspoint().shape ?? "rectangle" ?? ""}`, "svelte-1hedkt8", classes, { active: focuspoint().active, "opacity-0": !initialized() });
      set_style(div, `transform:translate3d(${$0 ?? ""}px, ${$1 ?? ""}px, 0); width: ${$2 ?? ""}px; height: ${$3 ?? ""}px;`);
      set_attribute2(div, "data-x", $4);
      set_attribute2(div, "data-y", $5);
      set_text(text2, $6);
    },
    [
      () => getPositionX()(index2()),
      () => getPositionY()(index2()),
      () => getFocuspointWidth()(index2()),
      () => getFocuspointHeight()(index2()),
      () => getPositionX()(index2()),
      () => getPositionY()(index2()),
      () => focusPointName(index2())
    ]
  );
  delegated("click", div, function click() {
    return activateFocuspoint(index2());
  });
  append($$anchor, div);
  return pop($$exports);
}
delegate(["click"]);
create_custom_element(
  Ellipse,
  {
    focuspoint: {},
    index: {},
    initialized: {},
    canvasWidth: {},
    canvasHeight: {},
    getPositionX: {},
    getPositionY: {},
    getFocuspointWidth: {},
    getFocuspointHeight: {}
  },
  [],
  [],
  { mode: "open" }
);

// Resources/Private/JavaScript/components/Shapes/Line.svelte
import interact3 from "interactjs";
Line[FILENAME] = "Resources/Private/JavaScript/components/Shapes/Line.svelte";
var root3 = add_locations(from_html(`<svg aria-hidden="true"><line class="svelte-1vbkmic"></line></svg> <button type="button" aria-label="Move line start point"></button> <button type="button" aria-label="Move line end point"></button>`, 1), Line[FILENAME], [[139, 0, [[145, 4]]], [153, 0], [167, 0]]);
var $$css3 = {
  hash: "svelte-1vbkmic",
  code: "\n    .focuspoint-line.svelte-1vbkmic {\n        position: absolute;\n        inset: 0;\n        width: 100%;\n        height: 100%;\n        overflow: visible;\n        pointer-events: none;\n        transition: opacity 0.15s ease;\n    }\n\n    .focuspoint-line.svelte-1vbkmic line:where(.svelte-1vbkmic) {\n        stroke: rgba(255, 255, 255, 0.9);\n        stroke-width: 3;\n        stroke-linecap: round;\n        vector-effect: non-scaling-stroke;\n    }\n\n    .focuspoint-line.active.svelte-1vbkmic line:where(.svelte-1vbkmic) {\n        stroke: #ff8700;\n    }\n\n    .line-handle.svelte-1vbkmic {\n        position: absolute;\n        z-index: 5;\n        width: 14px;\n        height: 14px;\n        padding: 0;\n        border: 2px solid rgba(255, 255, 255, 0.9);\n        border-radius: 50%;\n        background: rgba(0, 0, 0, 0.8);\n        cursor: grab;\n        transition: opacity 0.15s ease, border-color 0.15s ease;\n    }\n\n    .line-handle.active.svelte-1vbkmic {\n        border-color: #ff8700;\n    }\n\n    .line-handle.svelte-1vbkmic:active {\n        cursor: grabbing;\n    }\n\n    .opacity-0.svelte-1vbkmic {\n        opacity: 0;\n    }\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGluZS5zdmVsdGUiLCJzb3VyY2VzIjpbIkxpbmUuc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG4gICAgaW1wb3J0IGludGVyYWN0IGZyb20gJ2ludGVyYWN0anMnXG4gICAgaW1wb3J0IHthY3RpdmF0ZUZvY3VzcG9pbnQsIGZvY3VzcG9pbnRzfSBmcm9tICcuLi8uLi9zdG9yZS5zdmVsdGUuanMnXG5cbiAgICBsZXQge1xuICAgICAgICBmb2N1c3BvaW50LFxuICAgICAgICBpbmRleCxcbiAgICAgICAgaW5pdGlhbGl6ZWQsXG4gICAgICAgIGNhbnZhc1dpZHRoLFxuICAgICAgICBjYW52YXNIZWlnaHRcbiAgICB9ID0gJHByb3BzKClcblxuICAgIGZ1bmN0aW9uIGNsYW1wKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCB2YWx1ZSkpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0RmFsbGJhY2tFbmRYKCkge1xuICAgICAgICByZXR1cm4gY2xhbXAoKGZvY3VzcG9pbnQ/LnggPz8gMCkgKyAoZm9jdXNwb2ludD8ud2lkdGggPz8gMC4yKSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRGYWxsYmFja0VuZFkoKSB7XG4gICAgICAgIHJldHVybiBjbGFtcCgoZm9jdXNwb2ludD8ueSA/PyAwKSArIChmb2N1c3BvaW50Py5oZWlnaHQgPz8gMC4yKSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRTdGFydFgoKSB7XG4gICAgICAgIHJldHVybiAoZm9jdXNwb2ludD8ueCA/PyAwKSAqIGNhbnZhc1dpZHRoXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0U3RhcnRZKCkge1xuICAgICAgICByZXR1cm4gKGZvY3VzcG9pbnQ/LnkgPz8gMCkgKiBjYW52YXNIZWlnaHRcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRFbmRYKCkge1xuICAgICAgICByZXR1cm4gKGZvY3VzcG9pbnQ/LngyID8/IGdldEZhbGxiYWNrRW5kWCgpKSAqIGNhbnZhc1dpZHRoXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0RW5kWSgpIHtcbiAgICAgICAgcmV0dXJuIChmb2N1c3BvaW50Py55MiA/PyBnZXRGYWxsYmFja0VuZFkoKSkgKiBjYW52YXNIZWlnaHRcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBlbnN1cmVMaW5lRW5kUG9pbnQoKSB7XG4gICAgICAgIGlmICghZm9jdXNwb2ludCkge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZm9jdXNwb2ludC54MiAhPT0gdW5kZWZpbmVkICYmIGZvY3VzcG9pbnQueTIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBmb2N1c3BvaW50cy51cGRhdGUoKGl0ZW1zKSA9PiBpdGVtcy5tYXAoKGl0ZW0sIGN1cnJlbnRJbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRJbmRleCAhPT0gaW5kZXgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLml0ZW0sXG4gICAgICAgICAgICAgICAgeDI6IGl0ZW0ueDIgPz8gY2xhbXAoKGl0ZW0ueCA/PyAwKSArIChpdGVtLndpZHRoID8/IDAuMikpLFxuICAgICAgICAgICAgICAgIHkyOiBpdGVtLnkyID8/IGNsYW1wKChpdGVtLnkgPz8gMCkgKyAoaXRlbS5oZWlnaHQgPz8gMC4yKSksXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKVxuICAgIH1cblxuICAgICRlZmZlY3QoKCkgPT4ge1xuICAgICAgICBlbnN1cmVMaW5lRW5kUG9pbnQoKVxuICAgIH0pXG5cbiAgICBmdW5jdGlvbiBsaW5lSGFuZGxlSW50ZXJhY3Rpb24obm9kZSwgaGFuZGxlKSB7XG4gICAgICAgIGNvbnN0IGludGVyYWN0YWJsZSA9IGludGVyYWN0KG5vZGUpLmRyYWdnYWJsZSh7XG4gICAgICAgICAgICBtb2RpZmllcnM6IFtcbiAgICAgICAgICAgICAgICBpbnRlcmFjdC5tb2RpZmllcnMucmVzdHJpY3RSZWN0KHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdHJpY3Rpb246ICdwYXJlbnQnLFxuICAgICAgICAgICAgICAgICAgICBlbmRPbmx5OiBmYWxzZSxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBsaXN0ZW5lcnM6IHtcbiAgICAgICAgICAgICAgICBzdGFydCgpIHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZhdGVGb2N1c3BvaW50KGluZGV4KVxuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICBtb3ZlKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjYW52YXNXaWR0aCA8PSAwIHx8IGNhbnZhc0hlaWdodCA8PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGZvY3VzcG9pbnRzLnVwZGF0ZSgoaXRlbXMpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtcy5tYXAoKHBvaW50LCBjdXJyZW50SW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudEluZGV4ICE9PSBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcG9pbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmYWxsYmFja1gyID0gY2xhbXAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChwb2ludC54ID8/IDApICsgKHBvaW50LndpZHRoID8/IDAuMilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmYWxsYmFja1kyID0gY2xhbXAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChwb2ludC55ID8/IDApICsgKHBvaW50LmhlaWdodCA/PyAwLjIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VycmVudFggPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGUgPT09ICdzdGFydCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gKHBvaW50LnggPz8gMCkgKiBjYW52YXNXaWR0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAocG9pbnQueDIgPz8gZmFsbGJhY2tYMikgKiBjYW52YXNXaWR0aFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VycmVudFkgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGUgPT09ICdzdGFydCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gKHBvaW50LnkgPz8gMCkgKiBjYW52YXNIZWlnaHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogKHBvaW50LnkyID8/IGZhbGxiYWNrWTIpICogY2FudmFzSGVpZ2h0XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXh0WCA9IGNsYW1wKChjdXJyZW50WCArIGV2ZW50LmR4KSAvIGNhbnZhc1dpZHRoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5leHRZID0gY2xhbXAoKGN1cnJlbnRZICsgZXZlbnQuZHkpIC8gY2FudmFzSGVpZ2h0KVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGhhbmRsZSA9PT0gJ3N0YXJ0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ucG9pbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiBuZXh0WCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IG5leHRZLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ucG9pbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHgyOiBuZXh0WCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTI6IG5leHRZLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSlcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZGVzdHJveSgpIHtcbiAgICAgICAgICAgICAgICBpbnRlcmFjdGFibGUudW5zZXQoKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG48c3ZnXG4gICAgY2xhc3M9XCJmb2N1c3BvaW50LWxpbmVcIlxuICAgIGNsYXNzOmFjdGl2ZT17Zm9jdXNwb2ludD8uYWN0aXZlfVxuICAgIGNsYXNzOm9wYWNpdHktMD17IWluaXRpYWxpemVkfVxuICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4+XG4gICAgPGxpbmVcbiAgICAgICAgeDE9e2dldFN0YXJ0WCgpfVxuICAgICAgICB5MT17Z2V0U3RhcnRZKCl9XG4gICAgICAgIHgyPXtnZXRFbmRYKCl9XG4gICAgICAgIHkyPXtnZXRFbmRZKCl9XG4gICAgLz5cbjwvc3ZnPlxuXG48YnV0dG9uXG4gICAgdHlwZT1cImJ1dHRvblwiXG4gICAgY2xhc3M9XCJsaW5lLWhhbmRsZVwiXG4gICAgdXNlOmxpbmVIYW5kbGVJbnRlcmFjdGlvbj17J3N0YXJ0J31cbiAgICBjbGFzczphY3RpdmU9e2ZvY3VzcG9pbnQ/LmFjdGl2ZX1cbiAgICBjbGFzczpvcGFjaXR5LTA9eyFpbml0aWFsaXplZH1cbiAgICBzdHlsZT1cInRyYW5zZm9ybTogdHJhbnNsYXRlM2Qoe2dldFN0YXJ0WCgpfXB4LCB7Z2V0U3RhcnRZKCl9cHgsIDApIHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcIlxuICAgIG9uY2xpY2s9eyhldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGFjdGl2YXRlRm9jdXNwb2ludChpbmRleClcbiAgICB9fVxuICAgIGFyaWEtbGFiZWw9XCJNb3ZlIGxpbmUgc3RhcnQgcG9pbnRcIlxuPjwvYnV0dG9uPlxuXG48YnV0dG9uXG4gICAgdHlwZT1cImJ1dHRvblwiXG4gICAgY2xhc3M9XCJsaW5lLWhhbmRsZVwiXG4gICAgdXNlOmxpbmVIYW5kbGVJbnRlcmFjdGlvbj17J2VuZCd9XG4gICAgY2xhc3M6YWN0aXZlPXtmb2N1c3BvaW50Py5hY3RpdmV9XG4gICAgY2xhc3M6b3BhY2l0eS0wPXshaW5pdGlhbGl6ZWR9XG4gICAgc3R5bGU9XCJ0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKHtnZXRFbmRYKCl9cHgsIHtnZXRFbmRZKCl9cHgsIDApIHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcIlxuICAgIG9uY2xpY2s9eyhldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGFjdGl2YXRlRm9jdXNwb2ludChpbmRleClcbiAgICB9fVxuICAgIGFyaWEtbGFiZWw9XCJNb3ZlIGxpbmUgZW5kIHBvaW50XCJcbj48L2J1dHRvbj5cblxuPHN0eWxlPlxuICAgIC5mb2N1c3BvaW50LWxpbmUge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGluc2V0OiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4xNXMgZWFzZTtcbiAgICB9XG5cbiAgICAuZm9jdXNwb2ludC1saW5lIGxpbmUge1xuICAgICAgICBzdHJva2U6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcbiAgICAgICAgc3Ryb2tlLXdpZHRoOiAzO1xuICAgICAgICBzdHJva2UtbGluZWNhcDogcm91bmQ7XG4gICAgICAgIHZlY3Rvci1lZmZlY3Q6IG5vbi1zY2FsaW5nLXN0cm9rZTtcbiAgICB9XG5cbiAgICAuZm9jdXNwb2ludC1saW5lLmFjdGl2ZSBsaW5lIHtcbiAgICAgICAgc3Ryb2tlOiAjZmY4NzAwO1xuICAgIH1cblxuICAgIC5saW5lLWhhbmRsZSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgei1pbmRleDogNTtcbiAgICAgICAgd2lkdGg6IDE0cHg7XG4gICAgICAgIGhlaWdodDogMTRweDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgICAgICAgY3Vyc29yOiBncmFiO1xuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMTVzIGVhc2UsIGJvcmRlci1jb2xvciAwLjE1cyBlYXNlO1xuICAgIH1cblxuICAgIC5saW5lLWhhbmRsZS5hY3RpdmUge1xuICAgICAgICBib3JkZXItY29sb3I6ICNmZjg3MDA7XG4gICAgfVxuXG4gICAgLmxpbmUtaGFuZGxlOmFjdGl2ZSB7XG4gICAgICAgIGN1cnNvcjogZ3JhYmJpbmc7XG4gICAgfVxuXG4gICAgLm9wYWNpdHktMCB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuPC9zdHlsZT5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBcUxBLElBQUksK0JBQWdCLENBQUM7QUFDckIsUUFBUSxrQkFBa0I7QUFDMUIsUUFBUSxRQUFRO0FBQ2hCLFFBQVEsV0FBVztBQUNuQixRQUFRLFlBQVk7QUFDcEIsUUFBUSxpQkFBaUI7QUFDekIsUUFBUSxvQkFBb0I7QUFDNUIsUUFBUSw4QkFBOEI7QUFDdEM7O0FBRUEsSUFBSSwrQkFBZ0IsQ0FBQywyQkFBSSxDQUFDO0FBQzFCLFFBQVEsZ0NBQWdDO0FBQ3hDLFFBQVEsZUFBZTtBQUN2QixRQUFRLHFCQUFxQjtBQUM3QixRQUFRLGlDQUFpQztBQUN6Qzs7QUFFQSxJQUFJLGdCQUFnQixzQkFBTyxDQUFDLDJCQUFJLENBQUM7QUFDakMsUUFBUSxlQUFlO0FBQ3ZCOztBQUVBLElBQUksMkJBQVksQ0FBQztBQUNqQixRQUFRLGtCQUFrQjtBQUMxQixRQUFRLFVBQVU7QUFDbEIsUUFBUSxXQUFXO0FBQ25CLFFBQVEsWUFBWTtBQUNwQixRQUFRLFVBQVU7QUFDbEIsUUFBUSwwQ0FBMEM7QUFDbEQsUUFBUSxrQkFBa0I7QUFDMUIsUUFBUSw4QkFBOEI7QUFDdEMsUUFBUSxZQUFZO0FBQ3BCLFFBQVEsdURBQXVEO0FBQy9EOztBQUVBLElBQUksWUFBWSxzQkFBTyxDQUFDO0FBQ3hCLFFBQVEscUJBQXFCO0FBQzdCOztBQUVBLElBQUksMkJBQVksT0FBTyxDQUFDO0FBQ3hCLFFBQVEsZ0JBQWdCO0FBQ3hCOztBQUVBLElBQUkseUJBQVUsQ0FBQztBQUNmLFFBQVEsVUFBVTtBQUNsQjsifQ== */"
};
function Line($$anchor, $$props) {
  check_target(new.target);
  push($$props, true, Line);
  append_styles($$anchor, $$css3);
  let focuspoint = prop($$props, "focuspoint", 7), index2 = prop($$props, "index", 7), initialized = prop($$props, "initialized", 7), canvasWidth = prop($$props, "canvasWidth", 7), canvasHeight = prop($$props, "canvasHeight", 7);
  function clamp2(value) {
    return Math.max(0, Math.min(1, value));
  }
  function getFallbackEndX() {
    return clamp2((focuspoint()?.x ?? 0) + (focuspoint()?.width ?? 0.2));
  }
  function getFallbackEndY() {
    return clamp2((focuspoint()?.y ?? 0) + (focuspoint()?.height ?? 0.2));
  }
  function getStartX() {
    return (focuspoint()?.x ?? 0) * canvasWidth();
  }
  function getStartY() {
    return (focuspoint()?.y ?? 0) * canvasHeight();
  }
  function getEndX() {
    return (focuspoint()?.x2 ?? getFallbackEndX()) * canvasWidth();
  }
  function getEndY() {
    return (focuspoint()?.y2 ?? getFallbackEndY()) * canvasHeight();
  }
  function ensureLineEndPoint() {
    if (!focuspoint()) {
      return;
    }
    if (strict_equals(focuspoint().x2, void 0, false) && strict_equals(focuspoint().y2, void 0, false)) {
      return;
    }
    focuspoints.update((items) => items.map((item, currentIndex) => {
      if (strict_equals(currentIndex, index2(), false)) {
        return item;
      }
      return {
        ...item,
        x2: item.x2 ?? clamp2((item.x ?? 0) + (item.width ?? 0.2)),
        y2: item.y2 ?? clamp2((item.y ?? 0) + (item.height ?? 0.2))
      };
    }));
  }
  user_effect(() => {
    ensureLineEndPoint();
  });
  function lineHandleInteraction(node, handle) {
    const interactable = interact3(node).draggable({
      modifiers: [
        interact3.modifiers.restrictRect({ restriction: "parent", endOnly: false })
      ],
      listeners: {
        start() {
          activateFocuspoint(index2());
        },
        move(event2) {
          if (canvasWidth() <= 0 || canvasHeight() <= 0) {
            return;
          }
          focuspoints.update((items) => items.map((point2, currentIndex) => {
            if (strict_equals(currentIndex, index2(), false)) {
              return point2;
            }
            const fallbackX2 = clamp2((point2.x ?? 0) + (point2.width ?? 0.2));
            const fallbackY2 = clamp2((point2.y ?? 0) + (point2.height ?? 0.2));
            const currentX = strict_equals(handle, "start") ? (point2.x ?? 0) * canvasWidth() : (point2.x2 ?? fallbackX2) * canvasWidth();
            const currentY = strict_equals(handle, "start") ? (point2.y ?? 0) * canvasHeight() : (point2.y2 ?? fallbackY2) * canvasHeight();
            const nextX = clamp2((currentX + event2.dx) / canvasWidth());
            const nextY = clamp2((currentY + event2.dy) / canvasHeight());
            if (strict_equals(handle, "start")) {
              return { ...point2, x: nextX, y: nextY };
            }
            return { ...point2, x2: nextX, y2: nextY };
          }));
        }
      }
    });
    return {
      destroy() {
        interactable.unset();
      }
    };
  }
  var $$exports = {
    ...legacy_api(),
    get focuspoint() {
      return focuspoint();
    },
    set focuspoint($$value) {
      focuspoint($$value);
      flushSync();
    },
    get index() {
      return index2();
    },
    set index($$value) {
      index2($$value);
      flushSync();
    },
    get initialized() {
      return initialized();
    },
    set initialized($$value) {
      initialized($$value);
      flushSync();
    },
    get canvasWidth() {
      return canvasWidth();
    },
    set canvasWidth($$value) {
      canvasWidth($$value);
      flushSync();
    },
    get canvasHeight() {
      return canvasHeight();
    },
    set canvasHeight($$value) {
      canvasHeight($$value);
      flushSync();
    }
  };
  var fragment = root3();
  var svg = first_child(fragment);
  let classes;
  var line = child(svg);
  reset(svg);
  var button = sibling(svg, 2);
  let classes_1;
  action(button, ($$node, $$action_arg) => lineHandleInteraction?.($$node, $$action_arg), () => "start");
  var button_1 = sibling(button, 2);
  let classes_2;
  action(button_1, ($$node, $$action_arg) => lineHandleInteraction?.($$node, $$action_arg), () => "end");
  template_effect(
    ($0, $1, $2, $3, $4, $5, $6, $7) => {
      classes = set_class(svg, 0, "focuspoint-line svelte-1vbkmic", null, classes, { active: focuspoint()?.active, "opacity-0": !initialized() });
      set_attribute2(line, "x1", $0);
      set_attribute2(line, "y1", $1);
      set_attribute2(line, "x2", $2);
      set_attribute2(line, "y2", $3);
      classes_1 = set_class(button, 1, "line-handle svelte-1vbkmic", null, classes_1, { active: focuspoint()?.active, "opacity-0": !initialized() });
      set_style(button, `transform: translate3d(${$4 ?? ""}px, ${$5 ?? ""}px, 0) translate(-50%, -50%);`);
      classes_2 = set_class(button_1, 1, "line-handle svelte-1vbkmic", null, classes_2, { active: focuspoint()?.active, "opacity-0": !initialized() });
      set_style(button_1, `transform: translate3d(${$6 ?? ""}px, ${$7 ?? ""}px, 0) translate(-50%, -50%);`);
    },
    [
      () => getStartX(),
      () => getStartY(),
      () => getEndX(),
      () => getEndY(),
      () => getStartX(),
      () => getStartY(),
      () => getEndX(),
      () => getEndY()
    ]
  );
  delegated("click", button, function click(event2) {
    event2.preventDefault();
    activateFocuspoint(index2());
  });
  delegated("click", button_1, function click_1(event2) {
    event2.preventDefault();
    activateFocuspoint(index2());
  });
  append($$anchor, fragment);
  return pop($$exports);
}
delegate(["click"]);
create_custom_element(
  Line,
  {
    focuspoint: {},
    index: {},
    initialized: {},
    canvasWidth: {},
    canvasHeight: {}
  },
  [],
  [],
  { mode: "open" }
);

// Resources/Private/JavaScript/components/Shapes/Polygon.svelte
import interact4 from "interactjs";
Polygon[FILENAME] = "Resources/Private/JavaScript/components/Shapes/Polygon.svelte";
var root4 = add_locations(from_html(`<button type="button" class="polygon-remove-handle svelte-1pii9ng"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" aria-hidden="true" class="svelte-1pii9ng"><path d="M0 0h24v24H0z" fill="none"></path><path fill="currentColor" d="M17 6V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v2H2v2h2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8h2V6zM9 4h6v2H9zM6 20V8h12v12z"></path><path fill="currentColor" d="M9 10h2v8H9zm4 0h2v8h-2z"></path></svg></button>`), Polygon[FILENAME], [[242, 16, [[252, 20, [[253, 24], [254, 24], [255, 24]]]]]]);
var root_1 = add_locations(from_html(`<div><button type="button" class="polygon-handle svelte-1pii9ng"></button> <!></div>`), Polygon[FILENAME], [[224, 8, [[229, 12]]]]);
var root_2 = add_locations(from_html(`<button type="button" aria-label="Add polygon vertex">+</button>`), Polygon[FILENAME], [[264, 8]]);
var root_3 = add_locations(from_html(`<!> <!>`, 1), Polygon[FILENAME], []);
var root_4 = add_locations(from_html(`<svg><polygon class="polygon-shape svelte-1pii9ng"></polygon></svg> <!>`, 1), Polygon[FILENAME], [[204, 0, [[211, 4]]]]);
var $$css4 = {
  hash: "svelte-1pii9ng",
  code: "\n    .focuspoint-polygon.svelte-1pii9ng {\n        position: absolute;\n        inset: 0;\n        pointer-events: none;\n        transition: opacity 0.15s ease;\n    }\n\n    .focuspoint-polygon.svelte-1pii9ng polygon:where(.svelte-1pii9ng) {\n        fill: rgba(0, 0, 0, 0.6);\n        stroke: rgba(255, 255, 255, 0.9);\n        stroke-width: 2;\n        stroke-dasharray: 6 4;\n        pointer-events: all;\n        cursor: grab;\n    }\n\n    .focuspoint-polygon.svelte-1pii9ng polygon:where(.svelte-1pii9ng):active {\n        cursor: grabbing;\n    }\n\n    .focuspoint-polygon.active.svelte-1pii9ng polygon:where(.svelte-1pii9ng) {\n        fill: rgba(0, 0, 0, 0.8);\n        stroke: #ff8700;\n        stroke-dasharray: none;\n    }\n\n    .polygon-vertex.svelte-1pii9ng,\n    .polygon-add-handle.svelte-1pii9ng {\n        position: absolute;\n        top: 0;\n        left: 0;\n    }\n\n    .polygon-vertex.svelte-1pii9ng {\n        z-index: 7;\n    }\n\n    .polygon-handle.svelte-1pii9ng {\n        position: absolute;\n        top: 0;\n        left: 0;\n\n        width: 14px;\n        height: 14px;\n        padding: 0;\n\n        border: 2px solid #ff8700;\n        border-radius: 50%;\n        background: rgba(0, 0, 0, 0.8);\n\n        transform: translate(-50%, -50%);\n        cursor: grab;\n    }\n\n    .polygon-handle.svelte-1pii9ng:active {\n        cursor: grabbing;\n    }\n\n    .polygon-handle.svelte-1pii9ng:focus-visible {\n        outline: 2px solid #fff;\n        outline-offset: 2px;\n    }\n\n    .polygon-add-handle.svelte-1pii9ng {\n        z-index: 6;\n\n        display: grid;\n        place-items: center;\n\n        width: 18px;\n        height: 18px;\n        padding: 0;\n\n        border: 1px solid rgba(255, 255, 255, 0.9);\n        border-radius: 50%;\n        background: rgba(0, 0, 0, 0.75);\n        color: #fff;\n\n        font-size: 14px;\n        line-height: 1;\n\n        cursor: pointer;\n    }\n\n    .polygon-add-handle.svelte-1pii9ng:hover {\n        border-color: #ff8700;\n        color: #ff8700;\n    }\n\n    .polygon-remove-handle.svelte-1pii9ng {\n        position: absolute;\n        top: 12px;\n        left: 0;\n\n        display: grid;\n        place-items: center;\n\n        width: 30px;\n        height: 30px;\n        padding: 0;\n\n        border: 0;\n        border-radius: 2px;\n        background: #dc3545;\n        color: #fff;\n\n        transform: translateX(-50%);\n\n        opacity: 0;\n        pointer-events: none;\n        cursor: pointer;\n    }\n\n    .polygon-remove-handle.svelte-1pii9ng svg:where(.svelte-1pii9ng) {\n        width: 14px;\n        height: 14px;\n        fill: currentColor;\n    }\n\n    .polygon-vertex.svelte-1pii9ng:focus-within .polygon-remove-handle:where(.svelte-1pii9ng) {\n        opacity: 1;\n        pointer-events: auto;\n    }\n\n    .opacity-0.svelte-1pii9ng {\n        opacity: 0;\n    }\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUG9seWdvbi5zdmVsdGUiLCJzb3VyY2VzIjpbIlBvbHlnb24uc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG4gICAgaW1wb3J0IGludGVyYWN0IGZyb20gJ2ludGVyYWN0anMnXG4gICAgaW1wb3J0IHtcbiAgICAgICAgYWN0aXZhdGVGb2N1c3BvaW50LFxuICAgICAgICBmb2N1c3BvaW50c1xuICAgIH0gZnJvbSAnLi4vLi4vc3RvcmUuc3ZlbHRlLmpzJ1xuXG4gICAgbGV0IHtcbiAgICAgICAgZm9jdXNwb2ludCxcbiAgICAgICAgaW5kZXgsXG4gICAgICAgIGluaXRpYWxpemVkLFxuICAgICAgICBjYW52YXNXaWR0aCxcbiAgICAgICAgY2FudmFzSGVpZ2h0XG4gICAgfSA9ICRwcm9wcygpXG5cbiAgICBmdW5jdGlvbiBnZXRQb2x5Z29uUG9pbnRzKCkge1xuICAgICAgICByZXR1cm4gKGZvY3VzcG9pbnQ/LnZlcnRpY2VzID8/IFtdKVxuICAgICAgICAgICAgLm1hcCgodmVydGV4KSA9PiBgJHt2ZXJ0ZXgueCAqIGNhbnZhc1dpZHRofSwke3ZlcnRleC55ICogY2FudmFzSGVpZ2h0fWApXG4gICAgICAgICAgICAuam9pbignICcpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0VmVydGV4WCh2ZXJ0ZXgpIHtcbiAgICAgICAgcmV0dXJuIHZlcnRleC54ICogY2FudmFzV2lkdGhcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRWZXJ0ZXhZKHZlcnRleCkge1xuICAgICAgICByZXR1cm4gdmVydGV4LnkgKiBjYW52YXNIZWlnaHRcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRFZGdlTWlkcG9pbnRzKCkge1xuICAgICAgICBjb25zdCB2ZXJ0aWNlcyA9IGZvY3VzcG9pbnQ/LnZlcnRpY2VzID8/IFtdXG5cbiAgICAgICAgcmV0dXJuIHZlcnRpY2VzLm1hcCgodmVydGV4LCB2ZXJ0ZXhJbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV4dFZlcnRleCA9IHZlcnRpY2VzWyh2ZXJ0ZXhJbmRleCArIDEpICUgdmVydGljZXMubGVuZ3RoXVxuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHg6ICh2ZXJ0ZXgueCArIG5leHRWZXJ0ZXgueCkgLyAyLFxuICAgICAgICAgICAgICAgIHk6ICh2ZXJ0ZXgueSArIG5leHRWZXJ0ZXgueSkgLyAyLFxuICAgICAgICAgICAgICAgIGluc2VydEFmdGVySW5kZXg6IHZlcnRleEluZGV4LFxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZFZlcnRleChpbnNlcnRBZnRlckluZGV4LCB2ZXJ0ZXgpIHtcbiAgICAgICAgZm9jdXNwb2ludHMudXBkYXRlKChpdGVtcykgPT5cbiAgICAgICAgICAgIGl0ZW1zLm1hcCgocG9pbnQsIGN1cnJlbnRJbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50SW5kZXggIT09IGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwb2ludFxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnN0IHZlcnRpY2VzID0gWy4uLnBvaW50LnZlcnRpY2VzXVxuXG4gICAgICAgICAgICAgICAgdmVydGljZXMuc3BsaWNlKGluc2VydEFmdGVySW5kZXggKyAxLCAwLCB7XG4gICAgICAgICAgICAgICAgICAgIHg6IHZlcnRleC54LFxuICAgICAgICAgICAgICAgICAgICB5OiB2ZXJ0ZXgueSxcbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgLi4ucG9pbnQsXG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2VzLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmVWZXJ0ZXgodmVydGV4SW5kZXgpIHtcbiAgICAgICAgZm9jdXNwb2ludHMudXBkYXRlKChpdGVtcykgPT5cbiAgICAgICAgICAgIGl0ZW1zLm1hcCgocG9pbnQsIGN1cnJlbnRJbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEluZGV4ICE9PSBpbmRleCB8fFxuICAgICAgICAgICAgICAgICAgICAhQXJyYXkuaXNBcnJheShwb2ludC52ZXJ0aWNlcykgfHxcbiAgICAgICAgICAgICAgICAgICAgcG9pbnQudmVydGljZXMubGVuZ3RoIDw9IDNcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBvaW50XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgLi4ucG9pbnQsXG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2VzOiBwb2ludC52ZXJ0aWNlcy5maWx0ZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAoXywgY3VycmVudFZlcnRleEluZGV4KSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRWZXJ0ZXhJbmRleCAhPT0gdmVydGV4SW5kZXhcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xhbXAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIE1hdGgubWF4KDAsIE1hdGgubWluKDEsIHZhbHVlKSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwb2x5Z29uVmVydGV4SW50ZXJhY3Rpb24obm9kZSwgdmVydGV4SW5kZXgpIHtcbiAgICAgICAgY29uc3QgaW50ZXJhY3RhYmxlID0gaW50ZXJhY3Qobm9kZSkuZHJhZ2dhYmxlKHtcbiAgICAgICAgICAgIGxpc3RlbmVyczoge1xuICAgICAgICAgICAgICAgIHN0YXJ0KCkge1xuICAgICAgICAgICAgICAgICAgICBhY3RpdmF0ZUZvY3VzcG9pbnQoaW5kZXgpXG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIG1vdmUoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhbnZhc1dpZHRoIDw9IDAgfHwgY2FudmFzSGVpZ2h0IDw9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgZm9jdXNwb2ludHMudXBkYXRlKChpdGVtcykgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zLm1hcCgocG9pbnQsIGN1cnJlbnRJbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudEluZGV4ICE9PSBpbmRleCB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhQXJyYXkuaXNBcnJheShwb2ludC52ZXJ0aWNlcylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBvaW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ucG9pbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2VzOiBwb2ludC52ZXJ0aWNlcy5tYXAoKHZlcnRleCwgY3VycmVudFZlcnRleEluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudFZlcnRleEluZGV4ICE9PSB2ZXJ0ZXhJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2ZXJ0ZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi52ZXJ0ZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogY2xhbXAodmVydGV4LnggKyBldmVudC5keCAvIGNhbnZhc1dpZHRoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiBjbGFtcCh2ZXJ0ZXgueSArIGV2ZW50LmR5IC8gY2FudmFzSGVpZ2h0KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkZXN0cm95KCkge1xuICAgICAgICAgICAgICAgIGludGVyYWN0YWJsZS51bnNldCgpXG4gICAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcG9seWdvblNoYXBlSW50ZXJhY3Rpb24obm9kZSkge1xuICAgICAgICBjb25zdCBpbnRlcmFjdGFibGUgPSBpbnRlcmFjdChub2RlKS5kcmFnZ2FibGUoe1xuICAgICAgICAgICAgbGlzdGVuZXJzOiB7XG4gICAgICAgICAgICAgICAgc3RhcnQoKSB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGl2YXRlRm9jdXNwb2ludChpbmRleClcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgbW92ZShldmVudCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2FudmFzV2lkdGggPD0gMCB8fCBjYW52YXNIZWlnaHQgPD0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBmb2N1c3BvaW50cy51cGRhdGUoKGl0ZW1zKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXMubWFwKChwb2ludCwgY3VycmVudEluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50SW5kZXggIT09IGluZGV4IHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFBcnJheS5pc0FycmF5KHBvaW50LnZlcnRpY2VzKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb2ludC52ZXJ0aWNlcy5sZW5ndGggPT09IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBvaW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbWluWCA9IE1hdGgubWluKC4uLnBvaW50LnZlcnRpY2VzLm1hcCgodmVydGV4KSA9PiB2ZXJ0ZXgueCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbWF4WCA9IE1hdGgubWF4KC4uLnBvaW50LnZlcnRpY2VzLm1hcCgodmVydGV4KSA9PiB2ZXJ0ZXgueCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbWluWSA9IE1hdGgubWluKC4uLnBvaW50LnZlcnRpY2VzLm1hcCgodmVydGV4KSA9PiB2ZXJ0ZXgueSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbWF4WSA9IE1hdGgubWF4KC4uLnBvaW50LnZlcnRpY2VzLm1hcCgodmVydGV4KSA9PiB2ZXJ0ZXgueSkpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZXF1ZXN0ZWREZWx0YVggPSBldmVudC5keCAvIGNhbnZhc1dpZHRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVxdWVzdGVkRGVsdGFZID0gZXZlbnQuZHkgLyBjYW52YXNIZWlnaHRcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlbHRhWCA9IE1hdGgubWF4KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtbWluWCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5taW4oMSAtIG1heFgsIHJlcXVlc3RlZERlbHRhWClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkZWx0YVkgPSBNYXRoLm1heChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLW1pblksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1hdGgubWluKDEgLSBtYXhZLCByZXF1ZXN0ZWREZWx0YVkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ucG9pbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2VzOiBwb2ludC52ZXJ0aWNlcy5tYXAoKHZlcnRleCkgPT4gKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnZlcnRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IHZlcnRleC54ICsgZGVsdGFYLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogdmVydGV4LnkgKyBkZWx0YVksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pXG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRlc3Ryb3koKSB7XG4gICAgICAgICAgICAgICAgaW50ZXJhY3RhYmxlLnVuc2V0KClcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuPCEtLSBzdmVsdGUtaWdub3JlIGExMXlfY2xpY2tfZXZlbnRzX2hhdmVfa2V5X2V2ZW50cyAtLT5cbjwhLS0gc3ZlbHRlLWlnbm9yZSBhMTF5X25vX3N0YXRpY19lbGVtZW50X2ludGVyYWN0aW9ucyAtLT5cbjxzdmdcbiAgICBjbGFzcz1cImZvY3VzcG9pbnQtcG9seWdvblwiXG4gICAgY2xhc3M6YWN0aXZlPXtmb2N1c3BvaW50Py5hY3RpdmV9XG4gICAgY2xhc3M6b3BhY2l0eS0wPXshaW5pdGlhbGl6ZWR9XG4gICAgd2lkdGg9e2NhbnZhc1dpZHRofVxuICAgIGhlaWdodD17Y2FudmFzSGVpZ2h0fVxuPlxuICAgIDxwb2x5Z29uXG4gICAgICAgIGNsYXNzPVwicG9seWdvbi1zaGFwZVwiXG4gICAgICAgIHVzZTpwb2x5Z29uU2hhcGVJbnRlcmFjdGlvblxuICAgICAgICBwb2ludHM9e2dldFBvbHlnb25Qb2ludHMoKX1cbiAgICAgICAgb25jbGljaz17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgYWN0aXZhdGVGb2N1c3BvaW50KGluZGV4KVxuICAgICAgICB9fVxuICAgIC8+XG48L3N2Zz5cblxueyNpZiBmb2N1c3BvaW50Py5hY3RpdmV9XG4gICAgeyNlYWNoIGZvY3VzcG9pbnQudmVydGljZXMgPz8gW10gYXMgdmVydGV4LCB2ZXJ0ZXhJbmRleH1cbiAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3M9XCJwb2x5Z29uLXZlcnRleFwiXG4gICAgICAgICAgICBjbGFzczpvcGFjaXR5LTA9eyFpbml0aWFsaXplZH1cbiAgICAgICAgICAgIHN0eWxlPVwidHJhbnNmb3JtOiB0cmFuc2xhdGUzZCh7Z2V0VmVydGV4WCh2ZXJ0ZXgpfXB4LCB7Z2V0VmVydGV4WSh2ZXJ0ZXgpfXB4LCAwKTtcIlxuICAgICAgICA+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgdXNlOnBvbHlnb25WZXJ0ZXhJbnRlcmFjdGlvbj17dmVydGV4SW5kZXh9XG4gICAgICAgICAgICAgICAgY2xhc3M9XCJwb2x5Z29uLWhhbmRsZVwiXG4gICAgICAgICAgICAgICAgb25jbGljaz17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgYWN0aXZhdGVGb2N1c3BvaW50KGluZGV4KVxuICAgICAgICB9fVxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJNb3ZlIHBvbHlnb24gdmVydGV4IHt2ZXJ0ZXhJbmRleCArIDF9XCJcbiAgICAgICAgICAgID48L2J1dHRvbj5cblxuICAgICAgICAgICAgeyNpZiBmb2N1c3BvaW50LnZlcnRpY2VzLmxlbmd0aCA+IDN9XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJwb2x5Z29uLXJlbW92ZS1oYW5kbGVcIlxuICAgICAgICAgICAgICAgICAgICBvbmNsaWNrPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgICAgICByZW1vdmVWZXJ0ZXgodmVydGV4SW5kZXgpXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiUmVtb3ZlIHBvbHlnb24gdmVydGV4IHt2ZXJ0ZXhJbmRleCArIDF9XCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMWVtXCIgaGVpZ2h0PVwiMWVtXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0wIDBoMjR2MjRIMHpcIiBmaWxsPVwibm9uZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0xNyA2VjRjMC0xLjEtLjktMi0yLTJIOWMtMS4xIDAtMiAuOS0yIDJ2MkgydjJoMnYxMmMwIDEuMS45IDIgMiAyaDEyYzEuMSAwIDItLjkgMi0yVjhoMlY2ek05IDRoNnYySDl6TTYgMjBWOGgxMnYxMnpcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNOSAxMGgydjhIOXptNCAwaDJ2OGgtMnpcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cblxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgey9pZn1cbiAgICAgICAgPC9kaXY+XG4gICAgey9lYWNofVxuXG4gICAgeyNlYWNoIGdldEVkZ2VNaWRwb2ludHMoKSBhcyBtaWRwb2ludH1cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBjbGFzcz1cInBvbHlnb24tYWRkLWhhbmRsZVwiXG4gICAgICAgICAgICBjbGFzczpvcGFjaXR5LTA9eyFpbml0aWFsaXplZH1cbiAgICAgICAgICAgIHN0eWxlPVwidHJhbnNmb3JtOiB0cmFuc2xhdGUzZCh7Z2V0VmVydGV4WChtaWRwb2ludCl9cHgsIHtnZXRWZXJ0ZXhZKG1pZHBvaW50KX1weCwgMCkgdHJhbnNsYXRlKC01MCUsIC01MCUpO1wiXG4gICAgICAgICAgICBvbmNsaWNrPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcblxuICAgICAgICAgICAgICAgIGFkZFZlcnRleChcbiAgICAgICAgICAgICAgICAgICAgbWlkcG9pbnQuaW5zZXJ0QWZ0ZXJJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgbWlkcG9pbnRcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkFkZCBwb2x5Z29uIHZlcnRleFwiXG4gICAgICAgID5cbiAgICAgICAgICAgICtcbiAgICAgICAgPC9idXR0b24+XG4gICAgey9lYWNofVxuey9pZn1cblxuPHN0eWxlPlxuICAgIC5mb2N1c3BvaW50LXBvbHlnb24ge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGluc2V0OiAwO1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjE1cyBlYXNlO1xuICAgIH1cblxuICAgIC5mb2N1c3BvaW50LXBvbHlnb24gcG9seWdvbiB7XG4gICAgICAgIGZpbGw6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgICAgICAgc3Ryb2tlOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XG4gICAgICAgIHN0cm9rZS13aWR0aDogMjtcbiAgICAgICAgc3Ryb2tlLWRhc2hhcnJheTogNiA0O1xuICAgICAgICBwb2ludGVyLWV2ZW50czogYWxsO1xuICAgICAgICBjdXJzb3I6IGdyYWI7XG4gICAgfVxuXG4gICAgLmZvY3VzcG9pbnQtcG9seWdvbiBwb2x5Z29uOmFjdGl2ZSB7XG4gICAgICAgIGN1cnNvcjogZ3JhYmJpbmc7XG4gICAgfVxuXG4gICAgLmZvY3VzcG9pbnQtcG9seWdvbi5hY3RpdmUgcG9seWdvbiB7XG4gICAgICAgIGZpbGw6IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgICAgICAgc3Ryb2tlOiAjZmY4NzAwO1xuICAgICAgICBzdHJva2UtZGFzaGFycmF5OiBub25lO1xuICAgIH1cblxuICAgIC5wb2x5Z29uLXZlcnRleCxcbiAgICAucG9seWdvbi1hZGQtaGFuZGxlIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgfVxuXG4gICAgLnBvbHlnb24tdmVydGV4IHtcbiAgICAgICAgei1pbmRleDogNztcbiAgICB9XG5cbiAgICAucG9seWdvbi1oYW5kbGUge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcblxuICAgICAgICB3aWR0aDogMTRweDtcbiAgICAgICAgaGVpZ2h0OiAxNHB4O1xuICAgICAgICBwYWRkaW5nOiAwO1xuXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZjg3MDA7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjgpO1xuXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICBjdXJzb3I6IGdyYWI7XG4gICAgfVxuXG4gICAgLnBvbHlnb24taGFuZGxlOmFjdGl2ZSB7XG4gICAgICAgIGN1cnNvcjogZ3JhYmJpbmc7XG4gICAgfVxuXG4gICAgLnBvbHlnb24taGFuZGxlOmZvY3VzLXZpc2libGUge1xuICAgICAgICBvdXRsaW5lOiAycHggc29saWQgI2ZmZjtcbiAgICAgICAgb3V0bGluZS1vZmZzZXQ6IDJweDtcbiAgICB9XG5cbiAgICAucG9seWdvbi1hZGQtaGFuZGxlIHtcbiAgICAgICAgei1pbmRleDogNjtcblxuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBwbGFjZS1pdGVtczogY2VudGVyO1xuXG4gICAgICAgIHdpZHRoOiAxOHB4O1xuICAgICAgICBoZWlnaHQ6IDE4cHg7XG4gICAgICAgIHBhZGRpbmc6IDA7XG5cbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE7XG5cbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cblxuICAgIC5wb2x5Z29uLWFkZC1oYW5kbGU6aG92ZXIge1xuICAgICAgICBib3JkZXItY29sb3I6ICNmZjg3MDA7XG4gICAgICAgIGNvbG9yOiAjZmY4NzAwO1xuICAgIH1cblxuICAgIC5wb2x5Z29uLXJlbW92ZS1oYW5kbGUge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMTJweDtcbiAgICAgICAgbGVmdDogMDtcblxuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBwbGFjZS1pdGVtczogY2VudGVyO1xuXG4gICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgIHBhZGRpbmc6IDA7XG5cbiAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICNkYzM1NDU7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcblxuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cblxuICAgIC5wb2x5Z29uLXJlbW92ZS1oYW5kbGUgc3ZnIHtcbiAgICAgICAgd2lkdGg6IDE0cHg7XG4gICAgICAgIGhlaWdodDogMTRweDtcbiAgICAgICAgZmlsbDogY3VycmVudENvbG9yO1xuICAgIH1cblxuICAgIC5wb2x5Z29uLXZlcnRleDpmb2N1cy13aXRoaW4gLnBvbHlnb24tcmVtb3ZlLWhhbmRsZSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICAgIH1cblxuICAgIC5vcGFjaXR5LTAge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbjwvc3R5bGU+XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQTZSQSxJQUFJLGtDQUFtQixDQUFDO0FBQ3hCLFFBQVEsa0JBQWtCO0FBQzFCLFFBQVEsUUFBUTtBQUNoQixRQUFRLG9CQUFvQjtBQUM1QixRQUFRLDhCQUE4QjtBQUN0Qzs7QUFFQSxJQUFJLGtDQUFtQixDQUFDLDhCQUFPLENBQUM7QUFDaEMsUUFBUSx3QkFBd0I7QUFDaEMsUUFBUSxnQ0FBZ0M7QUFDeEMsUUFBUSxlQUFlO0FBQ3ZCLFFBQVEscUJBQXFCO0FBQzdCLFFBQVEsbUJBQW1CO0FBQzNCLFFBQVEsWUFBWTtBQUNwQjs7QUFFQSxJQUFJLGtDQUFtQixDQUFDLDhCQUFPLE9BQU8sQ0FBQztBQUN2QyxRQUFRLGdCQUFnQjtBQUN4Qjs7QUFFQSxJQUFJLG1CQUFtQixzQkFBTyxDQUFDLDhCQUFPLENBQUM7QUFDdkMsUUFBUSx3QkFBd0I7QUFDaEMsUUFBUSxlQUFlO0FBQ3ZCLFFBQVEsc0JBQXNCO0FBQzlCOztBQUVBLElBQUksOEJBQWU7QUFDbkIsSUFBSSxrQ0FBbUIsQ0FBQztBQUN4QixRQUFRLGtCQUFrQjtBQUMxQixRQUFRLE1BQU07QUFDZCxRQUFRLE9BQU87QUFDZjs7QUFFQSxJQUFJLDhCQUFlLENBQUM7QUFDcEIsUUFBUSxVQUFVO0FBQ2xCOztBQUVBLElBQUksOEJBQWUsQ0FBQztBQUNwQixRQUFRLGtCQUFrQjtBQUMxQixRQUFRLE1BQU07QUFDZCxRQUFRLE9BQU87O0FBRWYsUUFBUSxXQUFXO0FBQ25CLFFBQVEsWUFBWTtBQUNwQixRQUFRLFVBQVU7O0FBRWxCLFFBQVEseUJBQXlCO0FBQ2pDLFFBQVEsa0JBQWtCO0FBQzFCLFFBQVEsOEJBQThCOztBQUV0QyxRQUFRLGdDQUFnQztBQUN4QyxRQUFRLFlBQVk7QUFDcEI7O0FBRUEsSUFBSSw4QkFBZSxPQUFPLENBQUM7QUFDM0IsUUFBUSxnQkFBZ0I7QUFDeEI7O0FBRUEsSUFBSSw4QkFBZSxjQUFjLENBQUM7QUFDbEMsUUFBUSx1QkFBdUI7QUFDL0IsUUFBUSxtQkFBbUI7QUFDM0I7O0FBRUEsSUFBSSxrQ0FBbUIsQ0FBQztBQUN4QixRQUFRLFVBQVU7O0FBRWxCLFFBQVEsYUFBYTtBQUNyQixRQUFRLG1CQUFtQjs7QUFFM0IsUUFBUSxXQUFXO0FBQ25CLFFBQVEsWUFBWTtBQUNwQixRQUFRLFVBQVU7O0FBRWxCLFFBQVEsMENBQTBDO0FBQ2xELFFBQVEsa0JBQWtCO0FBQzFCLFFBQVEsK0JBQStCO0FBQ3ZDLFFBQVEsV0FBVzs7QUFFbkIsUUFBUSxlQUFlO0FBQ3ZCLFFBQVEsY0FBYzs7QUFFdEIsUUFBUSxlQUFlO0FBQ3ZCOztBQUVBLElBQUksa0NBQW1CLE1BQU0sQ0FBQztBQUM5QixRQUFRLHFCQUFxQjtBQUM3QixRQUFRLGNBQWM7QUFDdEI7O0FBRUEsSUFBSSxxQ0FBc0IsQ0FBQztBQUMzQixRQUFRLGtCQUFrQjtBQUMxQixRQUFRLFNBQVM7QUFDakIsUUFBUSxPQUFPOztBQUVmLFFBQVEsYUFBYTtBQUNyQixRQUFRLG1CQUFtQjs7QUFFM0IsUUFBUSxXQUFXO0FBQ25CLFFBQVEsWUFBWTtBQUNwQixRQUFRLFVBQVU7O0FBRWxCLFFBQVEsU0FBUztBQUNqQixRQUFRLGtCQUFrQjtBQUMxQixRQUFRLG1CQUFtQjtBQUMzQixRQUFRLFdBQVc7O0FBRW5CLFFBQVEsMkJBQTJCOztBQUVuQyxRQUFRLFVBQVU7QUFDbEIsUUFBUSxvQkFBb0I7QUFDNUIsUUFBUSxlQUFlO0FBQ3ZCOztBQUVBLElBQUkscUNBQXNCLENBQUMsMEJBQUcsQ0FBQztBQUMvQixRQUFRLFdBQVc7QUFDbkIsUUFBUSxZQUFZO0FBQ3BCLFFBQVEsa0JBQWtCO0FBQzFCOztBQUVBLElBQUksOEJBQWUsYUFBYSxDQUFDLDZDQUFzQixDQUFDO0FBQ3hELFFBQVEsVUFBVTtBQUNsQixRQUFRLG9CQUFvQjtBQUM1Qjs7QUFFQSxJQUFJLHlCQUFVLENBQUM7QUFDZixRQUFRLFVBQVU7QUFDbEI7In0= */"
};
function Polygon($$anchor, $$props) {
  check_target(new.target);
  push($$props, true, Polygon);
  append_styles($$anchor, $$css4);
  let focuspoint = prop($$props, "focuspoint", 7), index2 = prop($$props, "index", 7), initialized = prop($$props, "initialized", 7), canvasWidth = prop($$props, "canvasWidth", 7), canvasHeight = prop($$props, "canvasHeight", 7);
  function getPolygonPoints() {
    return (focuspoint()?.vertices ?? []).map((vertex) => `${vertex.x * canvasWidth()},${vertex.y * canvasHeight()}`).join(" ");
  }
  function getVertexX(vertex) {
    return vertex.x * canvasWidth();
  }
  function getVertexY(vertex) {
    return vertex.y * canvasHeight();
  }
  function getEdgeMidpoints() {
    const vertices = focuspoint()?.vertices ?? [];
    return vertices.map((vertex, vertexIndex) => {
      const nextVertex = vertices[(vertexIndex + 1) % vertices.length];
      return {
        x: (vertex.x + nextVertex.x) / 2,
        y: (vertex.y + nextVertex.y) / 2,
        insertAfterIndex: vertexIndex
      };
    });
  }
  function addVertex(insertAfterIndex, vertex) {
    focuspoints.update((items) => items.map((point2, currentIndex) => {
      if (strict_equals(currentIndex, index2(), false)) {
        return point2;
      }
      const vertices = [...point2.vertices];
      vertices.splice(insertAfterIndex + 1, 0, { x: vertex.x, y: vertex.y });
      return { ...point2, vertices };
    }));
  }
  function removeVertex(vertexIndex) {
    focuspoints.update((items) => items.map((point2, currentIndex) => {
      if (strict_equals(currentIndex, index2(), false) || !Array.isArray(point2.vertices) || point2.vertices.length <= 3) {
        return point2;
      }
      return {
        ...point2,
        vertices: point2.vertices.filter((_, currentVertexIndex) => strict_equals(currentVertexIndex, vertexIndex, false))
      };
    }));
  }
  function clamp2(value) {
    return Math.max(0, Math.min(1, value));
  }
  function polygonVertexInteraction(node, vertexIndex) {
    const interactable = interact4(node).draggable({
      listeners: {
        start() {
          activateFocuspoint(index2());
        },
        move(event2) {
          if (canvasWidth() <= 0 || canvasHeight() <= 0) {
            return;
          }
          focuspoints.update((items) => items.map((point2, currentIndex) => {
            if (strict_equals(currentIndex, index2(), false) || !Array.isArray(point2.vertices)) {
              return point2;
            }
            return {
              ...point2,
              vertices: point2.vertices.map((vertex, currentVertexIndex) => {
                if (strict_equals(currentVertexIndex, vertexIndex, false)) {
                  return vertex;
                }
                return {
                  ...vertex,
                  x: clamp2(vertex.x + event2.dx / canvasWidth()),
                  y: clamp2(vertex.y + event2.dy / canvasHeight())
                };
              })
            };
          }));
        }
      }
    });
    return {
      destroy() {
        interactable.unset();
      }
    };
  }
  function polygonShapeInteraction(node) {
    const interactable = interact4(node).draggable({
      listeners: {
        start() {
          activateFocuspoint(index2());
        },
        move(event2) {
          if (canvasWidth() <= 0 || canvasHeight() <= 0) {
            return;
          }
          focuspoints.update((items) => items.map((point2, currentIndex) => {
            if (strict_equals(currentIndex, index2(), false) || !Array.isArray(point2.vertices) || strict_equals(point2.vertices.length, 0)) {
              return point2;
            }
            const minX = Math.min(...point2.vertices.map((vertex) => vertex.x));
            const maxX = Math.max(...point2.vertices.map((vertex) => vertex.x));
            const minY = Math.min(...point2.vertices.map((vertex) => vertex.y));
            const maxY = Math.max(...point2.vertices.map((vertex) => vertex.y));
            const requestedDeltaX = event2.dx / canvasWidth();
            const requestedDeltaY = event2.dy / canvasHeight();
            const deltaX = Math.max(-minX, Math.min(1 - maxX, requestedDeltaX));
            const deltaY = Math.max(-minY, Math.min(1 - maxY, requestedDeltaY));
            return {
              ...point2,
              vertices: point2.vertices.map((vertex) => ({ ...vertex, x: vertex.x + deltaX, y: vertex.y + deltaY }))
            };
          }));
        }
      }
    });
    return {
      destroy() {
        interactable.unset();
      }
    };
  }
  var $$exports = {
    ...legacy_api(),
    get focuspoint() {
      return focuspoint();
    },
    set focuspoint($$value) {
      focuspoint($$value);
      flushSync();
    },
    get index() {
      return index2();
    },
    set index($$value) {
      index2($$value);
      flushSync();
    },
    get initialized() {
      return initialized();
    },
    set initialized($$value) {
      initialized($$value);
      flushSync();
    },
    get canvasWidth() {
      return canvasWidth();
    },
    set canvasWidth($$value) {
      canvasWidth($$value);
      flushSync();
    },
    get canvasHeight() {
      return canvasHeight();
    },
    set canvasHeight($$value) {
      canvasHeight($$value);
      flushSync();
    }
  };
  var fragment = root_4();
  var svg = first_child(fragment);
  let classes;
  var polygon = child(svg);
  action(polygon, ($$node) => polygonShapeInteraction?.($$node));
  reset(svg);
  var node_1 = sibling(svg, 2);
  {
    var consequent_1 = ($$anchor2) => {
      var fragment_1 = root_3();
      var node_2 = first_child(fragment_1);
      add_svelte_meta(
        () => each(node_2, 17, () => focuspoint().vertices ?? [], index, ($$anchor3, vertex, vertexIndex) => {
          var div = root_1();
          let classes_1;
          var button = child(div);
          set_attribute2(button, "aria-label", `Move polygon vertex ${vertexIndex + 1}`);
          action(button, ($$node, $$action_arg) => polygonVertexInteraction?.($$node, $$action_arg), () => vertexIndex);
          var node_3 = sibling(button, 2);
          {
            var consequent = ($$anchor4) => {
              var button_1 = root4();
              set_attribute2(button_1, "aria-label", `Remove polygon vertex ${vertexIndex + 1}`);
              delegated("click", button_1, function click_2(event2) {
                event2.preventDefault();
                event2.stopPropagation();
                removeVertex(vertexIndex);
              });
              append($$anchor4, button_1);
            };
            add_svelte_meta(
              () => if_block(node_3, ($$render) => {
                if (focuspoint().vertices.length > 3) $$render(consequent);
              }),
              "if",
              Polygon,
              241,
              12
            );
          }
          reset(div);
          template_effect(
            ($0, $1) => {
              classes_1 = set_class(div, 1, "polygon-vertex svelte-1pii9ng", null, classes_1, { "opacity-0": !initialized() });
              set_style(div, `transform: translate3d(${$0 ?? ""}px, ${$1 ?? ""}px, 0);`);
            },
            [
              () => getVertexX(get2(vertex)),
              () => getVertexY(get2(vertex))
            ]
          );
          delegated("click", button, function click_1(event2) {
            event2.preventDefault();
            event2.stopPropagation();
            activateFocuspoint(index2());
          });
          append($$anchor3, div);
        }),
        "each",
        Polygon,
        223,
        4
      );
      var node_4 = sibling(node_2, 2);
      add_svelte_meta(
        () => each(node_4, 17, getEdgeMidpoints, index, ($$anchor3, midpoint) => {
          var button_2 = root_2();
          let classes_2;
          template_effect(
            ($0, $1) => {
              classes_2 = set_class(button_2, 1, "polygon-add-handle svelte-1pii9ng", null, classes_2, { "opacity-0": !initialized() });
              set_style(button_2, `transform: translate3d(${$0 ?? ""}px, ${$1 ?? ""}px, 0) translate(-50%, -50%);`);
            },
            [
              () => getVertexX(get2(midpoint)),
              () => getVertexY(get2(midpoint))
            ]
          );
          delegated("click", button_2, function click_3(event2) {
            event2.preventDefault();
            event2.stopPropagation();
            addVertex(get2(midpoint).insertAfterIndex, get2(midpoint));
          });
          append($$anchor3, button_2);
        }),
        "each",
        Polygon,
        263,
        4
      );
      append($$anchor2, fragment_1);
    };
    add_svelte_meta(
      () => if_block(node_1, ($$render) => {
        if (focuspoint()?.active) $$render(consequent_1);
      }),
      "if",
      Polygon,
      222,
      0
    );
  }
  template_effect(
    ($0) => {
      classes = set_class(svg, 0, "focuspoint-polygon svelte-1pii9ng", null, classes, { active: focuspoint()?.active, "opacity-0": !initialized() });
      set_attribute2(svg, "width", canvasWidth());
      set_attribute2(svg, "height", canvasHeight());
      set_attribute2(polygon, "points", $0);
    },
    [() => getPolygonPoints()]
  );
  delegated("click", polygon, function click(event2) {
    event2.stopPropagation();
    activateFocuspoint(index2());
  });
  append($$anchor, fragment);
  return pop($$exports);
}
delegate(["click"]);
create_custom_element(
  Polygon,
  {
    focuspoint: {},
    index: {},
    initialized: {},
    canvasWidth: {},
    canvasHeight: {}
  },
  [],
  [],
  { mode: "open" }
);

// Resources/Private/JavaScript/components/Shapes/Rectangle.svelte
import interact5 from "interactjs";
Rectangle[FILENAME] = "Resources/Private/JavaScript/components/Shapes/Rectangle.svelte";
var root5 = add_locations(from_html(`<div><span class="text-break"> </span> <span class="ui-resizable-handle ui-resizable-nw svelte-ntejuf"></span> <span class="ui-resizable-handle ui-resizable-ne svelte-ntejuf"></span> <span class="ui-resizable-handle ui-resizable-sw svelte-ntejuf"></span> <span class="ui-resizable-handle ui-resizable-se svelte-ntejuf"></span></div>`), Rectangle[FILENAME], [[123, 0, [[133, 4], [135, 4], [136, 4], [137, 4], [138, 4]]]]);
var $$css5 = {
  hash: "svelte-ntejuf",
  code: "\n\n\n    .draggable.svelte-ntejuf {\n        position: absolute;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        transition: opacity 0.15s ease;\n        user-select: none;\n    }\n\n    .style1.svelte-ntejuf {\n        display: inline-grid;\n        background-color: rgba(0, 0, 0, 0.6);\n        border: 1px dashed rgba(255, 255, 255, 0.8);\n        color: white;\n        padding: 10px;\n        --typo3-state-primary-bg: rgba(255, 255, 255, 0.8);\n    }\n\n    .opacity-0.svelte-ntejuf {\n        opacity: 0;\n    }\n\n    .style1.active.svelte-ntejuf {\n        border-color: #ff8700;\n        --typo3-state-primary-bg: #ff8700;\n        border-style: solid;\n        background-color: rgba(0, 0, 0, 0.8);\n    }\n\n    .ui-resizable-handle.ui-resizable-nw.svelte-ntejuf, .ui-resizable-handle.ui-resizable-ne.svelte-ntejuf {\n        top: -3px;\n    }\n\n    .ui-resizable-handle.ui-resizable-sw.svelte-ntejuf, .ui-resizable-handle.ui-resizable-se.svelte-ntejuf {\n        bottom: -3px;\n    }\n\n    .ui-resizable-handle.ui-resizable-ne.svelte-ntejuf, .ui-resizable-handle.ui-resizable-se.svelte-ntejuf {\n        right: -3px;\n    }\n\n    .ui-resizable-handle.ui-resizable-nw.svelte-ntejuf, .ui-resizable-handle.ui-resizable-sw.svelte-ntejuf {\n        left: -3px;\n    }\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVjdGFuZ2xlLnN2ZWx0ZSIsInNvdXJjZXMiOlsiUmVjdGFuZ2xlLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuICAgIGltcG9ydCBpbnRlcmFjdCBmcm9tICdpbnRlcmFjdGpzJ1xuICAgIGltcG9ydCB7YWN0aXZhdGVGb2N1c3BvaW50LCBmb2N1c1BvaW50TmFtZSwgZm9jdXNwb2ludHN9IGZyb20gJy4uLy4uL3N0b3JlLnN2ZWx0ZS5qcydcblxuICAgIGxldCB7XG4gICAgICAgIGZvY3VzcG9pbnQsXG4gICAgICAgIGluZGV4LFxuICAgICAgICBpbml0aWFsaXplZCxcbiAgICAgICAgY2FudmFzV2lkdGgsXG4gICAgICAgIGNhbnZhc0hlaWdodCxcbiAgICAgICAgZ2V0UG9zaXRpb25YLFxuICAgICAgICBnZXRQb3NpdGlvblksXG4gICAgICAgIGdldEZvY3VzcG9pbnRXaWR0aCxcbiAgICAgICAgZ2V0Rm9jdXNwb2ludEhlaWdodFxuICAgIH0gPSAkcHJvcHMoKVxuXG4gICAgZnVuY3Rpb24gZ2V0Rm9jdXNwb2ludE5hbWUoKSB7XG4gICAgICAgIHJldHVybiBmb2N1c1BvaW50TmFtZShpbmRleClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbGFtcCh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgdmFsdWUpKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlY3RhbmdsZUludGVyYWN0aW9uKG5vZGUpIHtcbiAgICAgICAgY29uc3QgaW50ZXJhY3RhYmxlID0gaW50ZXJhY3Qobm9kZSlcbiAgICAgICAgICAgIC5yZXNpemFibGUoe1xuICAgICAgICAgICAgICAgIGVkZ2VzOiB7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBib3R0b206IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRvcDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyczogW1xuICAgICAgICAgICAgICAgICAgICBpbnRlcmFjdC5tb2RpZmllcnMucmVzdHJpY3RFZGdlcyh7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRlcjogJ3BhcmVudCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmRPbmx5OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBsaXN0ZW5lcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgbW92ZShldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNhbnZhc1dpZHRoIDw9IDAgfHwgY2FudmFzSGVpZ2h0IDw9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgZm9jdXNwb2ludHMudXBkYXRlKGl0ZW1zID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXMubWFwKChwb2ludCwgY3VycmVudEluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50SW5kZXggIT09IGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcG9pbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHggPSAoKHBvaW50LnggPz8gMCkgKiBjYW52YXNXaWR0aCkgKyBldmVudC5kZWx0YVJlY3QubGVmdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB5ID0gKChwb2ludC55ID8/IDApICogY2FudmFzSGVpZ2h0KSArIGV2ZW50LmRlbHRhUmVjdC50b3BcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ucG9pbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogZXZlbnQucmVjdC53aWR0aC9jYW52YXNXaWR0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogZXZlbnQucmVjdC5oZWlnaHQvY2FudmFzSGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogY2xhbXAoeC9jYW52YXNXaWR0aCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiBjbGFtcCh5L2NhbnZhc0hlaWdodClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGVuZCgpe1xuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZhdGVGb2N1c3BvaW50KGluZGV4KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5kcmFnZ2FibGUoe1xuICAgICAgICAgICAgICAgIG1vZGlmaWVyczogW1xuICAgICAgICAgICAgICAgICAgICBpbnRlcmFjdC5tb2RpZmllcnMucmVzdHJpY3RSZWN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3RyaWN0aW9uOiAncGFyZW50JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZE9ubHk6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIGF1dG9TY3JvbGw6IHRydWUsXG4gICAgICAgICAgICAgICAgbGlzdGVuZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgIG1vdmUoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYW52YXNXaWR0aCA8PSAwIHx8IGNhbnZhc0hlaWdodCA8PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGZvY3VzcG9pbnRzLnVwZGF0ZSgoaXRlbXMpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXMubWFwKChwb2ludCwgY3VycmVudEluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50SW5kZXggIT09IGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcG9pbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHggPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKChwb2ludC54ID8/IDApICogY2FudmFzV2lkdGgpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LmR4XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgeSA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKHBvaW50LnkgPz8gMCkgKiBjYW52YXNIZWlnaHQpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LmR5XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnBvaW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogY2xhbXAoeCAvIGNhbnZhc1dpZHRoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IGNsYW1wKHkgLyBjYW52YXNIZWlnaHQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgICAgIGVuZCgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2YXRlRm9jdXNwb2ludChpbmRleClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRlc3Ryb3koKSB7XG4gICAgICAgICAgICAgICAgaW50ZXJhY3RhYmxlLnVuc2V0KClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG48IS0tIHN2ZWx0ZS1pZ25vcmUgYTExeV9jbGlja19ldmVudHNfaGF2ZV9rZXlfZXZlbnRzIC0tPlxuPCEtLSBzdmVsdGUtaWdub3JlIGExMXlfbm9fc3RhdGljX2VsZW1lbnRfaW50ZXJhY3Rpb25zIC0tPlxuPGRpdlxuICAgIHVzZTpyZWN0YW5nbGVJbnRlcmFjdGlvblxuICAgIG9uY2xpY2s9eygpID0+IGFjdGl2YXRlRm9jdXNwb2ludChpbmRleCl9XG4gICAgY2xhc3M6YWN0aXZlPXtmb2N1c3BvaW50LmFjdGl2ZX1cbiAgICBjbGFzczpvcGFjaXR5LTA9eyFpbml0aWFsaXplZH1cbiAgICBjbGFzcz1cImRyYWdnYWJsZSBzdHlsZTEgcmVzaXphYmxlIGZvY3VzcG9pbnQtc2hhcGUgZm9jdXNwb2ludC1zaGFwZS0te2ZvY3VzcG9pbnQuc2hhcGUgPz8gJ3JlY3RhbmdsZSd9XCJcbiAgICBzdHlsZT1cInRyYW5zZm9ybTp0cmFuc2xhdGUzZCh7Z2V0UG9zaXRpb25YKGluZGV4KX1weCwge2dldFBvc2l0aW9uWShpbmRleCl9cHgsIDApOyB3aWR0aDoge2dldEZvY3VzcG9pbnRXaWR0aChpbmRleCl9cHg7IGhlaWdodDoge2dldEZvY3VzcG9pbnRIZWlnaHQoaW5kZXgpfXB4O1wiXG4gICAgZGF0YS14PVwie2dldFBvc2l0aW9uWChpbmRleCl9XCJcbiAgICBkYXRhLXk9XCJ7Z2V0UG9zaXRpb25ZKGluZGV4KX1cIlxuPlxuICAgIDxzcGFuIGNsYXNzPVwidGV4dC1icmVha1wiPntmb2N1c1BvaW50TmFtZShpbmRleCl9PC9zcGFuPlxuXG4gICAgPHNwYW4gY2xhc3M9XCJ1aS1yZXNpemFibGUtaGFuZGxlIHVpLXJlc2l6YWJsZS1ud1wiPjwvc3Bhbj5cbiAgICA8c3BhbiBjbGFzcz1cInVpLXJlc2l6YWJsZS1oYW5kbGUgdWktcmVzaXphYmxlLW5lXCI+PC9zcGFuPlxuICAgIDxzcGFuIGNsYXNzPVwidWktcmVzaXphYmxlLWhhbmRsZSB1aS1yZXNpemFibGUtc3dcIj48L3NwYW4+XG4gICAgPHNwYW4gY2xhc3M9XCJ1aS1yZXNpemFibGUtaGFuZGxlIHVpLXJlc2l6YWJsZS1zZVwiPjwvc3Bhbj5cbjwvZGl2PlxuXG48c3R5bGU+XG5cblxuICAgIC5kcmFnZ2FibGUge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMTVzIGVhc2U7XG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIH1cblxuICAgIC5zdHlsZTEge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZ3JpZDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICAgICAgICBib3JkZXI6IDFweCBkYXNoZWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIC0tdHlwbzMtc3RhdGUtcHJpbWFyeS1iZzogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICAgIH1cblxuICAgIC5vcGFjaXR5LTAge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgIH1cblxuICAgIC5zdHlsZTEuYWN0aXZlIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjZmY4NzAwO1xuICAgICAgICAtLXR5cG8zLXN0YXRlLXByaW1hcnktYmc6ICNmZjg3MDA7XG4gICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgICB9XG5cbiAgICAudWktcmVzaXphYmxlLWhhbmRsZS51aS1yZXNpemFibGUtbncsIC51aS1yZXNpemFibGUtaGFuZGxlLnVpLXJlc2l6YWJsZS1uZSB7XG4gICAgICAgIHRvcDogLTNweDtcbiAgICB9XG5cbiAgICAudWktcmVzaXphYmxlLWhhbmRsZS51aS1yZXNpemFibGUtc3csIC51aS1yZXNpemFibGUtaGFuZGxlLnVpLXJlc2l6YWJsZS1zZSB7XG4gICAgICAgIGJvdHRvbTogLTNweDtcbiAgICB9XG5cbiAgICAudWktcmVzaXphYmxlLWhhbmRsZS51aS1yZXNpemFibGUtbmUsIC51aS1yZXNpemFibGUtaGFuZGxlLnVpLXJlc2l6YWJsZS1zZSB7XG4gICAgICAgIHJpZ2h0OiAtM3B4O1xuICAgIH1cblxuICAgIC51aS1yZXNpemFibGUtaGFuZGxlLnVpLXJlc2l6YWJsZS1udywgLnVpLXJlc2l6YWJsZS1oYW5kbGUudWktcmVzaXphYmxlLXN3IHtcbiAgICAgICAgbGVmdDogLTNweDtcbiAgICB9XG48L3N0eWxlPlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQStJQSxJQUFJLHdCQUFVLENBQUM7QUFDZixRQUFRLGtCQUFrQjtBQUMxQixRQUFRLGFBQWE7QUFDckIsUUFBUSx1QkFBdUI7QUFDL0IsUUFBUSxtQkFBbUI7QUFDM0IsUUFBUSw4QkFBOEI7QUFDdEMsUUFBUSxpQkFBaUI7QUFDekI7O0FBRUEsSUFBSSxxQkFBTyxDQUFDO0FBQ1osUUFBUSxvQkFBb0I7QUFDNUIsUUFBUSxvQ0FBb0M7QUFDNUMsUUFBUSwyQ0FBMkM7QUFDbkQsUUFBUSxZQUFZO0FBQ3BCLFFBQVEsYUFBYTtBQUNyQixRQUFRLGtEQUFrRDtBQUMxRDs7QUFFQSxJQUFJLHdCQUFVLENBQUM7QUFDZixRQUFRLFVBQVU7QUFDbEI7O0FBRUEsSUFBSSxPQUFPLHFCQUFPLENBQUM7QUFDbkIsUUFBUSxxQkFBcUI7QUFDN0IsUUFBUSxpQ0FBaUM7QUFDekMsUUFBUSxtQkFBbUI7QUFDM0IsUUFBUSxvQ0FBb0M7QUFDNUM7O0FBRUEsSUFBSSxvQkFBb0IsOEJBQWdCLEVBQUUsb0JBQW9CLDhCQUFnQixDQUFDO0FBQy9FLFFBQVEsU0FBUztBQUNqQjs7QUFFQSxJQUFJLG9CQUFvQiw4QkFBZ0IsRUFBRSxvQkFBb0IsOEJBQWdCLENBQUM7QUFDL0UsUUFBUSxZQUFZO0FBQ3BCOztBQUVBLElBQUksb0JBQW9CLDhCQUFnQixFQUFFLG9CQUFvQiw4QkFBZ0IsQ0FBQztBQUMvRSxRQUFRLFdBQVc7QUFDbkI7O0FBRUEsSUFBSSxvQkFBb0IsOEJBQWdCLEVBQUUsb0JBQW9CLDhCQUFnQixDQUFDO0FBQy9FLFFBQVEsVUFBVTtBQUNsQjsifQ== */"
};
function Rectangle($$anchor, $$props) {
  check_target(new.target);
  push($$props, true, Rectangle);
  append_styles($$anchor, $$css5);
  let focuspoint = prop($$props, "focuspoint", 7), index2 = prop($$props, "index", 7), initialized = prop($$props, "initialized", 7), canvasWidth = prop($$props, "canvasWidth", 7), canvasHeight = prop($$props, "canvasHeight", 7), getPositionX = prop($$props, "getPositionX", 7), getPositionY = prop($$props, "getPositionY", 7), getFocuspointWidth = prop($$props, "getFocuspointWidth", 7), getFocuspointHeight = prop($$props, "getFocuspointHeight", 7);
  function getFocuspointName() {
    return focusPointName(index2());
  }
  function clamp2(value) {
    return Math.max(0, Math.min(1, value));
  }
  function rectangleInteraction(node) {
    const interactable = interact5(node).resizable({
      edges: { left: true, right: true, bottom: true, top: true },
      modifiers: [
        interact5.modifiers.restrictEdges({ outer: "parent", endOnly: true })
      ],
      listeners: {
        move(event2) {
          if (canvasWidth() <= 0 || canvasHeight() <= 0) {
            return;
          }
          focuspoints.update((items) => items.map((point2, currentIndex) => {
            if (strict_equals(currentIndex, index2(), false)) {
              return point2;
            }
            const x = (point2.x ?? 0) * canvasWidth() + event2.deltaRect.left;
            const y = (point2.y ?? 0) * canvasHeight() + event2.deltaRect.top;
            return {
              ...point2,
              width: event2.rect.width / canvasWidth(),
              height: event2.rect.height / canvasHeight(),
              x: clamp2(x / canvasWidth()),
              y: clamp2(y / canvasHeight())
            };
          }));
        },
        end() {
          activateFocuspoint(index2());
        }
      }
    }).draggable({
      modifiers: [
        interact5.modifiers.restrictRect({ restriction: "parent", endOnly: true })
      ],
      autoScroll: true,
      listeners: {
        move(event2) {
          if (canvasWidth() <= 0 || canvasHeight() <= 0) {
            return;
          }
          focuspoints.update((items) => items.map((point2, currentIndex) => {
            if (strict_equals(currentIndex, index2(), false)) {
              return point2;
            }
            const x = (point2.x ?? 0) * canvasWidth() + event2.dx;
            const y = (point2.y ?? 0) * canvasHeight() + event2.dy;
            return {
              ...point2,
              x: clamp2(x / canvasWidth()),
              y: clamp2(y / canvasHeight())
            };
          }));
        },
        end() {
          activateFocuspoint(index2());
        }
      }
    });
    return {
      destroy() {
        interactable.unset();
      }
    };
  }
  var $$exports = {
    ...legacy_api(),
    get focuspoint() {
      return focuspoint();
    },
    set focuspoint($$value) {
      focuspoint($$value);
      flushSync();
    },
    get index() {
      return index2();
    },
    set index($$value) {
      index2($$value);
      flushSync();
    },
    get initialized() {
      return initialized();
    },
    set initialized($$value) {
      initialized($$value);
      flushSync();
    },
    get canvasWidth() {
      return canvasWidth();
    },
    set canvasWidth($$value) {
      canvasWidth($$value);
      flushSync();
    },
    get canvasHeight() {
      return canvasHeight();
    },
    set canvasHeight($$value) {
      canvasHeight($$value);
      flushSync();
    },
    get getPositionX() {
      return getPositionX();
    },
    set getPositionX($$value) {
      getPositionX($$value);
      flushSync();
    },
    get getPositionY() {
      return getPositionY();
    },
    set getPositionY($$value) {
      getPositionY($$value);
      flushSync();
    },
    get getFocuspointWidth() {
      return getFocuspointWidth();
    },
    set getFocuspointWidth($$value) {
      getFocuspointWidth($$value);
      flushSync();
    },
    get getFocuspointHeight() {
      return getFocuspointHeight();
    },
    set getFocuspointHeight($$value) {
      getFocuspointHeight($$value);
      flushSync();
    }
  };
  var div = root5();
  let classes;
  var span = child(div);
  var text2 = child(span, true);
  reset(span);
  next(8);
  reset(div);
  action(div, ($$node) => rectangleInteraction?.($$node));
  template_effect(
    ($0, $1, $2, $3, $4, $5, $6) => {
      classes = set_class(div, 1, `draggable style1 resizable focuspoint-shape focuspoint-shape--${focuspoint().shape ?? "rectangle" ?? ""}`, "svelte-ntejuf", classes, { active: focuspoint().active, "opacity-0": !initialized() });
      set_style(div, `transform:translate3d(${$0 ?? ""}px, ${$1 ?? ""}px, 0); width: ${$2 ?? ""}px; height: ${$3 ?? ""}px;`);
      set_attribute2(div, "data-x", $4);
      set_attribute2(div, "data-y", $5);
      set_text(text2, $6);
    },
    [
      () => getPositionX()(index2()),
      () => getPositionY()(index2()),
      () => getFocuspointWidth()(index2()),
      () => getFocuspointHeight()(index2()),
      () => getPositionX()(index2()),
      () => getPositionY()(index2()),
      () => focusPointName(index2())
    ]
  );
  delegated("click", div, function click() {
    return activateFocuspoint(index2());
  });
  append($$anchor, div);
  return pop($$exports);
}
delegate(["click"]);
create_custom_element(
  Rectangle,
  {
    focuspoint: {},
    index: {},
    initialized: {},
    canvasWidth: {},
    canvasHeight: {},
    getPositionX: {},
    getPositionY: {},
    getFocuspointWidth: {},
    getFocuspointHeight: {}
  },
  [],
  [],
  { mode: "open" }
);

// focuspoint_shapes_ns:/var/www/html/Resources/Private/JavaScript/components/Shapes
var definitions = [
  { identifier: "crosshair", component: Crosshair },
  { identifier: "ellipse", component: Ellipse },
  { identifier: "line", component: Line },
  { identifier: "polygon", component: Polygon },
  { identifier: "rectangle", component: Rectangle }
];

// Resources/Private/JavaScript/rendering/primitiveFactory.js
var DEFAULT_LINE_SIZE = 0.2;
var CROSSHAIR_SIZE = 0.05;
function number(value, fallback2 = 0) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback2;
}
function point(x, y) {
  return {
    x: number(x),
    y: number(y)
  };
}
function rectangleToPolygon(focuspoint) {
  const x = number(focuspoint.x);
  const y = number(focuspoint.y);
  const width = number(focuspoint.width);
  const height = number(focuspoint.height);
  return {
    type: "polygon",
    points: [
      point(x, y),
      point(x + width, y),
      point(x + width, y + height),
      point(x, y + height)
    ]
  };
}
function ellipseToPrimitive(focuspoint) {
  return {
    type: "ellipse",
    x: number(focuspoint.x),
    y: number(focuspoint.y),
    width: number(focuspoint.width),
    height: number(focuspoint.height)
  };
}
function lineToPrimitive(focuspoint) {
  const x1 = number(focuspoint.x);
  const y1 = number(focuspoint.y);
  return {
    type: "line",
    x1,
    y1,
    x2: number(focuspoint.x2, x1 + number(focuspoint.width, DEFAULT_LINE_SIZE)),
    y2: number(focuspoint.y2, y1 + number(focuspoint.height, DEFAULT_LINE_SIZE))
  };
}
function polygonToPrimitive(focuspoint) {
  return {
    type: "polygon",
    points: Array.isArray(focuspoint.vertices) ? focuspoint.vertices.map((vertex) => point(vertex?.x, vertex?.y)) : []
  };
}
function crosshairToPrimitives(focuspoint) {
  const x = number(focuspoint.x);
  const y = number(focuspoint.y);
  return [
    {
      type: "line",
      x1: x - CROSSHAIR_SIZE,
      y1: y,
      x2: x + CROSSHAIR_SIZE,
      y2: y
    },
    {
      type: "line",
      x1: x,
      y1: y - CROSSHAIR_SIZE,
      x2: x,
      y2: y + CROSSHAIR_SIZE
    }
  ];
}
var builtinPrimitiveFactories = {
  rectangle: (focuspoint) => [rectangleToPolygon(focuspoint)],
  ellipse: (focuspoint) => [ellipseToPrimitive(focuspoint)],
  circle: (focuspoint) => [ellipseToPrimitive(focuspoint)],
  line: (focuspoint) => [lineToPrimitive(focuspoint)],
  crosshair: crosshairToPrimitives,
  polygon: (focuspoint) => [polygonToPrimitive(focuspoint)]
};

// Resources/Private/JavaScript/registerBuiltinShapeDefinitions.js
var boxDefaults = ({ x = 0.333, y = 0.333, width = 0.2, height = 0.2 } = {}) => ({
  x,
  y,
  width,
  height
});
var builtinShapeDefinitions = {
  rectangle: {
    defaults: boxDefaults,
    toPrimitives: builtinPrimitiveFactories.rectangle
  },
  ellipse: {
    defaults: boxDefaults,
    toPrimitives: builtinPrimitiveFactories.ellipse
  },
  line: {
    defaults: (context) => {
      const defaults = boxDefaults(context);
      return {
        ...defaults,
        x2: Math.min(1, defaults.x + defaults.width),
        y2: Math.min(1, defaults.y + defaults.height)
      };
    },
    toPrimitives: builtinPrimitiveFactories.line
  },
  crosshair: {
    defaults: ({ x = 0.5, y = 0.5 } = {}) => ({ x, y }),
    toPrimitives: builtinPrimitiveFactories.crosshair
  },
  polygon: {
    defaults: (context) => {
      const { x, y, width, height } = boxDefaults(context);
      return {
        x,
        y,
        width,
        height,
        vertices: [
          { x, y },
          { x: Math.min(1, x + width), y },
          { x: Math.min(1, x + width), y: Math.min(1, y + height) },
          { x, y: Math.min(1, y + height) }
        ]
      };
    },
    toPrimitives: builtinPrimitiveFactories.polygon
  }
};
for (const [identifier, definition] of Object.entries(builtinShapeDefinitions)) {
  registerShapeDefinition(identifier, definition);
}

// Resources/Private/JavaScript/registerBuiltinShapes.js
definitions.forEach((definition) => {
  registerShape(definition.identifier, definition.component);
});

// Resources/Private/JavaScript/components/Image.svelte
Image[FILENAME] = "Resources/Private/JavaScript/components/Image.svelte";
var root6 = add_locations(from_html(`<div touch-action="none"><div class="wrapper svelte-v1zpcc"><!> <img alt="Selected" unselectable="on" class="svelte-v1zpcc"/></div></div>`), Image[FILENAME], [[150, 0, [[160, 4, [[184, 8]]]]]]);
var $$css6 = {
  hash: "svelte-v1zpcc",
  code: "\n\n\n    img.svelte-v1zpcc {\n        pointer-events: none;\n        -moz-user-select: none;\n        -webkit-user-select: none;\n        user-select: none;\n        max-width: 100%;\n        max-height: calc(100vh - 200px);\n    }\n\n    .cropper-bg.svelte-v1zpcc {\n        padding: 20px;\n        display: flex;\n        justify-content: center;\n\n        --chess-color: rgba(0, 0, 0, 0.1);\n        opacity: 0.8;\n        background-image: linear-gradient(45deg, var(--chess-color) 25%, transparent 25%), linear-gradient(-45deg, var(--chess-color) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, var(--chess-color) 75%), linear-gradient(-45deg, transparent 75%, var(--chess-color) 75%);\n        background-size: 20px 20px;\n        background-position: 0 0, 0 10px, 10px -10px, -10px 0;\n    }\n\n    .cropper-bg--dark.svelte-v1zpcc {\n        --chess-color: rgba(255, 255, 255, 0.1);\n    }\n\n    .wrapper.svelte-v1zpcc {\n        position: relative;\n        align-self: center;\n    }\n\n\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW1hZ2Uuc3ZlbHRlIiwic291cmNlcyI6WyJJbWFnZS5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cbiAgICBpbXBvcnQge2RlYWN0aXZhdGVBbGxGb2N1c3BvaW50cywgZm9jdXNwb2ludHN9IGZyb20gXCIuLi9zdG9yZS5zdmVsdGVcIjtcbiAgICBpbXBvcnQge29uRGVzdHJveSwgb25Nb3VudH0gZnJvbSBcInN2ZWx0ZVwiO1xuICAgIGltcG9ydCAnLi4vcmVnaXN0ZXJCdWlsdGluU2hhcGVzLmpzJ1xuICAgIGltcG9ydCB7cmVzb2x2ZVNoYXBlQ29tcG9uZW50fSBmcm9tIFwiLi4vc2hhcGVSZWdpc3RyeS5qc1wiO1xuXG5cbiAgICBsZXQge2ltYWdlfSA9ICRwcm9wcygpXG4gICAgbGV0IGNhbnZhc0hlaWdodCA9ICRzdGF0ZSgwKVxuICAgIGxldCBjYW52YXNXaWR0aCA9ICRzdGF0ZSgwKVxuICAgIGxldCBpbWdcbiAgICBsZXQgaW5pdGlhbGl6ZWQgPSAkc3RhdGUoZmFsc2UpXG4gICAgbGV0IGlzRGFya01vZGUgPSAkc3RhdGUoZmFsc2UpXG5cblxuICAgIC8vIEhhbmRsZSBrZXlib2FyZCBuYXZpZ2F0aW9uXG4gICAgZnVuY3Rpb24gaGFuZGxlS2V5RG93bihldmVudCkge1xuICAgICAgICAvLyBGaW5kIHRoZSBhY3RpdmUgZm9jdXNwb2ludFxuICAgICAgICBjb25zdCBhY3RpdmVJbmRleCA9ICRmb2N1c3BvaW50cy5maW5kSW5kZXgocG9pbnQgPT4gcG9pbnQuYWN0aXZlKTtcbiAgICAgICAgaWYgKGFjdGl2ZUluZGV4ID09PSAtMSkgcmV0dXJuO1xuXG4gICAgICAgIC8vIFNldCBzdGVwIHNpemUgLSBsYXJnZXIgd2l0aCBzaGlmdCBrZXlcbiAgICAgICAgY29uc3Qgc3RlcCA9IGV2ZW50LnNoaWZ0S2V5ID8gMTAgOiAxO1xuXG4gICAgICAgIC8vIE1vdmUgYmFzZWQgb24gYXJyb3cga2V5XG4gICAgICAgIHN3aXRjaChldmVudC5rZXkpIHtcbiAgICAgICAgICAgIGNhc2UgJ0Fycm93VXAnOlxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgbW92ZVBvaW50KGFjdGl2ZUluZGV4LCAwLCAtc3RlcCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdBcnJvd0Rvd24nOlxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgbW92ZVBvaW50KGFjdGl2ZUluZGV4LCAwLCBzdGVwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0Fycm93TGVmdCc6XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBtb3ZlUG9pbnQoYWN0aXZlSW5kZXgsIC1zdGVwLCAwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0Fycm93UmlnaHQnOlxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgbW92ZVBvaW50KGFjdGl2ZUluZGV4LCBzdGVwLCAwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEhlbHBlciBmdW5jdGlvbiB0byBtb3ZlIGEgcG9pbnQgYnkgeCx5IHBpeGVsc1xuICAgIGZ1bmN0aW9uIG1vdmVQb2ludChpbmRleCwgZGVsdGFYLCBkZWx0YVkpIHtcbiAgICAgICAgLy8gQ2FsY3VsYXRlIHRoZSBuZXcgcG9zaXRpb25zIGluIHBpeGVsc1xuICAgICAgICBjb25zdCBuZXdYID0gKCRmb2N1c3BvaW50c1tpbmRleF0ueCAqIGNhbnZhc1dpZHRoKSArIGRlbHRhWDtcbiAgICAgICAgY29uc3QgbmV3WSA9ICgkZm9jdXNwb2ludHNbaW5kZXhdLnkgKiBjYW52YXNIZWlnaHQpICsgZGVsdGFZO1xuXG4gICAgICAgIC8vIENvbnZlcnQgYmFjayB0byByZWxhdGl2ZSBjb29yZGluYXRlcyAoMC0xIHJhbmdlKVxuICAgICAgICAkZm9jdXNwb2ludHNbaW5kZXhdLnggPSBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCBuZXdYIC8gY2FudmFzV2lkdGgpKTtcbiAgICAgICAgJGZvY3VzcG9pbnRzW2luZGV4XS55ID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgbmV3WSAvIGNhbnZhc0hlaWdodCkpO1xuICAgIH1cblxuICAgIG9uTW91bnQoKCkgPT4ge1xuICAgICAgICBpZiAoaW1nLmNvbXBsZXRlKSB7XG4gICAgICAgICAgICBzZXRDYW52YXNTaXplcygpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbWcuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIHNldENhbnZhc1NpemVzKVxuICAgICAgICB9XG5cblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdXBkYXRlQ2FudmFzU2l6ZXMpXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaGFuZGxlS2V5RG93bilcblxuICAgICAgICBjb25zdCBjb2xvclNjaGVtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2h0bWwnKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtY29sb3Itc2NoZW1lJyk7XG4gICAgICAgIGNvbnN0IHRoZW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaHRtbCcpLmdldEF0dHJpYnV0ZSgnZGF0YS10aGVtZScpO1xuICAgICAgICBjb25zdCBkYXJrTW9kZVByZWZlciA9IHdpbmRvdy5tYXRjaE1lZGlhKCcocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspJykubWF0Y2hlcztcbiAgICAgICAgaWYgKGNvbG9yU2NoZW1lID09PSAnZGFyaycgfHwgKHRoZW1lID09PSAnYXV0bycgJiYgZGFya01vZGVQcmVmZXIgJiYgY29sb3JTY2hlbWUgIT09ICdsaWdodCcpKSB7XG4gICAgICAgICAgICBpc0RhcmtNb2RlID0gdHJ1ZVxuICAgICAgICB9XG4gICAgfSlcblxuICAgIG9uRGVzdHJveSgoKSA9PiB7XG5cbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHVwZGF0ZUNhbnZhc1NpemVzKVxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZUtleURvd24pXG4gICAgfSlcblxuICAgIGZ1bmN0aW9uIHNldENhbnZhc1NpemVzKCkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHVwZGF0ZUNhbnZhc1NpemVzKClcbiAgICAgICAgfSwgMzAwKVxuICAgIH1cblxuICAgIGV4cG9ydCBmdW5jdGlvbiB1cGRhdGVDYW52YXNTaXplcygpIHtcbiAgICAgICAgY2FudmFzSGVpZ2h0ID0gaW1nLnBhcmVudEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0XG4gICAgICAgIGNhbnZhc1dpZHRoID0gaW1nLnBhcmVudEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGhcbiAgICAgICAgaW5pdGlhbGl6ZWQgPSB0cnVlXG4gICAgfVxuXG4gICAgY29uc3QgZ2V0UG9zaXRpb25YID0gJGRlcml2ZWQoKGluZGV4KSA9PiB7XG4gICAgICAgIHJldHVybiAkZm9jdXNwb2ludHNbaW5kZXhdLnggKiBjYW52YXNXaWR0aFxuICAgIH0pXG5cbiAgICBjb25zdCBnZXRQb3NpdGlvblkgPSAkZGVyaXZlZCgoaW5kZXgpID0+IHtcbiAgICAgICAgcmV0dXJuICRmb2N1c3BvaW50c1tpbmRleF0ueSAqIGNhbnZhc0hlaWdodFxuICAgIH0pXG5cbiAgICBjb25zdCBnZXRGb2N1c3BvaW50V2lkdGggPSAkZGVyaXZlZCgoaW5kZXgpID0+IHtcbiAgICAgICAgcmV0dXJuICRmb2N1c3BvaW50c1tpbmRleF0ud2lkdGggKiBjYW52YXNXaWR0aFxuICAgIH0pXG5cbiAgICBjb25zdCBnZXRGb2N1c3BvaW50SGVpZ2h0ID0gJGRlcml2ZWQoKGluZGV4KSA9PiB7XG4gICAgICAgIHJldHVybiAkZm9jdXNwb2ludHNbaW5kZXhdLmhlaWdodCAqIGNhbnZhc0hlaWdodFxuICAgIH0pXG5cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG5cblxuICAgIGltZyB7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjAwcHgpO1xuICAgIH1cblxuICAgIC5jcm9wcGVyLWJnIHtcbiAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgICAgLS1jaGVzcy1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgICAgICBvcGFjaXR5OiAwLjg7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgdmFyKC0tY2hlc3MtY29sb3IpIDI1JSwgdHJhbnNwYXJlbnQgMjUlKSwgbGluZWFyLWdyYWRpZW50KC00NWRlZywgdmFyKC0tY2hlc3MtY29sb3IpIDI1JSwgdHJhbnNwYXJlbnQgMjUlKSwgbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCB0cmFuc3BhcmVudCA3NSUsIHZhcigtLWNoZXNzLWNvbG9yKSA3NSUpLCBsaW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCB0cmFuc3BhcmVudCA3NSUsIHZhcigtLWNoZXNzLWNvbG9yKSA3NSUpO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDIwcHggMjBweDtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwLCAwIDEwcHgsIDEwcHggLTEwcHgsIC0xMHB4IDA7XG4gICAgfVxuXG4gICAgLmNyb3BwZXItYmctLWRhcmsge1xuICAgICAgICAtLWNoZXNzLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gICAgfVxuXG4gICAgLndyYXBwZXIge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICB9XG5cblxuPC9zdHlsZT5cblxuPCEtLSBzdmVsdGUtaWdub3JlIGExMXlfY2xpY2tfZXZlbnRzX2hhdmVfa2V5X2V2ZW50cyAtLT5cbjwhLS0gc3ZlbHRlLWlnbm9yZSBhMTF5X25vX3N0YXRpY19lbGVtZW50X2ludGVyYWN0aW9ucyAtLT5cbjxkaXZcbiAgICBjbGFzcz1cImNyb3BwZXItYmdcIlxuICAgIGNsYXNzOmNyb3BwZXItYmctLWRhcms9e2lzRGFya01vZGV9XG4gICAgdG91Y2gtYWN0aW9uPVwibm9uZVwiXG4gICAgb25jbGljaz17KGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChldmVudC50YXJnZXQgPT09IGV2ZW50LmN1cnJlbnRUYXJnZXQpIHtcbiAgICAgICAgICAgIGRlYWN0aXZhdGVBbGxGb2N1c3BvaW50cygpXG4gICAgICAgIH1cbiAgICB9fVxuPlxuICAgIDxkaXYgY2xhc3M9XCJ3cmFwcGVyXCIgb25jbGljaz17KGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChldmVudC50YXJnZXQgPT09IGV2ZW50LmN1cnJlbnRUYXJnZXQpIHtcbiAgICAgICAgICAgIGRlYWN0aXZhdGVBbGxGb2N1c3BvaW50cygpXG4gICAgICAgIH1cbiAgICB9fT5cbiAgICAgICAgeyNlYWNoICRmb2N1c3BvaW50cyBhcyBmb2N1c3BvaW50LCBpbmRleH1cbiAgICAgICAgICAgIHtAY29uc3QgQ29tcG9uZW50ID0gcmVzb2x2ZVNoYXBlQ29tcG9uZW50KGZvY3VzcG9pbnQuc2hhcGUgPz8gJ3JlY3RhbmdsZScpfVxuXG4gICAgICAgICAgICB7I2tleSBmb2N1c3BvaW50LnNoYXBlID8/ICdyZWN0YW5nbGUnfVxuICAgICAgICAgICAgICAgIDwhLS0gc3ZlbHRlLWlnbm9yZSBzdmVsdGVfY29tcG9uZW50X2RlcHJlY2F0ZWQgLS0+XG4gICAgICAgICAgICAgICAgPHN2ZWx0ZTpjb21wb25lbnRcbiAgICAgICAgICAgICAgICAgICAgdGhpcz17Q29tcG9uZW50fVxuICAgICAgICAgICAgICAgICAgICB7Zm9jdXNwb2ludH1cbiAgICAgICAgICAgICAgICAgICAge2luZGV4fVxuICAgICAgICAgICAgICAgICAgICB7aW5pdGlhbGl6ZWR9XG4gICAgICAgICAgICAgICAgICAgIHtjYW52YXNXaWR0aH1cbiAgICAgICAgICAgICAgICAgICAge2NhbnZhc0hlaWdodH1cbiAgICAgICAgICAgICAgICAgICAge2dldFBvc2l0aW9uWH1cbiAgICAgICAgICAgICAgICAgICAge2dldFBvc2l0aW9uWX1cbiAgICAgICAgICAgICAgICAgICAge2dldEZvY3VzcG9pbnRXaWR0aH1cbiAgICAgICAgICAgICAgICAgICAge2dldEZvY3VzcG9pbnRIZWlnaHR9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIHsva2V5fVxuICAgICAgICB7L2VhY2h9XG4gICAgICAgIDxpbWcgYmluZDp0aGlzPXtpbWd9IHNyYz17aW1hZ2V9IGFsdD1cIlNlbGVjdGVkXCIgdW5zZWxlY3RhYmxlPVwib25cIiAvPlxuICAgIDwvZGl2PlxuPC9kaXY+XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBa0hBLElBQUksaUJBQUcsQ0FBQztBQUNSLFFBQVEsb0JBQW9CO0FBQzVCLFFBQVEsc0JBQXNCO0FBQzlCLFFBQVEseUJBQXlCO0FBQ2pDLFFBQVEsaUJBQWlCO0FBQ3pCLFFBQVEsZUFBZTtBQUN2QixRQUFRLCtCQUErQjtBQUN2Qzs7QUFFQSxJQUFJLHlCQUFXLENBQUM7QUFDaEIsUUFBUSxhQUFhO0FBQ3JCLFFBQVEsYUFBYTtBQUNyQixRQUFRLHVCQUF1Qjs7QUFFL0IsUUFBUSxpQ0FBaUM7QUFDekMsUUFBUSxZQUFZO0FBQ3BCLFFBQVEsc1JBQXNSO0FBQzlSLFFBQVEsMEJBQTBCO0FBQ2xDLFFBQVEscURBQXFEO0FBQzdEOztBQUVBLElBQUksK0JBQWlCLENBQUM7QUFDdEIsUUFBUSx1Q0FBdUM7QUFDL0M7O0FBRUEsSUFBSSxzQkFBUSxDQUFDO0FBQ2IsUUFBUSxrQkFBa0I7QUFDMUIsUUFBUSxrQkFBa0I7QUFDMUI7OzsifQ== */"
};
function Image($$anchor, $$props) {
  check_target(new.target);
  push($$props, true, Image);
  append_styles($$anchor, $$css6);
  const $focuspoints = () => (validate_store(focuspoints, "focuspoints"), store_get(focuspoints, "$focuspoints", $$stores));
  const [$$stores, $$cleanup] = setup_stores();
  let image = prop($$props, "image", 7);
  let canvasHeight = tag(state(0), "canvasHeight");
  let canvasWidth = tag(state(0), "canvasWidth");
  let img;
  let initialized = tag(state(false), "initialized");
  let isDarkMode = tag(state(false), "isDarkMode");
  function handleKeyDown(event2) {
    const activeIndex = $focuspoints().findIndex((point2) => point2.active);
    if (strict_equals(activeIndex, -1)) return;
    const step = event2.shiftKey ? 10 : 1;
    switch (event2.key) {
      case "ArrowUp":
        event2.preventDefault();
        movePoint(activeIndex, 0, -step);
        break;
      case "ArrowDown":
        event2.preventDefault();
        movePoint(activeIndex, 0, step);
        break;
      case "ArrowLeft":
        event2.preventDefault();
        movePoint(activeIndex, -step, 0);
        break;
      case "ArrowRight":
        event2.preventDefault();
        movePoint(activeIndex, step, 0);
        break;
    }
  }
  function movePoint(index2, deltaX, deltaY) {
    const newX = $focuspoints()[index2].x * get2(canvasWidth) + deltaX;
    const newY = $focuspoints()[index2].y * get2(canvasHeight) + deltaY;
    store_mutate(focuspoints, untrack($focuspoints)[index2].x = Math.max(0, Math.min(1, newX / get2(canvasWidth))), untrack($focuspoints));
    store_mutate(focuspoints, untrack($focuspoints)[index2].y = Math.max(0, Math.min(1, newY / get2(canvasHeight))), untrack($focuspoints));
  }
  onMount(() => {
    if (img.complete) {
      setCanvasSizes();
    } else {
      img.addEventListener("load", setCanvasSizes);
    }
    window.addEventListener("resize", updateCanvasSizes);
    window.addEventListener("keydown", handleKeyDown);
    const colorScheme = document.querySelector("html").getAttribute("data-color-scheme");
    const theme = document.querySelector("html").getAttribute("data-theme");
    const darkModePrefer = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (strict_equals(colorScheme, "dark") || strict_equals(theme, "auto") && darkModePrefer && strict_equals(colorScheme, "light", false)) {
      set(isDarkMode, true);
    }
  });
  onDestroy(() => {
    window.removeEventListener("resize", updateCanvasSizes);
    window.removeEventListener("keydown", handleKeyDown);
  });
  function setCanvasSizes() {
    setTimeout(
      () => {
        updateCanvasSizes();
      },
      300
    );
  }
  function updateCanvasSizes() {
    set(canvasHeight, img.parentElement.getBoundingClientRect().height, true);
    set(canvasWidth, img.parentElement.getBoundingClientRect().width, true);
    set(initialized, true);
  }
  const getPositionX = tag(
    user_derived(() => (index2) => {
      return $focuspoints()[index2].x * get2(canvasWidth);
    }),
    "getPositionX"
  );
  const getPositionY = tag(
    user_derived(() => (index2) => {
      return $focuspoints()[index2].y * get2(canvasHeight);
    }),
    "getPositionY"
  );
  const getFocuspointWidth = tag(
    user_derived(() => (index2) => {
      return $focuspoints()[index2].width * get2(canvasWidth);
    }),
    "getFocuspointWidth"
  );
  const getFocuspointHeight = tag(
    user_derived(() => (index2) => {
      return $focuspoints()[index2].height * get2(canvasHeight);
    }),
    "getFocuspointHeight"
  );
  var $$exports = {
    ...legacy_api(),
    get updateCanvasSizes() {
      return updateCanvasSizes;
    },
    get image() {
      return image();
    },
    set image($$value) {
      image($$value);
      flushSync();
    }
  };
  var div = root6();
  let classes;
  var div_1 = child(div);
  var node = child(div_1);
  add_svelte_meta(
    () => each(node, 1, $focuspoints, index, ($$anchor2, focuspoint, index2) => {
      const Component = tag(user_derived(() => resolveShapeComponent(get2(focuspoint).shape ?? "rectangle")), "Component");
      get2(Component);
      var fragment = comment();
      var node_1 = first_child(fragment);
      add_svelte_meta(
        () => key(node_1, () => get2(focuspoint).shape ?? "rectangle", ($$anchor3) => {
          var fragment_1 = comment();
          var node_2 = first_child(fragment_1);
          add_svelte_meta(
            () => component(node_2, () => get2(Component), ($$anchor4, $$component) => {
              $$component($$anchor4, {
                get focuspoint() {
                  return get2(focuspoint);
                },
                index: index2,
                get initialized() {
                  return get2(initialized);
                },
                get canvasWidth() {
                  return get2(canvasWidth);
                },
                get canvasHeight() {
                  return get2(canvasHeight);
                },
                get getPositionX() {
                  return get2(getPositionX);
                },
                get getPositionY() {
                  return get2(getPositionY);
                },
                get getFocuspointWidth() {
                  return get2(getFocuspointWidth);
                },
                get getFocuspointHeight() {
                  return get2(getFocuspointHeight);
                }
              });
            }),
            "component",
            Image,
            170,
            16,
            { componentTag: "svelte:component" }
          );
          append($$anchor3, fragment_1);
        }),
        "key",
        Image,
        168,
        12
      );
      append($$anchor2, fragment);
    }),
    "each",
    Image,
    165,
    8
  );
  var img_1 = sibling(node, 2);
  bind_this(img_1, ($$value) => img = $$value, () => img);
  reset(div_1);
  reset(div);
  template_effect(() => {
    classes = set_class(div, 1, "cropper-bg svelte-v1zpcc", null, classes, { "cropper-bg--dark": get2(isDarkMode) });
    set_attribute2(img_1, "src", image());
  });
  delegated("click", div, function click(event2) {
    if (strict_equals(event2.target, event2.currentTarget)) {
      deactivateAllFocuspoints();
    }
  });
  delegated("click", div_1, function click_1(event2) {
    if (strict_equals(event2.target, event2.currentTarget)) {
      deactivateAllFocuspoints();
    }
  });
  append($$anchor, div);
  var $$pop = pop($$exports);
  $$cleanup();
  return $$pop;
}
delegate(["click"]);
create_custom_element(Image, { image: {} }, [], ["updateCanvasSizes"], { mode: "open" });

// Resources/Private/JavaScript/components/Fields/Select.svelte
Select[FILENAME] = "Resources/Private/JavaScript/components/Fields/Select.svelte";
var root7 = add_locations(from_html(`<option> </option>`), Select[FILENAME], [[14, 12]]);
var root_12 = add_locations(from_html(`<div class="form-group"><label class="form-label"> </label> <select class="form-select"></select></div>`), Select[FILENAME], [[8, 0, [[9, 4], [12, 4]]]]);
function Select($$anchor, $$props) {
  check_target(new.target);
  push($$props, true, Select);
  const $focuspoints = () => (validate_store(focuspoints, "focuspoints"), store_get(focuspoints, "$focuspoints", $$stores));
  const [$$stores, $$cleanup] = setup_stores();
  let config = prop($$props, "config", 7), index2 = prop($$props, "index", 7), name = prop($$props, "name", 7);
  let options = Object.entries(config().options).map(([value, label]) => ({ value, label }));
  var $$exports = {
    ...legacy_api(),
    get config() {
      return config();
    },
    set config($$value) {
      config($$value);
      flushSync();
    },
    get index() {
      return index2();
    },
    set index($$value) {
      index2($$value);
      flushSync();
    },
    get name() {
      return name();
    },
    set name($$value) {
      name($$value);
      flushSync();
    }
  };
  var div = root_12();
  var label_1 = child(div);
  var text2 = child(label_1, true);
  reset(label_1);
  var select = sibling(label_1, 2);
  add_svelte_meta(
    () => each(select, 21, () => options, index, ($$anchor2, $$item) => {
      let value = () => get2($$item).value;
      value();
      let label = () => get2($$item).label;
      label();
      var option = root7();
      var text_1 = child(option, true);
      reset(option);
      var option_value = {};
      template_effect(() => {
        set_text(text_1, label());
        if (option_value !== (option_value = value())) {
          option.value = (option.__value = value()) ?? "";
        }
      });
      append($$anchor2, option);
    }),
    "each",
    Select,
    13,
    8
  );
  reset(select);
  reset(div);
  template_effect(() => {
    set_attribute2(label_1, "for", `input-${index2() ?? ""}-${name() ?? ""}`);
    set_text(text2, config().title);
    set_attribute2(select, "id", `input-${index2() ?? ""}-${name() ?? ""}`);
  });
  bind_select_value(
    select,
    function get3() {
      return $focuspoints()[index2()][name()];
    },
    function set2($$value) {
      store_mutate(focuspoints, untrack($focuspoints)[index2()][name()] = $$value, untrack($focuspoints));
    }
  );
  append($$anchor, div);
  var $$pop = pop($$exports);
  $$cleanup();
  return $$pop;
}
create_custom_element(Select, { config: {}, index: {}, name: {} }, [], [], { mode: "open" });

// Resources/Private/JavaScript/components/Fields/Text.svelte
Text2[FILENAME] = "Resources/Private/JavaScript/components/Fields/Text.svelte";
var root8 = add_locations(from_html(`<div class="form-group"><label class="form-label"> </label> <input type="text" class="form-control"/></div>`), Text2[FILENAME], [[7, 0, [[8, 4], [11, 4]]]]);
function Text2($$anchor, $$props) {
  check_target(new.target);
  push($$props, true, Text2);
  const $focuspoints = () => (validate_store(focuspoints, "focuspoints"), store_get(focuspoints, "$focuspoints", $$stores));
  const [$$stores, $$cleanup] = setup_stores();
  let config = prop($$props, "config", 7), index2 = prop($$props, "index", 7), name = prop($$props, "name", 7);
  var $$exports = {
    ...legacy_api(),
    get config() {
      return config();
    },
    set config($$value) {
      config($$value);
      flushSync();
    },
    get index() {
      return index2();
    },
    set index($$value) {
      index2($$value);
      flushSync();
    },
    get name() {
      return name();
    },
    set name($$value) {
      name($$value);
      flushSync();
    }
  };
  var div = root8();
  var label = child(div);
  var text2 = child(label, true);
  reset(label);
  var input = sibling(label, 2);
  remove_input_defaults(input);
  reset(div);
  template_effect(() => {
    set_attribute2(label, "for", `input-${index2() ?? ""}-${name() ?? ""}`);
    set_text(text2, config().title);
    set_attribute2(input, "id", `input-${index2() ?? ""}-${name() ?? ""}`);
  });
  bind_value(
    input,
    function get3() {
      return $focuspoints()[index2()][name()];
    },
    function set2($$value) {
      store_mutate(focuspoints, untrack($focuspoints)[index2()][name()] = $$value, untrack($focuspoints));
    }
  );
  append($$anchor, div);
  var $$pop = pop($$exports);
  $$cleanup();
  return $$pop;
}
create_custom_element(Text2, { config: {}, index: {}, name: {} }, [], [], { mode: "open" });

// Resources/Private/JavaScript/components/Fields/Textarea.svelte
Textarea[FILENAME] = "Resources/Private/JavaScript/components/Fields/Textarea.svelte";
var root9 = add_locations(from_html(`<div class="form-group"><label class="form-label"> </label> <textarea type="text" class="form-control"></textarea></div>`), Textarea[FILENAME], [[7, 0, [[8, 4], [11, 4]]]]);
function Textarea($$anchor, $$props) {
  check_target(new.target);
  push($$props, true, Textarea);
  const $focuspoints = () => (validate_store(focuspoints, "focuspoints"), store_get(focuspoints, "$focuspoints", $$stores));
  const [$$stores, $$cleanup] = setup_stores();
  let config = prop($$props, "config", 7), index2 = prop($$props, "index", 7), name = prop($$props, "name", 7);
  var $$exports = {
    ...legacy_api(),
    get config() {
      return config();
    },
    set config($$value) {
      config($$value);
      flushSync();
    },
    get index() {
      return index2();
    },
    set index($$value) {
      index2($$value);
      flushSync();
    },
    get name() {
      return name();
    },
    set name($$value) {
      name($$value);
      flushSync();
    }
  };
  var div = root9();
  var label = child(div);
  var text2 = child(label, true);
  reset(label);
  var textarea = sibling(label, 2);
  remove_textarea_child(textarea);
  reset(div);
  template_effect(() => {
    set_attribute2(label, "for", `input-${index2() ?? ""}-${name() ?? ""}`);
    set_text(text2, config().title);
    set_attribute2(textarea, "id", `input-${index2() ?? ""}-${name() ?? ""}`);
  });
  bind_value(
    textarea,
    function get3() {
      return $focuspoints()[index2()][name()];
    },
    function set2($$value) {
      store_mutate(focuspoints, untrack($focuspoints)[index2()][name()] = $$value, untrack($focuspoints));
    }
  );
  append($$anchor, div);
  var $$pop = pop($$exports);
  $$cleanup();
  return $$pop;
}
create_custom_element(Textarea, { config: {}, index: {}, name: {} }, [], [], { mode: "open" });

// Resources/Private/JavaScript/components/Fields/Link.svelte
import AjaxRequest from "@typo3/core/ajax/ajax-request.js";
import Modal from "@typo3/backend/modal.js";
Link[FILENAME] = "Resources/Private/JavaScript/components/Fields/Link.svelte";
var root10 = add_locations(from_html(`<div class="form-wizards-item-bottom"><div class="callout callout-info mt-3 mb-0"><div class="callout-content"><div class="callout-body"></div></div></div></div>`), Link[FILENAME], [[122, 8, [[123, 12, [[124, 16, [[125, 20]]]]]]]]);
var root_13 = add_locations(from_html(`<div class="form-group"><label class="form-label"> </label> <div class="form-wizards-wrap"><div class="form-wizards-element"><div class="input-group t3js-form-field-link"><span class="t3js-form-field-link-icon input-group-text"></span> <input class="form-control" title="" value="" readonly="" hidden=""/> <div class="form-control-clearable-wrapper"><input type="text" readonly=""/> <input type="text"/> <button type="button" tabindex="-1" title="Clear input" aria-label="Clear input"></button></div> <button class="btn btn-default"></button></div></div> <div class="form-wizards-item-aside formwizards-item-aside--field-control"><div class="btn-group"><button aria-label="Open link wizard" class="btn btn-default"></button></div></div></div> <!></div>`), Link[FILENAME], [
  [
    73,
    0,
    [
      [74, 4],
      [
        77,
        4,
        [
          [
            78,
            8,
            [
              [
                79,
                12,
                [
                  [80, 16],
                  [81, 16],
                  [82, 16, [[83, 20], [90, 20], [96, 20]]],
                  [107, 16]
                ]
              ]
            ]
          ],
          [112, 8, [[113, 12, [[114, 16]]]]]
        ]
      ]
    ]
  ]
]);
function Link($$anchor, $$props) {
  check_target(new.target);
  push($$props, true, Link);
  const $focuspoints = () => (validate_store(focuspoints, "focuspoints"), store_get(focuspoints, "$focuspoints", $$stores));
  const $wizardConfigStore = () => (validate_store(wizardConfigStore, "wizardConfigStore"), store_get(wizardConfigStore, "$wizardConfigStore", $$stores));
  const $iconStore = () => (validate_store(iconStore, "iconStore"), store_get(iconStore, "$iconStore", $$stores));
  const [$$stores, $$cleanup] = setup_stores();
  let config = prop($$props, "config", 7), index2 = prop($$props, "index", 7), name = prop($$props, "name", 7);
  let linkBrowserData = tag(state(null), "linkBrowserData");
  let readOnly = tag(state(true), "readOnly");
  let previewText = tag(user_derived(() => get2(linkBrowserData)?.preview?.text ?? ""), "previewText");
  let previewIcon = tag(user_derived(() => get2(linkBrowserData)?.preview?.icon ?? ""), "previewIcon");
  let previewAdditionalAttributes = tag(user_derived(() => get2(linkBrowserData)?.preview?.additionalAttributes ?? ""), "previewAdditionalAttributes");
  onMount(() => {
    updateLinkBrowserInfo();
    getIcon("actions-close");
    getIcon("actions-wizard-link");
    getIcon("actions-version-workspaces-preview-link");
  });
  const handleLinkSelection = (event2) => {
    store_mutate(focuspoints, untrack($focuspoints)[index2()][name()] = event2.detail.link, untrack($focuspoints));
    updateLinkBrowserInfo();
  };
  async function updateLinkBrowserInfo() {
    let url = TYPO3.settings.ajaxUrls["wizard_focuspoint_linkbrowserurl"];
    url += `&inputName=${encodeURIComponent($wizardConfigStore().itemFormElName + "-hidden-link-field")}`;
    url += "&inputValue=" + encodeURIComponent($focuspoints()[index2()][name()] || "");
    url += "&config=" + encodeURIComponent(JSON.stringify(config() || {}));
    url += "&pid=" + encodeURIComponent($wizardConfigStore().pid);
    return new AjaxRequest(url).get().then(async (response) => {
      set(linkBrowserData, (await track_reactivity_loss(response.resolve()))(), true);
    });
  }
  function openModal() {
    const modal = Modal.advanced({
      type: Modal.types.iframe,
      content: get2(linkBrowserData).url,
      size: Modal.sizes.large
    });
    modal.addEventListener("typo3:form-engine:link-browser:set-link", (e) => {
      handleLinkSelection({ detail: { link: e.value } });
      modal.hideModal();
    });
    const linkChannel = new BroadcastChannel(focuspointChannelName($wizardConfigStore().itemFormElName));
    linkChannel.onmessage = (e) => {
      if (strict_equals(e.data.type, "link-selected")) {
        handleLinkSelection({ detail: { link: e.data.link } });
        linkChannel.close();
      }
    };
    modal.addEventListener("typo3-modal-hidden", () => {
      linkChannel.close();
    });
  }
  function onInputClear(index3) {
    store_mutate(focuspoints, untrack($focuspoints)[index3][name()] = "", untrack($focuspoints));
    get2(linkBrowserData).preview = null;
  }
  var $$exports = {
    ...legacy_api(),
    get config() {
      return config();
    },
    set config($$value) {
      config($$value);
      flushSync();
    },
    get index() {
      return index2();
    },
    set index($$value) {
      index2($$value);
      flushSync();
    },
    get name() {
      return name();
    },
    set name($$value) {
      name($$value);
      flushSync();
    }
  };
  var div = root_13();
  var label = child(div);
  var text2 = child(label, true);
  reset(label);
  var div_1 = sibling(label, 2);
  var div_2 = child(div_1);
  var div_3 = child(div_2);
  var span = child(div_3);
  html(span, () => get2(previewIcon), true);
  reset(span);
  var input = sibling(span, 2);
  var div_4 = sibling(input, 2);
  var input_1 = child(div_4);
  remove_input_defaults(input_1);
  let classes;
  var input_2 = sibling(input_1, 2);
  remove_input_defaults(input_2);
  let classes_1;
  var button = sibling(input_2, 2);
  let classes_2;
  html(button, () => $iconStore()["actions-close"], true);
  reset(button);
  reset(div_4);
  var button_1 = sibling(div_4, 2);
  html(button_1, () => $iconStore()["actions-version-workspaces-preview-link"], true);
  reset(button_1);
  reset(div_3);
  reset(div_2);
  var div_5 = sibling(div_2, 2);
  var div_6 = child(div_5);
  var button_2 = child(div_6);
  html(button_2, () => $iconStore()["actions-wizard-link"], true);
  reset(button_2);
  reset(div_6);
  reset(div_5);
  reset(div_1);
  var node = sibling(div_1, 2);
  {
    var consequent = ($$anchor2) => {
      var div_7 = root10();
      var div_8 = child(div_7);
      var div_9 = child(div_8);
      var div_10 = child(div_9);
      html(div_10, () => get2(previewAdditionalAttributes), true);
      reset(div_10);
      reset(div_9);
      reset(div_8);
      reset(div_7);
      append($$anchor2, div_7);
    };
    add_svelte_meta(
      () => if_block(node, ($$render) => {
        if (get2(previewAdditionalAttributes)) $$render(consequent);
      }),
      "if",
      Link,
      121,
      4
    );
  }
  reset(div);
  template_effect(() => {
    set_attribute2(label, "for", `input-${index2() ?? ""}-${name() ?? ""}`);
    set_text(text2, config().title);
    set_attribute2(input_1, "id", `input-${index2() ?? ""}-${name() ?? ""}`);
    classes = set_class(input_1, 1, "form-control form-control-clearable", null, classes, { hidden: !get2(readOnly) });
    set_value(input_1, get2(previewText));
    classes_1 = set_class(input_2, 1, "form-control form-control-clearable", null, classes_1, { hidden: get2(readOnly) });
    set_attribute2(input_2, "id", `input-${index2() ?? ""}-${name() ?? ""}`);
    classes_2 = set_class(button, 1, "close text-black", null, classes_2, {
      hidden: !$focuspoints()[index2()][name()] || strict_equals($focuspoints()[index2()][name()], "")
    });
  });
  bind_value(
    input_2,
    function get3() {
      return $focuspoints()[index2()][name()];
    },
    function set2($$value) {
      store_mutate(focuspoints, untrack($focuspoints)[index2()][name()] = $$value, untrack($focuspoints));
    }
  );
  delegated("click", button, function click(e) {
    e.preventDefault();
    onInputClear(index2());
  });
  delegated("click", button_1, function click_1(e) {
    e.preventDefault();
    set(readOnly, !get2(readOnly));
  });
  delegated("click", button_2, function click_2(e) {
    e.preventDefault();
    openModal();
  });
  append($$anchor, div);
  var $$pop = pop($$exports);
  $$cleanup();
  return $$pop;
}
delegate(["click"]);
create_custom_element(Link, { config: {}, index: {}, name: {} }, [], [], { mode: "open" });

// Resources/Private/JavaScript/components/Fields/Checkbox.svelte
Checkbox[FILENAME] = "Resources/Private/JavaScript/components/Fields/Checkbox.svelte";
var root11 = add_locations(from_html(`<span class="form-check-label-icon"><span class="form-check-label-icon-checked"></span> <span class="form-check-label-icon-unchecked"></span></span>`), Checkbox[FILENAME], [[30, 16, [[31, 20], [34, 20]]]]);
var root_14 = add_locations(from_html(`<div class="form-group"><label class="form-label"> </label> <div><input type="checkbox" class="form-check-input me-1"/> <label class="form-check-label"><!> </label></div></div>`), Checkbox[FILENAME], [[16, 0, [[17, 4], [20, 4, [[22, 8], [28, 8]]]]]]);
function Checkbox($$anchor, $$props) {
  check_target(new.target);
  push($$props, true, Checkbox);
  const $focuspoints = () => (validate_store(focuspoints, "focuspoints"), store_get(focuspoints, "$focuspoints", $$stores));
  const $iconStore = () => (validate_store(iconStore, "iconStore"), store_get(iconStore, "$iconStore", $$stores));
  const [$$stores, $$cleanup] = setup_stores();
  let config = prop($$props, "config", 7), index2 = prop($$props, "index", 7), name = prop($$props, "name", 7);
  let isCheckbox = strict_equals(config()?.renderType, "check") || !Object.hasOwn(config(), "renderType");
  let isToggle = strict_equals(config()?.renderType, "checkboxToggle");
  onMount(() => {
    getIcon("actions-check");
    getIcon("empty-empty");
  });
  var $$exports = {
    ...legacy_api(),
    get config() {
      return config();
    },
    set config($$value) {
      config($$value);
      flushSync();
    },
    get index() {
      return index2();
    },
    set index($$value) {
      index2($$value);
      flushSync();
    },
    get name() {
      return name();
    },
    set name($$value) {
      name($$value);
      flushSync();
    }
  };
  var div = root_14();
  var label = child(div);
  var text2 = child(label, true);
  reset(label);
  var div_1 = sibling(label, 2);
  let classes;
  var input = child(div_1);
  remove_input_defaults(input);
  var label_1 = sibling(input, 2);
  var node = child(label_1);
  {
    var consequent = ($$anchor2) => {
      var span = root11();
      var span_1 = child(span);
      html(span_1, () => $iconStore()["actions-check"], true);
      reset(span_1);
      var span_2 = sibling(span_1, 2);
      html(span_2, () => $iconStore()["empty-empty"], true);
      reset(span_2);
      reset(span);
      append($$anchor2, span);
    };
    add_svelte_meta(
      () => if_block(node, ($$render) => {
        if (isCheckbox) $$render(consequent);
      }),
      "if",
      Checkbox,
      29,
      12
    );
  }
  var text_1 = sibling(node);
  reset(label_1);
  reset(div_1);
  reset(div);
  template_effect(() => {
    set_attribute2(label, "for", `input-${index2() ?? ""}-${name() ?? ""}`);
    set_attribute2(label, "id", `label-${index2() ?? ""}-${name() ?? ""}`);
    set_text(text2, config()?.title ?? config().title);
    classes = set_class(div_1, 1, "form-check", null, classes, {
      "form-check-type-icon-toggle": isCheckbox,
      "form-switch": isToggle
    });
    set_attribute2(input, "id", `input-${index2() ?? ""}-${name() ?? ""}`);
    set_attribute2(input, "aria-labelledby", `label-${index2() ?? ""}-${name() ?? ""}`);
    set_attribute2(label_1, "for", `input-${index2() ?? ""}-${name() ?? ""}`);
    set_text(text_1, ` ${config()?.label ?? "" ?? ""}`);
  });
  bind_checked(
    input,
    function get3() {
      return $focuspoints()[index2()][name()];
    },
    function set2($$value) {
      store_mutate(focuspoints, untrack($focuspoints)[index2()][name()] = $$value, untrack($focuspoints));
    }
  );
  append($$anchor, div);
  var $$pop = pop($$exports);
  $$cleanup();
  return $$pop;
}
create_custom_element(Checkbox, { config: {}, index: {}, name: {} }, [], [], { mode: "open" });

// Resources/Private/JavaScript/components/Fields/Shape.svelte
Shape[FILENAME] = "Resources/Private/JavaScript/components/Fields/Shape.svelte";
var root12 = add_locations(from_svg(`<svg viewBox="0 0 24 24" class="svelte-1be0thk"><rect x="4" y="6" width="16" height="12"></rect></svg>`), Shape[FILENAME], [[78, 24, [[79, 28]]]]);
var root_15 = add_locations(from_svg(`<svg viewBox="0 0 24 24" class="svelte-1be0thk"><ellipse cx="12" cy="12" rx="8" ry="6"></ellipse></svg>`), Shape[FILENAME], [[82, 24, [[83, 28]]]]);
var root_22 = add_locations(from_svg(`<svg viewBox="0 0 24 24" class="svelte-1be0thk"><line x1="5" y1="19" x2="19" y2="5"></line></svg>`), Shape[FILENAME], [[86, 24, [[87, 28]]]]);
var root_32 = add_locations(from_svg(`<svg viewBox="0 0 24 24" class="svelte-1be0thk"><line x1="12" y1="4" x2="12" y2="20"></line><line x1="4" y1="12" x2="20" y2="12"></line></svg>`), Shape[FILENAME], [[90, 24, [[91, 28], [92, 28]]]]);
var root_42 = add_locations(from_svg(`<svg viewBox="0 0 24 24" class="svelte-1be0thk"><polygon points="5,18 7,7 16,4 20,11 17,19 10,21"></polygon></svg>`), Shape[FILENAME], [[95, 24, [[96, 28]]]]);
var root_5 = add_locations(from_html(`<button type="button"><span class="shape-select__icon svelte-1be0thk" aria-hidden="true"><!></span> <span class="shape-select__label svelte-1be0thk"> </span></button>`), Shape[FILENAME], [[65, 12, [[76, 16], [103, 16]]]]);
var root_6 = add_locations(from_html(`<div class="form-group"><div class="shape-select svelte-1be0thk" role="radiogroup"></div></div>`), Shape[FILENAME], [[58, 0, [[60, 4]]]]);
var $$css7 = {
  hash: "svelte-1be0thk",
  code: "\n    .shape-select.svelte-1be0thk {\n        display: flex;\n        flex-wrap: wrap;\n        gap: 0.5rem;\n    }\n\n    .shape-select__button.svelte-1be0thk {\n        display: flex;\n        flex: 1 1 0;\n        flex-direction: column;\n        align-items: center;\n        justify-content: center;\n        gap: 0.25rem;\n        min-height: 4rem;\n        padding: 0.5rem;\n        border: 1px solid var(--typo3-component-border-color);\n        border-radius: var(--typo3-component-border-radius);\n        background: var(--typo3-component-bg);\n        color: inherit;\n        cursor: pointer;\n    }\n\n    .shape-select__button.svelte-1be0thk:hover,\n    .shape-select__button--active.svelte-1be0thk {\n        border-color: var(--typo3-state-primary-bg);\n        box-shadow: inset 0 0 0 1px var(--typo3-state-primary-bg);\n    }\n\n    .shape-select__icon.svelte-1be0thk svg:where(.svelte-1be0thk) {\n        width: 1.5rem;\n        height: 1.5rem;\n        fill: none;\n        stroke: currentColor;\n        stroke-width: 2;\n    }\n\n    .shape-select__label.svelte-1be0thk {\n        font-size: 0.75rem;\n    }\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2hhcGUuc3ZlbHRlIiwic291cmNlcyI6WyJTaGFwZS5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cbiAgICBpbXBvcnQge2ZvY3VzcG9pbnRzfSBmcm9tICcuLi8uLi9zdG9yZS5zdmVsdGUuanMnXG5cbiAgICBsZXQge3NoYXBlcywgaW5kZXh9ID0gJHByb3BzKClcbiAgICBsZXQgb3B0aW9ucyA9ICRkZXJpdmVkKHNoYXBlcy5tYXAodmFsdWUgPT4gKHtcbiAgICAgICAgdmFsdWUsXG4gICAgICAgIGxhYmVsOiB2YWx1ZVxuICAgIH0pKSlcbiAgICBmdW5jdGlvbiBjbGFtcCh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgdmFsdWUpKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNlbGVjdFNoYXBlKHZhbHVlKSB7XG4gICAgICAgIGZvY3VzcG9pbnRzLnVwZGF0ZSgoaXRlbXMpID0+IGl0ZW1zLm1hcCgoZm9jdXNwb2ludCwgY3VycmVudEluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAoY3VycmVudEluZGV4ICE9PSBpbmRleCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmb2N1c3BvaW50XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gJ3BvbHlnb24nICYmIGZvY3VzcG9pbnQuc2hhcGUgIT09ICdwb2x5Z29uJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHggPSBmb2N1c3BvaW50LnggPz8gMC4yNVxuICAgICAgICAgICAgICAgIGNvbnN0IHkgPSBmb2N1c3BvaW50LnkgPz8gMC4yNVxuICAgICAgICAgICAgICAgIGNvbnN0IHdpZHRoID0gZm9jdXNwb2ludC53aWR0aCA/PyAwLjJcbiAgICAgICAgICAgICAgICBjb25zdCBoZWlnaHQgPSBmb2N1c3BvaW50LmhlaWdodCA/PyAwLjJcblxuICAgICAgICAgICAgICAgIGNvbnN0IHZlcnRpY2VzID0gQXJyYXkuaXNBcnJheShmb2N1c3BvaW50LnZlcnRpY2VzKSAmJiBmb2N1c3BvaW50LnZlcnRpY2VzLmxlbmd0aCA+PSAzXG4gICAgICAgICAgICAgICAgICAgID8gZm9jdXNwb2ludC52ZXJ0aWNlc1xuICAgICAgICAgICAgICAgICAgICA6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHt4OiBjbGFtcCh4KSwgeTogY2xhbXAoeSl9LFxuICAgICAgICAgICAgICAgICAgICAgICAge3g6IGNsYW1wKHggKyB3aWR0aCksIHk6IGNsYW1wKHkpfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHt4OiBjbGFtcCh4ICsgd2lkdGgpLCB5OiBjbGFtcCh5ICsgaGVpZ2h0KX0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7eDogY2xhbXAoeCksIHk6IGNsYW1wKHkgKyBoZWlnaHQpfSxcbiAgICAgICAgICAgICAgICAgICAgXVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgLi4uZm9jdXNwb2ludCxcbiAgICAgICAgICAgICAgICAgICAgc2hhcGU6IHZhbHVlLFxuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNlcyxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gJ2Nyb3NzaGFpcicgJiYgZm9jdXNwb2ludC5zaGFwZSAhPT0gJ2Nyb3NzaGFpcicpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAuLi5mb2N1c3BvaW50LFxuICAgICAgICAgICAgICAgICAgICBzaGFwZTogdmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIHg6IGNsYW1wKChmb2N1c3BvaW50LnggPz8gMCkgKyAoKGZvY3VzcG9pbnQud2lkdGggPz8gMCkgLyAyKSksXG4gICAgICAgICAgICAgICAgICAgIHk6IGNsYW1wKChmb2N1c3BvaW50LnkgPz8gMCkgKyAoKGZvY3VzcG9pbnQuaGVpZ2h0ID8/IDApIC8gMikpLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5mb2N1c3BvaW50LFxuICAgICAgICAgICAgICAgIHNoYXBlOiB2YWx1ZSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkpXG4gICAgfVxuPC9zY3JpcHQ+XG5cbjxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG5cbiAgICA8ZGl2XG4gICAgICAgIGNsYXNzPVwic2hhcGUtc2VsZWN0XCJcbiAgICAgICAgcm9sZT1cInJhZGlvZ3JvdXBcIlxuICAgID5cbiAgICAgICAgeyNlYWNoIG9wdGlvbnMgYXMge3ZhbHVlLCBsYWJlbH19XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJzaGFwZS1zZWxlY3RfX2J1dHRvblwiXG4gICAgICAgICAgICAgICAgY2xhc3M6c2hhcGUtc2VsZWN0X19idXR0b24tLWFjdGl2ZT17JGZvY3VzcG9pbnRzW2luZGV4XS5zaGFwZSA9PT0gdmFsdWV9XG4gICAgICAgICAgICAgICAgYXJpYS1wcmVzc2VkPXskZm9jdXNwb2ludHNbaW5kZXhdLnNoYXBlID09PSB2YWx1ZX1cbiAgICAgICAgICAgICAgICB0aXRsZT17bGFiZWx9XG4gICAgICAgICAgICAgICAgb25jbGljaz17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0U2hhcGUodmFsdWUpXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNoYXBlLXNlbGVjdF9faWNvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgICB7I2lmIHZhbHVlID09PSAncmVjdGFuZ2xlJ31cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IHg9XCI0XCIgeT1cIjZcIiB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgIHs6ZWxzZSBpZiB2YWx1ZSA9PT0gJ2NpcmNsZScgfHwgdmFsdWUgPT09ICdlbGxpcHNlJ31cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxlbGxpcHNlIGN4PVwiMTJcIiBjeT1cIjEyXCIgcng9XCI4XCIgcnk9XCI2XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICB7OmVsc2UgaWYgdmFsdWUgPT09ICdsaW5lJ31cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaW5lIHgxPVwiNVwiIHkxPVwiMTlcIiB4Mj1cIjE5XCIgeTI9XCI1XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICB7OmVsc2UgaWYgdmFsdWUgPT09ICdjcm9zc2hhaXInfVxuICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpbmUgeDE9XCIxMlwiIHkxPVwiNFwiIHgyPVwiMTJcIiB5Mj1cIjIwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGluZSB4MT1cIjRcIiB5MT1cIjEyXCIgeDI9XCIyMFwiIHkyPVwiMTJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgIHs6ZWxzZSBpZiB2YWx1ZSA9PT0gJ3BvbHlnb24nfVxuICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gcG9pbnRzPVwiNSwxOCA3LDcgMTYsNCAyMCwxMSAxNywxOSAxMCwyMVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICB7OmVsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAgICAgICAgICAgIHsvaWZ9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzaGFwZS1zZWxlY3RfX2xhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgey9lYWNofVxuICAgIDwvZGl2PlxuPC9kaXY+XG5cbjxzdHlsZT5cbiAgICAuc2hhcGUtc2VsZWN0IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICBnYXA6IDAuNXJlbTtcbiAgICB9XG5cbiAgICAuc2hhcGUtc2VsZWN0X19idXR0b24ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4OiAxIDEgMDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGdhcDogMC4yNXJlbTtcbiAgICAgICAgbWluLWhlaWdodDogNHJlbTtcbiAgICAgICAgcGFkZGluZzogMC41cmVtO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS10eXBvMy1jb21wb25lbnQtYm9yZGVyLWNvbG9yKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tdHlwbzMtY29tcG9uZW50LWJvcmRlci1yYWRpdXMpO1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS10eXBvMy1jb21wb25lbnQtYmcpO1xuICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cblxuICAgIC5zaGFwZS1zZWxlY3RfX2J1dHRvbjpob3ZlcixcbiAgICAuc2hhcGUtc2VsZWN0X19idXR0b24tLWFjdGl2ZSB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tdHlwbzMtc3RhdGUtcHJpbWFyeS1iZyk7XG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDFweCB2YXIoLS10eXBvMy1zdGF0ZS1wcmltYXJ5LWJnKTtcbiAgICB9XG5cbiAgICAuc2hhcGUtc2VsZWN0X19pY29uIHN2ZyB7XG4gICAgICAgIHdpZHRoOiAxLjVyZW07XG4gICAgICAgIGhlaWdodDogMS41cmVtO1xuICAgICAgICBmaWxsOiBub25lO1xuICAgICAgICBzdHJva2U6IGN1cnJlbnRDb2xvcjtcbiAgICAgICAgc3Ryb2tlLXdpZHRoOiAyO1xuICAgIH1cblxuICAgIC5zaGFwZS1zZWxlY3RfX2xhYmVsIHtcbiAgICAgICAgZm9udC1zaXplOiAwLjc1cmVtO1xuICAgIH1cbjwvc3R5bGU+XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQStHQSxJQUFJLDRCQUFhLENBQUM7QUFDbEIsUUFBUSxhQUFhO0FBQ3JCLFFBQVEsZUFBZTtBQUN2QixRQUFRLFdBQVc7QUFDbkI7O0FBRUEsSUFBSSxvQ0FBcUIsQ0FBQztBQUMxQixRQUFRLGFBQWE7QUFDckIsUUFBUSxXQUFXO0FBQ25CLFFBQVEsc0JBQXNCO0FBQzlCLFFBQVEsbUJBQW1CO0FBQzNCLFFBQVEsdUJBQXVCO0FBQy9CLFFBQVEsWUFBWTtBQUNwQixRQUFRLGdCQUFnQjtBQUN4QixRQUFRLGVBQWU7QUFDdkIsUUFBUSxxREFBcUQ7QUFDN0QsUUFBUSxtREFBbUQ7QUFDM0QsUUFBUSxxQ0FBcUM7QUFDN0MsUUFBUSxjQUFjO0FBQ3RCLFFBQVEsZUFBZTtBQUN2Qjs7QUFFQSxJQUFJLG9DQUFxQixNQUFNO0FBQy9CLElBQUksNENBQTZCLENBQUM7QUFDbEMsUUFBUSwyQ0FBMkM7QUFDbkQsUUFBUSx5REFBeUQ7QUFDakU7O0FBRUEsSUFBSSxrQ0FBbUIsQ0FBQywwQkFBRyxDQUFDO0FBQzVCLFFBQVEsYUFBYTtBQUNyQixRQUFRLGNBQWM7QUFDdEIsUUFBUSxVQUFVO0FBQ2xCLFFBQVEsb0JBQW9CO0FBQzVCLFFBQVEsZUFBZTtBQUN2Qjs7QUFFQSxJQUFJLG1DQUFvQixDQUFDO0FBQ3pCLFFBQVEsa0JBQWtCO0FBQzFCOyJ9 */"
};
function Shape($$anchor, $$props) {
  check_target(new.target);
  push($$props, true, Shape);
  append_styles($$anchor, $$css7);
  const $focuspoints = () => (validate_store(focuspoints, "focuspoints"), store_get(focuspoints, "$focuspoints", $$stores));
  const [$$stores, $$cleanup] = setup_stores();
  let shapes2 = prop($$props, "shapes", 7), index2 = prop($$props, "index", 7);
  let options = tag(user_derived(() => shapes2().map((value) => ({ value, label: value }))), "options");
  function clamp2(value) {
    return Math.max(0, Math.min(1, value));
  }
  function selectShape(value) {
    focuspoints.update((items) => items.map((focuspoint, currentIndex) => {
      if (strict_equals(currentIndex, index2(), false)) {
        return focuspoint;
      }
      if (strict_equals(value, "polygon") && strict_equals(focuspoint.shape, "polygon", false)) {
        const x = focuspoint.x ?? 0.25;
        const y = focuspoint.y ?? 0.25;
        const width = focuspoint.width ?? 0.2;
        const height = focuspoint.height ?? 0.2;
        const vertices = Array.isArray(focuspoint.vertices) && focuspoint.vertices.length >= 3 ? focuspoint.vertices : [
          { x: clamp2(x), y: clamp2(y) },
          { x: clamp2(x + width), y: clamp2(y) },
          { x: clamp2(x + width), y: clamp2(y + height) },
          { x: clamp2(x), y: clamp2(y + height) }
        ];
        return { ...focuspoint, shape: value, vertices };
      }
      if (strict_equals(value, "crosshair") && strict_equals(focuspoint.shape, "crosshair", false)) {
        return {
          ...focuspoint,
          shape: value,
          x: clamp2((focuspoint.x ?? 0) + (focuspoint.width ?? 0) / 2),
          y: clamp2((focuspoint.y ?? 0) + (focuspoint.height ?? 0) / 2)
        };
      }
      return { ...focuspoint, shape: value };
    }));
  }
  var $$exports = {
    ...legacy_api(),
    get shapes() {
      return shapes2();
    },
    set shapes($$value) {
      shapes2($$value);
      flushSync();
    },
    get index() {
      return index2();
    },
    set index($$value) {
      index2($$value);
      flushSync();
    }
  };
  var div = root_6();
  var div_1 = child(div);
  add_svelte_meta(
    () => each(div_1, 21, () => get2(options), index, ($$anchor2, $$item) => {
      let value = () => get2($$item).value;
      value();
      let label = () => get2($$item).label;
      label();
      var button = root_5();
      let classes;
      var span = child(button);
      var node = child(span);
      {
        var consequent = ($$anchor3) => {
          var svg = root12();
          append($$anchor3, svg);
        };
        var consequent_1 = ($$anchor3) => {
          var svg_1 = root_15();
          append($$anchor3, svg_1);
        };
        var consequent_2 = ($$anchor3) => {
          var svg_2 = root_22();
          append($$anchor3, svg_2);
        };
        var consequent_3 = ($$anchor3) => {
          var svg_3 = root_32();
          append($$anchor3, svg_3);
        };
        var consequent_4 = ($$anchor3) => {
          var svg_4 = root_42();
          append($$anchor3, svg_4);
        };
        var alternate = ($$anchor3) => {
          var text2 = text();
          template_effect(() => set_text(text2, label()));
          append($$anchor3, text2);
        };
        add_svelte_meta(
          () => if_block(node, ($$render) => {
            if (strict_equals(value(), "rectangle")) $$render(consequent);
            else if (strict_equals(value(), "circle") || strict_equals(value(), "ellipse")) $$render(consequent_1, 1);
            else if (strict_equals(value(), "line")) $$render(consequent_2, 2);
            else if (strict_equals(value(), "crosshair")) $$render(consequent_3, 3);
            else if (strict_equals(value(), "polygon")) $$render(consequent_4, 4);
            else $$render(alternate, -1);
          }),
          "if",
          Shape,
          77,
          20
        );
      }
      reset(span);
      var span_1 = sibling(span, 2);
      var text_1 = child(span_1, true);
      reset(span_1);
      reset(button);
      template_effect(() => {
        classes = set_class(button, 1, "shape-select__button svelte-1be0thk", null, classes, {
          "shape-select__button--active": strict_equals($focuspoints()[index2()].shape, value())
        });
        set_attribute2(button, "aria-pressed", strict_equals($focuspoints()[index2()].shape, value()));
        set_attribute2(button, "title", label());
        set_text(text_1, label());
      });
      delegated("click", button, function click(event2) {
        event2.preventDefault();
        selectShape(value());
      });
      append($$anchor2, button);
    }),
    "each",
    Shape,
    64,
    8
  );
  reset(div_1);
  reset(div);
  append($$anchor, div);
  var $$pop = pop($$exports);
  $$cleanup();
  return $$pop;
}
delegate(["click"]);
create_custom_element(Shape, { shapes: {}, index: {} }, [], [], { mode: "open" });

// Resources/Private/JavaScript/components/Sidebar.svelte
Sidebar[FILENAME] = "Resources/Private/JavaScript/components/Sidebar.svelte";
var root13 = add_locations(from_html(`<div class="panel panel-default"><div class="panel-heading" role="tab"><h4 class="panel-title"><button data-bs-toggle="collapse"><span class="caret"></span> <span class="panel-title"> </span></button></h4></div> <div role="tabpanel"><div class="panel-body"><!> <!> <button class="btn btn-danger" name="reset" title="Reset"><!> </button></div></div></div>`), Sidebar[FILENAME], [
  [
    65,
    12,
    [
      [66, 16, [[67, 20, [[68, 24, [[80, 28], [81, 28]]]]]]],
      [87, 16, [[94, 20, [[107, 24]]]]]
    ]
  ]
]);
var root_16 = add_locations(from_html(`<div class="modal-panel-sidebar svelte-156mjrz"><div class="panel-group svelte-156mjrz" role="tablist" aria-multiselectable="false"></div> <div class="pt-3"><button class="btn btn-success w-100 "><!> </button></div></div>`), Sidebar[FILENAME], [[61, 0, [[62, 4], [123, 4, [[124, 8]]]]]]);
var $$css8 = {
  hash: "svelte-156mjrz",
  code: "\n    .modal-panel-sidebar.svelte-156mjrz {\n        padding-top: 0;\n        width: 100%;\n        --typo3-state-primary-bg: #ff8700;\n        --typo3-component-border-radius: 0;\n        --panel-border-radius: 0;\n    }\n\n    .panel-group.svelte-156mjrz {\n        margin-top: 0;\n        margin-bottom: 0;\n    }\n\n    .callout {\n        --typo3-component-border-radius: 4px;\n    }\n\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2lkZWJhci5zdmVsdGUiLCJzb3VyY2VzIjpbIlNpZGViYXIuc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG4gICAgaW1wb3J0IHtcbiAgICAgICAgZm9jdXNwb2ludHMsXG4gICAgICAgIGNyZWF0ZU5ld0ZvY3VzcG9pbnQsXG4gICAgICAgIHdpemFyZENvbmZpZ1N0b3JlLFxuICAgICAgICBnZXRJY29uLFxuICAgICAgICBpY29uU3RvcmUsXG4gICAgICAgIGFjdGl2YXRlRm9jdXNwb2ludCxcbiAgICAgICAgZm9jdXNQb2ludE5hbWUsIGZpZWxkTWVldHNDb25kaXRpb24sIHRvZ2dsZUZvY3VzcG9pbnRcbiAgICB9IGZyb20gJy4uL3N0b3JlLnN2ZWx0ZSdcbiAgICBpbXBvcnQge29uTW91bnR9IGZyb20gXCJzdmVsdGVcIjtcbiAgICBpbXBvcnQgU2VsZWN0IGZyb20gXCIuL0ZpZWxkcy9TZWxlY3Quc3ZlbHRlXCI7XG4gICAgaW1wb3J0IFRleHQgZnJvbSBcIi4vRmllbGRzL1RleHQuc3ZlbHRlXCI7XG4gICAgaW1wb3J0IFRleHRhcmVhIGZyb20gXCIuL0ZpZWxkcy9UZXh0YXJlYS5zdmVsdGVcIjtcbiAgICBpbXBvcnQgTGluayBmcm9tIFwiLi9GaWVsZHMvTGluay5zdmVsdGVcIjtcbiAgICBpbXBvcnQgQ2hlY2tib3ggZnJvbSBcIi4vRmllbGRzL0NoZWNrYm94LnN2ZWx0ZVwiO1xuICAgIGltcG9ydCBTaGFwZSBmcm9tIFwiLi9GaWVsZHMvU2hhcGUuc3ZlbHRlXCI7XG5cbiAgICBvbk1vdW50KCgpID0+IHtcbiAgICAgICAgZ2V0SWNvbignYWN0aW9ucy1jaGV2cm9uLXVwJylcbiAgICAgICAgZ2V0SWNvbignYWN0aW9ucy1kZWxldGUnKVxuICAgICAgICBnZXRJY29uKCdhY3Rpb25zLWFkZCcpXG4gICAgfSlcblxuICAgIGxldCBmb2N1c3BvaW50TmFtZSA9ICRkZXJpdmVkKChmb2N1c3BvaW50LCBpbmRleCkgPT4gZm9jdXNQb2ludE5hbWUoaW5kZXgpKVxuXG4gICAgZnVuY3Rpb24gZGVsZXRlRm9jdXNwb2ludChpbmRleCkge1xuICAgICAgICAkZm9jdXNwb2ludHMgPSAkZm9jdXNwb2ludHMuZmlsdGVyKChmb2N1c3BvaW50LCBpKSA9PiBpICE9PSBpbmRleClcbiAgICB9XG5cbiAgICBjb25zdCBjb21wb25lbnRzID0ge1xuICAgICAgICB0ZXh0OiBUZXh0LFxuICAgICAgICB0ZXh0YXJlYTogVGV4dGFyZWEsXG4gICAgICAgIHNlbGVjdDogU2VsZWN0LFxuICAgICAgICBsaW5rOiBMaW5rLFxuICAgICAgICBjaGVja2JveDogQ2hlY2tib3gsXG4gICAgfTtcbjwvc2NyaXB0PlxuXG5cbjxzdHlsZT5cbiAgICAubW9kYWwtcGFuZWwtc2lkZWJhciB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgLS10eXBvMy1zdGF0ZS1wcmltYXJ5LWJnOiAjZmY4NzAwO1xuICAgICAgICAtLXR5cG8zLWNvbXBvbmVudC1ib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICAtLXBhbmVsLWJvcmRlci1yYWRpdXM6IDA7XG4gICAgfVxuXG4gICAgLnBhbmVsLWdyb3VwIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICB9XG5cbiAgICA6Z2xvYmFsKC5jYWxsb3V0KSB7XG4gICAgICAgIC0tdHlwbzMtY29tcG9uZW50LWJvcmRlci1yYWRpdXM6IDRweDtcbiAgICB9XG5cbjwvc3R5bGU+XG5cbjxkaXYgY2xhc3M9XCJtb2RhbC1wYW5lbC1zaWRlYmFyXCI+XG4gICAgPGRpdiBjbGFzcz1cInBhbmVsLWdyb3VwXCIgcm9sZT1cInRhYmxpc3RcIiBhcmlhLW11bHRpc2VsZWN0YWJsZT1cImZhbHNlXCI+XG4gICAgICAgIHsjZWFjaCAkZm9jdXNwb2ludHMgYXMgZm9jdXNwb2ludCwgaW5kZXh9XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbCBwYW5lbC1kZWZhdWx0XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWhlYWRpbmdcIiByb2xlPVwidGFiXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cInBhbmVsLXRpdGxlXCIgaWQ9XCJjcm9wcGVyLWFjY29yZGlvbi1oZWFkaW5nLXtpbmRleH1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbmNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlRm9jdXNwb2ludChpbmRleClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYnMtdG9nZ2xlPVwiY29sbGFwc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYnMtdGFyZ2V0PVwiI2Nyb3BwZXItY29sbGFwc2Ute2luZGV4fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1leHBhbmRlZD17Zm9jdXNwb2ludC5hY3RpdmV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1jb250cm9scz1cImNyb3BwZXItY29sbGFwc2Ute2luZGV4fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6Y29sbGFwc2VkPXshZm9jdXNwb2ludC5hY3RpdmV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6c2hvdz17Zm9jdXNwb2ludC5hY3RpdmV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJwYW5lbC1idXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNhcmV0XCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicGFuZWwtdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2ZvY3VzcG9pbnROYW1lKGZvY3VzcG9pbnQsIGluZGV4KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGlkPVwiY3JvcHBlci1jb2xsYXBzZS17aW5kZXh9XCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJwYW5lbC1jb2xsYXBzZVwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOnNob3c9e2ZvY3VzcG9pbnQuYWN0aXZlfVxuICAgICAgICAgICAgICAgICAgICBjbGFzczpjb2xsYXBzZT17IWZvY3VzcG9pbnQuYWN0aXZlfVxuICAgICAgICAgICAgICAgICAgICByb2xlPVwidGFicGFuZWxcIlxuICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJjcm9wcGVyLWFjY29yZGlvbi1oZWFkaW5nLXtpbmRleH1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsjaWYgJHdpemFyZENvbmZpZ1N0b3JlLmFsbG93ZWRTaGFwZXMubGVuZ3RoID4gMX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2hhcGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2luZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGFwZXM9eyR3aXphcmRDb25maWdTdG9yZS5hbGxvd2VkU2hhcGVzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICB7L2lmfVxuICAgICAgICAgICAgICAgICAgICAgICAgeyNlYWNoIE9iamVjdC5lbnRyaWVzKCR3aXphcmRDb25maWdTdG9yZS5maWVsZHMpIGFzIFtrZXksIGZpZWxkXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7I2lmIGZpZWxkTWVldHNDb25kaXRpb24oa2V5LCBmb2N1c3BvaW50KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZWx0ZTpjb21wb25lbnQgdGhpcz17Y29tcG9uZW50c1tmaWVsZC50eXBlXX0gaW5kZXg9e2luZGV4fSBuYW1lPXtrZXl9IGNvbmZpZz17ZmllbGQgPz8ge319IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey9pZn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvZWFjaH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXJcIiBuYW1lPVwicmVzZXRcIiB0aXRsZT1cIlJlc2V0XCIgb25jbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZUZvY3VzcG9pbnQoaW5kZXgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge0BodG1sICRpY29uU3RvcmVbJ2FjdGlvbnMtZGVsZXRlJ119XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyR3aXphcmRDb25maWdTdG9yZT8ubGFuZ1snd2l6YXJkLnNpbmdsZV9wb2ludC5idXR0b24uZGVsZXRlJ119XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgIHsvZWFjaH1cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJwdC0zXCI+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzIHctMTAwIFwiIG9uY2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgIGNyZWF0ZU5ld0ZvY3VzcG9pbnQoKVxuICAgICAgICB9fT5cbiAgICAgICAgICAgIHtAaHRtbCAkaWNvblN0b3JlWydhY3Rpb25zLWFkZCddfVxuICAgICAgICAgICAgeyR3aXphcmRDb25maWdTdG9yZT8ubGFuZ1snd2l6YXJkLnNpbmdsZV9wb2ludC5idXR0b24uYWRkbmV3J119XG4gICAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuXG48L2Rpdj5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBeUNBLElBQUksbUNBQW9CLENBQUM7QUFDekIsUUFBUSxjQUFjO0FBQ3RCLFFBQVEsV0FBVztBQUNuQixRQUFRLGlDQUFpQztBQUN6QyxRQUFRLGtDQUFrQztBQUMxQyxRQUFRLHdCQUF3QjtBQUNoQzs7QUFFQSxJQUFJLDJCQUFZLENBQUM7QUFDakIsUUFBUSxhQUFhO0FBQ3JCLFFBQVEsZ0JBQWdCO0FBQ3hCOztBQUVBLElBQVksUUFBUyxDQUFDO0FBQ3RCLFFBQVEsb0NBQW9DO0FBQzVDOzsifQ== */"
};
function Sidebar($$anchor, $$props) {
  check_target(new.target);
  push($$props, true, Sidebar);
  append_styles($$anchor, $$css8);
  const $focuspoints = () => (validate_store(focuspoints, "focuspoints"), store_get(focuspoints, "$focuspoints", $$stores));
  const $wizardConfigStore = () => (validate_store(wizardConfigStore, "wizardConfigStore"), store_get(wizardConfigStore, "$wizardConfigStore", $$stores));
  const $iconStore = () => (validate_store(iconStore, "iconStore"), store_get(iconStore, "$iconStore", $$stores));
  const [$$stores, $$cleanup] = setup_stores();
  onMount(() => {
    getIcon("actions-chevron-up");
    getIcon("actions-delete");
    getIcon("actions-add");
  });
  let focuspointName = tag(user_derived(() => (focuspoint, index2) => focusPointName(index2)), "focuspointName");
  function deleteFocuspoint(index2) {
    store_set(focuspoints, $focuspoints().filter((focuspoint, i) => strict_equals(i, index2, false)));
  }
  const components = {
    text: Text2,
    textarea: Textarea,
    select: Select,
    link: Link,
    checkbox: Checkbox
  };
  var $$exports = { ...legacy_api() };
  var div = root_16();
  var div_1 = child(div);
  add_svelte_meta(
    () => each(div_1, 5, $focuspoints, index, ($$anchor2, focuspoint, index2) => {
      var div_2 = root13();
      var div_3 = child(div_2);
      var h4 = child(div_3);
      set_attribute2(h4, "id", `cropper-accordion-heading-${index2}`);
      var button = child(h4);
      set_attribute2(button, "data-bs-target", `#cropper-collapse-${index2}`);
      set_attribute2(button, "aria-controls", `cropper-collapse-${index2}`);
      let classes;
      var span = sibling(child(button), 2);
      var text2 = child(span, true);
      reset(span);
      reset(button);
      reset(h4);
      reset(div_3);
      var div_4 = sibling(div_3, 2);
      set_attribute2(div_4, "id", `cropper-collapse-${index2}`);
      let classes_1;
      set_attribute2(div_4, "aria-labelledby", `cropper-accordion-heading-${index2}`);
      var div_5 = child(div_4);
      var node = child(div_5);
      {
        var consequent = ($$anchor3) => {
          add_svelte_meta(
            () => Shape($$anchor3, {
              index: index2,
              get shapes() {
                return $wizardConfigStore().allowedShapes;
              }
            }),
            "component",
            Sidebar,
            96,
            28,
            { componentTag: "Shape" }
          );
        };
        add_svelte_meta(
          () => if_block(node, ($$render) => {
            if ($wizardConfigStore().allowedShapes.length > 1) $$render(consequent);
          }),
          "if",
          Sidebar,
          95,
          24
        );
      }
      var node_1 = sibling(node, 2);
      add_svelte_meta(
        () => each(node_1, 1, () => Object.entries($wizardConfigStore().fields), index, ($$anchor3, $$item) => {
          var $$array = user_derived(() => to_array(get2($$item), 2));
          let key2 = () => get2($$array)[0];
          key2();
          let field = () => get2($$array)[1];
          field();
          var fragment_1 = comment();
          var node_2 = first_child(fragment_1);
          {
            var consequent_1 = ($$anchor4) => {
              var fragment_2 = comment();
              var node_3 = first_child(fragment_2);
              {
                let $0 = user_derived(() => field() ?? {});
                add_svelte_meta(
                  () => component(node_3, () => components[field().type], ($$anchor5, $$component) => {
                    $$component($$anchor5, {
                      index: index2,
                      get name() {
                        return key2();
                      },
                      get config() {
                        return get2($0);
                      }
                    });
                  }),
                  "component",
                  Sidebar,
                  103,
                  32,
                  { componentTag: "svelte:component" }
                );
              }
              append($$anchor4, fragment_2);
            };
            var d = user_derived(() => fieldMeetsCondition(key2(), get2(focuspoint)));
            add_svelte_meta(
              () => if_block(node_2, ($$render) => {
                if (get2(d)) $$render(consequent_1);
              }),
              "if",
              Sidebar,
              102,
              28
            );
          }
          append($$anchor3, fragment_1);
        }),
        "each",
        Sidebar,
        101,
        24
      );
      var button_1 = sibling(node_1, 2);
      var node_4 = child(button_1);
      html(node_4, () => $iconStore()["actions-delete"]);
      var text_1 = sibling(node_4);
      reset(button_1);
      reset(div_5);
      reset(div_4);
      reset(div_2);
      template_effect(
        ($0) => {
          set_attribute2(button, "aria-expanded", get2(focuspoint).active);
          classes = set_class(button, 1, "panel-button", null, classes, {
            collapsed: !get2(focuspoint).active,
            show: get2(focuspoint).active
          });
          set_text(text2, $0);
          classes_1 = set_class(div_4, 1, "panel-collapse", null, classes_1, {
            show: get2(focuspoint).active,
            collapse: !get2(focuspoint).active
          });
          set_text(text_1, ` ${$wizardConfigStore()?.lang["wizard.single_point.button.delete"] ?? ""}`);
        },
        [() => get2(focuspointName)(get2(focuspoint), index2)]
      );
      delegated("click", button, function click(e) {
        e.preventDefault();
        toggleFocuspoint(index2);
      });
      delegated("click", button_1, function click_1(e) {
        e.preventDefault();
        deleteFocuspoint(index2);
      });
      append($$anchor2, div_2);
    }),
    "each",
    Sidebar,
    63,
    8
  );
  reset(div_1);
  var div_6 = sibling(div_1, 2);
  var button_2 = child(div_6);
  var node_5 = child(button_2);
  html(node_5, () => $iconStore()["actions-add"]);
  var text_2 = sibling(node_5);
  reset(button_2);
  reset(div_6);
  reset(div);
  template_effect(() => set_text(text_2, ` ${$wizardConfigStore()?.lang["wizard.single_point.button.addnew"] ?? ""}`));
  delegated("click", button_2, function click_2(e) {
    e.preventDefault();
    createNewFocuspoint();
  });
  append($$anchor, div);
  var $$pop = pop($$exports);
  $$cleanup();
  return $$pop;
}
delegate(["click"]);
create_custom_element(Sidebar, {}, [], [], { mode: "open" });

// Resources/Private/JavaScript/FocuspointWizard.svelte
import interact6 from "interactjs";

// Resources/Private/JavaScript/components/Settings.svelte
import Notification from "@typo3/backend/notification.js";
Settings[FILENAME] = "Resources/Private/JavaScript/components/Settings.svelte";
var root14 = add_locations(from_html(`<div class="d-flex justify-content-center align-items-center wrapper svelte-10s059u"><fieldset class="form-section svelte-10s059u"><div class="d-flex justify-content-between"><h3 class="form-section-headline"> </h3> <button aria-label="Close settings" class="btn-close svelte-10s059u"><!> <span class="visually-hidden"> </span></button></div> <div class="row"><label for="points">Import / Export</label> <div class="form-group"><textarea id="points" rows="10" cols="50"></textarea> <div class="d-flex justify-content-between"><div><button class="btn btn-default"><!> </button> <button class="btn btn-default"><!> </button></div> <div><button class="btn btn-default"><!> </button> <button class="btn btn-primary"><!> </button></div></div></div></div></fieldset></div>`), Settings[FILENAME], [
  [
    78,
    0,
    [
      [
        80,
        4,
        [
          [81, 8, [[82, 12], [83, 12, [[85, 16]]]]],
          [
            88,
            8,
            [
              [89, 12],
              [
                90,
                12,
                [
                  [91, 20],
                  [
                    100,
                    16,
                    [
                      [101, 20, [[102, 24], [105, 24]]],
                      [109, 20, [[110, 24], [113, 24]]]
                    ]
                  ]
                ]
              ]
            ]
          ]
        ]
      ]
    ]
  ]
]);
var $$css9 = {
  hash: "svelte-10s059u",
  code: "\n    .wrapper.svelte-10s059u {\n        grid-column: 1 / 4;\n    }\n\n    .form-section.svelte-10s059u {\n        container-type: unset;\n    }\n\n    .btn-close.svelte-10s059u {\n        background: transparent;\n        border: none;\n        height: fit-content;\n        padding-top: 0;\n        color: var(--icon-color-primary, currentColor)\n    }\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2V0dGluZ3Muc3ZlbHRlIiwic291cmNlcyI6WyJTZXR0aW5ncy5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cbiAgICBpbXBvcnQge2ZvY3VzcG9pbnRzLCBnZXRJY29uLCBpY29uU3RvcmUsIHdpemFyZENvbmZpZ1N0b3JlfSBmcm9tICcuLi9zdG9yZS5zdmVsdGUuanMnO1xuICAgIGltcG9ydCB7bm9ybWFsaXplRm9jdXNwb2ludHMsIHNlcmlhbGl6ZUZvY3VzcG9pbnRzfSBmcm9tICcuLi9mb2N1c3BvaW50RGF0YS5qcyc7XG4gICAgaW1wb3J0IE5vdGlmaWNhdGlvbiBmcm9tIFwiQHR5cG8zL2JhY2tlbmQvbm90aWZpY2F0aW9uLmpzXCI7XG4gICAgaW1wb3J0IHtvbk1vdW50fSBmcm9tIFwic3ZlbHRlXCI7XG5cbiAgICBsZXQge2l0ZW1Gb3JtRWxOYW1lLCBpc1NldHRpbmdzT3BlblZhbHVlID0gJGJpbmRhYmxlKCl9ID0gJHByb3BzKClcbiAgICBsZXQgZm9jdXNwb2ludEFyZWE7XG4gICAgbGV0IGpzb25Qb2ludHMgPSAkc3RhdGUoc2VyaWFsaXplRm9jdXNwb2ludHMoJGZvY3VzcG9pbnRzKSk7XG4gICAgbGV0IGhhc0Vycm9yID0gJHN0YXRlKGZhbHNlKVxuICAgIGxldCBoYXNDaGFuZ2UgPSAkc3RhdGUoZmFsc2UpXG5cbiAgICAkZWZmZWN0KCgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIEpTT04ucGFyc2UoanNvblBvaW50cylcbiAgICAgICAgICAgIGhhc0Vycm9yID0gZmFsc2VcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgaGFzRXJyb3IgPSB0cnVlXG4gICAgICAgIH1cblxuICAgICAgICBoYXNDaGFuZ2UgPSBqc29uUG9pbnRzICE9PSBzZXJpYWxpemVGb2N1c3BvaW50cygkZm9jdXNwb2ludHMpXG4gICAgfSk7XG5cbiAgICBvbk1vdW50KCgpID0+IHtcbiAgICAgICAgZ2V0SWNvbignYWN0aW9ucy1jbGlwYm9hcmQnKVxuICAgICAgICBnZXRJY29uKCdhY3Rpb25zLWNsaXBib2FyZC1wYXN0ZScpXG4gICAgICAgIGdldEljb24oJ2FjdGlvbnMtY2hlY2snKVxuICAgICAgICBnZXRJY29uKCdhY3Rpb25zLXVuZG8nKVxuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gb25Db3B5QnV0dG9uQ2xpY2soKSB7XG4gICAgICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KGZvY3VzcG9pbnRBcmVhLnZhbHVlKTtcbiAgICAgICAgTm90aWZpY2F0aW9uLnN1Y2Nlc3MoXG4gICAgICAgICAgICAgICAgJHdpemFyZENvbmZpZ1N0b3JlPy5sYW5nWyd3aXphcmQuc2V0dGluZ3MuY29waWVkJ10sXG4gICAgICAgICAgICAgICAgJHdpemFyZENvbmZpZ1N0b3JlPy5sYW5nWyd3aXphcmQuc2V0dGluZ3MuY29waWVkLm1lc3NhZ2UnXSxcbiAgICAgICAgICAgICAgICAzXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25QYXN0ZUJ1dHRvbkNsaWNrKCkge1xuICAgICAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLnJlYWRUZXh0KCkudGhlbih0ZXh0ID0+IHtcbiAgICAgICAgICAgIGpzb25Qb2ludHMgPSB0ZXh0XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uVW5kb0J1dHRvbkNsaWNrKCkge1xuICAgICAgICBqc29uUG9pbnRzID0gc2VyaWFsaXplRm9jdXNwb2ludHMoJGZvY3VzcG9pbnRzKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvblNhdmVCdXR0b25DbGljaygpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICRmb2N1c3BvaW50cyA9IG5vcm1hbGl6ZUZvY3VzcG9pbnRzKGpzb25Qb2ludHMsICR3aXphcmRDb25maWdTdG9yZSk7XG4gICAgICAgICAgICBpc1NldHRpbmdzT3BlblZhbHVlID0gZmFsc2VcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgTm90aWZpY2F0aW9uLmVycm9yKCdFcnJvcicsICdJbnZhbGlkIEpTT04nLCA1KTtcbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4gICAgLndyYXBwZXIge1xuICAgICAgICBncmlkLWNvbHVtbjogMSAvIDQ7XG4gICAgfVxuXG4gICAgLmZvcm0tc2VjdGlvbiB7XG4gICAgICAgIGNvbnRhaW5lci10eXBlOiB1bnNldDtcbiAgICB9XG5cbiAgICAuYnRuLWNsb3NlIHtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICAgICAgcGFkZGluZy10b3A6IDA7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pY29uLWNvbG9yLXByaW1hcnksIGN1cnJlbnRDb2xvcilcbiAgICB9XG48L3N0eWxlPlxuXG48ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyIHdyYXBwZXJcIj5cblxuICAgIDxmaWVsZHNldCBjbGFzcz1cImZvcm0tc2VjdGlvblwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XG4gICAgICAgICAgICA8aDMgY2xhc3M9XCJmb3JtLXNlY3Rpb24taGVhZGxpbmVcIj57JHdpemFyZENvbmZpZ1N0b3JlPy5sYW5nWyd3aXphcmQuYnV0dG9uLnNldHRpbmdzJ119PC9oMz5cbiAgICAgICAgICAgIDxidXR0b24gb25jbGljaz17KCkgPT4gaXNTZXR0aW5nc09wZW5WYWx1ZSA9IGZhbHNlfSBhcmlhLWxhYmVsPVwiQ2xvc2Ugc2V0dGluZ3NcIiBjbGFzcz1cImJ0bi1jbG9zZVwiPlxuICAgICAgICAgICAgICAgIHtAaHRtbCAkaWNvblN0b3JlWydhY3Rpb25zLWNsb3NlJ119XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ2aXN1YWxseS1oaWRkZW5cIj57JHdpemFyZENvbmZpZ1N0b3JlPy5sYW5nWyd3aXphcmQuYnV0dG9uLmNhbmNlbCddfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZm9ybS1sYWJlbFwiIGNsYXNzOmhhcy1lcnJvcj17aGFzRXJyb3J9IGNsYXNzOmhhcy1jaGFuZ2U9e2hhc0NoYW5nZX0gZm9yPVwicG9pbnRzXCI+SW1wb3J0IC8gRXhwb3J0PC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sIHQzanMtZm9ybWVuZ2luZS10ZXh0YXJlYSBmb3JtZW5naW5lLXRleHRhcmVhIG1iLTNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJpbmQ6dGhpcz17Zm9jdXNwb2ludEFyZWF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmluZDp2YWx1ZT17anNvblBvaW50c31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczpoYXMtZXJyb3I9e2hhc0Vycm9yfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOmhhcy1jaGFuZ2U9e2hhc0NoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInBvaW50c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93cz1cIjEwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xzPVwiNTBcIj48L3RleHRhcmVhPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWRlZmF1bHRcIiBvbmNsaWNrPXtvbkNvcHlCdXR0b25DbGlja30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge0BodG1sICRpY29uU3RvcmVbJ2FjdGlvbnMtY2xpcGJvYXJkJ119IHskd2l6YXJkQ29uZmlnU3RvcmU/LmxhbmdbJ3dpemFyZC5idXR0b24uY29weSddfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCIgb25jbGljaz17b25QYXN0ZUJ1dHRvbkNsaWNrfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7QGh0bWwgJGljb25TdG9yZVsnYWN0aW9ucy1jbGlwYm9hcmQtcGFzdGUnXX0geyR3aXphcmRDb25maWdTdG9yZT8ubGFuZ1snd2l6YXJkLmJ1dHRvbi5wYXN0ZSddfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBkaXNhYmxlZD17IWhhc0NoYW5nZX0gY2xhc3M9XCJidG4gYnRuLWRlZmF1bHRcIiBvbmNsaWNrPXtvblVuZG9CdXR0b25DbGlja30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge0BodG1sICRpY29uU3RvcmVbJ2FjdGlvbnMtdW5kbyddfSB7JHdpemFyZENvbmZpZ1N0b3JlPy5sYW5nWyd3aXphcmQuYnV0dG9uLnVuZG8nXX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBkaXNhYmxlZD17IWhhc0NoYW5nZSB8fCBoYXNFcnJvcn0gY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiBvbmNsaWNrPXtvblNhdmVCdXR0b25DbGlja30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge0BodG1sICRpY29uU3RvcmVbJ2FjdGlvbnMtY2hlY2snXX0geyR3aXphcmRDb25maWdTdG9yZT8ubGFuZ1snd2l6YXJkLmJ1dHRvbi5hY2NlcHQnXX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2ZpZWxkc2V0PlxuPC9kaXY+XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQTREQSxJQUFJLHVCQUFRLENBQUM7QUFDYixRQUFRLGtCQUFrQjtBQUMxQjs7QUFFQSxJQUFJLDRCQUFhLENBQUM7QUFDbEIsUUFBUSxxQkFBcUI7QUFDN0I7O0FBRUEsSUFBSSx5QkFBVSxDQUFDO0FBQ2YsUUFBUSx1QkFBdUI7QUFDL0IsUUFBUSxZQUFZO0FBQ3BCLFFBQVEsbUJBQW1CO0FBQzNCLFFBQVEsY0FBYztBQUN0QixRQUFRO0FBQ1IsSUFBSTsifQ== */"
};
function Settings($$anchor, $$props) {
  check_target(new.target);
  push($$props, true, Settings);
  append_styles($$anchor, $$css9);
  const $focuspoints = () => (validate_store(focuspoints, "focuspoints"), store_get(focuspoints, "$focuspoints", $$stores));
  const $wizardConfigStore = () => (validate_store(wizardConfigStore, "wizardConfigStore"), store_get(wizardConfigStore, "$wizardConfigStore", $$stores));
  const $iconStore = () => (validate_store(iconStore, "iconStore"), store_get(iconStore, "$iconStore", $$stores));
  const [$$stores, $$cleanup] = setup_stores();
  let itemFormElName = prop($$props, "itemFormElName", 7), isSettingsOpenValue = prop($$props, "isSettingsOpenValue", 15);
  let focuspointArea;
  let jsonPoints = tag(state(proxy(serializeFocuspoints($focuspoints()))), "jsonPoints");
  let hasError = tag(state(false), "hasError");
  let hasChange = tag(state(false), "hasChange");
  user_effect(() => {
    try {
      JSON.parse(get2(jsonPoints));
      set(hasError, false);
    } catch (e) {
      set(hasError, true);
    }
    set(hasChange, strict_equals(get2(jsonPoints), serializeFocuspoints($focuspoints()), false));
  });
  onMount(() => {
    getIcon("actions-clipboard");
    getIcon("actions-clipboard-paste");
    getIcon("actions-check");
    getIcon("actions-undo");
  });
  function onCopyButtonClick() {
    navigator.clipboard.writeText(focuspointArea.value);
    Notification.success($wizardConfigStore()?.lang["wizard.settings.copied"], $wizardConfigStore()?.lang["wizard.settings.copied.message"], 3);
  }
  function onPasteButtonClick() {
    navigator.clipboard.readText().then((text2) => {
      set(jsonPoints, text2, true);
    });
  }
  function onUndoButtonClick() {
    set(jsonPoints, serializeFocuspoints($focuspoints()), true);
  }
  function onSaveButtonClick() {
    try {
      store_set(focuspoints, normalizeFocuspoints(get2(jsonPoints), $wizardConfigStore()));
      isSettingsOpenValue(false);
    } catch (e) {
      Notification.error("Error", "Invalid JSON", 5);
    }
  }
  var $$exports = {
    ...legacy_api(),
    get itemFormElName() {
      return itemFormElName();
    },
    set itemFormElName($$value) {
      itemFormElName($$value);
      flushSync();
    },
    get isSettingsOpenValue() {
      return isSettingsOpenValue();
    },
    set isSettingsOpenValue($$value) {
      isSettingsOpenValue($$value);
      flushSync();
    }
  };
  var div = root14();
  var fieldset = child(div);
  var div_1 = child(fieldset);
  var h3 = child(div_1);
  var text_1 = child(h3, true);
  reset(h3);
  var button = sibling(h3, 2);
  var node = child(button);
  html(node, () => $iconStore()["actions-close"]);
  var span = sibling(node, 2);
  var text_2 = child(span, true);
  reset(span);
  reset(button);
  reset(div_1);
  var div_2 = sibling(div_1, 2);
  var label = child(div_2);
  let classes;
  var div_3 = sibling(label, 2);
  var textarea = child(div_3);
  remove_textarea_child(textarea);
  let classes_1;
  bind_this(textarea, ($$value) => focuspointArea = $$value, () => focuspointArea);
  var div_4 = sibling(textarea, 2);
  var div_5 = child(div_4);
  var button_1 = child(div_5);
  var node_1 = child(button_1);
  html(node_1, () => $iconStore()["actions-clipboard"]);
  var text_3 = sibling(node_1);
  reset(button_1);
  var button_2 = sibling(button_1, 2);
  var node_2 = child(button_2);
  html(node_2, () => $iconStore()["actions-clipboard-paste"]);
  var text_4 = sibling(node_2);
  reset(button_2);
  reset(div_5);
  var div_6 = sibling(div_5, 2);
  var button_3 = child(div_6);
  var node_3 = child(button_3);
  html(node_3, () => $iconStore()["actions-undo"]);
  var text_5 = sibling(node_3);
  reset(button_3);
  var button_4 = sibling(button_3, 2);
  var node_4 = child(button_4);
  html(node_4, () => $iconStore()["actions-check"]);
  var text_6 = sibling(node_4);
  reset(button_4);
  reset(div_6);
  reset(div_4);
  reset(div_3);
  reset(div_2);
  reset(fieldset);
  reset(div);
  template_effect(() => {
    set_text(text_1, $wizardConfigStore()?.lang["wizard.button.settings"]);
    set_text(text_2, $wizardConfigStore()?.lang["wizard.button.cancel"]);
    classes = set_class(label, 1, "form-label", null, classes, { "has-error": get2(hasError), "has-change": get2(hasChange) });
    classes_1 = set_class(textarea, 1, "form-control t3js-formengine-textarea formengine-textarea mb-3", null, classes_1, { "has-error": get2(hasError), "has-change": get2(hasChange) });
    set_text(text_3, ` ${$wizardConfigStore()?.lang["wizard.button.copy"] ?? ""}`);
    set_text(text_4, ` ${$wizardConfigStore()?.lang["wizard.button.paste"] ?? ""}`);
    button_3.disabled = !get2(hasChange);
    set_text(text_5, ` ${$wizardConfigStore()?.lang["wizard.button.undo"] ?? ""}`);
    button_4.disabled = !get2(hasChange) || get2(hasError);
    set_text(text_6, ` ${$wizardConfigStore()?.lang["wizard.button.accept"] ?? ""}`);
  });
  delegated("click", button, function click() {
    return isSettingsOpenValue(false);
  });
  bind_value(
    textarea,
    function get3() {
      return get2(jsonPoints);
    },
    function set2($$value) {
      set(jsonPoints, $$value);
    }
  );
  delegated("click", button_1, onCopyButtonClick);
  delegated("click", button_2, onPasteButtonClick);
  delegated("click", button_3, onUndoButtonClick);
  delegated("click", button_4, onSaveButtonClick);
  append($$anchor, div);
  var $$pop = pop($$exports);
  $$cleanup();
  return $$pop;
}
delegate(["click"]);
create_custom_element(Settings, { itemFormElName: {}, isSettingsOpenValue: {} }, [], [], { mode: "open" });

// Resources/Private/JavaScript/FocuspointWizard.svelte
FocuspointWizard[FILENAME] = "Resources/Private/JavaScript/FocuspointWizard.svelte";
var root15 = add_locations(from_html(`<!> <div class="resize-handle svelte-162s9id" aria-label="Resize sidebar"></div> <!>`, 1), FocuspointWizard[FILENAME], [[109, 8]]);
var root_17 = add_locations(from_html(`<div class="wizard svelte-162s9id"><!></div>`), FocuspointWizard[FILENAME], [[104, 0]]);
var $$css10 = {
  hash: "svelte-162s9id",
  code: "\n    .wizard.svelte-162s9id {\n        display: grid;\n        max-height: 100%;\n        grid-template-columns: 1fr 1px var(--sidebar-width, 300px);\n        grid-template-rows: 100%;\n    }\n\n    .resize-handle.svelte-162s9id {\n        cursor: ew-resize !important;\n        user-select: none;\n        position: relative;\n    }\n\n    .resize-handle.svelte-162s9id:after {\n        content: '';\n        position: absolute;\n        z-index: 1;\n        top: 0;\n        right: -4px;\n        width: 4px;\n        height: 100%;\n        background: rgba(255, 255, 255, 0);\n    }\n\n    .resize-handle.svelte-162s9id:hover:after {\n        background: var(--scaffold-content-navigation-drag-bg-hover, #bbb);\n    }\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRm9jdXNwb2ludFdpemFyZC5zdmVsdGUiLCJzb3VyY2VzIjpbIkZvY3VzcG9pbnRXaXphcmQuc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzdmVsdGU6b3B0aW9ucyBjdXN0b21FbGVtZW50PXt7dGFnOiAnZm9jdXNwb2ludC13aXphcmQnLCBzaGFkb3c6ICdub25lJ319IC8+XG5cbjxzdHlsZT5cbiAgICAud2l6YXJkIHtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMXB4IHZhcigtLXNpZGViYXItd2lkdGgsIDMwMHB4KTtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDAlO1xuICAgIH1cblxuICAgIC5yZXNpemUtaGFuZGxlIHtcbiAgICAgICAgY3Vyc29yOiBldy1yZXNpemUgIWltcG9ydGFudDtcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG5cbiAgICAucmVzaXplLWhhbmRsZTphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgcmlnaHQ6IC00cHg7XG4gICAgICAgIHdpZHRoOiA0cHg7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcbiAgICB9XG5cbiAgICAucmVzaXplLWhhbmRsZTpob3ZlcjphZnRlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXNjYWZmb2xkLWNvbnRlbnQtbmF2aWdhdGlvbi1kcmFnLWJnLWhvdmVyLCAjYmJiKTtcbiAgICB9XG48L3N0eWxlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCB7b25EZXN0cm95LCBvbk1vdW50fSBmcm9tIFwic3ZlbHRlXCI7XG4gICAgaW1wb3J0IEltYWdlIGZyb20gJy4vY29tcG9uZW50cy9JbWFnZS5zdmVsdGUnO1xuICAgIGltcG9ydCBTaWRlYmFyIGZyb20gXCIuL2NvbXBvbmVudHMvU2lkZWJhci5zdmVsdGVcIjtcbiAgICBpbXBvcnQge2luaXRTdG9yZXMsIGZvY3VzcG9pbnRzLCBmb2N1c3BvaW50Q2hhbm5lbE5hbWUsIGFjdGl2YXRlRm9jdXNwb2ludCwgZGVhY3RpdmF0ZUFsbEZvY3VzcG9pbnRzfSBmcm9tICcuL3N0b3JlLnN2ZWx0ZS5qcyc7XG4gICAgaW1wb3J0IHt0b1BlcnNpc3RlZEZvY3VzcG9pbnRzfSBmcm9tICcuL2ZvY3VzcG9pbnREYXRhLmpzJztcbiAgICBpbXBvcnQgaW50ZXJhY3QgZnJvbSAnaW50ZXJhY3Rqcyc7XG4gICAgaW1wb3J0IFNldHRpbmdzIGZyb20gXCIuL2NvbXBvbmVudHMvU2V0dGluZ3Muc3ZlbHRlXCI7XG5cbiAgICBsZXQge2l0ZW1Gb3JtRWxOYW1lLCB3aXphcmRDb25maWcsIGltYWdlLCBpdGVtRm9ybUVsVmFsdWV9ID0gJHByb3BzKClcbiAgICBsZXQgaXNTZXR0aW5nc09wZW4gPSAkc3RhdGUoZmFsc2UpXG4gICAgbGV0IGltYWdlQ29tcG9uZW50ID0gJHN0YXRlKG51bGwpXG4gICAgbGV0IHNpZGViYXJXaWR0aCA9ICRzdGF0ZSgzMDApXG4gICAgY29uc3QgbWluU2lkZWJhcldpZHRoID0gMjAwXG4gICAgbGV0IGNoYW5uZWxcblxuICAgIG9uTW91bnQoKCkgPT4ge1xuICAgICAgICBpbml0U3RvcmVzKGl0ZW1Gb3JtRWxWYWx1ZSwgd2l6YXJkQ29uZmlnKVxuXG4gICAgICAgIGlmICgkZm9jdXNwb2ludHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZGVhY3RpdmF0ZUFsbEZvY3VzcG9pbnRzKClcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGFjdGl2YXRlRm9jdXNwb2ludCgwKVxuICAgICAgICAgICAgfSwgMzAwKVxuICAgICAgICB9XG5cbiAgICAgICAgY2hhbm5lbCA9IG5ldyBCcm9hZGNhc3RDaGFubmVsKGZvY3VzcG9pbnRDaGFubmVsTmFtZShpdGVtRm9ybUVsTmFtZSkpXG4gICAgICAgIGNoYW5uZWwub25tZXNzYWdlID0gKGUpID0+IHtcbiAgICAgICAgICAgIGlmIChlLmRhdGEudHlwZSA9PT0gJ21vZGFsLXNhdmUnKSBvbk1vZGFsU2F2ZSgpXG4gICAgICAgICAgICBpZiAoZS5kYXRhLnR5cGUgPT09ICdzZXR0aW5ncycpIGhhbmRsZVNldHRpbmdzKClcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlc3RvcmUgc2F2ZWQgc2lkZWJhciB3aWR0aCBpZiBhdmFpbGFibGVcbiAgICAgICAgY29uc3Qgc2F2ZWRXaWR0aCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmb2N1c3BvaW50LXNpZGViYXItd2lkdGgnKVxuICAgICAgICBpZiAoc2F2ZWRXaWR0aCAmJiBwYXJzZUludChzYXZlZFdpZHRoKSA+PSBtaW5TaWRlYmFyV2lkdGgpIHtcbiAgICAgICAgICAgIHNpZGViYXJXaWR0aCA9IHBhcnNlSW50KHNhdmVkV2lkdGgpXG4gICAgICAgIH1cblxuICAgICAgICBpbnRlcmFjdCgnLnJlc2l6ZS1oYW5kbGUnKS5kcmFnZ2FibGUoe1xuICAgICAgICAgICAgYXhpczogJ3gnLFxuICAgICAgICAgICAgbGlzdGVuZXJzOiB7XG4gICAgICAgICAgICAgICAgbW92ZShldmVudCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdXaWR0aCA9IHNpZGViYXJXaWR0aCArIGV2ZW50LmR4ICogLTFcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5ld1dpZHRoID49IG1pblNpZGViYXJXaWR0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2lkZWJhcldpZHRoID0gbmV3V2lkdGhcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdmb2N1c3BvaW50LXNpZGViYXItd2lkdGgnLCBzaWRlYmFyV2lkdGgudG9TdHJpbmcoKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlQ29tcG9uZW50Py51cGRhdGVDYW52YXNTaXplcygpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSk7XG5cbiAgICBvbkRlc3Ryb3koKCkgPT4ge1xuICAgICAgICBjaGFubmVsPy5jbG9zZSgpXG4gICAgICAgICRmb2N1c3BvaW50cyA9IFtdXG4gICAgICAgIGludGVyYWN0KCcucmVzaXplLWhhbmRsZScpLnVuc2V0KClcbiAgICB9KTtcblxuICAgIGNvbnN0IG9uTW9kYWxTYXZlID0gKCkgPT4ge1xuICAgICAgICBjaGFubmVsPy5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICB0eXBlOiAnd2l6YXJkLXVwZGF0ZScsXG4gICAgICAgICAgICBmb2N1c3BvaW50czogdG9QZXJzaXN0ZWRGb2N1c3BvaW50cygkZm9jdXNwb2ludHMpLFxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVNldHRpbmdzID0gKCkgPT4ge1xuICAgICAgICBpc1NldHRpbmdzT3BlbiA9ICFpc1NldHRpbmdzT3BlblxuICAgIH1cbjwvc2NyaXB0PlxuXG48ZGl2IGNsYXNzPVwid2l6YXJkXCIgc3R5bGU9XCItLXNpZGViYXItd2lkdGg6IHtzaWRlYmFyV2lkdGh9cHg7XCI+XG4gICAgeyNpZiBpc1NldHRpbmdzT3Blbn1cbiAgICAgICAgPFNldHRpbmdzIGl0ZW1Gb3JtRWxOYW1lPXtpdGVtRm9ybUVsTmFtZX0gYmluZDppc1NldHRpbmdzT3BlblZhbHVlPXtpc1NldHRpbmdzT3Blbn0gLz5cbiAgICB7OmVsc2V9XG4gICAgICAgIDxJbWFnZSBiaW5kOnRoaXM9e2ltYWdlQ29tcG9uZW50fSBpbWFnZT17aW1hZ2V9IC8+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyZXNpemUtaGFuZGxlXCIgYXJpYS1sYWJlbD1cIlJlc2l6ZSBzaWRlYmFyXCI+PC9kaXY+XG4gICAgICAgIDxTaWRlYmFyIC8+XG4gICAgey9pZn1cbjwvZGl2PlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFHQSxJQUFJLHNCQUFPLENBQUM7QUFDWixRQUFRLGFBQWE7QUFDckIsUUFBUSxnQkFBZ0I7QUFDeEIsUUFBUSwwREFBMEQ7QUFDbEUsUUFBUSx3QkFBd0I7QUFDaEM7O0FBRUEsSUFBSSw2QkFBYyxDQUFDO0FBQ25CLFFBQVEsNEJBQTRCO0FBQ3BDLFFBQVEsaUJBQWlCO0FBQ3pCLFFBQVEsa0JBQWtCO0FBQzFCOztBQUVBLElBQUksNkJBQWMsTUFBTSxDQUFDO0FBQ3pCLFFBQVEsV0FBVztBQUNuQixRQUFRLGtCQUFrQjtBQUMxQixRQUFRLFVBQVU7QUFDbEIsUUFBUSxNQUFNO0FBQ2QsUUFBUSxXQUFXO0FBQ25CLFFBQVEsVUFBVTtBQUNsQixRQUFRLFlBQVk7QUFDcEIsUUFBUSxrQ0FBa0M7QUFDMUM7O0FBRUEsSUFBSSw2QkFBYyxNQUFNLE1BQU0sQ0FBQztBQUMvQixRQUFRLGtFQUFrRTtBQUMxRTsifQ== */"
};
function FocuspointWizard($$anchor, $$props) {
  check_target(new.target);
  push($$props, true, FocuspointWizard);
  append_styles($$anchor, $$css10);
  const $focuspoints = () => (validate_store(focuspoints, "focuspoints"), store_get(focuspoints, "$focuspoints", $$stores));
  const [$$stores, $$cleanup] = setup_stores();
  let itemFormElName = prop($$props, "itemFormElName", 7), wizardConfig = prop($$props, "wizardConfig", 7), image = prop($$props, "image", 7), itemFormElValue = prop($$props, "itemFormElValue", 7);
  let isSettingsOpen = tag(state(false), "isSettingsOpen");
  let imageComponent = tag(state(null), "imageComponent");
  let sidebarWidth = tag(state(300), "sidebarWidth");
  const minSidebarWidth = 200;
  let channel;
  onMount(() => {
    initStores(itemFormElValue(), wizardConfig());
    if ($focuspoints().length > 0) {
      deactivateAllFocuspoints();
      setTimeout(
        () => {
          activateFocuspoint(0);
        },
        300
      );
    }
    channel = new BroadcastChannel(focuspointChannelName(itemFormElName()));
    channel.onmessage = (e) => {
      if (strict_equals(e.data.type, "modal-save")) onModalSave();
      if (strict_equals(e.data.type, "settings")) handleSettings();
    };
    const savedWidth = localStorage.getItem("focuspoint-sidebar-width");
    if (savedWidth && parseInt(savedWidth) >= minSidebarWidth) {
      set(sidebarWidth, parseInt(savedWidth), true);
    }
    interact6(".resize-handle").draggable({
      axis: "x",
      listeners: {
        move(event2) {
          const newWidth = get2(sidebarWidth) + event2.dx * -1;
          if (newWidth >= minSidebarWidth) {
            set(sidebarWidth, newWidth);
            localStorage.setItem("focuspoint-sidebar-width", get2(sidebarWidth).toString());
            get2(imageComponent)?.updateCanvasSizes();
          }
        }
      }
    });
  });
  onDestroy(() => {
    channel?.close();
    store_set(focuspoints, []);
    interact6(".resize-handle").unset();
  });
  const onModalSave = () => {
    channel?.postMessage({
      type: "wizard-update",
      focuspoints: toPersistedFocuspoints($focuspoints())
    });
  };
  const handleSettings = () => {
    set(isSettingsOpen, !get2(isSettingsOpen));
  };
  var $$exports = {
    ...legacy_api(),
    get itemFormElName() {
      return itemFormElName();
    },
    set itemFormElName($$value) {
      itemFormElName($$value);
      flushSync();
    },
    get wizardConfig() {
      return wizardConfig();
    },
    set wizardConfig($$value) {
      wizardConfig($$value);
      flushSync();
    },
    get image() {
      return image();
    },
    set image($$value) {
      image($$value);
      flushSync();
    },
    get itemFormElValue() {
      return itemFormElValue();
    },
    set itemFormElValue($$value) {
      itemFormElValue($$value);
      flushSync();
    }
  };
  var div = root_17();
  var node = child(div);
  {
    var consequent = ($$anchor2) => {
      add_svelte_meta(
        () => Settings($$anchor2, {
          get itemFormElName() {
            return itemFormElName();
          },
          get isSettingsOpenValue() {
            return get2(isSettingsOpen);
          },
          set isSettingsOpenValue($$value) {
            set(isSettingsOpen, $$value, true);
          }
        }),
        "component",
        FocuspointWizard,
        106,
        8,
        { componentTag: "Settings" }
      );
    };
    var alternate = ($$anchor2) => {
      var fragment_1 = root15();
      var node_1 = first_child(fragment_1);
      add_svelte_meta(
        () => bind_this(
          Image(node_1, {
            get image() {
              return image();
            }
          }),
          ($$value) => set(imageComponent, $$value, true),
          () => get2(imageComponent)
        ),
        "component",
        FocuspointWizard,
        108,
        8,
        { componentTag: "Image" }
      );
      var node_2 = sibling(node_1, 4);
      add_svelte_meta(() => Sidebar(node_2, {}), "component", FocuspointWizard, 110, 8, { componentTag: "Sidebar" });
      append($$anchor2, fragment_1);
    };
    add_svelte_meta(
      () => if_block(node, ($$render) => {
        if (get2(isSettingsOpen)) $$render(consequent);
        else $$render(alternate, -1);
      }),
      "if",
      FocuspointWizard,
      105,
      4
    );
  }
  reset(div);
  template_effect(() => set_style(div, `--sidebar-width: ${get2(sidebarWidth) ?? ""}px;`));
  append($$anchor, div);
  var $$pop = pop($$exports);
  $$cleanup();
  return $$pop;
}
customElements.define("focuspoint-wizard", create_custom_element(
  FocuspointWizard,
  {
    itemFormElName: {},
    wizardConfig: {},
    image: {},
    itemFormElValue: {}
  },
  [],
  []
));
export {
  FocuspointWizard as default
};
//# sourceMappingURL=FocuspointWizard.js.map
