

//1、上方的进度条
//关闭小进度条旁边的小圆环
NProgress.configure({ showSpinner:false });

$(document).ajaxStart(function () { 
  NProgress.start();
 })

 $(document).ajaxStop(function () { 
   setTimeout(function () { 
    NProgress.done();
    },500)//因为在本地进度条比较快，用定时器延时500毫秒
   
  })