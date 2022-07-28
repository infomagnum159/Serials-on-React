import React, {useReducer} from 'react';
import './SerialsForm.css';
import {CHANGE_INPUT_VALUE, FETCH_SERIALS_REQUEST, FETCH_SERIES_REQUEST} from "../../store/actionTypes";
import axiosSerials from "../../axiosSerials";
import reducer, {initialState} from "../../store/reducer";
import {NavLink} from "react-router-dom";
import axiosSeries from "../../axiosSeries";
import Series from "../../components/Series/Series";

const SerialsForm = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const searchSerials = async event => {
        const value = event.target.value;
        const response = await axiosSerials(`${value}`);
        dispatch({type: CHANGE_INPUT_VALUE, value});
        dispatch({type: FETCH_SERIALS_REQUEST, value: response.data});
    };

    const getSeries = async id => {
        const value = '';
        const response = await axiosSeries(`${id}`);
        dispatch({type: FETCH_SERIES_REQUEST, value: response.data});
        dispatch({type: CHANGE_INPUT_VALUE, value});
        dispatch({type: FETCH_SERIALS_REQUEST, value});
    };

    return (
        <div>
            <input
                id="Input"
                name="serialsName"
                className="Input"
                value={state.inputValue}
                onChange={event => searchSerials(event)}
                placeholder="Enter the series ..."
            />
            <div className="Serials">
                <ul className="ListSerials">
                    {state.serials && state.serials.map(series => (
                        <li
                            key={series.show.id}
                            className="Serial"
                        >
                            <NavLink to={`/shows/${series.show.id}`} onClick={() => getSeries(series.show.id)}> {series.show.name}</NavLink>
                        </li>
                    ))}
                </ul>
            </div>
            {state.series !== null ?
                <Series>
                    <div>
                        {state.series.image !== null ?
                    <div><img src={state.series.image.medium} alt='SeriesImage'/></div>
                            : null}
                    <div className='SeriesInfo'>
                        <p>Type: {state.series.type}</p>
                        <p>Language: {state.series.language}</p>
                        <p>Status: {state.series.status}</p>
                        <p>Premiered: {state.series.premiered}</p>
                    </div>
                    </div>
                </Series>
                : null
            }
        </div>
    );
};

export default SerialsForm;