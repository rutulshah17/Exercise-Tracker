import React from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

class CreateExercise extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			username: '',
			description: '',
			duration: 0,
			date: new Date(),
			users: []
		}
	}

	componentDidMount = () => {
		this.setState({ 
			users: ['Test User'], 
			username: 'test user' 
		});
	}

	onChangeUserName = (e) => {
		this.setState({ username: e.target.value });
	}

	onChangeDescription = (e) => {
		this.setState({ description: e.target.value });
	}

	onChangeDuration = (e) => {
		this.setState({ duration: e.target.value });
	}

	onChangeDate = (date) => {
		this.setState({ date: date });
	}

	handleSubmit = event => {
		event.preventDefault();

		const exercise = {
			username: this.state.username,
			description: this.state.description,
			duration: this.state.duration,
			date: this.state.date
		}

		console.log(exercise);

		window.location = '/'
	}

	render() {
		return (
			<div>
				<h3>Create New Exercise Log</h3>
				
				<form onSubmit={this.handleSubmit}>
				
					<div className="form-group"> 
						<label>Username: </label>
						<select ref="userInput" required className="form-control"
						defaultValue={this.state.username} onChange={this.onChangeUsername}>
						{
							this.state.users.map( (user) => (
								<option key={user} defaultValue={user}> {user} </option>
								)
							)
						}
						</select>
					</div>
				
					<div className="form-group"> 
						<label>Description: </label>
							<input  type="text" required className="form-control"
							defaultValue={this.state.description} onChange={this.onChangeDescription} />
					</div>

					<div className="form-group">
						<label>Duration (in minutes): </label>
						<input type="text" className="form-control"
						defaultValue={this.state.duration} onChange={this.onChangeDuration} />
					</div>
				
					<div className="form-group">
						<label>Date: </label>
						<div>
							<DatePicker selected={this.state.date} onChange={this.onChangeDate} />
						</div>
					</div>

					<div className="form-group">
						<input type="submit" defaultValue="Create Exercise Log" className="btn btn-primary" />
					</div>

				</form>
			</div>
		);
	}
}

export default CreateExercise;