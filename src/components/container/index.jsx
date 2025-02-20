import React, { useState } from "react";
import ContainerBS from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Pokemon from "../pokemon";
import PkTeam from "../team";
import PkTable from "../pkTable";
import pokomenData from "../../api/pokemon.json";

export default function Container() {
	const [team, setTeam] = useState([]);
	
	const getTotalCount = () => {
		return team.reduce((total, pokemon) => total + pokemon.count, 0);
	}

   return (
      <ContainerBS
         className="mt-5 pb-5"
         style={{
            maxWidth: "1000px",
            width: "100%",
            paddingLeft: "15px",
            paddingRight: "15px",
         }}
      >
         <Row className="mb-5 text-center">
            <Col>
               <h1 className="mt-5 mb-4 text-center">Pokemon team manager</h1>
               <Pokemon
                  allPokomenData={pokomenData}
                  updatedPokemonData={team}
                  setPokemonData={setTeam}
               />
            </Col>
         </Row>

         <Row className="mb-5 text-center">
            <Col>
               {team.length > 0 ? (
                  <>
                     <h2 className="mb-4">Your Pokémon Team</h2>
                     <PkTeam pokomenData={team} setPokemonData={setTeam} />
                  </>
               ) : (
                  ""
               )}
            </Col>
         </Row>

         <Row className="mb-5 text-center">
            <Col>
               {team.length > 0 ? (
                  <>
                     <h2 className="mb-4">
                        Total Pokémon in Team: {getTotalCount()}
                     </h2>
                     <h4 className="mb-4">Individual Pokémon Count</h4>
                     <div className="table-responsive">
                        <PkTable pokomenData={team} setPokemonData={setTeam} />
                     </div>
                  </>
               ) : (
                  ""
               )}
            </Col>
         </Row>
      </ContainerBS>
   );
}
