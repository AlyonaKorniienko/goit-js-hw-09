!function(){function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},r=o.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var r={id:e,exports:{}};return n[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,o){t[e]=o},o.parcelRequired7c6=r);var i=r("iU1Pc"),c=document.querySelector(".form");function u(o,n){new Promise((function(t,r){var c=Math.random()>.3;setTimeout((function(){c?(t("Succsess"),console.log("✅ Fulfilled promise ".concat(o+1," in ").concat(n,"ms")),e(i).Notify.success("Fulfilled promise ".concat(o+1," in ").concat(n,"ms"))):(r("Error"),console.log("❌ Rejected promise ".concat(o+1," in ").concat(n,"ms")),e(i).Notify.failure("❌ Rejected promise ".concat(o+1," in ").concat(n,"ms")))}),n)}))}c.addEventListener("submit",(function(e){e.preventDefault();for(var o=Number(c.delay.value),n=Number(c.step.value),t=Number(c.amount.value),r=0;r<t;r+=1){u(r,o+r*n)}}))}();
//# sourceMappingURL=03-promises.3bcb0896.js.map