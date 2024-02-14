
const observerOne = new IntersectionObserver((entriesO) => {
    entriesO.forEach((entryO) => {
        if (entryO.isIntersecting){
            entryO.target.classList.add('show_one');
        }
    });
});

const hiddenElementsOne = document.querySelectorAll('.hidden_one');
hiddenElementsOne.forEach((elo) => observerOne.observe(elo));



const observerUp = new IntersectionObserver((entriesU) => {
    entriesU.forEach((entryU) => {
        if (entryU.isIntersecting){
            entryU.target.classList.add('show_up');
        } else {
            entryU.target.classList.remove('show_up');
        }
    });
});

const hiddenElementsRight = document.querySelectorAll('.hidden_up');
hiddenElementsRight.forEach((elU) => observerUp.observe(elU));

//------------------------------------


