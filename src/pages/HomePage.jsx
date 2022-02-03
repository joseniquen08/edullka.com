import axios from "axios";
import { useEffect, useState } from "react";
import { Camps } from "../components/Home/Camps";
import { Hero } from "../components/Home/Hero";
import { Methodology } from "../components/Home/Methodology";

export const HomePage = () => {

  const [actives, setActives] = useState(0);

  useEffect(() => {
    axios.get('https://discord.com/api/guilds/865355294975459349/widget.json')
      .then(response => setActives(response.data.members.length));
  }, []);

  return (
    <div className="w-full bg-white dark:bg-stone-800 font-primary">
      <div className="max-w-7xl mx-auto">
        <Hero actives={actives}/>
        <Methodology/>
        <Camps/>
      </div>
    </div>
  );
};
