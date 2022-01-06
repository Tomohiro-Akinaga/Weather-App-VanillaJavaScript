"use strict";

export function startLoading() {
    const loading = document.getElementById("loading");
    loading.classList.remove("loaded");
}

export function finishLoading() {
    const loading = document.getElementById('loading');
    loading.classList.add('loaded');
};