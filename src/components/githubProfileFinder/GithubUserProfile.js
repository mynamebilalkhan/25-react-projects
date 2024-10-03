import { Row, Col } from "react-bootstrap";

const GithubUserProfile = ({ user }) => {
  const {
    login,
    avatar_url,
    name,
    company,
    blog,
    location,
    email,
    hireable,
    bio,
    twitter_username,
    public_repos,
    public_gists,
    followers,
    following,
    html_url,
    created_at,
    updated_at,
  } = user;
  return (
    <div className="github-user-profile">
      <Row
        className="mb-4"
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        <Col md="3" className="text-center">
          {/* Display GitHub user's avatar */}
          <img
            src={avatar_url}
            className="avatar"
            alt={name || login}
            style={{ width: "100%", borderRadius: "50%" }}
          />
          <h2 className="mt-3">{name || login}</h2>
          {bio && <p>{bio}</p>}
          <p>
            <a href={html_url} target="_blank" rel="noopener noreferrer">
              @{login}
            </a>
          </p>
        </Col>
        <Col md="9">
          {/* Additional user information */}
          <h4>Profile Information</h4>
          {/* Display GitHub stats using external URL */}
          <img
            src={`https://github-readme-stats.vercel.app/api?username=${login}&show_icons=true&locale=en`}
            alt={`${login}'s GitHub Stats`}
            style={{
              width: "100%",
              maxWidth: "500px",
              height: "auto",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          />
          <Row>
            <Col>
              <ul>
                {company && (
                  <li>
                    <strong>Company:</strong> {company}
                  </li>
                )}
                {location && (
                  <li>
                    <strong>Location:</strong> {location}
                  </li>
                )}
                {email && (
                  <li>
                    <strong>Email:</strong> {email}
                  </li>
                )}
                {hireable !== null && (
                  <li>
                    <strong>Hireable:</strong> {hireable ? "Yes" : "No"}
                  </li>
                )}
                {twitter_username && (
                  <li>
                    <strong>Twitter:</strong>{" "}
                    <a
                      href={`https://twitter.com/${twitter_username}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      @{twitter_username}
                    </a>
                  </li>
                )}
                {blog && (
                  <li>
                    <strong>Blog:</strong>{" "}
                    <a href={blog} target="_blank" rel="noopener noreferrer">
                      {blog}
                    </a>
                  </li>
                )}
                <li>
                  <strong>Public Repos:</strong> {public_repos}
                </li>
                <li>
                  <strong>Public Gists:</strong> {public_gists}
                </li>
              </ul>
            </Col>
            <Col>
              <ul>
                <li>
                  <strong>Followers:</strong> {followers}
                </li>
                <li>
                  <strong>Following:</strong> {following}
                </li>
                <li>
                  <strong>Profile Created At:</strong>{" "}
                  {new Date(created_at).toLocaleDateString()}
                </li>
                <li>
                  <strong>Last Updated At:</strong>{" "}
                  {new Date(updated_at).toLocaleDateString()}
                </li>
              </ul>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default GithubUserProfile;
