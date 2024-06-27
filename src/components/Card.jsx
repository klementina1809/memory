import React from 'react'

function Card({data}) {
  return (
    <div className='card'>
      	<img
							src={data.back_side}
							alt="back_side"
							style={{
								width: "100%",
								borderRadius: "8px",
								marginBottom: "16px",
								cursor: "pointer",
							}}
						/>
    </div>
  )
}

export default Card
