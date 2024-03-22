import PropTypes from 'prop-types'; 
const Blog = ({ blog }) => {
   const {title, cover, reading_time,  author , author_img } = blog;
    return (
        <div>
            <img src={cover} alt={`Cover picture of the author {title}`} />

        <div className='flex justify-between'>
            <div>
                <img className='w-14 rounded-[50%]' src={author_img} alt="" />
            </div>
            <div>
                <span>{reading_time} read</span>
            </div>
        </div>

            <h2 className="text-4xl">{title}</h2>
           
        </div>
    );
};

Blog.prototypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;