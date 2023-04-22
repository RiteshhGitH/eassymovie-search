import React, { useState, useEffect } from 'react';

import Content from './../components/content';
import Navbar from './../components/Navbar';
import Footer from './../components/Footer';
import './style.css';


const Home = () => {
	const [loading, setLoading] = useState(true);
	const [movie, setMovie] = useState({});
	const [searchText, setSearchText] = useState('Joker');
	const [Text, setText] = useState('');

	useEffect(() => {
		const fetchMovie = async () => {
			try {
				const response = await fetch(
					`https://www.omdbapi.com/?t=${searchText}&apikey=${process.env.REACT_APP_API_KEY}`
				);
				const data = await response.json();
				setMovie(data);
				setLoading(false);
			} catch (error) {
				console.log(error);
			}
		};
		fetchMovie();
	}, [searchText]);

	if (loading) {
		return (
			<section className="section loading">
				<h1>Loading...</h1>
			</section>
		);
	}
	
	const handleOnClick =(e)=>{
		
		setSearchText(Text);

		console.log(searchText)

	}
	const handleOnChange =(e)=>{
		console.log(Text);
		setText(e.target.value)
		

	}

	
	return (
		<div >
			<Navbar />
			<div className="search-container">
				<form className="search-form">
					<input
						type="text"
						className="search-field"
						
						// onChange={(e) => setSearchText(e.target.value)}
						onChange={handleOnChange}

						placeholder="Type in your favourite movie here..."
					/>
					
					
				</form>
				
				
				
			</div>
			
			<div className="container" style={{ position: "relative" }}>
			<button className="btn" onClick={()=>{handleOnClick() }} style={{ position: "absolute", top: "-135px", right: "400px" }}>Search 🔍</button>
			</div>
			
			
			<div className="body">
				<div className="wrapper">
				{searchText ? (<Content movie={movie} />) : (
					<div className="content-container">
						<h4>Please type any movie you wish to search...</h4>
					</div>
				)}
				</div>
			</div>
			<br/>
			<br/>
			<br/>
			<br/><br/>
			<br/>
			<br/>
			<br/><br/>
			<br/>
			<Footer />
		</div>
	);
};

export default Home;
