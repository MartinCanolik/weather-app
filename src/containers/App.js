import React, { useState } from "react";
import "./App.css";
import Nav from "../components/Nav/Nav.jsx";
import Cards from "../components/Cards/Cards.jsx";
import Ciudad from "../components/Ciudad/Ciudad";
import { Route, Routes } from "react-router-dom";
import axios from "axios";

const apiKey = "d476ad54a44ff06f5c95f4cb26f2984f";

function App() {
	const [cities, setCities] = useState([]);
	function onClose(id) {
		setCities((oldCities) => oldCities.filter((c) => c.id !== id));
	}
	function onSearch(ciudad) {
		axios
			.get(
				`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`
			)
			.then((recurso) => {
				console.log(recurso);
				const { data } = recurso;
				if (data.main !== undefined) {
					const ciudad = {
						min: Math.round(data.main.temp_min),
						max: Math.round(data.main.temp_max),
						img: data.weather[0].icon,
						id: data.id,
						wind: data.wind.speed,
						temp: data.main.temp,
						name: data.name,
						weather: data.weather[0].main,
						clouds: data.clouds.all,
						latitud: data.coord.lat,
						longitud: data.coord.lon,
					};
					setCities((oldCities) => [...oldCities, ciudad]);
				} else {
					alert("Ciudad no encontrada");
				}
			});
	}

	function onFilter(ciudadId) {
		let ciudad = cities.filter((c) => c.id === parseInt(ciudadId));
		if (ciudad.length > 0) {
			return ciudad[0];
		} else {
			return null;
		}
	}

	return (
		<div className='App'>
			<Nav onSearch={onSearch} />
			<Routes>
				<Route path='/' element={<Cards cities={cities} onClose={onClose} />} />
				<Route
					path='/ciudad/:ciudadId'
					element={<Ciudad onFilter={onFilter} />}
				/>
			</Routes>
		</div>
	);
}

export default App;
