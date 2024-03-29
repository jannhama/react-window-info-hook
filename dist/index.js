"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useWindowInfo = void 0;
var react_1 = require("react");
// Common screen sizes for tablet and desktop
// https://mediag.com/blog/popular-screen-resolutions-designing-for-all/
var TABLET = 768;
var DESKTOP = 992;
function getWindowSize() {
    return {
        innerHeight: (typeof window !== 'undefined') ? window.innerHeight : 0,
        innerWidth: (typeof window !== 'undefined') ? window.innerWidth : 0,
    };
}
function useWindowInfo() {
    var _a = react_1.useState(getWindowSize()), windowSize = _a[0], setWindowSize = _a[1];
    react_1.useEffect(function () {
        function handleResize() {
            // get window size and store it in the state.
            setWindowSize(getWindowSize());
        }
        if (typeof window !== 'undefined') {
            window.addEventListener('resize', handleResize);
            return function () { return window.removeEventListener('resize', handleResize); };
        }
    }, []);
    return {
        windowSize: { width: windowSize.innerWidth, height: windowSize.innerHeight },
        mobile: Boolean(windowSize.innerWidth < TABLET),
        tablet: Boolean(windowSize.innerWidth >= TABLET && windowSize.innerWidth < DESKTOP),
        desktop: Boolean(windowSize.innerWidth >= DESKTOP),
        portrait: Boolean(windowSize.innerWidth < windowSize.innerHeight),
    };
}
exports.useWindowInfo = useWindowInfo;
//# sourceMappingURL=index.js.map