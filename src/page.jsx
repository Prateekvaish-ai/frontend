import React from 'react'
import Card from '@/components/Card';

const Home = () => {

  return (
    <div>
      <h1 className='text-center my-5 font-bold text-3xl'>Home Page</h1>
      <p style={{ color: 'red', fontWeight: 'bold', fontSize: 50 }}>
        JSX is the combination of html and js
      </p>

      <input type="text" />
      <br />
      <hr />

      <button className='global-btn'>Home button</button>
      <button className="contactBtn">Using local class</button>

      <img src="/next.svg" />

      <div className="w-1/2 m-10">
        <Card
          title="Card 1 Title"
          description="Card 1 Description" />
        <Card
          title="Card 2 Title"
          description="Card 2 Description" />
        <Card
          title="Card 3 Title"
          description="Card 3 Description" />
        <Card
          title="Card 4 Title"
          description="Card 4 Description" />
      </div>

    </div>
  )
}

export default Home;