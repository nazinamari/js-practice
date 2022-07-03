const Marina = function ({ mood, appearance, action } = {}) {

    // console.log(this);

    this.mood = mood;
    this.appearance = appearance;
    this.action = action;
};

Marina.prototype.supply = function (eat) {
    if (eat === 'shaverma') {
        return this.mood = 'happy',
            this.appearance = 'smiling',
            this.action = 'kiss in cheeks';
    }
};
// console.log(Marina.prototype);

Marina.prototype.studying = function (itTec) {
    if (itTec === 'goIt') {
        this.mood = 'high as a fuck',
            this.appearance = 'focused',
            this.action = 'studying';
    }
};

const myMarina = new Marina({
    mood: 'low',
    appearance: 'beautiful',
    action: 'dull'});
// console.log(myMarina);

myMarina.supply('shaverma');
console.log(myMarina);

myMarina.studying('goIt');
console.log(myMarina);
