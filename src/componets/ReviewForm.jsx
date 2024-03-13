import React, { useState } from "react";
import ReviewsList from "./ReviewsList";

function ReviewForm() {
  const [reviewFormData, setReviewFormData] = useState({
    title: "",
    rating: "",
    description: "",
  });
  const [reviews, setReviews] = useState([]);
  const [showReviewForm, setShowReviewForm] = useState(false);

  // console.log(reviewFormData);
  const handleChange = (e) => {
    setReviewFormData({ ...reviewFormData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!reviewFormData.title || !reviewFormData.rating) return;

    setReviews([...reviews, reviewFormData]);
    setShowReviewForm(true);
    setReviewFormData({
      title: "",
      rating: "",
      description: "",
    });
  };
  const handleReset = () => {
    setReviewFormData({
      title: "",
      rating: "",
      description: "",
    });
  };

  const deleteReview = (reviewToDelete) => {
    const filteredReviews = reviews.filter(
      (review) => review !== reviewToDelete
    );
    setReviews(filteredReviews);
  };

  return (
    <div>
      <h4 className="mb-4 text-2xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-5xl text-center">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          Review Application
        </span>
      </h4>
      <div className="flex items-center justify-center">
        <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
          <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={reviewFormData.title}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Rating
              </label>
              <input
                type="text"
                id="rating"
                name="rating"
                value={reviewFormData.rating}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>

            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={reviewFormData.description}
                onChange={handleChange}
                rows="4"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Leave a description..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
            <button
              onClick={handleReset}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ms-4"
              type="button"
            >
              Reset
            </button>
          </form>
        </div>
      </div>

      {showReviewForm && (
        <div className="flex items-center justify-center mt-5">
          <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
            <ReviewsList reviews={reviews} deleteReview={deleteReview} />
          </div>
        </div>
      )}
    </div>
  );
}

export default ReviewForm;
