$(function () {
    //mainvisual typing

    var typingBool = false;
    var typingIdx = 0;
    var liIndex = 0;
    var liLength = $(".typing-txt li").length;

    // 타이핑될 텍스트를 가져온다
    var typingTxt = $(".typing-txt li").eq(liIndex).text();
    typingTxt = typingTxt.split(""); // 한글자씩 자른다.
    if (typingBool == false) {
        // 타이핑이 진행되지 않았다면
        typingBool = true;
        var tyInt = setInterval(typing, 100); // 반복동작
    }

    function typing() {
        if (typingIdx < typingTxt.length) {
            // 타이핑될 텍스트 길이만큼 반복
            $(".typing").append(typingTxt[typingIdx]); // 한글자씩 이어준다.
            typingIdx++;
        } else {
            //한문장이끝나면
            //다음문장으로.. 마지막문장이면 다시 첫번째 문장으로
            if (liIndex >= liLength - 1) {
                liIndex = 0;
            } else {
                liIndex++;
            }

            //다음문장을 타이핑하기위한 셋팅
            typingIdx = 0;
            typingBool = false;
            typingTxt = $(".typing-txt li").eq(liIndex).text();

            //다음문장 타이핑전 1초 쉰다
            clearInterval(tyInt);
            setTimeout(function () {
                $(".typing").html("");
                tyInt = setInterval(typing, 100);
            }, 1000);
        }
    } //mainvisual typing end

    //skill icon click
    let skillsDes = document.querySelectorAll(".skills__des p");
    let skillIcon = document.querySelectorAll(".skills__des--icon li");
    for (let i = 0; i < skillIcon.length; i++) {
        skillIcon[i].addEventListener("click", () => {
            skillsDes.forEach((item) => {
                item.classList.remove("on");
            });
            skillsDes[i].classList.add("on");
        });
    } //icon click end

    //about
    //showing img
    anime
        .timeline({ loop: true })
        .add({
            targets: ".ml8 .circle-white",
            scale: [0, 3],
            opacity: [1, 0],
            easing: "easeInOutExpo",
            rotateZ: 360,
            duration: 1100,
        })
        .add({
            targets: ".ml8 .circle-container",
            scale: [0, 1],
            duration: 1100,
            easing: "easeInOutExpo",
            offset: "-=1000",
        })
        .add({
            targets: ".ml8 .circle-dark",
            scale: [0, 1],
            duration: 1100,
            easing: "easeOutExpo",
            offset: "-=600",
        })
        .add({
            targets: ".ml8 .letters-left",
            scale: [0, 1],
            duration: 1200,
            offset: "-=550",
        })
        .add({
            targets: ".ml8 .bang",
            scale: [0, 1],
            rotateZ: [45, 15],
            duration: 1200,
            offset: "-=1000",
        })
        .add({
            targets: ".ml8",
            opacity: 0,
            duration: 1000,
            easing: "easeOutExpo",
            delay: 1400,
        });

    anime({
        targets: ".ml8 .circle-dark-dashed",
        rotateZ: 360,
        duration: 8000,
        easing: "linear",
        loop: true,
    });

    //scrolling each section
    window.addEventListener(
        "wheel",
        function (e) {
            e.preventDefault();
        },
        { passive: false }
    );

    let $html = $("html");

    let page = 1;

    let lastPage = $("section").length;

    $html.animate({ scrollTop: 0 }, 10);

    $(window).on("wheel", function(e){
 
        if($html.is(":animated")) return;
     
        if(e.originalEvent.deltaY > 0){
            if(page== lastPage) return;
     
            page++;
        }else if(e.originalEvent.deltaY < 0){
            if(page == 1) return;
     
            page--;
        }
        var posTop = (page-1) * $(window).height();
     
        $html.animate({scrollTop : posTop});
     
    });
});
