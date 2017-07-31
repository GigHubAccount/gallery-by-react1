require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';
var imageDatas = require('../data/imageDatas.json');


//var ReactTransitionGroup = React.addons.TransitionGroup;//是用来处理React动画的底层api
//
//
//只使用一次，一般用自执行函数,将图片名信息转换成URL路径信息
//生成一个函数，用来生成图片的路径
imageDatas = (function genImageURL(imageDatasArr){
	//遍历数组
	for (var i = 0,j=imageDatasArr.length; i <j; i++) {
		//先拿到单个的图片的数据
		var singleImageData = imageDatasArr[i];
		//为singleImageData增加一个属性URL。
		singleImageData.imageURL=require('../images/'+singleImageData.fileName);

		//然后把singleImageData赋值回imageDataArr
		imageDatasArr[i]=singleImageData;
	}
	//最后return imageDatasArr
	return imageDatasArr;
})(imageDatas);
//接下来调用genImageURL这个函数
//imageDatas =genImageURL(imageDatas);

//构建页面最骨架的结构，我们把整个页面看做是一个舞台，
//在舞台上imageSake用来展示我们的图片有一个control uiv用来展示我们的控制条
class AppComponent extends React.Component {
  render() {
    return (
    	
    	<section className="stage">
    		<section className="img-sec">
    		</section>
    		
    		<nav className="controller-nav">
    		</nav>

    	</section>
      
    );
  }
}

//<!-- 首先搭建最基本的state舞台结构,为了我们的结构更加符合HTML5的语义化，我们分别选用section和nav -->
//<!-- 就是最底下的控制条 -->


AppComponent.defaultProps = {
};

export default AppComponent;
