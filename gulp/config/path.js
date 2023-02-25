// Получаем имя папки проекта
import * as nodePath from 'path'
const rootFolder = nodePath.basename(nodePath.resolve())

const buildFolder = `./dist`
const srcFolder = `./src`

export const path = {
   build: {
      js: `${buildFolder}/scripts/`,
      css: `${buildFolder}/styles/`,
      html: `${buildFolder}/`,
      images: `${buildFolder}/images/`,
      fonts: `${buildFolder}/fonts/`,
      files: `${buildFolder}/files/`,
   },
   src: {
      js: `${srcFolder}/scripts/app.js`,
      jsVendor: `${srcFolder}/scripts/source/*.js`,
      images: `${srcFolder}/images/**/*.{jpg,jpeg,png,gif,webp}`,
      svg: `${srcFolder}/images/**/*.svg`,
      scss: `${srcFolder}/styles/style.scss`,
      css: `${srcFolder}/styles/source/*.css`,
      html: `${srcFolder}/*.html`,
      files: `${srcFolder}/files/**/*.*`,
      fonts: `${srcFolder}/fonts/**/*.*`,
   },
   watch: {
      js: `${srcFolder}/scripts/**/*.js`,
      scss: `${srcFolder}/styles/**/*.scss`,
      html: `${srcFolder}/**/*.html`,
      images: `${srcFolder}/images/**/*.{jpg,jpeg,png,svg,gif,ico,webp}`,
      files: `${srcFolder}/files/**/*.*`,
   },
   clean: buildFolder,
   buildFolder: buildFolder,
   srcFolder: srcFolder,
   rootFolder: rootFolder,
}
