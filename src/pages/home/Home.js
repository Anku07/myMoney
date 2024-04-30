import styles from "./Home.module.css";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useCollection } from "../../hooks/useCollection";

// components
import TransactionForm from "./TransactionForm";
import TransactionList from "./TransactionList";

export default function Home() {
  const { user } = useAuthContext();
  const { document, error } = useCollection(
    "transaction",
    ["uid", "==", user.uid], // Query parameter
    ["createdAt", "desc"] // OrderBy parameter
  );

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {error && <p>{error}</p>}
        {document && <TransactionList transactions={document} />}
      </div>
      <div className={styles.sidebar}>
        <TransactionForm uid={user.uid} />
      </div>
    </div>
  );
}
