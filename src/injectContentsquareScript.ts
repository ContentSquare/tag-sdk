type ScriptOptions = {
    clientId: string;
} & Partial<Pick<HTMLScriptElement, "defer" | "async" | "integrity">>;

/**
 * Appends the contentsquare script to document.head
 * @param scriptOptions.clientId - the client id in the form of f6f72d509afc7 - mandatory
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

    scriptElement.src =
        "https://t.contentsquare.net/uxa/" + scriptOptions.clientId + ".js";

    return document.head.appendChild(scriptElement);
}
