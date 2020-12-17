import React, { Component } from 'react'
import Querys from "../graphql/Querys";
import { useQuery } from "react-apollo";
import { Cover } from "./ui-components/index";
import Menu from './overviews_acordion';

function Main() {
  const nombre = "Edgar";
  const { data, loading, error } = useQuery(Querys);
  if (error) return <h2>Error...</h2>;
  if (loading) return <h1>loading...</h1>;
  if (data) {
  const { getAllObjectInfo } = data;
  console.log(getAllObjectInfo);

  return (
      <>
        <Cover>
          <h1>Overviews</h1>
        </Cover>
        <article>
        {getAllObjectInfo.map((element) => {
          return (
            <div key={`link-${element._id}`}>\

              <a
                href={`/overviews/${element._id}`}
                key={element._id}
                id={element._id}
              >
                {element.graph.title}
              </a>
              <br />
            </div>
          );
        })}
        <Menu getAllObjectInfo={getAllObjectInfo}/>
        </article>
       
      </>
    );
  }
}

export default Main;
