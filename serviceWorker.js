const staticDevCoffee = 'dev-coffee-site-v1';
const assets = [
  '/',
  'index.html',
  '/css/style.css',
  '/js/app.js',
  '/images/coffee1.jpg',
  '/images/coffee2.jpg',
  '/images/coffee3.jpg',
  '/images/coffee4.jpg',
  '/images/coffee5.jpg',
  '/images/coffee6.jpg',
  '/images/coffee7.jpg',
  '/images/coffee8.jpg',
  '/images/coffee9.jpg',
];

/**
 * Lyssnar på ett event "install"
 * -> när "install" används så ska installationen
 * vänta tills cache är öppet och sen ladda ner <- .waitUntill
 * alla "assets" från applikationens `assets` <- .addAll
 */
self.addEventListener('install', (installEvent) => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then((cache) => {
      cache.addAll(assets);
    })
  );
});

/**
 * När en användare går in på appen så kollar denna fetch
 * om det finns en nyckel i användarens cache, om det finns
 * -> hämta det från användarens cache, annars
 * -> hämta informationen
 */
self.addEventListener('fetch', (fetchEvent) => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then((res) => {
      return res || fetch(fetchEvent.request);
    })
  );
});
