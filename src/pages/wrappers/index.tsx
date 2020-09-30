import { Redirect } from 'umi';
import React from 'react';

export default (props:any) => {
//   const { isLogin } = useAuth();
const isLogin = true;
  if (isLogin) {
    return <div>{ props.children }</div>;
  } else {
    return <Redirect to="/login" />;
  }
}