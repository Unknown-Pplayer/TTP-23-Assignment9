import React, {useEffect, useState} from 'react';

const Home = (props) => {
    return (
      <>
        <h1>Home Page</h1>
        <p><strong>Your Account Balance: {props.accBalance}</strong></p>
      </>
    );
}

export default Home;