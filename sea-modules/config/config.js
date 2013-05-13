seajs.config({
	plugins: ['shim'],
	alias: {
		'jquery':  {
			src: 'jquery/jquery/1.9.0/jquery-1.9.1.min.js',
			exports: 'jQuery'
		},

		'd3': {
			src :'gallery/d3/d3.v3.js',
			exports: 'd3'
		},
	    
	    'Xhart': 'gallery/Xhart/Xhart.js',

		'morris': 'gallery/morris/morris.js',

		'raphael': 'gallery/raphael/2.1.0/raphael.js',

		'nvd3':'gallery/nvd3/nv.d3.js'
	}
});