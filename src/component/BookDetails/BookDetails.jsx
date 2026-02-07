import { useParams } from "react-router";
import useBookDataLoad from "../../Hooks/useBookDataLoad";
import { useEffect } from "react";
import { BallTriangle } from "react-loader-spinner";


const BookDetails = () => {


    const { data, loader } = useBookDataLoad();
    const { bookID } = useParams();

    const book = data.find(book => book.bookId === parseInt(bookID));

    // const { bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = book




    return (
        <div>

            <div className="flex justify-center">
                {
                    loader && <BallTriangle height={100} width={100} radius={5} color="#4fa94d" ariaLabel="ball-triangle-loading" wrapperStyle={{}} wrapperClass="" visible={true} />
                }
            </div>


            <div className="flex  my-5 gap-10">

                <div className="p-7 bg-gray-300 ">
                    <img className="rounded w-full h-full " src={book?.image} alt="" />
                </div>

                <div className="text-gray-600  font-semibold space-y-3 flex-1 h-full grow-2">
                    <h2 className="text-4xl font-bold text-black">{book?.bookName}</h2>
                    <p>By: {book?.publisher}</p>
                    <hr />
                    <p>{book?.category}</p>
                    <hr />
                    <p><span className="text-black font-bold">Review:</span> {book?.review}{book?.review}</p>
                    <p className="flex items-center gap-10"><span className="text-black font-bold">Tags: </span>
                        {book?.tags.map((tag, idx) => <p className="p-2 rounded-full bg-green-50 text-green-600" key={idx}> #{tag}</p>)}</p>
                    <hr />
                    <div className="flex gap-20">
                        <div className="space-y-3">
                            <p className="flex gap-20"><span>Number of Pages:</span> </p>
                            <p className="flex gap-20"><span>Publisher:</span> </p>
                            <p><span>Year of Publishing:</span> </p>
                            <p><span>Rating:</span> </p>
                        </div>
                        <div className="space-y-3">
                            <div className="text-black ">{book?.totalPages}</div>
                            <div className="text-black ">{book?.publisher}</div>
                            <div className="text-black ">{book?.yearOfPublishing}</div>
                            <div className="text-black ">{book?.rating}</div>
                        </div>
                    </div>
                    <div className="space-x-5 mt-10">
                        <button className="btn btn-success btn-outline">Read</button>
                        <button className="btn btn-info text-white">Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;