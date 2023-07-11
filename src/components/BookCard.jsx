const BookCard = ({
    book, 
    handleDelete, 
    handleRead,
    handleModal,
    setEditItem,
    setShowEditModal,
    }) => {
    return(
        <div className="d-flex border shadow p-3 justify-content-between align-items-center">
            <div>
                <h5>{book.title}</h5>
                <p>{book.date}</p>
            </div>
            <div className="btn-group">
        <button className="btn btn-danger" onClick={() => handleModal(book.id)}>
         Delete
        </button>
        <button
          className="btn btn-primary"
          onClick={() => {  
            setEditItem(book);
            setShowEditModal(true);
        }}
        >
            Edit
            </button>
            <button className="btn btn-success" onClick={() => handleRead(book)}>
            {book.isRead ? 'Okundu' : 'Okunmadı'}
          </button>
        </div>
        </div>
    )
}

export default BookCard