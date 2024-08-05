declare global {
  interface Window {
    hj: any;
    _hjSettings: {
      hjid: string;
    };
  }
}

type ScriptOptions = {
  clientId?: string;
  siteId?: string;
} & Partial<Pick<HTMLScriptElement, "defer" | "async" | "integrity">>;

/**
 * Appends the contentsquare script to document.head
 * @param scriptOptions.clientId - the client id in the form of f6f72d509axzd - mandatory (if no site id is provided)
 * @param scriptOptions.siteId - the site id in the form of 12345 - mandatory (if no client id id is provided)
 * @param scriptOptions.defer - the script is fetched in parallel and evaluated after the document is parsed - defaults to false
 * @param scriptOptions.async - the script is fetched in parallel and evaluated asap - defaults to true
 * @param scriptOptions.integrity - the integrity hash of the contentsquare script - defaults to empty
 * @returns the contentsquare script that was appended to document.head
 */
export function injectContentsquareScript(scriptOptions: ScriptOptions) {
  const scriptElement = document.createElement("script");

  scriptElement.type = "text/javascript";

  scriptElement.defer =
    typeof scriptOptions.defer === "boolean" ? scriptOptions.defer : false;

  scriptElement.async =
    typeof scriptOptions.async === "boolean" ? scriptOptions.async : true;

  if (scriptOptions.integrity) {
    scriptElement.integrity = scriptOptions.integrity;
  }

  scriptElement.crossOrigin = "anonymous";

  if (scriptOptions.clientId) {
    scriptElement.src =
      "https://t.contentsquare.net/uxa/" + scriptOptions.clientId + ".js";
  } else if (scriptOptions.siteId) {
    window.hj =
      window.hj ||
      function () {
        (window.hj.q = window.hj.q || []).push(arguments);
      };
    window._hjSettings = {
      hjid: scriptOptions.siteId,
    };
    scriptElement.src =
      "https://static.hj.contentsquare.net/c/csq-" +
      scriptOptions.siteId +
      ".js";
  } else {
    return;
  }

  return document.head.appendChild(scriptElement);
}
