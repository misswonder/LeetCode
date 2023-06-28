/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function(fn, t) {
	return async function(...args) {
//         Return Promise
        return new Promise(async (resolve, reject) => {
            const id = setTimeout(() => reject("Time Limit Exceeded"), t);
            
            try {
                const res = await fn(...args);
                resolve(res);
            } catch(err) {
                reject(err);
            } finally {
                () => clearTimeout(id);
            }
                        
        //     fn(...args)
        //         .then((res) => reslove(res))
        //         .catch((err) => reject(err))
        //         .finally(() => clearTimeout(id));
        })
        
    }
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */