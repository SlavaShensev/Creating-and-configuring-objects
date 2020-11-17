let ford = Object.create({
    calculateDistancePerYear: function () {
        Object.defineProperty(this, 'distancePerYear', {
            value: Math.ceil(this.distance / this.age),
            enumerable: false,
            writable: false,
            configurable: false,
        })
    }
}, {
    name: {
        value: 'Ford',
        enumerable: true,
        writable: false,
        configurable: false,
    },
    model: {
        value: 'Focus',
        enumerable: true,
        writable: false,
        configurable: false,
    },
    year: {
        value: 2015,
        enumerable: true,
        writable: false,
        configurable: false,
    },
    distance: {
        value: 120500,
        enumerable: true,
        writable: true,
        configurable: false,
    },
    age: {
        enumerable: true,
        get() {
            console.log('Получаем возраст');
            return new Date().getFullYear() - this.year
        },
        set() {
            console.log('Устанавливаем значение');
        }
    }
});

ford.calculateDistancePerYear();

for (let key in ford) {
    if(ford.hasOwnProperty(key)) {
        console.log(key, ford[key])
    }
}