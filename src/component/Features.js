import data from "../data/index.json"

export default function Features(){
    return(
        <section className="skills--section" id="mySkills">
        <div className="portfolio--container">
            <p className="section--title"></p>
            <h2 className="skills--section--heading">

                 Our Strengths
            </h2>
        </div>
        <div className="skills--section--container">
            {data?.skills?.map((item,index)=>(
                <div key={index} className="skills--section--card">
                    <div className="skills--section--img">
                        <img width={"260px"} src={item.src} alt="Product Chain" />
                    </div>
                    <div className="skills--section--card--content">
                        <h3 className="skills--section--title">
                            {item.title}
                        </h3>
                        <p className="skills--section--description">{item.decription}</p>
                    </div>
                </div>
            ))}
        </div>
        </section>
    );
}