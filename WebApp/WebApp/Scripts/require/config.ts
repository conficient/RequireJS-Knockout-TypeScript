/// <reference path="../typings/requirejs/require.d.ts" />

require.config({
    baseUrl: "/Scripts/",
    paths: {
        jquery: "jquery-2.1.1.min",
        bootstrap: "bootstrap.min",
        knockout: "knockout-3.2.0"
    },
    shim: {
        "bootstrap": ["jquery"]
    }
});