import React from "react";
import { connect } from "react-redux";
import { checkUser, clearReducer } from "./redux/reducers/userReducer";
import Header from "./components/header/Header";
import routes from "./routes";
import "./App.css";
import { withRouter } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.checkUser();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.userReducer.user != this.props.userReducer.user) {
      if (!this.props.userReducer.user.email_address)
        this.props.history.push("/goodbye");
    }
  }

  componentWillUnmount() {
    // this.props.clearReducer()
  }

  render() {
    return (
      <div className={"App"}>
        <Header />
        {routes}
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    userReducer: reduxState.userReducer
  };
};

export default connect(mapStateToProps, { checkUser, clearReducer })(
  withRouter(App)
);
