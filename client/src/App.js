import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import "./styles/musicwidget.scss";
// import "./styles/letterItem.scss";
// import { Navbar } from "./components/Navbar";
// import { Form } from "./components/Form";
// import { UserInformation } from "./components/UserInfomation";
// import { UserProvider } from "./UserContext";
import { LetterNew } from "./components/LetterNew";
import { NotificationCounter } from "./components/NotificationCounter";

import { LetterList } from "./components/LetterList";
import { LetterDetail } from "./components/LetterDetail";
import { Login } from "./components/Login";
import { LoginError } from "./components/LoginError";
import { useState, useContext } from "react";
import { UserContext } from "./UserContext";
import { Music } from "./components/Music";

// Material UI
import {
  BottomNavigation,
  BottomNavigationAction,
  Button,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import { purple } from "@mui/material/colors";
//Music Imports
import song_one from "./assests/music/song_one.mp3";
import song_two from "./assests/music/song_two.mp3";
// import song_three from "./assests/music/song_three.mp3"

// Material UI Icons
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import MarkunreadMailboxOutlinedIcon from "@mui/icons-material/MarkunreadMailboxOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import axios from "axios";
import io from "socket.io-client";
import { useEffect } from "react";

function App() {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [value, setValue] = useState("recents");
  const { userID, setUserID } = useContext(UserContext);

  const [socket, setSocket] = useState();
  const [updateNum, setUpdateNum] = useState(0);

  // useEffect(
  //   () => {
  //     const socket = io();
  //     setSocket(socket);
  //     socket.on("connect", () => {
  //       const data = { 1: "yes" };
  //       console.log("data on client", data);
  //       socket.emit("user", data);
  //     });

  //     socket.on("update", () => {
  //       setUpdateNum(updateNum + 1);
  //     });

  //     // clean up
  //     return () => {
  //       socket.disconnect();
  //     };
  //   },
  //   [
  //     // updateNum
  //   ]
  // );

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const navToMyLetters = () => {
    navigate("/letters/profile");
    setPage(1);
  };

  // Music widget
  const songs = [song_one, song_two];

  const audio = new Audio(songs[Math.floor(Math.random() * 2)]);
  const [music] = useState(audio);

  const playFunc = (music) => {
    music.volume = 0.08;
    music.play();
  };

  const pauseFunc = (music) => {
    music.pause();
  };
  return (
    <div className="App">
      <nav className="top-nav-bar">
        <div
          className="logo"
          onClick={() => {
            navigate("/letters");
          }}
        ></div>

        <div
          onClick={() => {
            navigate("/letters/profile");
          }}
          className="top-nav-bar-rightcontainer"
        >
          {!userID ? (
            <li>
              <Button
                variant="outlined"
                sx={{ color: purple[800], border: "1px solid purple" }}
                onClick={() => {
                  navigate("/users/login");
                }}
              >
                LOGIN
              </Button>
            </li>
          ) : (
            <>
              <li>
                <Button
                  variant="outlined"
                  sx={{ color: purple[800], border: "1px solid purple" }}
                  onClick={() => {
                    setUserID(null);
                    navigate("/users/login");
                  }}
                >
                  LOGOUT
                </Button>
              </li>
              <li className="notification-bell">
                <NotificationsActiveOutlinedIcon sx={{ color: purple[700] }} />
                <NotificationCounter />
              </li>
            </>
          )}
        </div>
      </nav>

      <BottomNavigation
        showLabels
        value={value}
        onChange={handleChange}
        className="nav-bar"
        sx={{
          // bgcolor: "purple",
          "& .Mui-selected": {
            "& .MuiBottomNavigationAction-label": {
              fontSize: (theme) => theme.typography.caption,
              transition: "none",
              fontWeight: "bold",
            },
            "& .MuiSvgIcon-root, & .MuiBottomNavigationAction-label": {
              color: (theme) => theme.palette.secondary.main,
            },
          },
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          height: "76px",
        }}
      >
        <BottomNavigationAction
          onClick={() => {
            navigate("/letters");
            setPage(1);
          }}
          label="All Letters"
          icon={<MailOutlineIcon fontSize="large" />}
        />

        <BottomNavigationAction
          onClick={() => {
            !userID ? navigate("/users/login/error") : navToMyLetters();
          }}
          label="My Letters"
          icon={<MarkunreadMailboxOutlinedIcon fontSize="large" />}
        />
        <BottomNavigationAction
          onClick={() => {
            navigate("/letters/new");
          }}
          label="Write New"
          icon={<CreateOutlinedIcon fontSize="large" />}
        />
      </BottomNavigation>
      {/* </Paper> */}
      <Routes>
        <Route
          path="/"
          element={
            <LetterList
              update={updateNum}
              page={page}
              setPage={setPage}
              path={"/letters"}
            />
          }
        />
        <Route
          path="/letters"
          element={
            <LetterList
              page={page}
              update={updateNum}
              setPage={setPage}
              path={"/letters"}
            />
          }
        />
        <Route path="/letters/new" element={<LetterNew />} />
        <Route
          path="/letters/profile"
          element={
            <LetterList
              path={"/letters/profile"}
              page={page}
              setPage={setPage}
            />
          }
        />
        <Route path="/letters/:id" element={<LetterDetail />} />
        <Route
          path="/users/login"
          element={<Login redirectPath={"/letters/profile"} />}
        />
        <Route
          path="/users/login/error"
          element={<LoginError redirectPath={"/letters/profile"} />}
        />
        <Route path="/chill" element={<Music />} />
      </Routes>
      <div id="music-widget">
        <Music play={playFunc} pause={pauseFunc} music={music}></Music>
      </div>
    </div>
  );
}

export default App;
