import React, {useState} from "react";


function Credit(props) {
	const [amount, setAmount] = useState();
	const handleSubmit = (event) => {
		event.preventDefault();
		const updatedBalance = props.accBalance + parseFloat(amount);
		console.log(updatedBalance);
		props.setAccBalance(updatedBalance);
	};

	return (
    <div>
		<h1>Credit Page</h1>
		<p>Your Account Balance: {props.accBalance}</p>
			<form onSubmit={handleSubmit}>
				<label>
					Amount: 
					<input type="number" value={amount} onChange={(e)=> setAmount(e.target.value)}/>
				</label>
				<label>
					Description: 
					<input type="text" />
				</label>
				<input type="submit" />
			</form>
    </div>
  );
}

export default Credit;