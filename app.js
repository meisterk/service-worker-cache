if('serviceWorker' in navigator){
    navigator.serviceWorker
    .register('./service-worker.js')
    .then(function() {
        console.log('Service Worker wurde registriert');
    });
}else{
    console.log('Browser bietet keine Unterst ̈utzung f ̈ur Service Worker');
}