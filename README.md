# Contentsquare TAG SDK

This NPM package offers developers a standardized way of loading Tracking TAG in a non-blocking way from remote
servers. Based on the [Contentsquare SDK](https://docs.contentsquare.com/uxa-en/).

Contentsquare is an analytics platform that helps businesses understand and optimize user experiences on their websites and mobile apps. It provides actionable insights through heatmaps, session recordings, and behavioral analytics, allowing businesses to identify areas for improvement and enhance overall website performance. With its user-friendly interface and powerful data visualization, Contentsquare enables data-driven decision-making to boost conversions and enhance customer engagement.

## Installation

Install the package using NPM:

```console
npm install --save @contentsquare/tag-sdk
```

---

## How to Use Contentsquare Tag

### Prerequisites

Before using the Contentsquare tag, make sure you have the following:

- **Contentsquare Account**: A Client ID or Site ID is required. To obtain one, please visit the official website (https://www.contentsquare.com/).

### Steps to Use Contentsquare Tag

Follow the steps below to use the Contentsquare tag on your website:

1. **Include the Contentsquare Script**: In your website's Javascript/Typescript, add the Contentsquare script using the provided client ID.

   Call the `injectContentsquareScript` function with the following options to append the Contentsquare script to the document.head.

- If you have a `clientId`:

  ```javascript
  // Replace 'YOUR_CLIENT_ID' with your actual Contentsquare Client ID
  injectContentsquareScript({
    clientId: "YOUR_CLIENT_ID",
    async: true, // Optional: Prefer async execution to avoid blocking the DOM when executing the script.
    defer: false, // Optional: Set to true to defer script execution until after the DOM is fully built (before the DOMContentLoaded event).
    integrity: "YOUR_SCRIPT_INTEGRITY_HASH", // Optional: Provide the integrity hash for script security (if required).
  });
  ```

- If you have a `siteId`:

  ```javascript
  // Replace 'YOUR_SITE_ID' with your actual Contentsquare Site ID
  injectContentsquareScript({
    siteId: "YOUR_SITE_ID",
    async: true, // Optional: Prefer async execution to avoid blocking the DOM when executing the script.
    defer: false, // Optional: Set to true to defer script execution until after the DOM is fully built (before the DOMContentLoaded event).
  });
  ```

  The function will append the Contentsquare script to the document.head, and it will be fetched and executed accordingly based on the provided options.

2. **Usage**: Please refer to the [Contentsquare documentation](https://docs.contentsquare.com/uxa-en/) for more information on using the Contentsquare tag.

---

## API Reference

### `injectContentsquareScript(scriptOptions)`

Injects the Contentsquare script into the document.head.

- `scriptOptions`: Options for injecting the script.
  - `clientId` (string) - **(Required if no siteId)** The client ID provided by Contentsquare in the form of 'a6f73d509'.
  - `siteId` (string) - **(Required if no clientId)** the site ID is a numerical ID in the form of 12345.
  - `defer` (boolean) - (Optional) Indicates if the script is fetched in parallel and evaluated after the document is parsed. Defaults to `false`.
  - `async` (boolean) - (Optional) Indicates if the script is fetched in parallel and evaluated as soon as possible. Defaults to `true`.
  - `integrity` (string) - (Optional) The integrity hash (SRI) of the Contentsquare script. Must be generated by Contentsquare.

**Returns**: The script element representing the Contentsquare script that was appended to `document.head`. Can be used for further manipulation or tracking loading state.

## Restrictions

- This bootstrap mode will only be available for the modern “Contentsquare Deployment” mode (no support for Clicktale or any other legacy modes).
- Some functions within the package will include inline descriptions/types for ease of use, but not all functionality is covered. Please refer to the official [Contentsquare documentation](https://docs.contentsquare.com/uxa-en/) for more information on the available functions and their usage.

---
