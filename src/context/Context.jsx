import { createContext, useEffect, useState } from "react";
import { apiService } from "../services/apiServices";

export const AppContext = createContext();

export const AppState = ({ children }) => {
  const [data, setData] = useState([]);
  const [players, setPlayers] = useState([]);
  const [q, setQ] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchlist = async () => {
    setLoading(true);
    try {
      const resp = await apiService.get("");
      if (resp.status === 200) {
        const sortDataByValues = resp?.data?.playerList.sort((a, b) => {
          return a.Value - b.Value;
        });

        setData(sortDataByValues);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchlist();
  }, []);

  useEffect(() => {
    if (q.length > 0) {
      const newEntries = data.filter((value) => {
        return (
          value.PFName.toLowerCase().includes(q.toLowerCase()) ||
          value.TName.toLowerCase().includes(q.toLowerCase())
        );
      });
      setPlayers(newEntries);
    } else {
      setPlayers(data);
    }
  }, [q, data]);

  const store = {
    loading,
    setLoading,
    players,
    setPlayers,
    q,
    setQ,
  };
  return <AppContext.Provider value={store}>{children}</AppContext.Provider>;
};
