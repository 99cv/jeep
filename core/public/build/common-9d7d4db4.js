function debounce(context, func, wait, immediate) {
    let timeout;
    return () => {
        const args = arguments;
        const later = () => {
            timeout = null;
            if (!immediate)
                func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow)
            func.apply(context, args);
    };
}
const getValueFromCss = (data, type) => {
    return new Promise((resolve) => {
        if (data.indexOf('calc') === 0) {
            const formula = data.substring(data.indexOf('(') + 1, data.length - 1).replace(/  +/g, ' ');
            const arr = formula.split(' ');
            let retArr = [];
            let retValue;
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] !== '+' && arr[i] !== '-' && arr[i] !== '*' && arr[i] !== '/') {
                    getValueFromCss(arr[i], type).then(value => {
                        retArr[i] = value.toString();
                        if (i === arr.length - 1) {
                            resolve(evaluateString(retArr.join().replace(/,/g, ' ')));
                        }
                    });
                }
                else if (arr[i] !== "") {
                    retValue = arr[i];
                    retArr[i] = retValue;
                }
            }
        }
        else if (data.slice(-2) === "px") {
            resolve(Number(data.slice(0, -2)));
        }
        else if (data.slice(-1) === "%") {
            if (type === 'x') {
                resolve(Number(data.slice(0, -1)) * window.innerWidth / 100);
            }
            else if (type === 'y') {
                resolve(Number(data.slice(0, -1)) * window.innerHeight / 100);
            }
            else {
                resolve(null);
            }
        }
        else if (data.slice(-2) === 'vw') {
            resolve(Number(data.slice(0, -2)) * window.innerWidth / 100);
        }
        else if (data.slice(-2) === 'vh') {
            resolve(Number(data.slice(0, -2)) * window.innerHeight / 100);
        }
        else if (data.slice(-4) === 'vmin') {
            const v = Math.min(window.innerWidth, window.innerHeight);
            resolve(Number(data.slice(0, -4)) * v / 100);
        }
        else if (data.slice(-4) === 'vmax') {
            const v = Math.max(window.innerWidth, window.innerHeight);
            resolve(Number(data.slice(0, -4)) * v / 100);
        }
        else {
            resolve(null);
        }
    });
};
const cssVar = (elem, name, value) => {
    if (name[0] != '-')
        name = '--' + name; //allow passing with or without --
    if (value)
        elem.style.setProperty(name, value);
    // below required to work with Unit Tests
    let propVal = elem.style.getPropertyValue(name);
    propVal = propVal ? propVal : window.getComputedStyle(elem).getPropertyValue(name);
    return propVal.trim();
};
const getDim = (css, wind, pad) => {
    let w;
    let vpad = 0;
    if (pad !== "0") {
        if (pad.length > 2 && pad.slice(-2) === "px") {
            vpad = parseFloat(pad.split('px', 2)[0]);
        }
    }
    if (css && css !== "0") {
        if (css.length > 1 && css.slice(-1) === "%") {
            w = parseFloat(css.split('%', 2)[0]);
            if (w > 100)
                w = 100;
            let ret = Math.round(((w * wind / 100) - vpad));
            return ret;
        }
        else if (css.length > 2 && css.slice(-2) === "px") {
            w = parseFloat(css.split('px', 2)[0]);
            if (w > (wind - vpad)) {
                return wind - vpad;
            }
            else {
                return w - vpad;
            }
        }
        else {
            return wind - vpad;
        }
    }
    else {
        return wind - vpad;
    }
};
const convertCSSNumber = (css) => {
    if (css.length > 2 && css.slice(-2) === "px") {
        return parseFloat(css.split('px', 2)[0]);
    }
    else {
        return 0;
    }
};
const convertCSSBoolean = (css) => {
    if (css.length > 2 && css.slice(-2) === "ue") {
        return true;
    }
    else {
        return false;
    }
};
const getInstanceCSSProperties = (parent, instanceId) => {
    let prop = null;
    if (instanceId != null && parent != null) {
        if (parent.previousElementSibling != null && parent.previousElementSibling.tagName === 'STYLE') {
            prop = getCssPropertyFromInnerHTML(parent.previousElementSibling.innerHTML, instanceId);
            if (prop != null) {
                return prop;
            }
            else {
                return getInstanceCSSProperties(parent.previousElementSibling, instanceId);
            }
        }
        else {
            return getInstanceCSSProperties(parent.parentElement, instanceId);
        }
    }
    return prop;
};
const getCssPropertyFromInnerHTML = (innerHTML, instanceId) => {
    let prop = null;
    if (innerHTML.length > 0 && instanceId != null) {
        const str = innerHTML.replace(/}/g, '#').replace(/{/g, '#').replace(/ /g, '').replace(/\n/g, '');
        const arr = str.split('#');
        let id = instanceId;
        if (instanceId.charAt(0) === '0') {
            id = instanceId.slice(1);
        }
        const ind = arr.indexOf(id);
        if (ind > -1) {
            const arrInst = arr[ind + 1].replace(/:/g, ';').split(';').slice(0, -1);
            if (arrInst.length % 2 === 0) {
                prop = {};
                for (let i = 0; i < arrInst.length; i += 2) {
                    prop[arrInst[i].replace(/-/g, '')] = arrInst[i + 1];
                }
                return prop;
            }
        }
    }
    return prop;
};
const getCssPropertyFromString = async (cstyle, type) => {
    let prop = null;
    const stype = type ? `--${type}-` : `--`;
    const styles = cstyle.replace(/:host{/g, '').replace(/}/g, '').replace(/[\n\r]+/g, '').replace(/:/g, ';').split(';').slice(0, -1);
    if (styles.length % 2 === 0) {
        prop = {};
        for (let i = 0; i < styles.length; i += 2) {
            prop[styles[i].replace(stype, '').replace(/(\-\w)/g, (m) => { return m[1].toUpperCase(); }).trim()] = styles[i + 1].trim();
        }
    }
    return prop;
};
const evaluateString = (s) => {
    const arr = s.split(' ');
    for (let i = 0; i < arr.length; i += 2) {
        if (i >= arr.length - 1) {
            return arr[i] !== null ? Number(arr[i]) : null;
        }
        const val = arr[i] !== null ? calculate(Number(arr[i]), Number(arr[i + 2]), arr[i + 1]) : null;
        arr[i + 2] = val !== null ? val.toString() : null;
    }
};
const calculate = (a, b, op) => {
    if (op === "+") {
        return a + b;
    }
    else if (op === "-") {
        return a - b;
    }
    else if (op === "*") {
        return a * b;
    }
    else if (op === "/") {
        return a / b;
    }
    else {
        return null;
    }
};
const getBoundingClientRect = (el, delay) => {
    return new Promise((resolve) => {
        const i_delay = delay ? delay : 300;
        const i_el = el ? el : null;
        if (i_el !== null) {
            setTimeout(() => {
                const rectBB = i_el.getBoundingClientRect();
                resolve(rectBB);
            }, i_delay);
        }
        else {
            resolve(null);
        }
    });
};

export { getCssPropertyFromString as a, getDim as b, convertCSSNumber as c, debounce as d, convertCSSBoolean as e, getValueFromCss as f, getBoundingClientRect as g, cssVar as h };
