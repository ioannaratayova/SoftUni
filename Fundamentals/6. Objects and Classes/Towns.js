function towns(table) {
    for (let row of table) {
        let [town, latitude, longitude] = row.split(" | ");
        let obj = {
            town: town,
            latitude: Number.parseFloat(latitude).toFixed(2),
            longitude: Number.parseFloat(longitude).toFixed(2)
        };
        console.log(obj);
    }
}