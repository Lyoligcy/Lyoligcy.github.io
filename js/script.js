window.onload = function() {
    var cate = document.querySelector('.cate');
    var detail = document.querySelector('.detail');
    var cate_arr = [cate.children[0], cate.children[1], cate.children[2]];
    var detail_arr = [detail.children[0], detail.children[1], detail.children[2]];
    var close = document.querySelector('.close')
    var move = document.querySelector('.move')
    var categroy = document.querySelector('.categroy')
    var info_categroy = document.querySelector('.info_categroy')
    var bg_pic = document.querySelector('.bg_pic')
    var bg_hide = document.querySelector('.bg_hide')
    var file = document.querySelector('#file')
    var changePic = document.querySelector('.changePic')
    bg_hide.style.filter = 'blur(20px)'
    bg_pic.style.filter = 'blur(4px)'
    cate_arr.forEach((ele, index) => {
        ele.addEventListener('click', function() {
            cate_arr.forEach((ele, index1) => {
                detail_arr[index1].style.display = 'none'
            })
            detail_arr[index].style.display = 'block'
        })

    })
    close.addEventListener('click', function() {
        categroy.style.animation = null
        if (close.innerHTML === '再来看看简介吧！') {
            categroy.style.animation = 'show 1s ease-in-out forwards'
            info_categroy.style.animation = 'show_info 1s ease-in-out forwards'
            bg_pic.style.animation = 'picblur .6s ease-in-out forwards'
            close.innerHTML = '不要打扰我看壁纸！'
            bg_hide.style.filter = 'blur(20px)'
            bg_pic.style.filter = 'blur(4px)'
        } else {
            categroy.style.animation = 'leave 1s ease-in-out forwards'
            info_categroy.style.animation = 'leave_info 1s ease-in-out forwards'
            bg_pic.style.animation = 'picnoblur .6s ease-in-out forwards'
            close.innerHTML = '再来看看简介吧！'
            bg_hide.style.filter = 'blur(20px)'
            bg_pic.style.filter = ''
        }
    })
    move.addEventListener('mouseover', function() {
        bg_pic.style.animation = 'hide .3s ease-in-out forwards';
        bg_hide.style.animation = 'picshow .3s ease-in-out forwards'

    })
    move.addEventListener('mouseout', function() {
        bg_hide.style.animation = 'hide .3s ease-in-out forwards';
        bg_pic.style.animation = 'picshow .3s ease-in-out forwards'
    })
    move.addEventListener('click',function(){
        if (close.innerHTML === '再来看看简介吧！'){
            bg_hide.style.animation = 'picnoblur2 10s ease-in-out forwards'
        }
    })
    file.addEventListener('change', function() {
        //将图片转为base64格式
        var loadFile = function(event) {
            var reader = new FileReader();
            reader.onload = function() {
                // bg_hide.url = ;
                bg_hide.style.background = 'url(' + reader.result + ')';
                console.log(reader.result);
            };
            reader.readAsDataURL(event.files[0]);
        };
        loadFile(file)
    })
}