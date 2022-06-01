const { src, dest, series, watch } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const csso = require("gulp-csso");
const pug = require("gulp-pug");
const del = require("del");
const clean = require("gulp-clean-css");
const concat = require("gulp-concat");
const autoprefixer = require("gulp-autoprefixer");
const sync = require("browser-sync").create();

function html() {
    return src("src/**/*.pug")
        .pipe(pug({ pretty: true }))
        .pipe(dest("public"));
}

function scss() {
    return src("src/scss/style.scss")
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(
            clean({
                level: { 1: { specialComments: 0 } },
                format: "beautify",
            })
        )
        .pipe(dest("public"));
}

function images() {
    return src("src/images/**/*").pipe(dest("public/images"));
}

function js() {
    return src("src/script.js").pipe(dest("public"));
}

function clear() {
    return del("public");
}

function serve() {
    sync.init({
        server: "./public",
    });

    watch("src/**/*.pug", series(html)).on("change", sync.reload);
    watch("src/scss/**/*.scss", series(scss)).on("change", sync.reload);
    watch("src/images/**/*", series(images)).on("change", sync.reload);
    watch("src/script.js", series(js)).on("change", sync.reload);
}

exports.build = series(clear, scss, html, images, js);
exports.serve = series(clear, scss, html, images, js, serve);
exports.clear = clear;
