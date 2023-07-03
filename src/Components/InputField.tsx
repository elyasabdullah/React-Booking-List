import React, {useState, useContext} from "react"
import { AppContext } from "../App";

export default function InputField() {
	const {formData, themeState, setFormData, setBookListData} = useContext(AppContext);
	const handleFormChange = (e:any) => {
		setFormData((prev:any) => {
			const {name, value} = e.target;
			return {
				...prev,
				[name]:value
			}
		})
	}
	const handleSubmit = (e:any)=> {
		if(formData.ISBN === "" || formData.authorName === "" || formData.bookTitle === "") {
			e.preventDefault();
		}else {
			setBookListData((prev:any) => {
				return [
					...prev,
					{
						bookTitle: formData.bookTitle,
						authorName: formData.authorName,
						ISBN: formData.ISBN,
						completed: false
					}
				]
			})
		}
	}
	return (
		<div className="inputField">
			<div className="container">
				<form>
					<div className="bookTitle">
						<label htmlFor="bookTitle">Book Title</label>
						<input id="bookTitle"
							className={themeState ? 'light': 'dark'}
							type="text"
							name="bookTitle"
							value={formData.bookTitle}
							onChange={handleFormChange}
						/>
					</div>
					<div className="authorName">
						<label htmlFor="authorName">Author</label>
						<input id="authorName"
							className={themeState ? 'light': 'dark'}
							type="text"
							name="authorName"
							value={formData.authorName}
							onChange={handleFormChange}
						/>
					</div>
					<div className="ISBN">
						<label htmlFor="ISBN">ISBN</label>
						<input
							className={themeState ? 'light': 'dark'}
							id="ISBN"
							type="text"
							name="ISBN"
							value={formData.ISBN}
							onChange={handleFormChange}
						/>
					</div>
					<div>
						<input 
							type="button" 
							value={'Submit'}
							onClick={handleSubmit}
						/>
					</div>
				</form>
			</div>
		</div>
	)
}
