import React, { useState } from 'react';
import "./Home.css"
import { useNavigate } from 'react-router';
import {GrDocumentPdf} from "react-icons/gr";
import {AiOutlineRead} from "react-icons/ai";

export default function Home() {

        return (
            <div id="pageRoot">
            <div id="textDiv">
            <h1 id="homeTitle">Hi, im Pauli</h1>
            <h2 id="homeInfo">24 year old guy from Finland, looking for some It-work.</h2>
            </div>
            </div>
        )
}