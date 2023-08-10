import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

const ShowResult = props => {
    let params = useParams()
    console.log(params)
    let userQuery = params.userQuery;
    let tableName = params.tableName;

    let [result, setResult] = useState()

    useEffect(() => {
        func()
      });

    const func  = async() => {
      if(!result)
      {
        console.log({ 'user_query': userQuery, 'table_name': tableName})
        return await fetch('http://localhost:5000/llm/prompt_to_query/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({'user_query': userQuery, 'table_name': tableName})
        })
        .then(data => data.json()).then(data => setResult({result: data.data}));
      }
    }

    if(!result)
    {
        return(
            <div>
                hello
            </div>
        );
    }
    else if (Array.isArray(Object.entries({result})))
    {
        console.log(typeof(Object.entries({result})))
        console.log(((Object.entries({result}))[0][1]).result)
        // console.log(((Object.entries(((Object.entries({result}))[0][1])))).result)
        console.log(((Object.entries({result}))[0][1]).result[0])
        console.log(Object.entries(((Object.entries({result}))[0][1]).result[0]))
    }
    
    return (
        <div className="container">
        <ul>
            {((Object.entries({result}))[0][1]).result.map((item, index) => (
            <li key = {index}>
             {Object.entries(item).map((value, index) => (
                <ul>
                    <li key = {index}>{value[0]} {value[1]}</li>
                </ul>
            ))}  
            </li>
        ))} 
        </ul>
        </div>
    );
    }

export default ShowResult