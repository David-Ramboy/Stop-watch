const secondOnes = document.querySelector("[data-second-ones]")
const secondTens = document.querySelector("[data-second-tens]")
const minuteOnes = document.querySelector("[data-minute-ones]")
const minuteTens = document.querySelector("[data-minute-tens]")
const hourOnes = document.querySelector("[data-hour-ones]")
const hourTens = document.querySelector("[data-hour-tens]")

let second = 0
let secondAtTens = 0
let minute = 0
let minutesAtTens = 0
let hour = 0
let hourAtTens = 0




const start = document.querySelector(".start-btn")
const stop = document.querySelector(".stop-btn")
const reset = document.querySelector(".reset-btn")
//
function increaseSeconds(){
    secondOnes.textContent = second
    secondTens.textContent = secondAtTens
    if(second !== 9){
        second++
    } else if (second === 9){
        second = 0
        if(secondAtTens !== 5){
            secondAtTens++
        } else if (secondAtTens === 5){
            secondAtTens = 0

        }
        increaseMinutes(secondAtTens)


    }

    function increaseMinutes(secondAtTens){
        minuteOnes.textContent = minute
        minuteTens.textContent = minutesAtTens

        if(secondAtTens === 5){
            if(minute !== 9){
                minute++
            } else if (minute === 9){
                minute = 0
                if(minutesAtTens !== 5){
                    minutesAtTens++
                    
                }else if (minutesAtTens === 5){
                    minutesAtTens = 0

                }
                increaseHours(minutesAtTens)

            }
        }
    }

    function increaseHours(minutesAtTens){
        hourOnes.textContent = hour
        hourTens.textContent = hourAtTens

        if(minutesAtTens === 5){
                hour++
            if (hour === 9){
                hour = 0
                if(hourAtTens !== 2){
                    hourAtTens++
                }else if (hourAtTens === 2){
                    hourAtTens = 0
                }
            }
        }
    }
}
let startClock;

start.addEventListener("click",() => {
    
    clearInterval(startClock)

    startClock = setInterval(increaseSeconds,1000)
  
    resetUI()
   
})
stop.addEventListener('click',() => {
    clearInterval(startClock)
    resetUI()
    console.log(true)
    console.log(second)

})
function resetUI(){
    reset.addEventListener('click',() => {
        second = 0
        secondAtTens = 0
        minute = 0
        minutesAtTens = 0
        hour = 0
        hourAtTens = 0

        secondOnes.textContent = second
        secondTens.textContent = secondAtTens
        minuteOnes.textContent = minute
        minuteTens.textContent = minutesAtTens
        hourOnes.textContent = hour
        hourTens.textContent = hourAtTens
    })
}


// setInterval(()=>{num++
//     console.log(num)
// },1000)


    


