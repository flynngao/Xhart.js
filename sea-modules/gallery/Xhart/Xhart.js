define(function(require, exports, module) {

	var $ = require('jquery');


	var Xhart = function(){

		this.configs = {
			artist: "",
			id:"",
			types: "",
			browsers: "",
			data: {},
			param: {}			
		}
		this._init();
	}

	//针对模块统一转换配置
	var models = {

		morris: function (configs) {
			// morris针对性参数
			 configs.param.data = configs.data;
			 require.async('morris', function (morris) {	
				morris[configs.types](configs.param);
			});
			
		},

		nvd3: function(configs) {
			
			require.async('nvd3',function (nvd3) {
				nvd3.addGraph(configs.param(configs.data));
			});
			console.log()
		}




	}

	//模块配置
	var Xhart_config = {

		artist:{

		'nvd3': models.nvd3,
		'morris': models.morris
			
		},
		browssers:{

		}

	}

	//初始化函数
	Xhart.prototype._init = function(){

	}

	Xhart.prototype.browsers = function (configMaps) {
		if (!$.support.leadingWhitespace) {
			for(var i=0; i<configMaps.length; i++){
				if(configMaps[i].browsers === 'ie'){
					return configMaps[i];
				}
			}
		}
		else{
			for(var i=0; i<configMaps.length; i++){
				if(configMaps[i].browsers !== 'ie'){
					return configMaps[i];
				}
			}
		}
	}
	
	//配置注入
	Xhart.prototype.config = function () {
		this.configs = this.browsers(arguments);
	}

	Xhart.prototype.data = function (data) {
		this.configs.data = data;
	}

	//做图
	Xhart.prototype.create = function () {
		Xhart_config.artist[this.configs.artist](this.configs);
	}

	//实时更新
	Xhart.prototype.update = function (url,param) {
		// body...
		$.ajax({
		  url: url,
		  type: 'get',
		  dataType: 'json',
		  data: param,//param --map
		  success: function(data, textStatus, xhr) {
		    Xhart.data(data);
		    //called when successful
		  },
		  
		});
		
	}

	//数据转换
	Xhart.prototype.dataParser = function (paser) {
		
		
	}


	module.exports = Xhart;
})