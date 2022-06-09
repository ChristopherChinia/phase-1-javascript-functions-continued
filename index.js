// code your solution here
function saturdayFun(action = `roller-skate`){
    return `This Saturday, I want to ${action}!`
        
}
console.log(saturdayFun("bathe my dog"))

function mondayWork(activity = `go to the office`){
        return `This Monday, I will ${activity}.`
    }
    console.log(mondayWork("work from home"))

const wrapAdjective = function (sample = "*"){
    return function(newFun = "special"){
        return `You are ${sample}${newFun}${sample}!`
    }
    }
       


