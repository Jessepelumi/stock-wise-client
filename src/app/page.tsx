"use client";
import { useState } from "react";

import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const [data, setData] = useState("");

  const handleClick = async () => {
    const response = await fetch("/api/leads");
    setData(await response.json());
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol>
          <li>
            Leads source endpoint <code>/api/leads</code>.
          </li>
          <li>
            Leads destination endpoint{" "}
            <code>
              https://emoucpqer8.execute-api.us-east-2.amazonaws.com/api/leads
            </code>
            .
          </li>
        </ol>

        <div className={styles.ctas} onClick={handleClick}>
          <a className={styles.primary} href="#" rel="noopener noreferrer">
            <Image
              className={styles.logo}
              src="https://nextjs.org/icons/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Fetch Leads
          </a>
        </div>
        <div className={styles.primary}>{data && JSON.stringify(data)}</div>
      </main>
    </div>
  );
}
