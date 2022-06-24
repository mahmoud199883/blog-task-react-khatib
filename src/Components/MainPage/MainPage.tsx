import './mainpage.css'
import myarticle from  '../../Data/article.json';
import { useState } from 'react';

const MainPage = () => {

    // to get the name of selected card in drop down list
    let [articlenameselected, setarticlenameselected] = useState("All");
    function getName(event: any) { 
        let userdata = event.target.value;
        setarticlenameselected(userdata);
    }


    return (
        <section>
            <div className="selsectmenu">
                <select name="" onChange={getName} >
                    {/* default option that retrive all articles */}
                        <option  value="All">All</option> 
                      {/* loop in my array of object using map method to get name of each article dynamic */}  
                    {myarticle.articles.map((article, index) => {
                        return (
                            <> 
                                <option key={index} value={article.name}>{article.name}</option>
                            </>
                        )
                    })}
                </select>
            </div>

            {/* loop in my array of object using map method */}
            {articlenameselected!=="All"? myarticle.articles.map((article: any) => {
                return (
                    <>
                    {/* dispaly only selected name */}
                      {article.name===articlenameselected? <div className="article-container" key={article.id}>
                            <div className="article-data"  > 
                                <div>
                                    <img src={`http://localhost:4002/${article.img}`} style={{ width: "100%" }} alt="problem in img" />
                                    <h3>{article.name}</h3>
                                    <p>{article.body}</p>
                                </div>
                            </div>
                        </div>:""} 
                    </>
                )
            }): myarticle.articles.map((article: any) => {  // dispaly all cards if select All option
                return (
                    <>
                        <div className="article-container" key={article.id}>
                            <div className="article-data"  >
                                <div>
                                    <img src={`http://localhost:4002/${article.img}`} style={{ width: "100%" }} alt="problem in img" />
                                    <h3>{article.name}</h3>
                                    <p>{article.body}</p>
                                </div>
                            </div>
                        </div>
                    </>
                )
            })}
            <div className="clear"></div>
        </section>
    )
}

export default MainPage
