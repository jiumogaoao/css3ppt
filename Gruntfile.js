// JavaScript Document
module.exports = function(grunt){
	'use strict';
    grunt.initConfig({
	jshint:{
		options:{
		  "curly": true,
		  "eqnull": true,
		  "eqeqeq": true,
		  "globals": {
			"jQuery": true
		  }
		},
		all:["js/ppt.js"],
	},
		clean:{
			all:['dist/**/*']
			},
		copy:{
			html:{src: ['index.html'], dest: 'dist/index.html'},
			music:{expand: true, src: ['music/**/*'], dest: 'dist'}
			},
		cssmin: {
            options: {                                       //配置
                stripBanners:true,
                banner: '/*! This is the grunt test ' +      //添加自定义的banner
                '<%= grunt.template.today("yyyy-mm-dd") %> */'
            },
            basic: {expand: true, cwd: 'css', src: ['*.css'], dest: 'dist/css'}
        },
        uglify: {
            options: {
                banner: '/*! This is uglify test - ' +
                '<%= grunt.template.today("yyyy-mm-dd") %> */'
            },
			all: {src: ['js/zepto/zepto.js','js/zepto/event.js','js/zepto/ajax.js','js/zepto/selector.js','js/zepto/detect.js','js/zepto/fx.js','js/touch.js','js/ppt.js'], dest: 'dist/js/ppt.js'},
            },

		imagemin:{
         options: {
            optimizationLevel: 7,
            pngquant: true
          },
			img:{
				 expand: true, cwd: 'images', src: ['*.{png,jpg,jpeg,gif,webp,svg}'], dest: 'dist/images'
			}
			}
    });
	grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks("grunt-contrib-cssmin");
	grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.registerTask('default', ['jshint','clean','copy','cssmin','uglify','imagemin']);
}