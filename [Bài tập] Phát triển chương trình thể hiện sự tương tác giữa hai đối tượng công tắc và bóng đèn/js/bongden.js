class SwitchButton {
    constructor(status,lamp) {
        this.status = status
        this.lamp = lamp
    }
    connectToLamp(ElectricLamp){
        this.lamp = ElectricLamp
    }
    switchOff(){
        this.status = false
        console.log('cong tac tat')
    }
    switchOn(){
        this.status = true
        console.log('cong tac bat')
    }
    getStatus () {
        return this.status
    }
}

class ElectricLamp {
    constructor(status) {
        this.status = status
    }
    turnOff(){
        this.status = false
        console.log('den tat')
    }
    turnOn(){
        this.status = true
        console.log('den bat')
    }
}
let bongden = new ElectricLamp(true);
let congtac = new SwitchButton(true,bongden);
congtac.connectToLamp(bongden);

function battat(){
    if (congtac.getStatus()) {
        congtac.switchOff();
        bongden.turnOff();
    } else {
        congtac.switchOn();
        bongden.turnOn();
    }
}