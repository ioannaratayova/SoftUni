function covertorJSON(json) {
    let newFile = JSON.parse(json);
    for (let key in newFile) {
        console.log(`${key}: ${newFile[key]}`);
    }
}