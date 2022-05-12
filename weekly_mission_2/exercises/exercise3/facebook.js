const user={
    name: "AramisRamirez",
    username: "AramisRamirezITT",
    age:24,
    getAge: function(){
        return this.age
    },
    getuserName: function(){
        return this.username
    }
}

console.log("The age is "+ user.getAge());
console.log("The user name is "+ user.getuserName());

const post = {
    title: "Oasis ",
    content: "Acquiesce",
    date: "05/10/2022",
    getGeneralInfo: function(){
        return `the title of the post is ${this.title} and the date was ${this.date}`
    }
}
console.log(post.getGeneralInfo());

const biography = {
    username: "AramisRamirez",
    numbersOfFriends: 300,
    numbersOfPosts: 500,
    getNumberOfFriends: function(){
        return `The number os friends are ${this.numbersOfFriends}`
    }
}

console.log(biography.getNumberOfFriends());