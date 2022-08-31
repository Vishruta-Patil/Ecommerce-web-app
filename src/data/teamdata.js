import zidane from "assets/zidane.jpg"
import james from "assets/james.jpg"
import tonikroos from "assets/tonikroos.jpg"
import christiano from "assets/christiano.jpg"
import ikercasillas from "assets/ikercasillas.jpg"
import insta from "assets/insta.png";
import twitter from "assets/twitter.png";
import facebook from "assets/facebook.png";
import medium from "assets/medium.png"
import nba from "assets/nba.png"
import linkedin from "assets/linkedin.png"


export const teamData = [
    {
        name: "Zidane",
        description: "Leadership & management",
        img: zidane,
        socialLinks: [linkedin,medium,facebook]
    },
    {
        name: "Toni Kroos",
        description: "Product Developer",
        img: tonikroos,
        socialLinks: [linkedin,medium]
    },
    {
        name: "Iker Casillas",
        description: "Marketing Strategy",
        img: ikercasillas,
        socialLinks: [medium]
    },
    {
        name: "James",
        description: "Product Designer",
        img: james,
        socialLinks: [medium,nba]
    },
    {
        name: "Cristiano",
        description: "Financial Operations",
        img: christiano,
        socialLinks: [linkedin,facebook]
    },

]
