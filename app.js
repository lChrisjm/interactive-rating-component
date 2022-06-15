const firstCard = document.querySelector('.firstScreen');
const lastCard = document.querySelector('.lastScreen');
const inputRating = document.querySelector('.rate');
const submitButton = document.querySelector('.submit');



var children = Array.from(inputRating.children);
let rate;


console.log(inputRating.children);
children.forEach(function(item) {
    item.addEventListener('click', function() {
         rate = item.children[0].value;
         submitButton.classList.add('submit--enable');
    });
});

submitButton.addEventListener('click', (e)=>{
    e.preventDefault();
    if (rate){
        submitFunction();
    }else {
        alert('Please select a rating');
    }
});

function submitFunction() {
    firstCard.classList.add('hidden');
    lastCard.classList.remove('hidden');
    const rating = document.querySelector('.rating')
    rating.textContent = `You selected ${rate} out of 5`;
    setTimeout(()=>{
        window.location.reload();
    }, 3000);
}