import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router";



const BookCard = ({ book }) => {

    const { image, bookName, tags, author, category, rating,bookId } = book;

    // console.log(book)

    return (
        <Link to={`/bookDetails/${bookId}`}>
            <div className=" flex flex-col h-full card bg-base-200 shadow-sm">
                <figure className="px-5 mt-5">
                    <img
                        src={image}
                        alt={bookName}
                        className="rounded w-3/4 h-72  " />
                </figure>
                <div className="card-body">
                    <div className="flex gap-10">
                        {
                            tags.map((tag, idx) => <p className="p-2 rounded-full text-center font-semibold text-green-500 bg-green-100" key={idx}>{tag}</p>)
                        }
                    </div>
                    <div className="space-y-5">
                        <h2 className="card-title text-2xl font-bold">{bookName}</h2>
                        <p className=" font-semibold text-gray-700">By: {author}</p>
                        <div className="border-b-2 border-gray-700 text-gray-700 border-dashed"></div>
                        <div className="flex justify-between items-center">
                            <p className="font-semibold text-gray-700">{category}</p>

                            <span className="text-gray-700 flex items-center gap-2">
                                <p className="font-semibold text-gray-700">{rating}</p>
                                <FaRegStar />
                            </span>

                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default BookCard;