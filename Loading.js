"use strict";

export function finishLoading() {
    const spinner = document.getElementById('loading');
    spinner.classList.add('loaded');
    const container = document.getElementById("container");
    container.classList.add("container");
};