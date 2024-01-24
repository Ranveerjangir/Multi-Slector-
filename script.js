const wrapper = document.querySelector(".wrapper"),
selectBtn = wrapper.querySelector(".select-btn"),
searchInp = wrapper.querySelector(".input"),

Options= wrapper.querySelector(".options");


let Names =["ram","ram","ram","ram","ram","ram","ram","ram","ram","ram","ram","ram","ram","ram","ram","ram","shyam","ram","ram","ram","ram","ram","ram","ram","ram","ram","ram","ram","ram","ram"];

function addName(selectedName){
    Options.innerHTML ="";
    Names.forEach(Names =>{
        let isSelected =Names == selectedName ? "selected":"";
        // console.log(Names);
        let li =`<li onclick="updateName(this)" class="${isSelected}">${Names}</li>`;
Options.insertAdjacentHTML("beforeend",li)
    });
}
addName();

function updateName(selectedLi){
    searchInp.value ="";
    addName(selectedLi.innerText);
    // console.log(selectedLi.innerText);
    wrapper.classList.remove("active");
    selectBtn.firstElementChild.innerText = selectedLi.innerText;
}


searchInp.addEventListener("keyup",()=>{
    let arr= [];
    let searchedval=searchInp.value.toLocaleLowerCase();
    arr = Names.filter(data =>{
        return data.toLocaleLowerCase().startsWith(searchedval);
    }).map(data =>`<li>${data}</li>`).join("");
    Options.innerHTML = arr? arr : `<p>Oops! Name not fount</p>`;
    // console.log(arr);
    // console.log(searchInp.value);
})

selectBtn.addEventListener("click",()=>{

wrapper.classList.toggle("active");



});
