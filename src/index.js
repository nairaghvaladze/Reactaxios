import React, {useState} from "react";
import  ReactDOM  from "react-dom/client";
import axios from "axios";

function App (){
 const [data, setData] =useState([]);
 const [loading, setLoading] =useState(true);

 const getData= () => {
    setLoading(true);
    axios.get("https://jsonplaceholder.typicode.com/todos")
    .then(function(response){
        setData(response.data);
        setLoading(false);
    }).catch(function(error){
        console.log(error);
    });
 }
 return(
    <div className="container">
        <button className="btn btn-primary col-12 mt-3" onClick={getData}>Get Data</button>
        <div className="row">
            <center>
                <span className={loading ? "spinner spinner-border mt-3" : 'd-none'}></span>
            </center>
        <div className="col-12">
            <div className={loading ? 'd-none' : 'd-block'}>
            <table className="table table-border">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>User</th>
                        <th>title</th>
                        <th>status</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(item =>
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.userId}</td>
                        <td>{item.title}</td>
                        <td className={item.completed ? 'table-success' : 'table-danger'}>{item.completed ? 'ჭეშმარიტია' : 'მცდარია'}</td>
                    </tr>)
                    }
                </tbody>

            </table>
            </div>
        </div>
        </div>
    </div>
   
 )

}
var root=document.getElementById("root");
ReactDOM.createRoot(root).render(<App />)