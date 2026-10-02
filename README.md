# Local portfolio frontend

This is a snapshot of the publicly delivered frontend of https://lukebaffait.fr/, downloaded October 1, 2026. It is not the author's original repository or a newly authored recreation. No backend, private source, or original build tooling is included. Existing vendor license notices are preserved.

## Run

From this folder run:

    python -m http.server 8080

Then open http://localhost:8080 . Use a server rather than double-clicking index.html. The homepage, /info/, /works/, and /contact/ are included. Google Fonts remains an online dependency. Original analytics and Google verification have been removed. Internal asset links have been normalized for the local server.

## Customize for your friend

- Edit index.html and info/index.html for name, biography and profile image.
- Edit contact/index.html for contact details and social links.
- Edit js/i18n.js for translated text; otherwise it can overwrite HTML edits.
- Edit js/index.js and js/works.js for project information, image paths and interactions.
- Edit styles/*.css for layout, colors and typography.
- Replace assets/images/profile, projects, art and footer with your friend's content.
- Update titles, canonical URLs, social metadata and email links throughout the HTML and JavaScript before publishing.

## Animation map

- js/index.js: GSAP/ScrollTrigger effects, Lenis scrolling, homepage animation and the 341-frame canvas image sequence.
- js/hero-project.js: serialized WebGL scene and shaders.
- js/core-renderer.js: deployed WebGL renderer bundle (minified).
- js/vendor/: the deployed animation libraries.
- assets/images/hero sequence/: numbered JPG frames used by the hero canvas.

Source visibility does not grant a redistribution license. Check permission for the author's site code, fonts, artwork and photographs before publishing a derivative. download-report.json records any download failures. Browser visual behavior has not yet been verified; syntax and asset checks are recorded in validation.json.
