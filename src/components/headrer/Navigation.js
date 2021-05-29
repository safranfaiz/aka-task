import React from 'react';
import Wine from './navigations/Wine';
import {cssHeader} from '../css/header';
import NavigationTable from './navigations/NavigationTable';
import * as Details from '../../data/navigation';

class Navigation extends React.Component{
  constructor(){
    super();
    this.state = {
      wineDetails: false
    }
  }

  mouseHoverWine = () => {
    console.log(">>> WINE <<<")
    this.setState({wineDetails: !this.state.wineDetails})
  }

  render(){
    return(
      <div>
        <div style={cssHeader.navBarBottomShadow} className="row" >
          <Wine mouseHoverWine={this.mouseHoverWine}/>
        </div>
        <div>
          {/* wine details navigtion popup */}
          {this.state.wineDetails && (
            <div>
              <div className="row">
                <div className="col">
                  <NavigationTable 
                    title="Red"
                    rowData={Details.RED_DETAILS}/>
                </div>
                <div className="col">
                  <NavigationTable 
                    title="White"
                    rowData={Details.WHITE_DETAILS}/>
                </div>
                <div className="col">
                  <table>
                    {Details.TITLES_COMMON.map(item => {
                      return <thead style={cssHeader.tabelTitle}>{item}</thead>
                    })}
                  </table>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <img src={Details.WINE_DETAILS_BOTTOM[0].img} />
                  <p>{Details.WINE_DETAILS_BOTTOM[0].title}</p>
                </div>
                <div className="col">
                  <img src={Details.WINE_DETAILS_BOTTOM[1].img} />
                  <p>{Details.WINE_DETAILS_BOTTOM[1].title}</p>
                </div>
              </div>

            </div>
          )}

          
        </div>
      </div>
    )
  }


}

export default Navigation;