import React, { useEffect } from "react";

const AdComponent = () => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("AdsbyGoogle Error:", e);
    }
  }, []);

  return (
    <ins class="adsbygoogle"
    style="display:block"
    data-ad-client="ca-pub-7523579640974874"
    data-ad-slot="7157993183"
    data-ad-format="auto"
    data-full-width-responsive="true"></ins>
  );
};

export default AdComponent;
