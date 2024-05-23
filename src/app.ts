class Gyemant {
    shortdigInput?: HTMLInputElement | null
    longdigInput?: HTMLInputElement | null
    materialareaInput?: HTMLInputElement | null
    kiteAreaInput?: HTMLInputElement | null
    calcButton?: HTMLInputElement | null

    constructor() {
        this.bindHtml()
        this.handleEvent()
        this.startCalc()
        
    }
    

    bindHtml() {
        this.shortdigInput = document.querySelector('#shortdig')
        this.longdigInput = document.querySelector('#longdig')
        this.materialareaInput = document.querySelector('#materialarea')
        this.kiteAreaInput = document.querySelector('#kiteArea')
        this.calcButton = document.querySelector('#calcButton')

    }

    handleEvent() {
        this.calcButton?.addEventListener('click', () => {
            this.startCalc()

        })
    }

    startCalc() {
        const shortdig = Number (this.shortdigInput?.value)
        const longdig = Number (this.longdigInput?.value)
        const endmaterialArea = this.calcMaterialArea(shortdig,longdig) * 1.1 * 2
        const kiteArea = this.calckiteArea(shortdig,longdig)
        this.renderResult(endmaterialArea, kiteArea)
    }

    calcMaterialArea(shortdig: number, longdig:number):number {
        return shortdig * longdig
    }
    calckiteArea(shortdig: number, longdig:number):number {
        return shortdig * longdig /2

    }
    renderResult(endmaterialArea: number, kiteArea: number): void {
        this.materialareaInput!.value = String(endmaterialArea)
        this.kiteAreaInput!.value = String(kiteArea)

    }
}

new Gyemant()

