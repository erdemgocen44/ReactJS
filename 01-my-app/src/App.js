import React from "react";
import User from "./components/User";
import Comp from "./components/comp/Comp";
import Hello from "./components/hello/Hello";
import Jsx from "./components/jsx/Jsx";
import InlineStyle from "./components/style/InlineStyle";
import InternalStyle from "./components/style/InternalStyle";
import ExternalStyle from "./components/style/ExternalStyle";
import Clock1 from "./components/clock1/Clock1";
import Props from "./components/props/Props";
import Clock2 from "./components/clock2/Clock2";
import Profile from "./components/profile/Profile";
import Image from "./components/image/Image";
import BSClassic from "./components/bootsrapClassic/BSClassic";
import BSReact from "./components/bootsrap-react/BSReact";
import Shop from "./components/shop/Shop";
import State from "./components/state/State";
import Counter from "./components/counter/Counter";
import Birthday from "./components/birthday/Birthday";
import Clock3 from "./components/clock3/Clock3";
import ChangeTitle from "./components/useEffect/ChangeTitle";
import UserCards from "./components/userCards/UserCards";

const App = () => {
  const avatarUrl = "https://picsum.photos/200/200";
  const avatarUrl2 = "https://picsum.photos/200/300";
  return (
    <div>
      <div className="App">
        {/* <h4>Merhaba Dünya (App)</h4>
        <Hello />
        <Comp />
        <User />
        <Jsx />
        <InlineStyle />
        <InternalStyle />
        <ExternalStyle />
        <Clock1 />
        <Props ad="Akif" soyad=" Emre" />
        <Props ad="Mine" soyad=" Ayşe" />
        <Props ad="Dila" soyad=" Halide" />
        <Props ad="Merve" soyad=" İzgi" />
        <Clock2 yaziRengi="yellow" zeminRengi="navy" />
        <Profile
          avatar={avatarUrl}
          name="Ali Gel"
          location="Türkiye, İstanbul"
          shot="4"
          followers="25"
          following="45"
        />
        <Profile
          avatar={avatarUrl2}
          name="Mehmet Gel"
          location="Türkiye, Adana"
          shot="4"
          followers="27"
          following="35"
        />
        <Image />
        <BSClassic />
        <BSReact />
        <Shop />
        <State />
        <Counter /> 

        <Birthday /> 
        <Clock3 /> 
        <ChangeTitle />*/}
        <UserCards />
      </div>
    </div>
  );
};

export default App;
