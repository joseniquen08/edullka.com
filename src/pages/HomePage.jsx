import axios from "axios";
import { useEffect, useState } from "react";
import { Activities } from "../components/Home/Activities";
import { Hero } from "../components/Home/Hero";

export const HomePage = () => {

  const [actives, setActives] = useState(0);

  useEffect(() => {
    axios.get('https://discord.com/api/guilds/865355294975459349/widget.json')
      .then(response => setActives(response.data.members.length));
  }, []);

  return (
    <div className="w-full bg-white font-primary">
      <div className="mx-auto max-w-7xl">
        <Hero actives={actives}/>
        <Activities/>
        {/* <Methodology/>
        <Camps/> */}
      </div>
    </div>
  );
};
