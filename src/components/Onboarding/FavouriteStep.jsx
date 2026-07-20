import React, { useState } from 'react'


const authors = [
    "Chinua Achebe",
    "Chimamanda Ngozi Adichie",
    "Ben Okri",
    "Ngũgĩ wa Thiong'o",
    "Tomi Adeyemi",
    "Akwaeke Emezi",
    "Wole Soyinka",
    "Helon Habila"
];

const books = [
    "Things Fall Apart",
    "Purple Hibiscus",
    "Half of a Yellow Sun",
    "The Famished Road",
    "Freshwater",
    "The Fishermen",
    "Stay With Me",
    "Children of Blood and Bone"
];


const FavouriteStep = ({ formData, setFormData, nextStep, previousStep }) => {
    const [authorSearch, setAuthorSearch] = useState("");
    const [bookSearch, setBookSearch] = useState("");

    const addAuthor = (author) => {

        if (formData.favoriteAuthors.includes(author))
            return;

        setFormData({
            ...formData,
            favoriteAuthors: [
                ...formData.favoriteAuthors,
                author
            ]
        });

        setAuthorSearch("");
    }

    const addBook = (book) => {

        if (formData.favoriteBooks.includes(book))
            return;

        setFormData({
            ...formData,
            favoriteBooks: [
                ...formData.favoriteBooks,
                book
            ]
        });

        setBookSearch("");

    };

    const removeAuthor = (author) => {

        setFormData({
            ...formData,
            favoriteAuthors: formData.favoriteAuthors.filter(
                item => item !== author
            )
        });

    }

    const removeBook = (book) => {

        setFormData({
            ...formData, favoriteBooks: formData.favoriteAuthors.filter(item => item !== book)
        })
    }


    return (
        <div className="favorites-step">

            <h2>
                Favorite Authors & Books
            </h2>

            <p>
                Pick a few to personalize your recommendations.
            </p>

            {/* AUTHORS */}

            <input
                placeholder="Search authors..."
                value={authorSearch}
                onChange={(e) => setAuthorSearch(e.target.value)}
            />

            <div className="suggestions">

                {authors
                    .filter(author =>
                        author
                            .toLowerCase()
                            .includes(authorSearch.toLowerCase())
                    )
                    .map(author => (

                        <button
                            key={author}
                            type="button"
                            onClick={() => addAuthor(author)}
                        >
                            {author}
                        </button>

                    ))}

            </div>

            <div className="selected-list">

                {formData.favoriteAuthors.map(author => (

                    <button
                        key={author}
                        type="button"
                        className="selected-chip"
                        onClick={() => removeAuthor(author)}
                    >
                        {author} ✕
                    </button>

                ))}

            </div>

            {/* BOOKS */}

            <input
                placeholder="Search books..."
                value={bookSearch}
                onChange={(e) => setBookSearch(e.target.value)}
            />

            <div className="suggestions">

                {books
                    .filter(book =>
                        book
                            .toLowerCase()
                            .includes(bookSearch.toLowerCase())
                    )
                    .map(book => (

                        <button
                            key={book}
                            type="button"
                            onClick={() => addBook(book)}
                        >
                            {book}
                        </button>

                    ))}

            </div>

            <div className="selected-list">

                {formData.favoriteBooks.map(books => (

                    <button
                        key={books}
                        type="button"
                        className="selected-chip"
                        onClick={() => removeBook(books)}
                    >
                        {books} ✕
                    </button>

                ))}

            </div>

            <div className="step-buttons">

                <button
                    className="secondary-btn"
                    onClick={previousStep}
                >
                    Back
                </button>

                <button
                    className="primary-btn"
                    onClick={nextStep}
                >
                    Continue
                </button>

            </div>

        </div>
    )
}

export default FavouriteStep
