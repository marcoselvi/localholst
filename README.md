# localholst

A small static site that plays Gustav Holst's *The Planets*, Op. 32, on repeat.

`index.html` contains the player and movement list; `styles.css` controls the
presentation. `player.js` uses YouTube's IFrame Player API to start at a uniformly
random second across the 52:02 suite, continue the playlist in order, and loop.
It attempts audible autoplay on each visit; browsers that block autoplay require
the listener to press play. There is no build step or backend.
The seven SVG icons in `favicons/` match the planets; `player.js` updates the
browser favicon to follow the current movement.

## Recording

Berliner Philharmoniker, conducted by Herbert von Karajan. The album is credited
℗ 1981 Deutsche Grammophon GmbH, Berlin. The seven movements stream through the
visible YouTube player; no audio is hosted in this repository. Playback depends
on YouTube availability and embedding permissions, and may include ads.

[Recording on YouTube Music](https://music.youtube.com/playlist?list=OLAK5uy_nxaAAl0akbZ3b1GtEV4I6l25bW_NFIdDI)

## Hosting

GitHub Pages publishes the root of the `main` branch. In the repository's
**Settings → Pages**, choose **Deploy from a branch**, then **main / (root)**.
The `.nojekyll` file disables Jekyll processing, so the static files are served
directly. Pushing changes to `main` updates the site automatically.

`CNAME` declares `localholst.uk` as the custom domain. Set the same custom domain
in Pages settings and configure these records at the domain's DNS provider:

| Type | Host | Value |
| --- | --- | --- |
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `www` | `marcoselvi.github.io` |

Enable **Enforce HTTPS** after GitHub validates DNS and issues the certificate.

[GitHub Pages custom-domain configuration](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
