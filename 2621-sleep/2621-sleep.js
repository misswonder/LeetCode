/**
 * @param {number} millis
 */
async function sleep(millis) {
//     function callback (reslove, reject) {
//         setTimeout(reslove, millis)
//     }
    
//     return new Promise(callback);
    
    await new Promise((reslove, reject) => {
        setTimeout(reslove, millis);
    })
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */