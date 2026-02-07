

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-125">
            <div className=" ">
                <div className="flex items-center justify-between gap-28 ">
                    <div className="space-y-5">
                        <h1 className="text-5xl font-bold leading-20">Books to freshen up <br /> your bookshelf</h1>
                        <button className="btn btn-success text-white">View The List</button>
                    </div>
                    <div className="">
                        <img className="w-3/4 rounded" src="https://covers.openlibrary.org/b/id/8274151-L.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;