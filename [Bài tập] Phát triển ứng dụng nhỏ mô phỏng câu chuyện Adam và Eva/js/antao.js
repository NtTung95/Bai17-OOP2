class Human {
    constructor(name,gender,weight) {
        this.name = name;
        this.gender = gender;
        this.weight = weight;
    }

    eat (apple){
        if (apple.isEmpty()){
            this.speak('het tao roi');
        } else {
            if (this.weight >= 100) {
                this.speak('No roi')
            } else {
                this.weight += 1;
                apple.decrease();
            }
        }
    }

    getMaxWeight(){
        if (this.weight>=100) {
            this.speak('no roi')
        }
    }

    speak (message){
        alert(message);
    }

    getWeight() {
        return this.weight;
    }
    getName() {
        return this.name;
    }
}

class Apple {
    constructor(weight) {
        this.weight = weight;
    }
    decrease(){
        this.weight -= 1;
    }
    isEmpty(){
        return this.weight === 0;
    }
}