import React from "react";
import Table from "react-bootstrap/Table";

export default function PkTable({ pokomenData, setPokemonData }) {
   return (
      <div className="d-flex flex-wrap justify-content-evenly mt-4">
         <div className="w-100">
            <div className="table-responsive">
               <Table striped bordered hover>
                  <thead>
                     <tr>
                        <th>Nickname</th>
                        <th>Count</th>
                        <th>Label</th>
                     </tr>
                  </thead>
                  <tbody>
                     {pokomenData.slice(0, 5).map((pokeman, ind) => (
                        <tr key={`pkTeam-${ind}`}>
                           <td className="text-success">
                              <strong>{pokeman.name}</strong>
                           </td>
                           <td className="text-danger">
                              <strong>{pokeman.count}</strong>
                           </td>
                           <td>
                              <strong>Pokémon</strong>
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </Table>
            </div>
         </div>
      </div>
   );
}
