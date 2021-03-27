import * as React from "react"
import {graphql} from "gatsby";
import { Link } from "gatsby";

const PostItem = (props) => {
  const { title, link, pubDate } = props.post;
  return (
    <li>
      <a href={link}>
        <small>{pubDate}</small> {title}
      </a>
    </li>
  );
};

const IndexPage = (props) => {
  return (
    <div>
      <ul>
        {props.data.allFeedQiita.nodes.map((post) => {
          return <PostItem post={post} key={post.link} />;
        })}
      </ul>
      <p>
        <Link to="/about">Link to About</Link>
      </p>
    </div>
  );
};

export const query = graphql`
  query IndexPageQuery {
      allFeedQiita {
        nodes {
          title
          link
          pubDate
        }
      }
  }
`;

export default IndexPage