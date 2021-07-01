import React from "react";

const Server = ({data}) => {
    console.log(data)
  return <div>{data.map(data => <p key={data.id}>{data.title}</p>)}</div>;
};

export async function getStaticProps(context) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos`);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {data}, // will be passed to the page component as props
  };
}

export default Server