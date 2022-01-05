"use strict";
import { finishLoading } from "./Loading.js";

const text = document.getElementById("input");
const form = document.getElementById("form");
form.addEventListener("submit", () => {
    if ( text.value.length === 0 ) {
        finishLoading();
        alert("Use country name or state name");
    }
});