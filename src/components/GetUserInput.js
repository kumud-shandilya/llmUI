import React from "react";
import { useState } from 'react';
import {
  useNavigate
} from "react-router-dom";

const GetUserInput = props => 
{
    const navigate = useNavigate();

    const [userQuery, setUserQuery] = useState("");
    const [tableName, setTableName] = useState("");

    const callAPI = props => {
      navigate('/result/' + userQuery + '/' + tableName);

    }

    const handleSubmit = (event) => {
        console.log(userQuery, tableName)
        event.preventDefault();
        callAPI({userQuery, tableName})
      }

    return (
      <form onSubmit={handleSubmit}>
      <label>Enter your query:
        <input 
          type="text" 
          value={userQuery}
          onChange={(e) => setUserQuery(e.target.value)}
        />
      </label>

      <label>Enter table name:
        <input 
          type="text" 
          value={tableName}
          onChange={(e) => setTableName(e.target.value)}
        />
      </label>

      <input type="submit" />
    </form>
    );
}

export default GetUserInput