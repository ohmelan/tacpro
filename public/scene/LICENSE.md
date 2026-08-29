# Hero background video — AI-generated

`corner-office.mp4` (+ `corner-office-poster.jpg` first-frame fallback) is an AI-generated video,
not stock photography. Generated via Higgsfield (`seedance_2_0_mini`), 1280×720, 10s, audio
stripped (used muted/looping as a decorative background only).

Current prompt (v2 — raised camera angle to keep the seal in view, smaller stamp handle, green
"APPROVED" ink, and a snappier hit animation):

> A single continuous cinematic shot inside an empty, sunlit modern office corner. Warm
> honey-toned wood floor, off-white walls with a faint muted olive undertone, one large
> floor-to-ceiling window filling the back wall with soft warm daylight streaming across the
> room, no visible sun flare. A real wooden L-shaped desk sits in the room's open corner, lit
> consistently with the window's light direction, its shadow falling naturally across the
> floor. The camera starts on a wide static establishing view of the room, then very slowly
> dollies and drifts inward toward the desk over the shot — a subtle cinematic push-in with
> faint parallax between the window, floor, and desk, never a hard zoom. As the camera pushes in
> toward the documents, it holds a slightly raised, higher eye-line angle looking down at the
> desktop, so the stamped seal on the documents stays clearly visible on screen and is never
> blocked by the desk edge or foreground. As the camera nears, a small stack of paper documents
> flies in from off-frame and settles neatly onto the desktop. A small, compact wooden-handled
> rubber stamp — with a noticeably smaller, shorter handle than a standard stamp — rises
> slightly then strikes down onto the documents in a quick, snappy, dynamic motion with a
> visible press and a subtle bounce as it settles, a brief warm flash of light on contact. The
> stamp leaves behind a crisp circular green "APPROVED" ink mark on the top document. Everything
> then holds still, calm and settled, daylight steady across the room. Photoreal, in-focus
> throughout, no fisheye distortion, no floating artifacts, consistent room geometry and
> lighting the whole time.

v1 used a plain "descends and strikes" phrasing with no handle-size direction and a red mark;
regenerated once (v1's retry-1 attempt failed server-side with no credit charge, retried
successfully) to reach the v2 result above.

Known limitation: the loop point is a hard cut (documents/stamp reset instantly when the video
restarts) rather than a crossfade — acceptable for a 10s ambient background loop, but worth
revisiting if it's ever distracting in practice.

Processing: the raw generation had visible speckled grain baked into flat surfaces (walls,
window sky) — reduced with an `hqdn3d` denoise pass in the `ffmpeg` re-encode (`crf 20`, up from 23) before shipping.

## Services page illustration — AI-generated

`services-sketch.webp` is an AI-generated pencil-sketch illustration (a stamp descending onto a
stack of approved files/binders), used beside the `/services` page heading. Generated via
Higgsfield (`gpt_image_2`), background-removed and tightly cropped to the subject via Adobe
(`image_remove_background`, `image_crop_and_resize` fit: extract), 1073×1200px.

Prompt used:

> A detailed graphite pencil sketch illustration, hand-drawn style, of a neat stack of paper
> documents and file folders with a rubber stamp mid-air about to press down and approve them,
> subtle cross-hatching and pencil shading, on a plain white background, no color, editorial
> illustration style, clean line work, artist's sketchbook aesthetic.
