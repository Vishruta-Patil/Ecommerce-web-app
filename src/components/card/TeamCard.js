export const TeamCard = ({item}) => {
    return (
        <div className="mild-shadow team-card">
            <img src={item.img} alt="james" className="team-img"/>
            <p className="team-name font-vsm">{item.name}</p>
            <p className="font-xs team-des">{item.description}</p>
            <div className="flex-center">
            {item.socialLinks.map((item,index) => (
                <img src={item} key={index} className="team-social-icons"/>
            ))}
            </div>
        </div>
    )
}