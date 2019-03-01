import React from "react";
import SourceLinks from "./SourceLinks";

const APIURL = (key, source) => {
  return `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${key}`;
};
export default class NewsList extends React.Component {
  state = {
    list: null,
    key: this.props.ApiKey,
    source: this.props.source,
    loading: true
  };

  fetchNews = () => {
    fetch(APIURL(this.state.key, this.state.source))
      .then(response => response.json())
      .then(newses => {
        console.log(newses);
        this.setState({ list: newses, loading: false });
      })
      .catch(error => console.error(error));
  };
  componentDidMount() {
    this.fetchNews();
  }
  componentWillReceiveProps(props) {
    if (this.state.source !== props.source) {
      this.setState({ loading: true, source: props.source });
      this.fetchNews();
    }
  }
  render() {
    return (
      <div className="news--list">
        <SourceLinks classNm="vertical__list" />
        <h2 className="news--title">News list</h2>
        {/* <h3>{APIURL(this.props.ApiKey, this.props.source)}</h3> */}
        <div className="newses">
          <h2 style={{ display: this.state.loading ? "block" : "none" }}>
            News Loading...
          </h2>
          <div
            className="news--box"
            style={{ display: !this.state.loading ? "block" : "none" }}
          >
            {this.state.list &&
              this.state.list.articles.map(article => {
                return (
                  <article key={article.title} className="news--item">
                    <h1>{article.title}</h1>
                    <a href={article.url}>
                      <img
                        src={article.urlToImage}
                        alt={article.title}
                        style={{ width: 300 }}
                      />
                    </a>
                    <p>{article.content}</p>
                  </article>
                );
              })}
          </div>
        </div>
      </div>
    );
  }
}
