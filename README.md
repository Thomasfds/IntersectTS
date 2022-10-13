<div align="center">

# IntersectJS
**A pleasant Intersect Engine API Client**

</div>

## Description

IntersectTS is a Intersect Engine package built on top of [`Intersect Engine API`](https://docs.freemmorpgmaker.com/en-US/api/v1/) to render more easily the API usage.

<div align="center" style="padding-top: 2rem; padding-bottom: 1rem">

| [**Click here for the documentation and guides(todo)**](TODO) |
| ------------------------------------------------------------------------------ |

</div>

## Features

-   Written in TypeScript
-   Easy to use
-   Completely Modular and Extendable
-   Fully documented
-   Every API endpoint are separated in their own class
-   Full TypeScript & JavaScript support

## Installation

[`@ariusii/intersect.ts`](https://www.npmjs.com/package/@ariusii/intersect.ts) doesn't require any dependencies.

```bash
    npm install @ariusii/intersect.ts
```

---

## Example usage
```js
    import { initToken, Client } as IntersectAPI from '@ariusii/intersect.ts';
    const url = "http://myserver.com";
    const port = 5400;

    const token = await initToken(url, port, "username", "password");
    /* password : Need to be passed as a UPPERCASE SHA256 of the password */

    const client = new Client(url, port, token.access_token, token.refresh_token);
    /* You can add a fifth parameter to the constructor to set the refresh interval in milliseconds. Default is 840000 ms */
```
---

## Contributing

Before creating an issue, please ensure that it hasn't already been reported/suggested, and double-check the documentation.

If you'd like, feel free to submit a PR.


## Help

If you don't understand something in the documentation, you are experiencing problems, or you just need a gentle nudge in the right direction, please don't hesitate to join the official [`forum`](https://www.ascensiongamedev.com/).
