

export default function User({user}) {

const {avatar_url,created_at,followers,public_repos,url,login} = user;
  return (
    <div className="user">
        <div>
            <img src={avatar_url} alt="Avatar" className="avatar" />
        </div>
        <div>
            <p>{login}</p>
            <p>{created_at}</p>
            <p>{public_repos}</p>
        </div>
    </div>
  )
}
