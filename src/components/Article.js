import React from "react";

const Article = props => {
  const styles = {
    marginTop: 40
  };
  return (
    <article style={styles}>
      <h3
        style={{
          marginBottom: 3,
          textTransform: "uppercase",
          letterSpacing: 1,
          fontSize: 18
        }}
      >
        {props.title}
      </h3>
      <span
        style={{
          color: "#c4c4c4",
          fontSize: 16
        }}
      >
        {props.author}
      </span>
      <p
        style={{
          fontSize: 14,
          marginTop: 5
        }}
      >
        {props.text}
      </p>
    </article>
  );
};

export default Article;
