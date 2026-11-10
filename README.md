# localholst

A small static site that plays Gustav Holst's *The Planets*, Op. 32, on repeat.

`index.html` contains the player and movement list; `styles.css` controls the
presentation. The native audio player loops the complete recording after the
listener presses play. Audio is streamed from Wikimedia Commons and is not
downloaded until playback begins. There is no JavaScript, build step, or backend.

## Recording

The London Symphony Orchestra, conducted by Gustav Holst, in the historical
Columbia recording identified as 1922–23. Wikimedia Commons identifies the
recording as public domain. The player uses its MP3 derivative.

[Recording, attribution, and public-domain information](https://commons.wikimedia.org/wiki/File:Holst_-_The_Planets_(Columbia_1922-23).flac)

## Hosting

GitHub Pages publishes the root of the `main` branch. In the repository's
**Settings → Pages**, choose **Deploy from a branch**, then **main / (root)**.
The `.nojekyll` file disables Jekyll processing, so the HTML and CSS are served
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
