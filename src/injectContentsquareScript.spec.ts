import { injectContentsquareScript } from "./index";

describe("injectContentsquareScript", () => {
  it("should use correct default options", () => {
    const script = injectContentsquareScript({
      clientId: "123",
    });
    expect(script.nodeName).toBe("SCRIPT");
    expect(script.src).toBe("https://t.contentsquare.net/uxa/123.js");
    expect(script.crossOrigin).toBe("anonymous");
    expect(script.defer).toBe(false);
    expect(script.async).toBe(true);
    expect(script.integrity).toBe("");
  });

  it("should set the integrity parameter when set", () => {
    const integrity =
      "sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z";
    const script = injectContentsquareScript({
      clientId: "123",
      integrity,
    });
    expect(script.nodeName).toBe("SCRIPT");
    expect(script.src).toBe("https://t.contentsquare.net/uxa/123.js");
    expect(script.crossOrigin).toBe("anonymous");
    expect(script.defer).toBe(false);
    expect(script.async).toBe(true);
    expect(script.integrity).toBe(integrity);
  });

  it("should set defer to false when set", () => {
    const script = injectContentsquareScript({
      clientId: "123",
      defer: true,
      async: true,
    });
    expect(script.nodeName).toBe("SCRIPT");
    expect(script.src).toBe("https://t.contentsquare.net/uxa/123.js");
    expect(script.crossOrigin).toBe("anonymous");
    expect(script.defer).toBe(true);
    expect(script.async).toBe(true);
    expect(script.integrity).toBe("");
  });

  it("should set async to true when set", () => {
    const script = injectContentsquareScript({
      clientId: "123",
      async: true,
    });
    expect(script.nodeName).toBe("SCRIPT");
    expect(script.src).toBe("https://t.contentsquare.net/uxa/123.js");
    expect(script.crossOrigin).toBe("anonymous");
    expect(script.defer).toBe(false);
    expect(script.async).toBe(true);
    expect(script.integrity).toBe("");
  });

  it("should inject the CS lite tag", () => {
    const script = injectContentsquareScript({
      siteId: "123",
    });
    expect(script.nodeName).toBe("SCRIPT");
    expect(script.src).toBe(
      "https://static.hj.contentsquare.net/c/cslite-123.js"
    );
    expect(script.crossOrigin).toBe("anonymous");
    expect(script.defer).toBe(false);
    expect(script.async).toBe(true);
    expect(script.integrity).toBe("");
  });
});
