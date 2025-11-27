// navbar
function imgSlider(anything){
    document.querySelector('.starbucks').src = anything;
}

function toggleMenu(){
    var menuToggle = document.querySelector('.toggle');
    var navigation = document.querySelector('.navigation');
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}
// to top button
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})


let sort_btn = document.getElementById("sortby_btn");
let sortby_opt = document.getElementsByClassName('sortby_opt')[0];

sort_btn.addEventListener('click', ()=> {
    sortby_opt.classList.toggle('sortby_opt_active');
})
let url = "json.json";
let main_shoes_bx = document.getElementsByClassName('main_shoes_bx')[0];

fetch(url).then((Response => Response.json())).then((data) => {
    const all_shoes_array = [...data];
    const low_array = [...data];
    const high_array = [...data];
    const newest_array = [...data].splice(0,8);

    data.forEach((el, i )=> {
        const {Img,Name,Category, MRP, Price, Tag, Color} = el;
        let card = document.createElement('a');
        card.classList.add('card');
        card.innerHTML = `
        <img src="${Img}" alt="${Name}"/>
        <h5 class="card_title" title="${Name}">${Name}</h5>
        <p>${Category} shoes</p>
        <div class="price">
            <h5>Rs ${Price}</h5>
            <h5>MRP: <del>RS ${MRP}</del></h5>
        </div>
        <div class="color_tag">
            <h6>Color ${Color}</h6>
            <h6>${Tag}</h6>
        </div>
        `;
        main_shoes_bx.appendChild(card)
    });

    newest.addEventListener('click', ()=> {
        main_shoes_bx.innerHTML = '';
        sortby_btn.innerHTML =  `
        <h5>Sort By : Newest</h5>
        <i class="fa fa-chevron-down"></i>
        `;
        sortby_opt.classList.toggle('sortby_opt_active');
    });

    all_shoes.addEventListener('click', ()=> {
        main_shoes_bx.innerHTML = '';
        sortby_btn.innerHTML =  `
        <h5>Sort By : All Shoes</h5>
        <i class="fa fa-chevron-down"></i>
        `;
        sortby_opt.classList.toggle('sortby_opt_active');
    });

    low.addEventListener('click', ()=> {
        main_shoes_bx.innerHTML = '';
        sortby_btn.innerHTML =  `
        <h5>Sort By : Low</h5>
        <i class="fa fa-chevron-down"></i>
        `;
        sortby_opt.classList.toggle('sortby_opt_active');
    });

    high.addEventListener('click', ()=> {
        main_shoes_bx.innerHTML = '';
        sortby_btn.innerHTML =  `
        <h5>Sort By : High</h5>
        <i class="fa fa-chevron-down"></i>
        `;
        sortby_opt.classList.toggle('sortby_opt_active');
        
    });

})