const e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]"),o=document.querySelector("body");e.addEventListener("click",(function(t){timerId=setInterval((()=>{o.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),e.disabled=!0,console.log(e)})),t.addEventListener("click",(t=>{clearInterval(timerId),e.disabled=!1}));
//# sourceMappingURL=01-color-switcher.2483cbd4.js.map
