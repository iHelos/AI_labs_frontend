import React, { Component } from 'react';

let stepFunction = function (input) {
    return input > 0 ? 1 : 0;
};


let fit = function (x_train, y_train, epochs, eps) {

};


let predict = function (x_test) {

};
let weightInitializer = function (arr) {
    arr.fill(0);
};

class Neuron {
    constructor(initializer, activationFunction, size) {
        this.activate = activationFunction;
        let weights = new Array(size);//748
        if (initializer) initializer(weights);
        this.bias = 0;
        this.weights = weights;
    }

    calculate(x) {
        let sum = 0;
        //console.log(this.weights);
        this.weights.forEach((value, index) => {
            sum += value * x[index];
        });
        sum -= this.bias;
        let answer = this.activate(sum);
        //console.log(answer)
        return answer
    }

    learn(eps, y_good, y_predict, x) {
        let delta = y_good - y_predict;
        this.bias -= eps * delta;
        this.weights.forEach((value, index, array) => {
            let delta_w = eps * delta * x[index];
            array[index] += delta_w;
        });
    }

    //print() {
    //    console.log(this.weights)
    //}
}
class Perseptron {
    constructor(size) {
        let neurons = new Array(10);
        neurons.fill(new Neuron(weightInitializer, stepFunction, size));
        this.network = neurons;
        //let neuron = new Neuron(weightInitializer, stepFunction());
        // console.log(neuron.weights)
    }

    fit(x_train, y_train, epochs, eps) {
        return new Promise(
            function (resolve, reject) {
                for (let cycle = 1; cycle <= epochs; ++cycle) {
                    x_train.forEach((x_value, x_index) => {
                        this.network.forEach((neuron, index, array) => {
                            array[index].learn(eps, y_train[x_index][index], array[index].calculate(x_value), x_value);
                        })
                    });

                    //console.log('Эпоха: ', cycle);
                    //console.log(this.network);
                    //this.print();
                }
                resolve("completed")
            }.bind(this)
        )
    }

    predict(x_test) {
        let resultArray = [];
        let result = new Array(10);
        result.fill(0);
        x_test.forEach((x_value, x_index) => {
            let resultNum = 0;
            this.network.forEach((neuron, index, array) => {
                if (array[index].calculate(x_value)) result[index] = 1;
            });
            result.forEach((value, index)=> {
                if (value) resultNum = index;
            });
            resultArray.push(resultNum);
        });
        return resultArray;

    }

    calculate() {
        this.activate()
    }

    //print() {
    //    this.network.forEach((value)=>{value.print()})
    //}
}

export default Perseptron