import React from "react";
import Article from "../components/Article";

const articles = [
  {
    id: 1,
    title: "Czym jest teoria strun",
    author: "Jan Nowak",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ullam nihil aperiam esse veritatis odit, nobis accusamus aliquam! Quidem aut rerum voluptate facilis corrupti suscipit quos dolor beatae ipsam pariatur."
  },
  {
    id: 2,
    title: "Czym jest paradoks fermiego",
    author: "Jan Nowak",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ullam nihil aperiam esse veritatis odit, nobis accusamus aliquam! Quidem aut rerum voluptate facilis corrupti suscipit quos dolor beatae ipsam pariatur."
  },
  {
    id: 3,
    title: "Ciemna materia i ciemna energia",
    author: "Jan Nowak",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ullam nihil aperiam esse veritatis odit, nobis accusamus aliquam! Quidem aut rerum voluptate facilis corrupti suscipit quos dolor beatae ipsam pariatur."
  }
];
const HomePage = () => {
  const artList = articles.map(article => (
    <Article key={article.id} {...article} />
  ));
  return <div className="home">{artList}</div>;
};

export default HomePage;
