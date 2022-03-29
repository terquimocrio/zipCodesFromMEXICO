import React from 'react'
import { ListGroup } from 'react-bootstrap/';
import { useState } from 'react';
export default function ZipCodeInformation(props) {

  const {zipCodeInfo} = props;

  console.log(zipCodeInfo);

  return (
    <div>
      <h2 className='mb-3'>Lugares para {zipCodeInfo["post code"]}: </h2>
      <ListGroup>
        {zipCodeInfo.places.map((el) => <ListGroup.Item key={el["place name"]}> {el["place name"]}, {el["state"]} </ListGroup.Item>)}
      </ListGroup>
    </div>
  )
}
