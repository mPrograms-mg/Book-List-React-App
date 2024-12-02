import { useState, useEffect } from "react";
import { fetchBooks } from "../../services/Api";
import Navbar from "../Navbar/Navbar";

export default function BookTable() {
  const [books, setBooks] = useState([]);

  // Fetch books from API
  useEffect(() => {
    const getBooks = async () => {
      const data = await fetchBooks();
      setBooks(data.books);
    };
    getBooks();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Author</th>
            </tr>
          </thead>
          <tbody>
            {books.map((row, id) => (
              <tr key={id}>
                <td>{id + 1}</td>
                <td>{row.title}</td>
                <td>{row.author}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
