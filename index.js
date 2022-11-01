const dob = document.querySelector("#dob");
const LuckNumber = document.querySelector("#lucky-number");
const btn = document.querySelector("#check")
const output = document.querySelector("#output");

const isBirthDayLucky = () => {
  const total = calculateSum(dob.value);
    if(dob.value&&LuckNumber.value){
        if(total%LuckNumber.value==0){
            output.innerText ="Your Birthday is Suuuuuper Lucky!! 🎉"
        }else{
            output.innerText="Sorry! Your Birthday is not Lucky 😑, but thats nothing to worry 🙂";
        }
    }else{
        output.innerText="Enter both the value correctly"
    }
}

const calculateSum = (date) => {
    date = date.replaceAll("-", "");
    console.log(date);
    let sum = 0;
    for (let i = 0; i < date.length; i++) {
        sum += Number(date.charAt(i));
    }
    return sum;
}

btn.addEventListener("click", isBirthDayLucky)