import React, { useEffect } from "react";

export default function SportsBet() {
  useEffect(() => {
    // eslint-disable-next-line
    new BTRenderer().initialize({
      brand_id: "2178852377526931456",
      token: null,
      onTokenExpired: function () {},
      themeName: "default",
      lang: "en",
      target: document.getElementById("betby"),
      betSlipOffsetTop: 0,
      betslipZIndex: 999,
      cssUrls: [
        "https://link.to.your.fonts.file.css",
        "https://link.to.some.extra.fonts.css",
      ],
      fontFamilies: ["Jost"],
      onRouteChange: function () {},
      onLogin: function () {},
      onRegister: function () {},
      onSessionRefresh: function () {},
      onBetSlipStateChange: function () {},
    });
  }, []);

  return (
    <div>
      <div id="betby" style={{ minHeight: "100vh" }}></div>;
    </div>
  );
}
