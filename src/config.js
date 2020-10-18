import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      date: new Date(),
      users: null,
      value: 0,
      setValue: 0,
    };
  }

  async componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);

    await fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          users: response,
        });
      });
    console.log(this.state.users);
  }

  tick = () => {
    this.setState({ date: new Date() });
  };

  SimpleBottomNavigation = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    return (
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
      </BottomNavigation>
    );
  };

  render() {
    return <this.SimpleBottomNavigation />;
  }
}

export default App;
