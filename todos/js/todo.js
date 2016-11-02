$(function(){
    var add=$(".anniu");
    var input=$("input");
    var ul=$(".ul");
    var todo=[];
    if(localStorage.x){
        todo=JSON.parse(localStorage.x);
        for(var i=0;i<todo.length;i++){
            var c=(todo[i].state)?"done":"";
            $("<li class='"+c+"'><div class='content'>"+todo[i].name+"</div><div class='delete'>x</div></li>").appendTo(ul);
        }
    }
    add.on("touchend",function(){
        var v=$.trim(input.val());
        if(!v){
            return;
        }
        var todos={
            name:v,
            state:0
        }
        todo.push(todos);
        localStorage.x=JSON.stringify(todo);
        $("<li><div class='content'>"+v+"</div><div class='delete'>x</div></li>").appendTo(ul);
        input.val("");
        
    });
    
    //划去
    var stast;
    ul.on("touchstart","li",function(e){
        stast=e.originalEvent.changedTouches[0].clientX;
    })
    ul.on("touchend","li",function(e){
        var p=e.originalEvent.changedTouches[0].clientX;
        if(p-stast>50){
            $(this).addClass("done");
            todo[$(this).index()].state=1;
            localStorage.x=JSON.stringify(todo);
            
        }else if(p-stast<-50){
            $(this).removeClass("done");
            todo[$(this).index()].state=0;
            localStorage.x=JSON.stringify(todo);
        }
    })
    
    //删除
    ul.on('touchend','.delete',function(e){
        var li=$(this).closest('li');
        var m=li.index();
        ul.find('li').eq(m).remove();
        todo.splice(m,1)
        localStorage.x=JSON.stringify(todo);
        
    });
    $('.delall').on('touchend',function(e){
        var li=ul.find('li');
        var m=li.index();
        var n=li.length;
        ul.find('li').remove();
//      todo.splice(m,1)
         todo.splice(m,n)
        localStorage.x=JSON.stringify(todo);
        
    });
//  $(".delete").on("touchend",function(){
//      var li=$(this).closest("li")
//      var index=li.index();
//      todo.splice(index,1);
//      localStorage.x=JSON.stringify(todo);
//   
//         li.remove();
//    
//     
//  })
//  $(".delete").on("touchend",function(){
//      var li=$(this).closest("li")
//      var index=li.index();
//      todo.splice(index,1);
//      console.log(todo)
//      console.log(index)
//      li.delay(800).queue(function(){
//          $(this).remove().dequeue()
//      });
//      localStorage.x=JSON.stringify(todo);
//  })
    
    //foot
    var divs=$(".footer div");
    divs.on("touchend",function(){
        ul.find("li").show();
        var role=$(this).attr("data-role");
        if(role=="com"){
            ul.find("li:not(.done)").hide();
        }
        if(role=="rem"){
            ul.find("li.done").hide();
        }
        if(role=="all"){
            ul.find("li").show();
        }
    })
    $(".tuichu").on("touchend",function(){
        $(".header").removeClass("tuichu_active");
//      $(".header").css({"opacity":"0","height":"0","width":"0"});
    });
    $(".header1").on("touchend",function(){
//      $(".header").css({"opacity":"1","height":"667px","width":"100%"});
    $(".header").addClass("tuichu_active");
    })
    //封面
//  $(".ye_wei").on("touchstart",function(){
//      $(this).addClass("ye_active");
//      $(".ye_nei").addClass("ye_active");
//      $(".ye_li").addClass("ye_active");
//      
//  })
    $(".ye_wei").on("touchend",function(){
//      $(this).removeClass("ye_active");
//      $(".ye_nei").removeClass("ye_active");
//      $(".ye_li").removeClass("ye_active");
        $(".yemian").addClass("ye_hidden");
    });
    
    
    
    
})







