const gulp 		= require("gulp");
const sass 		= require("gulp-sass");
const notify 	= require("gulp-notify");
var htmlmin = require("gulp-html-minifier");

/*

  Task responsável por recuperar todos arquivos no formato .scss e .sass
  e retornar para pasta css que será criada automaticamente.

*/


gulp.task('sass', function () {
	 return gulp.src('./source/style.scss')
 		.pipe(sass())
 		.on("error", notify.onError({title:"erro ao compilar", message:"<%= error.message %>"}))
   //.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
		.pipe(gulp.dest('./dist/css'))
});

/*

	Task responsável por executar de fundo todas a mudanças que houver nos arquivos

*/

gulp.task("sass:watch", function(){	
	gulp.watch("./source/scss/*.scss", ['sass']);
	gulp.watch("./source/style.scss", ['sass']);
});



/*Task Html*/
gulp.task('html', function() {
 	return gulp.src('./source/index.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./dist/'))
});

gulp.task("html:watch", function(){	
	gulp.watch("./source/index.html", ['html']);
});



/*
  Task default para iniciar apenas com o comando "gulp" no terminal
*/

gulp.task("default",['sass', 'html', 'sass:watch', 'html:watch']);