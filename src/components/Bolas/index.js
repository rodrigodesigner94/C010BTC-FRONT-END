import { Figure } from 'react-bootstrap'
export const Panel = (props)=> {
    return( 
      <Figure>
      <Figure.Image
        width={200}
        height={350}
        alt="171x180"
       src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu8sKkLo4NarWau9bXf5MWvFq74tdKqufDEA&usqp=CAU"
      />
      <Figure.Caption>
        Cada cartela custa 50 moedas.
      </Figure.Caption>
    </Figure>
    )
}