import React, { useState } from 'react';

export default function SearchBar({onSearch}) {
  // acá va tu código

  const [citie, setCity] = useState("");
 

  const handleChange = (e)=> {

    setCity(e.target.value);

  }
  return (
  <form className="form-inline my-2 my-lg-0" onSubmit={(e) => {

    e.preventDefault();

    onSearch(citie);

    const entrada = document.querySelector('#placeholder')

    entrada.value = "";


  }}
  >

   <input id = "placeholder" className="form-control mr-sm-2" type='text' placeholder='search your city' onChange={(e)=> handleChange(e)} />

   <button className="btn btn-outline-success my-2 my-sm-0" type="submit" value='agregar'>search</button>

  </form>

  );
};