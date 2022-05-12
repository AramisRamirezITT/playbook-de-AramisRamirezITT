const profile = {
    name: "Aramis Ramirez",
    userName: "AramisRamirez",
    gender: "Male",
    age: 24,
    getAge: function(){
        return `The Age is ${this.age}`
    }
}
const travel ={
    originPlace: "Roble 50",
    destinationPlace: "Berverlly Hills",
    driver: "Juan Perez",
    passing: "Aramis Ramirez",
    getGeneralInfo: function(){
        return `the driver is ${this.driver} and the passanger is
        ${this.passing} and the origin place is ${this.originPlace}
        and the final destination is ${this.destinationPlace}`
    }
}

console.log(profile.getAge());
console.log(travel.getGeneralInfo());