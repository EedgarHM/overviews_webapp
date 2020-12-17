import {
    Switch,
    Route
} from "react-router-dom";
import './styles/regulondbGlobalStyle.css';
import Main from './components/overview_main';
import Graphic from './components/overview_graphic';
import './styles/overviewsStyles.css';

const Overviews = () => {
   return(
     <>
     <Switch>
        <Route exact path={"/overviews"}>
          <Main />
        </Route>
        <Route path={"/overviews/:id"}>
          <Graphic />
        </Route>
      </Switch>
     </>
   )

}
 
export default Overviews;