const VERSION = 'v1'

self.addEventListener('install', event =>{
  event.waitUntil(precache())
})

self.addEventListener('fetch', event=>{
  const {request, respondWith} = event

  if(request.method !== 'GET')
    return
  
  event.respondWith(_cachedResponse(request))

  event.waitUntil(_updateCache(request))
})

async function precache(){
  const cache = await caches.open(VERSION)

  return cache.addAll([
    '/',
    '/index.html',
    '/assets/index.js',
    '/assets/MediaPlayer.js',
    '/assets/plugins/AutoPlay.js',
    '/assets/plugins/AutoPause.js',
    '/assets/index.css',
    '/assets/BigBuckBunny.mp4',
  ])
}

async function _cachedResponse(req){
  const cache = await caches.open(VERSION)
  const response = await cache.match(req)
  return response || fetch(req)
}

async function _updateCache(req){
  const cache = await caches.open(VERSION)
  const response = await fetch(req)
  return cache.put(req, response)
}