import React from "react";

function ReviewsList({ reviews, deleteReview }) {
  const handleDelete = (reviews) => {
    deleteReview(reviews);
  };

  return (
    <div>
      <h4 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-4xl dark:text-white">
        Reviews
      </h4>
      {reviews.length === 0 ? (
        <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
          No reviews yet.
        </p>
      ) : (
        <ul>
          {reviews.map((review, index) => (
            <li key={index}>
              <div className="bg-white p-8 rounded shadow-md max-w-md w-full mb-2">
                <h3>{review.title}</h3>
                <p>Rating: {review.rating}</p>
                {description && <p>{review.description}</p>}
                <button
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
                  type="button"
                  onClick={() => handleDelete(review)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ReviewsList;
