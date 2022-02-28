import { Container, Page} from './style';
import { Card } from "../Cartela";
import { Panel } from '../Bolas';
import { Navbar } from '../../Navbar';


export const App = (props)=> {
   return(
       <Container>
          <Navbar />
          <Page>
            <Panel />
            <Card />
          </Page>
        </Container>
   );
}