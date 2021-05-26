/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function(logs) {
    const letterLogs = [];
    const digitLogs = [];
    
    logs.forEach(log => {
        const [identifier, ...contents] = log.split(' ')
        if (contents[0].charCodeAt(0) < 65) {
            digitLogs.push(log);
        } else {
            letterLogs.push({ identifier, contents: contents.join(' ') });
        }
    });
    
    letterLogs.sort((a, b) => {
        const contentDiff = a.contents.localeCompare(b.contents);
        
        if (contentDiff === 0) {
            return a.identifier.localeCompare(b.identifier);
        }
        
        return contentDiff;
    });
    
    return [
        ...letterLogs.map(letterLog => `${letterLog.identifier} ${letterLog.contents}`),
        ...digitLogs
    ];
};