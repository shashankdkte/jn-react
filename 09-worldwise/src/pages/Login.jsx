import styles from "./Login.module.css";
import PageNav from "../components/PageNav";
import Button from "../components/Button";
const Login = () => {
  return (
    <main className={styles.login}>
      <PageNav />

      <form className={styles.form} onSubmit={()=>{}}>
        <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            onChange={() => ()=>{}}
            value={''}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={() => ()=>{}}
            value={''}
          />
        </div>

        <div>
          <Button type="primary">Login</Button>
        </div>
      </form>
    </main>
  );
}

export default Login