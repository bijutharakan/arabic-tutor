# Arabic Tutor — Interactive Learning Platform

**Fixes & Upgrades**
- Rewired all click handlers with **defensive event binding** and re-render safety.
- Ensured scripts run **after DOM is ready**.
- Simplified router + removed service worker to avoid stale caching.
- Bigger buttons, brighter colors, cleaner kid-friendly cards.

## Run (important)
Use a local server (opening from file:// can block parts of Web APIs):
```bash
python3 -m http.server 8080
# then open http://localhost:8080
```

## If “nothing clicks”
1) Refresh with cache bypass: **Ctrl+Shift+R** (or Cmd+Shift+R).  
2) Make sure you’re on **http://localhost** (not file://).  
3) Open browser console (F12) and tell me any red errors; I’ll patch instantly.

## Customize
- Edit `data.js` to add more words & categories.
- Replace emoji with images in an `assets/` folder and show with `<img>`.
