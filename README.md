# localholst

A small static site that plays Gustav Holst's *The Planets*, Op. 32, on repeat.

`index.html` contains a native audio element, a read-only progress bar, and the
movement list; `styles.css` controls the presentation. `player.js` starts at a
uniformly random point across the recording and the audio element loops the suite.
There are no pause, seek, or volume controls. When a browser blocks autoplay, a
one-time tap or Enter/Space starts playback; the prompt disappears once playing.
There is no build step or backend.

The active movement, progress bar, and seven SVG favicons use planetary colours.
Movement onsets in `player.js` were identified from this recording's audio and
must be updated if the source changes. The progress bar covers the complete suite.

## Recording

NYO Canada, conducted by Michael Francis, recorded at Jack Singer Hall, Calgary,
on August 9, 2015. The complete 47:11 performance streams directly from IMSLP as
an unchanged 128 kbps stereo MP3. IMSLP lists it under CC BY-NC-ND 4.0; the page
credits the performers and links to the source and licence. No audio is hosted
in this repository.

[Recording and attribution on IMSLP](https://imslp.org/wiki/Special:ReverseLookup/473859)
· [NYO Canada's original upload](https://soundcloud.com/nyoc/holst-planets-nyo-2015-calgary)

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
