const handelIncrement =()=>{
    count++;
}
const decrement =()=>{
    count--;
}

document.getElementById('increment').addEventListener('click',handelIncrement);
document.getElementById('decrement').addEventListener('click',decrement);