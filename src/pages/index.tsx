import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      React JS Basic to Advance
      <div>
        <div>
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>topic</th>
                <th>Links</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Crud for JSON API</td>
                <td>
                  <Link to={"/crud/todos"}>
                    <button>todos</button>
                  </Link>
                  <Link to={"/crud/users"}>
                    <button> users</button>
                  </Link>
                  <Link to={"/crud/posts"}>
                    <button>posts</button>
                  </Link>
                  <Link to={"/crud/comments"}>
                    <button>comments</button>
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
