import './post.css'

export default function Post() {
    return (
        <div className="post">
            <img className="postImg" src="https://www.fodors.com/wp-content/uploads/2018/06/Greece-Best-Beaches-Hero.jpg" alt="" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Travel</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">
                    Lorem ipsum dolor sit amet.
                </span>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, rerum et. Voluptatem, eligendi doloremque. Suscipit tenetur quisquam recusandae culpa. Fuga voluptatibus id, esse dicta asperiores sequi dolor maiores consequatur minima. id, esse dicta asperiores sequi dolor maiores consequatur minima.
            </p>
        </div>
    )
}
