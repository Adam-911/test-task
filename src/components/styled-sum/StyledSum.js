import React from "react";
import './StyledSum.scss'

export default function StyledSum({ value, isCurrency }) {
    const data = () => { 
        if (isCurrency) return ' ₸';
    }

    return (<span>{value}<span className="fraction">,00 {data()}</span></span>) ;
}