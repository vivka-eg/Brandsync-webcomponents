---
"@brandsync/wc": patch
"@brandsync/react": patch
"@brandsync/angular": patch
---

Fix `bs-accordion` visual issues found after the initial release: hover/pressed/focus-visible background now spans the whole item (header + content together), the trailing caret now sits in a 64px box matching the leading icon's spacing instead of crowding the edge, and a corner-radius seam between the header and content (visible when both are tinted together) is fixed.
