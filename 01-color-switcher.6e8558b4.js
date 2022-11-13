let t=t=>document.querySelector(t);t("[data-start]").addEventListener("click",(a=>{timerId=setInterval((()=>{t("body").style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),t("[data-start]").disabled=!0})),t("[data-stop]").addEventListener("click",(a=>{clearInterval(timerId),t("[data-start]").disabled=!1}));
//# sourceMappingURL=01-color-switcher.6e8558b4.js.map
