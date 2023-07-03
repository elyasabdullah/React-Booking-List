import React, {useContext} from "react"
import { AppContext } from "../App"

export default function BookList() {
	const {bookListData, themeState, setBookListData} = useContext(AppContext);
	let ListElements = bookListData.map((ele:any, index: number) => {
		return (
			<tr
			className={themeState ? 'light' : 'dark'}
			key={index}>
				<td className={ele.completed ? "completed": ""}
					onClick={() => {
						setBookListData((prev:any) => {
							return (
								prev.map((ele:any, i:any) => {
									return i !== index
									?
									ele :{...ele, completed: !ele.completed}
								})
							)
						})
				}}
				>{ele.bookTitle}</td>
				<td>{ele.authorName}</td>
				<td>{ele.ISBN}</td>
				<td className="deletBookTd">
					<div 
						onClick={(e) => {
							setBookListData((prev:any) => {
								let newArr = [];
								for(let i = 0; i < prev.length; i++) {
									if(i === index) {
										continue;
									}else {
										newArr.push(prev[i])
									}
								}
								return [
									...newArr
								]
							})
							
						}} 
						className="deleteBook"
					>
						<span className="bar"></span>
						<span className="bar"></span>
					</div>
				</td>
			</tr>
		)
	})
	return (
	<div className="bookList">
		<div className="container">
			<table>
				<thead className={themeState ? 'light' : 'dark'}>
					<tr>
						<th>Title</th>
						<th>Author</th>
						<th>ISBN</th>
					</tr>
				</thead>
				<tbody>
					{ListElements}
				</tbody>
			</table>
		</div>
	</div>
	)
}
