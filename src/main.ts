if (!("serviceWorker" in navigator)) {
    console.log("Service worker is not supported");
}
else {
    navigator.serviceWorker.register(
        "../service-worker.js"
    )
        .then(function (registration) {
            console.log(`Service worker registered! Scope is:${registration.scope}`);
        });

        navigator.serviceWorker.ready.then(
            function(swRegistration){
                return swRegistration.sync.register("forecast");
            }
        )
}