function solve(arr, target1, target2) {
    let index1 = arr.indexOf(target1);
    let index2 = arr.indexOf(target2);
    let partOfArr = arr.slice(index1, index2 + 1);
    return partOfArr;
}