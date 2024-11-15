import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./PostList.module.css"; // Asegúrate de crear este archivo CSS

const PostList = ({ posts }) => {
  return (
    <ul className="list-posts">
      {posts.map((post, index) => (
        <li key={index}>
          <div className="card-post">
            <div className="card-image">
              <Link to={post.href}>
                <img
                  src={post.url_image}
                  alt={post.title}
                  width={72}
                  height={80}
                />
              </Link>
            </div>
            <div className="card-info">
              <Link
                name="title"
                className="text-md-bold neutral-1000 title"
                to={post.href}
              >
                {post.title}
              </Link>
              <p className="text-sm-medium date-post neutral-500">
                {post.date}
              </p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      url_image: PropTypes.string.isRequired,
      date: PropTypes.string,
    })
  ).isRequired,
};

export default PostList;
