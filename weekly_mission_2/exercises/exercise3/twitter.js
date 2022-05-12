const user = {
    user: "Aramis",
    username: "Aramis Ramirez",
    bio: "be your self",
    getUser: function(){
        return `The user is @${this.user}`
    },
    getBio: function(){
        return `the Bio of the user ${this.userName} is ${this.bio}`
    }
}
const trending_topic={
    title: "hola",
    numberOfTweets: 20789,
    startdate: "01/05/2022",
    getTitle:function(){
        return `The Title of the trending topic is  ${this.title}`
    }
}

const hashtag = {
    title: "#Testinh",
    numberOfTweets: 45,
    getGeneralInfo: function(){
        return `The title of the hashtag is ${this.title} and the numbers of Tweets are ${this.numberOfTweets}`
    }
}
console.log(user.getUser());
console.log(user.getBio());
console.log(trending_topic.getTitle());
console.log(hashtag.getGeneralInfo());