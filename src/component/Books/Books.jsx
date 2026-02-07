import { useState } from "react";
import useBookDataLoad from "../../Hooks/useBookDataLoad";
import BookCard from "./BookCard/BookCard";
import { BallTriangle } from "react-loader-spinner";



const Books = () => {

    const { data, loader } = useBookDataLoad();
    const [isShowAll, setIsShowAll] = useState(true)




    return (

        <div className="my-16">
            <h1 className="text-center text-4xl font-bold">Books</h1>
            <div className="flex justify-center">
                {
                   loader&& <BallTriangle
                        height={100}
                        width={100}
                        radius={5}
                        color="#4fa94d"
                        ariaLabel="ball-triangle-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                    />
                }
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
                {
                    isShowAll ? data.slice(0, 6).map(book => <BookCard key={book.bookId} book={book}></BookCard>) : data.map(book => <BookCard key={book.bookId} book={book}></BookCard>)
                }
            </div>
            <div className={`flex justify-center mt-3 `}>
                <button onClick={() => setIsShowAll(!isShowAll)} className="text-white btn btn-success">{isShowAll ? "SHOW ALL" : "SHOW LESS"}</button>
            </div>
        </div>
    );
};

export default Books;