import React from "react";
import {Navigate, Route, Routes} from "react-router-dom";

import PostContainer from "../components/PostContainer";


export const AllRoutes = () => {

    return (<Routes>
        <Route path="/" element={<Navigate replace to="/Main"/>}/>
        <Route path='/Main' element={<PostContainer />}> </Route>

    </Routes>);
}
