import Vue from "vue";
import VeLoading from "./loading.jsx";
import { hasClass, addClass, removeClass } from "../../src/utils/dom";
import { clsName } from "./util";
import { SPIN_NAMES, COMPS_NAME } from "../src/util/constant";

// default options
const defaultOptions = {
    name: "plane",
    visible: false,
    color: "#1890ff",
    overlayBackgroundColor: "rgba(255, 255, 255, 0.5)",
    width: 40,
    height: 40,
    tip: "",
    fullscreen: false,
    target: "",
    lock: false,
    // parent “__parent__”会被忽略
    parent__: null,
};

// parent relative class
const PARENT_RELATIVE_CLASS = clsName("parent-relative");
// parent lock class
const PARENT_LOCK_CLASS = clsName("parent-lock");

const LoadingConstructor = Vue.extend(VeLoading);

// show
LoadingConstructor.prototype.show = function () {
    Vue.nextTick(() => {
        if (this.lock) {
            addClass(this.parent__, PARENT_LOCK_CLASS);
        }
        this.visible = true;
    });
};

// close
LoadingConstructor.prototype.close = function () {
    Vue.nextTick(() => {
        if (this.lock) {
            removeClass(this.parent__, PARENT_LOCK_CLASS);
        }
        this.visible = false;
    });
};

// destroy
LoadingConstructor.prototype.destroy = function () {
    const target = this.fullscreen ? document.body : this.target;

    removeClass(this.parent__, PARENT_RELATIVE_CLASS);
    removeClass(this.parent__, PARENT_LOCK_CLASS);

    if (this.$el && this.$el.parentNode) {
        this.$el.parentNode.removeChild(this.$el);
    }
    this.$destroy();
    this.visible = false;
};

// create instance
function createInstance(options = {}) {
    return new LoadingConstructor({
        el: document.createElement("div"),
        data: options,
    });
}

// check spin name
function checkSpinName(name) {
    if (!Object.values(SPIN_NAMES).includes(name)) {
        console.error(`${name} is not found in ${COMPS_NAME.VE_LOADING}.`);
    }
}

// Loading instance
function Loading(options = {}) {
    options = Object.assign({}, defaultOptions, options);

    if (typeof options.target === "string" && options.target.length > 0) {
        options.target = document.querySelector(options.target);
    }
    options.target = options.target || document.body;

    checkSpinName(options.name);

    if (options.target !== document.body) {
        options.fullscreen = false;
    } else {
        options.fullscreen = true;
    }

    let loadingInstance = createInstance(options);

    // set parent
    options.parent__ = options.fullscreen ? document.body : options.target;

    addClass(options.parent__, PARENT_RELATIVE_CLASS);

    options.parent__.appendChild(loadingInstance.$el);

    return loadingInstance;
}

export default Loading;
