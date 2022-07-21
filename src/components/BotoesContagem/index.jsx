import React, {useContext} from "react";
import { AchetteContext } from "../../contexts/AchetteContext";

const BotoesContagem = () => {
  const {setContagemDoContext} = useContext(AchetteContext);
  return (
  <>
    <button type="button" onClick={() => setContagemDoContext((prevState) => --prevState)}>Mais novo!</button>
    <button type="button" onClick={() => setContagemDoContext((prevState) => ++prevState)}>Mais velho!</button>
  </>
)};

export default BotoesContagem;
