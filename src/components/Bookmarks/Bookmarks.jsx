import Prop from 'react';
import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks}) => {
    return (
        <div className='md:w-1/3 bg-slate-400 ml-4'>
            <h2 className='text-3xl text-center  '>Bookmarks Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map(bookmarks => <Bookmark key={bookmark.id}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.PropTypes = {
bookmarks: PropTypes.array
}

export default Bookmarks;
