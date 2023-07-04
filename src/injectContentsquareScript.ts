type ScriptOptions = {
    clientId: string;
} & Partial<Pick<HTMLScriptElement, "defer" | "async" | "integrity">>;

// generate comment for this function please
export function injectContentsquareScript(scriptOptions: ScriptOptions) {
    const scriptElement = document.createElement("script");
    scriptElement.type = "text/javascript";
    scriptElement.defer =
        typeof scriptOptions.defer === "boolean" ? scriptOptions.defer : true;

    scriptElement.async =
        typeof scriptOptions.async === "boolean" ? scriptOptions.async : false;

    if (scriptOptions.integrity) {
        scriptElement.integrity = scriptOptions.integrity;
    }

    scriptElement.crossOrigin = "anonymous";

    scriptElement.src =
        "https://t.contentsquare.net/uxa/" + scriptOptions.clientId + ".js";

    return document.head.appendChild(scriptElement);
}
