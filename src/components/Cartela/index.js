import styled from "styled-components"

const DivC = styled.div`
  background-color: rgba(245, 245, 245, 0.6);
  padding: 1rem;
  border-radius: 1rem;
`;

export const Cartela = (item)=> {
  return(
    <DivC>
      <a href='/bola'>
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">B</th>
              <th scope="col">I</th>
              <th scope="col">N</th>
              <th scope="col">G</th>
              <th scope="col">O</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>item</td>
              <td>item</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>@mdo</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
              <td>@mdo</td>
              <td>@mdo</td>
            </tr>
          </tbody>
        </table> 
      </a>  
    </DivC>
  )
}
