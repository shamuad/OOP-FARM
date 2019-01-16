class Farm {
    constructor(name) {
        this.name = name
        this.crops = []
        this.animals = []
    }

    addCrop(crop) {
        this.crops.push(crop);
    }

    addAnimal(animal) {
        this.animals.push(animal)
    }

    calculateIncome() {
        // calculate total income!
        return this.crops
            .map(crop => crop.getYieldInEuros())
            .concat(this.animals.map(animal => animal.getValueInEuros()))
            .reduce((a, b) => a + b, 0)
    }

    printReport() {
        console.log(
            `----------------------
            - Farm: FARM ARIS    - 
            - No. of crops: XX   - ${this.crops.length}
            - No. of animals: YY - ${this.animals.length}
            - Total income: ZZZ€ - ${this.calculateIncome()} EURO
            ----------------------`
        )
    }


}

module.exports.Farm = Farm