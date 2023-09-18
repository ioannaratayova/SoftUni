function solve(name, population, treasury) {
    return {
        name, population, treasury,
        taxRate: 10,
        collectTaxes() {
            this.treasury += this.population * this.taxRate;
        },
        applyGrowth(parcent) {
            this.population += Math.floor(this.population * (parcent / 100));
        },
        applyRecession(percent) {
            this.treasury -= Math.floor(this.treasury * (percent / 100));
        },
    };
}