"use strict";
class ActionButtonComponent extends React.Component {

  constructor( props ) {

    super( props );
    this.state = {
      width: "0px",
      height: "0px"
    };

  }

  render() {

    console.log( "rendering..." );
    console.log( this.props.shape );
    if ( this.props.shape === "rectangle" ) {

      const style = {
        height: this.props.height,
        width: this.props.width,
        backgroundColor: this.props.color,
        zIndex: this.props.zIndex

      };
      console.log( "rectangle" + style );
      return (
        <div style={style}></div>
      );

    }

    if ( this.props.shape === "circle" ) {

      const style = {
        height: this.props.height,
        width: this.props.width,
        backgroundColor: this.props.color,
        zIndex: this.props.zIndex,
        borderRadius: "50%"
      };

      console.log( "circle" + style );
      return (
        <div style={style}></div>
      );

    } /* else {

      console.log( "error" );

    } */

  }

}

export { ActionButtonComponent };
