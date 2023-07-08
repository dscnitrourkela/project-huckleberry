
import styled from "styled-components";


const Buttonstyles = styled.button`
    background-color: ${(props) =>
	 props.variant === "outline"
	  ? "white"
	   : props.variant === "disabled" 
	   ?"#A6A6A6"  
	   : "#145EF1"}; 
   color :${(props) =>
	 props.variant === "outline"
	  ? "#145EF1"
	   : props.variant === "disabled" 
	   ?"#fff"  
	   : "#fff"} ;
	   border-radius: 8px;
	   border: ${(props) =>
	 props.variant === "outline"
	  ? "2px solid #145EF1"
	   : props.variant === "disabled" 
	   ?"none"
	   : "#fff"}; ;

display: inline-flex;
height: 60px;
padding: 12px 48px;
justify-content: center;
align-items: center;
flex-shrink: 0;
    
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
        border-radius: 8px;
display: inline-flex;
height: 60px;
padding: 12px 48px;
justify-content: center;
align-items: center;
flex-shrink: 0;
background-color: ${(props) =>
	 props.variant === "outline"
	  ? "#F7F4F4"
	   : props.variant === "disabled" 
	   ?"#D7CDCD"  
	   : "#558BF5"}; 

    }
	
     &:focus {
        outline: none;
		color: #145EF1;
		background-color: #fff;
		border: 2px solid #145EF1;
		border-radius: 8px;
		display: inline-flex;
height: 60px;
padding: 12px 48px;
justify-content: center;
align-items: center;
flex-shrink: 0;



		}
    
	&:active {
		border-radius: 8px;
display: inline-flex;
height: 60px;
padding: 12px 48px;
justify-content: center;
align-items: center;
flex-shrink: 0;

	}
	}

	@media (max-width: 850px) {
  
		font-size: 14px;
		font-weight: 600;
		display: inline-flex;
height: 44px;
padding: 8px 32px;
justify-content: center;
align-items: center;
gap: 10px;
flex-shrink: 0;
border-radius: 4px;
  }
	
`;

const Button = ({ type, variant, onclick, children, size}) => {
	return (
		<Buttonstyles type={type} variant={variant} onClick={onclick} size={size} >

			{children}
    
		</Buttonstyles>
		
		
	);
};
  
        
           
    
    


export default Button;