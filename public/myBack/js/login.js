
// 表单校验
$(function () {

// 1、对用户名和密码进行校验
  $("form").bootstrapValidator({

    // 校验时的图标显示
    feedbackIcons: {
      valid: 'glyphicon glyphicon-ok',
      invalid: 'glyphicon glyphicon-remove',
      validating: 'glyphicon glyphicon-refresh'
    },

    // 对用户名和密码进行校验
    fields: {
      // 对应表单中的name属性
      username: {
        validators: {
          notEmpty: {
            message: "用户名不能为空"
          },
          stringLength: {

            message: "用户名为3-9位",
            min: 3,
            max: 9,
          }
        }
      },

      ///对应表单中的password属性
      password: {
        validators: {
          notEmpty: {
            message: "密码不能为空"
          },
          stringLength: {
            message: "密码为6-12位",
            min: 6,
            max: 12,
          }
        }
      }
    }
  })

  //2、表单校验成功，发送ajax请求
  $("form").on('success.form.bv', function (e) {
    e.preventDefault(); //submit会是页面跳转，阻止默认行为 (submit 主要是表单校验)
    //使用ajax提交逻辑

    $.ajax({
      type: "post",
      url: "/employee/employeeLogin",
      data: $("form").serialize(),
      success: function (info) {
        console.log(info);
        if(info.success){
          location.href = "index.html"
        }
        if(info.error === 1000){
          alert("用户名不存在");
        }
        if(info.error === 1001){
          alert("密码错误");
        }
      }
    })
  });

  // 3、重置表单的样式
  $("[type='reset']").on("click", function () { 
    // 获取到表单校验插件的实例，通过这个实例可以调用插件提供的很多方法
   $("form").data("bootstrapValidator").resetForm(true);//resetForm()里面可以传true 也可以不传true，不穿的话就是把样式清空了，reset 本来就可以把input里面的内容清空，传true的话，内容和样式都清空
   })

 

})