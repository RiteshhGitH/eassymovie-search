import React,{useState} from 'react';
import './popup.css'
import './rating.css';
import { FaStar } from "react-icons/fa";


const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"
    
};


const Content = ({ movie }) => {


	


	
	const [modal, setModal] = useState(false);

	const toggleModal = () => {
	  setModal(!modal);
	};
  
	if(modal) {
	  document.body.classList.add('active-modal')
	} else {
	  document.body.classList.remove('active-modal')
	}
	const [currentValue, setCurrentValue] = useState(0);
	const[count, setCount]=useState(0);
	const[sum, setSum]=useState(currentValue);
	const [avg,setAvg]=useState(currentValue);
	const[final, setFinal]=useState(0);

	
	const [hoverValue, setHoverValue] = useState(undefined);
	const stars = Array(5).fill(0)
  
	const handleClick = value => {
	  setCurrentValue(value)
	}
  
	const handleMouseOver = newHoverValue => {
	  setHoverValue(newHoverValue)
	};
  
	const handleMouseLeave = () => {
	  setHoverValue(undefined)
	}
	

	const handleTask =()=>{
		
		setSum(sum+currentValue);
		setAvg(sum/count);
		setCount(count+1);
		setFinal(Math.round(avg));

		console.log("currentValue)"+currentValue);
		console.log("sum"+sum);
		console.log("count"+count);
		console.log("avg"+avg);

	}

	

	return (
		<div className="content-container">
			
			{movie.Response !== 'False' ? (
				<div className="content-wrap">

					<img src={movie.Poster} alt="" className="content-img"onClick={toggleModal}/>

				

					<div className="content">
					
						<h2 className="title">{movie.Title}</h2>



						<div style={styles.stars}>
						{stars.map((_, index) => {
							 const starValue = index + 1;
						return (
							<FaStar
							key={index}
							size={20}
							
			
							color={ starValue <= final ? colors.orange : colors.grey}
							style={{
								marginRight: 10,
								cursor: "pointer"
							}}
							/>
						)
						})}
					</div>
						
						<br/>





						<small>Written by {movie.Writer}</small>
						<div className="details-container">
							<h3 className="sub-title">Movie Details</h3>
							<div className="details-flex">
								<h4>Plot:</h4>
								<p>{movie.Plot}</p>
								<div className="line-cont">
									<h4>Language:</h4>
									<p>{movie.Language}</p>
								</div>
								<div className="line-cont">
									<h4>Actors:</h4>
									<p>{movie.Actors}</p>
								</div>
								<div className="line-cont">
									<h4>Director:</h4>
									<p>{movie.Director}</p>
								</div>
								<div className="line-cont">
									<h4>Runtime:</h4>
									<p>{movie.Runtime}</p>
								</div>
								<div className="line-cont">
									<h4>Released:</h4>
									<p>{movie.Released}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			) : (
				<div className="content-container">
					<h4>This movie does not exist...</h4>
				</div>
			)}
		    <>
    

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">

			
		  <div className="contain">
            <br/>
            <p>Enter Your Details</p>
            <img className="otpimg" src="./form.png" alt="otp-img" />
            <br/>
        
            <form className="form">
                
                <input className="formInput" type="text" placeholder="Name"/>
                <input className="formInput" type="email" placeholder="Email Address" />
                <input className="formInput" type="text" placeholder="Phone Number" maxLength="10"/>
				
				<div className="move">
				&nbsp; Movie Watching Date
                 </div>  
                    <input className="formInput" type="date" placeholder="Date of Birth" />
					
					<div className="move">
				&nbsp; Your Rating 
                 </div>  
				 <br/>
					
    
      <div style={styles.stars}>
        {stars.map((_, index) => {
          return (
            <FaStar
              key={index}
              size={24}
              onClick={() => handleClick(index + 1)}
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseLeave={handleMouseLeave}
              color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
              style={{
                marginRight: 10,
                cursor: "pointer"
              }}
            />
          )
        })}
      </div>
		
	 
			 <br/>
                <button type="button" className="formSubmit" onClick={()=>{handleTask();toggleModal();}}>Submit</button>
            </form>
        </div>
            
            <button className="close-modal" onClick={toggleModal}>
              X
            </button>
			
			

          </div>
        </div>
      )}
    </>

		</div>
	);
};

const styles = {
	container: {
	  display: "flex",
	  flexDirection: "row",
	  alignItems: "left"
	},
	stars: {
	  display: "flex",
	  flexDirection: "row",
	},
	textarea: {
	  border: "1px solid #a9a9a9",
	  borderRadius: 5,
	  padding: 10,
	  margin: "20px 0",
	  minHeight: 100,
	  width: 300
	},
	button: {
	  border: "1px solid #a9a9a9",
	  borderRadius: 5,
	  width: 300,
	  padding: 10,
	}
  
  };
  
  
export default Content;
