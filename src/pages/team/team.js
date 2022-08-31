import { TeamCard } from "components/card/TeamCard"
import { teamData } from "data/teamdata"
import "./team.css"

export const Team = () => {
    return (
        <div className="team-container">
            <p className="flex-center font-vsm">Without bonding and coordination, every project is a failure. Look at who makes KICKSUP great. ;)</p>
        <div className="team-contents">
            
        {teamData.map((item,index) => (
            <TeamCard item={item} key={index}/>
        ))}
        </div>
           <p className="team-footer font-md">and You! ;)</p> 
        </div>
    )
}