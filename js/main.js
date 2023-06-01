// window.alert('Malu^mot  kiriting')
// var str1 = prompt('Ism  kiriting:')
// var str2 = prompt('Familya  kiriting:')
// var num1 = prompt('Tug^ilgan yilingizni kiriting:')
// var num2 = prompt('Tug^ilgan kuningizni kiritng:')
// console.log(parseInt(num1) + parseInt(num2))
// console.log(parseInt(num1) - parseInt(num2))
// console.log(parseInt(num1) * parseInt(num2))
// console.log(parseInt(num1) / parseInt(num2))
// window.alert('Malu^mot  kiriting')
// var str = prompt('Email  kiriting:')
// var num = prompt('Password kiriting:')
// console.log(str);
// console.log(num);
//  var a = 5.875465459
//  console.log(Math.ceil(a));
//  console.log(Math.round(a));
// console.log(Math.floor(a));
// console.log(a.toFixed(2) * 1  + 5);
// console.log(Math.floor(Math.random()*100));
// var elTitle = document.querySelector('.title');
// elTitle.textContent = prompt('Ism kiriting:');

// var elInfo1 = document.querySelector('.info1');
// elInfo1.textContent = prompt('Raqam kiriting:');

// var elInfo2 = document.querySelector('.info2');
// elInfo2.textContent = prompt('Raqam kiriting:');

// var elInfo3 = document.querySelector('.info3');
// elInfo3.textContent = prompt('Raqam kiriting:');

// var elInfo4 = document.querySelector('.info4');
// elInfo4.textContent = prompt('Raqam kiriting:');


// var elBtn = document.querySelector('.my__btn')
// var elNum1 = document.querySelector('.num1')
// var elNum2 = document.querySelector('.num2')

// var elInfo1 = document.querySelector('.info1');
// elInfo1.textContent = prompt('Raqam kiriting:');

// var elInfo2 = document.querySelector('.info2');
// elInfo2.textContent = prompt('Raqam kiriting:');

// var elInfo3 = document.querySelector('.info3');
// elInfo3.textContent = prompt('Raqam kiriting:');

// var elInfo4 = document.querySelector('.info4');
// elInfo4.textContent = prompt('Raqam kiriting:');

// elBtn.addEventListener('click', function(){
//      var a = elNum1.value
//      var b = elNum2.value
//      console.log(a * 1 + b * 1);
//       if (a < b )
//          console.log(kichik);
//       else if (a > b)
//          console.log(katta);
//       elNum1.value = ''
//       elNum2.value = ''
// })


//  function calc(str){
//    if ( str.length >= 5){
//       console.log(true);
//    }

//    else{
//       console.log(false);
//    }
//  }

//  calc('salom')

//  function calc(str){
//    if (str == str.trim()){
//       console.log('yoq');
//    }
//    else{
//       console.log('bor');
//    }
//  }

//  calc('      salom')


// var elBtn = document.querySelector('.my__btn')
// var elNum1 = document.querySelector('.num1')
// var elNum2 = document.querySelector('.num2')

// var elInfo1 = document.querySelector('.info1');
// elInfo1.textContent = prompt('Raqam kiriting:');

// var elInfo2 = document.querySelector('.info2');
// elInfo2.textContent = prompt('Raqam kiriting:');

// var elInfo3 = document.querySelector('.info3');
// elInfo3.textContent = prompt('Raqam kiriting:');

// var elInfo4 = document.querySelector('.info4');
// elInfo4.textContent = prompt('Raqam kiriting:');
// elBtn.addEventListener('click', function(){
//      var a = elNum1.value
//      var b = elNum2.value
//      var result = a / b
//      console.log(a * 1 / b * 1);
//       elNum1.value = ''
//       elNum2.value = ''
// }) 

// var elNum1 = document.querySelector('.num1')
// var elNum2 = document.querySelector('.num2')


// function fn(){
//       if (elNum1.value < elNum2.value ){
//             elNum1.style.backgroundColor = 'blue'
//             elNum2.style.backgroundColor = 'red'
//       }
//       else {
//             elNum2.style.backgroundColor = 'red'
//             elNum1.style.backgroundColor = 'blue'
//       }
// }

// var elNum1 = document.querySelector('.num1')
// function fn(){
//       if (elNum1.value){
//             console.log('3 ga bolinadi ');
//       }else {
//             console.log('7 va 3 ga bolinadi');
//       }
// }

// var arr = ['olma','uzum','nok','behi','anor']

// var elList = document.querySelector('.list')

// for(var i = 0; i<arr.length; i++){
//       var newLi = document.createElement('li')
//       newLi.textContent = arr[i]
//       elList.appendChild(newLi)
//       console.log(arr[i]);
// }


// var arr = ['olma','uzum','nok','behi','anor']

// var elFruit = document.querySelector('.fruit')
// function fn(){
//     for( var i = 0; i<arr.push(document.querySelector('.fruit'));)
//     console.log(arr);
// }

// var elDark = document.querySelector('.light')
// var elLight = document.querySelector('.dark')
// var elHight = document.querySelector('.hight')
// var elBox1 = document.querySelector('.box1')
// var elBox2 = document.querySelector('.box2')
// var elBox3 = document.querySelector('.box3')
// function fnMode(mode){
//     if(mode == 'light'){
//         elBox1.classList.add('yashil')
//         elBox2.classList.add('sariq')
//         elBox3.classList.add('qizil')
//         elLight.style.backgroundColor = 'green'
//         elDark.style.backgroundColor = 'yellow'
//         elHight.style.backgroundColor = 'red'
//     }else{
//         elBox1.classList.add('sariq')
//         elBox2.classList.add('yashil')
//         elBox2.classList.add('qizil')
//         elDark.style.backgroundColor = 'green'
//         elLight.style.backgroundColor = 'grey'
//         elHight.style.backgroundColor = 'grey'  
//     }   
// }


// var elBtn = document.querySelector('.my__btn')
// var elInp = document.querySelector('.inp')
// function fn(){
//     if(elInp.id == 'hidden'){
//         elInp.setAttribute('type','text')
//         elInp.id = 'show'
//         elBtn.innerHTML = '<i class="bi bi-eye-slash"></i>'
//     }else{
//         elInp.setAttribute('type','password')
//         elInp.id = 'hidden'
//         elBtn.innerHTML = '<i class="bi bi-eye"></i>'
//     }
// }

// var elForm = document.querySelector('.form')
// var elName = document.querySelector('.name')
// var elEmail = document.querySelector('.email')
// var elAge = document.querySelector('.age')
// var elNumber = document.querySelector('.number')
// var data = new Date()
// elForm.addEventListener('submit', (e)=>{
//      e.preventDefault()
//      console.log(elName.value);
//      console.log(elEmail.value);
//      console.log(elAge.value);
//      console.log(elNumber.value);
//      console.log(data);
// 

//  var arr = ['olma', 'uzum', 'nok', 'behi', 'anor','kiwi']
// var i = 0;
// function test (str){
//      console.log(arr.includes(b));
// }
//  function fn (str, index){
//       var a = str.split('')

//    if(index % 2 == 0){
//       a.push('meva')
//       console.log(a.join(' '));
//    }else{
//       a.push('sabzavod')
//       console.log(a.join(' '));
//    }
//  }

//  arr.forEach((item, index)=>{
//       fn(item,index)
//  })

//  test('kiwi')

//  arr.includes('kiwi')


let elMovieList = document.querySelector('.movie__list')
let elCategoriesSelect = document.querySelector('.categories__select')
let elSelectYear = document.querySelector('.select__year')
let elSelectRating = document.querySelector('.select__rating')
var elSearchForm = document.querySelector('.search__form')
var elSearchInp = document.querySelector('.search__inp')
let elPagList = document.querySelector(".pagenation__list")
let elPagBtns = document.querySelectorAll('.pag__btn')

const Categories = []
const newMovies = movies.map((item, index)=>{
   item.id = index
   return item
})
console.log(newMovies);
let partMove = newMovies.slice(0, 20)
partMove.forEach((item) => {
   if (Categories.includes(item.Categories) == false) {
      Categories.push(item.Categories)
   }
})
Categories.forEach((item) => {
   let newOption = document.createElement('option')
   newOption.textContent = item
   newOption.setAttribute('value', item)
   elCategoriesSelect.appendChild(newOption)
})
elCategoriesSelect.addEventListener('change', (e) => {
   const filMovie = partMove.filter((item) => item.Categories == elCategoriesSelect.value)
   movieMepper(filMovie)
})
elSelectYear.addEventListener('change', (e) => {
   if (e.target.value == 'old') {
      movieMepper(partMove.sort((a, b) => a.movie_year - b.movie_year)
      )
   } else{
      movieMepper(partMove.sort((a, b) => b.movie_year - a.movie_year)
      )
   }
})
elSelectRating.addEventListener('change', (e) => {
   if (e.target.value == 'high') {
      movieMepper(partMove.sort((a, b) => b.imdb_rating - a.imdb_rating)
      )
   } else {
      movieMepper(partMove.sort((a, b) => a.imdb_rating - b.imdb_rating)
      )
   }
})
function movieMepper(data) {
   elMovieList.innerHTML = ''
   data.forEach((item, index)=>{
      let newLi = document.createElement('li')
      newLi.innerHTML =`
   <div class="card" style="width: 18rem;">
   <img src="https://i.ytimg.com/vi/${item.ytid}/hqdefault.jpg" class="card-img-top" alt="...">
   <div class="card-body">
     <h1 class="card-title">${item.id}</h1>
     <h5 class="card-title">${item.Title}</h5>
     <p class="card-text">${item.imdb_rating}</p>
     <p class="card-text">${item.runtime}-time</p>
     <p class="card-text">${item.movie_year}-yil</p>
     <b class="card-text">${item.Categories}</b>
     <p class="card-text">${item.language}-tilida</p>
     <a href="https://www.youtube.com/watch?v=${item.ytid}" target="_blanck" class="btn btn-primary">Watch</a>
   </div>
 </div>`
      elMovieList.appendChild(newLi)
   })
}
movieMepper(partMove)

elSearchForm.addEventListener('submit', (e)=>{
   e.preventDefault()
   const searchData = partMove.filter((item)=> item.Title.toString().toLowerCase().includes(elSearchInp.value.toLowerCase()) == true)
   movieMepper(searchData);
})






elPagBtns.forEach((btnItem) =>{
   btnItem.addEventListener( 'click',(e)=>{
      console.log(e.target.textContent);
      movieMepper(newMovies.slice(e.target.textContent * 10, e.target.textContent * 10 + 20))
      console.log(newMovies.slice(e.target.textContent * 10, e.target.textContent * 10 + 20));
   })
})

// https://wonderfull-cinema.netlify.app