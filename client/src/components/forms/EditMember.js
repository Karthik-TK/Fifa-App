import React, { useState, useEffect, useRef } from 'react';
import axios from "axios";
import { baseURL, headers } from './../services/Service';
import { useHistory } from "react-router-dom";

export const EditMember = () => {
    const [menus, setMenus] = useState([]);
    const history = useHistory();
    const countRef = useRef(0);
    const [deleted, setDeleted] = useState(false);
    useEffect(() => {
        retrieveAllMenus();
    }, [countRef]);
    const retrieveAllMenus = () => {
        axios
            .get(`${baseURL}/menu/`, {
                headers: {
                    headers,
                },
            })
            .then((response) => {
                setMenus(response.data);
            })
            .catch((e) => {
                console.error(e);
            });
    };
    const deleteMenu = (id) => {
        axios
            .delete(`${baseURL}/menu/${id}/`, {
                headers: {
                    headers,
                },
            })
            .then((response) => {
                setDeleted(true);
                retrieveAllMenus();
            })
            .catch((e) => {
                console.error(e);
            });
    };
    const handleUpdateClick = (id) => {
        history.push(`/menu/${id}/update/`);
    };

    return (
        <div>
            <label>Edit Member</label>
        </div>
    )
}
