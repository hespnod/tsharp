import React from "react";

const TotalContext = React.createContext({
    total: Number(0),
    setTotal: () => { }
});

export default TotalContext; 