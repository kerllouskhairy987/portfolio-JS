// START SHOW BORDER FOR NAVBAR and SCROLL TO TOP
let header_content = document.querySelector(".header_content");
let scroll_top = document.querySelector(".scroll_top");

window.onscroll = function () {
    if (window.scrollY > 5) {
        header_content.style.borderBottom = "1px solid var(--hover-color)";
        scroll_top.style.display = "block";
    } else {
        header_content.style.borderBottom = "none";
        scroll_top.style.display = "none";
    }
}
// END SHOW BORDER FOR NAVBAR and SCROLL TO TOP
// START ANIMATION TEXT
let home_info_animation = document.querySelector(".home_info_animation");
let loadText = () => {
    setTimeout(() => {
        home_info_animation.textContent = "Kerolos Khairy";
    }, 0);
    setTimeout(() => {
        home_info_animation.textContent = "Front End";
    }, 4000);
    setTimeout(() => {
        home_info_animation.textContent = "Web developer and designer.";
    }, 8000);
}
if (screen.availWidth < 400 ) {
    home_info_animation.style.fontSize = "20px";
} else {
    home_info_animation.style.fontSize = "26px";
}
loadText();
setInterval(loadText, 12000);
// END ANIMATION TEXT
// START SHOW LIST
let content_nav = document.querySelector(".content_nav");

function addclassList() {
    content_nav.classList.toggle("active");
}
function removeclassList() {
    content_nav.classList.remove("active");
}
// END SHOW LIST
// START DRAW PROJECTS ITEM
// =====================================================================================
let project_content_div = document.querySelector(".project_content_div");
let allProducts = [
    {
        id: 1,
        imageUrl: "images/project1 html&css.png",
        eye: "https://kerllouskhairy987.github.io/project_one/",
        code: "https://github.com/kerllouskhairy987/project_one",
    },
    {
        id: 2,
        imageUrl: "images/project2 html&css.png",
        eye: "https://kerllouskhairy987.github.io/project-two/",
        code: "https://github.com/kerllouskhairy987/project-two",
    },
    {
        id: 3,
        imageUrl: "images/bootstrap.png",
        eye: "https://kerllouskhairy987.github.io/Bootstrap/",
        code: "https://github.com/kerllouskhairy987/Bootstrap",
    },
    {
        id: 4,
        imageUrl: "images/task1.png",
        eye: "https://kerllouskhairy987.github.io/htmlandcss/",
        code: "https://github.com/kerllouskhairy987/htmlandcss",
    },
    {
        id: 5,
        imageUrl: "images/task2.png",
        eye: "https://kerllouskhairy987.github.io/JavaScript-1/",
        code: "https://github.com/kerllouskhairy987/JavaScript-1",
    },
    {
        id: 6,
        imageUrl: "images/task3.png",
        eye: "https://kerllouskhairy987.github.io/JavaScript-3/",
        code: "https://github.com/kerllouskhairy987/JavaScript-3",
    },
    {
        id: 7,
        imageUrl: "images/restuarant.png",
        eye: "https://kerllouskhairy987.github.io/restaurant/",
        code: "https://github.com/kerllouskhairy987/restaurant",
    },
    {
        id: 8,
        imageUrl: "images/about me.png",
        eye: "https://kerllouskhairy987.github.io/About-Me/",
        code: "https://github.com/kerllouskhairy987/About-Me",
    },
    {
        id: 9,
        imageUrl: "images/js3.png",
        eye: "https://kerllouskhairy987.github.io/JavaScript-2/",
        code: "https://github.com/kerllouskhairy987/JavaScript-2",
    },
]
function drawAllProducts() {
    project_content_div.innerHTML = "";
    allProducts.map((item) => {
        project_content_div.innerHTML += `
        <div class="project_content_item mt-5">
            <div class="project_content_img">
                <img src="${item.imageUrl}" alt="image">
            </div>
            <div class="project_content_info">
                <a class="me-3" href="${item.eye}"><i class="fa-solid fa-eye"></i></a>
                <a href="${item.code}"><i class="fa-solid fa-code"></i></a>
            </div>
        </div>
        `
    })
}
drawAllProducts();
// END DRAW PROJECTS ITEM
// START DRAW HTML PROJECTS
let htmlProjects = [
    {
        id: 10,
        imageUrl: "images/project1 html&css.png",
        eye: "https://kerllouskhairy987.github.io/project_one/",
        code: "https://github.com/kerllouskhairy987/project_one",
    },
    {
        id: 11,
        imageUrl: "images/project2 html&css.png",
        eye: "https://kerllouskhairy987.github.io/project-two/",
        code: "https://github.com/kerllouskhairy987/project-two",
    },
]
function drawHtmlProjects() {
    project_content_div.innerHTML = "";
    htmlProjects.map((item) => {
        project_content_div.innerHTML += `
        <div class="project_content_item mt-5">
            <div class="project_content_img">
                <img src="${item.imageUrl}" alt="image">
            </div>
            <div class="project_content_info">
                <a class="me-3" href="${item.eye}"><i class="fa-solid fa-eye"></i></a>
                <a href="${item.code}"><i class="fa-solid fa-code"></i></a>
            </div>
        </div>
        `
    })
}
// END DRAW HTML PROJECTS
// START DRAW BOOTSTRAP PROJECTS
let bootProjects = [
    {
        id: 12,
        imageUrl: "images/bootstrap.png",
        eye: "https://kerllouskhairy987.github.io/Bootstrap/",
        code: "https://github.com/kerllouskhairy987/Bootstrap",
    },
]
function drawBootProjects() {
    project_content_div.innerHTML = "";
    bootProjects.map((item) => {
        project_content_div.innerHTML += `
            <div class="project_content_item mt-5">
                <div class="project_content_img">
                    <img src="${item.imageUrl}" alt="image">
                </div>
                <div class="project_content_info">
                    <a class="me-3" href="${item.eye}"><i class="fa-solid fa-eye"></i></a>
                    <a href="${item.code}"><i class="fa-solid fa-code"></i></a>
                </div>
            </div>
            `
    })
}
// END BOOTSTRAP PROJECTS
// START JS PROJECTS
let JSProjects = [
    {
        id: 13,
        imageUrl: "images/task1.png",
        eye: "https://kerllouskhairy987.github.io/htmlandcss/",
        code: "https://github.com/kerllouskhairy987/htmlandcss",
    },
    {
        id: 14,
        imageUrl: "images/task2.png",
        eye: "https://kerllouskhairy987.github.io/JavaScript-1/",
        code: "https://github.com/kerllouskhairy987/JavaScript-1",
    },
    {
        id: 15,
        imageUrl: "images/task3.png",
        eye: "https://kerllouskhairy987.github.io/JavaScript-3/",
        code: "https://github.com/kerllouskhairy987/JavaScript-3",
    },
    {
        id: 16,
        imageUrl: "images/restuarant.png",
        eye: "https://kerllouskhairy987.github.io/restaurant/",
        code: "https://github.com/kerllouskhairy987/restaurant",
    },
    {
        id: 17,
        imageUrl: "images/about me.png",
        eye: "https://kerllouskhairy987.github.io/About-Me/",
        code: "https://github.com/kerllouskhairy987/About-Me",
    },
    {
        id: 18,
        imageUrl: "images/js3.png",
        eye: "https://kerllouskhairy987.github.io/JavaScript-2/",
        code: "https://github.com/kerllouskhairy987/JavaScript-2",
    },
]
function drawJSProjects() {
    project_content_div.innerHTML = "";
    JSProjects.map((item) => {
        project_content_div.innerHTML += `
            <div class="project_content_item mt-5">
                <div class="project_content_img">
                    <img src="${item.imageUrl}" alt="image">
                </div>
                <div class="project_content_info">
                    <a class="me-3" href="${item.eye}"><i class="fa-solid fa-eye"></i></a>
                    <a href="${item.code}"><i class="fa-solid fa-code"></i></a>
                </div>
            </div>
            `
    })
}
// END JS PROJECTS
// =====================================================================================
// START CONTROL IN TETXAREA
let textarea = document.querySelector(".textarea");

textarea.addEventListener("keyup", e => {
    textarea.style.height = "auto";
    let scHeight = e.target.scrollHeight;
    textarea.style.height = `${scHeight}px`;
})
// END CONTROL IN TETXAREA
// START SEND MESSAGE
let alert_sure = document.querySelector(".alert_sure");
let okBtn = document.querySelector(".ok");

okBtn.addEventListener("click", () => {
    alert_sure.style.top = "-190px";
})
function sendMessage() {
    var params = {
        from_name: document.querySelector("#name").value,
        from_tel: document.querySelector("#tel").value,
        from_email: document.querySelector("#email").value,
        message: document.querySelector("#message").value,
    }
    emailjs.send("service_h7mobi3", "template_bpkx9h9", params).then(function () {
        alert_sure.style.top = "10px";
    })

    setTimeout(() => {
        document.querySelector("#name").value = "";
        document.querySelector("#tel").value = "";
        document.querySelector("#email").value = "";
        document.querySelector("#message").value = "";
    }, 1500);
}
// END SEND MESSAGE