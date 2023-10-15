import styles from "./User.module.css";


const User = () => {
    function handleClick() {

  }

  return (
    <div className={styles.user}>
      <img src={''} alt={''} />
      <span>Welcome, {'User'}</span>
      <button onClick={handleClick}>Logout</button>
    </div>
  )
}

export default User