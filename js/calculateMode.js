exports.calculateMode = function(arr) {
    let obj = creating_obj(arr)
    return findingMostFrequet(obj)
}

function creating_obj(arr) {
    let obj = {}

    for (i = 0; i < arr.length; i++) {
        if ([arr[i]] in obj) {
            obj[arr[i]] += 1
        } else{
            obj[arr[i]] = 1
        }
    }
    return obj
}

function findingMostFrequet(obj) {
    let counter = 0
    let answer = []
    for (const [key, value] of Object.entries(obj)) {
        if (value > counter) {
            answer = []
            // if key can be converted into a number
            if (Number(key)) {
                counter = value
                answer.push(Number(key))
            } else if(key == '0'){
                counter = value
                answer.push(0)
            }else {
                counter = value
                answer.push(key)
            }
        } else if (value == counter) {
            if (Number(key)) {
                answer.push(Number(key))
            } else {
                answer.push(key)
            }
        }
    }
    console.log(answer)
    return answer
}