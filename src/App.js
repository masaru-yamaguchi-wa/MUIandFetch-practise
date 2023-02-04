import './App.css';
import { useState, useEffect } from "react"
import { Button, ButtonGroup } from "@mui/material"
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { UserName } from "./component/userName"
import { UserPhone } from "./component/userPhone"
import { UserBirth } from "./component/userBirth"
import { UserMail } from "./component/userMail"
import { UserLocation } from "./component/userLocation"
import { Routes, Route, Link } from "react-router-dom"
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'


function App() {
  const [count, setCount] = useState(0)
  const [user, setUser] = useState({})
  const [value, setValue] = useState('1')
  document.title = `count:${count}`
  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(event, newValue)
  };
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=1")
      .then(response => response.json())
      .then(data => setUser(data.results[0]))
  }, []);
  const countup = (e, n, a) => {
    console.log(e, n, a)
    setCount(count + 1)
  }
  return (
    <div className="App">
      <header className="App-header">
        {Object.keys(user).length < 10 ?
          <p>nothing</p> :
          (<>
            <Card sx={{ maxWidth: 700 }}>
              <CardMedia component="img" sx={{ height: 300 }} image={user.picture.large} title="emplooy photo" />
              <CardContent>
                <Typography variant="h5" component="div">Ramdom User App</Typography>
                <Typography variant="body2" component="div">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Typography>
                <Routes>
                  <Route path={"/"} element={<UserName username={user.name} />} />
                  <Route path={"/userloc"} element={<UserLocation userlocation={user.location} />} />
                  <Route path="/userphone" element={<UserPhone userphone={user.cell}></UserPhone>} />
                  <Route path="/userbirth" element={<UserBirth userbirth={user.dob}></UserBirth>} />
                  <Route path="/useremail" element={<UserMail useremail={user.email}></UserMail>} />
                </Routes>
                <ButtonGroup>
                  <Button component={Link} to="/">Name</Button>
                  <Button component={Link} to={"/userloc"}>Location</Button>
                  <Button component={Link} to="/userphone">phone</Button>
                  <Button component={Link} to="/userbirth">birth</Button>
                  <Button component={Link} to="/useremail">mail</Button>
                </ButtonGroup>
              </CardContent>
            </Card>
            <Box sx={{ width: '100%', typography: 'body1', marginTop: "50px", backgroundColor: "#2a303c" }}>
              <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider', margin: "0 auto" }}>
                  <TabList centered onChange={handleChange}>
                    <Tab sx={{ color: "white" }} label="location" value="1" />
                    <Tab sx={{ color: "white" }} label="phone" value="2" />
                    <Tab sx={{ color: "white" }} label="birth" value="3" />
                    <Tab sx={{ color: "white" }} label="e-mail" value="4" />
                  </TabList>
                </Box>
                <TabPanel value="1"><UserLocation userlocation={user.location} /></TabPanel>
                <TabPanel value="2"><UserPhone userphone={user.cell} /></TabPanel>
                <TabPanel value="3"><UserBirth userbirth={user.dob} /></TabPanel>
                <TabPanel value="4"><UserMail useremail={user.email} /></TabPanel>
              </TabContext>
            </Box>
          </>)
        }
        <ButtonGroup disableElevation sx={{ marginTop: "50px" }}>
          <Button onClick={countup} value="1">countUP</Button>
          <Button onClick={() => { setCount(0) }}>clear</Button>
        </ButtonGroup>

      </header>
    </div>
  );
}

export default App;
