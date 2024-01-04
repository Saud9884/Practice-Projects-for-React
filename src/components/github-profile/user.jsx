export default function User({ user }) {
  const {
    avatar_url,
    created_at,
    followers,
    following,
    public_repos,
    url,
    login,
    name,
  } = user;

  const createdDate = new Date(created_at);
  return (
    <div className="user">
      <div className="avatar-container">
        <img src={avatar_url} alt="Avatar" className="avatar" />
      </div>
      <div className="name-container">
        <a href={`https://github.com/${login}`}>{name || login}</a>
        <p>
          User Joined on{" "}
          {`${createdDate.getDate()} ${createdDate.toLocaleString("en-us", {
            month: "short",
          })} ${createdDate.getFullYear()}`}
        </p>
      </div>
      <div className="profile-info">
        <div>
          <p>Public Repos</p>
          <p>{public_repos}</p>
        </div>
        <div>
          <p>Followers</p>
          <p>{followers}</p>
        </div>
        <div>
          <p>Following</p>
          <p>{following}</p>
        </div>
      </div>
    </div>
  );
}
