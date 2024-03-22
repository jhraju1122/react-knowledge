import PropTypes from 'prop-types'; 
import { FaRegBookmark  } from 'react-icons/fa';
const Blog = ({ blog, handleAddToBookmarks }) => {
   const {title, cover, reading_time,  author , author_img, posted_date , hashtags} = blog;
    return (
        <div className='mb-20'>
            <img className='w-full mb-8' src={cover} alt={`Cover picture of the author {title}`} />

        <div className='flex justify-between'>
            <div className='flex'>
                <img className='w-14 h-14 rounded-[50%]' src={author_img} alt="" />
                <div className='ml-6'>
                    <h3 className='text-2xl'>{author}</h3>
                    <p>{posted_date}</p>
                </div>
            </div>
            <div>
                <span>{reading_time} read</span>
                <button onClick={handleAddToBookmarks} className='ml-2 text-red-600 text-2xl'><FaRegBookmark ></FaRegBookmark></button>
            </div>
        </div>

            <h2 className="text-4xl">{title}</h2>
           <p>
            {
                hashtags.map((hash, idx) => <span key={idx}><a>#{hash}</a></span>)
            }
           </p>
        </div>
    );
};

Blog.prototypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;