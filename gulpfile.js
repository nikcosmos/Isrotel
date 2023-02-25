// Основной модуль
import gulp from 'gulp'
// Импорт путей
import { path } from './gulp/config/path.js'
// Импорт общих плагинов
import { plugins } from './gulp/config/plugins.js'

// Передаем значения в глобальную переменную
global.app = {
   isBuild: process.argv.includes('--build'),
   isDev: !process.argv.includes('--build'),
   path: path,
   gulp: gulp,
   plugins: plugins,
}

// Импорт задач
import { copyFiles } from './gulp/tasks/copyFiles.js'
import { copyFonts } from './gulp/tasks/copyFonts.js'
import { reset } from './gulp/tasks/reset.js'
import { html } from './gulp/tasks/html.js'
import { server } from './gulp/tasks/server.js'
import { scss } from './gulp/tasks/scss.js'
import { copyCss } from './gulp/tasks/copyCss.js'
import { js } from './gulp/tasks/js.js'
import { copyVendorJs } from './gulp/tasks/copyVendorJs.js'
import { images } from './gulp/tasks/images.js'

// Наблюдатель за изменениями в файлах
function watcher() {
   gulp.watch(path.watch.files, { usePolling: true }, copyFiles)
   gulp.watch(path.watch.html, { usePolling: true }, html)
   gulp.watch(path.watch.scss, { usePolling: true }, scss)
   gulp.watch(path.watch.js, { usePolling: true }, js)
   gulp.watch(path.watch.images, { usePolling: true }, images)
}

// Основные задачи
const mainTasks = gulp.series(gulp.parallel(copyFiles, html, copyFonts, copyCss, scss, copyVendorJs, js, images))

// Построение сценариев выполнения задач
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server))
const build = gulp.series(reset, mainTasks)

// Экспорт сценариев
export { dev }
export { build }

// Выполнение сценария по умолчанию
gulp.task('default', dev)
