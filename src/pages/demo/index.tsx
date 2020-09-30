import React, { useState } from 'react';
import styles from './index.less';
import { Link } from 'umi';

export default (props: any) => {
  const [showZ,setShowZ] = useState(false)

  const liClick = (e:any) =>{
    // e.stopPropagation()
    console.log('click')
  }
  const liTouchEnd = (e:any) =>{
    // e.preventDefault() //阻止默认行为
    // e.stopPropagation() //阻止事件冒泡
    console.log('touchend')
    setShowZ(false)
  }
  const liTouchStart = (e:any) =>{
    // e.preventDefault() //阻止默认行为
    // e.stopPropagation() //阻止事件冒泡
    console.log('touchstart')
    setShowZ(true)
  }

  const zzClick = () =>{
    console.log('zhezhao')
  }

  const renderLi = () => {
    const arr = [];
    for (let i = 0; i < 20; i += 1) {
      arr.push(i);
    }
    return arr.map(el => <li key={el} onTouchStart={liTouchStart} onClick={liClick} onTouchEnd={liTouchEnd}>列表项{el}</li>);
  };
  return (
    <div>
      <div className={`${styles.zhezhao} ${showZ ?'':styles.none}`} onClick={zzClick}></div>
      <h1 className={styles.title}>Page demo</h1>
      <Link to="/">index</Link>
      <ul>{renderLi()}</ul>
    </div>
  );
};
