function solve(arr) {
    arr.sort(function(a, b) {
        let lenA = a.length;
        let lenB = b.length;
        if (lenA === lenB) {
            if (a < b) {
                return -1;
            }
            else {
                return 1;
            }
        }
        return lenA - lenB;
    })
    console.log(arr.join('\n'));
}