export const copyVendorJs = () => {
   return app.gulp.src(app.path.src.jsVendor).pipe(app.gulp.dest(app.path.build.js))
}
