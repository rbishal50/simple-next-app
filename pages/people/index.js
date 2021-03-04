import Link from "next/link";
import styles from "../../styles/People.module.css";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    props: {
      people: data,
    },
  };
};

const people = ({ people }) => (
  <div>
    <h1>All people</h1>
    {people.map((people) => (
      <Link key={people.id} href={`/people/${people.id}`}>
        <a className={styles.single}>
          <h3>{people.name}</h3>
        </a>
      </Link>
    ))}
  </div>
);

export default people;
