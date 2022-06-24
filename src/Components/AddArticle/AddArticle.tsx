import { useState } from 'react'
import './addarticle.css'
import myarticle from '../../Data/article.json';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



const AddArticle = () => {
    let navigate = useNavigate();

    const [article, setarticle] = useState({
        "id": 0,
        "name": "",
        "body": "",
        "img": ""
    });


    //get user data from form inputs
    function getuserdataname(e:any) {
        let userarticle = { ...article };
        userarticle.name = e.target.value;
        setarticle(userarticle);
    }

    function getuserdatabody(e:any) {
        let userarticle = { ...article };
        userarticle.body = e.target.value;
        setarticle(userarticle);
    }


    function getuserdataimg(e:any) {
        let userarticle = { ...article };
        userarticle.img = `assets/${e.target.files[0].name}`;
        setarticle(userarticle);
    }


    async function addArticle(e:any) {
        e.preventDefault();
        myarticle.articles.push(article)  //push article to myarticle varaible after the user submit form
        let res = await axios.post(`http://localhost:4002/articles`, article); //post data to localhost
        navigate("/")
    }


    return (
        <div>

            <div className="container ">
                <form onSubmit={addArticle} >
                    <h2>Add New Article</h2>
                    <div>
                        <label htmlFor="name">Name  :</label>
                        <input onChange={getuserdataname} type="text" id="name" name="name" placeholder="Article name.." />
                    </div>
                    <div>
                        <label htmlFor="img"> Image : </label>
                        <input type="file" onChange={getuserdataimg} id="img" name="img" placeholder="Article img.." />
                    </div>
                    <div>
                        <label htmlFor="body">Body :  </label>
                        <input type="text" onChange={getuserdatabody} id="body" name="body" placeholder="Article Description.." />
                    </div>
                    <button type="submit">Add New Article</button>
                </form>
            </div>
        </div>
    )
}

export default AddArticle
