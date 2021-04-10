import { Button } from 'antd';
import { history, Link } from 'umi';
import React from 'react';
import styles from './index.less';

export default function Page() {
  return (
    <div>
      <h1 className={styles.title}>Page about/index</h1>
      <Button
        type="primary"
        onClick={() => {
          history.push('/more');
        }}
      >
        go more
      </Button>
      <Link to="/productDetail">to productDetail</Link>
    </div>
  );
}
