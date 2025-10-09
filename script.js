// import Grid2Background from 'https://cdn.jsdelivr.net/npm/threejs-components@0.0.17/build/backgrounds/grid2.cdn.min.js';

// const canvas = document.getElementById('webgl-canvas');
// const bg = Grid2Background(canvas);

// // Full-bleed + crisp DPR
// function resize() {
//   const w = window.innerWidth;
//   const h = window.innerHeight;
//   const dpr = Math.min(window.devicePixelRatio || 1, 2);

//   canvas.style.width = '100vw';
//   canvas.style.height = '100vh';
//   canvas.width = Math.floor(w * dpr);
//   canvas.height = Math.floor(h * dpr);

//   bg?.renderer?.setPixelRatio?.(dpr);
//   bg?.renderer?.setSize?.(w, h, false);
//   if (bg?.camera) {
//     bg.camera.aspect = w / h;
//     bg.camera.updateProjectionMatrix?.();
//   }
// }
// resize();
// window.addEventListener('resize', resize);

// // Forward pointer events to the element the lib listens on
// const forward = (e) => {
//   const el = bg?.renderer?.domElement || canvas;
//   if (!el) return;
//   const evt = new e.constructor(e.type, e);
//   el.dispatchEvent(evt);
// };
// window.addEventListener('mousemove', forward, { passive: true });
// window.addEventListener('pointermove', forward, { passive: true });

// // Click to randomize palette/lights
// const rand = () => Math.floor(Math.random() * 0xffffff);
// document.body.addEventListener('click', () => {
//   if (!bg?.grid) return;
//   bg.grid.setColors([rand(), rand(), rand()]);
//   bg.grid.light1?.color?.set(rand());
//   bg.grid.light1 && (bg.grid.light1.intensity = 500 + Math.random() * 1000);
//   bg.grid.light2?.color?.set(rand());
//   bg.grid.light2 && (bg.grid.light2.intensity = 250 + Math.random() * 250);
// });
