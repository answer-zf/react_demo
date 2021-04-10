import React from 'react';
import styles from './[id$].less';

export default function Page({ match }) {
  const { id } = match.params;
  return (
    <div>
      <h1 className={styles.title}>Page productDetail/[id$]</h1>
      <p>{id || 'not exist "id"'}</p>
    </div>
  );
}
