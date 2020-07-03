let country_list = [
    {name:'India', code:'IN'},
    {name:'USA', code:'US'},
    {name:'Australia', code:'AU'},
    {name:'China', code:'CN'},
    {name:'Germany', code:'DE'},
    {name:'Iraq', code:'IQ'},
    {name:'Pakistan', code:'PK'},
    {name:'Philippines', code:'PH'},
    {name:'Singapore', code:'SG'},
    {name:'Switzerland', code:'CH'},
    {name:'France', code:'FR'}
]

const search_country_element = document.querySelector(".search-country");
const country_list_element = document.querySelector(".country-list");
const change_country_btn = document.querySelector(".change-country");
const close_list_btn = document.querySelector(".close");
const input= document.getElementById('search-input')

//Country list
function createCountryList() {
    const num_countries = country_list.length;

    let i = 0, ul_list_id;

    country_list.forEach((country, index) =>{
        if (index % Math.ceil(num_countries/num_of_ul_lists) == 0) {
            ul_list_id = `list-${i}`;
            country_list_element.innerHTML += `<ul id='${ul_list_id}'></ul>`;
            i++;

        }

        document.getElementById(`${ul_list_id}`).innerHTML += `
            <li onclick="fetchData('${country.name}')" id="${country.name}">
            ${country.name}
            </li>
        `;
    })
}


let num_of_ul_lists = 3;
createCountryList();


change_country_btn.addEventListener("click", function(){
    input.value = "";
    resetCountryList();
    // search_country_element.classList.toogle("hide");
    search_country_element.classList.add("fadeIn");
});

close_list_btn.addEventListener("click", function(){
    search_country_element.classList.toggle("hide")
});

country_list_element.addEventListener("click", function(){
    search_country_element.classList.toggle("hide")
});

//country filter

input.addEventListener("input", function(){
    let value = input.value.toUpperCase();

    country_list.forEach(country =>{
        if(country.name.toUpperCase().startsWith(value)){
            document.getElementById(country.name).classList.remove("hide");
        }else{
            document.getElementById(country.name).classList.add("hide");
        }
    })
})



//reset country list
function resetCountryList(){
    country_list.forEach(country =>{
            document.getElementById(country.name).classList.remove("hide");
        
    })
}